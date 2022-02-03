import { memo, VFC } from "react";
import { Route, Routes } from "react-router-dom";

import { Page404 } from "../components/pages/Page404";
import { Home } from "../components/pages/Home ";
import { Login } from "../components/pages/Login";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const Router: VFC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/user_management" element={<UserManagement />} />
      <Route path="/home/setting" element={<Setting />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
