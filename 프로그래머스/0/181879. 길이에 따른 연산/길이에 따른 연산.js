function solution(num_list) {    
    if (num_list.length > 10) {
        let sum = 0;
        num_list.forEach((num) => sum += num);
        // num_list.forEach((num) => sum = sum + num)
        return sum;
    }
    let mul = 1;
    num_list.forEach((num) => mul *= num);
    return mul;
}