import { useState } from "react";
import type { TimeEntry } from "../types/timeEntry";

interface TimeEntryListProps {
  entries: TimeEntry[];
  onDelete: (id: string) => void;
  onEdit: (id: string, updatedTask: string, updatedHours: number) => void;
}

export default function TimeEntryList({
  entries,
  onDelete,
  onEdit,
}: TimeEntryListProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTask, setEditTask] = useState("");
  const [editHours, setEditHours] = useState("");

  const totalHours = entries.reduce((sum, entry) => sum + entry.hours, 0);

 
  const startEdit = (entry: TimeEntry) => {
    setEditingId(entry.id);
    setEditTask(entry.task);
    setEditHours(entry.hours.toString());
  };


  const saveEdit = (id: string) => {
    const parsedHours = parseFloat(editHours);

    if (!editTask.trim()) {
      alert("Task name can't be empty");
      return;
    }

    if (isNaN(parsedHours) || parsedHours <= 0) {
      alert("Enter a valid number of hours");
      return;
    }

    onEdit(id, editTask, parsedHours);
    setEditingId(null);
  };

  return (
    <div>
      <h2>Time Entries</h2>
      {entries.length === 0 ? (
        <p>No time entries yet.</p>
      ) : (
        <ul>
          {entries.map((entry) => (
            <li key={entry.id}>
              {editingId === entry.id ? (
                <>
                  <input
                    type="text"
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                  />
                  <input
                    type="number"
                    value={editHours}
                    onChange={(e) => setEditHours(e.target.value)}
                  />
                  <button onClick={() => saveEdit(entry.id)}>Save</button>
                  <button onClick={() => setEditingId(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <strong>{entry.task}</strong>: {entry.hours} hour(s)
                  <button onClick={() => startEdit(entry)} style={{ marginLeft: "10px" }}>
                    Edit
                  </button>
                  <button onClick={() => onDelete(entry.id)} style={{ marginLeft: "5px" }}>
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
      <h3>Total Hours: {totalHours}</h3>
    </div>
  );
}
