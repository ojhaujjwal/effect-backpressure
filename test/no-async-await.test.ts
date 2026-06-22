import { describe } from "vitest"
import { RuleTester } from "oxlint/plugins-dev"
import rule from "../src/oxlint/rules/no-async-await.ts"

const tester = new RuleTester()

describe("no-async-await", () => {
  tester.run("no-async-await", rule, {
    valid: [
      "function foo() { return 42 }",
      "const foo = () => 42",
      "Promise.resolve(1)"
    ],
    invalid: [
      {
        code: "async function foo() {}",
        errors: [{ message: "Do not use `async` functions. Use Effect APIs (`Effect.gen`, `Effect.tryPromise`, etc.) instead." }]
      },
      {
        code: "const foo = async () => {}",
        errors: [{ message: "Do not use `async` functions. Use Effect APIs (`Effect.gen`, `Effect.tryPromise`, etc.) instead." }]
      },
      {
        code: "await promise",
        errors: [{ message: "Do not use `await`. Use Effect APIs (`yield*`, `Effect.flatMap`, etc.) instead." }]
      },
      {
        code: "new Promise((resolve) => resolve(1))",
        errors: [{ message: "Do not use `new Promise(...)`. Use `Effect.async` or `Effect.tryPromise` instead." }]
      }
    ]
  })
})
