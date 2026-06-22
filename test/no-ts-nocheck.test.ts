import { RuleTester } from "oxlint/plugins-dev"
import rule from "../src/oxlint/rules/no-ts-nocheck.ts"

const tester = new RuleTester()

tester.run("no-ts-nocheck", rule, {
  valid: [
    { code: "const x: string = 'hello'", filename: "test.ts" }
  ],
  invalid: [
    {
      code: "// @ts-nocheck\nconst x: any = 1",
      filename: "test.ts",
      errors: [{ message: "Do not use @ts-nocheck. Fix the underlying type errors instead." }]
    }
  ]
})
