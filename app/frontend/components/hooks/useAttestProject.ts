import { useState } from "react";
// ethers populateTransaction creates an unsigned transaction for Gelato to sign and execute
// the gelato request would be passed from frontend signer to this API
export function useAttestProject() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const attestProject = async (
    chainId: BigInt,
    contractAddress: string,
    unsignedTransaction: string
  ) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/project", {
        method: "POST",
        body: JSON.stringify({ chainId, contractAddress, unsignedTransaction }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };

  return { attestProject, loading, error };
}
