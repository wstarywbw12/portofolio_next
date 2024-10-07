
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube ,FaInstagram} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/WistuAryW" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/wistu-ari-wibowo-60a79b309/" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@Nub_Gamedev" },
  { icon: <FaInstagram/>, path: "https://www.instagram.com/wstarywbw/?hl=en" },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
