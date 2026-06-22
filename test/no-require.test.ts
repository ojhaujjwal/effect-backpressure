import { RuleTester } from "oxlint/plugins-dev"
import rule from "../src/oxlint/rules/no-require.ts"

const tester = new RuleTester()

tester.run("no-require", rule, {
  valid: [
    "import { foo } from 'bar'",
    "export { foo } from 'bar'",
    "const x = 1"
  ],
  invalid: [
    {
      code: "require('fs')",
      errors: [{ message: "Do not use require(). Use ES module imports instead." }]
    },
    {
      code: "const fs = require('fs')",
      errors: [{ message: "Do not use require(). Use ES module imports instead." }]
    }
  ]
})
