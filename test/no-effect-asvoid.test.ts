import { RuleTester } from "oxlint/plugins-dev"
import rule from "../src/oxlint/rules/no-effect-asvoid.ts"

const tester = new RuleTester()

tester.run("no-effect-asvoid", rule, {
  valid: [
    "Effect.sync(() => 42)",
    "Effect.map(someEffect, f)"
  ],
  invalid: [
    {
      code: "Effect.asVoid(someEffect)",
      errors: [{ message: "Effect.asVoid is usually unnecessary. The `void` return type already allows any value to be returned from an effect. Remove it." }]
    }
  ]
})
