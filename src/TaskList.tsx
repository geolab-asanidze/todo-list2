import TaskCard from "./TaskCard";

export default function TaskList() {
  const allTasks = [
    {
      id: 1,
      title: "პირველი ლექციის ჩატარება",
      isCompleted: false,
    },
    {
      id: 2,
      title: "მეორე ლექციის ჩატარება",
      isCompleted: false,
    },
    {
      id: 3,
      title: "დავალებების გასწორდება",
      isCompleted: false,
    },
    {
      id: 4,
      title: "პრეზენტაციის მომზადება",
      isCompleted: true,
    },
    {
      id: 5,
      title: "რესურსების მოძიება",
      isCompleted: true,
    },
  ];

  const completedCount = allTasks.filter((task) => task.isCompleted).length;
  const totalCount = allTasks.length;
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="task-list">
      <div className="progress-container">
        <div className="progress-info">
          <span>შესრულების პროგრესი</span>
          <span>
            {completedCount} / {totalCount} ({percentage}%)
          </span>
        </div>
        <div className="progress-bar-bg">
          <div
            className="progress-bar-fill"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {allTasks.map((task) => (
        <TaskCard
          key={task.id}
          taskDetails={task.title}
          completed={task.isCompleted}
        />
      ))}
    </div>
  );
}
