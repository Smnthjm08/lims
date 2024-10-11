import AdminAppBar from "@/components/admin/admin-app-bar";
import React from "react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="admin-layout">
      <AdminAppBar />
      <main>
        {children}</main>
    </div>
  );
};

export default AdminLayout;
