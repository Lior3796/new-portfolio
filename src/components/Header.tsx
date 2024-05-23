const Header = () => {
  return (
    <header className="header-section">
        <h1 className="header-title">My Portfolio</h1>
        <nav>
          <ul className="header-list">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
