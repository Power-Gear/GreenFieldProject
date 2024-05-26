// Profile.jsx

import React, { useEffect, useState } from "react";
import { Container, Typography, Button, Card, CardContent, TextField } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbarr";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const [modified, setmodified] = useState({});
  const [modify, setmodify] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("User");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } 
  }, [location,modify]);

  const Logout = () => {
    localStorage.removeItem("User");
    navigate("/");
  };

  const ModifyProfile = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/User/${user.id}`, modified);
      console.log('Profile modified successfully:', response.data);
      setUser(modified); 
       localStorage.setItem("User",JSON.stringify({ ...user, ...modified }))
      setmodify(false);
    } catch (error) {
      console.error('Error modifying profile:', error);
    }
  };

  const Change = (e) => {
    const { name, value } = e.target;
    setmodified((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  if (!user) {
    return null;
  }

  return (
    <div>
      <Navbar />
      <Container>
        <Card style={{ maxWidth: 600, margin: '20px auto', padding: '20px', textAlign: "center" }}>
          <CardContent>
            {modify ? (
              <>
                <TextField
                  name="userName"
                  value={modified.userName || user.userName}
                  onChange={Change}
                  fullWidth
                  style={{ marginBottom: '10px' }}
                />
                <TextField
                  name="email"
                  value={modified.email || user.email}
                  onChange={Change}
                  fullWidth
                  style={{ marginBottom: '10px' }}
                />
                <TextField
                  name="adress"
                  value={modified.adress || user.adress}
                  onChange={Change}
                  fullWidth
                  style={{ marginBottom: '10px' }}
                />
                <TextField
                  name="Phone"
                  value={modified.Phone || user.Phone}
                  onChange={Change}
                  fullWidth
                  style={{ marginBottom: '10px' }}
                />
              </>
            ) : (
              <>
                <Typography variant="h4" gutterBottom>
                  {user.userName}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {user.email}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {user.adress}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {user.Phone}
                </Typography>
              </>
            )}
            <Button
              variant="contained"
              style={{ color: '#023047', backgroundColor: '#FFB703', border: "solid", borderColor: '#023047', marginRight: '10px' }}
              onClick={modify ? ModifyProfile : () => setmodify(true)}
            >
              {modify ? 'Save Changes' : 'Modify '}
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={Logout}
            >
              Logout
            </Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Profile;

