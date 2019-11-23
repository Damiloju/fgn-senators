const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./senators.js");

/**
 *  Customize Yargs
 *
 * Update Version
 * Create add Command
 * Create remove Command
 * Create list Command
 * Create read Command
 * */

yargs.version("1.1.0");

yargs.command({
    command: "add",
    describe: "Add a new Senator",
    builder: {
        title: {
            describe: "Senator title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Body of the Senator",
            demandOption: true,
            type: "string"
        }
    },
    handler: argv => {
        console.log(chalk.blue(`Adding Senator...........`));
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: "remove",
    describe: "Remove a new Senator",
    builder: {
        title: {
            describe: "Title of the Senator",
            demandOption: true,
            type: "string"
        }
    },
    handler: argv => {
        console.log(chalk.blue("Removing Senator....."));
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: "list",
    describe: "List all Senators",
    handler: () => {
        console.log(chalk.blue("Your Senators....."));
        notes.getNotes();
    }
});

yargs.command({
    command: "get",
    describe: "Get a Senator",
    builder: {
        title: {
            describe: "Title of the Senator",
            demandOption: true,
            type: "string"
        }
    },
    handler: argv => {
        notes.getNote(argv.title);
    }
});

/** end customization */

yargs.parse();