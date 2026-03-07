export default function CreateUser(){
      return(
            <>
                  <div className="bg-gray-100">
                        <div className="max-w-5xl m-auto">
                              <h1>Create New User</h1>
                        </div>
                  </div>
                  <div className="max-w-5xl m-auto">
                        <h3 className="mb-2">Username</h3>
                        <input type="text" className="w-full mb-4" placeholder="Username..."/>
                        <h3 className="mb-2">Password</h3>
                        <input type="text" className="w-full mb-4" placeholder="Password..."/>
                              <button className="bg-blue-500">Create</button>
                  </div>
            </>
      )
}