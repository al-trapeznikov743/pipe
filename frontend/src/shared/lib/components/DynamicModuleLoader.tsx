import {FC, ReactNode, useEffect} from 'react';
import {useStore} from 'react-redux';
import {Reducer} from '@reduxjs/toolkit';
import {ExtendedStore} from '@/app/providers/StoreProvider';
import {StateSchemaKey} from '@/app/providers/StoreProvider/config/StateSchema';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
}

type RedusersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  isRemoveUnmount?: boolean;
  children: ReactNode;
};

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
  reducers,
  isRemoveUnmount = false,
  children
}) => {
  const store = useStore() as ExtendedStore;

  useEffect(() => {

    console.log('reducers_415: ', reducers);

    Object.entries(reducers)
      .forEach(([storeKey, reducer]: RedusersListEntry) => {
        store.reducerManager.add(storeKey, reducer);
      });
  
    return () => {
      if (isRemoveUnmount) {
        Object.entries(reducers)
          .forEach(([storeKey]: RedusersListEntry) => {
            store.reducerManager.remove(storeKey);
          });
      }
    };
  }, []);

  return children;
};