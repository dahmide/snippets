import { useCallback, useMemo } from "react";
import { useMutation } from "@tanstack/react-query";
import { useWallet } from "@@contexts/walletContext";
import { useContracts } from "@@contexts/contractsContext";

const validateFund = ({ token, quantity }) => {
    if (token?.assets?.length <= 1) {
        throw new Error("useFund: Invalid");
    }
    if (!quantity || quantity <= 0) {
        throw new Error("useFund: Invalid");
    }
};

export default function useFund(
    { token, quantity },
    onMutate,
    { onError, onSuccess, onSettled } = {}
) {
    if (typeof onMutate !== "function") {
        throw new Error("useFund: onMutate must be a function");
    }
    const { mint, redeem } = useContracts();
    const {
        connectWallet,
        walletConnectAddress: address,
        walletConnectTokenBalances: tokenBalances
    } = useWallet();

    const balances = useMemo(() => {
        validateFund({ token, quantity });

        const bullBalance = tokenBalances?.[token.assets[0].categoryId] || 0n;
        const bearBalance = tokenBalances?.[token.assets[1].categoryId] || 0n;
        const fundBalance = tokenBalances?.[token.categoryId] || 0n;

        const requiredBull = BigInt(
            Math.floor(quantity * token.assets[0].amount)
        );
        const requiredBear = BigInt(
            Math.floor(quantity * token.assets[1].amount)
        );

        return {
            hasEnoughBull: bullBalance >= requiredBull,
            hasEnoughBear: bearBalance >= requiredBear,
            fundBalance
        };
    }, [tokenBalances, token, quantity]);

    const actionFn = useCallback(() => {
        validateFund({ token, quantity });
        return onMutate({ connectWallet, address, mint, redeem });
    }, [onMutate, connectWallet, address, mint, redeem, token, quantity]);

    const mutation = useMutation({
        mutationFn: actionFn,
        onError,
        onSuccess,
        onSettled
    });

    return useMemo(
        () => ({
            ...mutation,
            ...balances,
            address
        }),
        [address, mutation, balances]
    );
}
