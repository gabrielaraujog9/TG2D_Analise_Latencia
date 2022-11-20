async function teste(){
      var result = await fetch("https://viacep.com.br/ws/50060050/json/");
      var json = await result.json()
      var p = document.getElementsByClassName("teste")
      p.innerHTML = json.bairro;
        
      }
teste()