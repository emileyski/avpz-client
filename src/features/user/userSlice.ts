import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAxiosInstance from "src/api/interceptors";
import { IUser } from "src/interfaces/IUser";

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async function (): Promise<IUser | null> {
    if (!localStorage.getItem("accessToken")) return null;

    try {
      const response = await getAxiosInstance(
        import.meta.env.VITE_APP_API_URL
      ).get("/user/profile");

      return response.data;
    } catch {
      return null;
    }
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
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
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

export const { clearUserData, setUserData } = userSlice.actions;

export const getIsLoggedIn = (state) => !!state.user.userData;

export default userSlice.reducer;
