/***
mark 
john 
bmi=mass/height^2
 */

var massMark=prompt('Enter the mass of mark (in kg)');
var massJohn=prompt('Enter th mass of john (in kg)');
var heightJohn=prompt('Enter the height of john (in meter)');
var heightMark=prompt('Enter the height of mark (in meter)');
var bmi_1= massMark/(heightMark^2);
var bmi_2= massJohn/(heightJohn^2);
console.log('BMI of mark is:' + bmi_1);
console.log('BMI of john is:' + bmi_2);
var higher_bmi=bmi_1>bmi_2;
console.log('is mark\'s has higher BMI than john\'s ?\n'+higher_bmi); 
// we can do last part with if-else also.
