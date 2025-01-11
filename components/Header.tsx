const Header = () => {
    return (
      <header className="admin-header">
        <div className="header-left text-black-800">Admin Dashboard</div>
        <div className="header-right">
          <span className="notification-icon">🔔</span>
          <div className="admin-profile">
            <span className="text-black-800">Admin</span>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;