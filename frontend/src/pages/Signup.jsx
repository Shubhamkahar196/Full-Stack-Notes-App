import React ,{useState} from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import PasswordInput from "../components/Input/PasswordInput"
import { validateEmail } from '../utils/helper';

const Signup = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [ error, setError] = useState(null);


const handleSignUp = async (e) =>{
  e.preventDefault();

  if(!name){
    setError("Please enter your name");
    return;
  }

  if(!validateEmail(email)){
    setError("Please enter a valid email address");
  return;
  }

  if(!password){
    setError("Please enter the password");
    return;
  }

  setError('')

  //signup API Call
}

  return <>
          <Navbar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form action="" onSubmit={handleSignUp }>
            <h4 className="text-2xl mb-7">SignUp</h4>

             <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="input-box"
            />

             <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              className="input-box"
            />

                <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)}/>

                 {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}

            <button className="btn-primary" type="submit">
              Create Account
            </button>
            <p className="text-sm text-center mt-4">
              Not registered yet?{" "}
              <Link to="/login" className="font-medium text-primary underline">
                Login
              </Link>
            </p>


          </form>
          </div>
          </div>
  </>

}

export default Signup