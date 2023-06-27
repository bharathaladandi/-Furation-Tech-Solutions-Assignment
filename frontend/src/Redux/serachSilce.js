import { createSlice } from '@reduxjs/toolkit';


const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query: '',
        datas: [],
        results: [],
        loading: false,
        error: null,
      },
  reducers: {
    setQuery: (state, action) => {
        state.query = action.payload;
        state.results = state.datas.filter(item =>
            item.title.toLowerCase().includes(action.payload.toLowerCase())
          );
      },
      setDatas: (state, action) => {
        state.datas = action.payload;
        state.results = action.payload; // Set initial results to all data
      },
      search: (state) => {
        state.results = state.datas.filter((item) =>
          item.title.toLowerCase().includes(state.query.toLowerCase())
        );
      },
      setLoading: (state, action) => {
        state.loading = action.payload;
      },
      setError: (state, action) => {
        state.error = action.payload;
    },
  },
});

export const { setQuery,setDatas, setResults, setLoading, setError, search } = searchSlice.actions;
export default searchSlice.reducer;