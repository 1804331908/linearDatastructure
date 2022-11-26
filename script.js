//Write a program to find all pairs of an integer array whose sum is equal to a given number?
var arr1 = [2, 3, 6, 7, -2, 3, 2, -4, 9]
sum = 5;
count = 0;
for(let i = 0; i<arr1.length; i++){
    
    if((arr1[i]+arr1[i+1]) == 5){
      
       count++;

    }
}
console.log(count)


//Write a program to check if two strings are a rotation of each other?
let string1  = prompt("Enter the first string")
let string2 = prompt("Enter the second string")
function stringRotation (string1, string2) {
   if (string1 === string2) return true;
   if (string1.length !== string2.length) return false;
   
   var start2 = string2.indexOf(string1[0]);
   if (start2 === -1) return false;

   return string1 === string2.slice(start2) + string2.slice(0, start2)
}

console.log(stringRotation());




//Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.
let arr = [3, 4, 5, 8, 9, 5, 9];

let i = 0;
let j = arr.length-1;
let t ;
while(i < j){
   t = arr[j];
   arr[j] = arr[i];
   arr[i] = t;
   i++;
   j--;
}
console.log(arr);


// Write a program to print the first non-repeated character from a string?
let str = prompt("Enter the string");

function nonRepeatedChar(str) {
   for (var i = 0; i < str.length; i++) {
     var c = str.charAt(i);
     if (str.indexOf(c) == i && str.indexOf(c, i + 1) == -1) {
       return c;
     }
   }
   return null;
 }
 console.log(nonRepeatedChar(str))

//Read about the Tower of Hanoi algorithm. Write a program to implement it.
function towerofHonai(n, fromRod, toRod, usingRod){
   if(n === 1){
       console.log(`Move plate 1 from ${fromRod} to ${toRod}`)
       return
   }
   towerofHonai(n-1, fromRod, usingRod, toRod)
   console.log(`Move plate ${n} from ${fromRod} to ${toRod}`)
   towerofHonai(n-1, usingRod, toRod, fromRod)

}
towerofHonai(3, 'A', 'C', 'B');


//Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.
function isOperator(x)
    {
  
        switch (x) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
        }
        return false;
    }
  
    function postToPre(postexp)
    {
        let arrData = [];
        for (let i = 0; i < postexp.length; i++) {
  
            if (isOperator(postexp[i])) {
  
                let opr1 = arrData[arrData.length - 1];
                arrData.pop();
                let opr2 = arrData[arrData.length - 1];
                arrData.pop();
  
                let temp = postexp[i] + opr2 + opr1;
                arrData.push(temp);
            }
  
            else {
  
                arrData.push(postexp[i] + "");
            }
        }
  
        let ans = "";
        while (arrData.length > 0)
            ans += arrData.pop();
        return ans;
    }
     
    let postexp = "abc*+de/-";

    console.log("Prefix : " + postToPre(postexp));


//Write a program to convert prefix expression to infix expression.
function isOperator(x)
    {
        switch(x)
        {
            case '+':
            case '-':
            case '*':
            case '/':
            case '^':
            case '%':
                return true;
        }
        return false;
    }

    function preToin(str)
    {
        let stack = [];
 
        for(let i = str.length - 1; i >= 0; i--)
        {
            let strArray = str[i];
 
            if (isOperator(strArray))
            {
                let opr1 = stack[stack.length - 1];
                stack.pop()
                let opr2 = stack[stack.length - 1];
                stack.pop()

                let temp = "(" + opr1 + strArray + opr2 + ")";
                stack.push(temp);
            }
            else
            {
                stack.push(strArray + "");
            }
        }
        return stack[stack.length - 1];
    }
     
    let exp = "*-A/EC-/AML";
      
    console.log("Infix : " + preToin(exp));


//Write a program to check if all the brackets are closed in a given code snippet.

function bracket(code)
{
   
    let stack = [];
 
    for(let i = 0; i < code.length; i++)
    {
        let x = code[i];
 
        if (x == '(' || x == '[' || x == '{')
        {
             
            stack.push(x);
            continue;
        }
 
        if (stack.length == 0)
            return false;
             
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
 
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
 
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
 
    return (stack.length == 0);
}
 
let code = "([{}])";
 
if (bracket(code))
    console.log("All bracket are closed");
else
    console.length("not closed");

//Write a program to reverse a stack.
let stack = [];
function pushBottom(x)
{
    if(stack.length==0)
        stack.push(x);
    else
    {
            let b = stack.pop();
            pushBottom(x);
            stack.push(b);
    }
     
     
}

function reverse()
{
    if(stack.length > 0)
        {
              
            let x = stack.pop();
            reverse();
              
            pushBottom(x);
        }
}
 
stack.push('1');
stack.push('2');
stack.push('3');
stack.push('4');
 
console.log("Original Stack<br>");
 
console.log(stack.join(" ")+"<br>");

reverse();
 
console.log("Reversed Stack<br>");
 
console.log(stack.join(" "));

//Write a program to find the smallest number using a stack.
let stack1 = [];

stack1.push(2);
stack1.push(6);
stack1.push(4);
stack1.push(3);
stack1.push(9);
stack1.push(8);

stack1.sort();
console.log(stack1[0]);



