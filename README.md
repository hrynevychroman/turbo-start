# Turbo Template

## Description 📖

Turbo Template is a monorepo project structured using Turborepo and pnpm workspaces. It provides a scalable and modular architecture for building applications with Vue 3 and Nuxt 3, leveraging various libraries and utilities to enhance development efficiency and maintainability.

## Global Settings 🌐

You can globally replace `@gwlab/` with your own package name, for example `@my-company/`. So all packages naming will start with `@my-company/`.

## Features 🚀

- **Monorepo Structure**: Uses Turborepo and pnpm workspaces to manage multiple packages and applications.
- **Vue 3**: The main framework used for building applications.
- **Nuxt 3**: For applications that require server-side rendering (SSR) and other advanced features.
- **Shared Utilities**: Common utilities, components, and functions are stored in the `core` package for reuse across different apps.
- **Custom ESLint Config**: Shared ESLint configuration based on antfu's config.
- **Custom Icons**: Defined custom icons based on the `@iconify/vue` library.
- **PostCSS and TailwindCSS**: Global styles and configurations using PostCSS and TailwindCSS.
- **TypeScript**: Ensures type safety across the project.
- **Commitlint and Git Hooks**: Enforces commit message standards and runs type-check and lint scripts before every commit.

## Recommended Setup 💻

- [ni](https://github.com/antfu/ni) - Use the right package manager 

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
```bash
git clone <repository_url> turbo-company-name
cd turbo-company-name
```
 
2. **Install dependencies** :

```bash
ni
```
 
3. **Set up Git hooks** :

```bash
nr prepare
```

## Usage 📚

### Development 👷

To start the development server:


```bash
nr dev
```

### Building 🏗️

To build the project:


```bash
nr build
```

### Linting 🔎

To lint the project:


```bash
nr lint
```

To fix linting issues:


```bash
nr lint:fix
```

To check types:


```bash
nr check-types
```

### Cleaning 🧹

To delete recursively all the node_modules:


```bash
nr clean
```

### Based on turborepo we can chain commands for lint and check-types

```bash
nr lint check-types
```

All this commands will run in parallel, so it will be faster. You can find configuration in `turbo.json` file.
 
## Directory Structure 📁


```plaintext
turbo-template/
├── apps/              # Applications
│   ├── vue-start/     # Vue 3 startup project with enhanced DX
│   └── nuxt-start/    # Nuxt 3 startup project for SSR and advanced features
├── packages/          # Shared packages
│   ├── core/          # Common utilities, components, and functions
│   ├── eslint-config/ # Shared ESLint configuration
│   ├── icons/         # Custom icons
│   ├── postcss-config # PostCSS configuration
│   ├── tailwind/      # TailwindCSS configuration
│   ├── types/         # TypeScript interfaces
│   └── ui/            # shadcn-vue library based on radix-vue
├── package.json       # Root package.json with project scripts and dependencies
└── turbo.json         # Turborepo configuration
```

## Applications 📱

### Vue Start 

Added vue-start template, maybe in future we will need some Vue application. This project includes:
 
- **Vue Router** : Automatically imports Vue Router and converts route names to kebab-case.
 
- **Vue** : Integrates the Vue 3 framework.
 
- **Vue DevTools** : Enables Vue DevTools for better debugging.
 
- **Auto Imports** : Automatically imports commonly used modules like Vue Router, VueUse, Vue I18n, and Pinia.
 
- **Components Auto Import** : Automatically imports components from specified directories, including custom components from `@gwlab/ui` and `radix-vue`.
 
- **Vue I18n Plugin** : Integrates Vue I18n for internationalization support.
 
- **Layouts** : Supports layouts with `vite-plugin-vue-layouts`.
 
- **TypeScript Checker** : Integrates TypeScript checker to ensure type safety.
 
- **Alias Configuration** : Sets up path aliases for cleaner imports.
 
- **Server Configuration** : Sets the development server port to `5177`.

### Nuxt Start 

nuxt-start is a Nuxt based application. This project includes:
 
- **Compatibility Date** : Set for 2024-04-03.
 
- **DevTools** : Enabled for development.
 
- **Modules** : Includes `@nuxt/eslint` and `@nuxtjs/tailwindcss`.
 
- **ESLint Configuration** : Shared ESLint configuration for all applications.
 
- **Tailwind CSS** : Global styles and configurations using PostCSS and TailwindCSS.
 
- **UI Components Auto Import** : Automatically imports components from specified directories, including custom components from `@gwlab/ui`.

## Shared Packages 📦
All these applications infer packages from `packages/**` where the following are defined: 
- **Core** : Here we will have some shared functions, utils, composables, and components that are used inside different applications. 🔧
 
- **ESLint config** : As I mentioned previously, we will use only ESLint with stylistic rules, so these rules are used inside all applications too. ✅
 
- **Icons** : Based on `@iconify/vue` library, we also have the ability to define custom components. 🎨
 
- **PostCSS config** : Used for TailwindCSS and also has some predefined adaptive-calc functions for better responsive design. 🎩
 
- **Tailwind** : Here we define the TailwindCSS config that will be used inside all applications. :raised_hands:
 
- **Types** : Here we define TypeScript interfaces for all API schemas and use them inside every application.
 
- **UI** : Here we create and assemble all UI components, custom ones based on `radix-vue` library.

## Chore :deciduous_tree: 
 
- **Commitlint** : Added commitlint, so all developers need to write all commits based on standard conventional commits.
 
- **Simple Git Hooks** : Added simple-git-hooks, before every commit it will run type-check and lint scripts inside every package and application, ensuring our codebase is consistent and error-free. :relaxed:

## License 📄
This project is licensed under the MIT License.
