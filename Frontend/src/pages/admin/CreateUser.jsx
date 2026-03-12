import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CreateUser(){
      const token = localStorage.getItem('token')
      const navigateTo = useNavigate()
      
      const [form,setForm]= useState({
            username : '',
            password : ''
      });

      const handleForm = (e)=>{
            const {name, value} = e.target
            setForm(f=>({...f, [name]:value}))
      }

      const handleSubmit = ()=>{
            axios({
                  method: 'post',
                  url: 'http://localhost:8000/api/v1/users',
                  headers:{
                        'Authorization':"Bearer "+token
                  },
                  data: {
                        "username":form.username,
                        "password":form.password
                  }
            })
                  .then(response => {
                        console.log(response.data)
                        navigateTo('/users')
                  })
                  .catch(error => {
                        console.log(error.response.data.errors.password[0])
                        if(error.response.data.errors?.username?.[0]?.message){
                              alert(error.response.data.errors.username[0].message)
                        }else if(error.response.data.errors?.password?.[0]){
                              alert(error.response.data.errors.password[0])
                        }else{
                              alert("error unknown")
                        }
                        
                  });
      }

      return(
            <>
                  <div className="bg-gray-100">
                        <div className="max-w-5xl m-auto">
                              <h1>Create New User</h1>
                        </div>
                  </div>
                  <div className="max-w-5xl m-auto">
                        <h3 className="mb-2">Username</h3>
                        <input type="text" className="w-full mb-4" placeholder="Username..." name="username" onChange={handleForm}/>
                        <h3 className="mb-2">Password</h3>
                        <input type="text" className="w-full mb-4" placeholder="Password..." name="password" onChange={handleForm}/>
                              <button className="bg-blue-500" onClick={handleSubmit}>Create</button>
                  </div>
            </>
      )
}