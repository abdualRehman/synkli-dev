module.exports = {
  tabWidth:4,
  singleQuote: true,
  semi: true,
  trailingComma:"none",
  printWidth: 120,
  endOfLine: "lf",
  useTabs: false,
  newlineBeforeReturn: true,
  paddingLineBetweenStatements: true,
  plugins: [require('prettier-plugin-tailwindcss')],
}
