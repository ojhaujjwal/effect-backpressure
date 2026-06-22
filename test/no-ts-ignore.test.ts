import { RuleTester } from "oxlint/plugins-dev"
import rule from "../src/oxlint/rules/no-ts-ignore.ts"

const tester = new RuleTester()

tester.run("no-ts-ignore", rule, {
  valid: [
    { code: "const x: any = 1", filename: "test.ts" },
    "// some comment"
  ],
  invalid: [
    {
      code: "// @ts-ignore\nconst x: any = 1",
      filename: "test.ts",
      errors: [{ message: "Do not use @ts-ignore. Fix the underlying type error instead." }]
    },
    {
      code: "// @ts-expect-error\nconst x: any = 1",
      filename: "test.ts",
      errors: [{ message: "Do not use @ts-expect-error. Fix the underlying type error instead." }]
    }
  ]
})
