import { useEffect } from 'react';

export const MainPage = () => {
  return (
    <div id="parent" onClick={() => console.log('Parent clicked')}>
      PARENT
      <div id="child" onClick={() => console.log('Child clicked')}>
        CHILD
      </div>
    </div>
  );
};
