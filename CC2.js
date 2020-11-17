/**
 john -89    120     103
 mike -116 94 123
 avg
 */
var johnGame1=89,johnGame2=120,johnGame3=103;
var mikeGame1=116,mikeGame2=94,mikeGame3=123;
var maryGame1=97,maryGame2=134,maryGame3=105;
var johnAvg=(johnGame1+johnGame2+johnGame3)/3;
var mikeAvg=(mikeGame1+mikeGame2+mikeGame3)/3;
var maryAvg=(maryGame1+maryGame2+maryGame3)/3;
switch(true){
    case johnAvg>mikeAvg&&johnAvg>maryAvg:
        console.log('john win the game as his avg score '+johnAvg+' is greater than '+mikeAvg+" and "+maryAvg);
        break;
    case mikeAvg>johnAvg&&mikeAvg>maryAvg:
        console.log('mike win the game as his avg score '+mikeAvg+' is greater than '+johnAvg+' and '+maryAvg);
        break;
    case maryAvg>johnAvg&&maryAvg>mikeAvg:
        console.log('mary win the game as her avg score '+maryAvg+' is greater than '+ mikeAvg+' and '+johnAvg);
        break;    
    default:
        console.log('draw as '+johnAvg+' = '+mikeAvg+'='+maryAvg);
}


