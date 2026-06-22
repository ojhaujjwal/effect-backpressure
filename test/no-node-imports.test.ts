import { RuleTester } from "oxlint/plugins-dev"
import rule from "../src/oxlint/rules/no-node-imports.ts"

const tester = new RuleTester()

tester.run("no-node-imports", rule, {
  valid: [
    'import { Effect } from "effect"',
    'import { Schema } from "@effect/schema"',
    "export { Effect } from 'effect'"
  ],
  invalid: [
    {
      code: 'import { readFile } from "fs"',
      errors: [{ message: "Do not use Node.js built-in imports (e.g. 'fs', 'path'). Use @effect/platform instead for platform-agnostic code." }]
    },
    {
      code: 'import { readFile } from "node:fs"',
      errors: [{ message: "Do not use 'node:' imports. Use @effect/platform instead for platform-agnostic code." }]
    },
    {
      code: 'import { join } from "path"',
      errors: [{ message: /Node.js built-in/ }]
    }
  ]
})
