import { RuleTester } from "oxlint/plugins-dev"
import rule from "../src/oxlint/rules/no-void-expression.ts"

const tester = new RuleTester()

tester.run("no-void-expression", rule, {
  valid: [
    "someFunc()",
    "let x = 42"
  ],
  invalid: [
    {
      code: "void someFunc()",
      errors: [{ message: "'void someFunc()' is a no-op. It evaluates the expression and discards the result. Remove it or use the value." }]
    }
  ]
})
