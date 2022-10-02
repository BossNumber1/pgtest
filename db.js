const Pool = require("pg").Pool
const pool = new Pool({
  user: "yqwtzxyavhylzh",
  password: "f86a0b527b908055634c2741ec6bac0047c0379bd4efa5703cf00fdf4b1f566a",
  host: "ec2-34-231-42-166.compute-1.amazonaws.com",
  port: 5432,
  database: "d5tfeqcnli08u4"
})

module.exports = pool