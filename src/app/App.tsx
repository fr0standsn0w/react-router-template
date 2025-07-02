import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './providers/ErrorBoundary';
import { AppRouter } from './providers/router';

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
