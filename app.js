const chalk = require("chalk");
const yargs = require("yargs");
const senators = require("./senators.js");

/**
 *  Customize Yargs
 *
 * Update Version
 * Create add Command
 * Create remove Command
 * Create list Command
 * Create get Command
 * */

yargs.version("1.1.0");

yargs.command({
    command: "add",
    describe: "Add a new Senator",
    builder: {
        name: {
            describe: "Senator Name",
            demandOption: true,
            type: "string"
        },
        state: {
            describe: "State of the Senator",
            demandOption: true,
            type: "string"
        },
        phone: {
            describe: "Senator Phone number",
            demandOption: true,
            type: "string"
        },
        email: {
            describe: "Senator Email",
            demandOption: true,
            type: "string"
        }
    },
    handler: argv => {
        console.log(chalk.blue(`Adding Senator...........`));
        senators.addSenator(argv.name, argv.state, argv.phone, argv.email);
    }
});

yargs.command({
    command: "remove",
    describe: "Remove a new Senator",
    builder: {
        name: {
            describe: "Senator Name",
            demandOption: true,
            type: "string"
        }
    },
    handler: argv => {
        console.log(chalk.blue("Removing Senator....."));
        senators.removeSenator(argv.name);
    }
});

yargs.command({
    command: "list",
    describe: "List all Senators",
    handler: () => {
        console.log(chalk.blue("Your Senators....."));
        senators.getSenators();
    }
});

yargs.command({
    command: "get",
    describe: "Get a Senator",
    builder: {
        name: {
            describe: "Senator Name",
            demandOption: true,
            type: "string"
        }
    },
    handler: argv => {
        senators.getSenator(argv.name);
    }
});

/** end customization */

yargs.parse();