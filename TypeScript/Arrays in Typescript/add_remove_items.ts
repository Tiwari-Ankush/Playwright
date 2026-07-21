let queue: string[] = ["Task 2", "Task 3"];

queue.push("Task 4");    // ["Task 2", "Task 3", "Task 4"] //adds at end of the array
queue.unshift("Task 1"); // ["Task 1", "Task 2", "Task 3", "Task 4"] //adds at begining of the array
queue.pop();             // Removes "Task 4"
queue.shift();           // Removes "Task 1"

console.log(queue); // Output: [ 'Task 2', 'Task 3' ]