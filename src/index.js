module.exports = function check(str, bracketsConfig) {
const stack = [],
        leftBrackets = bracketsConfig.filter(item => item[0] !== item[1]).map(item => item[0]),
		rightBrackets = bracketsConfig.filter(item => item[0] !== item[1]).map(item => item[1]),
		sameBrackets = bracketsConfig.filter(item => item[0] === item[1]).map(item => item[0]);

  for (let i = 0; i < str.length; i++) {
	  if ( leftBrackets.indexOf(str[i]) >= 0 ) {
		  stack.push(str[i]);
	  } else if ( rightBrackets.indexOf(str[i]) >= 0 ) {
		  if (stack.length > 0 && rightBrackets.indexOf(str[i]) === leftBrackets.indexOf(stack[stack.length - 1])) {
		    stack.pop();
		  } else return false;
	  } else if ( sameBrackets.indexOf(str[i]) >= 0 ) {
		  if ( stack.indexOf(str[i]) < 0 ) {
			  stack.push(str[i]);
		  }else if ( stack.indexOf(str[i]) >= 0 && sameBrackets.indexOf(stack[stack.length - 1]) === sameBrackets.indexOf(str[i])) {
			  
			  stack.pop();
		  }else return false;
	  }
  }
  return stack.length === 0 ? true : false;
}
