function solution(str_list, ex) {
    var answer = '';
    answer = str_list.filter((value)=>{
        if(value.includes(ex)){
            return false
        }
        return true
    })
    return answer.join('');
}