# Kartilo - Testing details
Main [README.md](./README.md) file.

View website on [GitHub Pages](https://cjns.github.io/Kartilo/).

The following tools were used to validate the project:
- HTML: [W3C Markup Validator](https://validator.w3.org/)
- CSS: [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- Accessibility: [WAVE (Web Accessibility Evaluation Tool)](https://wave.webaim.org/)
- Performance: [Lighthouse (Within Chrome Developer Tools)](https://developer.chrome.com/docs/lighthouse/overview/)

## Testing Client Stories
|Opportunity / Problem|Evidence of meeting user story|
|-|-|
|x|x|

## HTML & CSS Validation, Accessibility, & Performance
|Page|HTML|WAVE|Lighthouse Mobile|Lighthouse Desktop|
|-|-|-|-|-|
|x|x|x|x|x|
CSS:

## JavaScript Testing
|File|JSHint|
|-|-|
|x|x|

## Manual Testing
|Feature|Expected Outcome|Testing Performed|Result|Pass / Fail|
|-|-|-|-|-|
|x|x|x|x|x|

## Unit Testing

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
N/A