const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isMany_newsDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, [
    "OneNews", "Many_news",
  ]);

  const { OneNews, Many_news  } = data;

  isObjectHasProps(OneNews, ["data1", "read1","text21","text22","text23", "img1"]);

  // проверяем внутренний массив на наличие полей и соответствие типу "массив"
  isArrayHasLength(Many_news);

  // проверяем внутренние объекты на наличие полей и соответствие типу "объект"
  Many_news.forEach((item) => isObjectHasProps(item, ["data","text","read","img"]));
};

module.exports = isMany_newsDataValid;
