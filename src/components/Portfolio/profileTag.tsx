import type { ImageAssest } from '../../assets';
import profileTagStyle from './profileTag.module.css';

interface ProfileTagProps {
  imageAssest: ImageAssest;
  userName: string;
}

const ProfileTag: React.FC<ProfileTagProps> = ({ imageAssest, userName }) => (
  <div className={profileTagStyle.profileTag}>
    <figure className={profileTagStyle.profileDetail}>
      <div className={profileTagStyle.profileTag_image}>
        <img src={imageAssest.url} alt={imageAssest.title} />
      </div>
      <figcaption className={profileTagStyle.profileUsername}>
        {userName}
      </figcaption>
    </figure>
  </div>
);

export { ProfileTag };
