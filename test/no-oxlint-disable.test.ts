import { RuleTester } from "oxlint/plugins-dev"
import rule from "../src/oxlint/rules/no-oxlint-disable.ts"

const tester = new RuleTester()

tester.run("no-oxlint-disable", rule, {
  valid: [
    "const x = 1",
    "// some comment"
  ],
  invalid: [
    {
      code: "// oxlint-disable-next-line\nconst x = 1",
      errors: [{ message: "Do not use oxlint-disable or eslint-disable comments. Fix the underlying issue instead." }]
    },
    {
      code: "// eslint-disable-next-line\nconst x = 1",
      errors: [{ message: "Do not use oxlint-disable or eslint-disable comments. Fix the underlying issue instead." }]
    }
  ]
})
