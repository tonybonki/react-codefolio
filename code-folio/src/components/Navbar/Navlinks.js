// Import CV PDF
import CV from './CV.pdf'
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
    href: '#projects',
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
    href: '#work-experience',
    children: [
      {
        icon: <AiOutlineWallet />,
        label: 'Past Jobs',
        subLabel: 'Places I have worked in.',
        href: '#work-experience',
      },
      {
        icon: <AiOutlineHeart />,
        label: 'Testimonials',
        subLabel: 'Contractor Success Stories',
        href: '#',
      },
      {
        icon: <AiOutlineLinkedin />,
        label: 'My Resume',
        download: 'True',
        subLabel: 'Download My Curriculum Vitae',
        href: CV,
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
        subLabel: 'Who and what I aspire to be',
        href: '#',
      },
    ],
  },
  {
    label: 'Contact Me',
    href: '#',
  },
];
