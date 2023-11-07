import { createSlice } from '@reduxjs/toolkit'

import { dummyData } from '../../dummyData'

const initialState = {
    data: dummyData
  }

  export const HomeSlice =createSlice({
    name: 'dummyData',
    initialState,
 
  })


export default HomeSlice.reducer