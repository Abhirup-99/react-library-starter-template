# React Library Starter Template

A modern starter template for building React libraries using SWC, TypeScript, and Rollup. Created due to the lack of existing templates that combine SWC's speed with Rollup's efficient bundle optimization.

## Features

- ⚡️ SWC for ultra-fast compilation
- 📦 Rollup for optimal bundling
- 🔷 TypeScript support
- 🎯 Generates CJS and ESM builds
- 💪 Type definitions included
- 🔍 Source maps support
- 📄 MIT License

## Why This Template?

While there are many React library starter templates available, finding one that uses SWC (a super-fast JavaScript/TypeScript compiler) along with Rollup was challenging. This template fills that gap by combining:

- SWC's blazing-fast compilation speed
- Rollup's efficient bundle optimization
- TypeScript's type safety

## Getting Started

1. Clone this template
2. Install dependencies:

```bash
npm install
```

3. Update the following files:

   - `package.json`: Set your library's name, version, and description
   - `src/index.ts`: Add your library's entry point code

4. Development:

   - Write your code in the `src` directory
   - Build the library: `npm run build`
   - Generate types: `npm run types`

5. Create a test application to try your library:

   ```bash
   npm link
   cd ../your-test-app
   npm link your-library-name
   ```

   ## Publishing

   1. Build your library:

   ```bash
   npm run build
   ```

   2. Test your library thoroughly

   3. Update version in `package.json`

   4. Publish to npm:

   ```bash
   npm publish
   ```

   ## Development Tips

   - Use `npm run build` to create production builds
   - Use `npm run types` to generate TypeScript definitions
   - Keep your bundle size small by marking dependencies as `peerDependencies`
   - Test your library in a real project using `npm link`

   ## License

   MIT © Abhirup
