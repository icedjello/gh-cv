import JobEntry, { JobEntryProps } from "./JobEntry";

type EmploymentHistoryProps = {
  title: string;
  jobs: JobEntryProps[];
};

export default function EmploymentHistory({
  title,
  jobs,
}: EmploymentHistoryProps) {
  return (
    <>
      <h2>{title}</h2>
      {jobs.map((j) => (
        <JobEntry {...j} key={j.job} />
      ))}
    </>
  );
}
