// Sample dataset for Git practice demo
const projectTasks = [
  { id: 1, title: "Initialize Git repository", status: "completed" },
  { id: 2, title: "Connect remote origin", status: "completed" },
  { id: 3, title: "Test branch workflow", status: "in-progress" },
  { id: 4, title: "Push final changes", status: "pending" }
];

// Filter and display active tasks
function getPendingTasks(tasks) {
  return tasks
    .filter((task) => task.status !== "completed")
    .map((task) => `#${task.id}: ${task.title} [${task.status.toUpperCase()}]`);
}

// Simulate an async API check
async function checkRepoStatus(repoName) {
  console.log(`Checking status for "${repoName}"...`);
  await new Promise((resolve) => setTimeout(resolve, 500));
  return `${repoName} is synced and ready.`;
}

// Run demo
async function init() {
  const statusMessage = await checkRepoStatus("demo1");
  console.log(statusMessage);

  console.log("\nRemaining Tasks:");
  const remaining = getPendingTasks(projectTasks);
  remaining.forEach((item) => console.log(`- ${item}`));
}

init();