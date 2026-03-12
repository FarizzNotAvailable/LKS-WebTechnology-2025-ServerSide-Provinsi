import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ListUser(){

      const token = localStorage.getItem('token')
      const navigateTo = useNavigate()
      const [users,setUsers] = useState()
      let no = 1

      useEffect(()=>{
            axios({
                  method: 'get',
                  url: 'http://localhost:8000/api/v1/users',
                  headers:{
                        'Authorization':'Bearer '+token
                  }
            })
            .then(response => {
                  setUsers(response.data.content)
            })
            .catch(error => console.log(error.response.status));
      },[token])
      
      const handleDelete = (id)=>{
            axios({
                  method: 'delete',
                  url: 'http://localhost:8000/api/v1/users/'+id,
                  headers:{
                        'Authorization':'Bearer '+token
                  }
            })
                  .then(response => console.log(response.data.message))
                  .catch(error => alert(error.response.data.message));
      }

      return(
            users?

            <div className="max-w-5xl m-auto my-6">

                  <div className="flex justify-between mb-4">
                        <h2 className="text-blue-600">List User</h2>
                        <div>
                              <button className="primaryBtn" onClick={()=>{navigateTo('/create')}}>Create User</button>
                        </div>
                  </div>
                  <table className="w-full">
                        <tr className="text-left odd:bg-gray-100 even:bg-white *:border *:border-gray-300 *:p-2">
                              <th className="w-10">No</th>
                              <th>Username</th>
                              <th>Created on</th>
                              <th>Last login</th>
                              <th>Actions</th>
                        </tr>
                        {
                              users.map((user)=>(
                                    user?
                                    <tr className="text-left odd:bg-gray-100 even:bg-white *:border *:border-gray-300 *:p-2">
                                          <td>{no++}</td>
                                          <td>{user.username}</td>
                                          <td>{new Date(user.created_at).toLocaleDateString()}</td>
                                          <td>{new Date(user.last_login_at).toLocaleDateString()}</td>
                                          <td className="flex justify-around gap-4">
                                                <button className="bg-blue-500">View</button>
                                                <button className="bg-green-500" onClick={()=>{navigateTo("/edit/"+user.id)}}>Edit</button>
                                                <button className="bg-orange-500">Block</button>
                                                <button className="bg-red-500" onClick={()=>{handleDelete(user.id)}}>Delete</button>
                                          </td>
                                    </tr>
                                    :
                                    ""
                              ))
                        }
                  </table>
            </div>
            :
            ""
      )
}