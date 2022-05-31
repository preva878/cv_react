import './App.css';
import User from './components/User';
import Skills from './components/Skills/Skills';
import Profil from './components/Profil/Profil';
import FormationsExperiences from './components/Formations/FormationsExperiences'



function App() {
  return (
    <div className="App">
    <div className='grid__container'>
      <div className='sidebar'>
        <div className="actions">
        <button>pdf</button>
        </div>
         
        <User/>
        <Skills/>
      </div>
      <div className='main'>Profil
        <Profil/>
        <FormationsExperiences/>
        
      </div>
    </div>
     
    </div>
    
  );
}

export default App;
