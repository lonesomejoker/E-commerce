import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("api/allproduct", 
  async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
   //converts incoming data in to json
  return response;
 
});

export const fetchCarousal = createAsyncThunk("api/fetchcarousal", 
  async () => {
  const response = await axios.get("https://fakestoreapi.com/products?limit=5");
   
  return response;
 
});
export const fetchUser = createAsyncThunk("api/fetchuser", 
  async () => {
  const response = await axios.get("https://fakestoreapi.com/users");
  return response;
});

export const fetchSearch = createAsyncThunk("api/fetchsearch", 
  async (category) => {
  const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
  return response;
});

export const fetchSearchProduct = createAsyncThunk("api/fetchsearchproduct", 
  async (id) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response;
 
});

export const fetchSort = createAsyncThunk("api/fetchsort", 
  async (sort) => {
  const response = await axios.get(`https://fakestoreapi.com/products?sort=${sort}`);
  return response;
});