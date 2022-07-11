const numbers = [2, 3];

const someObject = {
  id: 2,
  name: "subham",
};

const someBoolean = true;

type FlattenArray<T extends any[]> = T[number];
type FlattenObject<T extends object> = T[keyof T];

type NumbersArrayFlattened = FlattenArray<typeof numbers>;
type ObjectFlattened = FlattenObject<typeof someObject>;
