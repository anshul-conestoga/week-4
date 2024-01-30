$(document).ready(() => {
  $("#add_task").click(() => {
    const textbox = $("#task");
    const task = textbox.val();
    if (task === "") {
      alert("Please enter a task.");
      textbox.focus();
    } else {
      let tasks = localStorage.myTasks || "";
      localStorage.myTasks = tasks.concat(task, "\n");
      textbox.val("");
      $("#task_list").val(localStorage.myTasks);
      textbox.focus();
    }
  });
  $("#clear_tasks").click(() => {
    localStorage.removeItem("myTasks");
    $("#task_list").val("");
    $("#task").focus();
  });
  // display tasks on initial load
  $("#task_list").val(localStorage.myTasks);
  $("#task").focus();
});
