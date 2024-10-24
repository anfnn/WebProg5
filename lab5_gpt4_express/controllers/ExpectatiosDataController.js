const isExpactationsDataValid = require("../validators/isExpactationsDataValid");

const {
getExpectationsDataModel,
postExpectationsDataModel,
} = require("../model/files/ExpactationsDataModel");

const getExpectationsData = (req, res, next) => {
  try {
    const data = getExpectationsDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postExpectationsData = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    // если невалидны, то бросит ошибку
    isExpactationsDataValid(data);

    // если с данными все ок, тогда пишем в файл через модель файлов
    postExpectationsDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getExpectationsData, postExpectationsData};