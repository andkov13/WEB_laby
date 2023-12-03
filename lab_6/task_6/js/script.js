function checkBrackets(str) {
    const stack = [];
    const openingBrackets = ['(', '{', '['];
    const closingBrackets = [')', '}', ']'];
  
    for (const char of str) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            const lastOpeningBracket = stack.pop();
            const expectedOpeningBracket = openingBrackets[closingBrackets.indexOf(char)];
  
            if (lastOpeningBracket !== expectedOpeningBracket) {
                return false; 
            }
        }
    }
  
    return stack.length === 0; 
}
  
console.log(checkBrackets("someFn()"));
console.log(checkBrackets("someFn({})"));
console.log(checkBrackets("someFn({[})]")); 
  