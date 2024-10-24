const { isObjectHasProps } = require("./utils/validators");

const isRegistrationDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, [
    "text1",
    "text2",
    "text3",
    "button",
    
  ]);

  const {  text1, text2, text3, button,} = data;

  isObjectHasProps(text1);

  isObjectHasProps(text2);

  isObjectHasProps(text3);

  isObjectHasProps(button);
};

module.exports = isRegistrationDataValid;
