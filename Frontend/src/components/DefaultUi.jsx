import axios from "axios";
import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function DefaultUi(){

      const token = localStorage.getItem('token')
      const navigateTo = useNavigate()

      useEffect(()=>{
            if(!token){
                  navigateTo('/signin')
            }
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
                                    <Link to={'games'}>Discover Games</Link>
                                    <Link to={'games/manage'}>Manage Games</Link>
                                    <Link to={'profile'}>Profile</Link>
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