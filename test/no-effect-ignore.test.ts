import { RuleTester } from "oxlint/plugins-dev"
import rule from "../src/oxlint/rules/no-effect-ignore.ts"

const tester = new RuleTester()

tester.run("no-effect-ignore", rule, {
  valid: [
    "Effect.catchAll(someEffect, handler)",
    "Effect.sync(() => 42)",
    "someEffect.pipe(Effect.map(f))"
  ],
  invalid: [
    {
      code: "Effect.ignore(someEffect)",
      errors: [{ message: "Do not use Effect.ignore. It silently discards errors which hides bugs. Handle errors explicitly with Effect.catchTag, Effect.catchAll, or propagate them." }]
    }
  ]
})
