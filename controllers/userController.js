const pool = require("../db/db");

exports.createUser = async (req, res) => {

  try {

    const { name, age, height, weight, goal, workout_frequency } = req.body;

    const newUser = await pool.query(
      `INSERT INTO users (name, age, height, weight, goal, workout_frequency)
       VALUES ($1,$2,$3,$4,$5,$6)
       RETURNING *`,
      [name, age, height, weight, goal, workout_frequency]
    );

    res.json(newUser.rows[0]);

  } catch (error) {

    console.error(error.message);
    res.status(500).send("Server error");

  }

};
