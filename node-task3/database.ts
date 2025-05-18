

import { Kysely, MysqlDialect } from 'kysely';
import { createPool } from 'mysql2';
import { DB } from './db';

const _db = new Kysely<DB>({
  dialect: new MysqlDialect({
    pool: createPool({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: '',         // empty string means no password
      database: 'user_db',
    })
  })
});


export function getDB(){
 return _db
}
