const setCookie = (name, value, days) => {
  let cookie = name + "=" + encodeURIComponent(value);
  if (days) {
    cookie += "; max-age=" + days * 24 * 60 * 60;
  }
  cookie += "; path=/";
  document.cookie = cookie;
};
const getCookieByName = (name) => {
  const cookies = document.cookie;
  let start = cookies.indexOf(name + "=");
  if (start === -1) {
    return "";
  } else {
    start = start + (name.length + 1);
    let end = cookies.indexOf(";", start);
    if (end === -1) {
      end = cookies.length;
    }
    const cookieValue = cookies.substring(start, end);
    return decodeURIComponent(cookieValue);
  }
};
const deleteCookie = (name) =>
  (document.cookie = name + "=''; max-age=0; path=/");
$(document).ready(() => {
  $("#add_task").click(() => {
    const textbox = $("#task");
    const task = textbox.val();
    if (task === "") {
      alert("Please enter a task.");
      textbox.focus();
    } else {
      let tasks = getCookieByName("tasks");
      tasks = tasks.concat(task, "\n");
      setCookie("tasks", tasks, 21);
      textbox.val("");
      $("#task_list").val(getCookieByName("tasks"));
      textbox.focus();
    }
  });
  $("#clear_tasks").click(() => {
    deleteCookie("tasks");
    $("#task_list").val("");
    $("#task").focus();
  });
  // display tasks on initial load
  $("#task_list").val(getCookieByName("tasks"));
  $("#task").focus();
});
