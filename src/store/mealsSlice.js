import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMealsData = createAsyncThunk(
    "meals/getMealsData",
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch(
                "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals"
            );

            if (!res.ok) {
                throw new Error("Failed to fetch meals");
            }

            return await res.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const mealsSlice = createSlice({
    name: "meals",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMealsData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMealsData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getMealsData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default mealsSlice.reducer;
