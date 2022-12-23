import { IconType } from "react-icons";
import { DiCss3, DiHtml5, DiJsBadge, DiNodejs, DiReact } from "react-icons/di";
import "../styles/components/technologiescontainer.sass";

interface ITechnologies {
  id: string;
  name: string;
  icon: React.ReactElement<IconType>;
}

export function TechnologiesContainer() {
  const technologies: ITechnologies[] = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "node", name: "Node.js", icon: <DiNodejs /> },
    { id: "react", name: "ReactJs", icon: <DiReact /> },
  ];

  return (
    <div className='technologies-container'>
      <h2>Tecnologias</h2>
      <div className='technologies-grid'>
        {technologies.map((tech) => (
          <div className='technologies-card' id={tech.id} key={tech.id}>
            {tech.icon}
            <div className='technologies-info'>
              <h3>{tech.name}</h3>
              <p>
                Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in
                eros commodo tempor.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
