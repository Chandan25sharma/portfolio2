"use client";

import { usePathname } from "next/navigation";
import PillNav from "./PillNav";

const NavigationWrapper = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Research", href: "/research" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <PillNav
      logo="/logo.png"
      logoAlt="Portfolio Logo"
      items={navItems}
      activeHref={pathname}
      baseColor="#ffffff"
      pillColor="#ffffff"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#1a1a1a"
    />
  );
};

export default NavigationWrapper;
