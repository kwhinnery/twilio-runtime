#! /usr/bin/env node
'use strict'

const colors = require('colors')
const argv = require('minimist')(process.argv.slice(2))

// process first command and attempt to execute
try {
  const command = require(`../lib/commands/${argv._[0]}`)
  if (argv.help || argv.h) {
    console.log(command.help)
  } else {
    command.cmd(argv)
  }
} catch(e) {
  const help = require('../lib/commands/help')
  help.cmd(argv)
}
