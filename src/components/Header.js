import SearchBar from "./SearchBar";
import Link from "./Link";
import { GoHome } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link classes="nav-logo" key="main" label={<GoHome />} path="/"></Link>
        <SearchBar />
        <Link
          classes="nav-logo"
          key="profile"
          label={<RxAvatar />}
          path="/profile"
        ></Link>
      </nav>
    </header>
  );
}

export default Header;
