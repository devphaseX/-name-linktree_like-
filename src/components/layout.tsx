import layoutStyle from './layout.module.css';
import { Portfolio } from './Portfolio/portfolio';

interface LayoutProps extends React.PropsWithChildren<{}> {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={layoutStyle.layout}>
      <Portfolio />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
