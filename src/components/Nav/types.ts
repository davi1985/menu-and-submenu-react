export type Menu = {
  label: string;
  href: string;
  subItems?: {
    label: string;
    href: string;
    items?: {
      label: string;
      href: string;
    }[];
  }[];
}[];
