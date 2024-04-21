import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://661f6f4916358961cd944d24.mockapi.io/api";

export const getFullListCampers = createAsyncThunk(
  "campers/getFullList",
  async (limit, thunkAPI) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/adverts`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFilteredCampers = createAsyncThunk(
  "campers/filtered",
  async (filters, thunkAPI) => {
    const { location, equipment, type } = filters;
    try {
      const { data } = await axios.get(
        `${BASE_URL}/adverts?location=${location}&equipment=${equipment}&form=${type}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
