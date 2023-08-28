# Introduction
Kartilo is an interactive web application for learning quiz/flash cards. The name comes from the [Esperanto](https://en.wikipedia.org/wiki/Esperanto) word 'karto', which means 'card', and the suffix '-ilo', which indicates a tool or instrument.

## UX
### Project Goals
The aim of Kartilo is to provide an interactive multiple choice quiz to the user using html, css, and JavaScript. This particular version of Kartilo will focus on providing a selection of JavaScript questions, taken from the freeCodeCamp developer quiz, which will be useful for other students learning the fundamentals of JavaScript.

### Target Audience
Students or anyone else interested in learning/being quizzed on JavaScript.

### User Needs / Stories

#### First Time Visitor Goals
1. I want to be able to select a quiz category.
2. I want a set list of questions I do not have to create myself.
3. I want to be able to upload my own questions.
4. I want to be able to see my final score.
5. I want to see the correct answer after I have answered a question.
6. As a user with dyslexia I want font and colour options that are easy to read.
7. I want to pause and resume a quiz so I can take breaks.
8. As a visually impaired user I want the app to be compatible with screen readers.
9. I want explanations for the answers.
10. I want to adjust a time limit for questions so I can challenge myself based on my preference.
11. I want to be able to tell you about any bugs I encounter.

#### Returning Visitor Goals
12. I want to track my progress over time so I can see how I'm improving.
13. I want to earn badges or points for achieving milestones.
14. I want to see a leader board.

#### Frequent Visitor Goals
15. I want to track my progress over time so I can see how I'm improving.
16. I want to earn badges or points for achieving milestones.
17. I want to see a leader board.

### Strategic Trade-offs
I have assigned a score out of five (5) to the importance and viabilty / feasibility for each of the user goals to establish the immediate focus. Anything fallout outside of the immediate focus will be considered for a future implementation.

---
|Opportunity / Problem|Importance|Viability / Feasibility|
|-|-|-|
|1. I want to be able to select a quiz category.|||
|2. I want a set list of questions I do not have to create myself.|||
|3. I want to be able to upload my own questions.|||
|4. I want to be able to see my final score.|||
|5. I want to see the correct answer after I have answered a question.|||
|6. As a user with dyslexia I want font and colour options that are easy to read.|||
|7. I want to pause and resume a quiz so I can take breaks.|||
|8. As a visually impaired user I want the app to be compatible with screen readers.|||
|9. I want explanations for the answers.|||
|10. I want to adjust a time limit for questions so I can challenge myself based on my preference.|||
|11. I want to be able to tell you about any bugs I encounter.|||
|12. I want to track my progress over time so I can see how I'm improving.|||
|13. I want to earn badges or points for achieving milestones.|||
|14. I want to see a leader board.|||
|15. I want to track my progress over time so I can see how I'm improving.|||
|16. I want to earn badges or points for achieving milestones.|||
|17. I want to see a leader board.|||
### Success Metrics

## Design Choices

### Fonts
- Primary Font : Roboto Flex Variable Font.
  - Modern and versatile.
  - Clean and legible.
  - Neutral and easy on the eyes.
- Headings & Titles: Roboto Flex 700
- Subheadings & Info: Roboto Flex 600.
- Body & Questions: Roboto Flex 400.

I have chosen Robot Flex as the main font and will adjust its properties to change its appearance for headers, subheadings, and body text. Since it is a variable font I can use a single file, instead of two, and customise it to appear differently for sufficient contrast.
The font will have a display value of 'swap', which means the browser will swap the fallback font with the custom font once loaded.
Since I want the app to cater to as many people as possible I have chosen a font that is considered more 'clean cut' and 'readable' than stylistic choices so it will be more legible for those who have dyslexia.
The disadvantage of this may be that it won't look as unique to some people. However, when it comes to learning legibility, simplicity, and understanding are more important.
I will use the .woff2 font format since it has been specifically designed for the web, offers better compression, and performance.

### Icons

### Colours
- Background Color
  - Soft Cream
- Text Color
  - Charcoal Gray
  - Subtle Gray (for secondary text or captions)
- Accent Colors
  - Muted Blue
  - Soft Green
  - Muted Red
  - Golden Yellow
- Buttons or Interactive Elements
  - Teal
  - Dusty Rose

Other considerations
Ensure there is sufficient contract between the text and background.

### Styling

### Backgrounds

### Card images

### Sitemap
[Sitemap / Modal flow](/assets/images/sitemap-modal-flow.webp)

### Wireframes
[Start Modal](/assets/images/start-screen.webp)
[Rules Modal](/assets/images/rules.webp)
[Quiz Modal](/assets/images/quiz.webp)
[Final Modal](/assets/images/the-end.webp)

## Features
### Future implementations

## Technologies Used
- [HTML](https://html.spec.whatwg.org/multipage/)
- [CSS](https://www.w3.org/Style/CSS/)
- [JavaScript](https://tc39.es/)
- [VSCode](https://code.visualstudio.com/): Coding text editor.
- [Git](https://git-scm.com/): For version control and pushing to Github.
- [GitHub](https://github.com/): To store projects in a public repository.
- [GitHub Desktop](https://desktop.github.com/): Desktop software to simplify the Git/Github development workflow.
- [Google Fonts](https://fonts.google.com/): Fonts.
- [Google Variable Fonts](https://fonts.google.com/variablefonts): Variable Fonts.
- [Google Fonts Knowledge](https://fonts.google.com/knowledge/): Typography Knowledge. 
- [WebP Converter](https://developers.google.com/speed/webp): Converting images to the WebP format.
- [JEST](https://jestjs.io/): JavaScript testing.
- [jshint](https://jshint.com): JavaScript testing.
- [Font Awesome](https://fontawesome.com/): Icons.

## Testing
Please visit the [testing](./testing.md) file.

## Deployment & Local Development

## Credits

### Content

### Code
[Fisher-Yates (Knuff) shuffle](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)

### Media

#### Animations

#### Images

## Acknowledgements
- Code Institute Mentor, Graeme Taylor.
- Newcastle College Course Facilitator, Callum Jones.