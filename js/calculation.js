let allExpression = [];

const separators = [' ', '\\\+', '-', '\\*', '/', ':'];

function calculation(){
    let expression = String(document.getElementById("expression").value);
    let testExpression = expression.split(new RegExp(separators.join('|'), 'g'));
    console.log(testExpression);

    testExpression.map((value) => {
        if(isNaN(value)){
            alert(message.LETTER_IN_EXPRESSION);
            throw new Error();  
        }
    })

    let result;
    //console.log((eval(expression)).toFixed(5));
    try {
        result = eval(expression);
    } catch(e) {
        if (e instanceof SyntaxError) alert(message.CALCULATIO_ERROR);
        throw new Error();    
    } 
    
    allExpression.push(expression);
    allExpression.push(' = '+result);
    allExpression.push('</br>');
    document.getElementById("result").innerHTML = allExpression.join('');
    document.getElementById("expression").value = "";
}

function backspace() {
    expression.value = expression.value.substring(0, expression.value.length - 1);
}