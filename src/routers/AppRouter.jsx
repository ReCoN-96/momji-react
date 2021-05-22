import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { IntervenantProvider } from '../contexts/IntervenantContext';
import Header from '../components/Header';
import IntervenantDasboardPage from '../components/IntervenantDashboardPage';
import IntervenantEditPage from '../components/IntervenantEditPage';

const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Header />
    <div>
      <Switch>
        <IntervenantProvider baseUrl="https://team.momji.fr/api/v2/static/employees">
          <Route exact path="/" component={IntervenantDasboardPage} />
          <Route path="/edit/:id" component={IntervenantEditPage} />
        </IntervenantProvider>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
