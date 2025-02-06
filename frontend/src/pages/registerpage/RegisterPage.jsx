import React, { useState } from 'react'
import {Link} from "react-router-dom"
const RegisterPage = () => {
    const [inputs, setInputs] = useState({
		username: "",
		email: "",
		password: "",
	});
    const handleSignup = async () => {
		try {
			const res = await fetch("http://localhost:7000/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(inputs),
			});
			const data = await res.json();

			if (data.error) {
				showToast("Error", data.error, "error");
				return;
			}

			localStorage.setItem("users", JSON.stringify(data));
			setUser(data);
		} catch (error) {
			showToast("Error", error, "error");
		}
	};
  return (
    <div>
        Register baby
    </div>
  )
}

export default RegisterPage