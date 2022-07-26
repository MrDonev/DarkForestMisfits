import GameScene from './Components/GameScene';
import Header from './Components/Header';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from 'react-router-dom';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/game" element={<GameScene />} />
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
