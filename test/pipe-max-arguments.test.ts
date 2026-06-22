import { RuleTester } from "oxlint/plugins-dev"
import rule from "../src/oxlint/rules/pipe-max-arguments.ts"

const tester = new RuleTester()

tester.run("pipe-max-arguments", rule, {
  valid: [
    "someEffect.pipe(Effect.map(f))",
    "someEffect.pipe(Effect.map(f), Effect.map(g), Effect.map(h))",
    "someEffect.pipe(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t)"
  ],
  invalid: [
    {
      code: "someEffect.pipe(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u)",
      errors: [{ message: ".pipe() has 21 arguments. Consider splitting into multiple .pipe() calls for readability (max 20)." }]
    }
  ]
})
