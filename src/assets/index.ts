import i4gLogo from './I4G.png';
import slackIcon from './slack.svg';
import githubIcon from './github_icon.svg';
import zuriInternshipLogo from './Zuri.Internship_Logo.svg';
import externalRefIcon from './external_link_ref_icon.svg';
import profileImage from './profile.jpeg';
import externalRefIconContent from './Content.svg';

interface ImageAssest {
  url: string;
  title: string;
}

type ImageAssestType =
  | 'Github'
  | 'Slack'
  | 'Zuri'
  | 'i4g'
  | 'externalRefIcon'
  | 'externalRefIconContent'
  | 'profile';

function getImageAssets(): Record<ImageAssestType, ImageAssest> {
  return {
    Github: { title: 'Github', url: githubIcon },
    Slack: { title: 'Slack', url: slackIcon },
    Zuri: { title: 'Zuri', url: zuriInternshipLogo },
    i4g: { title: 'i4g', url: i4gLogo },
    externalRefIcon: { title: 'externalRefIcon', url: externalRefIcon },
    externalRefIconContent: {
      title: 'externalRefIconContent',
      url: externalRefIconContent,
    },
    profile: { title: 'profile', url: profileImage },
  };
}

export { getImageAssets };
export type { ImageAssest };
