export default function NewHeader(props: { currentPath: string }) {
  const { currentPath } = props;
  const navItems = [
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "PROJECTS" },
    { id: "blogs", label: "BLOG" },
  ];
  return (
    <nav className="flex mt-12 mx-28 w-full">
      <a href="/">
        <img
          className="h-20 w-20 m-0 rounded-5xl"
          src="/assets/profilePic.jpg"
        />
      </a>
      <ul
        className="absolute left-1/2 -translate-x-1/2 
                     flex justify-center items-center px-12 h-16 rounded-3xl gap-16"
      >
        {navItems.map(({ id, label }) => (
          <div className="flex justify-center" key={id}>
            <div
              className={`${currentPath === `#${id}` ? "text-amber-1" : ""}`}
            />
            <li>
              <a
                href={`#${id}`}
                className="text-white hover:text-amber-1 text-2xl no-underline"
              >
                {label}
              </a>
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
}
