import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 font-bold text-dark-200 bg-white shadow-md">
        <div className="p-4 font-bold text-xl border-b">Admin Panel</div>
        <nav className="p-4 space-y-2">
          <Link href="admin" className="block p-2 rounded font-bold text-dark-200 hover:bg-gray-200">
            Dashboard
          </Link>
          <Link href="admin/usersmanagement" className="block p-2 rounded font-bold text-dark-200 hover:bg-gray-200">
            User Management
          </Link>
          <Link href="admin/healthmetricsoverview" className="block p-2 rounded font-bold text-dark-200 hover:bg-gray-200">
            Health Metrics Management
          </Link>
          <Link href="admin/contentmanagement" className="block p-2 rounded font-bold text-dark-200 hover:bg-gray-200">
            Content Management
          </Link>
          <Link href="admin/report_analytic" className="block p-2 rounded font-bold text-dark-200 hover:bg-gray-200">
            Report Analytic
          </Link>
          <Link href="admin/settings" className="block p-2 rounded font-bold text-dark-200 hover:bg-gray-200">
            Settings
          </Link>
          <button className="logout-btn">
            <Link href="/auth/sign-in">Logout</Link>
          </button>
          {/* Add more menu options here */}
        </nav>
      </aside>

    
  );
};

export default Sidebar;