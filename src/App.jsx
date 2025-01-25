import './App.css'
import Accordion from '../components/Accordion'

function App() {

  return (
    <div className='container'>
      <Accordion
        items={[
          { title: "Title 1", content: "Content 1" },
          { title: "Title 2", content: "Content 2" },
        ]}
      />
    </div>
  )
}

export default App
