const { roleDb } = require("../models/role.model");

exports.getRole = async (req) => {
  try {
    const { role, service, access } = req.body;
    console.log(role, service, access);

    if (roledb.hasOwnProperty(role)) {
      const roleData = roleDb[role];
      console.log(roleData);
      if (roleData.hasOwnProperty(service)) {
        const ans = roleData[service].includes(access);
        return ans;
      } else {
        return 400;
      }
    } else {
      return 404;
    }
  } catch (err) {
    console.log(err);
    return new Error(err);
  }
};
