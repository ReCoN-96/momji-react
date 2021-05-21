import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import IntervenantDasboardPage from '../components/IntervenantDashboardPage';
import IntervenantEditPage from '../components/IntervenantEditPage';

const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Route exact path="/" component={IntervenantDasboardPage} />
      <Route path="/edit" component={IntervenantEditPage} />
    </div>
  </Router>
);

export default AppRouter;
