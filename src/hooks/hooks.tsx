import { useState } from "react";

export const useToggle = (defaultValue: boolean) => {
  const [value, setValue] = useState(defaultValue);

  const toggle = () => setValue(!value);

  return [value, toggle];
};
