import axios from "axios";
import { useEffect, useState } from "react";

export default function ListAdmin(){
      const token = localStorage.getItem('token')
      const [admins,setAdmins] = useState()

      useEffect(()=>{
            axios({
                  method: 'get',
                  url: 'http://localhost:8000/api/v1/admins',
                  headers:{
                        'Authorization':'Bearer '+token
                  }
            })
                  .then(response => {
                        setAdmins(response.data.content)
                  })
                  .catch(error => console.log(error.response.status));
      },[token])

      return(
                  admins?
                  <div className="max-w-5xl m-auto my-6">
            
                        <div className="flex justify-between">
                              <h2 className="text-blue-600">List Admin</h2>
                              <div>

                              </div>
                        </div>
                        <table className="w-full">
                              <tr className="text-left odd:bg-gray-100 even:bg-white *:border *:border-gray-300 *:p-2">
                                    <th className="w-10">No</th>
                                    <th>Username</th>
                                    <th>Created on</th>
                                    <th>Last login</th>
                              </tr>
                              {
                                    admins.map((admin, i)=>(
                                          <tr className="text-left odd:bg-gray-100 even:bg-white *:border *:border-gray-300 *:p-2">
                                                <td>{i+1}</td>
                                                <td>{admin.username}</td>
                                                <td>{new Date(admin.created_at).toLocaleDateString()}</td>
                                                <td>{new Date(admin.last_login_at).toLocaleDateString()}</td>
                                          </tr>
                                    ))
                              }
                        </table>
                  </div>
                  :
                  "Loading sat"
      )
}