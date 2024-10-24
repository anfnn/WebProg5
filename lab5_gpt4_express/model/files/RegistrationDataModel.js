const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const filePath = join(
  __dirname,
  "..",
  "..",
  "db",
  "files",
  "RegistrationData.json"
);

const getRegistrationDataModel = () => {
  try {
    const file = readFileSync(filePath, "utf-8");
    console.log(file);

    return JSON.parse(file);
  } catch (error) {
    console.log(error);
    throw new Error("Не получилось прочитать данные и файла");
  }
};

const postRegistrationDataModel = (data) => {
  try {
    writeFileSync(filePath, JSON.stringify(data));
  } catch (error) {
    console.log(error);
    throw new Error("Не удалось записать данные в файл");
  }
};

module.exports = { getRegistrationDataModel, postRegistrationDataModel };
