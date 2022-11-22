import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState : 'kim',
  reducers : {
    changeName(state) {
      return 'jon' + state
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
  ],
  reducers : {
    addCount(state, action) {
      let cnt = state.findIndex((a) => { return a.id === action.payload})
      state[cnt].count++
    },
    addItem(state, action) {
      let newArr = action.payload;
      state.push(newArr)
    }
  }
})

export let { addCount, addItem } = arr.actions

export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    arr : arr.reducer
  }
}) 