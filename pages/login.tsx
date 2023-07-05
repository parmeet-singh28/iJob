// import { useRouter } from 'next/router'
// import React, { useState } from 'react'
// import { Button, Form } from 'react-bootstrap'
// import { useAuth } from '../context/AuthContext'

// const Login = () => {
//   const router = useRouter()
//   const { user, login } = useAuth()
//   const [data, setData] = useState({
//     email: '',
//     password: '',
//   })

//   const handleLogin = async (e: any) => {
//     e.preventDefault()

//     console.log(user)
//     try {
//       await login(data.email, data.password)
//       router.push('/')
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   return (
//     <div className="login-container">
//       <h1 className="login-heading">Welcome Back!</h1>
//       <form className="login-form" onSubmit={handleLogin}>
//         <input type="text" placeholder="Username" className="login-input" />
//         <input type="password" placeholder="Password" className="login-input" />
//         <button type="submit" className="login-button" onSubmit={handleLogin}>Log In</button >
//       </form>
//       <p className="signup-link">Don't have an account? <a href="/signup">Sign up</a></p>
//     </div>
//   );
// };

// export default Login;


// import { useRouter } from 'next/router'
// import React, { useState } from 'react'
// import { Button, Form } from 'react-bootstrap'
// import { useAuth } from '../context/AuthContext'

// const Login = () => {
//   const router = useRouter()
//   const { user, login } = useAuth()
//   const [data, setData] = useState({
//     email: '',
//     password: '',
//   })

//   const handleLogin = async (e: any) => {
//     e.preventDefault()

//     console.log(user)
//     try {
//       await login(data.email, data.password)
//       router.push('/')
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   return (
//     <div
//       style={{
//         width: '40%',
//         margin: 'auto',
//       }}
//     >
//       <h1 className="text-center my-3 ">Login</h1>
//       <Form onSubmit={handleLogin}>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             onChange={(e: any) =>
//               setData({
//                 ...data,
//                 email: e.target.value,
//               })
//             }
//             value={data.email}
//             required
//             type="email"
//             placeholder="Enter email"
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             onChange={(e: any) =>
//               setData({
//                 ...data,
//                 password: e.target.value,
//               })
//             }
//             value={data.password}
//             required
//             type="password"
//             placeholder="Password"
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Login
//         </Button>
//       </Form>
//     </div>
//   )
// }

// export default Login




import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const router = useRouter()
  const { user, login } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleLogin = async (e: any) => {
    e.preventDefault()

    console.log(user)
    try {
      await login(data.email, data.password)
      router.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div
    className="login-container"
    >
      <h1 className="login-heading">Welcome Back!</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="login-form">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control  className="login-input" 
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
            required
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="login-form ">
          {/* <Form.Label >Password</Form.Label> */}
          <Form.Control className="login-input" 
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
            required
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button  type="submit" className="login-button">
          Login
        </Button>
      </Form>
        <p className="signup-link">Don't have an account? <a href="/signup">Sign up</a></p>
    </div>
  )
}

export default Login


