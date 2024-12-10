import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const AuthForm = ({ title, fields, handleSubmit }) => {
    return (
        <Box
            sx={{
                width: 400,
                margin: "auto",
                padding: 4,
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                borderRadius: 2,
                backgroundColor: "white",
                textAlign: "center",
            }}
        >
            <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold", color: "#3f51b5" }}>
                {title}
            </Typography>
            <form onSubmit={handleSubmit}>
                {fields.map((field, index) => (
                    <TextField
                        key={index}
                        label={field.label}
                        type={field.type}
                        name={field.name}
                        fullWidth
                        sx={{ mb: 2 }}
                        onChange={field.onChange}
                        required
                    />
                ))}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                        mt: 2,
                        py: 1.5,
                        fontSize: 16,
                        textTransform: "none",
                    }}
                >
                    Submit
                </Button>
            </form>
        </Box>
    );
};

export default AuthForm;
