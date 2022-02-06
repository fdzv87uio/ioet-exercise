import React, { useState } from 'react';
import './App.css';
import Employee from './components/Employee';
import { getHoursPerDay, getPayPerDay } from './utils/counters';

function App() {
  /*
   * This Hook controls the current info state
   */
  const [info, setInfo] = useState<any[]>([]);

  /*
   * The following method reads the data from the .txt file
   */
  const readFile = (e: any) => {
    setInfo([]);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      parseData(reader.result);
    };
  };
  /*
   * This method parses the text file data, and applies counting functions for number of hours and total pay
   */
  const parseData = (result: any) => {
    var lines = result.split('\n');
    for (var line = 0; line < lines.length; line++) {
      const lineArray = lines[line].split('=');
      const name = lineArray[0] ? lineArray[0] : '';
      const timeInfo = lineArray[1] ? lineArray[1] : '';
      const dates = timeInfo.split(',');
      let hours = 0;
      let pay = 0;
      dates.map((item: string) => {
        const day = item.substring(0, 2);
        const dates = item.substring(2).trim();
        const dateArray = dates.split('-');
        const payPerDay = getPayPerDay(day, dateArray);
        const hoursPerDay = getHoursPerDay(dateArray);
        pay = pay + payPerDay;
        hours = hours + hoursPerDay;
      });
      const res = {
        name: name,
        pay: pay,
        hours: hours,
      };
      if (res.pay !== 0 && res.hours !== 0 && name) {
        setInfo((info) => [...info, res]);
      }
    }
  };

  return (
    <div className="page_container">
      <div className="header">
        <h2>IOET Exercise</h2>
      </div>
      <div className="controls">
        <div className="instructions">
          <p className="text">
            <strong>Instructions:</strong>
            <br></br>Click on the button on the right to select a text file from
            your device. The payment result will be displayed on the table
            bellow.
          </p>
        </div>
        <div className="inputs">
          <input
            type="file"
            id="text_file"
            onChange={(e) => {
              readFile(e);
            }}
          />
        </div>
      </div>
      <div className="table_wrapper">
        <h3>Results</h3>
        <hr />
        <div className="table_labels">
          <h4 className="text">n.-</h4>
          <h4 className="text">Employee</h4>
          <h4 className="text">Hours</h4>
          <h4 className="text">Amount Payable ($)</h4>
        </div>
        {info.length > 0 &&
          info[0] !== 'no results' &&
          info.map((item: any, key: number) => {
            return (
              <Employee
                key={key}
                counter={key}
                name={item.name}
                hours={item.hours}
                pay={item.pay}
              />
            );
          })}
        {!info ||
          (info.length === 0 && (
            <div>
              <h5 className="error">
                No results available. Please check the file format is valid and
                try again
              </h5>
            </div>
          ))}
      </div>
      <div className="footer">
        <p>@2022. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
