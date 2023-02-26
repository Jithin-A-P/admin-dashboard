import { createSlice, Slice } from '@reduxjs/toolkit'

const initialState = {
  mode: 'dark',
}

export const globalSlice: Slice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    },
  },
})

export const { setMode } = globalSlice.actions

export default globalSlice.reducer
