# Kartilo - Testing details
Main [README.md](./README.md) file.

View website on [GitHub Pages](https://cjns.github.io/Kartilo/).

The following tools were used to validate and test the application:
- HTML: [W3C Markup Validator](https://validator.w3.org/)
- CSS: [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- Accessibility: [WAVE (Web Accessibility Evaluation Tool)](https://wave.webaim.org/)
- Performance: [Lighthouse (Within Chrome Developer Tools)](https://developer.chrome.com/docs/lighthouse/overview/)
- JS Logic: [Jest](https://jestjs.io/)

## Testing Client Stories
|Opportunity / Problem|Evidence of meeting user story|
|-|-|
|2. I want a set list of questions I do not have to create myself|[A list of 185 JS questions have been provided](assets/scripts/allQuestions.js)|
|4. I want to be able to see my final score|[The final score is displayed at the end of the quiz](assets/images/final-score.webp)|
|5. I want to see the correct answer after I have answered a question|[The correct answer is shown upon selecting an answer](assets/images/explanation.webp)|
|6. As a user with dyslexia I want font and colour options that are easy to read|Color contrast used appropriately - see the accessibility results|
|8. As a visually impaired user I want the app to be compatible with screen readers|Label and semantics used appropriately - see the accessibility results|
|9. I want explanations for the answers|[An explanation is offered after an answer is chosen](assets/images/explanation.webp)|
|11. I want to be able to tell you about any bugs I encounter|[Email address is included on the first modal](assets/images/start-mail-to.webp)|
|12. I want to be able to choose the number of questions I answer|[You can select how many questions you would like to answer](assets/images/number-of-questions.webp)|

## HTML, Accessibility, & Performance
|Page|HTML|Lighthouse Mobile|Lighthouse Desktop|
|-|-|-|-|
|index.html|[Valid](assets/images/html-index-valid.webp)|[97 100 100 100](assets/images/lighthouse-mobile-index.webp)|[99 100 100 100](assets/images/lighthouse-desktop-index.webp)|
|404.html|[Valid](assets/images/html-404-valid.webp)|[98 100 100 100](assets/images/lighthouse-mobile-404.webp)|[99 100 100 100](assets/images/lighthouse-desktop-404.webp)|

## Accessibility
|Modal|WAVE Validation|
|-|-|
|index.html Start modal|[Valid](assets/images/wave-start.webp)|
|index.html Rules modal|[Valid](assets/images/wave-rules.webp)|
|index.html Quiz modal|[Valid](assets/images/wave-quiz.webp)|
|index.html Final modal|[Valid](assets/images/wave-final.webp)|
|404.html|[Valid](assets/images/wave-404.webp)|

## CSS
|File|Validation|
|-|-|
|style.css|[Valid](assets/images/css-style-valid.webp)|

## JavaScript Testing
|File|ESLint|
|-|-|
|logic.js|[Valid](assets/images/js-logic-valid.webp)|
|ui.js|[Valid](assets/images/js-ui-valid.webp)|

## Manual Testing
Manual testing is the process of manually checking software for defects. It requires a tester to play the role of an end user and use the features of the application to ensure correct behavior.

Principles of Manual Testing:

1. Understand the Application: Before starting with testing, the tester should thoroughly understand the application and the user behavior.

2. Plan the Tests: Tests should be planned carefully. The tester should know what to test, how to test, and what the expected outcomes are.

3. Execute the Tests: The tester should carefully execute the tests and observe the application behavior. Any deviation from the expected behavior should be reported.

4. Document the Findings: The tester should document all the findings. This includes the steps to reproduce the bug, the expected outcome, and the actual outcome.

Manual testing is best deployed in situations where the application is in the early stages of development and is changing frequently, when the test scenarios are complex and require human observation, or when the application requires installation or setup procedures that cannot be automated.

You can see the manual tests I performed below.

|Feature|Expected Outcome|Testing Performed|Result|Pass / Fail|
|-|-|-|-|-|
|404 Page|No console errors|Load page and check dev tools|No console errors|[Pass](assets/images/console-404.webp)|
|index.html start modal|No console errors|Load page and check dev tools|No console errors|[Pass](assets/images/console-index.webp)|
|index.html rules modal|No console errors|Initiate modal and check dev tools|No console errors|[Pass](assets/images/console-rules.webp)|
|index.html quiz modal|No console errors|Initiate modal and check dev tools|No console errors|[Pass](assets/images/console-quiz.webp)|
|index.html final modal|No console errors|Initiate modal and check dev tools|No console errors|[Pass](assets/images/console-final.webp)|
|index.html start modal - start button|Disables start modal and shows rules modal|Click start button|As expected|Pass|
|index.html start modal - mailto link|Opens email client|Click link|As expected|Pass|
|index.html rules modal - exit button|Takes you back to the start modal|Click link|As expected|Pass|
|index.html rules modal - continue button|Takes you to the quiz modal if the input field has a valid value (cannot be empty, cannot be <1, cannot be >185, and must be a number from 1 to 185) otherwise the button remains disabled|Check input field with the previously mentioned states|As expected|Pass|
|index.html quiz modal - next button|Disabled until an answer is chosen|Click button before and after selecting an answer|As expected|Pass|
|index.html quiz modal - correct score|Correct counter to increase when a correct answer is chosen|Select correct answer|As expected|[Pass](assets/images/correct-counter.webp)|
|index.html quiz modal - incorrect score|Incorrect counter to increase when an incorrect answer is chosen|Select incorrect answer|As expected|[Pass](assets/images/incorrect-counter.webp)|
|index.html quiz modal - tick|A tick appears next to the selected answer if correct|Click correct answer|As expected|Pass|
|index.html quiz modal - cross|A cross appears next to the selected answer if incorrect|Click incorrect answer|As expected|Pass|
|index.html quiz modal - explanation|An explanation appears after selecting an answer that shows the correct answer, an explanation, and a reference link to a 3rd party resource|Click correct/incorrect answer|As expected|Pass|
|index.html quiz modal - explanation link|Opens in a new window|Click link|As expected|Pass|
|index.html quiz modal - question counter|Updates to reflect the current question as you progress|Click through multiple questions|As expected|[Pass](assets/images/question-counter.webp)|
|index.html quiz modal - counters and ui|Reset after 1st play through|Play through the quiz and select replay|As expected|Pass|
|index.html final modal - final score|Final score is displayed|Complete quiz until final modal is displayed|As expected|[Pass](assets/images/final-score.webp)|
|index.html final modal - quit button|Takes you to the start modal|Click the quit button|As expected|Pass|
|index.html final modal - play again button|Takes you to the rules modal|Click the replay button|As expected|Pass|

## Automated Testing
Automated testing involves the use of software tools (like Jest) to run a set of tests that compare the actual outcomes with the expected outcomes. It's primarily used to re-run the test scenarios that were performed manually, quickly, and repeatedly. 

Principles of Automated Testing using Jest:

1. Select the Right Test Cases: In Jest, you'd typically automate unit tests, which test individual functions or components in isolation. Test cases that are frequently executed, require large data sets, or are complex and prone to human error are ideal for automation.

2. Create Good, Quality Test Data: Jest provides features like setup and teardown functions (`beforeEach`, `afterEach`, `beforeAll`, `afterAll`) that allow you to set up the necessary state and data for your tests. It's important to create test data that covers a wide range of scenarios to ensure your tests are comprehensive.

3. Keep Automation Architecture Simple: Jest encourages a simple and clear testing structure with `describe` and `it`/`test` blocks. This helps in maintaining and updating the test suite. Also, Jest's clear and detailed error messages help in debugging failing tests.

4. Maintain Traceability: Each Jest test case should be traceable to its requirement. This is usually done through the descriptive strings passed to `describe` and `it`/`test` functions, which should clearly state what requirement or part of the application they are testing. This helps in understanding the test coverage and the impact of requirement changes on the test cases.

Automated testing is best deployed in situations where the tests are repetitive, need to be run on different configurations or environments, require multiple data sets, or when the cost of manual testing is high and will be prone to errors.

You can see the automated testing I performed with Jest below.

[logic.test.js](assets/scripts/logic.js) and the [coverage report](coverage/lcov-report/index.html).

## Bugs Discovered
### Solved Bugs

#### Issue: Getting Jest to work with ES6 Syntax and separated JavaScript files.
Error:
```
Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.
```
Solution: Ensure you have Babel set up.
```
npm install --save-dev @babel/core @babel/preset-env babel-jest
```
Create a  '.babelrc' file in your project root with the following content:
```
{
  "presets": ["@babel/preset-env"]
}
```

### Unsolved Bugs
Error: HTML comments (\<!-- -->) aren't displayed correctly when fetched from the question set, due to lack of escaping.