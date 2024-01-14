import Container from "@/components/layout/container";
import IconButton from "@/components/ui/icon-button";
import Tag from "@/components/ui/tag";
import Typography from "@/components/ui/typography";
import SocialIcons from "./[components]/social-icons";

const ContactSection = () => {
  return (
    <Container className="bg-gray-50" id="contact">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Contact" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Feel free to reach out to me if you are looking for a consultant,
          developer, have a query, or simply want to connect.
        </Typography>
      </div>

      <div className="flex flex-col items-center gap-6 md:gap-12">
        <div className="flex flex-col items-center md:gap-4">
          <div className="flex items-center gap-4 md:gap-5">
            <Typography variant="h2">{"birnesh1996@gmail.com"}</Typography>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Typography className="text-center">
            You may also find me on these platforms!
          </Typography>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
