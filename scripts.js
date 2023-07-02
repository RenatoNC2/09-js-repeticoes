function contar(){
    var valor = parseInt(document.getElementById('inicial').value);
    var valorFi = parseInt(document.getElementById('final').value);
    var pular = parseInt(document.getElementById('pularDe').value);
    var res = document.querySelector('div#res');
    if(isNaN(valor) || isNaN(valorFi) || isNaN(pular)){
        window.alert('[Erro] preencha os devidos espaços')

    }else if (pular == 0 || valorFi == 0 ) {
        window.alert('[Erro] valores preenchidos devem ser diferente de "0"')

    }else if (valorFi <= valor) {
        window.alert('[Erro] valor inicial deve ser menor que valor final')

    }else{
        var i = valor;
        var contador = '';
        while( i <=valorFi ){
            contador += '\u{1f449}' + i + ' ';
            i += pular;
            res.textContent = 'Contador: '  + contador +'\u{1f3c1}';
        }  
    }    
}