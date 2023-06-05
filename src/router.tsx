import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MentorBoard from "./pages/MentorBoard/MentorBoard";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<MentorBoard />}></Route>)
);

export default router;
