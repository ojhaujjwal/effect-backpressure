import { definePlugin } from "@oxlint/plugins"
import noEffectIgnore from "./rules/no-effect-ignore.ts"
import noEffectCatchallcause from "./rules/no-effect-catchallcause.ts"
import noEffectAsvoid from "./rules/no-effect-asvoid.ts"
import noSilentErrorSwallow from "./rules/no-silent-error-swallow.ts"
import noServiceOption from "./rules/no-service-option.ts"
import noNestedLayerProvide from "./rules/no-nested-layer-provide.ts"
import noPipeOverload from "./rules/no-pipe-overload.ts"
import noSchemaDisableValidation from "./rules/no-schema-disable-validation.ts"
import noVoidExpression from "./rules/no-void-expression.ts"
import noOxlintDisable from "./rules/no-oxlint-disable.ts"
import noProcess from "./rules/no-process.ts"
import noEffectAny from "./rules/no-effect-any.ts"
import noAsyncAwait from "./rules/no-async-await.ts"
import noSatisfies from "./rules/no-satisfies.ts"
import noRawDate from "./rules/no-raw-date.ts"
import noConsole from "./rules/no-console.ts"
import noNodeImports from "./rules/no-node-imports.ts"
import noUnknownEffectError from "./rules/no-unknown-effect-error.ts"
import noPlainItWithEffect from "./rules/no-plain-it-with-effect.ts"
import noVitestModifiers from "./rules/no-vitest-modifiers.ts"
import noTsIgnore from "./rules/no-ts-ignore.ts"
import noTsNocheck from "./rules/no-ts-nocheck.ts"
import preferOptionFromNullable from "./rules/prefer-option-from-nullable.ts"
import noBunGlobals from "./rules/no-bun-globals.ts"
import noRequire from "./rules/no-require.ts"

export default definePlugin({
  meta: { name: "effect-lint" },
  rules: {
    "no-effect-ignore": noEffectIgnore,
    "no-effect-catchallcause": noEffectCatchallcause,
    "no-effect-asvoid": noEffectAsvoid,
    "no-silent-error-swallow": noSilentErrorSwallow,
    "no-service-option": noServiceOption,
    "no-nested-layer-provide": noNestedLayerProvide,
    "no-pipe-overload": noPipeOverload,
    "no-schema-disable-validation": noSchemaDisableValidation,
    "no-void-expression": noVoidExpression,
    "no-oxlint-disable": noOxlintDisable,
    "no-process": noProcess,
    "no-effect-any": noEffectAny,
    "no-async-await": noAsyncAwait,
    "no-satisfies": noSatisfies,
    "no-raw-date": noRawDate,
    "no-console": noConsole,
    "no-node-imports": noNodeImports,
    "no-unknown-effect-error": noUnknownEffectError,
    "no-plain-it-with-effect": noPlainItWithEffect,
    "no-vitest-modifiers": noVitestModifiers,
    "no-ts-ignore": noTsIgnore,
    "no-ts-nocheck": noTsNocheck,
    "prefer-option-from-nullable": preferOptionFromNullable,
    "no-bun-globals": noBunGlobals,
    "no-require": noRequire
  }
})
