import './App.css';
import {createRef} from 'react';

function App() {
  const fileInput=createRef();
  const onSubmit=async(e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.set("avatar", fileInput.current.files[0]);

    try {
      const response=await fetch('/profile',{
      method:"POST",
      body:formData
    })
    const parseResponse=await response.json();
    if(response.ok){
      alert("your file is uploaded")
    }
    else{
      console.error("error occured")
    }
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input type="file" name='avatar' ref={fileInput}/>
        <input type="submit" value='submit'/>
        
      </form>
      
    </div>
  );
}

export default App;