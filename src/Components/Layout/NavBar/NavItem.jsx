const NavItem = ({ href, label, onClick }) => {
  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        className="text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--ink)]"
      >
        {label}
      </a>
    </li>
  )
}

export default NavItem
