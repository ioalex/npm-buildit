# npm Build It! 🧱

## Table of Contents

- [npm Build It! 🧱](#npm-build-it-)
  - [Table of Contents](#table-of-contents)
  - [About The Project](#about-the-project)
  - [Features](#features)
  - [Uses](#uses)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Quick Start](#quick-start)
  - [Usage](#usage)
  - [Roadmap](#roadmap)
  - [License](#license)
  - [Contact](#contact)
  - [Acknowledgements](#acknowledgements)

## About The Project

A static website boilerplate that builds via npm scripts!

## Features

- Renders [Nunjucks](https://mozilla.github.io/nunjucks/) template files to HTML and plug data supplied from YAML front matter or JSON.
- Minifies HTML.
- Generates sourcemaps for [SASS](https://sass-lang.com/) and compiles it to CSS.
- Minifies and autoprefixes CSS.
- Bundles JavaScript modules
- Optimises images, SVGs and fonts.
- Watches for file changes, and automatically recompile build and reload webpages using BrowserSync.
- Lints and fixes your HTML, CSS, SASS, JavaScript, Markdown and Git commits.

## Uses

- Nunjucks - to modularise HTML allowing for reusability.
- Eleventy - to render Nunjucks files and templates to HTML
- SASS - to write clean, easy and less CSS.
- PostCSS - to optimise CSS code
- Webpack - to bundle JavaScript modules
- Babel - to use next generation JavaScript, today
- Dotenv - to hide any secrets such as API keys
- Imagemin - to compress image files
- Prettier - to quickly format files.
- ESLint - to find and fix JavaScript errors.
- Stylelint - to find and fix CSS & SASS errors.
- Markdownlint - find and fix errors in your Markdown files.
- HTMLHint - to find and fix HTML errors.
- Commitlint - to lint your Git commit messages.
- Husky - for an easy way to add Git hooks.
- Lint-staged - to run tasks on files that are staged in Git.
- EditorConfig - to define coding styles for editors.

## Getting Started

A guide to get up and running... 🏃‍♂️

### Prerequisites

Please ensure that you have the following dependencies installed:

- [Node.js](https://nodejs.org/en/) for packages and scripts
- [Git](https://git-scm.com/) for cloning this repository

### Installation

Clone the repository in your project folder:

```sh
git clone https://github.com/ioalex/npm-buildit.git
```

### Quick Start

```sh
git clone https://github.com/ioalex/npm-buildit.git your-project-name
```

1. Run npm install to install required files and dependencies - for a list see [package.json](https://github.com/ioalex/npm-buildit/blob/master/package.json) & [package-lock.json](https://github.com/ioalex/npm-buildit/blob/master/package-lock.json).
2. That's it, happy coding!

## Usage

See [package.json](https://github.com/ioalex/npm-buildit/blob/master/package.json) for scripts.

## Roadmap

See the [open issues](https://github.com/ioalex/npm-buildit/issues) for a list of proposed features (and known issues).

## License

Distributed under the MIT License. See LICENSE for more information.

## Contact

Alex He - @alexheio - alex@alexhe.io

Project Link: [Link](https://github.com/ioalex/npm-buildit)

## Acknowledgements

- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [Eleventy](https://www.11ty.dev/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [SASS](https://sass-lang.com/)
- [Gulp](https://gulpjs.com/)
- [HTMLHint](https://htmlhint.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [PostCSS/Autoprefixer](https://github.com/postcss/autoprefixer)
