import React ,{useEffect,useState} from 'react';
// import logo from './logo.svg';
import './App.css';
// import { useEffect } from 'react';
// import { response } from 'express';
// const url ='https://www.googleapis.com/books/v1/volumes?q=reactjs'

function App() {

  const [data, setData] = useState([]);
  const apiGet = async() => {
    await fetch("https://www.googleapis.com/books/v1/volumes?q=reactjs")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
        console.log(data.items)
      });
  };
 
  // useEffect(()=>{
  //   // piGet();a
  // })
  


  return (
    <div className="App">
    <button onClick={apiGet}>Fetch API</button>
      
      <div>
        <ul>
          {data.items.map((item) => (
            <li key={item.id}>
             {item.volumeInfo.authors},
             {item.volumeInfo.publisher}, 
             {item.volumeInfo.publishedDate},
             {item.volumeInfo.description},



           </li>
            
          ))}

        </ul>
        <h1>brake</h1>
        <ul>
          {data.items.map((item)=>(
            <li key={item.key}>
            {item.volumeInfo.previewLink}
            </li>
          ))}
        </ul>
        {/* <img src={item.volumeInfo.imageLinks.smallThumbnail} alt="" /> */}
      </div>
      
    </div>
  );
}

export default App;
