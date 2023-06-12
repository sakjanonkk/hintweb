import {
  IoCodeWorkingOutline,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoYoutube,
} from "react-icons/io5";
// import { AiFillPhone } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import img1 from "./images/library.png";
import img2 from "./images/404.jpg";
export const Experience = [
  {
    id: 1,
    date: "2022 - present",
    iconsSrc: <IoCodeWorkingOutline />,
    title: "Computer Engineer Student",
    location: "Khon Kaen, Thailand",
    description: "I'm currently learning front-end web development",
  },
  {
    id: 2,
    date: "2016 - 2022",
    iconsSrc: <IoCodeWorkingOutline />,
    title: "Science Mathematics Student",
    location: "Rayong, Thailand",
    description: "Practiced programming",
  },
  // {
  //   id: 3,
  //   date: "2016 - 2019",
  //   iconsSrc: <IoCodeWorkingOutline />,
  //   title: "Mini English Program Student",
  //   location: "Watpapradoo Rayong, Thailand",
  //   description: "Grade 3.75",
  // },
];

export const Projects = [
  {
    id: 1,
    name: "Library Project | 2023",
    imageSrc: img1,
    prob: "EN | BOOKING LIBARY",
    techs: "Nextjs, TailwindCSS, NodeJS, FireBase",
    github: "https://github.com/sippam/myJect",
  },
  {
    id: 2,
    name: "Future Project | 202x",
    imageSrc: img2,
    prob: "Future Project",
    techs: "xxxxxxxxxxxxxxxxxxxxx",
    github: "#",
  },
  {
    id: 3,
    name: "Future Project | 202x",
    imageSrc: img2,
    prob: "Future Project",
    techs: "xxxxxxxxxxxxxxxxxxxxx",
    github: "#",
  },
  {
    id: 4,
    name: "Future Project | 202x",
    imageSrc: img2,
    prob: "Future Project",
    techs: "xxxxxxxxxxxxxxxxxxxxxx",
    github: "#",
  },
  {
    id: 5,
    name: "Future Project | 202x",
    imageSrc: img2,
    prob: "Future Project",
    techs: "xxxxxxxxxxxxxxxxxxxxxx",
    github: "#",
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: (
      <IoLogoGithub className="text-slate-100 text-3xl cursor-pointer" />
    ),
    name: "GitHub",
    link: "https://github.com/sakjanonkk",
  },
  {
    id: 2,
    iconSrc: (
      <IoLogoYoutube className="text-slate-100 text-3xl cursor-pointer" />
    ),
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCjQsjVBoj-qjQZMQtreWTcQ",
  },
  {
    id: 3,
    iconSrc: (
      <BsInstagram className=" text-slate-100 text-3xl cursor-pointer" />
    ),
    name: "Instagram",
    link: "https://www.instagram.com/sakjanonk/",
  },
  {
    id: 4,
    iconSrc: (
      <IoLogoFacebook className="text-slate-100 text-3xl cursor-pointer" />
    ),
    name: "Facebook",
    link: "https://www.facebook.com/sakjanon.kamoldung.9",
  },
  // {
  //   id: 5,
  //   iconSrc: <AiFillPhone className="text-slate-100 text-3xl cursor-pointer" />,
  //   name: "Phone number",
  //   link: "0949750112",
  // },
];
