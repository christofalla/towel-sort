
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let string = [];

  if (matrix == undefined) {
      return string;
  }

  for (let i = 0; i < matrix.length; i = i + 1) {

      if (i % 2 == 1) {
          matrix[i] = matrix[i].reverse();
      }

      for (let a = 0; a < matrix[i].length; a = a + 1) {
          string.push(matrix[i][a]);
      }
      
  }

  return string;

}
