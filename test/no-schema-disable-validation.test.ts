import { RuleTester } from "oxlint/plugins-dev"
import rule from "../src/oxlint/rules/no-schema-disable-validation.ts"

const tester = new RuleTester()

tester.run("no-schema-disable-validation", rule, {
  valid: [
    "const x = { disableValidation: false }",
    "const x = { otherProperty: true }",
    "Schema.string"
  ],
  invalid: [
    {
      code: "const x = { disableValidation: true }",
      errors: [{ message: "Do not use { disableValidation: true }. Schema validation should always be enabled to catch invalid data. If you're seeing validation errors, fix the data or schema instead of disabling validation." }]
    }
  ]
})
