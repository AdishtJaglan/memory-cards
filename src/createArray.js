const createArray = () => {
  const arr = [];
  while (arr.length < 8) {
    const randomNum = Math.floor(Math.random() * 150) + 1;
    if (!arr.includes(randomNum)) {
      arr.push(randomNum);
    }
  }
  return arr;
};

export default createArray;
