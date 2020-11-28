const express = require('express');

const router = express.Router();
const con = require('../Configs/mysql');
const userResource = require('../Resources/userResource');

const table = 'users';

router.get('/', (req, res) => {
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
});

router.get('/:id', (req, res) => {
  const sql = `SELECT * FROM ${table} where id=?`;
  const { id } = req.params;

  con.query(sql, [id], (err, result) => {
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
});

module.exports = router;
