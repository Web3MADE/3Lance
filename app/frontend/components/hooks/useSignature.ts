import { OPTIMISM_SEPOLIA_CHAIN_ID } from "@/app/config/Constants";
import { useWallets } from "@privy-io/react-auth";

export function useSignature() {
  const { ready: isWalletReady, wallets } = useWallets();
  const wallet = wallets[0];

  const getSignature = async (message: string) => {
    if (!isWalletReady) {
      console.error("wallet not ready");
      return "Wallet not ready";
    }

    wallet.switchChain(OPTIMISM_SEPOLIA_CHAIN_ID);
    const signer = (await wallet.getEthersProvider()).getSigner();
    const signature = await signer.signMessage(message);
    return signature;
  };

  return { getSignature, wallet };
}
