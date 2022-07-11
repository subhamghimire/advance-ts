// interface StringContainer {
//   value: string;
//   format(): string;
//   split(): string;
// }

// interface NumberContainer {
//   value: number;
//   nearestPrime: number;
//   round(): number;
// }

// type Item<T> = {
//   id: T;
//   container: T extends string ? StringContainer : NumberContainer;
// };

// let item: Item<number> = {
//   id: 22,
//   container: null,
// };

// item.container.

// interface Book {
//   id: string;
//   toc: string[];
// }

// interface Tv {
//   id: number;
//   channels: number[];
// }

// type ItemService = {
//   getItem<T extends number | string>(id: T): T extends string ? Book : Tv;
// };

// let myItem: ItemService;

// const book = myItem.getItem("shades");
// const tv = myItem.getItem(22);
