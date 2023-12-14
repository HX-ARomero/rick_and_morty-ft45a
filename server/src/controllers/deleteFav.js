const { Favorite } = require("../DB_connection");

//* /rickandmorty/fav/:id
//* /rickandmorty/fav/2
const deleteFav = async (req, res) => {
  try {
    const { id } = req.params;
    await Favorite.destroy({ where: { id: id } });
    const allFavorites = await Favorite.findAll();
    return res.status(200).json(allFavorites);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = deleteFav;