var Mark= 
{
    name:'Mark',
    height:1.58,
    mass: 80,
    calcBMI: function(){
         this.BMI=this.mass / (this.height * this.height);
            return this.BMI;
        }
};
var John=
{
    name:'John',
    height:1.32,
    mass:95,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};
Mark.calcBMI();
John.calcBMI();
console.log(Mark,John);
var check=Mark.BMI>John.BMI ? Mark.name+' has greater BMI than '
+John.name : John.name+' has greater BMI than '
+Mark.name;
console.log(check);
console.log(Mark.calcBMI());
console.log(Mark.height);
if (Mark.BMI > John.BMI){
    console.log(Mark.name + ' has greater BMI than ' + John.name );
    }
else
    console.log(John.name + ' has greater BMI than ' + Mark.name);