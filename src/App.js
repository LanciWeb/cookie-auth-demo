import LoginPage from './components/pages/LoginPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WelcomePage from './components/pages/WelcomePage';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <ProtectedRoute path="/">
            <WelcomePage />
          </ProtectedRoute>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
