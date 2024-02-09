import './App.css';
import Button from './components/button/Button';
import Header from './components/header/Header';
import Lorem from './components/lorem/Lorem';

function App() {
  const navbar=["Home", "Collage", "Contacts", "Call me"]
  return (
    <>
      <Header navbar={(navbar)}/>
      <Lorem>{
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur saepe culpa eos quae quidem. Laborum asperiores voluptatibus omnis sed porro saepe praesentium, quidem nostrum nobis odio earum voluptatem sequi nisi labore amet et officiis atque illo eaque, nam libero. Expedita eius aliquid ut, nesciunt recusandae excepturi. Iusto qui quis maxime ratione rerum consequuntur consectetur. Ullam natus consequatur blanditiis. Perspiciatis, et iusto rerum saepe est vel ducimus animi asperiores quaerat ipsum.        
        </div>
      }
      </Lorem>
      <Button app="close"/>
      <Button app="open"/>
    </>
  );
}

export default App;
