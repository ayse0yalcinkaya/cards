import 'bulma/css/bulma.css';
import './App.css';
import Course2 from './Course';
import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import Csharp from './images/csharp.png';
import CompleteWeb from './images/completeweb.jpg';


function App() {

  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">
            My Course
          </p>
        </div>
      </section>
      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column'>
              <Course2
                image={Angular}
                title="Angular"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam doloremque ut, 
              facere magnam, ea itaque perferendis quo hic, assumenda et minus sed obcaecati quisquam quibusdam error consectetur. 
              Provident, aut nam."
              />
            </div>
            <div className='column'>
              <Course2
                image={Bootstrap}
                title="Bootstrap 5"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam doloremque ut, 
              facere magnam, ea itaque perferendis quo hic, assumenda et minus sed obcaecati quisquam quibusdam error consectetur. 
              Provident, aut nam."
              />
            </div>
            <div className='column'>
              <Course2
                image={Csharp}
                title="Complete Web"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam doloremque ut, 
              facere magnam, ea itaque perferendis quo hic, assumenda et minus sed obcaecati quisquam quibusdam error consectetur. 
              Provident, aut nam."
              />
            </div>
            <div className='column'>
              <Course2
                image={CompleteWeb}
                title="Frontend"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam doloremque ut, 
              facere magnam, ea itaque perferendis quo hic, assumenda et minus sed obcaecati quisquam quibusdam error consectetur. 
              Provident, aut nam."
              />
            </div>
          </div>
        </section>

      </div>





    </div>
  )
}

export default App;
