import { Switch, Route ,Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import CartContext from './components/Cart/CartContext';
import { useContext } from 'react';

function App() {
  const crtctx = useContext(CartContext);
  return (
    
      <Layout>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          {!crtctx.isLoggedIn && <Route path='/auth' exact>
            <AuthPage />
          </Route>}
          <Route path='/profile'>
            {crtctx.isLoggedIn &&<UserProfile />}
            {!crtctx.isLoggedIn && <Redirect to='/' />}
          </Route>
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Layout>
    
  );
}

export default App;
