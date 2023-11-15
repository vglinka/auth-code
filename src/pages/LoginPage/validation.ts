export const validation = (fields: Record<string, string>) => {
  const errors: Record<string, string> = {};
  Object.keys(fields).forEach((key) => {
    if (fields[key] === '') {
      errors[key] = `Вы не заполнили ${key}`;
    }
  });
  return errors;
};
