name_of_student_array=[];

function submit(){
 
var name1=document.getElementById("friends1").value;
var name2=document.getElementById("friends2").value;
var name3=document.getElementById("friends3").value;
var name4=document.getElementById("friends4").value;
var name5=document.getElementById("friends5").value;


name_of_student_array.push(name1);

name_of_student_array.push(name2);


name_of_student_array.push(name3);


name_of_student_array.push(name4);

name_of_student_array.push(name5);

console.log(name_of_student_array);

document.getElementById("display_of_name").innerHTML= name_of_student_array;

document.getElementById("submit-button").style.display="none";

document.getElementById("sort-button").style.display="inline-block";

}

function sorting(){

name_of_student_array.sort();
console.log(name_of_student_array);
document.getElementById("display_of_name").innerHTML= name_of_student_array;


}









