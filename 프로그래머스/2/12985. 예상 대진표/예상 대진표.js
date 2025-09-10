function solution(n,a,b) // 4 7
{
    let answer = 0;
    while (a != b){
        a = Math.ceil(a / 2); // 2 1 
        b = Math.ceil(b / 2); // 4 2
        ++ answer;
    }
    
    return answer
}