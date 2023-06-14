import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Api } from "../Api";

export let PrintThunk = createAsyncThunk(
  "print/PrintThunk",
  async (arg, ThunkApi) => {
    // console.log(arg.target)
    let { rejectWithValue } = ThunkApi;

    let url = arg?.target == "one" ? `/invoices/project_expenses/one/${arg?.id}` : `/invoices/project_expenses/${arg?.id}`
    try {
      let res = await axios.get(
        process.env.REACT_APP_API + url, Api()
      );

      // console.log(res.data);

      return res.data;
    } catch (error) {
      // console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);