# Project Learning Support Policy

This project is both a working product and a place to learn how the product is designed and built. Help the user make progress while making the reasoning understandable and reusable.

## When to Provide Learning Support

Provide learning support when:

- the user is exploring an unfamiliar problem;
- the goal or successful behavior is still being defined;
- expected behavior differs from what currently happens;
- a task can teach a useful design, programming, or testing concept;
- the user asks why something works, how to evaluate it, or what to try next;
- an implementation result creates a useful opportunity to reflect and iterate.

Keep the support brief when the user asks for a routine edit or already shows confidence with the concept. Do not turn every task into a lesson or delay requested implementation for unnecessary explanation.

## How to Help

### 1. Begin with a Small Starting Point

Choose the smallest complete activity that produces a visible or testable result. State what is included and what is outside the first version.

Prefer one concrete example before adding variations. For this project, that means teaching one beginner matcha drink before introducing multiple recipes or advanced techniques.

### 2. Describe Behavior Clearly

When behavior is being designed or debugged, distinguish these ideas:

- **Intended behavior:** what the experience is meant to help the learner do.
- **Expected behavior:** the specific, observable result that should occur.
- **Actual behavior:** what was directly observed during use or testing.
- **Behavior gap:** the meaningful difference between expected and actual behavior.

Do not present an assumption as actual behavior. Label untested ideas as assumptions or possible behaviors to observe.

Use this compact form when it helps:

```text
Trigger:
Expected:
Actual:
Gap:
Next test or change:
```

### 3. Make the Reasoning Visible

Explain the concepts that directly support the current work in simple language. Useful computational thinking concepts include:

- **Decomposition:** break a larger task into manageable parts.
- **Sequence:** arrange actions in the order they must happen.
- **Conditionals:** describe what to do when different results occur.
- **Iteration:** try, observe, adjust, and try again.
- **Testing:** compare a result with a defined expectation.
- **Debugging:** locate the cause of a gap and make a focused change.

Connect each concept to the current project rather than giving a generic definition alone.

### 4. Build, Then Let the User Inspect

When implementation is requested:

1. Build a small working version.
2. Check the primary path yourself.
3. Put the result where the user can inspect or use it.
4. Explain what changed and what evidence shows it works.
5. Identify the next meaningful learning question only when one exists.

Do not stop at a plan when a safe, concrete implementation is possible.

### 5. Use Evidence of Learning

Treat successful completion as more than reading or clicking through instructions. Look for evidence that a beginner can:

- complete the task with little or no coaching;
- explain the important choice or sequence;
- recognize a problem in the result;
- choose a sensible adjustment;
- repeat the task later.

For interface tests, observe where the learner hesitates, misreads, leaves the intended path, or needs outside help. Use those observations to revise the guide.

### 6. Support Reflection Without Overloading the User

Use short prompts that help the user notice and decide, such as:

- What result did you expect?
- What happened instead?
- Which step was unclear?
- What would you change next time?
- Could a beginner repeat this without help?

Ask only questions that affect the next decision. When a reasonable assumption allows progress, state it and continue.

## Documentation Expectations

Keep learning notes close to the work. Update `docs/design.md` when the goal, intended behavior, success criterion, first scope, or observed behavior changes materially.

For a new feature or learning activity, document only what is useful:

- goal;
- small starting point;
- intended and expected behavior;
- actual observed behavior, when available;
- first success criterion;
- test or observation method;
- relevant computational concepts.

Keep documentation plain, specific, and short enough to use during implementation.

## Communication Style

- Use beginner-friendly language and define necessary technical terms.
- Lead with the current result or decision.
- Explain why a step matters at the moment it becomes relevant.
- Prefer concrete examples and observable behavior.
- Separate facts, observations, and assumptions.
- Encourage adjustment and exploration without implying there is only one correct personal preference.

## Definition of Done

Learning-centered project work is complete when:

- the requested artifact or behavior works;
- the primary path has been checked;
- expected and actual behavior are recorded when testing reveals a gap;
- the user can see what changed and why;
- the next step, if any, follows from evidence rather than speculation.

