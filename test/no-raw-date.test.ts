import { RuleTester } from "oxlint/plugins-dev"
import rule from "../src/oxlint/rules/no-raw-date.ts"

const tester = new RuleTester()

tester.run("no-raw-date", rule, {
  valid: [
    "Clock.currentTimeMillis",
    "const x = 1"
  ],
  invalid: [
    {
      code: "new Date()",
      errors: [{ message: "Do not use `new Date(...)`. Use `Effect.Clock` (`yield* Clock.currentTimeMillis`, etc.) or `DateTime` for current time. In tests, use a fixed date literal instead of `new Date()`." }]
    },
    {
      code: "Date.now()",
      errors: [{ message: "Do not use `Date.now()`. Use `yield* Clock.currentTimeMillis` from `Effect/Clock` instead." }]
    }
  ]
})
