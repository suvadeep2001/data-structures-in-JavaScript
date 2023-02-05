let obj = {
	fName:"Suvadeep",
	lName:"Maity",
	roll_no:24,
	dept:"ECE"
};

// console.log(obj.fName)

//Copying an Object

let newobj = obj

console.log(newobj.roll_no)

//Shallow Copy

let copyObject = Object.assign(newobj);

console.log(copyObject.roll_no)

