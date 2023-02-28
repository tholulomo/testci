/* eslint-disable no-template-curly-in-string */
module.exports = {
  branches: 'main',
  repositoryUrl: 'https://github.com/tholulomo/testci',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/github', {
      assets: [
        { path: './build.zip', label: 'AppBuild' },
        { path: './coverage.zip', label: 'AppCoverage' }
      ]
    }],
    '@semantic-release/exec',
    {
      publishCmd: 'echo ::set-output name=nextVer::${nextRelease.version}'
    }
  ]
}
