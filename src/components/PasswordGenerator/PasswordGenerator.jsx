import {useState,useEffect,useCallback,useRef} from 'react';

function PasswordGenerator(props){
    const [length, setLength] = useState(8);
    const [numbersAllowed, setNumbersAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState('');

    const passwordRef = useRef(null);

    const generatePassword = useCallback(()=> {
          let pass ="";
          let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
          if(numbersAllowed) str+= "0123456789";
          if(charAllowed) str+= "!@#$%^&*()_+";

          for(let i=1;i < length;i++){
               const index = Math.floor(Math.random() * str.length + 1);
               pass += str.charAt(index);
          }
              setPassword(pass)
    },[length,charAllowed,numbersAllowed]);
    
    useEffect(()=>{
          generatePassword()
    },[length,numbersAllowed,charAllowed]);

    const copyPasswordToClipboard = () =>{
      window.navigator.clipboard.writeText(password);
      passwordRef.current?.select()
    }

return(
  <div className='pt-4 px-20 '>
  <h1>Password Generator</h1>
   <div className='flex flex-wrap shadow rounded-lg overflow-hidden mb-4'>
      <input
       type='text'
       value={password}
       className='outline-none w-full py-1 px-3 text-black'
       placeholder='password'
       readOnly
       ref={passwordRef}
      />
      <button
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      onClick={copyPasswordToClipboard}
      >
        copy
      </button>
   </div>
   <div className='flex flex-wrap text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
        <input type='range' min={6} max={100} value={length} onChange={(e)=> setLength(e.target.value) } name='length' id='length' className='cursor-pointer' />
        <label htmlFor='length'>Length : {length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
        <input type='checkbox'
        defaultChecked={numbersAllowed} 
          onChange={()=> {
          setNumbersAllowed((prev) => !prev )
          } } 
          name='numbersAllowed'
          id='numbersAllowed' 
          className='cursor-pointer' 
          />
        <label htmlFor='numbersAllowed'>Numbers</label>
    </div>
    <div className='flex items-center gap-x-1'>
        <input type='checkbox'
        defaultChecked={charAllowed} 
          onChange={()=> {
          setCharAllowed((prev) => !prev )
          } } 
          name='charAllowed'
          id='charAllowed' 
          className='cursor-pointer' 
          />
        <label htmlFor='charAllowed'>Characters</label>
    </div>
   </div>
  </div>
);
}

export default PasswordGenerator;