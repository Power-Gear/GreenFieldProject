import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbarr';

const AdminDashboard = () => {
  const navigate=useNavigate()
  const cardStyle = {
    maxWidth: 1800,
    margin: 'auto',
    padding: '20px',
    textAlign: 'center',
    backgroundColor:'#e0e1dd'

  };

  const buttonStyle = {
    marginRight: '10px',
    backgroundColor: '#ffb703',
    color: 'black',
    border:'solid',
    borderColor:'black'
  };
  const Logout = () => {
    localStorage.removeItem("User");
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <Box sx={cardStyle}>
        <Card>
          <CardContent>
            <Typography variant="h1" component="h2" gutterBottom>
              Dashboard
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="/admin/products"
              sx={buttonStyle}
            >
              Products
            </Button>
            <Button
              variant="contained"
              component={Link}
              to="/admin/users"
              sx={buttonStyle}
            >
              Users
            </Button>
            <Button
              variant="contained"
              component={Link}
              to="/admin/orders"
              sx={buttonStyle}
            >
              Orders
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
      </Box>
    </div>
  );
};

export default AdminDashboard;
