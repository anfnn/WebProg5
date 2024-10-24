const isMany_newsDataValid = require("../validators/isMany_newsDataValid");

const {
  getMany_newsDataModel,
  postMany_newsDataModel,
} = require("../model/files/Many_newsDataModel");

const getMany_newsData = (req, res, next) => {
  try {
    const data = getMany_newsDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postMany_newsData = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    // если невалидны, то бросит ошибку
    isMany_newsDataValid(data);

    // если с данными все ок, тогда пишем в файл через модель файлов
    postMany_newsDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getMany_newsData, postMany_newsData };
