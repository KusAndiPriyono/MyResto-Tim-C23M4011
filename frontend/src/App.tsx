import { BrowserRouter } from 'react-router-dom';
import WithAxios from './components/templates/WithAxios';
import Routes from './routes';
import ReactQueryClientProvider from './providers/ReactQueryClientProvider';
// import MuiProviders from './providers/MuiProviders';

function App() {
  return (
    // <MuiProviders>
    <ReactQueryClientProvider>
      <BrowserRouter>
        <WithAxios>
          <Routes />
        </WithAxios>
      </BrowserRouter>
    </ReactQueryClientProvider>
    // </MuiProviders>
  );
}

export default App;
