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
      label: "Anime",
      path: "/anime",
    },
    {
      label: "Nature",
      path: "/nature",
    },
    {
      label: "Culture",
      path: "/culture",
    },
  ];

  const content = links.map((link) => {
    return <Link key={link.label} label={link.label} path={link.path} />;
  });

  return <div className="navigator">{content}</div>;
}

export default Navigator;
