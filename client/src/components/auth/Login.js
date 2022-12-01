import { AuthConsumer } from "../../providers/AuthProvider";
import { useState } from "react";


const Login = ({handleLogin}) => {
  const [user, setUser] = useState({ email:'', password:''})

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(user)
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input 
          type='email'
          name='email'
          value={user.email}
          onChange={ (e) => setUser({...user, email: e.target.value})}
          required
          placeholder="Email"
        />
        <label>Password</label>
        <input 
          type='password'
          name='password'
          value={user.password}
          onChange={ (e) => setUser({...user, password: e.target.value})}
          required
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { value =>  <Login {...props} {...value}/>}
  </AuthConsumer>
)

export default ConnectedLogin;