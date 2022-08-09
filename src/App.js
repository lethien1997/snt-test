import './App.css';
import Root from './components/Root';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Paths from './contants/Paths';
import Login from './components/Login';
import Layout from './components/Layout';
import { Store } from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={Store}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path={Paths.ROOT} element={<Root />}></Route>
            <Route path={Paths.LOGIN} element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </Provider>
  );
}

export default App;
