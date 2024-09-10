import "../styles/Navbar.scss";

export default function Header(props: { currentPath: string }) {
  const { currentPath } = props;
  const navItems = [
    { path: "/", label: "Work" },
    { path: "/me", label: "Resume" },
  ];
  return (
    <nav>
      <ul>
        {navItems.map(({ path, label }) => (
          <div style={{ width: 60, justifyContent: "center" }} key={path}>
            <div className={currentPath === path ? "active" : ""}></div>
            <li>
              <a href={path}>
                <p>{label}</p>
              </a>
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
}
