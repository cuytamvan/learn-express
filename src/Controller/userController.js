const Joi = require('joi');

const con = require('../Configs/mysql');
const userResource = require('../Resources/userResource');

const schema = Joi.object({
  name: Joi.string()
    .trim()
    .required()
    .max(50),

  email: Joi.string()
    .email()
    .required()
    .trim()
    .max(50),

  password: Joi.string()
    .required()
    .trim()
    .max(50),
});

const table = 'users';
exports.index = (req, res, next) => {
  try {
    const sql = `SELECT * from ${table}`;
    con.query(sql, (err, result) => {
      if (err) {
        res.json({
          code: 500,
          message: err,
        });
      }
      res.json({
        code: 200,
        message: 'success',
        data: userResource(result),
      });
    });
  } catch (error) {
    next(error);
  }
};

exports.show = (req, res, next) => {
  try {
    const sql = `SELECT * FROM ${table} where id = ?`;
    const { id } = req.params;

    con.query(sql, [id], (err, result) => {
      if (err) {
        return res.json({
          code: 500,
          message: err.message,
        });
      }
      if (result.length === 0) return next();
      return res.json({
        code: 200,
        message: 'success',
        data: userResource(result[0]),
      });
    });
  } catch (error) {
    next(error);
  }
};

exports.store = async (req, res, next) => {
  try {
    const sql = `INSERT INTO ${table} set ? `;
    const data = req.body;

    await schema.validateAsync(data);
    con.query(sql, data, (err) => {
      if (err) {
        return res.json({
          code: 500,
          message: err.message,
        });
      }

      return res.json({
        code: 200,
        message: 'success',
      });
    });
  } catch (error) {
    next(error);
  }
};
