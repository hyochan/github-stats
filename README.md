# dooboo landing page

[![CI](https://github.com/hyochan/dooboo.io/actions/workflows/ci.yml/badge.svg)](https://github.com/hyochan/dooboo.io/actions/workflows/ci.yml)

<img width="415" alt="landing" src="https://user-images.githubusercontent.com/27461460/189487529-f2942a04-63af-4d6d-9600-d84e50cabeb9.png">

### Setup

1. cp `.env.sample` `.env.local`

### Tips

> When using yarn berry and TS fails after upgrading packages, try to follow below steps.

1. `yarn set version berry`
1. `yarn`
1. `yarn dlx @yarnpkg/sdks vscode`
1. `yarn plugin import typescript`
1. `yarn dlx @yarnpkg/sdks vscode`
   - Useful when prettier extension is not working.
