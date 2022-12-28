/*
   data types intro 
   - string
   - number
   - Array (object) => [value,]
   - object  => {key: value,}
   - boolean => true or false
   - undefined 
   - null (object)
*/

console.log(typeof "ahmed teleb");
console.log(typeof 1000);
console.log(typeof [10, 15, 19]);
console.log(typeof ["os", "ah", "sa"]);
console.log(typeof { name: "ahmed", age: 17, country: "eg" });
/*
   variables intro 
   - syntax (keyword | variable name | Assignmen Operator |)
   keyword {
      var {
         redeclare (yes)
         access before declare (Undefined)
         variable scope drama (added to window)
         block or function scope
      }
      let {
         redeclare (No)
         access before declare (Error)
         variable scope drama (not )
         block or function scope
      }
      const {
         redeclare (No)
         access before declare (Error)
         variable scope drama (not)
         block or function scope
      }
   }
*/

/* 
   charcter escape sequences
   \ => escape + line continue
   \n => enter
*/
console.log('ahmed "teleb" ');

/*
   Template Literals (Template Strings)
*/
console.log(`${a} ${b} "" '' \\ 
${c} ${d}`);

/*
      Number 
   -- syntactic Sugar "_" "e" "**"
   
      Number Methods
   - toString() 
   - toFixed()
   - parseInt()
   - parseFloat()
   - isInteger() [ture / fales]
   - isNaN()  [ture / fales]

      Math Object 
   --- console.log(Math.method())
   - round(99.2) ==> 99
   - ceil(99.2) ==> 100
   - floor(99.9) ==> 99
   - min(10, 20, 100, -100, 90) ==> -100
   - max(10, 20, 100, -100, 90) ==> 100
   - pow(2, 4) == (2 ** 4)
   - random() ==> 8794375394875398573
   - trunc(99.6) ==> 99
*/
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);

console.log(Number.MAX_SAFE_INTEGER); // اكبر قيمة امنة في اللغة
console.log(Number.MAX_VALUE); // اكبر قيمة علي الاطلاق

console.log((100).toString());
console.log((100.66666666).toFixed(2));
console.log(parseInt("100"));
console.log(parseFloat("100.444 ahmed "));
console.log(Number.isInteger(100));
console.log(Number.isNaN("ahmed" * 1));

/*
         String Methods
   - Access with Index [] 
   - Access with charAt()
   - length
   - trim()
   - toUpperCase
   - toLowerCase
   - indexOf(value[mand], start[opt] 0)
   - lastIndexOf(value[mand], start[opt] length)
   - slice(start [mand], end[opt] Not Include End)
   - repeat(Times)
   - split(Separator [opt], limit[opt])
   - substring(start[mand], end[opt])
   --- start > end will swap
   --- start < 0 it start from 0
   --- Use length to get last charcter
   - substr(start[mand], characters to extract)
   --- start >= length = ""
   --- negative start from end
   - includes(value[mand], start[opt]default 0) => true/false
   - startsWith(value[mand], start[opt] default 0)  => true/false
   - endsWith(value[mand], length[opt] default full length)  => true/false
*/
console.log(theName[3]);
console.log(theName.trim().charAt(2).toUpperCase());

/*
         comarison Operators
   - == Equal  // Compare Value Only
   - != Not Equal  // Compare Value Only

   === Identical // Compare Value + Type
   !== Not Identical // Compare Value + Type

         Logical Operators
   - ! Not
   - && And
   - || Or
*/

/*
                                 Control Flow 
      if Condition
   - if
   - else if 
   - else

   if (condition) {
      // block of code
   } else if (condition) {
      // block of code
   } else {
      // block of code   
   }

         Conditional (ternary) Operator
   - condition ? if true : if false
   
   -- condition ? if true : condition ? if true :condition ? if ture : if false

      Switch Statment
   switch(expression) {
      case 1: 
         // code block
         break;
      case 2:
         // code block
         break;
      default: 
         // code block
   }
*/
let result = gender === "male" ? "Mr" : "Mrs";

age < 20
   ? console.log(20)
   : age > 20 && age < 60
   ? console.log("20 to 60")
   : age > 60
   ? console.log("larger than 60")
   : console.log(Unknown);

/* 
      logical Or ||
   - Null + Undefined + Any Falsy Value
   
      Nullish Coalsecing Operator ??
   - Null + Undefined
*/
let price = 0;
console.log(`the Price is ${price || 200}`);
console.log(`the Price is ${price ?? 200}`);

