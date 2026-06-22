import { RuleTester } from "oxlint/plugins-dev"
import rule from "../src/oxlint/rules/prefer-option-from-nullable.ts"

const tester = new RuleTester()

tester.run("prefer-option-from-nullable", rule, {
  valid: [
    "Option.fromNullable(x)",
    "x ? Option.some(x) : Option.none()",
    "x == null ? Option.some(x) : Option.none()"
  ],
  invalid: [
    {
      code: "x !== null ? Option.some(x) : Option.none()",
      errors: [{ message: "Use Option.fromNullable(x) instead of ternary with Option.some/Option.none." }]
    },
    {
      code: "x != null ? Option.some(x) : Option.none()",
      errors: [{ message: "Use Option.fromNullable(x) instead of ternary with Option.some/Option.none." }]
    }
  ]
})
