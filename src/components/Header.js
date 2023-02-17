import Link from "./Link";

/**
 * 管理导航栏，以及展示导航栏的Link
 * @returns
 */
function Header() {
  const links = [
    {
      label: "main",
      path: "/",
    },
    {
      label: "WallPaper",
      path: "/wallpaper",
    },
    {
      label: "Profile",
      path: "/profile",
    },
  ];

  const content = links.map((link) => {
    return <Link key={link.label} label={link.label} path={link.path} />;
  });

  return <div>{content}</div>;
}

export default Header;
