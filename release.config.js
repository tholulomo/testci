module.exports = {
  branches: 'main',
  repositoryUrl: 'https://github.com/tholulomo/testci',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/github', {
      assets: [
        { path: './app/build.zip', label: 'AppBuild' },
        { path: './app/coverage.zip', label: 'AppCoverage' }
      ]
    }]
  ]
}
