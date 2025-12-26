function stringChop(str, size) {
  // your code here
if (str === null) return [];

  const result = [];
  size = Number(size); // convert chunk size to number

  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
