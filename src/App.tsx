import { useEffect } from "react";
// import "./App.css";
import {
  personalDetails,
  skillsAndTechnologies,
  employmentHistory,
} from "./contents.json";

function App() {
  useEffect(() => {
    const pageTitle = document.querySelector("title") as HTMLTitleElement;
    pageTitle.textContent = `${personalDetails.preferredName} ${personalDetails.lastName}`;
  }, []);

  return (
    <>
      <pre>{JSON.stringify(personalDetails)}</pre>
      <pre>{JSON.stringify(skillsAndTechnologies)}</pre>
      <pre>{JSON.stringify(employmentHistory)}</pre>
    </>
  );
}

export default App;
