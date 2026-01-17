export const totalMealsSelector = (state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
