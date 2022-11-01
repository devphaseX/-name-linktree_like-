import { getImageAssets } from '../assets';
import footerStyle from './footer.module.css';

const { Zuri, i4g } = getImageAssets();

const Footer = () => {
  return (
    <div className={footerStyle.footer}>
      <div className={footerStyle.footer_support}>
        <div className={footerStyle['footer_support-brand']}>
          <img src={Zuri.url} alt={Zuri.title} />
        </div>

        <div className={footerStyle.footer_stamp}>HNG Internship 9 Task</div>

        <div className={footerStyle['footer_support-brand']}>
          <img src={i4g.url} alt={i4g.title} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
