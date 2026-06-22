import { RuleTester } from "oxlint/plugins-dev"
import rule from "../src/oxlint/rules/no-plain-it-with-effect.ts"

const tester = new RuleTester()

tester.run("no-plain-it-with-effect", rule, {
  valid: [
    "it('test', () => { const x = 1 })",
    "it('test', () => { expect(1).toBe(1) })",
    "describe('suite', () => {})"
  ],
  invalid: [
    {
      code: "it('test', () => Effect.gen(function*() { return 1 }))",
      errors: [{ message: "Use it.effect() instead of it() for tests containing Effect code. Plain it() captures but never executes the Effect, causing false passes." }]
    }
  ]
})
