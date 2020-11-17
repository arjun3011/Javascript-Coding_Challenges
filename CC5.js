
var tipc =
{
bill:[124,48,268,180,42],
     tipCalculator:function(bill) {
    switch (true) {
        case (bill < 50):
            var tip = bill * 0.2;
            return tip;
        case (bill > 50 && bill < 200):
            var tip = bill * 0.15;
            return tip;
        default:
            var tip = bill * 0.1;
            return tip;
        }
    }
};

var marktipc =
{
    bill_2: [77, 375, 110, 45],
            tipCalculator_2: function (bill) {
        switch (true) {
                case (bill < 100):
                    var tip = bill * 0.2;
                    return tip;
                case (bill > 100 && bill < 300):
                    var tip = bill * 0.1;
                    return tip;
                default:
                    var tip = bill * 0.25;
                    return tip;
                
        }
    }

};
var finalBill = [];
var justTip = [];
var mark_finalBill = [];
var mark_justTip = [];
for (var i = 0; i < tipc.bill.length; i++) {
    var calc = tipc.tipCalculator(tipc.bill[i]);
    finalBill.push(calc + tipc.bill[i]);
    justTip.push(calc);
   
}
var john_avg = calc / tipc.bill.length;//WORNG WAY 
for (var i = 0; i < marktipc.bill_2.length; i++) {
var calc_2 = marktipc.tipCalculator_2(marktipc.bill_2[i]);
mark_finalBill.push(calc_2 + marktipc.bill_2[i]);
mark_justTip.push(calc_2);
}
var mark_avg = calc_2 / marktipc.bill_2.length;//WORNG WAY
console.log('finalBill=' + finalBill);
console.log('tips are:' + justTip);
console.log('mark_finalBill for mark=' + mark_finalBill);
console.log("mark's tip are:" + mark_justTip);
var comparision = john_avg>mark_avg?'John pays higher avg. tip '+john_avg : 'mark pays higher avg. tip '+ mark_avg;
console.log(comparision);



// Or

var john={
    name:'john',
    bills: [124,48,268,180,42],
    calcTips: function(){
        this.tip=[];
        this.finalBill=[];
        for (var i=0;i<this.bills.length;i++){
            var percentage;
            var bill=this.bills[i];
            if(bill<50){
                percentage=.2;
            }
            else if (bill>=50&&bill<200){
                percentage=.15;
            }            
            else{
                percentage=.1;
            }
            this.tip[i]=bill*percentage;
            this.finalBill[i] = bill + bill * percentage;        
        }

    }
}
john.calcTips();
console.log(john.tip);
console.log(john.finalBill);
//AND FOR AVG. (THE RIGHT METHOD)
function calcAvg(tips){
    var sum =0;
    for (var i=0;i<tip.length;i++){
        sum=sum+tip[i];

    }
    return sum/tip.length;
}
john.calcAvg();