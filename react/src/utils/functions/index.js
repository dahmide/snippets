    const { mint } = useContracts();
    const { connectWallet, walletConnectAddress, walletConnectTokenBalances } = useWallet();

import { useMutation } from "@tanstack/react-query";

const mintMutation = useMutation({
  mutationFn: async () => {
    if (!walletConnectAddress) {
      await connectWallet();
      return;
    }

    return await mint(fundToken, BigInt(amount));
  },
});

