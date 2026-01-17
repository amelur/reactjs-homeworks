import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export type Meal = {
    id: string
    meal: string
    category: string
    area: string
    instructions: string
    img: string
    price: number
}

type MealsState = {
    data: Meal[] | null
    loading: boolean
    error: string | null
}

const initialState: MealsState = {
    data: null,
    loading: false,
    error: null,
}

export const getMealsData = createAsyncThunk<
    Meal[],
    void,
    { rejectValue: string }
>(
    'meals/getMealsData',
    async (_, {rejectWithValue}) => {
        try {
            const res = await fetch(
                'https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals'
            )

            if (!res.ok) {
                throw new Error('Failed to fetch meals')
            }

            const data: Meal[] = await res.json()
            return data
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            }
            return rejectWithValue('Unknown error')
        }
    }
)

const mealsSlice = createSlice({
    name: 'meals',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMealsData.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getMealsData.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(getMealsData.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? 'Failed to load meals'
            })
    },
})

export default mealsSlice.reducer
