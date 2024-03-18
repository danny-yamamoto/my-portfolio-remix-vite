import type { Experience } from "./types";

export async function getExperience() {
  const experience: Experience[] = [
    {
      id: "2023-10",
      company: "Retail AI Inc.",
      position: "Lead Engineer",
    },
    {
      id: "2022-09",
      company: "Retail AI X Inc.",
      position: "Lead Engineer",
    },
    {
      id: "2021-06",
      company: "Retail AI X Inc.",
      position: "Software Engineer",
    },
    {
      id: "2020-06",
      company: "Retail AI Engineering Inc.",
      position: "Software Engineer",
    },
  ];
  return experience;
}
