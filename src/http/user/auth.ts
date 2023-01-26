import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ILoginForm, IRegisterForm } from "../../types/forms";

export const registerApi = createAsyncThunk(
  "user/auth/register",
  async (formData: IRegisterForm, thankAPI) => {
    try {
      console.log({ ...formData, role: "ADMIN" });
      const { status, data } = await axios.post(
        "http://192.168.0.103:4000/api/user/registration",
        {
          ...formData,
          role: "ADMIN",
        }
      );

      // console.log("res", res);

      // console.log(res);

      if (status === 200 && data) {
        return thankAPI.fulfillWithValue({
          token: data.token,
          user: data.user,
        });
      } else {
      }
    } catch (error) {
      console.log(error);
      return thankAPI.rejectWithValue(error);
    }
  }
);

export const logInApi = createAsyncThunk(
  "user/auth/login",
  async (formData: ILoginForm, thankAPI) => {
    try {
      console.log({ ...formData, role: "ADMIN" });
      const res = await axios.post(
        "http://192.168.0.103:4000/api/user/login",
        formData
      );

      // console.log("res", res);

      console.log("res.status", res.status);

      if (res.status === 200 && res.data) {
        return thankAPI.fulfillWithValue({
          token: res.data.token,
          user: res.data.user,
        });
      } else if (res.status === 403) {
        thankAPI.rejectWithValue("Password not correct");
        throw new Error("Password not correct");
      } else if (res.status === 404) {
        return thankAPI.rejectWithValue("User not found");
      } else {
        return thankAPI.rejectWithValue("Some errror");
      }
    } catch (error) {
      console.log(error);
      return thankAPI.rejectWithValue("Login or Password not correct");
    }
  }
);
