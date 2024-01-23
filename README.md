# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

npx vs npm 區別:

`npm create vite` 时选择 `react-ts` 模板，会自动安装 `@vitejs/plugin-react` 插件。

`npm install @dnd-kit/core @dnd-kit/sortable @dnd-kit/modifiers` 安装拖拽库。

`@dnd-kit` 是一個 React 拖拽庫，它提供了一個可擴展的、可組合的、可設置的和可訂製的 API，用於構建拖拽功能。

## Install TailwindCSS

在命令 `npx tailwindcss init -p` 中，`-p` 参数是用来同时生成 Tailwind CSS 配置文件 (`tailwind.config.js`) 和 PostCSS 配置文件 (`postcss.config.js`)。

简而言之：

- `npx tailwindcss init`：这个命令会创建一个基本的 `tailwind.config.js` 文件。这是一个配置文件，你可以在其中自定义 Tailwind 的许多方面，例如主题、变体等。

- `npx tailwindcss init -p`：加上 `-p` 参数后，除了 `tailwind.config.js` 文件，还会创建 `postcss.config.js` 文件。PostCSS 是一个用于转换 CSS 的工具，而 Tailwind CSS 通常作为 PostCSS 的一个插件来使用。`postcss.config.js` 文件允许你配置 PostCSS 相关的选项，包括使用 Tailwind CSS 插件。

因此，如果你打算在项目中使用 Tailwind CSS 并结合 PostCSS 工具链，使用 `-p` 参数是一个方便的方式来一次性生成这两个配置文件。在命令 `npx tailwindcss init -p` 中，`-p` 参数是用来同时生成 Tailwind CSS 配置文件 (`tailwind.config.js`) 和 PostCSS 配置文件 (`postcss.config.js`)。

简而言之：

- `npx tailwindcss init`：这个命令会创建一个基本的 `tailwind.config.js` 文件。这是一个配置文件，你可以在其中自定义 Tailwind 的许多方面，例如主题、变体等。

- `npx tailwindcss init -p`：加上 `-p` 参数后，除了 `tailwind.config.js` 文件，还会创建 `postcss.config.js` 文件。PostCSS 是一个用于转换 CSS 的工具，而 Tailwind CSS 通常作为 PostCSS 的一个插件来使用。`postcss.config.js` 文件允许你配置 PostCSS 相关的选项，包括使用 Tailwind CSS 插件。

因此，如果你打算在项目中使用 Tailwind CSS 并结合 PostCSS 工具链，使用 `-p` 参数是一个方便的方式来一次性生成这两个配置文件。
