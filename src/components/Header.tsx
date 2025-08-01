export default function Header(props: { currentPath: string }) {
  const { currentPath } = props;
  const navItems = [
    { path: "/", label: "Work" },
    { path: "/me", label: "Me" },
    { path: "/blogs", label: "Journal" },
  ];
  return (
    <nav className="flex justify-center mt-12 relative">
      <ul className="flex justify-center items-center px-12 h-16 rounded-3xl bg-white gap-4">
        {navItems.map(({ path, label }) => (
          <div className="flex justify-center w-16" key={path}>
            <div
              className={`${currentPath === path ? "absolute top-4 h-0.5 w-20 bg-blue-3" : ""}`}
            />
            <li>
              <a href={path}>
                <p className="text-blue-1 text-xl">{label}</p>
              </a>
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
}
