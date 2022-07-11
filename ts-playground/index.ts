// type NamedVales = { firstName: string; lastName: string };

// const addFullName = <T extends NamedVales>(obj: T) => {
//   return { ...obj, fullName: `${obj.firstName} ${obj.lastName}` };
// };

type ArrayFilter<T> = T extends any[] ? T : never;

type StringOrNumber = ArrayFilter<string | number | string[] | number[]>;
