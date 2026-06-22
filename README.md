# @ojhaujjwal/effect-backpressure

Shared oxlint plugin with custom lint rules for Effect-based TypeScript projects.

## Usage

Pick a preset:

```json
// .oxlintrc.json
{
  "plugins": ["typescript", "import", "oxc", "eslint"],
  "jsPlugins": ["@ojhaujjwal/effect-backpressure/oxlint"],
  "extends": ["@ojhaujjwal/effect-backpressure/configs/recommended.json"],
  "rules": {
    "effect-lint/no-process": "off"
  }
}
```

Or extend the full base config:

```json
{
  "extends": ["@ojhaujjwal/effect-backpressure/oxlintrc.json"]
}
```

## Presets

| Preset | Rules | Description |
|--------|-------|-------------|
| `configs/recommended.json` | 23 | Core safety rules at `"error"`. Excludes `no-console` and `prefer-option-from-nullable`. |
| `configs/strict.json` | 25 | Extends recommended, adds `no-console` and `prefer-option-from-nullable` at `"error"`. |
| `oxlintrc.json` | 25 | Full base config (same as strict, but `prefer-option-from-nullable` at `"warn"`). |

## Rules

### Effect API

| Rule | Description |
|------|-------------|
| `no-effect-ignore` | Disallow `Effect.ignore` — errors should be explicitly handled |
| `no-effect-catchallcause` | Disallow `Effect.catchAllCause` — catches defects, should crash instead |
| `no-effect-asvoid` | Disallow `Effect.asVoid` — usually unnecessary |
| `no-silent-error-swallow` | Disallow catch handlers returning `Effect.void` |
| `no-service-option` | Disallow `Effect.serviceOption` — services should always be present |
| `no-effect-any` | Disallow `any` in `Effect<...>` type parameters |
| `no-unknown-effect-error` | Disallow `unknown` in the error channel of `Effect.Effect` |
| `no-async-await` | Disallow `async`/`await`/`new Promise()` — use Effect APIs |
| `no-raw-date` | Disallow `new Date()` and `Date.now()` — use `Effect/Clock` |
| `no-plain-it-with-effect` | Require `it.effect()` instead of `it()` for Effect tests |

### Code Quality

| Rule | Description |
|------|-------------|
| `no-nested-layer-provide` | Disallow nested `Layer.provide` calls |
| `no-pipe-overload` | Disallow `.pipe()` with more than 20 arguments |
| `no-schema-disable-validation` | Disallow `{ disableValidation: true }` in Schema operations |
| `no-void-expression` | Disallow `void` expressions (no-ops) |
| `no-satisfies` | Disallow `satisfies` expressions |
| `prefer-option-from-nullable` | Prefer `Option.fromNullable` over ternary with `Option.some/none` |

### Banned APIs

| Rule | Description |
|------|-------------|
| `no-console` | Disallow `console.*` — use `Effect.Console` or `Effect.log` |
| `no-process` | Disallow `process.*` (except `process.argv`) — use Effect Config |
| `no-node-imports` | Disallow `node:*` and bare Node builtin imports |
| `no-bun-globals` | Disallow `Bun.*` APIs |
| `no-require` | Disallow `require()` — use ES module imports |

### Test Practices

| Rule | Description |
|------|-------------|
| `no-vitest-modifiers` | Disallow `it.skip/only` and `describe.skip/only` |

### Comments / Directives

| Rule | Description |
|------|-------------|
| `no-oxlint-disable` | Disallow `oxlint-disable` / `eslint-disable` comments |
| `no-ts-ignore` | Disallow `@ts-ignore` / `@ts-expect-error` |
| `no-ts-nocheck` | Disallow `@ts-nocheck` |

## Development

```sh
pnpm install
pnpm test    # runs vitest
pnpm build   # compiles with tsc
```
