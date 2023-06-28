// El reto es dibujar todas las filas pares
for(let i = 0;  i < 10; i++){
  let fila = '';
    for(let j = 0; j < 10; j++){
      if( i % 2 == 0 ){
        fila += '* ';    
      }
    }
    console.log(fila);
}