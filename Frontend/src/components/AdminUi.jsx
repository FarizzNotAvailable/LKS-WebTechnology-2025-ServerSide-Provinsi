import { Link, Outlet } from "react-router-dom";

export default function AdminUi(){
      return(
            <>
                  <header className="bg-blue-600">
                        <div className="max-w-5xl m-auto py-4 flex justify-between text-white items-center">
                              <h2>Gaming Platform</h2>
                              <nav className="flex gap-6">
                                    <Link to={'admins'}>All Admin</Link>
                                    <Link to={'users'}>All User</Link>
                                    <Link >Logout</Link>
                              </nav>
                        </div>
                  </header>
                  <main>
                        <Outlet/>
                  </main>
            </>
      )
}