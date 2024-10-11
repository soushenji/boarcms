/**
 * 系统配置文件
 */

// 读取 .env 文件
module.exports = {
  // 服务器配置
  service: {
    host: '',
    port: process.env.PORT
  },
  siteUrl: process.env.SITE_URL,
  imagePath: process.env.SITE_URL,
  // 数据库连接配置
  database: {
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    connection_limit: 5,
    logging: false // console.log
  },
  auth: {
    allowLogin: process.env.ALLOW_LOGIN,
    allowRegister: process.env.ALLOW_REGISTER,
    allowSendCode: process.env.ALLOW_SEND_CODE
  },
  siteOption: {
    title: process.env.SITE_TITLE,
    keywords: process.env.SITE_KEYWORDS,
    description: process.env.SITE_DESCRIPTION,
    siteVersion: process.env.VERSION ? process.env.VERSION : '1.0.0' 
  },
  language: process.env.LANGUAGE,
  jwt: { secret: 'shared-secret' },
  code: {
    dev: true, //为真的话不发送验证码，并且在返回数据中给出验证码
    rateLimit: 200, //每个IP，每天验证码限流次数，小于短信服务商的相同设置才有效
    length: 4 //验证码长度
  },
  smtp: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    nickname: process.env.SMTP_NICKNAME,
    username: process.env.SMTP_USERNAME,
    password: process.env.SMTP_PASSWORD
  },
  modules: process.env.MODULES.split(',')
};