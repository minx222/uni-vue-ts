/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  env: {
    es6: true,
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    project: ['tsconfig.json'], // 新增
    extraFileExtensions: ['.vue'] // 新增
  },
  rules: {
    'vue/script-setup-uses-vars': 'error',
    // switch语句强制default分支，也可添加 // no default 注释取消此次警告
    'default-case': 2,
    'no-console': 1, //禁止使用console
    'no-const-assign': 2, //禁止修改const声明的变量
    'no-constant-condition': 2, //禁止在条件中使用常量表达式 if(true) if(1)
    'no-sparse-arrays': 2, //禁止稀疏数组， [1,,2]
    'no-var': 0, //禁用var，用let和const代替
    semi: 0, //语句强制分号结尾
    strict: 2, //使用严格模式
    // 关闭名称校验
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-explicit-any': ['off'], //允许使用any类型
    'no-unused-vars': 'off',
    // 枚举报错
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'vue/valid-template-root': 'off' //关闭app.vue无html检查
  }
}
