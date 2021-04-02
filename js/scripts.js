function trocar(){
  
  esconder("pNin");
  esconder('pMicro');
  esconder('pSony');
  mostrar('esp');
  mostrar('luta');
  mostrar('terror');
  mostrar('rpg');
}

function voltar(){
  
  mostrar("pNin");
  mostrar('pMicro');
  mostrar('pSony');
  esconder('esp');
  esconder('luta');
  esconder('terror');
  esconder('rpg');
}


function esconder(el) {
  var display = document.getElementById(el).style.display;
 
      document.getElementById(el).style.display = 'none';
}

function mostrar(el) {
  var display = document.getElementById(el).style.display;
 
      document.getElementById(el).style.display = 'inline';
 
}