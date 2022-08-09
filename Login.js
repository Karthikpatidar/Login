import React, { useState } from 'react'

const Login = () => {
    const [user, setuser] = useState("")
    const [password, setpassword] = useState("")
    const [UserErr, setUserErr] = useState(false)
    const [PassErr, setPassErr] = useState(false)
    function loginhandler(e) {
        e.preventDefault()
    }

    function userhandler(e){
        let item = e.target.value
       if (item.lenght<3){
         setUserErr(true)
       }
       else{      
        setUserErr(false)
       }
    }

    function passwordhandler(e){
        let pass = e.target.value
        if (pass.lenght<3){
          setPassErr(true)
        }
        else{      
         setPassErr(false)
        }
    }


  return (
    <div>
        <form onSubmit={loginhandler}>
            <h3>Loging details</h3> 
             <br/>
            <input type="text" placeholder='Enter User Id' onChange={userhandler}/>{ UserErr?<span>User not Valid</span>:""}
            <br/> <br/>
            <input type="text" placeholder='Enter your password' onChange={passwordhandler}/>{PassErr?<span>Enter correct password</span>:""}
            <br/> <br/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login