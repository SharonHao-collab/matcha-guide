const steps = [
  {
    title: "Gather your ingredients",
    kicker: "Before you begin",
    content: `
      <p>Set everything out before you start. The maple syrup is optional—you can taste the drink before deciding.</p>
      <ul>
        <li><span>Pure matcha powder</span><span>1 level teaspoon (about 2 g)</span></li>
        <li><span>Hot water</span><span>¼ cup (60 mL)</span></li>
        <li><span>Cold dairy or oat milk</span><span>¾ cup (180 mL)</span></li>
        <li><span>Ice</span><span>About ½ cup</span></li>
        <li><span>Maple syrup, optional</span><span>1 teaspoon</span></li>
      </ul>`,
  },
  {
    title: "Prepare the water",
    kicker: "Warm, not boiling",
    content: `
      <p>Heat the water to about 175°F / 80°C. If you do not have a thermometer, boil the water, then let it sit for about 2 minutes.</p>
      <p class="tip"><strong>Why?</strong> Boiling water can make matcha taste more bitter. Slightly cooler water keeps the flavor gentler.</p>`,
  },
  {
    title: "Make a smooth matcha base",
    kicker: "The important step",
    content: `
      <p>Put the matcha in a small bowl or wide mug. If possible, pass it through a small sieve. Add the hot water.</p>
      <p>Whisk briskly from side to side for 20–30 seconds. Stop when you see a little foam and no large dry lumps. A small kitchen whisk or handheld milk frother also works.</p>
      <p class="tip">Do not stir slowly in circles. Quick side-to-side movement breaks up the powder more effectively.</p>`,
  },
  {
    title: "Build your latte",
    kicker: "Bring it together",
    content: `
      <p>Fill a glass about halfway with ice. Pour in the cold milk, then pour the smooth matcha mixture over it.</p>
      <p>Add 1 teaspoon of maple syrup if you want a lightly sweet drink. Stir well.</p>`,
  },
  {
    title: "Taste before you change it",
    kicker: "Learn your preference",
    content: `
      <p>Take a sip and name what you notice. Is it too strong, too bitter, too milky, too sweet, or just right?</p>
      <ul>
        <li><span>Too strong or bitter</span><span>Add a splash of milk or a little syrup</span></li>
        <li><span>Too sweet</span><span>Add a splash of milk</span></li>
        <li><span>Too milky or weak</span><span>Use a little more matcha next time</span></li>
        <li><span>Lumpy</span><span>Sift and whisk more carefully next time</span></li>
      </ul>`,
  },
  {
    title: "You made your first matcha",
    kicker: "Recipe complete",
    content: `
      <p>Enjoy your drink. You now know the basic pattern: measure, mix the matcha base, build the latte, taste, and adjust.</p>
      <p class="tip"><strong>Remember your change.</strong> Next time, repeat the recipe with that one adjustment. That is how this becomes your recipe.</p>`,
  },
];

const recipeCard = document.querySelector("#recipe-card");
const startButton = document.querySelector("#start-button");
const guide = document.querySelector("#guide");
const closeButton = document.querySelector("#close-button");
const backButton = document.querySelector("#back-button");
const nextButton = document.querySelector("#next-button");
const stepPanel = document.querySelector("#step-panel");
const stepCount = document.querySelector("#step-count");
const stepTitle = document.querySelector("#step-title");
const stepKicker = document.querySelector("#step-kicker");
const stepContent = document.querySelector("#step-content");
const progressFill = document.querySelector("#progress-fill");

let currentStep = 0;

function renderStep({ focus = true } = {}) {
  const step = steps[currentStep];
  stepCount.textContent = `Step ${currentStep + 1} of ${steps.length}`;
  stepTitle.textContent = step.title;
  stepKicker.textContent = step.kicker;
  stepContent.innerHTML = step.content;
  progressFill.style.width = `${((currentStep + 1) / steps.length) * 100}%`;
  backButton.disabled = currentStep === 0;
  nextButton.textContent = currentStep === steps.length - 1 ? "Make it again" : "Next step";
  if (focus) stepPanel.focus();
}

function openGuide() {
  currentStep = 0;
  guide.hidden = false;
  recipeCard.hidden = true;
  renderStep({ focus: false });
  guide.scrollIntoView({ behavior: "smooth", block: "start" });
  window.setTimeout(() => stepPanel.focus(), 350);
}

function closeGuide() {
  guide.hidden = true;
  recipeCard.hidden = false;
  recipeCard.scrollIntoView({ behavior: "smooth", block: "center" });
  window.setTimeout(() => startButton.focus(), 350);
}

startButton.addEventListener("click", openGuide);
recipeCard.addEventListener("click", (event) => {
  if (event.target !== startButton) openGuide();
});
closeButton.addEventListener("click", closeGuide);

backButton.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep -= 1;
    renderStep();
  }
});

nextButton.addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    currentStep += 1;
    renderStep();
  } else {
    currentStep = 0;
    renderStep();
  }
});

document.addEventListener("keydown", (event) => {
  if (guide.hidden) return;
  if (event.key === "ArrowRight") nextButton.click();
  if (event.key === "ArrowLeft" && !backButton.disabled) backButton.click();
  if (event.key === "Escape") closeGuide();
});

renderStep({ focus: false });
