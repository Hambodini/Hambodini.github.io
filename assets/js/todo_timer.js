//task object
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
//list of all tasks
taskList = {}
//take forma data and add it to list
function addTask() {
    //get data from form
    taskRaw = $('form').serializeArray()
    //make task obj and add to list of others
    task(taskRaw.startTime,taskRaw.endTime ,taskRaw.taskText)
    //refresh display
    refreshList()
    console.log(task)
}
//refresh html with taskes on list
function refreshList() {

}