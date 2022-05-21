let allExpression = [];

const separators = [' ', '\\\+', '-', '\\*', '/', ':'];
function calculation(){

    let expression = String(document.getElementById("expression").value);
    let testExpression = expression.split(new RegExp(separators.join('|'), 'g'));
    console.log(testExpression);

    let thereAreLetters = 0;
    testExpression.forEach(function(item,i,arr) {
        if(isNaN(item)){
            thereAreLetters++;
        }
    })

    if(Number(thereAreLetters)){
        alert("There are letters or something else");
    }else{
        let result;
        console.log((eval(expression)).toFixed(5));
        result = (eval(expression));
        allExpression.push(expression);
        allExpression.push('= '+result);
        allExpression.push('</br>');
        document.getElementById("result").innerHTML = allExpression.join('');
        document.getElementById("expression").value = "";
    }
}

function backspace() {
    expression.value = expression.value.substring(0, expression.value.length - 1);
}