import Container from "@/components/layout/container";
import Link from "@/components/ui/link";
import Tag from "@/components/ui/tag";
import Typography from "@/components/ui/typography";

const AboutMe = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About Me" />
      </div>

      {/* content */}
      <div className="flex w-full flex-col gap-6">
        <Typography variant="h3" className="widest">
          Who is Birnesh Eswaramoorthy ?
        </Typography>
        <Typography variant="body2">
          I&apos;m a passionate, tech enthusiastic developer who specializes in{" "}
          <code>
            <strong>Full-Stack web development</strong>
          </code>
          . I love to create API&apos;s using python frameworks such as{" "}
          <code>
            <strong>FastAPI</strong>
          </code>{" "}
          and{" "}
          <code>
            <strong>Django</strong>
          </code>
          . User experience, and writing clear, readable, highly performant code
          matters to me.
        </Typography>
        <Typography>
          I began my journey as a web developer in 2018, and since then, I've
          continued to grow and evolve as a developer, taking on new challenges
          and learning the latest technologies along the way. Now I'm building
          cutting-edge web applications using modern technologies such as{" "}
          <code>
            <strong>React.js, Next.js, Tailwindcss, FastAPI, Django</strong>
          </code>{" "}
          and more.
        </Typography>
        <Typography>
          I am interested in creating end to end products from scratch as per
          the client&apos;s needs with{" "}
          <code>
            <strong>Agile workflow</strong>
          </code>
          .
        </Typography>
        <Typography>
          I am also interested in ethical hacking and networking. I do have
          a&nbsp;&nbsp;
          <Link
            noCustomization
            externalLink
            withUnderline
            href={"https://www.youtube.com/@birnesh_eswar"}
          >
            Youtube channel
          </Link>
          , where I create development related contents.
        </Typography>
        <Typography>Finally, some quick bits about me.</Typography>
        <div className="flex flex-col gap-2 md:flex-row md:gap-6">
          <ul className="flex list-inside list-disc flex-col gap-2">
            <Typography component="li">
              B.E. in Electronics and Communicaiton Engineering
            </Typography>
            <Typography component="li">Full time freelancer</Typography>
          </ul>
          <ul className="flex list-inside list-disc flex-col gap-2">
            <Typography component="li">Rookie Youtuber</Typography>
            <Typography component="li">
              Ethical Hacking and Networking Enthusiast{" "}
            </Typography>
          </ul>
        </div>
        <Typography>
          I&apos;m available for freelance work, so feel free to reach out and
          say hello!
        </Typography>
      </div>
    </Container>
  );
};
export default AboutMe;
