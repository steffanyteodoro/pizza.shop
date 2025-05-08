import { Link, LinkProps, useLocation } from "react-router-dom";

export type NavLinksProps = LinkProps;

export function NavLink(props: NavLinksProps) {
  const { pathname } = useLocation();

  return (
    <Link
      data-current={pathname === props.to}
      className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-sm font-medium data-[current=true]:text-foreground"
      {...props}
    />
  );
}
