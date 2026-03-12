import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup(){

      const navigateTo = useNavigate()

      const [form, setForm] = useState({
            username:"",
            password:""
      });

      const handleForm = (e)=>{
            const {name, value} = e.target
            setForm(f=>({...f, [name]:value}))
      }

      const handleSubmit= ()=>{
            axios({
                  method: 'post',
                  url: 'http://localhost:8000/api/v1/auth/signup',
                  data: {
                        "username":form.username,
                        "password":form.password
                  }
            })
                  .then(response => {
                        // console.log(response.data.token)
                        localStorage.setItem('token', response.data.token)
                        alert('Login berhasil')
                        navigateTo('/home')
                  })
                  .catch(error => {
                        // console.log(error.response.data)
                        alert(error.response.data.message)
                  });
      }

      return(<>
            <div className="bg-white shadow-md overflow-hidden rounded-sm">
                  <div className="bg-blue-500 text-white p-3 w-sm text-center">
                        <h2>Sign up</h2>
                  </div>
                  <div className="p-3 flex flex-col gap-1">
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder="Input your username..."  className="mb-4" name="username" onChange={handleForm}/>
                        <label htmlFor="">Password</label>
                        <input type="text" placeholder="Input your password..." className="mb-4" name="password" onChange={handleForm}/>
                        <label htmlFor="">Confirm Password</label>
                        <input type="text" placeholder="Input your password..." className="mb-4"/>
                        <p className="text-center mb-4">Already have an account? <Link className="text-blue-500" to={'/signin'}>sign in</Link></p>
                        <div className="w-full m-auto mb-1">
                              <button className="primaryBtn" onClick={handleSubmit}>Sign in</button>
                        </div>
                  </div>
            </div>
      </>)
}