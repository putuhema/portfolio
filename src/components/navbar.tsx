const Navbar = () => {
  const links = [
    {
      href: "#name",
      text: (
        <span>
          Putu <br /> Mahendra
        </span>
      ),
    },
    {
      href: "#un",
      text: (
        <span>
          unemployed at <br /> the moment
        </span>
      ),
    },
    {
      href: "#mamuju",
      text: (
        <span>
          based in Mamuju,
          <br /> Indonesia
        </span>
      ),
    },
    {
      href: "#contact",
      text: <span>contact</span>,
    },
  ];
  return (
    <nav className="flex flex-row gap-4 justify-between my-4 font-bold">
      {links.map((link) => (
        <a
          key={link.href}
          className="hover:border-b border-black"
          href={link.href}
        >
          {link.text}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
