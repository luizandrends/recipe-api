const parseStringToArray = (regularString: string): string[] => {
  const array = [];

  const separateByComma = regularString.split(', ');

  for (let i = 0; i < separateByComma.length; i += 1) {
    array.push(separateByComma[i]);
  }

  array.sort();

  return array;
};

export default parseStringToArray;
