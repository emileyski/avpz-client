import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAxiosInstance from "src/api/interceptors";
import { IUser } from "src/interfaces/IUser";

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async function (): Promise<IUser | null> {
    if (!localStorage.getItem("accessToken")) return null;

    const response = await getAxiosInstance(
      import.meta.env.VITE_APP_API_URL
    ).get("/user/profile");

    return response.data || null;

    // return {
    //   id: "e7aa3ebf-fc01-4994-82ef-07e60238c354",
    //   email: "admin@gmail.com",
    //   name: "Emil",
    //   role: "user",
    //   birthDate: new Date("1999-11-11T09:40:51.575Z"),
    //   createdAt: new Date("2023-08-11T09:40:51.575Z"),
    //   about: "I love programming",
    //   nickname: "admin",
    //   gender: "MALE",
    //   picture:
    //     "http://localhost:3000/api/files/634c19be-8e2f-4086-819a-85ef98041e8a",
    // };
  }
);

const initialState = {
  userData: null,
  status: "idle",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUserData: (state) => {
      state.userData = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchUserData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.userData = action.payload;
        state.status = "idle";
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = "error";
      }),
});

export const { clearUserData } = userSlice.actions;

export const getIsLoggedIn = (state) => !!state.user.userData;

export default userSlice.reducer;
