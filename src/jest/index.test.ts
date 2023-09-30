import { counter, getData, getUserInfo, sum } from ".";
import { MOCKED_TODOS_DATA } from "./mocked";

describe('sum', () => {
  it('function sum should work correctly with numbers', () => {
    const result = sum(3, 5);
  
    expect(result).toBe(8);
    expect(result).not.toBe(7);
  });
  
  it('function sum should work correctly with strings', () => {
    const result = sum('Hello,', 'World!');
  
    expect(result).toBe('Hello,World!');
    expect(result).not.toBe('Hello, World!');
  });
  
  
  it('function sum should work correctly if a undefined', () => {
    const result = sum(undefined, 5);
  
    expect(result).toBe(15);
    expect(result).not.toBe(undefined);
  });
})

test('getUserInfo should return coorrct object', () => {
  const result = getUserInfo('Sasha', 28, true);

  expect(result).toEqual({
    name: 'Sasha',
    age: 28,
    havePet: true,
  });
});

describe('counter', () => {
  let count = 1;

  beforeEach(() => {
    count++;
  });

  afterEach(() => {
    count = 1;
  })

  it('counter should work correctly', () => {
    const result = counter(10);

    expect(result).toBe(10);
  });

  it('counter should get right value', () => {
    const result = counter(count);

    expect(result).toBe(2);
  })
});

// test('async getData should return value', async () => {
//   const result = await getData();

//   expect(result[0]).toEqual(MOCKED_TODOS_DATA);
// });

