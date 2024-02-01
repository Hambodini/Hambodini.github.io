class task {
    constructor(startTime, endTime, taskText) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.taskText = taskText;
    }
    startTime
    endTime
    taskText
};
taskList = {}
function addTask() {
    taskRaw = $('form').serializeArray()
    task(taskRaw.startTime,taskRaw.endTime ,taskRaw.taskText)
    console.log(task)
}