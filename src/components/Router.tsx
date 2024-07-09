import { Routes, Route, Navigate } from "react-router-dom";
// pages
import HomePage from "../pages/home";
import PostDetail from "../pages/posts/detail";
import PostNew from "../pages/posts/new";
import PostEdit from "../pages/posts/edit";
import NotificationsPage from "../pages/notifications";
import LoginPage from "../pages/users/login";
import SignupPage from "../pages/users/signup";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/posts/:id" element={<PostDetail />}></Route>
      <Route path="/posts/new" element={<PostNew />}></Route>
      <Route path="/posts/edit/:id" element={<PostEdit />}></Route>
      <Route path="/notifications" element={<NotificationsPage />}></Route>
      <Route path="/users/login" element={<LoginPage />}></Route>
      <Route path="/users/login" element={<SignupPage />}></Route>
      <Route path="*" element={<Navigate replace to="/" />}></Route>
    </Routes>
  );
}

export default Router;
