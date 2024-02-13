//task obj
class task {
    constructor(startDate, endDate, taskText) {
      this.startDate = startDate
      this.endDate = endDate
      this.taskText = taskText
    }
  }
  
  //function to make datetime-local
  const convertToDateTimeLocalString = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
  
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
  
  //list of all tasks
  const taskArr = []
  
  //load function
  function load() {
  
    //find current date
    let now = new Date();
  
    //add date to starttime on form
    document.getElementById('startTime').value = convertToDateTimeLocalString(now)
  
  }
  
  //refresh html with taskes on list
  function refreshList() {
  
    //grab data from storage
  
    //div element with task info
    
    //add div to area after form
  }
  
  //function for form submit
  function handleSubmit(event) {
    event.preventDefault();
  
    // got data from form
    var data = new FormData(event.target);
  
    //turned formData into normal obj
    var value = data.entries();
    
    //make and fill task obj with form data
    var newTask = new task(value.startTime, value.endTime, value.taskText)
    
    //save to form to array
    taskArr.push(value)
    
    //save array to local storage
    localStorage.setItem("tasks", taskArr)
  
    //refresh list
    refreshList()
  
    console.log(localStorage.getItem("tasks"))
  }
  
  //get form and call form function
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
  