// Import React Icons

import {
  AiOutlineFundProjectionScreen,
  AiOutlineCode,
  AiOutlineWallet,
  AiOutlineCoffee,
  AiOutlineProject,
  AiOutlineCloud,
} from 'react-icons/ai';

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'My Skills',
    children: [
      {
        icon: <AiOutlineFundProjectionScreen size={17} />,
        label: 'Projects',
        subLabel: "Websites and apps that I've built.",
        href: '#',
      },
      {
        icon: <AiOutlineCode size={17} />,
        label: 'Language repertoire.',
        subLabel: "Programming Languages I'm familiar with.",
        href: '#',
      },
    ],
  },
  {
    label: 'Find Work',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    label: 'Contact Me',
    href: '#',
  },
  {
    label: 'About Me',
    children: [
      {
        icon: <AiOutlineWallet />,
        label: 'Work Experience',
        subLabel: "Places I've worked.",
        href: '#',
      },
      {
        icon: <AiOutlineProject />,
        label: 'My Education',
        subLabel: 'My educational background.',
        href: '#',
      },
      {
        icon: <AiOutlineCoffee />,
        label: 'Hobbies',
        subLabel: 'Things I do to have fun :)',
        href: '#',
      },
      {
        icon: <AiOutlineCloud />,
        label: 'My Dreams and Goals',
        subLabel: 'Who and what I aspire to be.',
        href: '#',
      },
    ],
  },
];
