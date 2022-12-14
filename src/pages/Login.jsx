import React from 'react'
import { useForm } from 'react-hook-form'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import NewUsers from './NewUsers'

const Login = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const submit = (data) => {
    axios
      .post('https://e-commerce-api.academlo.tech/api/v1/users/login', data)
      .then((res) => {
        navigate('/')
        console.log(res)
        localStorage.setItem('token', res.data.data.token) // esta linda manda las credenciales token dentro de localstorage
      })

      .catch((error) => {
        if (error.response?.status === 404) {
          alert('credencial incorrecto')
        } else {
          console.log(error.response?.data)
        }
      })
  }

  return (
    <Form
      onSubmit={handleSubmit(submit)}
      style={{ maxWidth: 500, margin: 'o auto' }}
    >
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter email'
          {...register('email')}
        />
        <Form.Text className='text-muted'>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Password'
          {...register('password')}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicCheckbox'>
        <Form.Check type='checkbox' label='Check me out' />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
      <Link to={'/newusers'}>create users</Link>
    </Form>
  )
}

export default Login
