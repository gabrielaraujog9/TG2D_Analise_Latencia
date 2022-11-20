var data = [[]];
var controller = {};

controller.get = (req, res, next) => {
  var datas = {data: data}
  res.status(201).json(datas)
};

controller.post = (req, res, next) => {
  data = req.body.data;
  res.status(201).json(data)
};

module.exports = controller;


//     [[1, 43],[2, 47],[3, 45],[4, 48],[5, 56],[6, 25],[7, 78]]
//npm start

/*
{
	"nome":"Né fácil",
	"idade":12,
	"filho":{
		"nome": "atreus",
		"idade": 12
	}
}

*/


/*{
	"nome":"Né fácil",
	"idade":78,
  "filho":{
    "nome": "atreus",
    "idade": 12
  },
  "filhos":[
    {
      "nome": "bia",
      "idade": 12
    },
    {
      "nome": "thiago",
      "idade": 12
    }
  ]
}*/
