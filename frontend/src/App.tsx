import { BrowserRouter } from 'react-router-dom';
import WithAxios from './components/templates/WithAxios';
import Routes from './routes';
import ReactQueryClientProvider from './providers/ReactQueryClientProvider';

function App() {
  return (
    <ReactQueryClientProvider>
      <BrowserRouter>
        <WithAxios>
          <Routes />
        </WithAxios>
      </BrowserRouter>
    </ReactQueryClientProvider>
  );
}

export default App;
