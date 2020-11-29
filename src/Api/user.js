const express = require('express');

const router = express.Router();
const con = require('../Configs/mysql');
const userResource = require('../Resources/userResource');

const table = 'users';

router.get('/', (req, res, next) => {
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
});

router.get('/:id', (req, res, next) => {
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
});

module.exports = router;
