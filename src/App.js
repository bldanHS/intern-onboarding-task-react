import Table from "./components/Table";
import React from "react";
import "./components/styles.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "./components/header";
import { inputField } from './components/inputField';

function App() {
  const url = "http://127.0.0.1:5000";

  const endpoints = ["/apps", "/amp?per_page=3", "/global"];

  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const responses = Promise.all(
      endpoints.map((endpoint) =>
        axios
          .get(`${url}${endpoint}`)
          .catch((logError) => {
            console.error(logError);
          })
          .then((response) => {
            response = response.data;
            // console.log(response)
            return response;
          })
      )
    ).then((applications) => {
      setApplications(applications);
      console.log(applications);
    });
  }, []);

  if (applications.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Header />
      <inputField />
      <Table objectData={applications[0]} />
      <Table objectData={applications[1]} />
      <Table objectData={applications[2]} />
    </div>
  );
}

export default App;
