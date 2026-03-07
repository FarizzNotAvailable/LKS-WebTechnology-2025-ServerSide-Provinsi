export default function ManageGame(){
      return(
            <>
            <div className="bg-gray-100">
                  <div className="max-w-5xl m-auto">
                        <h1>Manage Your Game</h1>
                  </div>
            </div>
            <div className="max-w-5xl m-auto">
                  <h3 className="mb-2">Game title</h3>
                  <input type="text" className="w-full mb-4" placeholder="Update your game title"/>
                  <h3 className="mb-2">Game description</h3>
                  <input type="text" className="w-full mb-4" placeholder="Update your game description"/>
                  <h3 className="mb-2">Game File</h3>
                  <input type="file" className="w-full mb-4" placeholder="Update your game description"/>
                  <div className="flex gap-32 justify-between">
                        <button className="bg-blue-500">Update</button>
                        <button className="bg-red-500">Delete</button>
                  </div>
            </div>
            </>
      )
}