const { isObjectHasProps } = require("./utils/validators");

const isExpactationsDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, [
    "img",
    "cta",
    "header",
    "text",
    "button",
    
  ]);

  const { img,cta,header,text,button } = data;

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(img, ["src", "alt"]);

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(cta);

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(header);

   // проверяем внутренний объект на наличие полей и соответствие типу "объект"
   isObjectHasProps(text);

   // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(button, ["href", "text"]);
};

module.exports = isExpactationsDataValid;
