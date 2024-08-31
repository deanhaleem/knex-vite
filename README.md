# knex-vite

Trying to bundle with noExternals without needing to install all dialects.

Seems just using a variable in the `require` calls works fine. i.e.:

```js
// ❌ Vite will try to import sqlite3 in bundle.js
return require("sqlite3");

// ✅ Vite will not try to import sqlite3 in bundle.js
const moduleName = "sqlite3";
return require(moduleName);
```

## Run

- Clone
- `npm i`

- Run `npm run build`, notice the messages.

```
"better-sqlite3" is imported by "better-sqlite3?commonjs-external", but could not be resolved – treating it as an external dependency.
"tedious" is imported by "tedious?commonjs-external", but could not be resolved – treating it as an external dependency.
"mysql2" is imported by "mysql2?commonjs-external", but could not be resolved – treating it as an external dependency.
"oracledb" is imported by "oracledb?commonjs-external", but could not be resolved – treating it as an external dependency.
"pg" is imported by "pg?commonjs-external", but could not be resolved – treating it as an external dependency.
"pg-query-stream" is imported by "pg-query-stream?commonjs-external", but could not be resolved – treating it as an external dependency.
"sqlite3" is imported by "sqlite3?commonjs-external", but could not be resolved – treating it as an external dependency.
```

This isn't ideal as I'm using `mysql` and don't want to install those other dependencies. But if I deploy a single `bundle.js` file to a lambda, the lambda will fail as it can't find the other dialects.

- Run `npm run patch`

  - This just applies the patch described above

- Run `npm run build` and notice no issues.

I'm sure there are some downsides to having the `require` now include a dynamic variable name, but I wonder if it's fine/worth it.
