const getNum = (yolo, j) => {
  if (j < 0 || j >= yolo.length) {
    return 0;
  }
  return yolo[j];
};

// const yanghuiT = (rowIndex) => {
//   let theRow = rowIndex;
//   let Row = [1];
//   let yRow = [];
//   let test;
//   test = Array.from("foo");
//   for (i = 0; i < theRow; i++) {
//     let xRow = [];
//     for (j = 0; j <= i; j++) {
//       let digit = getNum(Row, j - 1) + getNum(Row, j);
//       console.log(getNum(Row, j));
//       xRow.push(digit);
//     }
//     yRow.push(xRow);
//     Row = yRow;
//   }
//   return yRow;
// };
// console.table(yanghuiT(4));

const yanghuiT = (rowIndex) => {
  let row = [1];

  let yRow = [[1]];

  for (let i = 0; i < rowIndex; i++) {
    let xRow = [];
    for (let j = 0; j <= i + 1; j++) {
      let firstNumber = getNum(row, j - 1);
      let secondNumber = getNum(row, j);
      let digit = firstNumber + secondNumber;
      xRow.push(digit);
    }
    yRow.push(xRow);
    row = xRow;
  }

  return yRow;
};

console.table(yanghuiT(5));
