export const reducer = (state, action) => {
    if (action.type === "REMOVE_ITEM") {
        return{
            ...state,
            item : state.item.filter((crntelm)=>{
                return crntelm.id  !== action.paylord
            })
        }
    }
    return state
}