/*
         Arrays
   - Check For Array Array.isArray(arr);
   
      Arrays Methods [Adding and Removing]
   - unshift("", "") Add Element To The First
   - push("", "") Add Element To The End
   - shift() Remove First Elemnt From Array "I Can put in Variable"
   - pop() Remove last Elemnt From Array    "I Can put in Variable"
   
      Arrays Methods [Search]
   - indexOf(Search Element, From Index [opt])
   - lastIndexOf(Search Element, From Index [opt])
   - includes(valueToFind, fromIndex [opt])
   
      Arrays Methods [sort]
   - sort(Function [opt])
   - reverse
   
      Arrays Methods [Slicing]
   - slice(start [opt], end [opt])
   --- Negative count from End
   --- Return New Array
   - splice(Start [mand], DeleteCount [opt] [0 No remove],the Items To add [opt] )
   --- if Negative => Start from the end
   
      Arrays Methods [Joining]
   - concat(array, array) => return A New Array
   - join(Seprator)
*/
console.log(Array.isArray(myFriends));

/*
         Loop
   - for
   for ([1]; [2]; [3]) {
      // block of code
   }

      Loop Control
   - Break
   - Continue
   - Label  // Name for loop
*/

/* 
            Function
   function theName (parameter) {
      //block of code
   }
   
      Arrow Function
   - let functionName = () => ruturnValue;
   - let functionName = (parameter) => ruturnValue; 
   
*/

let print = () => 10;
let print2 = (num) => 299;

/*
         Higer Order Functions
   - Syntax Map(callBackfunction(element, Index, Arrayy) {}, thisArg)
   - Syntax filter(callBackfunction(element, Index, Arrayy) {}, thisArg)
   - Syntax reduce(callBackfunction(Accumulator, Current Value, Index, Arrayy) {}, InitialValue)
   - Syntax forEach(callBackfunction(Accumulator, Current Value, Index, Arrayy) {}, InitialValue)
   
   forEach // edit for array
*/

/*
         Object
      Syntax 
   1-
   let nameObject = {
      nameProperty: value,
      nameproperty: value,
      nameMethod: value,
   };
   nameObject.nameProperty = value; //this can update value Or create
   2- [Object]
   let nameObiect = new Object({
      nameProperty: value,
   })
   3- [create]
   let nameObject = object.create(oldNameObject as proto type)  // this create new object === old object
   4- [assign]
   let nameObject = object.assign(targetObject, object1, object2) // look on the Ecampl 2 
   Access 
   - Dot Notation => just vaild nameproperty 
   - bracket Notation => vaild Or not vaild Or variaable ["name property"]

   - length
   Object.keys(ObjectName).length 
*/

// Example
let user = {
   name: "ahmed",
   age: 19,
   skills: ["HTML", "CSS", "JS"],
   available: false,
   addresses: {
      ksa: "Riyadh",
      egypt: {
         one: "cairo",
         two: "giza",
      },
   },
   checkAv: function () {
      if (user.available === true) {
         return `Free for wrok`;
      } else {
         return `Not free for work`;
      }
   },
};

user.age = 20;

console.log(user.age);
console.log(user.skills.join(" | "));
console.log(user.addresses.ksa);
console.log(user.addresses.egypt.one);
console.log(user["addresses"]["egypt"]["two"]);
console.log(user["addresses"]["egypt"].one);
console.log(user.checkAv());

// Example 2

let finalObject = object.assign(targetObject, obj1, obj2);
let newObject = object.assign({}, obj1, { prop4: 4, prop5: 5 });

