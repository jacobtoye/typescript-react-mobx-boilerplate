module.exports = function () {
  
  return {
    files: [
      'tsconfig.json',
      'src/**/*.ts',
      'src/**/*.tsx',
      'src/**/*.snap',
      '!src/**/__tests__/*.ts',
      '!src/**/__tests__/*.tsx',
      '__mock__/*.js',
      ],

    tests: [
      'src/**/__tests__/*.ts',
      'src/**/__tests__/*.tsx'
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest'
  };
};
