import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  newsData: [],
  loading: true,
  error: null,
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
};

// Create slice
const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNewsData: (state, action) => {
      state.newsData = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (article) => article.article_id !== action.payload
      );
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
});

// Export actions
export const { setNewsData, setLoading, setError, addFavorite, removeFavorite } = newsSlice.actions;

// Async thunk for fetching news data
export const fetchNewsData = (category, searchTerm) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const apiKey = process.env.REACT_APP_GNEWS_API_KEY;
    const apiUrl = `https://newsdata.io/api/1/latest?apikey=${apiKey}`;
    const categoryParam = category ? `&q=${category}` : '';
    const searchParam = searchTerm ? `&q=${searchTerm}` : '';
    const languageParam = '&language=en';
    const imageParam = '&image=1';
    const url = apiUrl + categoryParam + searchParam + languageParam + imageParam;

    const response = await fetch(url);
    const data = await response.json();

    dispatch(setNewsData(data.results));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

// Export reducer
export default newsSlice.reducer;
