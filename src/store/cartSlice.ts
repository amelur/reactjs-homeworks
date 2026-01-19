import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartItem = {
    id: string
    quantity: number
}

type CartState = {
    items: CartItem[]
}

const initialState: CartState = {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(
            state,
            action: PayloadAction<{ id: string; quantity: number }>
        ) {
            const { id, quantity } = action.payload
            const existing = state.items.find(item => item.id === id)

            if (existing) {
                existing.quantity += quantity
            } else {
                state.items.push({ id, quantity })
            }
        },

        removeFromCart(state, action: PayloadAction<string>) {
            state.items = state.items.filter(item => item.id !== action.payload)
        },

        clearCart(state) {
            state.items = []
        },
    },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
