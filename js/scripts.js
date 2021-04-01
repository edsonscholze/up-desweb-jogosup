function trocar(){
  
  esconder("pNin");
  esconder('pMicro');
  esconder('pSony');
  mostrar('aven');
  mostrar('esp');
  mostrar('est');
  mostrar('luta');
  mostrar('terror');
  mostrar('rpg');
}

function voltar(){
  
  mostrar("pNin");
  mostrar('pMicro');
  mostrar('pSony');
  esconder('aven');
  esconder('esp');
  esconder('est');
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