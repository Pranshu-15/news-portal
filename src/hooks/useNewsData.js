import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsData } from '../store/newsSlice';

const useNewsData = (category, searchTerm) => {
  const dispatch = useDispatch();
  const { newsData, loading, error } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNewsData(category, searchTerm));
  }, [category, searchTerm, dispatch]);

  return { newsData: Array.isArray(newsData) ? newsData : [], loading, error };
};

export default useNewsData;
