//给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。 
//
// 示例 1: 
//
// 输入: 123
//输出: 321
// 
//
// 示例 2: 
//
// 输入: -123
//输出: -321
// 
//
// 示例 3: 
//
// 输入: 120
//输出: 21
// 
//
// 注意: 
//
// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231, 231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。 
// Related Topics 数学



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var isNegative = x < 0;
    var str = x < 0 ? (-x).toString() : x.toString();
    var answerStr = '';
    var answer = 0;
    for (var i = str.length -1; i >= 0; i--) {
        answerStr += str[i];
    }
    if (isNegative) {
        answer = parseInt(answerStr) > (Math.pow(2, 31)) ? 0 : parseInt(answerStr) * -1;
    } else {
        answer = parseInt(answerStr) > (Math.pow(2, 31) -1) ? 0 : parseInt(answerStr);
    }
    return answer;


};
//leetcode submit region end(Prohibit modification and deletion)