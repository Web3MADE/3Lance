import { useState } from "react";

// This gets called by freelancer when attesting to starting & finishing a job
// TODO: how to attest via API?
export function useAttestJob() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const attestJob = async (
    schemaUID: string,
    freelancer: string,
    client: string,
    encodedData: string
  ) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/job", {
        method: "POST",
        body: JSON.stringify({ schemaUID, freelancer, client, encodedData }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };
  return { attestJob, loading, error };
}
