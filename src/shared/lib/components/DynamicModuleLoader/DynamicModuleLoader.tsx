import { ReactNode, useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { useStore } from 'react-redux';
import {
  ReduxStoreWithManager,
  StateSchemaKey,
} from 'app/providers/StoreProvider/config/types';
import { useTypedDispatch } from 'shared/lib/hooks/useTypedDispatch';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
  children: ReactNode;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const { children, reducers, removeAfterUnmount } = props;

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useTypedDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer);
      dispatch({
        type: `@INIT ${name} reducer`,
      });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, _]) => {
          store.reducerManager.remove(name as StateSchemaKey);
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
