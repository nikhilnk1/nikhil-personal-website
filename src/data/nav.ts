export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  children: NavChild[];
}

export const navItems: NavItem[] = [
  {
    label: 'About',
    children: [
      { label: 'About Nikhil',           href: '/about' },
      { label: 'Recognition & Honours',  href: '/recognition' },
      { label: 'In the Media',           href: '/media' },
    ],
  },
  {
    label: 'AI & Product',
    children: [
      { label: 'Atlassian',                    href: '/atlassian' },
      { label: 'Flipkart & Indian Startups',   href: '/flipkart' },
      { label: 'Startup Advisory',             href: '/advisory' },
    ],
  },
  {
    label: 'Community & Ecosystem',
    children: [
      { label: 'Australia–India Bilateral', href: '/australia-india' },
      { label: 'iSPIRT Fellow',             href: '/ispirit' },
      { label: 'LBW Trust Ambassador',      href: '/lbw-trust' },
    ],
  },
  {
    label: 'Writing',
    children: [
      { label: 'Book — My Summer of Cricket', href: '/book' },
      { label: 'Op-ed & Media Commentary',    href: '/writing' },
      { label: 'Blog',                        href: '/blog' },
    ],
  },
  {
    label: 'Speaking',
    children: [
      { label: 'Topics',    href: '/speaking' },
      { label: 'Press Kit', href: '/press' },
    ],
  },
];
