"use strict";

Promise.all([import("chalk"), import("boxen")])
  .then(([chalk, boxen]) => {
    const data = {
      name: chalk.default.white("           Sharath Chandra Chinnarigari"),
      handle: chalk.default.white("Sharathchandra345"),
      shorthandle: chalk.default.white("sharath.345"),
      work: chalk.default.white("Web Developer"),
      web: chalk.default.cyan("https://sharath.wiki"),
      github:
        chalk.default.gray("https://github.com/") +
        chalk.default.green("Sharathchandra345"),
      linkedin:
        chalk.default.gray("https://linkedin.com/in/") +
        chalk.default.blue("csharath-chandra"),
      npm:
        chalk.default.gray("https://npmjs.com/") +
        chalk.default.red("~sharath3"),
      npx: chalk.default.red("npx") + " " + chalk.default.white("sharath"),
      twitter:
        chalk.default.gray("https://twitter.com/") +
        chalk.default.cyan("csharath3"),
      labelWork: chalk.default.white.bold("    Work:"),
      labelnpm: chalk.default.white.bold("     npm:"),
      labelTwitter: chalk.default.white.bold(" Twitter:"),
      labelGitHub: chalk.default.white.bold("  GitHub:"),
      labelLinkedIn: chalk.default.white.bold("LinkedIn:"),
      labelWeb: chalk.default.white.bold("     Web:"),
      labelCard: chalk.default.white.bold("    Card:"),
    };

    const options = {
      padding: 1,
      margin: 1,
      borderStyle: "round",
    };

    const newline = "\n";
    const heading = `${data.name} / ${data.handle} / ${data.shorthandle}`;
    const working = `${data.labelWork}  ${data.work}`;
    const twittering = `${data.labelTwitter}  ${data.twitter}`;
    const npming = `${data.labelnpm}  ${data.npm}`;
    const githubing = `${data.labelGitHub}  ${data.github}`;
    const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
    const webing = `${data.labelWeb}  ${data.web}`;
    const carding = `${data.labelCard}  ${data.npx}`;

    const output =
      heading +
      newline +
      newline +
      working +
      newline +
      twittering +
      newline +
      npming +
      newline +
      githubing +
      newline +
      linkedining +
      newline +
      webing +
      newline +
      newline +
      carding;

    const fs = require("fs");
    const path = require("path");
    fs.writeFileSync(
      path.join(__dirname, "bin/output"),
      chalk.default.green(boxen.default(output, options))
    );
  })
  .catch((err) => {
    console.error("Error occurred while importing dependencies:", err);
  });
