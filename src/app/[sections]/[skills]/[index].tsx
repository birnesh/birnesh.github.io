// import { TECHNOLOGIES } from '@/lib/data';
import Tag from '@/components/ui/tag';
// import TechDetails from '@/components/data-display/tech-details';
import Typography from '@/components/ui/typography';
import Container from '@/components/layout/container';
import TechDetails from './[detail]';
import type { StaticImageData } from 'next/image';

type TechDetails = {
  logoURL: string ;
  label: string;
};
const SkillsSection = () => {
  const TECHNOLOGIES:TechDetails[] = [
    {
      label: 'Javascript',
      logoURL:  'images/logos/javascript-logo.svg'
    },
    {
      label: 'Typescript',
      logoURL: "images/logos/typescript-logo.svg",
    },
    {
      label: 'ReactJs',
      logoURL: "images/logos/react-logo.svg",
    },
    {
      label: 'Angular',
      logoURL: "images/logos/angular-logo.svg",
    },
    {
      label: 'Python',
      logoURL: "images/logos/python-logo.svg",
    },
    {
      label: 'Django',
      logoURL: "images/logos/django-logo.svg",
    },
    {
      label: 'FastAPI',
      logoURL: 'images/logos/fastapi-logo.svg',
    },
    {
      label: 'Redux',
      logoURL: "images/logos/redux-logo.svg",
    },
    {
      label: 'PostgreSQL',
      logoURL: "images/logos/postgresql-logo.svg",
    },
    {
      label: 'MongoDB',
      logoURL: "images/logos/mongodb-logo.svg",
    },
    {
      label: 'Tailwindcss',
      logoURL: "images/logos/tailwind-logo.svg",
    },
    {
      label: 'Docker',
      logoURL: "images/logos/docker-logo.svg",
    },
    {
      label: 'Git',
      logoURL: "images/logos/git-logo.svg",
    },
  ]
  return (
    <Container id="skill">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Skills" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          The skills, tools and technologies I am really good at:
        </Typography>
      </div>

      <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
        {TECHNOLOGIES.map((technology, index) => (
          <TechDetails {...technology} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default SkillsSection;
