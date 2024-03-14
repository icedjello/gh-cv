import { useEffect } from "react";
import { personalDetails, skillsAndTech, jobHistory } from "./contents.json";

import SkillsColumns from "./components/SkillsColumns";
import PersonalDetails from "./components/PersonalDetails";
import EmploymentHistory from "./components/EmploymentHistory";

export default function App() {
  useEffect(() => {
    const pageTitle = document.querySelector("title") as HTMLTitleElement;
    pageTitle.textContent = `${personalDetails.preferredName} ${personalDetails.lastName}`;
  }, []);

  return (
    <>
      <PersonalDetails {...personalDetails} />
      <SkillsColumns {...skillsAndTech} />
      <EmploymentHistory {...jobHistory} />
    </>
  );
}
