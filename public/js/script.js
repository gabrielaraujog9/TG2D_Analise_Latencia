async function gerarDadosMedias() {
  const url = "https://projetotg2d.azurewebsites.net/data/"//"http://localhost:3000/data/"//'https://TG2DAnaliseLatencia.thiagofranca2.repl.co/data/'
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

google.charts.load('upcoming', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawVisualization);
//google.load("visualization", "1", {packages:["corechart"]});
//google.setOnLoadCallback(drawVisualization);

async function drawVisualization() {

  var dadosMedias = await gerarDadosMedias()
  var media =  dadosMedias.media

  for (var i = 0; i < dadosMedias.data.length; i++) {
    
    dadosMedias.data[i].push(media)
  }
  dadosMedias.data.unshift(['Milisegundos', 'Latência', 'Média'])
  var data = google.visualization.arrayToDataTable(dadosMedias.data);

  var options = {
    title: 'Análise de Latência',
    vAxis: { title: 'Latência' },
    hAxis: { title: 'Segundos' },
    curveType: 'function',
    legend: { position: 'bottom' },
    height: 400,
    width: '100%'
    
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(await data, options);

  atualizarMedia(media)


}
function atualizarMedia(media){
  var h1= document.getElementsByClassName("valor")
  h1[0].innerHTML=media.toFixed(1)+" ms"
  var h3= document.getElementsByClassName("texto_resultado")
  if(media>=100){
    h3[0].innerHTML="<strong>Seu tempo de resposta está devagar.</strong>";
    h3[0].classList.add("w3-text-red")
  }
  else if(media>=80){
     h3[0].innerHTML="<strong>Seu tempo de resposta está regular.</strong>";
     h3[0].classList.add("w3-text-amber")
  }
  else{
     h3[0].innerHTML="<strong>Seu tempo de resposta está muito rápido.</strong>";
     h3[0].classList.add("w3-text-green")
  }
} 