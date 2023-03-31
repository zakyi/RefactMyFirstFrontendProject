import SearchBar from "./SearchBar";
import Link from "./Link";
import { GoHome } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";
import { useSelector } from "react-redux";
import { CiLogin } from "react-icons/ci";

function Header() {
  const { isLoggedIn } = useSelector((state) => state.userData);

  return (
    <header className="header">
      <nav className="nav">
        <Link classes="nav-logo" key="main" label={<GoHome />} path="/"></Link>
        <SearchBar />
        {isLoggedIn ? (
          <Link
            classes="nav-logo"
            key="profile"
            label={<RxAvatar />}
            path="/profile"
          ></Link>
        ) : (
          <Link
            classes="nav-logo"
            key="login"
            label={<CiLogin />}
            path="/login"
          ></Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
