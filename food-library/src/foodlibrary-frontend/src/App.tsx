import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import {render} from "react-dom";
//import ResultFilteringLogo from "./resultFiltering.png";
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

class App extends Component {


  render(){
    return (
        <div className="ResultFilteringLogo">
            <button> 버튼 </button>

              <table className="Filtering">
                <tr>
                  <th>구분</th>
                  <th>Check List</th>
                </tr>
                <tr>
                  <td>알레르기</td>
                  <td>
                    <form id="allergyFiltering" name="allergyFiltering" method="post">
                      <input type="checkbox" name="allergyCheck" value="myAllergy"/> 내정보
                      <input type="checkbox" name="allergyCheck" value="ex1"/> 새우
                      <input type="checkbox" name="allergyCheck" value="ex2"/> 굴
                    </form>
                  </td>
                </tr>
                <tr>
                  <td>지병</td>
                  <td>
                    <form id="diseaseFiltering" name="diseaseFiltering" method="post">
                      <input type="checkbox" name="diseaseCheck" value="myAllergy"/> 내정보
                      <input type="checkbox" name="diseaseCheck" value="ex1"/> 질병a
                      <input type="checkbox" name="diseaseCheck" value="ex2"/> 질병b
                    </form>
                  </td>
                </tr>
              </table>
        </div>
    );
  }
}

export default App;
