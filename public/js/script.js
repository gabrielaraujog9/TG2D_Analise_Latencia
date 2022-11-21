async function gerarDadosMedias() {
  const url = 'https://TG2DAnaliseLatencia.thiagofranca2.repl.co/data/'
  var DadosMedias = fetch(url)
    .then(response => response.json())
    .then(teste => teste.data)
    .then(data => {
      var media;
      var soma = 0;

      for (var i = 0; i < data.length; i++) {
        soma += data[i][1]
        data[i][0] = data[i][0] / 10000
      }
      media = soma / data.length
      return { data, media }
    })
  return await DadosMedias;

}

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawVisualization);

async function drawVisualization() {

  var dadosMedias = await gerarDadosMedias()
  var media =  dadosMedias.media

  for (var i = 0; i < dadosMedias.data.length; i++) {
    debugger
    dadosMedias.data[i].push(media)
  }
  dadosMedias.data.unshift(['Milisegundos', 'Latência', 'Média'])
  var data = google.visualization.arrayToDataTable(dadosMedias.data);

  var options = {
    title: 'Análise de Latência',
    vAxis: { title: 'Latência' },
    hAxis: { title: 'Segundos' },
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(await data, options);



}
