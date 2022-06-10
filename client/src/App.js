import React, { useEffect, useState } from 'react';
import './App.scss';

function App() {

  const [image,setImage] = useState(null);

  useEffect(()=>{
    const fetchImage = async ()=>{
     const res = await fetch("http://localhost:8080/image/image.png")
     const data = await res.json();
     const {buffer, fileName} = data;
    //  const _Uint8Array = new Uint8Array(buffer.data)
     const _Uint8Array = Uint8Array.from(buffer.data)
    
     const blob = new Blob([_Uint8Array],{type:`image/${fileName.split(".")[1]}`})
     const url = URL.createObjectURL(blob)
     setImage(url)
    }
    fetchImage();
  },[])

  return (
    <div className="App">     
      {/* <video className='video' controls src='http://localhost:8080/stream/test.mp4'/> */}
      <img src={image}/>
    </div>
  );
}

export default App;
