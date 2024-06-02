const chalk = require("chalk");
const Spinnies = require("spinnies");
const util = require("util");

const spinnies = new Spinnies({
  spinner: {
    interval: 85,
    frames: ["∙∙∙", "●∙∙", "∙●∙", "∙∙●", "∙∙∙"],
  },
});

const log = function log(text, color) {
  return !color
    ? chalk.greenBright(util.format(text))
    : color.toLowerCase().includes("bright")
      ? chalk[color](util.format(text))
      : chalk.keyword(color)(util.format(text));
};

const anim = function animate(text, type) {
  if (type) {
    return spinnies[type]("animate", {
      succeedColor: "greenBright",
      text: util.format(text),
    });
  }
  if (!Object.keys(spinnies.spinners).includes("animate")) {
    return spinnies.add("animate", {
      color: "green",
      text: util.format(text),
    });
  } else {
    return spinnies.update("animate", {
      color: "green",
      text: util.format(text),
    });
  }
};

module.exports = anim;
