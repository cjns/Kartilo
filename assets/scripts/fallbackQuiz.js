const javaScriptQuiz = [
  {
    Question:
      "In JavaScript, if let x='Prakhar', then what will be the result for console.log(x.substring(2,5))?",
    Answer: "akh",
    Distractor1: "akaha",
    Distractor2: "aka",
    Distractor3: "akkkaha",
    Explanation:
      "The first parameter in the substring method represents the starting index for the string while the second parameter represents the ending index.",
    Link: "https://www.freecodecamp.org/news/javascript-substring-examples-slice-substr-and-substring-methods-in-js/"
  },
  {
    Question:
      "In JavaScript, what is the range of numbers returned from the Math.random() method?",
    Answer: "Between 0 and 1 (including 0; not including 1).",
    Distractor1: "Between 0 and 1 (including neither 0 or 1).",
    Distractor2: "Between 0 and 1 (including 1; not including 0).",
    Distractor3: "Between 0 and 100 (including 0; not including 100).",
    Explanation:
      "Math.random() returns a floating point (decimal) number that is less than one and greater than or equal to zero.",
    Link: "https://www.freecodecamp.org/news/javascript-math-random-method-explained/"
  },
  {
    Question:
      "In JavaScript, what is the difference between the indexOf() and search() methods?",
    Answer: "indexOf() can take a second parameter while search() cannot",
    Distractor1: "Both methods are the same",
    Distractor2: "indexOf() only takes regular expressions",
    Distractor3: "The search() method runs 4x faster than the indexOf() method",
    Explanation:
      "One key difference between the indexOf() and search() methods is that indexOf() can take a second parameter while search() cannot.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf"
  },
  {
    Question: "What does the 'debugger' statement in JavaScript do?",
    Answer: "It acts as a breakpoint in a program",
    Distractor1: "It will debug errors in the current statement",
    Distractor2: "It will debug all the errors in the program at runtime",
    Distractor3: "All of the above",
    Explanation:
      "The 'debugger' statement is used to setup the breakup points at probable points of errors in the code snippet, using the debugger window.",
    Link: "https://www.freecodecamp.org/news/debugging-javascript-for-beginners-5d4ac15dd1cd/#"
  },
  {
    Question: "What kind of programming can JavaScript be used for?",
    Answer: "Both Client and Server side programming",
    Distractor1: "Server side only",
    Distractor2: "Client side only",
    Distractor3: "None of these options",
    Explanation:
      "JavaScript is a programming language which can be used on the client and server side.",
    Link: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction#are_server-side_and_client-side_programming_the_same"
  },
  {
    Question:
      "In JavaScript, if let x='5', then what will be the value of console.log(x==5,x===5)?",
    Answer: "true false",
    Distractor1: "true true",
    Distractor2: "false true",
    Distractor3: "false false",
    Explanation:
      "== compares only the value while === compares the value as well as the type.",
    Link: "https://www.freecodecamp.org/news/javascript-triple-equals-sign-vs-double-equals-sign-comparison-operators-explained-with-examples/"
  },
  {
    Question:
      "In JavaScript, which Web API is used to display a dialog box with an optional message?",
    Answer: "window.alert()",
    Distractor1: "window.alertHTML()",
    Distractor2: "window.alertContent()",
    Distractor3: "window.alertBox()",
    Explanation:
      "In Javascript, the window.alert() method is used to display a dialog box with an optional message",
    Link: "https://www.freecodecamp.org/news/how-to-build-a-javascript-alert-box-or-popup-window/"
  },
  {
    Question:
      "In JavaScript, if let word='Intelligent', then what will be the value of word.slice(2,5)?",
    Answer: "tel",
    Distractor1: "tellig",
    Distractor2: "ll",
    Distractor3: "Inigent",
    Explanation:
      "The slice() method returns a substring of the original string. The original string remains untouched.",
    Link: "https://www.freecodecamp.org/news/javascript-substring-examples-slice-substr-and-substring-methods-in-js/"
  },
  {
    Question:
      "In Javascript, what keyword is used to check whether a given property in an object is valid?",
    Answer: "in",
    Distractor1: "is in",
    Distractor2: "exists",
    Distractor3: "lies",
    Explanation:
      "The in keyword is used to check whether the given property in an object is valid or not.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in"
  },
  {
    Question:
      "In JavaScript, which method uses a callback function for each element in the array?",
    Answer: "forEach()",
    Distractor1: "every(",
    Distractor2: "forEvery()",
    Distractor3: "each()",
    Explanation:
      "The forEach() method uses a callback function for each element in the array.",
    Link: "https://www.freecodecamp.org/news/javascript-foreach-how-to-loop-through-an-array-in-js/"
  }
];

export {
  javaScriptQuiz
};
