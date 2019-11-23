const fs = require("fs");
const chalk = require("chalk");

const addSenator = (name, state, phone, email) => {
    const senators = loadSenators();
    const duplicateSenator = senators.find(senator => senator.name === name);

    if (!duplicateSenator) {
        senators.push({
            name,
            state,
            phone,
            email
        });

        saveSenators(senators);

        console.log(chalk.green("Senator added succesfully"));
    } else {
        console.log(chalk.red("Senator title taken"));
    }
};

const getSenator = name => {
    const senators = loadSenators();
    const senator = senators.find(senator => senator.name === name);

    if (senator) {
        return senator;
    } else {
        return null;
    }
};

const getSenators = () => {
    const allSenators = loadSenators();
    return allSenators;
};

const getSenatorsByState = (state) => {
    const allSenators = loadSenators();
    const senators = allSenators.filter(senator => senator.state === state.toUpperCase());
    return senators;
}

const loadSenators = () => {
    try {
        const senatorsBuffer = fs.readFileSync("senators.json");
        const senators = senatorsBuffer.toString();
        return JSON.parse(senators);
    } catch (error) {
        return [];
    }
};

const removeSenator = name => {
    const senators = loadSenators();
    const newSenators = senators.filter(senator => senator.name !== name);

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
    getSenator,
    getSenatorsByState
};