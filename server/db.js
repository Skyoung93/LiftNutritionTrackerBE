const { Pool } = require ('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

let createTables = async () => {
  await pool.query(
    `CREATE TABLE IF NOT EXISTS foods (
      id SERIAL PRIMARY KEY,
      date DATE,
      name VARCHAR(100),
      mass INT,
      carbs INT,
      fiber INT,
      sugars INT,
      protein INT,
      fats INT,
      trans INT,
      saturated INT
    );`
  );

  await pool.query(
    `CREATE INDEX IF NOT EXISTS foods_dates
    ON foods(date)`
  );

  await pool.query(
    `CREATE INDEX IF NOT EXISTS foods_names
    ON foods(name)`
  );

  await pool.query(
    `CREATE TABLE IF NOT EXISTS lifts (
      id SERIAL PRIMARY KEY,
      date DATE,
      week INT,
      day INT,
      exercise VARCHAR(100),
      weight INT,
      set INT,
      reps INT,
      rating INT,
      notes TEXT
    );`
  );

  await pool.query(
    `CREATE INDEX IF NOT EXISTS lifts_dates
    ON lifts(date)`
  );

  await pool.query(
    `CREATE INDEX IF NOT EXISTS lifts_exercise
    ON lifts(exercise)`
  );

};

try {
  createTables();
  console.log('%cConnection to DB Success', 'color:blue; font-weight:bold')
  console.log("%cDB & Tables Ready", "color:green; font-weight:bold")
} catch (error) {
  console.log(error);
}

module.exports = pool;