'use strict'

const shell = require('shelljs')

// Short command description
exports.description = 'Print a list of available commands.'

// User help text
exports.help = `
${'twlo help'.bold}

Print a list of available commands.

`

const helpHeader = `
${'Twilio Runtime CLI'.bold}
${'------------------'.bold}

Use 'twlo <command> --help' for command-specific help and usage.

`

// Execute command with given arguments
exports.cmd = (argv) => {
  // List all command files in this directory and cat descriptions
  let desc = []
  shell.ls(__dirname).forEach(file => {
    try {
      let cmd = require(`./${file}`)
      let cmdName = file.substring(0, file.length - 3).bold
      desc.push(`${cmdName}\t\t${cmd.description}`)
    } catch(e) {
      // no op
    }
  })

  console.log(helpHeader + desc.join('\n') + '\n')
}
