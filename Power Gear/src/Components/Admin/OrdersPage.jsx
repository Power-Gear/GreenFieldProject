import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AdminLayout from "./AdminLayout";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:5000/Admin/orders");
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const updateOrderStatus = async (orderId, status) => {
    try {
      await axios.put(`http://localhost:5000/Admin/orders/${orderId}`, { status });
      setOrders(orders.map(order => order.id === orderId ? { ...order, status } : order));
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const handleViewOrder = (orderId) => {
    navigate(`/Admin/orders/${orderId}`);
  };

  return (
    <div>
      <AdminLayout />
      <Typography
        variant="h3"
        gutterBottom
        style={{
          textAlign: "center",
          backgroundColor: "#FFB703",
          color: "#e0e1dd",
        }}
      >
        Orders
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order</TableCell>
              <TableCell>User Details</TableCell>
              <TableCell>Total Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} onClick={() => handleViewOrder(order.id)} style={{ cursor: "pointer" }}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.userId}</TableCell>
                <TableCell>{order.totalAmount}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.createdAt}</TableCell>
                <TableCell>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      updateOrderStatus(order.id, "completed");
                    }}
                    variant="contained"
                    color="primary"
                    style={{ marginRight: 8 }}
                  >
                    Completed
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      updateOrderStatus(order.id, "cancelled");
                    }}
                    variant="contained"
                    color="secondary"
                  >
                   Cancelled
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OrdersPage;