/* 
         DOM
   document.getElementById("id")  // Id Name
   document.getElementsByTagName("tage") // Tag Name
   document.getElementsByClassName("class") // Class Name
   document.querySelector(".selectors") // .class | #id | tagName | tag Selectors  => first element
   document.querySelectorAll(".selectors") // .class | #id | tagName | tag Selectors  => All elements
   
   document.title
   document.body
   document.images
   document.forms
   document.links
   
   innerHTML => change contet in html element
   textContent => change text in html element
   
   getAttribute("AttributeName")
   setAttribute("AttributeName", "value")
   
      DOM [Check Attributes]
   - Element.attributes                        // show all attributes has element
   - Element.hasAttribute("attributeName")     // check element has attribute
   - Element.hasAttributes("attributeName")    // check element has attributes
   - Element.removeAttribute("attributeName")  // remove Aattribure
   
      DOM [Create Elements]
   - createElement      // 
   - createComment
   - CreateTextNode
   - CreateAttribute
   - appendChild
   
      DOM [Deal With Childrens]
   - children          // All Elements
   - ChildNodes        // All Elements Or Text
   - firstChild        // First Element Or Text
   - lastChild         // last Element Or Text
   - firstElementChild // First Element 
   - lastElementChild  // Last Element

      DOM [Class List]
   - classList
   -- length 
   -- contains // check found class
   -- item(index) // return class
   -- add
   -- remove
   -- toggle // add/remove

      DOM [CSS]
   - style
   --- element.style.color = "red";
   - cssText
   --- element.style.cssText = `font-weight: bold; color: green; opacity: 0.9;`;
   - removeProperty(propertyName) [Inline, Stylesheet]
   --- element.style.removeProperty("color");
   --- document.styleSheets[0].rules[0].style.removeProperty("line-height");
   - setProperty(propertyName, value, Priority)
   --- element.style.setProperty("font-size", "40px", "important");
   --- document.styleSheets[0].rules[0].style.setProperty("background-color", "#f00");

      DOM [Deal With Elements]
   - before [Element || String]
   - after [Element || String]
   - append [Element || String]
   - prepend [Element || String]
   - remove

      DOM [Traversing]
   - nextSibling
   - previousSibling
   - nextElementSibling
   - previousElementSibling
   - parentElement

      Dom [Cloning]
   - cloneNode(Deep)  deep = true || false 
   --- let myP = document.querySelector("p").cloneNode(true);
*/

// Examples
myElement.innerHTML = "Text From <span>Main.js</span> File";
myElement.textContent = "Text From <span>Main.js</span> File";

document.images[0].src = "https://googel.com";
document.images[0].alt = "Alternate";

let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

myLink.setAttribute("href", "https://twitter.com");
myLink.setAttribute("title", "Twitter");

// Example for Check Attributes
console.log(document.getElementsByTagName("p")[0].attributes);

let myP = document.getElementsByTagName("p")[0];

if (myP.hasAttribute("data-src")) {
   if (myP.getAttribute("data-src") === "") {
      myP.removeAttribute("data-src");
   } else {
      myP.setAttribute("data-src", "New Value");
   }
} else {
   console.log("not fount");
}

if (myP.hasAttributes()) {
   console.log(`Has Attributes`);
}

if (document.getElementsByTagName("div")[0].hasAttributes()) {
   console.log(`Has Attributes`);
} else {
   console.log("not found");
}

// Example for create Elements
let myElement = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This Is Div");

myElement.className = "product";
myElement.setAttributeNode(myAttr);
myElement.setAttribute("data-test", "Testing");

myElement.appendChild(myText);
myElement.appendChild(myComment);
document.body.appendChild(myElement);

console.log(myElement);

/*
   BOM [Browser Object Model]
   - setTimeout(Function, Timeout, Additional Params)
   --- setTimeout(function () {
      console.log("msg")
   }, 3000)
   --- setTimeout(sayMsg, 3000, "ahmed", 19)
   - clearTimeout(identifier)

   - setInterval(Function, Millseconds, Additional Params)
   - clearInterval(Identifier)

   - open(URL [opt], window Name Or Target Attr [opt], win Features [opt], History Replace)
   - close()
   - Window featues {width[num], height[num], left[num], top[num]}
   Search
   - window.open Window Features

   - stop() // stop load window
   - print() // print window
   - focus() // focus for window
   - scrollTo(x, y || Options) // scorll position
   - scroll(x, y || Options) // same but don't safari
   - scrollBy(x, y || Options) scroll by nums
   // window.scrollTo({
      left: 500,
      top: 200,
      behavior: "smooth"
   })
   - scrollX [alias => PageXOffset]
   - scrollY [alias => PageYOffset]

   Local Storage
   - setItem
   - getItem
   - removeItem
   - clear
   - key
*/

// Examples For [setTimeout && clearTimeout]
let counter = setTimeout(sayMsg, 3000, "ahmed", 19);
function sayMsg(user, age) {
   console.log(`Iam Message for ${user} his age is ${age}`);
}

let btn = document.querySelector("button");
btn.onclick = function () {
   clearTimeout();
};

// Examples For [setInterval && clearInterval]
let div = document.querySelector("div");

function countdown() {
   div.innerHTML -= 1;
   if (div.innerHTML === "0") {
      clearInterval(counter);
   }
}
let counter2 = setInterval(countdown, 1000);

// Example For [window.open]
setTimeout(function () {
   window.open(
      "https://google.com",
      "_blank",
      "width=600,height=500,left=500,top=500"
   );
}, 2000);

/*
         Destructuring
   - Syntax 
   --- 
      let myFriends = ["ahmed", "sayed", "ali", "maysa"]
      [a, b, c, d] = myFriends
   ---
*/

