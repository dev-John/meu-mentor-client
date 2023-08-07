export const generateRandomMentor = () => {
  const getRandomItemFromArray = (array: string | any[]) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const generateRandomEmail = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz1234567890";
    let email = "";
    for (let i = 0; i < 10; i++) {
      email += chars[Math.floor(Math.random() * chars.length)];
    }
    return `${email}@mail.com`;
  };

  const names = [
    "Michael Kyle",
    "John Doe",
    "Jane Smith",
    "Robert Johnson",
    "Emily Brown",
  ];
  const occupations = [
    "Gerente de Desenvolvimento",
    "Software Engineer",
    "Data Analyst",
    "Web Developer",
    "Product Manager",
  ];
  const stackOptions = [
    ["Comunicação", "JS", "NodeJS"],
    ["React", "Python", "MongoDB"],
    ["Angular", "Java", "SQL"],
    ["Vue.js", "C#", "PostgreSQL"],
    ["UI/UX Design", "PHP", "Firebase"],
  ];

  const getRandomUser = () => ({
    name: getRandomItemFromArray(names),
    email: generateRandomEmail(),
    occupation: getRandomItemFromArray(occupations),
  });

  const getRandomStack = () => getRandomItemFromArray(stackOptions);

  const mentor = {
    user: getRandomUser(),
    isAvailable: Math.random() < 0.5,
    stack: getRandomStack(),
  };

  return mentor;
};
