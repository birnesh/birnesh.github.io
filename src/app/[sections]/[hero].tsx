import Container from "@/components/layout/container";
import IconButton from "@/components/ui/icon-button";
import Typography from "@/components/ui/typography";
import { MapPinIcon } from "@heroicons/react/24/outline";
// import BirneshHeadShot from "/public/images/headshot.png"

import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandYoutube } from "@tabler/icons-react";
import SocialIcons from "./[components]/social-icons";

const Hero = () => {
  return (
    <Container id="hero">
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Image */}
        <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
          <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
            <img
              src={"images/headshot.png"}
              alt="Headshot of Birnesh"
              className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px] object-cover"
            />
            <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
          </div>
        </div>
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
          {/* Content */}
          <div className="flex flex-col gap-2">
            <Typography variant="h1">
              Hi, I&apos;m Birnesh
              <span className="inline-block animate-waving-hand">👋</span>
            </Typography>
            <Typography>
              I&apos;m a bilingual (en, ja) full stack developer, from South
              India working in Japan. I have 5 years experience in creating web
              applications that are fast, responsive, accessible and efficient.
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <MapPinIcon className="h-6 w-6" aria-label="false" />
              <Typography>Tokyo, Japan</Typography>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <Typography>Available for new projects</Typography>
            </div>
          </div>
          {/* Social Icons */}
          <SocialIcons />
          {/* <div className="flex gap-1">
            <IconButton>
              <IconBrandGithub />
            </IconButton>
            <IconButton>
              <IconBrandYoutube />
            </IconButton>
          </div> */}
        </div>
      </div>
    </Container>
  );
};
export default Hero;
