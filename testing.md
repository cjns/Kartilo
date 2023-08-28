# Kartilo - Testing details
Main [README.md](./README.md) file.

View website on [GitHub Pages](https://cjns.github.io/Kartilo/).

The following tools were used to validate the project:
- HTML: [W3C Markup Validator](https://validator.w3.org/)
- CSS: [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- Accessibility: [WAVE (Web Accessibility Evaluation Tool)](https://wave.webaim.org/)
- Performance: [Lighthouse (Within Chrome Developer Tools)](https://developer.chrome.com/docs/lighthouse/overview/)
- JS Logic: [Jest](https://jestjs.io/)

## Introduction


## Testing Client Stories
|Opportunity / Problem|Evidence of meeting user story|
|-|-|
|x|x|

## HTML, Accessibility, & Performance
|Page|HTML|Lighthouse Mobile|Lighthouse Desktop|
|-|-|-|-|
|index.html|[Valid](assets/images/html-index-valid.webp)|x|x|
|404.html|[Valid](assets/images/html-404-valid.webp)|x|x|

## Accessibility
|Modal|WAVE Validation|
|-|-|
|index.html Start modal|[Valid](assets/images/wave-start.webp)|
|index.html Rules modal|[Valid](assets/images/wave-start.webp)|
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
|Feature|Expected Outcome|Testing Performed|Result|Pass / Fail|
|-|-|-|-|-|
|x|x|x|x|x|

## Unit Testing
Please see [logic.test.js](assets/scripts/logic.js) and the [coverage report](coverage/lcov-report/index.html).

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
Error: HTML comments (<!-- -->) aren't displayed correctly when fetched from the question set, due to lack of escaping.