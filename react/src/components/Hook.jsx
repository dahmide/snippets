export default function useFunds(mutationFn, {
    onError,
    onSuccess,
    onSettled
} = {}) {
    const wallet = useWallet();
    const contracts = useContracts();
    const mutations = useMutation({
        mutationFn: () => {
            if (typeof mutationFn !== "function") {
                throw new Error("mutationFn must be a function");
            }
            return mutationFn({
                ...wallet,
                ...contracts
            })
        },
        onError,
        onSuccess,
        onSettled,
    });
    
    return {
        ...mutations,
        ...contracts,
        ...wallet,
    };
}