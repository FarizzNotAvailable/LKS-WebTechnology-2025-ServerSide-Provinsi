import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function GuestUi(){

      const token = localStorage.getItem('token')
      const navigateTo = useNavigate()

      useEffect(()=>{
            if(token){
                  navigateTo('/home')
            }
      },[token, navigateTo])

      return(
            <>
                  <header className="bg-blue-600">
                        <div className="max-w-5xl m-auto py-4 flex justify-between text-white items-center">
                              <h2>Gaming Platform</h2>
                              <nav>
                                    <Link>Sign out</Link>
                              </nav>
                        </div>
                  </header>
                  <main className="max-w-5xl m-auto flex h-[90vh] justify-center items-center">
                        <Outlet/>
                  </main>
            </>
      )
}