export const toTypeNameFromEnum = (enumName: string) => {
  return enumName
    .split('_')
    .map((part) => `${part[0].toUpperCase()}${part.slice(1).toLowerCase()}`)
    .join('');
};
