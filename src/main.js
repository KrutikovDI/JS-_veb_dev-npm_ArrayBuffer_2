export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return (input => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

export class ArrayBufferConverter{
  constructor(){}
  load(){
    return new Uint16Array(getBuffer())
  }
  toString(data){
    let correct = ''
    for (let index = 0; index < data.length; index++) {
      correct = correct + String.fromCharCode(data[index])
    }
    return correct
  }
}

const something = new ArrayBufferConverter
const data = something.load();
console.log(something.toString(data));