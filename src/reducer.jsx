export const reducer = (state, action) => {
    if (action.type === "REMOVE_ITEM") {
        return {
            ...state,
            item: state.item.filter((crntelm) => {
                return crntelm.id !== action.paylord
            })
        }
    }
    if (action.type === "REMOVE_ALL") {
        return {
            ...state,
            item: []
        }
    }

    if (action.type === "INCREASE") {
        let updatecart = state.item.map((crntelm) => {
            if (crntelm.id === action.paylord) {
                return {
                    ...crntelm,
                    quantity: crntelm.quantity + 1
                }
            }
            return crntelm;
        })
        return {
            ...state,
            item: updatecart,
        }
    }
    if (action.type === "DECRESE") {
        let updatecart = state.item.map((crntelm) => {
            if (crntelm.id === action.paylord) {
                return {
                    ...crntelm,
                    quantity: crntelm.quantity - 1
                }
            }
            return crntelm;
        }).filter((crntelm) => {
            return crntelm.quantity !== 0
        })
        return {
            ...state,
            item: updatecart,
        }
    }
    if (action.type === "GET_TOTAL") {
        let { totalItem, totalAmount } = state.item.reduce((accum, crntelm) => {
            let { quantity, price } = crntelm
            let updateTotal = price * quantity
            accum.totalAmount += updateTotal

            accum.totalItem += quantity
            return accum;
        },
            {
                totalItem: 0,
                totalAmount: 0,
            }
        )
        return { ...state, totalItem, totalAmount }
    }


    return state
}