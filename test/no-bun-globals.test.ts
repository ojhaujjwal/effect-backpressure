import { RuleTester } from "oxlint/plugins-dev"
import rule from "../src/oxlint/rules/no-bun-globals.ts"

const tester = new RuleTester()

tester.run("no-bun-globals", rule, {
  valid: [
    "Buffer.from('hello')",
    "process.env.FOO"
  ],
  invalid: [
    {
      code: "Bun.env.SOMETHING",
      errors: [{ message: "Do not use 'Bun.env'. Use @effect/platform services (e.g., FileSystem, Command, Terminal, Environment, Config) instead." }]
    },
    {
      code: "Bun.write('file', content)",
      errors: [{ message: "Do not use 'Bun.write'. Use @effect/platform services (e.g., FileSystem, Command, Terminal, Environment, Config) instead." }]
    },
    {
      code: "Bun.file('path')",
      errors: [{ message: "Do not use 'Bun.file'. Use @effect/platform services (e.g., FileSystem, Command, Terminal, Environment, Config) instead." }]
    }
  ]
})
