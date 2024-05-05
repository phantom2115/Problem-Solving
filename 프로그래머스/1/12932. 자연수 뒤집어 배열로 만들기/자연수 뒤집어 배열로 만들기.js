function solution(n) {
    let a = String(n)
    var answer = [];
    for(let i = 1; i <=a.length;i++){
        let b = Number(a[a.length-i])
        answer.push(b)
    }
 
    return answer;
}