import {useState,useEffect} from 'react';

function App() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
        console.log('hello');
  },[count]);
  
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)} >Increase</button>
      <button onClick={()=> setCount(count-1)}>Decrease</button>
      <MainContent  name="aabid" />
    </div>
  );
}

function MainContent(props){
    
  return(
      <h3>React is great, {props.name}</h3>
    );
}

export default App;
