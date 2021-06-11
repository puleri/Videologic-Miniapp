import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
import AdminPanel from './components/AdminPanel/AdminPanel.js'
import Support from './components/Support/Support.js'
import ThankYou from './components/ThankYou/ThankYou.js'
// import Footer from './components/Footer/Footer.js'

function App() {

  return (
    <div className="App">
      <div className="main-content">
      <Route path='/' render={() => (
        <Header />
      )}/>
      <Route exact path='/' render={() => (
        <Support />
      )} />
      <Route exact path='/ThankYou' render={() => (
        <ThankYou />
      )} />
      <Route path='/AdminPanel' render={() => (
        <AdminPanel />
      )} />
      </div>
      
    </div>
  );
}

export default App;
