import { Link, Outlet } from "react-router-dom";

export default function DefaultUi(){
      return(
            <>
                  <header className="bg-blue-600">
                        <div className="max-w-5xl m-auto py-4 flex justify-between text-white items-center">
                              <h2>Gaming Platform</h2>
                              <nav className="flex gap-6">
                                    <Link to={'games'}>Discover Games</Link>
                                    <Link to={'games/manage'}>Manage Games</Link>
                                    <Link to={'profile'}>Profile</Link>
                                    <Link>Logout</Link>
                              </nav>
                        </div>
                  </header>
                  <main>
                        <Outlet/>
                  </main>
            </>
      )
}