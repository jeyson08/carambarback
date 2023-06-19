const blague = require("../../data");

const dialogController = {
  home: (req, res) => {
    res.send('Hello World!')
  },
  test: (req, res) => {
    res.send('Hello Test!')
  },
  allBlagues: (req, res) => {
    res.status(200).json(blague);
  },
  getBlagueById: (req, res) => {
    const blagueId = req.params.id;
    const blagueById = blague.find((blague) => blague.id === parseInt(blagueId));

    if (blagueById) {
      res.status(200).json(blagueById);
    } else {
      res.status(404).json({ message: "Blague non trouvée" });
    }
  }
}

module.exports = dialogController