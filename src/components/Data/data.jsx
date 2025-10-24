export const education = [
  {
    universityName: "University of Central Florida",
    degree: "Bachelor of Science",
    field: "Computer Science",
    location: "Orlando, FL",
    startDate: "2023-05",
    endDate: "2027-02",
    id: 1,
  },
];

export const gen = {
  name: "Jane Doe",
  phone: "123-456-7891",
  email: "jane.doe@gmail.com",
  address: "Orlando, FL",
};
export const experience = [
  {
    position: "Software Developer",
    companyName: "SEES Systems Inc.",
    location: "Seattle, WA",
    startDate: "2023-02",
    endDate: "2024-02",
    description: `Developed and maintained web applications using React, Node.js, and TypeScript, improving page load performance.
Collaborated with senior engineers to debug and optimize existing code.`,
    id: 2,
  },
  {
    position: "Software Developer",
    companyName: "Phantom Tech Solutions",
    location: "Austin, TX",
    startDate: "2024-02",
    endDate: "2025-01",
    description: `Designed and deployed backend services using Python, Django, and PostgreSQL, improving API response time`,
    id: 3,
  },
];
export const skills = [
  { skill: "C/C++", id: 4 },
  { skill: "React", id: 5 },
  { skill: "HTML/CSS", id: 6 },
  { skill: "Javascript", id: 7 },
  { skill: "Git", id: 8 },
];

export function conv(str) {
  const a = str.split("-");

  const year = a[0];
  let month = Number(a[1]);

  switch (month) {
    case 1:
      month = "Jan";
      break;

    case 2:
      month = "Feb";
      break;

    case 3:
      month = "March";
      break;

    case 4:
      month = "April";
      break;

    case 5:
      month = "May";
      break;

    case 6:
      month = "June";
      break;

    case 7:
      month = "July";
      break;

    case 8:
      month = "Aug";
      break;

    case 9:
      month = "Sept";
      break;

    case 10:
      month = "Oct";
      break;

    case 11:
      month = "Nov";
      break;

    case 12:
      month = "Dec";
      break;
  }

  return month + " " + year;
}
