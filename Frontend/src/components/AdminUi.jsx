import axios from "axios";
import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function AdminUi(){

            const token = localStorage.getItem('token')
            const navigateTo = useNavigate()

            useEffect(()=>{
                  if(!token){
                        navigateTo('/signin')
                  }
                  axios({
                  method: 'get',
                  url: 'http://localhost:8000/api/v1/admins',
                  headers:{
                        'Authorization':'Bearer '+token
                  }
                  })
                  .then(response => {
                        response
                  })
                  .catch(error =>{ 
                        if(error.response.status == 403){
                              navigateTo('/home')
                        }
                  });
            },[token, navigateTo])

            const logout = ()=>{
                  axios({
                        method: 'post',
                        url: 'http://localhost:8000/api/v1/auth/signout',
                        headers:{
                              'Authorization':'Bearer '+token
                        }
                  })
                  .then(response => {
                        console.log(response)
                        localStorage.removeItem('token')
                        alert('Telah logout')
                        navigateTo('/signin')
                  })
                  .catch(error => {
                        alert(error.response.data.message)
                        console.log(error)
            });
      }

      return(
            <>
                  <header className="bg-blue-600">
                        <div className="max-w-5xl m-auto py-4 flex justify-between text-white items-center">
                              <h2>Gaming Platform</h2>
                              <nav className="flex gap-6">
                                    <Link to={'admins'}>All Admin</Link>
                                    <Link to={'users'}>All User</Link>
                                    <a onClick={logout}>Logout</a>
                              </nav>
                        </div>
                  </header>
                  <main>
                        <Outlet/>
                  </main>
            </>
      )
}