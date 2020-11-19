# Web Components testing workshop

## 👋 Welcome!

Welcome to the testing web components workshop! In this repository you'll find a series of assignments to get you up and running and learn how to unit test your web components in no-time!

Here's a link to the slides: https://docs.google.com/presentation/d/1AVP0Y2i74gWTHxNMgdc3IK0YpjFrfejCwkl14LSK2bk/edit?usp=sharing

## 🚀 Getting started

To get started:

```bash
git clone https://github.com/thepassle/wc-testing-workshop.git
cd wc-testing-workshop
npm install
```

You should now be good to go. In the `package.json` you can find the relevant scripts to run your tests for a given assignment.

For example, if you're working on `assignment-2`, you can run the following script to verify you've completed the assignment:
```bash
npm run test:assignment-2
```

You've completed the assignment when all tests are implemented, and pass. You should never have to change the source code in the `src` folder for any given assignment; only the code in the `test` folder.

To view the component for an assignment in the browser, you can run `npm start`, and navigate to the assignment that you're working on.

### Your first assignment

You can get started by taking a look at the `assignment-1` folder. Inside, you'll find a `src`, `solution` and `test` folder, as well as a `README.md` to give some explanation and context for the assignment.

Folders:
- `src`: in the src folder, you'll find the code for the component that we'll want to test. You should never have to change the code of the source file to make a test pass; we'll only focus on the test files.
- `solution`: if you get stuck, you can take a look at the solution folder. Try not to cheat!
- `test`: this is where your test file lives, and where you'll be writing the implementation and solution for each assignment.

## ✅ Done?

Finished all the assignments? Congrats!

You can now go ahead and write tests for your budget app that you implemented earlier today.

Some things to test could be:

- Does the component calculate the correct leftover amount?
- Does it add a transaction correctly?
- Does it submit a transaction correctly?
- Does it correctly update the progress/status bar width when transactions are updated?
- Does it pass automated a11y tests?

Can you think of more? 😉

To get started, you can (in your budget app project directory, not this repository) run:
```bash
npm i -D @web/test-runner @open-wc/testing
```

Add the following script to your `package.json`:

```json
"test": "web-test-runner --node-resolve --files **/*.test.js"
```

Then you can add a test file called `budget-app.test.js` like so:
```js
import { expect, fixture, html } from '@open-wc/testing';
import './budget-app.js'; // or whatever you named your file 🙂

describe('budget-app', () => {
  it('my test!', async () => {
    const element = await fixture(html`<budget-app></budget-app>`);
    // write your test
  });
});
```

To run your test, run the following command:
```bash
npm test
```

## 📝 Tips

### Running tests in `watch mode`

If you like to keep your tests running, and re-run the tests while you make changes to your test files, you can also run:

```bash
npm run test:assignment-1:watch
```

### Debugging in the browser

If you're stuck, and would like to debug your component in the browser, you can run the test runner in `watch` mode by running:
```bash
npm run test:assignment-1:watch
```

and in your terminal press the `D` key on your keyboard. This will open the browser, and allow you to use the browser developer tools to debug your code.

### Stuck?

Take a look at the `solution` directory. Really stuck? Shoot the instructor a message.

### Found a mistake?

Let me know! We can improve the workshop for the next time 🙂