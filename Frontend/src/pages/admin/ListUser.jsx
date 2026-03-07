export default function ListUser(){
return(
      <div className="max-w-5xl m-auto my-6">

            <div className="flex justify-between mb-4">
                  <h2 className="text-blue-600">List User</h2>
                  <div>
                        <button className="primaryBtn">Create User</button>
                  </div>
            </div>
            <table className="w-full">
                  <tr className="text-left odd:bg-gray-100 even:bg-white *:border *:border-gray-300 *:p-2">
                        <th className="w-10">Id</th>
                        <th>Username</th>
                        <th>Created on</th>
                        <th>Last login</th>
                        <th>Actions</th>
                  </tr>
                  <tr className="text-left odd:bg-gray-100 even:bg-white *:border *:border-gray-300 *:p-2">
                        <td>1</td>
                        <td>johnskyrim</td>
                        <td>30 09 2077</td>
                        <td>20 10 2077</td>
                        <td className="flex justify-around gap-4">
                              <button className="bg-blue-500">View</button>
                              <button className="bg-green-500">Edit</button>
                              <button className="bg-orange-500">Block</button>
                              <button className="bg-red-500">Delete</button>
                        </td>
                  </tr>
            </table>
      </div>)
}