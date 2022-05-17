# Running

- `dev`: Use when developing in isolation.

  - development mode
  - source watch ✅
  - live reloading ✅
  - hot module replacement ✅
  - module federation ❌
  - inline eval source map

#

- `start`: Use when developing from the host app

  - development mode
  - source watch ✅
  - live reloading ✅
  - hot module replacement ❌
  - module federation ✅
  - inline eval source map

#

- `prod`: Use when deploying to a serve

  - production mode
  - source watch ❌
  - live reloading ❌
  - hot module replacement ❌
  - module federation ✅
  - source map
