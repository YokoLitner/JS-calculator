

const separators = [' ', '\\\+', '-', '\\*', '/', ':'];
function calculation(){

    var expression = String(document.getElementById("expression").value);
    var testExpression = expression.split(new RegExp(separators.join('|'), 'g'));
    console.log(testExpression);

    var thereAreLetters = 0;
    testExpression.forEach(function(item,i,arr) {
        if(isNaN(item)){
            thereAreLetters++;
        }
    })

    if(Number(thereAreLetters)){
        alert("There are letters or something else");
    }else{
        var result;
        console.log((eval(expression)).toFixed(5));
        result = (eval(expression)).toFixed(5);
        document.getElementById("result").innerHTML = result;

    }
}

function backspace() {
    expression.value = expression.value.substring(0, expression.value.length - 1);
}