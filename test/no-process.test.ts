import { RuleTester } from "oxlint/plugins-dev"
import rule from "../src/oxlint/rules/no-process.ts"

const tester = new RuleTester()

tester.run("no-process", rule, {
  valid: [
    "process.argv",
    'import { Config } from "effect"; Config.string("FOO")',
    "console.log('hello')"
  ],
  invalid: [
    {
      code: "process.env.FOO",
      errors: [{ message: /process/ }]
    },
    {
      code: "globalThis.process.env.FOO",
      errors: [{ message: /process/ }]
    },
    {
      code: "process.cwd()",
      errors: [{ message: /process/ }]
    }
  ]
})
