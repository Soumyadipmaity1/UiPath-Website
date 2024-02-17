import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/main/MainLayout";
import { SignInPage } from "../layout/signin/SignInPage";
import { AdminLayout } from "../layout/adminDashboard/DashboardLayout";
import { AdminMembers } from "../components/adminDashboard/AdminMembers";
import { MemberEdit } from "../components/adminDashboard/MemberEdit";
import { AdminProjects } from "../components/adminDashboard/AdminProjects";
import { AdminEvents } from "../components/adminDashboard/Events";
import { AdminDashboard } from "../components/adminDashboard/Dashboard";
import { AdminPosts } from "../components/adminDashboard/AdminPosts";
import { PostEdit } from "../components/adminDashboard/PostEdit";
import { DomainLayout } from "../layout/domain/DomainLayout";
export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [{ path: "*", element: <MainLayout /> }],
    },
    { path: "/domains", element: <DomainLayout /> },
    {
      path: "/signin",
      element: <SignInPage />,
      children: [{ path: "*", element: <SignInPage /> }],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        { path: "dashboard", element: <AdminDashboard /> },
        { path: "members", element: <AdminMembers /> },
        { path: "members/:id", element: <MemberEdit /> },
        { path: "projects", element: <AdminProjects /> },
        { path: "events", element: <AdminEvents /> },
        { path: "posts", element: <AdminPosts /> },
        { path: "posts/:id", element: <PostEdit /> },
      ],
    },
  ]);
}
