import { RuleTester } from "oxlint/plugins-dev"
import rule from "../src/oxlint/rules/no-vitest-modifiers.ts"

const tester = new RuleTester()

tester.run("no-vitest-modifiers", rule, {
  valid: [
    "it('test', () => {})",
    "describe('suite', () => {})",
    "it.each([1,2,3])('test %s', (n) => {})"
  ],
  invalid: [
    {
      code: "it.skip('test', () => {})",
      errors: [{ message: "Do not use it.skip(). Fix or remove the test instead of skipping or focusing it." }]
    },
    {
      code: "it.only('test', () => {})",
      errors: [{ message: "Do not use it.only(). Fix or remove the test instead of skipping or focusing it." }]
    },
    {
      code: "describe.skip('suite', () => {})",
      errors: [{ message: "Do not use describe.skip(). Fix or remove the test instead of skipping or focusing it." }]
    },
    {
      code: "describe.only('suite', () => {})",
      errors: [{ message: "Do not use describe.only(). Fix or remove the test instead of skipping or focusing it." }]
    }
  ]
})
