const { Contact } = require("../../../models");

const getContactById = async (contactId) => {
  const contact = await Contact.findById(contactId);
  return contact;
};

module.exports = {
  getContactById,
};
