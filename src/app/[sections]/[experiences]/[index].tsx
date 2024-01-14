// import { EXPERIENCES } from '@/lib/data';
// import ExperienceDetails from '@/components/data-display/experience-details';
import Tag from "@/components/ui/tag";
import Typography from "@/components/ui/typography";
import Container from "@/components/layout/container";
import Card from "@/components/layout/card";
import Link from "@/components/ui/link";

const ExperienceSection = () => {
  return (
    <Container className="bg-gray-50" id="experience">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Experience" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Here is a quick summary of my most recent experiences:
        </Typography>
      </div>

      <Card className="mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 ">
        <div className="flex flex-col items-start justify-start gap-2 md:flex-row md:justify-between md:items-center">
          <Link
            noCustomization
            externalLink
            withUnderline
            href={"https://www.jp-rc.jp/"}
          >
            <Typography variant="body1">
              {"JP Research and Consulting , Japan"}
            </Typography>
          </Link>
          <Typography variant="body1" className="md:order-1">
            {"Jul 2022 - Present"}
          </Typography>
        </div>
        <div className="w-full">
          <Typography variant="subtitle" className="font-semibold">
            {"Freelancer - Full-Stack Web Developer"}
          </Typography>
        </div>
        <div className="pl-4">
          <ul className="flex list-inside list-disc flex-col gap-2">
            <Typography component="li">
              Developing a tool called&nbsp;
              <Link
                noCustomization
                externalLink
                withUnderline
                href={"https://webint.jp"}
              >
                IQiD
              </Link>
              &nbsp;for JPR&C.
            </Typography>
            <Typography component="li">
              Role is Full stack web Developer and scrum master.
            </Typography>
            <Typography component="li">
              Technologies used :{" "}
              <code>
                <strong>
                  ReactJs, Next.js, FastAPI, Django, D3.js, AWS, MongoDB,
                  PostgresSQL, Material UI, Tailwind css, Docker, Git.
                </strong>
              </code>
            </Typography>
          </ul>
        </div>
      </Card>
      <Card className="mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 ">
        <div className="flex flex-col items-start justify-start gap-2 md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col">
            <Link
              noCustomization
              externalLink
              withUnderline
              href={"https://symphony.rakuten.com/"}
            >
              <Typography variant="body1">
                {"Rakuten Symphony , Japan "}
              </Typography>
            </Link>
            <span className="text-[12px] text-gray-400 font-mono">
              {"*Worked as a contract employee from Jul 2021 - Nov 2021"}
            </span>
          </div>
          <Typography variant="body1" className="md:order-1">
            {"Jul 2021 - Jun 2022"}
          </Typography>
        </div>
        <div className="w-full">
          <Typography variant="subtitle" className="font-semibold">
            {"Frontend Web Developer"}
          </Typography>
        </div>
        <div className="pl-4">
          <ul className="flex list-inside list-disc flex-col gap-2">
            <Typography component="li">
              Developed UI webpages for various application in Rakuten
              Communication Platform (RCP)
            </Typography>
            <Typography component="li">
              Worked in integrating frontend webpages with Backend API&apos;s{" "}
            </Typography>
            <Typography component="li">
              Worked in a team of 20 members and have collaborated with
              designers and Product Owners for delivering UI assets
            </Typography>
            <Typography component="li">
              Worked in Angular version migration
            </Typography>
            <Typography component="li">
              Technologies used :{" "}
              <code>
                <strong>
                  Angular, Swagger Docs, FastAPI, D3.js, Firebase, Ag Grid,
                  Angular Material UI, Docker, SCSS, Git.
                </strong>
              </code>
            </Typography>
          </ul>
        </div>
      </Card>

      <Card className="mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 ">
        <div className="flex flex-col items-start justify-start gap-2 md:flex-row md:justify-between md:items-center">
          <Link
            noCustomization
            externalLink
            withUnderline
            href={"https://gitcareer.resocia.jp/"}
          >
            <Typography variant="body1">{"Human Resocia , Japan "}</Typography>
          </Link>
          <Typography variant="body1" className="md:order-1">
            {"Sep 2019 - Jun 2021"}
          </Typography>
        </div>
        <div className="w-full">
          <Typography variant="subtitle" className="font-semibold">
            {"Full-Stack Web developer"}
          </Typography>
        </div>
        <div className="pl-4">
          <ul className="flex list-inside list-disc flex-col gap-2">
            <Typography component="li">
              Worked as a contract employee in Honda Motor Co., Ltd., Japan.
            </Typography>
            <Typography component="li">
              Developed web application - Manufacturing Defect Management
              System.
            </Typography>
            <Typography component="li">
              Collaborated with Japanese clients.
            </Typography>
            <Typography component="li">Used Agile workflow.</Typography>
            <Typography component="li">
              Learned containerizaiton and deployment techniques.
            </Typography>
            <Typography component="li">
              Technologies used :{" "}
              <code>
                <strong>
                  ReactJs, Swagger Docs, Django, PostgreSQL, Linux Servers,
                  Material UI, Pytest, Storybook, Git.
                </strong>
              </code>
            </Typography>
          </ul>
        </div>
      </Card>
    </Container>
  );
};

export default ExperienceSection;
