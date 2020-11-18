# TODO:

# Testing

- Install test runner
  - add `web-test-runner.config.mjs` with a file glob and set node resolve to true
- test cases
  - counter, if add method is called, expect property on the element to equal something
  - reset button, if clicked, expect element.count to equal 0
  - event, if added, have the method fire a "counter increased" event, call method, test that event is fired
  - a11y test
  - fetch? with sinon?
  - stub
  - error handling

# Presentation:

- @web/test-runner
  - config
  - multiple browsers
  - --watch mode
  - debug mode
- @open-wc/testing-helpers
- examples
  - explain fixture
    - explain litelement lifecycle (await element.updateComplete)

