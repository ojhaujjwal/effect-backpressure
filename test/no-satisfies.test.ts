import { RuleTester } from "oxlint/plugins-dev"
import rule from "../src/oxlint/rules/no-satisfies.ts"

const tester = new RuleTester()

tester.run("no-satisfies", rule, {
  valid: [
    { code: "const x: string = 'hello'", filename: "test.ts" },
    { code: "const y = 42 as const", filename: "test.ts" }
  ],
  invalid: [
    {
      code: "const x = 'hello' satisfies string",
      filename: "test.ts",
      errors: [{ message: "Do not use satisfies expressions. They bypass TypeScript's type safety. Refactor to use proper types or type guards instead." }]
    }
  ]
})
