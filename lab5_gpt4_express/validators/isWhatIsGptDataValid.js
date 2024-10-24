const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isFutureHereDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, [
    "whatIsGptTopData",
    "whatIsGptMiddleData",
    "whatIsGptBottomData",
  ]);

  const { whatIsGptTopData, whatIsGptMiddleData, whatIsGptBottomData } = data;

  isObjectHasProps(whatIsGptTopData, ["header", "content"]);

  isObjectHasProps(whatIsGptMiddleData, ["header", "button"]);

  const { button } = whatIsGptMiddleData;

  isObjectHasProps(button, ["href", "title"]);

  isArrayHasLength(whatIsGptBottomData);

  whatIsGptBottomData.forEach((item) => {
    isObjectHasProps(item, ["header", "content"]);
  });
};

module.exports = isFutureHereDataValid;
