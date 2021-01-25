const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


console.log(process.argv);  /// process is inbuild module in node for interacting with command line arguments
//Here argv is argument vector
/*
Output: [
  '/usr/local/bin/node',
  '/Users/apple/dev/node-basics-udemy-course/Notes APP (File System, Command Line Tool, json parsing and Arrow function basics)/notes-app/app.js',
  'add'
]
*/


// Customize yargs version
// yargs provide add on functionality with command line argument interaction
// you can pass title and body by following command (node app.js add --title="hello" --body="world"
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()