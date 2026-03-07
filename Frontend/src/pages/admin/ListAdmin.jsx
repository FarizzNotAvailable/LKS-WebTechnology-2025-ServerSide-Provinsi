export default function ListAdmin(){
      return(
      <div className="max-w-5xl m-auto my-6">

            <div className="flex justify-between">
                  <h2 className="text-blue-600">List Admin</h2>
                  <div>

                  </div>
            </div>
            <table className="w-full">
                  <tr className="text-left odd:bg-gray-100 even:bg-white *:border *:border-gray-300 *:p-2">
                        <th className="w-10">Id</th>
                        <th>Username</th>
                        <th>Created on</th>
                        <th>Last login</th>
                  </tr>
                  <tr className="text-left odd:bg-gray-100 even:bg-white *:border *:border-gray-300 *:p-2">
                        <td>1</td>
                        <td>johnskyrim</td>
                        <td>30 09 2077</td>
                        <td>20 10 2077</td>
                  </tr>
            </table>
      </div>)
}