import React, { useState } from "react";
import AuthForm from "../components/authformuthForm";
import axios from "axios";

const Register = () => {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/auth/register", formData);
            alert("User registered successfully");
        } catch (err) {
            alert("Error registering user");
        }
    };

    return (
        <AuthForm
            title="Register"
            fields={[
                { label: "Username", type: "text", name: "username", onChange: handleChange },
                { label: "Email", type: "email", name: "email", onChange: handleChange },
                { label: "Password", type: "password", name: "password", onChange: handleChange },
            ]}
            handleSubmit={handleSubmit}
        />
    );
};

export default Register;
