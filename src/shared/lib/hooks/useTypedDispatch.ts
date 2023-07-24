import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../app/providers/StoreProvider/config/types';

export const useTypedDispatch = () => useDispatch<AppDispatch>();
