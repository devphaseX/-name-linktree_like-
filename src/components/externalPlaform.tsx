import { getImageAssets } from '../assets';
import externalPlatformStyle from './externalPlatform.module.css';

const { Github, Slack } = getImageAssets();

const ExternalPlatform = () => (
  <div className={externalPlatformStyle.externalPlatform}>
    <div className={externalPlatformStyle.externalPlatformIcon}>
      <img src={Slack.url} alt={Slack.title} />
    </div>
    <div className={externalPlatformStyle.externalPlatformIcon}>
      <img src={Github.url} alt={Github.title} />
    </div>
  </div>
);

export { ExternalPlatform };
