import React, { useState } from "react";
import Api from "../Api"


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState('');
    const [error, seterror] = ('');

    const [emailError, setEmailerror] = useState('');
    const [passError, setError] = useState('');

    //const navigate = useNavigate();

    const handleInput = async (e) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    }

    const handleSubmit = async () => {
        try {
            setLoading(true);

            const formData = new FormData();

            if (email !== '') {
                if (password !== '') {
                    formData.append('user[email]', email);
                    formData.append('user[password]', password);

                    await Api.login(formData);
                    


                }

            }
        } catch(error) {
              setError(true);
              setTimeout(() => {
              setError(false);
              setLoading(false);
              setEmail('');
              setPassword('');
            //  window.location.reload();
            }, 2000);
          }
      

        
    }

    return (
        <div className="form">

           

            <label>Email</label>
            <input
                type='text'
                value={email}
                name='email'
                onChange={handleInput}
            />
            {emailError && <div className="formError">*Write your email</div>}
            <label>Password</label>
            <input
                type='password'
                value={password}
                name='password'
                onChange={handleInput}
            />
            {passError && <div className="formError">*Write your password</div>}

            <input type="button" value="Sign in" onClick={handleSubmit}/>

        </div >
    );

};
export default Login;