import { Link } from "react-router-dom";

export default function Signup(){
      return(<>
            <div className="bg-white shadow-md overflow-hidden rounded-sm">
                  <div className="bg-blue-500 text-white p-3 w-sm text-center">
                        <h2>Sign in</h2>
                  </div>
                  <div className="p-3 flex flex-col gap-1">
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder="Input your username..."  className="mb-4"/>
                        <label htmlFor="">Password</label>
                        <input type="text" placeholder="Input your password..." className="mb-4"/>
                        <label htmlFor="">Confirm Password</label>
                        <input type="text" placeholder="Input your password..." className="mb-4"/>
                        <p className="text-center mb-4">Already have an account? <Link className="text-blue-500" to={'/signin'}>sign in</Link></p>
                        <div className="w-full m-auto mb-1">
                              <button className="primaryBtn">Sign in</button>
                        </div>
                  </div>
            </div>
      </>)
}