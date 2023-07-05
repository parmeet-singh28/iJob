
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'

const Signup = () => {
  const router = useRouter()
  const { user, signup } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleSignup = async (e: any) => {
    e.preventDefault()

    console.log(user)
    try {
      await signup(data.email, data.password)
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
      <Form onSubmit={handleSignup}>
        <Form.Group className="login-form">
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
        <Button  type="submit" className="login-button" >
          Signup
        </Button>
      </Form>
    </div>
  )
}

export default Signup


