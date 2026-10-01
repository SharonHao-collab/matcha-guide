# Beginner Matcha Guide

This project is a small interactive experience for people who have never made a matcha latte. When someone clicks the matcha recipe, the experience guides them through the recipe one step at a time.

## Live Web

[Open the interactive Matcha Guide](https://first-matcha-latte-guide.xh2749.chatgpt.site)

## Main Interaction

Click **Make this recipe** to open a six-step guide. Use **Next step** and **Back** to move through the recipe. The guide explains the ingredients, mixing process, tasting process, and simple adjustments a beginner can make.

## How to Open the Project

1. Download or clone this repository.
2. Open `dist/index.html` in a web browser.

No installation or external libraries are required.

## Project Files

- `dist/index.html` contains the page structure.
- `dist/styles.css` contains the visual design and responsive layout.
- `dist/app.js` contains the step-by-step interaction.
- `docs/design.md` documents the goal, expected behavior, and testing approach.

## AI Tool and Selected Prompts

I used Codex to help plan, build, test, and revise the project. Important prompts included:

> I need a small starting point as we work, and I need to understand this behavior and how expected and actual behavior differ. Please create a design.md for me.

> Turn the design into code. When the user clicks the recipe, give step-by-step instructions. Build a simple one-page beginner website with HTML, CSS, and JavaScript, using only text.

These prompts helped define the size of the project and its main interaction before the code was created.

## Testing and Revision

I tested the main path by clicking **Make this recipe** and moving through all six steps. I expected the recipe card to disappear when the step-by-step guide opened. The guide appeared, but the recipe card initially remained visible because its CSS display rule overrode the `hidden` attribute. I added a global `[hidden]` rule, refreshed the page, and tested the interaction again. After the revision, the recipe card disappeared and the first instruction displayed correctly.

## Reflection

The finished interaction mostly matched my intention: a beginner can click one recipe and follow a clear sequence instead of reading all the instructions at once. The forward and back controls worked, the progress changed with each step, and the final steps helped the learner taste and adjust the drink. The first test also showed that a working interaction can still have a presentation problem. Fixing the recipe card taught me to compare what I expected with what was actually visible rather than assuming the code behaved correctly.

AI helped turn the idea into a small design, organize the recipe into steps, write the first version of the code, and identify a focused CSS fix. I still needed to decide what the experience should teach, which ingredients and adjustments belonged in the first version, and whether the result matched my intention. One remaining uncertainty is how easily a person with no matcha experience can follow the guide without outside help. A useful next test would be to observe one beginner using the site and record where they hesitate or need clarification.
