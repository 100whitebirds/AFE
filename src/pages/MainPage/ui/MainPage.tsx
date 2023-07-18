import { Counter } from 'entities/Counter';
import { useState } from 'react';
import { Input } from 'shared/ui/Input/Input';

export const MainPage = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <Input
        placeholder="Введите текст"
        onChange={setValue}
      />
    </div>
  );
};
