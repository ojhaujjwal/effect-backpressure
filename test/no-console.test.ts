import { RuleTester } from "oxlint/plugins-dev"
import rule from "../src/oxlint/rules/no-console.ts"

const tester = new RuleTester()

tester.run("no-console", rule, {
  valid: [
    "Effect.log('hello')",
    "Effect.Console.log('hello')"
  ],
  invalid: [
    {
      code: "console.log('hello')",
      errors: [{ message: "Do not use 'console.log'. Use Effect.Console or Effect.log instead." }]
    },
    {
      code: "console.error('oops')",
      errors: [{ message: "Do not use 'console.error'. Use Effect.Console or Effect.log instead." }]
    },
    {
      code: "console.warn('warning')",
      errors: [{ message: "Do not use 'console.warn'. Use Effect.Console or Effect.log instead." }]
    }
  ]
})
