import axios from "axios"
import { useEffect, useState } from "react"

export default function Dashboard(){
      const token = localStorage.getItem('token')
      const [user,setUser] = useState()

      useEffect(()=>{
            axios({
                  method: 'get',
                  url: 'http://localhost:8000/api/v1/user/info',
                  headers:{
                        'Authorization':'Bearer '+token
                  }
            })
                  .then(response => {
                        setUser(response.data)
                  })
                  .catch(error => console.log(error));
      },[token])

      return(<>
            {
                  user?
                  <>
                        <div className="bg-gray-100">
                              <div className="max-w-5xl m-auto">
                                    <h1>Hello {user.username}</h1>
                              </div>
                        </div>
                        <div className="max-w-5xl m-auto">
                              <h2>Login Info</h2>
                              <p>Username : {user.username}</p>
                              <p>Last login : {user.last_login}</p>
                        </div>
                  </>
                  :
                  ""
            }
      </>)
}