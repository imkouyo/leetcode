//编写一个函数来查找字符串数组中的最长公共前缀。 
//
// 如果不存在公共前缀，返回空字符串 ""。 
//
// 示例 1: 
//
// 输入: ["flower","flow","flight"]
//输出: "fl"
// 
//
// 示例 2: 
//
// 输入: ["dog","racecar","car"]
//输出: ""
//解释: 输入不存在公共前缀。
// 
//
// 说明: 
//
// 所有输入只包含小写字母 a-z 。 
// Related Topics 字符串



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length > 1) {
        let target = strs[0];
        count = '';
        if (target.length > 0) {
            for (let i of target) {
                let e = new RegExp(`^${count+i}`);
                for (let j of strs) {
                    console.log(j);
                    if (!e.test(j)) {
                        return count;
                    }
                }
                count += i;
            }
            return count
        } else {
            return '';
        }
    } else if(strs.length === 1){
        return strs[0];
    } else {
        return '';
    }


    
};
//leetcode submit region end(Prohibit modification and deletion)
// console.log(longestCommonPrefix(["flower","flow","flight"]));