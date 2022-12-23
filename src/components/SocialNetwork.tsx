import { IconType } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import "../styles/components/socialnetwork.sass";

interface ISocialNetwork {
  name: string;
  icon: React.ReactElement<IconType>;
}

const socialNetworks: ISocialNetwork[] = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
  },
  {
    name: "github",
    icon: <FaGithub />,
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
  },
];

export function SocialNetwork() {
  return (
    <section id='social-networks'>
      {socialNetworks.map((network) => (
        <a href='#' className='social-btn' id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
}
