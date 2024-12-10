import React, { useState } from "react";
import AuthForm from "../components/authformuthForm";
import axios from "axios";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", formData);
            alert("Login successful");
            console.log(response.data); // Store token or use as needed
        } catch (err) {
            alert("Login failed");
        }
    };

    return (
        <AuthForm
            title="Login"
            fields={[
                { label: "Email", type: "email", name: "email", onChange: handleChange },
                { label: "Password", type: "password", name: "password", onChange: handleChange },
            ]}
            handleSubmit={handleSubmit}
        />
    );
};

export default Login;
