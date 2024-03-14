type PersonalDetailsProps = {
  firstName: string;
  lastName: string;
  email: string;
  homeTown: string;
  country: string;
};

export default function PersonalDetails({
  firstName,
  lastName,
  email,
  homeTown,
  country,
}: PersonalDetailsProps) {
  return (
    <>
      <h1>
        {firstName} {lastName}
      </h1>
      <span>
        <p>{email}</p>
        <p>
          {homeTown}, {country}
        </p>
      </span>
    </>
  );
}
