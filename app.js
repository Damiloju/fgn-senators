const fs = require("fs");
const chalk = require("chalk");

const addSenator = (title, body) => {
    const senators = loadSenators();
    const duplicateSenator = senators.find(senator => senator.title === title);

    if (!duplicateSenator) {
        senators.push({
            title,
            body
        });

        saveSenators(senators);

        console.log(chalk.green("Senator added succesfully"));
    } else {
        console.log(chalk.red("Senator title taken"));
    }
};

const getSenator = title => {
    const senators = loadSenators();
    const senator = senators.find(senator => senator.title === title);

    if (senator) {
        console.log(chalk.green(senator.title));
        console.log(senator.body);
    } else {
        console.log(chalk.red("Senator not found"));
    }
};

const getSenators = () => {
    const allSenators = loadSenators();
    allSenators.forEach(senator => console.log(senator.title));
};

const loadSenators = () => {
    try {
        const senatorsBuffer = fs.readFileSync("senators.json");
        const senators = senatorsBuffer.toString();
        return JSON.parse(senators);
    } catch (error) {
        return [];
    }
};

const removeSenator = title => {
    const senators = loadSenators();
    const newSenators = senators.filter(senator => senator.title !== title);

    if (senators.length === newSenators.length) {
        console.log(chalk.red("No Senator found"));
    } else {
        saveSenators(newSenators);
        console.log(chalk.green("Senator removed succesfully"));
    }
};

const saveSenators = senators => {
    const dataJSON = JSON.stringify(senators);

    fs.writeFileSync("senators.json", dataJSON);
};

module.exports = {
    getSenators,
    addSenator,
    removeSenator,
    getSenator
};