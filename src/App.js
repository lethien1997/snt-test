import './App.css';
import Root from './components/Root';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Paths from './contants/Paths';
import Login from './components/Login';
import { Store } from './redux/store';
import { Provider } from 'react-redux';
import Animals from './components/Animals';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Loading from './components/Loading';
import AnimalDatail from './components/AnimalDetail';
import Footer from './components/Footer';


function App() {

  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Header />
        <div style={{ backgroundColor: 'var(--cover-color-)' }}>
          <Routes>
            <Route path={Paths.ROOT} element={<Root />}></Route>
            <Route path={Paths.LOGIN} element={<Login />} />
            <Route path={Paths.ANIMALS} element={<Animals />} />
            <Route path={`${Paths.ANIMALS}/:id`} element={<AnimalDatail />} />
            <Route path={Paths.NOTFOUND} element={<Loading />} />
          </Routes>
        </div>
        <Footer />

      </BrowserRouter>
    </Provider>
  );
}

export default App;
