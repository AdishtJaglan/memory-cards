const createArray = () => {
  const arr = [];
  while (arr.length < 8) {
    const randomNum = Math.floor(Math.random() * 30) + 1;
    if (!arr.includes(randomNum)) {
      arr.push(randomNum);
    }
  }
  return arr;
};

export const shuffleArray = (idsArray, clickedArray) => {
  let newIdsArray = [...idsArray];
  let newClickedArray = [...clickedArray];

  for (let i = newIdsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newIdsArray[i], newIdsArray[j]] = [newIdsArray[j], newIdsArray[i]];
    [newClickedArray[i], newClickedArray[j]] = [
      newClickedArray[j],
      newClickedArray[i],
    ];
  }

  return { newIdsArray, newClickedArray };
};

export default createArray;
