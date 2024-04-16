import JobBoard from "../frontend/components/job-board/JobBoard";

export default async function page({ params }: { params: { id: string } }) {
  const res = await fetch("http://localhost:3000/api/jobs");
  const { jobs } = await res.json();

  return <JobBoard jobs={jobs} />;
}
