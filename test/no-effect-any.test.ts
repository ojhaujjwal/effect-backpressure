import { RuleTester } from "oxlint/plugins-dev"
import rule from "../src/oxlint/rules/no-effect-any.ts"

const tester = new RuleTester()

tester.run("no-effect-any", rule, {
  valid: [
    { code: "let x: Effect.Effect<string, Error>", filename: "test.ts" },
    { code: "let x: Effect.Effect<string, Error, R>", filename: "test.ts" },
    { code: "let x: Effect.Effect<void, never>", filename: "test.ts" }
  ],
  invalid: [
    {
      code: "let x: Effect.Effect<any, Error>",
      filename: "test.ts",
      errors: [{ message: "Do not use `any` in Effect type parameters — it erases type safety. Use a concrete type instead." }]
    },
    {
      code: "let x: Effect.Effect<string, any>",
      filename: "test.ts",
      errors: [{ message: "Do not use `any` in Effect type parameters — it erases type safety. Use a concrete type instead." }]
    },
    {
      code: "let x: Effect.Effect<any, any>",
      filename: "test.ts",
      errors: [{ message: /any/ }, { message: /any/ }]
    }
  ]
})
