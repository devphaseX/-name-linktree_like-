import { ExternalPlatform } from './components/externalPlaform';
import { ExternalRefInfo } from './components/ExternalRef/externalRefInfo';
import Footer from './components/footer';
import Layout from './components/layout';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100vw',
      }}
    >
      <Layout>
        <ExternalRefInfo />
      </Layout>
      <ExternalPlatform />
      <Footer />
    </div>
  );
}

export default App;
