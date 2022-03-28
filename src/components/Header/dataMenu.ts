export const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/",
    subItems: [
      { label: "Bio", href: "/" },
      { label: "Mission", href: "/" },
      { label: "Values", href: "/" },
      { label: "Vision", href: "/" },
    ],
  },
  {
    label: "Products",
    href: "/",
    subItems: [
      { label: "Computers", href: "/" },
      { label: "Cellphones", href: "/" },
      { label: "Headsets", href: "/" },
      {
        label: "Consoles",
        items: [
          { label: "Playstation", href: "/" },
          { label: "X-box", href: "/" },
          { label: "Wii", href: "/" },
        ],
      },
    ],
  },
  {
    label: "Services",
    href: "/",
  },
  {
    label: "Location",
    href: "/",
  },
  {
    label: "Contact",
    href: "/",
  },
];
