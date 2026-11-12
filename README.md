# Clunkyard game kit

Choose a language, clone its starter and play a real local match. Bring Node 20+ with npm and the language toolchain you already use. Each robot repository contains source and ordinary build metadata; the shared npm CLI maintains the downloader, SDK catalogue and match tooling.

```sh
npx @clunkyard/cli new javascript my-robot
cd my-robot
npx @clunkyard/cli doctor
npx @clunkyard/cli build
npx @clunkyard/cli match
npx @clunkyard/cli replay
```

Or clone a language starter below and run `make doctor`, `make`, `make match` and `make replay`. The CLI downloads only the pinned engine and selected SDK; no account, Docker login or all-language toolchain is required. Cached assets live in ignored `.clunkyard/` and are identified by their content hashes. Compatible CLI fixes arrive through npm without updating every robot repository.

## npm packages

- [`@clunkyard/cli`](https://www.npmjs.com/package/@clunkyard/cli): shared local builds, trials and replays. Use `npx @clunkyard/cli` for current tooling; record `--version` with your source commit when comparing trials.
- [`@clunkyard/sdk`](https://www.npmjs.com/package/@clunkyard/sdk): JavaScript/TypeScript API and WebAssembly core. Node starters pin `clunkyard@npm:@clunkyard/sdk@2.0.0` in ordinary package files; their existing `clunkyard` import works locally and online.
- [`@clunkyard/git`](https://www.npmjs.com/package/@clunkyard/git): run `npm install --global @clunkyard/git@2.0.1`, then `clunkyard-git login` for your bot's [private Git remote](https://clunkyard.com/sdk/private-git).

JavaScript, TypeScript and the Vane/Cadence/Glyph Node routes are portable. TypeScript uses an installed TypeScript 6+ compiler. Bring your language's normal compiler or interpreter; the CLI never installs a toolchain. The [platform and toolchain guide](https://clunkyard.com/sdk/player-kit#supported-platforms) links official installation instructions and identifies supported local SDKs.

## Supported local platforms

The current native SDK qualifications are:

| Platform | Qualified local language SDKs |
| --- | --- |
| Linux x86-64, glibc 2.39+ (Ubuntu 24.04+ or WSL2) | Existing Linux language cohort listed below |
| Linux AArch64, glibc 2.39+ | C and C++; qualified with ARM Node and executables under QEMU user emulation |
| macOS, Apple Silicon (arm64) | C, C++, Python, Rust, Ruby, Swift, Java and C# |
| macOS, Intel (x86-64) | C, C++, Python and Rust |
| Windows x64, native MSVC-compatible toolchains | C, C++, Python, Rust and C# |

The 56-language table below is the starter catalogue, rather than a claim that every SDK and toolchain runs on every operating system. Check the [supported-platform guide](https://clunkyard.com/sdk/player-kit#supported-platforms) before choosing a local setup. If a language's toolchain or SDK is unavailable on your platform, use Clunkyard's hosted builds and trials, or another supported setup such as WSL2.

## Connect a remote robot or strategist

Use Node 22+ and copy the connection environment settings from your bot’s Connections panel into your shell. Keep the remote key out of source and command arguments. From the robot directory:

```sh
npx @clunkyard/cli connect
npx @clunkyard/cli connect --strategist python3 strategist.py
```

The default command builds this project and runs it with its selected SDK. The CLI contains the shared bridge; no helper file needs copying into your project. Pass an explicit command only for self-contained protocol programs or a strategist. Remote code plays Open. A strategist supplies policy to its hosted reflex. See the [connection guide](https://clunkyard.com/sdk/player-kit#connect-code-running-on-your-computer).

## Language starters

| Language | Starter | Local tools beyond Node |
| --- | --- | --- |
| javascript | [Clone or use template](https://github.com/clunkyard/starter-javascript) | none |
| typescript | [Clone or use template](https://github.com/clunkyard/starter-typescript) | tsc |
| python | [Clone or use template](https://github.com/clunkyard/starter-python) | python3 |
| c | [Clone or use template](https://github.com/clunkyard/starter-c) | cc |
| cpp | [Clone or use template](https://github.com/clunkyard/starter-cpp) | c++ |
| go | [Clone or use template](https://github.com/clunkyard/starter-go) | go, cc |
| rust | [Clone or use template](https://github.com/clunkyard/starter-rust) | rustc, cc |
| hew | [Clone or use template](https://github.com/clunkyard/starter-hew) | hew, cc |
| elixir | [Clone or use template](https://github.com/clunkyard/starter-elixir) | elixir, erlc, cc |
| erlang | [Clone or use template](https://github.com/clunkyard/starter-erlang) | erl, erlc, cc |
| csharp | [Clone or use template](https://github.com/clunkyard/starter-csharp) | dotnet |
| fsharp | [Clone or use template](https://github.com/clunkyard/starter-fsharp) | dotnet |
| java | [Clone or use template](https://github.com/clunkyard/starter-java) | javac, java |
| kotlin | [Clone or use template](https://github.com/clunkyard/starter-kotlin) | kotlinc, java, javac |
| scala | [Clone or use template](https://github.com/clunkyard/starter-scala) | scalac, java, javac |
| clojure | [Clone or use template](https://github.com/clunkyard/starter-clojure) | java, javac |
| dart | [Clone or use template](https://github.com/clunkyard/starter-dart) | dart |
| swift | [Clone or use template](https://github.com/clunkyard/starter-swift) | swiftc |
| zig | [Clone or use template](https://github.com/clunkyard/starter-zig) | zig |
| haskell | [Clone or use template](https://github.com/clunkyard/starter-haskell) | ghc, cc |
| ocaml | [Clone or use template](https://github.com/clunkyard/starter-ocaml) | ocamlopt, ocamlc, cc |
| common-lisp | [Clone or use template](https://github.com/clunkyard/starter-common-lisp) | sbcl |
| perl | [Clone or use template](https://github.com/clunkyard/starter-perl) | perl, cc |
| lua | [Clone or use template](https://github.com/clunkyard/starter-lua) | lua5.4, cc, pkg-config |
| ruby | [Clone or use template](https://github.com/clunkyard/starter-ruby) | ruby |
| julia | [Clone or use template](https://github.com/clunkyard/starter-julia) | julia |
| r | [Clone or use template](https://github.com/clunkyard/starter-r) | Rscript, R, cc |
| php | [Clone or use template](https://github.com/clunkyard/starter-php) | php |
| fortran | [Clone or use template](https://github.com/clunkyard/starter-fortran) | gfortran |
| d | [Clone or use template](https://github.com/clunkyard/starter-d) | ldc2, cc |
| ada | [Clone or use template](https://github.com/clunkyard/starter-ada) | gnatmake |
| nim | [Clone or use template](https://github.com/clunkyard/starter-nim) | nim, cc |
| mercury | [Clone or use template](https://github.com/clunkyard/starter-mercury) | mmc, cc |
| pascal | [Clone or use template](https://github.com/clunkyard/starter-pascal) | fpc |
| basic | [Clone or use template](https://github.com/clunkyard/starter-basic) | fbc |
| cobol | [Clone or use template](https://github.com/clunkyard/starter-cobol) | cobc |
| powershell | [Clone or use template](https://github.com/clunkyard/starter-powershell) | pwsh, dotnet |
| prolog | [Clone or use template](https://github.com/clunkyard/starter-prolog) | swipl, swipl-ld |
| chr | [Clone or use template](https://github.com/clunkyard/starter-chr) | swipl, swipl-ld |
| clips | [Clone or use template](https://github.com/clunkyard/starter-clips) | python3 |
| minizinc | [Clone or use template](https://github.com/clunkyard/starter-minizinc) | python3, minizinc, fzn-gecode |
| forth | [Clone or use template](https://github.com/clunkyard/starter-forth) | python3, gforth |
| apl | [Clone or use template](https://github.com/clunkyard/starter-apl) | python3, apl |
| bqn | [Clone or use template](https://github.com/clunkyard/starter-bqn) | bqn |
| shell | [Clone or use template](https://github.com/clunkyard/starter-shell) | sh, jq |
| wat | [Clone or use template](https://github.com/clunkyard/starter-wat) | wat2wasm |
| assemblyscript-wasm | [Clone or use template](https://github.com/clunkyard/starter-assemblyscript-wasm) | asc |
| c-wasm | [Clone or use template](https://github.com/clunkyard/starter-c-wasm) | clang, wasm-ld |
| rust-wasm | [Clone or use template](https://github.com/clunkyard/starter-rust-wasm) | rustc |
| zig-wasm | [Clone or use template](https://github.com/clunkyard/starter-zig-wasm) | zig |
| vane | [Clone or use template](https://github.com/clunkyard/starter-vane) | none |
| cadence | [Clone or use template](https://github.com/clunkyard/starter-cadence) | none |
| glyph | [Clone or use template](https://github.com/clunkyard/starter-glyph) | none |
| vane-wasm | [Clone or use template](https://github.com/clunkyard/starter-vane-wasm) | clang, wasm-ld |
| cadence-wasm | [Clone or use template](https://github.com/clunkyard/starter-cadence-wasm) | clang, wasm-ld |
| glyph-wasm | [Clone or use template](https://github.com/clunkyard/starter-glyph-wasm) | clang, wasm-ld |

## Repeat trials and play online

```sh
npx @clunkyard/cli match 42 2d classic
npx @clunkyard/cli match 77 3d zero-g
```

Keep a baseline commit and compare several seeds, contacts, battery, aim and hit rates in the replays. Use hosted trials to check arena budgets before entering tournaments. Create a bot at [clunkyard.com](https://clunkyard.com), use its private Git remote or connect your own GitHub repository in My bots. Accepted pushes save a revision and request its hosted build. [WebDAV](https://clunkyard.com/manual#local-development) is also available.

Existing generated kit checkouts can run `npx @clunkyard/cli migrate` after committing their work. Migration preserves robot source and refuses customized tool files. The immutable [kit.2 downloads](https://github.com/clunkyard/game-kit/releases/tag/v2.0.0-kit.2) remain available with their original tooling. [kit.3](https://github.com/clunkyard/game-kit/releases/tag/v2.0.0-kit.3) adds the qualified macOS and native Windows SDK archives and an updated shared local engine. Existing Linux SDK archive pins remain unchanged. [kit.5](https://github.com/clunkyard/game-kit/releases/tag/v2.0.0-kit.5) adds C/C++ Linux AArch64 SDKs; their shared conformance and 2D/3D trials ran with actual ARM binaries and Node under the existing QEMU emulator. The CLI selects the matching platform archive while retaining SDK 2.0.0 and protocol 2.

[Choose a language](https://clunkyard.com/manual#choose-language) · [SDK and C API](https://clunkyard.com/sdk) · [Local trials](https://clunkyard.com/sdk/local-trials) · [Game manual](https://clunkyard.com/manual) · [SDK source](https://github.com/clunkyard/sdk)
