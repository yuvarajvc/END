import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Input } from 'semantic-ui-react';
import axios from 'axios';

function App() {
  const [value, setValue] = useState("");

  const handleClick = () => {
    if(value!== ""){
      axios.post("https://eng-python-project.herokuapp.com/translate", {"input": value})
      .then((response) => {
        console.log(response);
        document.getElementsByClassName("sentiment-text")[0].innerHTML = response.data.replace("'","");
      })
      .catch((err) => {
        console.log(err);
        document.getElementsByClassName("sentiment-text")[0].innerText = err
      });
    }
  }

  const handleValueChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div style={{height:"100vh", width:"200vw", backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", display:"table-cell", verticalAlign: "middle", horizontalAlign:"middle"}}>
        <h1>Text to Python Generator</h1>
        <Input transparent onChange={handleValueChange} action={{color: 'teal', onClick: () => handleClick(), content: "Get Python Code Now"}} placeholder='Write...' style={{border:"1px solid #fff", padding:"10px", borderRadius: "5px", width: "1000px"}} />
        <p  style={{marginTop: "20px", color: "white"}}></p>
        <Input className="sentiment-text" transparent onChange={handleValueChange}  style={{border:"1px solid #fff",background:"black",color:"white", padding:"10px", borderRadius: "5px", width: "1000px", height:"300px"}} />
        
    </div>
  );
}

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


export default App;
