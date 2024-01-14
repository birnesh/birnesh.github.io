import Tag from "@/components/ui/tag";
import Typography from "@/components/ui/typography";
import Container from "@/components/layout/container";
import ProjectDetails from "./[detail]";

const WorkSection = () => {
  const PROJECTS: any = [
    {
      name: "IQiD",
      description:
        "A web application which  provides AI-Open Source Intelligence in ESG compliance, supply-chain risk analysis, country risk analysis and entity risk analysis for your Business needs.",
      url: "https://webint.jp",
      previewImage: 'images/project-iqid.png',
      technologies: [
        "ReactJs",
        "Next.js",
        "Typescript",
        "Django",
        "AWS",
        "MongoDB",
        "PostgreSQL",
        "Material UI",
        "Redux",
        "Docker",
        "D3.js"
      ],
    },
    {
      name: "Simple CRUD API ",
      description:
      "Youtube tutorial for creating a simple  CRUID API using python Fast API and postgreSQL.",
      url: "https://youtube.com/playlist?list=PLzyTBCDBAO-EeJfJk6uvZ92in-js2S6hi&si=9vLZQSk_HfwhpTdJ",
      previewImage: 'images/project-simple-API.png',
      technologies: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "SqlAlchemy"
      ],
    },
  ];
  return (
    <Container id="work">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Work" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Some of the noteworthy projects I have built:
        </Typography>
      </div>

      {PROJECTS?.map((project: any, index: number) => (
        <ProjectDetails
          key={index}
          {...project}
          layoutType={index % 2 === 0 ? "default" : "reverse"}
        />
      ))}
    </Container>
  );
};

export default WorkSection;
