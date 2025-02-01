import {useDispatch} from 'react-redux';
import {AppDispatch} from '@/app/providers/StoreProvider';

// export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useAppDispatch: () => AppDispatch = useDispatch;