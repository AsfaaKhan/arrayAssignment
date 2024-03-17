//Lecture no 5 assignment

//Arrays
let names:string[] = ['Asfaa','Ayesha','Ahmed']; 
names[1]= 'Palwasha';
let birth_date :number[] = [12, 10, 7];  
let boolaen :boolean[] =[true,false];
let id :(string | number ) [] = ['Mahnoor','Naeem', 12];
let ids :any [] = [12, 'Amaan', true];

console.log(names);
console.log('My name is '+ names[0]+ ' Khan.');

console.log(birth_date);
console.log('I was Born in November '+ birth_date[2] +'.');

console.log(boolaen);
console.log('You are married.\n No, this statement is '+boolaen[1]+'.');

console.log(id);
console.log(ids);

//Array in Array
let countryCityNames :any[]= ["Pakistan",["Karachi "], "India", ["hyderabad"] ];



console.log(countryCityNames);








// let arr :any []= [12,"asfaa",[145,true]];
//console.log(arr);