import Link from "next/link";

export default function NavItem({ href, text }) {
  return (
    <li>
      <Link href={href}>{text}</Link>
    </li>
  );
}
