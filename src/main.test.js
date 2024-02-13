import { ArrayBufferConverter, getBuffer } from './main'

test('проверяем метод load()', () => {
  const something = new ArrayBufferConverter;
  const data = something.load();
  expect(data).toEqual(new Uint16Array(getBuffer()));
})

test('проверяем метод toString()', () => {
  const something = new ArrayBufferConverter;
  const data = something.load();
  const correct = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}'
  expect(something.toString(data)).toEqual(correct);
})