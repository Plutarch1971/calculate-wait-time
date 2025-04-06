function calculateWaitTime(tasks){
//Sort priority by descending order
tasks.sort((a,b) => b.priority - a.priority);

let waitTime = 0;
const result = [];

for(let i = 0; i <tasks.length; i++){
    const currentTask = tasks[i];// Make sure to use this object to access properties
    result.push({
        task:currentTask.name,
        priority:currentTask.priority,
        waitTime: waitTime + "ms"
    });

//Update waitTime for the next task
waitTime += tasks[i].executionTime;
}
return result;
}

//Function to get the result for a specific task
function getTaskResult(taskName, tasks){
    const results = calculateWaitTime(tasks);
    return results.find(task => task.task === taskName) || `Task "${taskName}" not found`;
}
//Example task: (name, priority, executionTime)
const tasks = [
    { name: "Task A", priority: 3, executionTime: 100},
    { name: "Task B", priority: 10, executionTime: 200},
    { name: "Task C", priority: 5, executionTime: 150},
    { name: "Task D", priority: 7, executionTime: 120},
    { name: "Task E", priority: 1, executionTime: 180}
];

//Get the result for a specific task
const taskName = "Task E"; // Change this for other task
console.log(getTaskResult(taskName, tasks));