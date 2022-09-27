const db = require('./db.js');

/*-----------------------------------------
Common Helper Functions
-----------------------------------------*/
// date is in unix ms
const convertDate = (date) => {
    date = new Date(date);
    let month = date.getMonth();
    let calDay = date.getDate();
    let year = date.getFullYear();
    return `${year}-${month}-${calDay}`
}
/*-----------------------------------------
Nutrition
-----------------------------------------*/

const getFoodsNames = async ( req, res ) => {
  try {
    let results = await db.query(`SELECT DISTINCT name FROM foods`);
    res.send(results);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const getFoodsDate = async ( req, res ) => {
  try {
    let { date } = req.params;
    date = convertDate(parseInt(date));
    let results = await db.query(
      `SELECT
      id, name, mass, carbs, fiber, sugars, protein, fats, trans, saturated,
      EXTRACT(YEAR FROM date) AS year,
      EXTRACT(MONTH FROM date) AS month,
      EXTRACT(DAY FROM date) AS calDay
      FROM foods
      WHERE foods.date  = '${date}'
    `);
    res.send(results);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const putFoods = async ( req, res ) => {
  try {
    const { id, name, mass, carbs, fiber, sugars, protein, fats, trans, saturated } = req.body;
    await db.query(
      `UPDATE foods
      SET name = '${name}',
          mass = ${mass},
          carbs = ${carbs},
          fiber = ${fiber},
          sugars = ${sugars},
          protein = ${protein},
          fats = ${fats},
          trans = ${trans},
          saturated = ${saturated}
      WHERE foods.id = ${id}
    `);
    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const postFoods = async ( req, res ) => {
  try {
    let { date, name, mass, carbs, fiber, sugars, protein, fats, trans, saturated } = req.body;
    date = convertDate(date);
    await db.query(
      `INSERT INTO foods ( date, name, mass, carbs, fiber, sugars, protein, fats, trans, saturated )
      VALUES ( '${date}', '${name}', ${mass}, ${carbs}, ${fiber}, ${sugars}, ${protein}, ${fats}, ${trans}, ${saturated} )
    `);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

/*-----------------------------------------
Lifts
-----------------------------------------*/

const getLiftsNames = async ( req, res ) => {
  try {
    let results = await db.query(`SELECT DISTINCT exercise FROM lifts`);
    res.send(results);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const getLiftsDate = async ( req, res ) => {
  try {
    let { date } = req.params;
    date = convertDate(parseInt(date));
    let results = await db.query(
      `SELECT
      id, week, day, exercise, weight, set, rep, rating, notes,
      EXTRACT(YEAR FROM date) AS year,
      EXTRACT(MONTH FROM date) AS month,
      EXTRACT(DAY FROM date) AS calDay
      FROM lifts
      WHERE lifts.date  = '${date}'
    `);
    res.send(results);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const putLifts = async ( req, res ) => {
  try {
    const { id, week, day, exercise, weight, set, rep, rating, notes } = req.body;
    await db.query(
      `UPDATE lifts
      SET week = ${week},
          day = ${day},
          exercise = '${exercise}',
          weight = ${weight},
          set = ${set},
          rep = ${rep},
          rating = ${rating},
          notes = '${notes}'
      WHERE lifts.id = ${id}
    `);
    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const postLifts = async ( req, res ) => {
  try {
    let { date, week, day, exercise, weight, set, rep, rating, notes } = req.body;
    date = convertDate(date);
    await db.query(
      `INSERT INTO lifts ( date, week, day, exercise, weight, set, rep, rating, notes )
      VALUES ( '${date}', ${week}, ${day}, '${exercise}', ${weight}, ${set}, ${rep}, ${rating}, '${notes}' )
    `);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};



module.exports.getFoodsNames = getFoodsNames;
module.exports.getFoodsDate = getFoodsDate;
module.exports.putFoods = putFoods;
module.exports.postFoods = postFoods;

module.exports.getLiftsNames = getLiftsNames;
module.exports.getLiftsDate = getLiftsDate;
module.exports.putLifts = putLifts;
module.exports.postLifts = postLifts;