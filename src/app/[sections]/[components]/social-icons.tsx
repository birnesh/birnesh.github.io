'use client';

import IconButton from '@/components/ui/icon-button';
import { IconBrandGithub, IconBrandYoutube } from '@tabler/icons-react';

export const SOCIAL_LINKS = [
    {
      
      icon:  <IconBrandGithub />,
      url: 'https://github.com/birnesh',
    },
    {
      icon: <IconBrandYoutube />,
      url: 'https://www.youtube.com/channel/UC8JY1EPaD0b_1_c90-mzWdQ',
    }
  ];

const SocialIcons = () => {
  return (
    <div className="flex gap-1">
      {SOCIAL_LINKS.map((socialLink, index) => (
        <IconButton
          key={index}
          onClick={() => window.open(socialLink.url, '_blank')}
        >
          {socialLink.icon}
        </IconButton>
      ))}
    </div>
  );
};

export default SocialIcons;
