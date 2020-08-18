# Footer last line
## Introduction
Footer last line is a plugin extension for [commitlint](https://github.com/conventional-changelog/commitlint), which is a tool for linting commit messages.

If you want to learn more about structured and convention-driven commit messages, see [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)


## Sample configuration
```js
module.exports = {
	extends: ['@commitlint/config-conventional'],
	plugins: ['lastline'],
	rules: {
		 'footer-last-line': [2, 'always', '^ticket #[\\d]{6}']
	}
};
```