// Example
const user = {
   theName: "Ahmed",
   theAge: 19,
   skills: ["HTML", "CSS", "JavaScript"],
   addresses: {
      egypt: "Cairo",
      ksa: "Riyadh",
   },
};

const {
   theName: n,
   theAge: a,
   skills: [one, two, three],
   addresses: { egypt: e },
} = user;

console.log(n);
console.log(a);
console.log(one);
console.log(two);
console.log(three);
console.log(e);

/*
   - Set Data Type
   Syntax: new Set(Iterable)

   properties:
   - Size

   Methods:
   - add
   - delete
   - clear
   - has
*/

/*
   - Map Data Type
   Methods
   --- set
   --- get
   --- delete
   --- clear
   --- has

   Properties
   --- size
*/

/*
   Array Methods
   - Array.from(Iterable, MapFunc, This)
   --- Variable
   --- String Numbers
   --- set
   --- Using the map function
   --- Arrow Function
   --- Shorten The Method + Use arguments
   - ArrayName.copyWithin(Target, Start => Optional, End => Optional)
   - ArrayName.some(CallbackFunc(element, index, array), thisargument)
   - ArrayName.every(CallbackFunc(element, index, array), thisargument)
*/

/*
   Regular Expression
   
   Syntax
   /pattern/modifier(s);
   new RegExp("pattern", "odifer(s)")

   Modifiers => Flags
   i => case-insensitive
   g => global
   m => Multilines

   Search Methods 
   - match(Pattern)

   Renges 
   - part 1 
   (X|Y) => X or Y
   [0-9] => 0 T9 9
   [^0-9] => any Charcter Not 0 to 9

   - Part 2
   [a-z]
   [^a-z]
   [A-Z]
   [^A-Z]
   [abc]
   [^abc]
      Character Classes
   . => matches any character, except newline or other line terminators.
   \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
   \W => matches Non word characters
   \d => matches digits from 0 to 9.
   \D => matches non-digit characters.
   \s => matches whitespace character.
   \S => matches non whitespace character.

   \b => matches at the beginning or end of a word.
   \B => matches NOT at the beginning/end of a word.

   Test Method
   pattern.test(input)

   Quantifiers
   n+ .........=> One or more
   n* .........=> zero or more
   n? .........=> zero or one

   n{x} .....=> Number of
   n{x,y}....=> Range
   n{x,}.....=> At least x

   $........=> End With Something
   ^........=> Start With Something
   ?=.......=> Followed By Something
   ?!.......=> Not Followed By Someting

   - Replace("","")
   - ReplaceAll("","")
*/

// Example 1
let practice = "os1 os10s os2 os8 os8os";
let practiceRe = /os[5-9]os/g;
console.log(practice.match(practiceRe));

/*
   OOP

   Constructor Function
   - New Syntax
   // Examples
   - class User {
   constructor(id, username, salary) {
      this.i = id;
      this.u = username;
      this.s = salary + 1000;
   }
}
   - console.log(userOne instanceof User);
   - console.log(userTwo.constructor === User);

*/

/*
   Date And Time
   - getTime() => Number of Milliseconds
   - getDate() => Day of The month
   - getFullYear() 
   - getMonth() => zero based
   - getDay() => day of the week
   - getHours()
   - getMinutes()
   - getSeconds()

   - setTime(milliseconds)
   - setDate() => Day of the Month [Negative and Positive]
   - setFullYear(year, month => Optional [0-11], day => Optional [1,31])
   - setMonth(month [0-11], day => Optional [1,31])
   - setHours(Hours [0-23], Minutes => optional [0-59], Seconds => optional [0-59], MS => Optional [0-999])
   - setMinutes( Minutes [0-59], Seconds => optional [0-59], MS => Optional [0-999])
   - setSeconds( Seconds [0-59], MS => Optional [0-999])

   new Date(timestamp)
   new Date(Date String)
   new Date(Numeric Values)
   Format
   - "Oct 25 1982"
   - "10/25/1982"
   - "1982-10-25" => ISO International Standard
   - "1982 10"
   - "1982"
   - "82"
   - 1982, 9, 25, 2, 10, 0
   - 1982, 9, 25
   - "1982-10-25T06:10:00Z"

   Date.parse("String") // Read Date From A String

   Generators
   - Generators Function Run Its Code When Required
   - Generator Function Return Special Object [Generator Object]
   - Generators Are Iterable
   -- Syntax
   - function* genratorName(){
      yield value;
   }
*/

/*
   JSON.parse // Convert json object to js object
   JSON.stringify // Convert JS object  to json object
*/
