export type JobEntryProps = {
  job: string;
  startDate: string;
  endDate: string;
  duties: string[];
};

export default function JobEntry({
  job,
  startDate,
  endDate,
  duties,
}: JobEntryProps) {
  const formatDate = (dateAsString: string) => {
    const date = new Date(dateAsString);
    const legibleDate = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "long",
    }).format(date);
    return legibleDate;
  };

  const legibleStartDate = formatDate(startDate);
  const legibleEndDate = formatDate(endDate);
  return (
    <>
      <span>
        <h3>{job}</h3>
        <h3>
          {legibleStartDate} - {legibleEndDate}
        </h3>
      </span>
      <ul>
        {duties.map((d, i) => (
          <li key={`${job}-d-${i}`}>{d}</li>
        ))}
      </ul>
    </>
  );
}
