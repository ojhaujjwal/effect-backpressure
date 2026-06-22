import { RuleTester } from "oxlint/plugins-dev"
import rule from "../src/oxlint/rules/no-nested-layer-provide.ts"

const tester = new RuleTester()

tester.run("no-nested-layer-provide", rule, {
  valid: [
    "Layer.provide(serviceLayer, config)",
    "Layer.provideMerge(serviceLayer, config)",
    "someEffect.pipe(Layer.provide(config))"
  ],
  invalid: [
    {
      code: "Layer.provide(Layer.provide(service, inner), outer)",
      errors: [{ message: "Nested Layer.provide detected. Extract the inner Layer.provide to a separate variable or use Layer.provideMerge." }]
    }
  ]
})
