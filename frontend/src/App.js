import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/loginogin";
import Register from "./pages/Register";
import { Box, Button } from "@mui/material";

const App = () => {
    return (
        <Router>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    backgroundColor: "#f0f4f8",
                }}
            >
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
                <Box sx={{ position: "absolute", top: 16, right: 16 }}>
                    <Link to="/login" style={{ textDecoration: "none", marginRight: "10px" }}>
                        <Button variant="contained" color="primary">
                            Login
                        </Button>
                    </Link>
                    <Link to="/register" style={{ textDecoration: "none" }}>
                        <Button variant="outlined" color="primary">
                            Register
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Router>
    );
};

export default App;
