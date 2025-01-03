const dbUtil = require('../../utils/db.js');


async function index(req, res)  {
  let sql, rows, replacements, data;
  sql = `SELECT * FROM tb_option WHERE option_name=:option_name`;
  replacements = {option_name:'site_option'};
  [rows] = await dbUtil.execute(sql, replacements);
  if(rows.length == 0){
    res.status(404);
    res.json({error:'没有找到记录'});
    return;
  }

  try {
    var site = JSON.parse(rows[0].option_value);
  } catch(e) {
    var site = {};
  }

  data = {site};

  res.render('admin/site/index.html', data);
}

module.exports = { index };