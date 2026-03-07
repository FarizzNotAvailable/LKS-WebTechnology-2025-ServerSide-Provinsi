import { Link } from "react-router-dom";

export default function DetailGame(){
      return(<>
            <div className="max-w-5xl m-auto my-6">

                  <div className="flex justify-between">
                        <h2 className="text-blue-600">Game Title</h2>
                        <div>

                        </div>
                  </div>
                  <img className="w-full h-64"/>
                  <p>Game description</p>
                  <div>
                        <h2 className="mb-2">HighScore</h2>
                        <table className="w-2xs rounded-sm overflow-hidden">
                              <tr className="bg-blue-500 text-white text-left *:p-2">
                                    <th>Username</th>
                                    <th>Score</th>
                              </tr>
                              <tr className="*:p-2 odd:bg-gray-100 even:bg-white">
                                    <td>John Budi</td>
                                    <td>67</td>
                              </tr>
                              <tr className="*:p-2 odd:bg-gray-100 even:bg-white">
                                    <td>John Budi</td>
                                    <td>67</td>
                              </tr>
                        </table>
                  </div>
                  <div className="my-10">
                        <Link className="primaryBtn" to={'/games/manage/1'}> Manage Game</Link>
                  </div>
            </div>
      </>)
}