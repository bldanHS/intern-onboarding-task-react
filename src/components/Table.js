import "./styles.css";
import { useEffect } from "react";

const Table = ({ objectData }) => {

  const headers = Object.keys(objectData[0]);
  
  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {objectData.map((row, index) => {
          return (
            <tr key={index}>
              {headers.map((columnName) => {
                return <td key={columnName}>{row[columnName]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

// let tbody = table.createTBody();
// array.forEach((object) => {
// let tbodyRow = tbody.insertRow();
// Object.entries(object).forEach(value => {
//   let td = document.createElement("td");
//   td.dataset.label = value[0];
//   td.innerHTML = value[1];
//   tbodyRow.appendChild(td);
//   tbody.appendChild(tbodyRow);
// });

export default Table;
