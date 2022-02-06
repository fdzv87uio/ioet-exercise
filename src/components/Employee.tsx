import React from 'react';
import './Employee.css';

interface EmployeeProps {
  name: string;
  hours: number;
  pay: number;
  counter: number;
}

/*
 * The following component presents the income data for each employee
 */
function Employee(props: EmployeeProps) {
  return (
    <div key={props.counter} className="table_content">
      <p className="text">{props.counter + 1}</p>
      <p className="text">{props.name}</p>
      <p className="text">{props.hours}</p>
      <p className="text">$ {props.pay}.00 USD</p>
    </div>
  );
}

export default Employee;
