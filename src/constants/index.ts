// export let str: string = 'Hello World!';
// const value: number = 10000;
// const isTrue: boolean = false;
// const someVariabble: null = null;
// const someVariabbe: undefined = undefined;

// type MaybeString = string | null | undefined;

// const firstName: MaybeString = undefined;

// const fruits: any[] = ['apple', 'banana', 'orange'];
// const value: number[] | undefined = [0, 1, 2];

// type Children = {
//   firstName: string;
//   lastName: string;
//   age: number;
// };

// type UserData = {
//   firstName: string;
//   lastName: string;
//   age: number;
//   pets: string[];
//   isMarriage: boolean;
//   children?: Children[];
// };

// enum REST_FULL_API {
//   GET = 'get',
//   POST = 'post',
//   DELETE = 'delete',
//   PUT = 'put',
// }

// interface UserData {
//   firstName: string;
//   lastName: string;
//   rest: REST_FULL_API;
//   age: number;
//   pets: string[];
//   isMarriage: boolean;
//   children?: Children[];
// };

// const userData: UserData = {
//   firstName: 'Sasha',
//   lastName: 'Dontsova',
//   rest: REST_FULL_API.GET,
//   age: 28,
//   pets: ['cat', 'dog', 'spider', 'moth'],
//   isMarriage: false,
//   children: [
//     {
//       firstName: 'Vova',
//       lastName: 'Dontsov',
//       age: 2,
//     },
//     {
//       firstName: 'Olha',
//       lastName: 'Dontsova',
//       age: 5,
//     },
//   ],
// };

// function renderValue(): void {
//   document.write('Hello world!');
// }

// function sum(a: number | null, b: number): number | undefined {
//   if (a) return a + b;
// }

// sum(1, 2);

// function printData<x, y>(data1: x, data2: y): void {
//   console.log(`Output data ${data1}, ${data2}`);
// }

// printData(10, 200);
// printData('Hello!', 'My friends!');
