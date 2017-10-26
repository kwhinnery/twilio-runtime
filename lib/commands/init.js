'use strict'

// Short command description
exports.description = 'Initialize a directory for Twilio Runtime development.'

// User help text
exports.help = `
${'twlo init <args>'.bold}

Initialize a directory to use for Twilio Runtime development.

Arguments:
-d --directory\t\tDirectory to initialize (default current directory)
-h --help\t\tDisplay command help

`

// Execute command with given arguments
exports.cmd = (argv) => {
  console.log('init command under construction')
}
