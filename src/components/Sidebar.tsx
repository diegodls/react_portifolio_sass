import { AiOutlineCloudDownload } from "react-icons/ai";
import { ContactInformation } from "./ContactInformation";
import { SocialNetwork } from "./SocialNetwork";

import "../styles/components/sidebar.sass";

import Avatar from "../assets/img/profile_picture_not_found.png";
const Sidebar = () => {
  return (
    <aside id='sidebar'>
      <img src={Avatar} alt='Profile Picture' title='Profile Picture' />
      <p className='title'>Desenvolvedor</p>
      <SocialNetwork />
      <ContactInformation />
      <div className='button-container'>
        <a href='#' className='btn'>
          <AiOutlineCloudDownload size={35} /> Curriculum
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
