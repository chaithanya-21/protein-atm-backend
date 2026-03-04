exports.calculateShake = (req, res) => {

  const { weight, goal, duration, intensity } = req.body;

  let multiplier;

  if (goal === "muscle_gain") multiplier = 1.8;
  else if (goal === "fat_loss") multiplier = 1.6;
  else multiplier = 1.4;

  const dailyProtein = weight * multiplier;
  const postWorkoutProtein = dailyProtein * 0.3;

  let electrolytes;

  if (duration < 45) electrolytes = 200;
  else if (duration <= 75) electrolytes = 400;
  else electrolytes = 600;

  if (intensity === "high") electrolytes += 200;

  res.json({
    protein: Math.round(postWorkoutProtein / 5) * 5,
    creatine: 5,
    electrolytes
  });

};
