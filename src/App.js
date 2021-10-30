import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MenuBar from './components/Header/MenuBar/MenuBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Authentication/Login/Login';
import Register from './components/Authentication/Register/Register';
import MyOrders from './components/MyOrders/MyOrders';
import ManageOrders from './components/ManageOrders/ManageOrders';
import AddOrders from './components/AddOrders/AddOrders';
import AuthProvider from './AuthProvider/AuthProvider';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <MenuBar></MenuBar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/myOrders">
              <MyOrders />
            </Route>
            <Route path="/manageOrders">
              <ManageOrders />
            </Route>
            <Route path="/addOrders">
              <AddOrders />
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
