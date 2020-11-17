function tipCalculator(bill){
    switch(true){
        case(bill<50):
            var tip = bill*0.2;
            return tip;
        case(bill>50&&bill<200):
             var tip = bill*.15;
             return tip;
        default:
            var tip =bill*0.1;
            return tip;
    }
}
var bill = [124,48,268];
var money_spend= [tipCalculator(bill[0]),tipCalculator(bill[1]),tipCalculator(bill[2])];
console.log(money_spend);
