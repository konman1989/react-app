import aboutGlasses from "../assets/images/about-glasses.svg";
import promo1 from "../assets/images/promo-1.svg";
import promo2 from "../assets/images/promo-2.svg";

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
