module.exports = function(number) {
    const romanNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    
    if (number <= 0 || number >= 4000) return number
    
    let answer = ''
    for (let i = 0; i < romanNum.length; i++) {
        while (number >= numbers[i]) {
            number -= numbers[i]
            answer += romanNum[i]
        }
    }
    return answer
}
