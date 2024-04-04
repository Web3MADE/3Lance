import { ContractTransaction, Signature } from "ethers";
import { useState } from "react";
// ethers populateTransaction creates an unsigned transaction for Gelato to sign and execute
// the gelato request would be passed from frontend signer to this API
export function useAttestProject() {
  const [attestProject, setAttestProject] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const fetchAttestProject = async (
    signature: Signature,
    unsignedTransaction: Promise<ContractTransaction>,
    chainId: BigInt
  ) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/account/project", {
        method: "POST",
        body: JSON.stringify({ signature, unsignedTransaction, chainId }),
      });
      const data = await response.json();
      setAttestProject(data);
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };

  return { attestProject, loading, error, fetchAttestProject };
}
