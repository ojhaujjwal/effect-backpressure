import { RuleTester } from "oxlint/plugins-dev"
import rule from "../src/oxlint/rules/no-unknown-effect-error.ts"

const tester = new RuleTester()

tester.run("no-unknown-effect-error", rule, {
  valid: [
    { code: "let x: Effect.Effect<string, Error>", filename: "test.ts" },
    { code: "let x: Effect.Effect<string, never>", filename: "test.ts" },
    { code: "let x: Effect.Effect<void, Error, R>", filename: "test.ts" },
    { code: "let x: SomeOtherType<string, unknown>", filename: "test.ts" }
  ],
  invalid: [
    {
      code: "let x: Effect.Effect<string, unknown>",
      filename: "test.ts",
      errors: [{ message: "Do not use `unknown` in the error channel of Effect.Effect. Use explicit error types to preserve Effect's type-safe error handling." }]
    },
    {
      code: "let x: Effect.Effect<string, unknown, R>",
      filename: "test.ts",
      errors: [{ message: /unknown/ }]
    }
  ]
})
