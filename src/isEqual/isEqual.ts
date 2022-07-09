let a = 0;
export const isEqual = (obj1: object, obj2: object): boolean => {
  a += 1;
  const tx = Array.isArray(obj1) ? 'array' : typeof obj1;
  const ty = Array.isArray(obj2) ? 'array' : typeof obj2;
  console.log(a);
  return obj1 && obj2
    && (tx === 'object' || tx === 'array')
    && tx === ty
    ? Object.keys(obj1).length === Object.keys(obj2).length
    && Object
      .keys(obj1 as object)
      .every((key) => isEqual(obj1[key as keyof object], obj2[key as keyof object]))
    : obj1 === obj2;
};
