module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-plus',    // 框架名
        styleLibraryName: 'theme-chalk'  // 样式名称
      }
    ]
  ]

}
