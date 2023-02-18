import Link from "./Link";

/**
 * 管理导航栏，以及展示导航栏的Link
 * @returns
 */
function Navigator() {
  const links = [
    {
      label: "WallPaper",
      path: "/wallpaper",
    },
    {
      label: "Animation",
      path: "/animation",
    },
    {
      label: "Animal",
      path: "/animal",
    },
    {
      label: "Nature",
      path: "/nature",
    },
  ];

  const content = links.map((link) => {
    return <Link key={link.label} label={link.label} path={link.path} />;
  });

  return <div className="navigator">{content}</div>;
}

export default Navigator;
