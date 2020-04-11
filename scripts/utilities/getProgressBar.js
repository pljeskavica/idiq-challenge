const cliProgress = require('cli-progress')
const _colors = require('colors')

const getProgressBar = name =>
  new cliProgress.SingleBar({
    format:
      `${name} |` +
      _colors.cyan('{bar}') +
      '| {percentage}% || {value}/{total} Chunks',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true,
  })

module.exports = getProgressBar
