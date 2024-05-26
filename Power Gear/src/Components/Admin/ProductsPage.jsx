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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AdminLayout from "./AdminLayout";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [modify, setModify] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    id: "",
    name: "",
    price: "",
    picture: "",
    category: "",
    stock: "",
    description: "",
  });
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    picture: "",
    category: "",
    stock: "",
    description: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/Admin/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/Admin/products/${productId}`);
      setProducts(products.filter((product) => product.id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const updateProduct = async () => {
    try {
      await axios.put(
        `http://localhost:5000/Admin/products/${currentProduct.id}`,
        currentProduct
      );
      fetchProducts();

      setModify(false);
      setCurrentProduct({
        id: "",
        name: "",
        price: "",
        picture: "",
        category: "",
        stock: "",
        description: "",
      });
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const addProduct = async () => {
    try {
      await axios.post("http://localhost:5000/Admin/add", newProduct);
      fetchProducts();

      setNewProduct({
        name: "",
        price: "",
        picture: "",
        category: "",
        stock: "",
        description: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      <AdminLayout />

      <div style={{ marginBottom: "20px", border: "solid", padding: "5px" }}>
        <Typography variant="h5">Add New Product</Typography>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Name"
          type="text"
          fullWidth
          value={newProduct.name}
          onChange={(e) => {
            setNewProduct((prevProduct) => ({
              ...prevProduct,
              name: e.target.value,
            }));
          }}
        />
        <TextField
          margin="dense"
          name="category"
          label="Category"
          type="text"
          fullWidth
          value={newProduct.category}
          onChange={(e) => {
            setNewProduct((prevProduct) => ({
              ...prevProduct,
              category: e.target.value,
            }));
          }}
        />
        <TextField
          margin="dense"
          name="price"
          label="Price"
          type="number"
          fullWidth
          value={newProduct.price}
          onChange={(e) => {
            setNewProduct((prevProduct) => ({
              ...prevProduct,
              price: e.target.value,
            }));
          }}
        />
        <TextField
          margin="dense"
          name="picture"
          label="Picture URL"
          type="text"
          fullWidth
          value={newProduct.picture}
          onChange={(e) => {
            setNewProduct((prevProduct) => ({
              ...prevProduct,
              picture: e.target.value,
            }));
          }}
        />
        <TextField
          margin="dense"
          name="stock"
          label="Stock"
          type="number"
          fullWidth
          value={newProduct.stock}
          onChange={(e) => {
            setNewProduct((prevProduct) => ({
              ...prevProduct,
              stock: e.target.value,
            }));
          }}
        />
        <TextField
          margin="dense"
          name="description"
          label="Description"
          type="text"
          fullWidth
          value={newProduct.description}
          onChange={(e) => {
            setNewProduct((prevProduct) => ({
              ...prevProduct,
              description: e.target.value,
            }));
          }}
        />
        <Button variant="contained" color="primary" onClick={addProduct}>
          Add Product
        </Button>
      </div>
      <Typography
        variant="h3"
        gutterBottom
        style={{
          textAlign: "center",
          backgroundColor: "#FFB703",
          color: "#e0e1dd",
        }}
      >
        Products
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Picture</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>
                  <img
                    src={product.picture}
                    alt="img"
                    style={{ width: "100px" }}
                  />
                </TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>
                  <IconButton
                    aria-label="edit"
                    onClick={() => {
                      setCurrentProduct(product);
                      setModify(true);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => deleteProduct(product.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={modify}
        onClose={() => {
          setModify(false);
          setCurrentProduct({
            id: "",
            name: "",
            price: "",
            picture: "",
            category: "",
            stock: "",
            description: "",
          });
        }}
      >
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit the details of the product below.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={currentProduct.name}
            onChange={(e) => {
              setCurrentProduct((prevProduct) => ({
                ...prevProduct,
                name: e.target.value,
              }));
            }}
          />
          <TextField
            margin="dense"
            name="category"
            label="Category"
            type="text"
            fullWidth
            value={currentProduct.category}
            onChange={(e) => {
              setCurrentProduct((prevProduct) => ({
                ...prevProduct,
                category: e.target.value,
              }));
            }}
          />
          <TextField
            margin="dense"
            name="price"
            label="Price"
            type="number"
            fullWidth
            value={currentProduct.price}
            onChange={(e) => {
              setCurrentProduct((prevProduct) => ({
                ...prevProduct,
                price: e.target.value,
              }));
            }}
          />
          <TextField
            margin="dense"
            name="picture"
            label="Picture URL"
            type="text"
            fullWidth
            value={currentProduct.picture}
            onChange={(e) => {
              setCurrentProduct((prevProduct) => ({
                ...prevProduct,
                picture: e.target.value,
              }));
            }}
          />
          <TextField
            margin="dense"
            name="stock"
            label="Stock"
            type="number"
            fullWidth
            value={currentProduct.stock}
            onChange={(e) => {
              setCurrentProduct((prevProduct) => ({
                ...prevProduct,
                stock: e.target.value,
              }));
            }}
          />
          <TextField
            margin="dense"
            name="description"
            label="Description"
            type="text"
            fullWidth
            value={currentProduct.description}
            onChange={(e) => {
              setCurrentProduct((prevProduct) => ({
                ...prevProduct,
                description: e.target.value,
              }));
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setModify(false);
              setCurrentProduct({
                id: "",
                name: "",
                price: "",
                picture: "",
                category: "",
                stock: "",
                description: "",
              });
            }}
            color="primary"
          >
            Cancel
          </Button>
          <Button onClick={updateProduct} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductsPage;
