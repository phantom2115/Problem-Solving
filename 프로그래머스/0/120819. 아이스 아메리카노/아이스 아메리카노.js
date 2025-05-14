function solution(money) {
    var answer = [];
    const quotient = Math.floor(money/5500);
    answer.push(quotient)
    const remainder = money%5500;
    answer.push(remainder)
    return answer;
   
}