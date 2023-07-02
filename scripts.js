function contar(){
    var valor = parseInt(document.getElementById('inicial').value);
    var valorFi = parseInt(document.getElementById('final').value);
    var pular = parseInt(document.getElementById('pularDe').value);
    var res = document.querySelector('div#res');
    if(isNaN(valor) || isNaN(valorFi) || isNaN(pular)){
        window.alert('[Erro] preencha os devidos espaços')
    }else{
        var i = valor;
        var contador = '';
        while( i <=valorFi ){
            contador += i + ' ';
            i += pular;
        }
        res.textContent = 'Contador: '+ contador;
        
    }    
}