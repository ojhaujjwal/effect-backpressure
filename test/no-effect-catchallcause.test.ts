import { RuleTester } from "oxlint/plugins-dev"
import rule from "../src/oxlint/rules/no-effect-catchallcause.ts"

const tester = new RuleTester()

tester.run("no-effect-catchallcause", rule, {
  valid: [
    "Effect.catchAll(someEffect, handler)",
    "Effect.catchTag(someEffect, 'Tag', handler)"
  ],
  invalid: [
    {
      code: "Effect.catchAllCause(someEffect, handler)",
      errors: [{ message: "Do not use Effect.catchAllCause. It catches defects (bugs) which should crash the program. Use Effect.catchAll or Effect.catchTag to handle expected errors only." }]
    }
  ]
})
