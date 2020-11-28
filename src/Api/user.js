const express = require('express');

const router = express.Router();
const con = require('../Configs/mysql');

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
      data: result,
    });
  });
});

module.exports = router;
