import type {TimeEntry} from "../types/timeEntry";
interface TimeEntryListProps{
    entries:TimeEntry[];
    onDelete:(id:string)=>void;
    onEdit:(id:string,updatedTask:string,updatedHours:number)=>void;

}

export default function TimeEntryList({entries}:TimeEntryListProps){
    const totalHours =entries.reduce((sum, entry)=> sum+entry.hours,0);

    return(
        <div>
            <h2>Time Entries</h2>
            {entries.length ===0 ?(
                <p>No time entries yet.</p>
            ) : (
                <ul>
                    {entries.map((entry)=> (
                        <li key={entry.id}>
                            <strong>
                                {entry.task}
                            </strong>:
                            {entry.hours}hour(s)
                        </li>
                    ) )}
                </ul>
            )}
            <h3>Total Hours:{totalHours}</h3>
        </div>
    );
}