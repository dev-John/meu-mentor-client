import MentorBoard from "../pages/MentorBoard/MentorBoard";

type RouteTypes = {
  url: string;
  title: string;
  Component: () => JSX.Element;
};

// TODO - update the app to use this hook later
export const useRoutes = () => {
  const routes: RouteTypes[] = [
    {
      url: "/",
      title: "Mentor Board",
      Component: MentorBoard,
    },
  ];

  return { routes };
};
