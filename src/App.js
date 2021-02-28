import React, { useState } from "react";
// import { Badge, InputGroup, FormControl, Button } from "react-bootstrap";
import "./App.css";
import NavBar from "./Components/NavBar";
import Options from "./Components/Options";
// import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import IssuesPage from "./Components/IssuesPage";
import Fork from "./Components/Fork";
import Filter from "./Components/Filter";
import IssueManager from './Components/IssueManager';
function App() {
  const [issue, setIssue] = useState("");
  const [issueApi, setIssueApi] = useState();
  const fetchIssues = () =>{
      fetch(
        "https://api.github.com/repos/facebook/create-react-app/issues"
      )
      .then((res)=>res.json())
        .then((result)=>{
          // console.log(result);
          setIssue("not empty")
            setIssueApi({result});
            console.log(setIssueApi);
        })
  }
  return (
    <>
      <NavBar />
      <br></br>
      <Fork />
      <Options />
      <Filter />
      <IssuesPage />
      {issue===""?fetchIssues():null}
      <IssueManager
       issue = {issue}
       setIssue = {setIssue}
       fetchIssues = {fetchIssues}
       issueApi = {issueApi}
      />
    </>
  );
}

export default App;
