module.exports = {
  branches: 'main',
  repositoryUrl: 'https://github.com/tholulomo/testci',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/github', {
      assets: [
        { path: './asset_artifacts/build.zip', label: 'AppBuild' },
        { path: './asset_artifacts/coverage.zip', label: 'AppCoverage' }
      ]
    }]
  ]
}
