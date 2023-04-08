import "./Navigation.css";

const Navigation = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <h1>
            <a href="/">Findine</a>
          </h1>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/find">Find</a>
          </li>
          <li>
            <a href="/browse">Browse</a>
          </li>
          <li>
            <a href="/search">Search</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
