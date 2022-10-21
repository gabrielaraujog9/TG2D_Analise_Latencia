var data = ["Nome"];

exports.get = (req, res, next) => {


  
  res.status(201).send(data);
};

exports.post = (req, res, next) => {


  
  res.status(201).send(res.body)
};

exports.put = (req, res, next) => {
  let id = req.params.id;
  res.status(201).send(`Requisição PUT recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
  let id = req.params.id;
  res.status(200).send(`Requisição DELETE recebida com sucesso! ${id}`);
};

