const connection = require("../config/database");

const getAllUsers = async () => {
  const [results, fields] = await connection.query(`SELECT * FROM Users`);
  return results;
};

const getUserById = async (id) => {
  const [result, fields] = await connection.query(
    `SELECT * FROM Users WHERE id = ${id}`
  );
  return result;
};

const createUser = async (email, name, city) => {
  const [result, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?,?,?)`,
    [email, name, city]
  );
  return result;
};

const updateUser = async (id, email, name, city) => {
  const [result, fields] = await connection.query(
    `UPDATE Users SET email =?, name =?, city =? WHERE id = ${id}`,
    [email, name, city]
  );
  return result;
};

const deleteUser = async (id) => {
  const [result, fields] = await connection.query(
    `DELETE FROM Users WHERE id = ?`,
    [id]
  );
  return result;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
