# Clunkyard game kit

Choose a language, clone its starter, build a robot and play a real local match. Bring the toolchain you already use. Each starter downloads only its selected SDK and a small shared engine; no account, container login or all-language builder is needed.

```sh
git clone https://github.com/clunkyard/starter-c.git
cd starter-c
make doctor
make
make match
make replay
```

Or clone this catalogue and run `node clunkyard.cjs new python my-robot`. `node clunkyard.cjs list` lists every offered language. JavaScript, Vane, Cadence and Glyph use the portable Node 20+ route. Current native assets are qualified for Linux x86-64/glibc 2.39+ (Ubuntu 24.04+ or WSL2 Ubuntu 24.04+); other native platforms need qualification. Compilers and interpreter packages are never downloaded automatically.

## Language starters

|Language|Starter|Local requirements|
|---|---|---|
|javascript|[Clone or use template](https://github.com/clunkyard/starter-javascript)|node|
|typescript|[Clone or use template](https://github.com/clunkyard/starter-typescript)|node, make, tsc|
|python|[Clone or use template](https://github.com/clunkyard/starter-python)|node, make, python3|
|c|[Clone or use template](https://github.com/clunkyard/starter-c)|node, make, cc|
|cpp|[Clone or use template](https://github.com/clunkyard/starter-cpp)|node, make, c++|
|go|[Clone or use template](https://github.com/clunkyard/starter-go)|node, make, go|
|rust|[Clone or use template](https://github.com/clunkyard/starter-rust)|node, make, rustc|
|hew|[Clone or use template](https://github.com/clunkyard/starter-hew)|node, make, hew, cc|
|elixir|[Clone or use template](https://github.com/clunkyard/starter-elixir)|node, make, elixir, erlc, cc|
|erlang|[Clone or use template](https://github.com/clunkyard/starter-erlang)|node, make, erl, erlc, cc|
|csharp|[Clone or use template](https://github.com/clunkyard/starter-csharp)|node, make, dotnet|
|fsharp|[Clone or use template](https://github.com/clunkyard/starter-fsharp)|node, make, dotnet|
|java|[Clone or use template](https://github.com/clunkyard/starter-java)|node, make, javac, java|
|kotlin|[Clone or use template](https://github.com/clunkyard/starter-kotlin)|node, make, kotlinc, java|
|scala|[Clone or use template](https://github.com/clunkyard/starter-scala)|node, make, scalac, java|
|clojure|[Clone or use template](https://github.com/clunkyard/starter-clojure)|node, make, java|
|dart|[Clone or use template](https://github.com/clunkyard/starter-dart)|node, make, dart|
|swift|[Clone or use template](https://github.com/clunkyard/starter-swift)|node, make, swiftc|
|zig|[Clone or use template](https://github.com/clunkyard/starter-zig)|node, make, zig|
|haskell|[Clone or use template](https://github.com/clunkyard/starter-haskell)|node, make, ghc|
|ocaml|[Clone or use template](https://github.com/clunkyard/starter-ocaml)|node, make, ocamlopt, ocamlc|
|common-lisp|[Clone or use template](https://github.com/clunkyard/starter-common-lisp)|node, make, sbcl|
|perl|[Clone or use template](https://github.com/clunkyard/starter-perl)|node, make, perl|
|lua|[Clone or use template](https://github.com/clunkyard/starter-lua)|node, make, lua5.4, cc, pkg-config|
|ruby|[Clone or use template](https://github.com/clunkyard/starter-ruby)|node, make, ruby|
|julia|[Clone or use template](https://github.com/clunkyard/starter-julia)|node, make, julia|
|r|[Clone or use template](https://github.com/clunkyard/starter-r)|node, make, Rscript, R, cc|
|php|[Clone or use template](https://github.com/clunkyard/starter-php)|node, make, php|
|fortran|[Clone or use template](https://github.com/clunkyard/starter-fortran)|node, make, gfortran|
|d|[Clone or use template](https://github.com/clunkyard/starter-d)|node, make, ldc2|
|ada|[Clone or use template](https://github.com/clunkyard/starter-ada)|node, make, gnatmake|
|nim|[Clone or use template](https://github.com/clunkyard/starter-nim)|node, make, nim, cc|
|mercury|[Clone or use template](https://github.com/clunkyard/starter-mercury)|node, make, mmc|
|pascal|[Clone or use template](https://github.com/clunkyard/starter-pascal)|node, make, fpc|
|basic|[Clone or use template](https://github.com/clunkyard/starter-basic)|node, make, fbc|
|cobol|[Clone or use template](https://github.com/clunkyard/starter-cobol)|node, make, cobc|
|powershell|[Clone or use template](https://github.com/clunkyard/starter-powershell)|node, make, pwsh, dotnet|
|prolog|[Clone or use template](https://github.com/clunkyard/starter-prolog)|node, make, swipl, swipl-ld|
|chr|[Clone or use template](https://github.com/clunkyard/starter-chr)|node, make, swipl, swipl-ld|
|clips|[Clone or use template](https://github.com/clunkyard/starter-clips)|node, make, python3|
|minizinc|[Clone or use template](https://github.com/clunkyard/starter-minizinc)|node, make, python3, minizinc|
|forth|[Clone or use template](https://github.com/clunkyard/starter-forth)|node, make, python3, gforth|
|apl|[Clone or use template](https://github.com/clunkyard/starter-apl)|node, make, python3, apl|
|bqn|[Clone or use template](https://github.com/clunkyard/starter-bqn)|node, make, bqn|
|shell|[Clone or use template](https://github.com/clunkyard/starter-shell)|node, make, sh, jq|
|wat|[Clone or use template](https://github.com/clunkyard/starter-wat)|node, make, wat2wasm|
|assemblyscript-wasm|[Clone or use template](https://github.com/clunkyard/starter-assemblyscript-wasm)|node, make, asc|
|c-wasm|[Clone or use template](https://github.com/clunkyard/starter-c-wasm)|node, make, clang|
|rust-wasm|[Clone or use template](https://github.com/clunkyard/starter-rust-wasm)|node, make, rustc|
|zig-wasm|[Clone or use template](https://github.com/clunkyard/starter-zig-wasm)|node, make, zig|
|vane|[Clone or use template](https://github.com/clunkyard/starter-vane)|node|
|cadence|[Clone or use template](https://github.com/clunkyard/starter-cadence)|node|
|glyph|[Clone or use template](https://github.com/clunkyard/starter-glyph)|node|
|vane-wasm|[Clone or use template](https://github.com/clunkyard/starter-vane-wasm)|node, make, clang|
|cadence-wasm|[Clone or use template](https://github.com/clunkyard/starter-cadence-wasm)|node, make, clang|
|glyph-wasm|[Clone or use template](https://github.com/clunkyard/starter-glyph-wasm)|node, make, clang|

## Releases and reproducibility

Release [v2.0.0-kit.1](https://github.com/clunkyard/game-kit/releases/tag/v2.0.0-kit.1) pins SDK 2.0.0, the engine, each selected binding and checksums. Download the starter archive if you prefer not to clone. Generated downloads go under ignored `.clunkyard/`; keep source files, manifests and your own tests in Git. Compiler-sensitive bindings rebuild against the compiler you installed. Public SDK distribution is independent of your private robot source.

## Move from local trials to the arena

Create a bot at [clunkyard.com](https://clunkyard.com), connect your GitHub repository in My bots, select its ref and import its root. Pushes to the selected ref save a new immutable source revision and queue a build. Use real arena trials to check hosted budgets and follow the replay back to its exact revision. The desktop kit and editor use the same canonical starter/API; local CPU timing is not a substitute for hosted qualification.

[Choose a language](https://clunkyard.com/manual#choose-language) · [SDK and CABI](https://clunkyard.com/sdk) · [Local trials](https://clunkyard.com/sdk/local-trials) · [Game manual](https://clunkyard.com/manual)

Generated from [slepp/azimuth-arena](https://github.com/slepp/azimuth-arena) at `ff21e62c8405d0d4bb789f50c322972925162702`. SDK source changes belong there; these templates share one release and are regenerated together.
