import {useState,useEffect} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('white');

  useEffect(()=>{
        console.log(count,color);
  },[count,color]);
  
  return (
    <div className='w-full h-screen p-4' style={{backgroundColor:color}}>
      <h1 className='text-3xl bg-green-500 p-4 mb-2 ml-4 rounded-md'>Welcome to React!</h1>
      <p>Count : {count}</p>
      <button className='p-3 m-2' onClick={() => setCount(count + 1)} >Increase</button>
      <button className='p-3 m-2' onClick={()=> setCount(count-1)}>Decrease</button>
      <MainContent  name="aabid" />
      <MainContent  name="isn't it" />
      <button onClick={()=>setColor('white')} className='outline-none bg-white text-black px-4 py-1 rounded-full shadow-lg'>
                    Bg white
      </button>
      <button onClick={()=>setColor('black')} className='outline-none bg-black text-white px-4 py-1 rounded-full shadow-lg'>
                     Bg black
      </button>
      <button onClick={()=>setColor('green')} className='outline-none bg-green-400 px-4 py-1 rounded-full shadow-lg'>
                     Bg green
      </button>
    </div>
  );
}

function MainContent(props){
    
  return(
      <h3>React is great, {props.name}</h3>
    );
}

export default App;
