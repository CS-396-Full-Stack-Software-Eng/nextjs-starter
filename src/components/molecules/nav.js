import NavItem from "../atoms/navitem";

export default function Nav() {
  return (
    <nav>
      <ul>
        <NavItem href="/" text="Home" />
        <NavItem href="/about" text="About" />
      </ul>
    </nav>
  );
}
