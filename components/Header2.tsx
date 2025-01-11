const Header2 = () => {
  const userName = "John"; // Replace this with dynamic user data
  
  return (
    <header 
      className="sticky top-3 z-20 mx-20 flex items-center justify-between rounded-2xl px-[5%] py-5 shadow-lg xl:px-40"
      style={{ backgroundImage: 'url(/)', backgroundSize: 'cover' }}
    >
      {/* Left Section */}
      <div className="header-left text-dark-200 font-bold">Dashboard</div>

      {/* Middle Section */}
      <div className="header-middle text-center text-dark-200 font-bold text-2xl">
        Welcome, {userName}!
      </div>

      {/* Right Section */}
      <div className="header-right">
        <span className="notification-icon text-white text-3xl">🔔</span>
      </div>
    </header>
  );
};

export default Header2;
