import { ButtonWithImage } from '../lib/button';
import portfolioStyle from './portfolio.module.css';
import buttonStyle from '../lib/button.module.css';
import { getImageAssets } from '../../assets';
import { ProfileTag } from './profileTag';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const {
  externalRefIcon,
  externalRefIconContent,
  profile: profileImageAssest,
} = getImageAssets();

const Portfolio = () => {
  const hasMatch = useMediaQuery({
    rule: '(max-width: 57.1875em)',
  }).hasMatch;

  return (
    <div className={portfolioStyle.portfolio}>
      <div>
        <div
          className={[
            portfolioStyle.buttonRef,
            hasMatch ? portfolioStyle['fix-button'] : null,
          ].join(' ')}
        >
          <ButtonWithImage
            buttonType="link"
            styleClass={[
              { name: buttonStyle['button-with-dotted']!, priority: -Infinity },
            ]}
            imageInfo={hasMatch ? externalRefIconContent : externalRefIcon}
          />
        </div>
        <ProfileTag imageAssest={profileImageAssest} userName="Lawal Ayomide" />
      </div>
    </div>
  );
};

export { Portfolio };
