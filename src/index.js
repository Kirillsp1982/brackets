module.exports = function check(str, bracketsConfig) {
   for (let i = 0; i < bracketsConfig.length; i++) {
	  let bracketLeft = bracketsConfig[i][0];
	  let bracketRight = bracketsConfig[i][1];
	  let count = 0;
	  
	  if (bracketLeft === bracketRight) {
		  for (let k = 0; k < str.length; k++) {
			  if (bracketLeft === str[k]) count++;
	      }
		  if (count % 2  !== 0) return false;
	  }else {
		  for (let j = 0; j < str.length; j++) {
		    if (bracketLeft === str[j]) count++;
			if (bracketRight === str[j]) count--;
			if (count < 0) return false;
	      }
		  if (count !== 0) return false;
	  } 	    
  }
  return true;
}
