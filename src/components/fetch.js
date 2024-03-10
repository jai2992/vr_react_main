import React from 'react'
import Axios  from 'axios';
import axios from 'axios';
import { useState , useEffect } from 'react';



const url = "https://gsi.fly.dev/characters/1"
// npm install axios
const base_url = ["https://gi-img-api.ak-team.repl.co"]
axios.get(`${base_url}/api/genshin/amber`)
.then(res => { console.log(res.data.url) })

function App() {
  
  const [char,setData] = useState([]);

  const fetchData = () => {
    Axios.get(url)
    .then((res)=>{
      setData(res.data.result);
    })
  };

  useEffect(() => {
    fetchData();
  },[]);
  
  return (
    <div>
      <button onClick={fetchData}>Generate</button>
      <h1>{char.name}</h1>
    </div>
  )
}

export default App