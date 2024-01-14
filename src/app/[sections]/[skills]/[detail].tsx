'use client';

// import { TechDetails } from '@/lib/types';
import Typography from '@/components/ui/typography';
import ImageWrapper from '@/components/ui/image-wrapper';

const TechDetails = ({ logoURL, label }: any) => {
  return (
    <div className="flex flex-col items-center gap-2">
        <ImageWrapper
          src={logoURL}
          alt={label}
          className="transition-transform duration-300  md:hover:scale-110 w-20 h-20"
        />
      <Typography variant="body1">{label}</Typography>
    </div>
  );
};

export default TechDetails;
