import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
// import SpringC from './components/Spring/Spring.js';
import AdminPanel from './components/AdminPanel/AdminPanel.js'
import Support from './components/Support/Support.js'
import ThankYou from './components/ThankYou/ThankYou.js'

function App() {

  return (
    <div className="App">
      <Route path='/' render={() => (
        <Header />
      )}/>
      <Route exact path='/' render={() => (
        <Support />
      )} />
      <Route exact path='/ThankYou' render={() => (
        <ThankYou />
      )} />
      <Route exact path='/AdminPanel' render={() => (
        <AdminPanel />
      )} />
    </div>
  );
}

export default App;
