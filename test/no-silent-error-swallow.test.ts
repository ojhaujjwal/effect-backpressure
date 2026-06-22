import { RuleTester } from "oxlint/plugins-dev"
import rule from "../src/oxlint/rules/no-silent-error-swallow.ts"

const MSG = "Do not silently swallow errors with '() => Effect.void'. Errors should be represented in the type system, not ignored. Either: (1) let the error propagate to the caller, (2) transform it with mapError to a different error type, or (3) handle it with meaningful recovery logic. Silent error swallowing hides bugs and breaks type safety."

const tester = new RuleTester()

tester.run("no-silent-error-swallow", rule, {
  valid: [
    "someEffect.pipe(Effect.catchAll((e) => Effect.succeed(0)))",
    "someEffect.pipe(Effect.catchTag('Tag', (e) => Effect.fail(e)))",
    "someEffect.pipe(Effect.catchAll((e) => Effect.logError(e)))",
    "someEffect.pipe(Effect.catchTags({ Tag1: (e) => Effect.fail(e) }))"
  ],
  invalid: [
    {
      code: "someEffect.pipe(Effect.catchAll(() => Effect.void))",
      errors: [{ message: MSG }]
    },
    {
      code: "someEffect.pipe(Effect.catchTag('Tag', () => Effect.void))",
      errors: [{ message: MSG }]
    },
    {
      code: "someEffect.pipe(Effect.catchTags({ Tag1: () => Effect.void }))",
      errors: [{ message: MSG }]
    }
  ]
})
