function findShortestOfThreeWords(word1, word2, word3) {
  let arr = [word1, word2, word3];
    function shorter(A, B){
      if(B.length < A.length){
        return B;
      }
      return A;
    }
    return arr.reduce(shorter);
}
