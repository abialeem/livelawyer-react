import {useState,useEffect} from 'react';
function App() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
        console.log(count);
  },[count]);
  
  return (
    <div className='w-full h-screen p-4 bg-black text-white' >
      <h1 className='text-3xl bg-green-500 p-4 mb-2 ml-4 rounded-md'>Welcome to React!</h1>
      <p>Count : {count}</p>
      <button className='p-3 m-2' onClick={() => setCount(count + 1)} >Increase</button>
      <button className='p-3 m-2' onClick={()=> setCount(count-1)}>Decrease</button>
      <MainContent  name="aabid" />
      <MainContent  name="isn't it" />
      
      

    </div>
  );
}



function MainContent(props){
    
  return(
      <h3>React is great, {props.name}</h3>
    );
}

export default App;
