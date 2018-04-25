const myTodos = [
	{title:"Buy a Book", isDone: true},
	{title:"Make a call to friend", isDone: false},
	{title:"Go to Gym", isDone: true},
	{title:"Watch JS series", isDone: true},
	{title:"Read books", isDone: false},
	{title:"Learn New Language", isDone: false}
]

//Method 1:
const notDoneTasks = myTodos.filter((todo) => {
	return todo.isDone === false
});

notDoneTasks.forEach((obj) => {
	console.log(obj.title);
})




//Method 2:
myTodos.forEach((todo) => {
	if(!todo.isDone) {
		console.log(todo.title);
	}
});





//console.log(isDoneTasks);
//console.log(titleArray);