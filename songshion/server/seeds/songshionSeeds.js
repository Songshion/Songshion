const db = require('../config/connection');
const { Concert } = require('../models');

const songshionData = require('./songshionData.json');

db.once('open', async () => {
  await Concert.deleteMany({});

  const concerts = await Concert.insertMany(songshionData);
  console.log('concerts', concerts)
  console.log('count', concerts.length)
  console.log('Concerts seeded');
  process.exit(0);
});