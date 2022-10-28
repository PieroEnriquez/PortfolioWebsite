import './App.css';
import photo from './icon.png'
import linkedin from './linkedin.png'
import github from './github.png'
import { Link } from './components/links'
import { Project } from './components/projects'
import { Repos } from './components/repos'

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <div className='intro-container'>
          <p>
            Hi there, I am<br/>
            <h1>
              Piero Enriquez
            </h1>
            <h5>
              Junior Blockchain Developer
            </h5>
          </p>
        </div>
        <div className='photo-container'>
          <img src={photo} alt='' className='photo' />
          <div className='social-media-container'>
            <Link link='https://github.com/PieroEnriquez' image={github} />
            <Link link='https://www.linkedin.com/in/piero-enriquez-vera-21599b232/' image={linkedin} />
          </div>
        </div>
      </section>
      <section className='projects'>
        <div className='title-container'>
          <h2 className='projects-title'>
            Projects
          </h2>
        </div>
        <Repos />
        <div className='projects-container'>
          <Project title='Bounch es puto' />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </section>
    </div>
  );
}

export default App;
