import { Link } from "react-router-dom";

export default function Profile(){
      return(
      <>
            <div className="max-w-5xl m-auto my-6">
                  <h2>Username</h2>
                  <p>Hi I'm using what's app</p>

                  <div className="mb-4">
                        <h2 className="mb-2 text-blue-500">Authored Games</h2>
                        <div className="grid grid-cols-3 gap-5">
                              <div className="bg-white shadow-md rounded-md overflow-hidden">
                                    <img className="w-96 h-48 bg-gray-50"/>
                                    <div className="p-2 *:mb-1">
                                          <h3>Game Title</h3>
                                          <p>Game Description</p>
                                          <div className="flex justify-between items-center">
                                                <p>Score Submited</p>
                                                <Link className="bg-blue-500 px-2 py-1 text-sm rounded-sm text-white" to={'/games/1'}>Detail</Link>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="mb-4">
                        <h2 className="mb-2 text-blue-500">Highscore</h2>
                        <table className="w-xs rounded-sm overflow-hidden">
                              <tr className="bg-blue-500 text-white text-left *:p-2">
                                    <th>Game</th>
                                    <th>Score</th>
                                    <th></th>
                              </tr>
                              <tr className="*:p-2 odd:bg-gray-100 even:bg-white">
                                    <td>Flappy Bird</td>
                                    <td>67</td>
                                    <td>view game</td>
                              </tr>
                              <tr className="*:p-2 odd:bg-gray-100 even:bg-white">
                                    <td>Z</td>
                                    <td>67</td>
                                    <td>view game</td>
                              </tr>
                        </table>
                  </div>
            </div>
      </>
      )
}