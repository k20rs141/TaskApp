// This is a JavaScript file

getScriptPage().onShow = async function() {
  // 1. ログインをチェックします。ログインしていなければ login.html に遷移します
  await getTaskList();
  renderTasks();
}