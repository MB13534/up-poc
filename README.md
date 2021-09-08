<div align="center">

  ![LRE Water](https://user-images.githubusercontent.com/366737/131208262-d428e49f-3757-474f-ba3c-a12ca98b3215.png)

  <h1 align="center">Unified Platform Dashboard Template</h1>
  <h3 align="center">Proof of Concept</h3>
  <p align="center">

  [![Build Status](https://travis-ci.com/lrewater/up-poc.svg?branch=master)](https://travis-ci.com/lrewater/up-poc)
  [![Dependency Status](https://img.shields.io/david/dev/lrewater/up-poc?label=deps)](https://david-dm.org/lrewater/up-poc)
  [![Dependency Status](https://img.shields.io/david/dev/lrewater/up-poc?label=devDeps)](https://david-dm.org/lrewater/up-poc?type=dev)

  </p>
</div>

## Introduction

This project is a "starter kit" intended for new LRE dashboard projects that need to commence prior to the release of the upcoming Unified Platform. Using this starter kit will establish a foundation that facilitates easier migration into the unified ecosystem. Here are some of the highlights:

- Mobile First UI
- Auth0 Integration
- Public, Private, and Role/Permission-based Routing
- Theming
- "Dashboard" Layout
- CRUD Example(s)
- Chart Example(s)
- Common UI Component Example(s)

## Installation

It is recommended that you fork the project on GitHub so that you can have a repository to commit your project-specific changes while still being able to pull in any future unified platform updates or push any code from your project that would also be a good contribution to the platform.

Before forking, ensure you are logged into GitHub with the LRE Water GitHub account and not your personal account.

To fork, visit https://github.com/lrewater/up-poc and click the **Fork** button in the upper-right corner.

After forking, use the following commands to clone your fork and install the starter kit.

```sh
git clone https://github.com/lrewater/your-up-poc-fork <app-name> && cd app-name
```

```sh
yarn install
```

At this point, you should be able to start the development server and begin work on your project.

To start the development server:

```shell
yarn start
```

## Usage

```sh
$ yarn start    > Starts the development server

$ yarn lint     > Lints the code

$ yarn format   > Formats the code

$ yarn build    > Builds and bundles the project

$ yarn commit   > Commits the code using a wizard
```

## Links

- [Slack](https://lrewits.slack.com/archives/C02C386BBAT)
- [Documentation](https://lrewater.github.io/up-poc)
- [Private Issue Tracker](https://dougkulak.atlassian.net/browse/LRE)
- [Public Issue Tracker](https://github.com/lrewater/up-poc/issues)

## License
Distributed under the [MIT](./LICENSE) license.
