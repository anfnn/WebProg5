const { isObjectHasProps } = require("./utils/validators");

const isNewsDataValid = (data) => {
  isObjectHasProps(data, [
    "header",
    "header2"]);

  const { header, header2 } = data;

  isObjectHasProps(header);

  isObjectHasProps(header2);
};

module.exports = isNewsDataValid;
