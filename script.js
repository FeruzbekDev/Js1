var agreeUser = prompt('You should solve some Math problems');
var a = +prompt('6 + 3 =');
var b = +prompt('14 - 3 =');
var c = +prompt('7 * 9 =');
var d = +prompt('17 % 4 =');
var e = +prompt('121 / 11 =');
var finish =alert('finished');


console.log(agreeUser);

if(a == 9){
    console.log('Level 1')
    console.log(' 6 + 3 = ' + (6 + 3), ' your answer is ' + a);
}
else{
    console.log('Level 1')
    console.log( 'Your answer is ' + a )
    console.log( 'Correct answer is  9')
}


if(b == 11){
    console.log('Level 2')
    console.log(' 14 - 3 = ' + (14 - 3), ' your answer is ' + b);
}
else{
    console.log('Level 2')
    console.log( 'Your answer is ' + b )
    console.log( 'Correct answer is  11')
}

if(c == 63){
    console.log('Level 3')
    console.log(' 7 * 9 = ' + (7 * 9), ' your answer is ' + c);
}
else{
    console.log('Level 3')
    console.log( 'Your answer is ' + c )
    console.log( 'Correct answer is  63')
}

if(d == 1){
    console.log('Level 4')
    console.log(' 17 % 4 =' + (17 % 4), 'your answer is ' + d);
}
else{
    console.log('Level 4')
    console.log( 'Your answer is ' + d )
    console.log( 'Correct answer is  1')
}



if(e == 11){
    console.log('Level 5')
    console.log(' 121 / 11 =' + (121 / 11), 'your answer is ' + e);
}
else{
    console.log('Level 5')
    console.log( 'Your answer is ' + e )
    console.log( 'Correct answer is  11')
}
