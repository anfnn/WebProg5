const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isFooterDataValid = (data) => {
  // Проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, [
    "headerData",
    "buttonText",
    "imgSrc",
    "addressData",
    "titles",
    "linksData",
    "companyData",
    "contactsData",
    "footerText"
  ]);

  const { headerData, addressData, titles, linksData, companyData, contactsData, footerText } = data;

  isObjectHasProps(headerData, ["title", "subtitle"]);

  isObjectHasProps(addressData, ["street", "city", "rights"]);

  isObjectHasProps(titles, ["links", "company", "contacts"]);

  isArrayHasLength(linksData);
  linksData.forEach((item) => {
    isObjectHasProps(item, ["name"]);
  });

  isArrayHasLength(companyData);
  companyData.forEach((item) => {
    isObjectHasProps(item, ["name"]);
  });

  isArrayHasLength(contactsData);
  contactsData.forEach((item) => {
    isObjectHasProps(item, ["address", "phone", "email"]);
  });

  isObjectHasProps(footerText);
};

module.exports = isFooterDataValid;
