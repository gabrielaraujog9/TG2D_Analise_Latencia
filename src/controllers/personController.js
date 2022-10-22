var data = ["Nome"];
var controller = {};
controller.get = (req, res, next) => {
  res.status(201).send(data);
};
controller.post = (req, res, next) => {
  res.status(201).send(res.body)
};

controller.put = (req, res, next) => {
  let id = req.params.id;
  res.status(201).send(`Requisição PUT recebida com sucesso! ${id}`);
};

controller.delete = (req, res, next) => {
  let id = req.params.id;
  res.status(200).send(`Requisição DELETE recebida com sucesso! ${id}`);
};

module.exports = controller;

