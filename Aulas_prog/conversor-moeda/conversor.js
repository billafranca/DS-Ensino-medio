document.addEventListener('DOMContentLoaded', function(){
    const valueDolar = document.getElementById('valorDolar')
    const valueReal = document.getElementById('valorReal')
    const btn = document.querySelector('#botaoConverter')

    btn.addEventListener('click', function(){
        const valorEmDolar = parseFloat(valueDolar.value)
        const valorEmReal = valorEmDolar * 5.41
        valueReal.value = valorEmReal.toFixed(2)
    });

})