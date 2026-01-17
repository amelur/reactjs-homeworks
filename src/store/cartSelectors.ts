import {RootState} from './index'

export const totalMealsSelector = (state: RootState): number =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)