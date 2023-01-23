import './App.css';
import Nav from './components/nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Szkola from './components/Szkola';

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Main;
      break;
    case "/szkola":
      Component = Szkola;
      break;
    case "/strefa_ucznia":
      break;
    case "/dokumenty":
      break;
    case "/kontakty":
      break;
    case "/plan_zajec":
      break;
    default:
      Component = Error;
   }
  return (
    <>
      <Nav/>
      <Component/>
      <Footer/>
    </>
  );
}

export default App;
