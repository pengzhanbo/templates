# Templates

整理了一些项目模板，可使用 `degit` 工具在创建项目时通过模板进行初始化。

根据需求，不同的模板支持不同的项目：

- Build Tools
  - [x] vite `default`
  - [ ] webpack
- Framework
  - [x] Vue
  - [ ] React
  - [ ] Lit
  - [ ] Solid
  - [ ] Svelte
- CSS Framework
  - [x] sass / postcss
  - [x] WindiCSS
  - [x] UnoCSS
- Lint `default`
  - [x] eslint
  - [x] prettier
- [x] Typescript
- Test
  - [ ] jest
  - [x] vitest
  - [x] cypress
- Desktop
  - [ ] Electron
  - [ ] Tauri

1. 默认支持 **ESLint/Prettier**
2. 默认使用 **vite** 作为构建工具
3. 建议选择 支持 typescript 的模板

## Install

使用 `degit` 进行项目初始化

**degit**

```sh
# npm
npm install -g degit
#pnpm
pnpm add -g degit
#yarn
yarn add -g degit
```

**template**

选择 适合的模板进行初始化

```sh
degit pengzhanbo/templates/<template-name> my-project
cd my-project
npm install # pnpm install / yarn
```

## Vue

### `js-vue`

```sh
degit pengzhanbo/templates/js-vue my-project
cd my-project
pnpm install
pnpm dev
```

- [x] vite
- [x] vue
- [x] sass / postcss
- [x] eslint / prettier
- [x] auto-import
- [x] vue-router / pinia
- [x] vitest / cypress

### `js-vue-unocss`

```sh
degit pengzhanbo/templates/js-vue-unocss my-project
cd my-project
pnpm install
pnpm dev
```

- [x] vite
- [x] vue
- [x] unocss
- [x] eslint / prettier
- [x] auto-import
- [x] vue-router / pinia
- [x] vitest / cypress

### `js-vue-windicss`

```sh
degit pengzhanbo/templates/js-vue-windicss my-project
cd my-project
pnpm install
pnpm dev
```

- [x] vite
- [x] vue
- [x] windicss
- [x] eslint / prettier
- [x] auto-import
- [x] vue-router / pinia
- [x] vitest / cypress

### `ts-vue`

```sh
degit pengzhanbo/templates/ts-vue my-project
cd my-project
pnpm install
pnpm dev
```

- [x] vite
- [x] vue
- [x] typescript
- [x] sass / postcss
- [x] eslint / prettier
- [x] auto-import
- [x] vue-router / pinia
- [x] vitest / cypress
