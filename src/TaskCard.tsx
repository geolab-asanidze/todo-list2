interface TaskCardProps {
  taskDetails: string;
  completed: boolean;
}

export default function TaskCard({ taskDetails, completed }: TaskCardProps) {
  return (
    <div className={`task-card ${completed ? "completed" : "pending"}`}>
      <h2 className="task-title">{taskDetails}</h2>
      <p className="task-status">
        {completed ? "დასრულებულია" : "არ არის დასრულებული"}
      </p>
    </div>
  );
}
