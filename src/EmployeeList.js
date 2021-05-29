import { useSelector } from "react-redux";
import "./EmployeeList.css";

//author Akshay Jadhav 29/05/2021

export default function EmployeeList() {
    const employeeList = useSelector((state) => state.employeeList.user);
    function renderTable () {
        return employeeList.map((item, index) => {
            const {id, name, age, gender, email,phoneNo} = item;
        return (
            <tr key= {index}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>{gender}</td>
                <td>{email}</td>
                <td>{phoneNo}</td>
            </tr>
        )
      })
    }

    return (
        <div className= "listStyle">
            <div className= "titleStyle">
                Employee List
            </div>
            <div className= "tableStyle">
                <table>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Phone No</th>
                        </tr>
                        {renderTable()}
                    </tbody>
                </table>
            </div>
        </div>
    );
  }