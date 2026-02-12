module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  'package.json': ['prettier --write'],
  '*.vue': ['eslint --fix', 'stylelint --fix --allow-empty-input', 'prettier --write'],
  '*.{css,scss,less}': ['stylelint --fix --allow-empty-input', 'prettier --write'],
  '*.md': ['prettier --write']
};
