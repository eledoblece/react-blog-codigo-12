import { useState } from "react";
import { isEmail, isPasswordValid } from "../../utils/strings";

export default function SignIn() {
    const [inputs,setInputs] = useState({
        email: "",
        password: "",
    })

    const handleInputsChange = (event) => {
        const { value, name } = event.target;

        setInputs({
            ...inputs,
            [name]: value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        //validamos el correo
        console.log(isEmail(inputs.email));
        console.log(isPasswordValid(inputs.password))
    }

    return (
        <>
            <div className="h-screen flex justify-center items-center bg-gray-200">
                <div className="artboard-demo phone-2 p-6">
                    <h1 className="text-2x1">Sign in with email</h1>
                    <p className="mt-6 text-gray-900 font-light">
                        Enter the email address associated with your account.
                    </p>
                    <form onSubmit={handleSubmit} className="mt-10 w-full" noValidate>
                        <div>
                            <input 
                                type="email"
                                value={inputs.email}
                                name="email"
                                onChange={handleInputsChange}
                                placeholder="Type your email"
                                className="border border-red-500 outline-red-500 border-gray300 rounded-lg p-3 w-full bg-gray-50"
                            />
                        </div>
                        <span className="text-red-500">Ingresa un correo valido</span>
                        <div className="mt-6">
                            <input 
                                type="password"
                                value={inputs.password}
                                name="password"
                                onChange={handleInputsChange}
                                placeholder="Type your password"
                                className="border border-gray300 rounded-lg p-3 w-full bg-gray-50"
                            />
                        </div>
                        <div className="mt-6">
                            <button type="submit" className="btn btn-success w-full">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};