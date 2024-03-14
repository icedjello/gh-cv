type ColumnsProps = {
  title: string;
  values: string[];
};

export default function SkillsColumns({ title, values }: ColumnsProps) {
  return (
    <>
      <h2>{title}</h2>
      <ul className="grid grid-cols-3 gap-2">
        {values.map((val) => (
          <li key={val}>{val}</li>
        ))}
      </ul>
    </>
  );
}
