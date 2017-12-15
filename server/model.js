const mongoose = require('./db');

const restSchema = mongoose.Schema({
  name: String,
  rating: Number,
  imgUrl: String,
  createDate: Date,
})

const Restaurants = mongoose.model('restaurants', restSchema);

exports.getRestaurant = async (req, res) => {
  let order = req.param('order_by');
  const list = await Restaurants.find();
  const sortedList = list.sort((a, b) => {
    if (order === 'name') {
      if ( a.name.toUpperCase() < b.name.toUpperCase()) return -1;
      else return 1;
    }
    else return b[order] - a[order]
  })
  res.send(sortedList);
}

exports.postRestaurant = (rest, res) => {
  console.log(rest);
  Restaurants({
    name: rest.name,
    rating: rest.rating,
    imgUrl: rest.imgUrl,
    createDate: Date.now(),
  }).save();
  res.send(res.status = 200);
}

// Restaurants.find({name:'Fancy'}).remove((err, data) => console.log(err, data));
