import { IconType } from "react-icons";
import { AiFillEnvironment, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import "../styles/components/contactinformation.sass";

interface IInformation {
  divClassName: string;
  iconID: string;
  icon: React.ReactElement<IconType>;
  propTitle: string;
  propValue: string;
}

export function ContactInformation() {
  const information: IInformation[] = [
    {
      divClassName: "info-card",
      iconID: "phone-icon",
      icon: <AiFillPhone />,
      propTitle: "Telefone",
      propValue: "(99)12345-6789",
    },
    {
      divClassName: "info-card",
      iconID: "email-icon",
      icon: <AiOutlineMail />,
      propTitle: "Email",
      propValue: "some@example.com",
    },
    {
      divClassName: "info-card",
      iconID: "pin-icon",
      icon: <AiFillEnvironment />,
      propTitle: "Localização",
      propValue: "Earth",
    },
  ];

  return (
    <section id='information-container'>
      <ul>
        {information.map((info) => (
          <li key={info.propTitle} className={info.divClassName}>
            <div className={info.iconID}>{info.icon}</div>
            <div>
              <h3>{info.propTitle}</h3>
              <p>{info.propValue}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
