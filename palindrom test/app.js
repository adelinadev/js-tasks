let string = 'eye';

function isPalindrome(string){
    let arr = string.split('');
    let reversArr = arr.reverse();
    let resString = reversArr.join('');
    let res = string === resString;
    return res;

}

console.log(isPalindrome(string));