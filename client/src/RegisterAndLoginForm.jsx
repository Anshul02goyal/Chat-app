import axios from "axios";
import { useContext, useState } from "react"
import { UserContext } from "./UserContext";

export default function RegisterAndLoginForm(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginorRegister, setIsLoginorRegister] = useState('login');
    const {setUsername:setLoggedInUsername, setId} = useContext(UserContext);
    async function handleSubmit(ev) {
        ev.preventDefault();
        const url = isLoginorRegister === 'register'?'register' : 'login';
       const {data} = await axios.post(url, {username, password});
       setLoggedInUsername(username);
       setId(data.id);
    }

    return(
        <div className = "bg-black h-screen flex items-center">
            <form className="w-64 mx-auto mb-12" onSubmit = {handleSubmit}>
                <input value={username} onChange={ev => setUsername(ev.target.value)} type="text" placeholder="Username" className="block w-full bg-gray-600 text-white rounded-md p-2 mb-2"/>
                <input value={password} onChange={ev=>setPassword(ev.target.value)} type="password" placeholder="Password" className="block w-full bg-gray-600 text-white rounded-md p-2 mb-2"/>
                <button className="bg-blue-600 text-white block w-full rounded-md p-2">
                    {isLoginorRegister === 'register' ? 'Register' : 'Login'}
                </button>
                <div className="text-center text-white mt-2">
                    {isLoginorRegister === 'register' && (
                        <div className="ml-1">
                            Already a member? 
                            <button onClick={() => setIsLoginorRegister('login')}>
                                Login here
                            </button>
                        </div>
                    )}
                    {isLoginorRegister === 'login' && (
                        <div className="ml-1">
                            Don&apos;t have an account? 
                            <button className="mx-3" onClick={() => setIsLoginorRegister('register')}>
                                Register
                            </button>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}