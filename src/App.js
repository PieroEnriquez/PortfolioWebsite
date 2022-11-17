import './App.css';
import photo from './icon.png'
import linkedin from './linkedin.png'
import github from './github.png'
import api from './images/api.png'
import bc from './images/bc.jpg'
import sort from './images/sorting.png'
import lottery from './images/lottery.jpg'
import uniswap from './images/uniswap.png'
import insurance from './images/insurance.png'
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
            Personal Projects
          </h2>
        </div>
        <Repos />
        <div className='projects-container'>
          <Project
            image={sort}
            title='Sorting Algorithms Visualizer'
            desc='A way to visualize how different sorting algorithms work and their speed' 
          />
          <Project
              image={uniswap}
              title='Uniswap Clone'
              desc='DeFi are a great use of blockchain, so making a copycat of one of the greatest was a great challenge to take!'
          />
          <Project
            image={bc}
            title='Proof of Work Blockchain'
            desc='In order to understand the blockchain world I though "Why not build one myself?" so I did in both Javascript and Python'
          />
          <Project
            image={api}
            title='Store API'
            desc='In case you were wondering if I could also develop APIs'
          />
          <Project
            image={lottery}
            title='Lottery Smart Contract'
            desc='The best way to be transparent is to actually show the players how the system works!'
          />
          <Project
            image={insurance}
            title='Insurance Service Smart Contract'
            desc='An amusing way to get your clients to trust you and be more safe.'
          />
        </div>
      </section>
    </div>
  );
}

export default App;
