import SearchBar from "./SearchBar";
import Link from "./Link";
import { GoHome } from "react-icons/go";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link key="main" label={<GoHome />} path="/"></Link>
        <SearchBar />
      </nav>
    </header>
  );
}

export default Header;
