import { SEPOLIA_CHAIN_ID } from "@/app/config/Constants";
import { useWallets } from "@privy-io/react-auth";
import { Signature } from "ethers";

export function useSignature() {
  const { ready: isWalletReady, wallets } = useWallets();
  const wallet = wallets[0];

  const getSignature = async (message: string) => {
    if (!isWalletReady) {
      console.error("wallet not ready");
      return null;
    }

    wallet.switchChain(SEPOLIA_CHAIN_ID);
    const signer = (await wallet.getEthersProvider()).getSigner();
    const signature = await signer.signMessage(message);
    /** @dev split signature into v, r, s */
    return Signature.from(signature);
  };

  return { getSignature, wallet, isWalletReady };
}
