// Import React Icons

import {
  AiOutlineFundProjectionScreen,
  AiOutlineCode,
  AiOutlineWallet,
  AiOutlineCoffee,
  AiOutlineProject,
  AiOutlineCloud,
  AiOutlineHeart,
  AiOutlineLinkedin,
} from 'react-icons/ai';

// Nav Items Array
export const NAV_ITEMS = [
  {
    label: 'My Skills',
    children: [
      {
        icon: <AiOutlineFundProjectionScreen size={17} />,
        label: 'Projects',
        subLabel: "Websites and apps that I've built.",
        href: '#projects',
      },
      {
        icon: <AiOutlineCode size={17} />,
        label: 'Language repertoire.',
        subLabel: "Programming languages I'm familiar with.",
        href: '#',
      },
    ],
  },
  {
    label: 'Work Experience',
    children: [
      {
        icon: <AiOutlineWallet />,
        label: 'Past Jobs',
        subLabel: 'Places I have worked in.',
        href: '#',
      },
      {
        icon: <AiOutlineHeart />,
        label: 'Testimonials',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
      {
        icon: <AiOutlineLinkedin />,
        label: 'My Resume',
        subLabel: ' My curriculum vitae',
        href: '#',
      },
    ],
  },
  {
    label: 'About Me',
    children: [
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
  {
    label: 'Contact Me',
    href: '#',
  },
];
