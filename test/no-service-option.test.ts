import { RuleTester } from "oxlint/plugins-dev"
import rule from "../src/oxlint/rules/no-service-option.ts"

const tester = new RuleTester()

tester.run("no-service-option", rule, {
  valid: [
    "Effect.service(MyService)",
    "Layer.provide(myService)",
    "Effect.flatMap(MyService, (svc) => svc.doWork())"
  ],
  invalid: [
    {
      code: "Effect.serviceOption(MyService)",
      errors: [{ message: "Do not use Effect.serviceOption. Services should always be present in context, even during testing. Yield the service directly (yield* MyService) and ensure it is provided in your layer composition." }]
    }
  ]
})
