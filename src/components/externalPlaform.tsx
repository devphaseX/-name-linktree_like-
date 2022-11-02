import { getImageAssets } from '../assets';
import externalPlatformStyle from './externalPlatform.module.css';

const { Github, Slack } = getImageAssets();

const ExternalPlatform = () => (
  <div className={externalPlatformStyle.externalPlatform}>
    <a href="" className={externalPlatformStyle.externalPlatformIcon}>
      <img src={Slack.url} alt={Slack.title} />
    </a>
    <a
      href="https://github.com/devphaseX"
      className={externalPlatformStyle.externalPlatformIcon}
    >
      <img src={Github.url} alt={Github.title} />
    </a>
  </div>
);

export { ExternalPlatform };
