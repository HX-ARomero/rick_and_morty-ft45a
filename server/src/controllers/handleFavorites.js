let myFavorites = [];

const postFav = (req, res) => {
  //* req.body = { id:1, name:"Rick", ... }
  myFavorites.push(req.body);
  return res.json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  //* myFavorites =[ {1}, {2}, {3} ]
  //* id = "2"
  myFavorites = myFavorites.filter(
    char => char.id !== Number(id)
  );
  return res.json(myFavorites);
};

module.exports = { postFav, deleteFav };