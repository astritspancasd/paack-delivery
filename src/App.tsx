import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppRoutes />
      </Router>
    </Provider>
  );
};

export default App;
