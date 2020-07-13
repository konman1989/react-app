import aboutGlasses from "../assets/images/about-glasses.svg";
import promo1 from "../assets/images/promo-1.svg";
import promo2 from "../assets/images/promo-2.svg";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import beckham from "../assets/images/testimonials-beckham.png";
import notBeckham from "../assets/images/testimonials-not-beckham.png";

export const aboutSliderList = [
  {
    img: aboutGlasses,
    imgClassName: "image-wrapper--glasses",
    imgName: "about-glasses",
    title: "Browse projects, like booking a hotel online !",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et do lore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export const aboutNavbarList = [
  { name: "simple", to: "simple" },
  { name: "transparent", to: "transparent" },
  { name: "collaborative", to: "collaborative" },
];

export const headerNavbarList = [
  { name: "home", to: "home" },
  { name: "how it works", to: "how-it-works" },
  { name: "discover a project", to: "discover" },
  { name: "blog", to: "blog" },
  { name: "find out more", to: "find-out-more" },
];

export const promoCardList = [
  {
    img: promo1,
    imgClassName: "image-wrapper--promo",
    imgName: "promo-1",
    buttonClassName: "button__promo button__promo--blue",
    buttonName: "Become A Member",
    title: "Find Properties",
    text:
      "Sign up to browse the portfolio. Your journey to becoming a real estate baron starts here.",
  },
  {
    img: promo2,
    imgClassName: "image-wrapper--promo",
    imgName: "promo-2",
    buttonClassName: "button__promo button__promo--green",
    buttonName: "Submit Your Project",
    title: "Find Buyers",
    text:
      "Sign up to browse the portfolio. Your journey to becoming a real estate baron starts here.",
  },
];

export const projectsCardList = [
  {
    image: {
      img: project1,
      imgClassName: "image-wrapper--project",
      imgName: "project-1",
    },
    price: "3600 GPB",
    title: "Ontario Tower, LONDON",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    percentFunded: "30% funded",
    daysLeft: "8 days left",
  },
  {
    image: {
      img: project2,
      imgClassName: "image-wrapper--project",
      imgName: "project-2",
    },
    price: "4000 GPB",
    title: "London Tower, ONTARIO",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    percentFunded: "70% funded",
    daysLeft: "12 days left",
  },
  {
    image: {
      img: project3,
      imgClassName: "image-wrapper--project",
      imgName: "project-3",
    },
    price: "6000 GPB",
    title: "Ontario Tower, LONDON",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    percentFunded: "10% funded",
    daysLeft: "20 days left",
  },
];

export const testimonialsList = [
  {
    title: "One of the Best ",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod taempor incididunt ut labore et dolore magna aliqua.",
    author: "David Beckham",
    image: {
      img: beckham,
      imgClassName: "image-wrapper--testimonials",
      imgName: "testimonials-1",
    },
  },
  {
    title: "Exellent Service ",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod taempor incididunt ut labore et dolore magna aliqua.",
    author: "Not David Beckham",
    image: {
      img: notBeckham,
      imgClassName: "image-wrapper--testimonials",
      imgName: "testimonials-2",
    },
  },
];
