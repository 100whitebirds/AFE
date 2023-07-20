import { ReactNode, useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';
import {
  ReduxStoreWithManager,
  StateSchemaKey,
} from 'app/providers/StoreProvider/config/types';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
  children: ReactNode;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const { children, reducers, removeAfterUnmount } = props;

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({
        type: `@INIT ${name} reducer`,
      });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, _]: ReducersListEntry) => {
          store.reducerManager.remove(name);
          dispatch({
            type: `@DESTROY ${name} reducer`,
          });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  );
};
