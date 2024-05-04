function solution(n)
{
    var answer = 0;
    let b = String(n)
    for (let i=0; i<b.length; i++){
        answer += Number(b[i])
    }
  
    return answer;
}