import { Link } from "react-router-dom";

export default function ListGame(){
      return(<>
            <div className="max-w-5xl m-auto my-6">

            <div className="flex justify-between">
                  <h2 className="text-blue-600">List Game</h2>
                  <div>

                  </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
                  <div className="bg-white shadow-md rounded-md overflow-hidden">
                        <img className="w-96 h-48 bg-gray-50"/>
                        <div className="p-2 *:mb-1">
                              <h3>Game Title</h3>
                              <p>Author : John Skyrim</p>
                              <p>Game Description</p>
                              <div className="flex justify-between items-center">
                                    <p>Score Submited</p>
                                    <Link className="bg-blue-500 px-2 py-1 text-sm rounded-sm text-white" to={'1'}>Detail</Link>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
      </>)
}