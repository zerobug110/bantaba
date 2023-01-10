import { Employee } from './employee';
import '../App.css';
import { useState } from 'react';

export const Home = () => {
    const [data, setData] = useState(Employee)

    const handleDelete = (id) => {
       setData(data.filter((item) => item.id !==  id))
    }

    const handleEdit = (id) => {
        console.log(id)
    }

    return (
        
        <table className='table'>
            <thead>
                <tr>
                    <th>name</th>
                    <th>age</th>
                    <th>name  </th>
                    <th>actions</th>
                </tr>
                </thead>
            <tbody>
                {
                    data.map(item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.position}</td>
                        <td>{item.age}</td>
                        <td> 
                            <button onClick={()=> handleEdit(item.id)}>edit </button>
                            &nbsp; 
                            <button onClick={()=> handleDelete(item.id)}>delete</button>
                        </td>
                    </tr>
                    ))
                }
            </tbody>
        </table>
    )
}