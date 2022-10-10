import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState : 'kim',
  reducers : {
    changeName(state) {
      return 'john' + state
    },
    asdad() {

    }
  }
})

export let { changeName, asdad } = user.actions


let stock = createSlice({
  name : 'stock',
  initialState : [10, 11, 12]
})

let arr = createSlice({
  name : 'arr',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ] 
})

export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    arr : arr.reducer
  }
}) 