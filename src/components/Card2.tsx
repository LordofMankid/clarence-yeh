import StackIcon from "tech-stack-icons";
import "../styles/Card.scss";

interface CardProps {
  title: string;
  subtitle: string;
  date: string;
  url?: string;
  techStack: string[];
}

export default function Card(props: CardProps) {
  const { title, subtitle, date, url, techStack } = props;
  const styles = {
    headerText: {
      fontSize: 28,
      fontWeight: 600,
    },
    dateText: {
      fontSize: 15,
      fontWeight: 200,
    },
    subText: {
      fontSize: 18,
      fontWeight: 200,
    },
  };
  return (
    <a href={url} className="card-link">
      <div className="card-container">
        <div className="image-container">
          <div className="tech-stack">
            {techStack
              ? techStack.map((skill) => {
                  return <StackIcon name={skill} key={skill} />;
                })
              : null}
          </div>
        </div>
        <div className="text-container">
          <div className="header-container">
            <p style={styles.headerText}>{title}</p>
            <p style={styles.dateText}>{date}</p>
          </div>
          <p style={styles.subText}>{subtitle}</p>
        </div>
      </div>
    </a>
  );
}
