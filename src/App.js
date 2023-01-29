import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Szkola from './components/szkola/Szkola';
import StrefaUcznia from './components/strefa_ucznia/StrefaUcznia';
import Dokumenty from './components/dokumenty/Dokumenty';
import Kontakt from './components/kontakt/Kontakt';
import PlanZajec from './components/plan_zajec/PlanZajec';
import Article from './components/article/Article';
import ArticlePictures from './components/article/Picture';
import Personel from './components/dokumenty/Personel';
import Uczniowie from './components/dokumenty/Ucznowie';
function App() {
 

  return (
    <>
      <Nav/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='szkola' element={<Szkola />} />
          <Route path='strefa_ucznia' element={<StrefaUcznia />} />
          <Route path='dokumenty' element={<Dokumenty />} />
          <Route path='/dokumenty/personel' element={<Personel />}/>
          <Route path='/dokumenty/uczniowie' element={<Uczniowie />}/>
          <Route path='kontakt' element={<Kontakt />} />
          <Route path='plan_zajec' element={<PlanZajec />} />
          <Route path='artice/:articeWithPicture' element={<ArticlePictures/>}/>
          <Route path='artice/no/:artice' element={<Article />}/>
          
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
