import { todos } from "../api/todosService";

export function sum(a: number | string | undefined, b: number | string): number | string | undefined {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  if (typeof a === 'string' && typeof b === 'string') return a + b;

  if (a === undefined && typeof b == 'number') return 10 + b;
}

export function getUserInfo(name: string, age: number, havePet: boolean) {
  return {
    name,
    age,
    havePet,
  }
}

export function counter(value: number) {
  return value;
}

export async function getData() {
  const data = await todos.get();

  return data;
}
