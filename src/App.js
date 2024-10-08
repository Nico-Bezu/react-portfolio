import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import './App.scss';
import Home from './components/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='ABOUT' element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
