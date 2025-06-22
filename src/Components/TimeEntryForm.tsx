import{useState} from "react";

interface TimeEntryFormProps{
    onAdd: (task: string,hours:number)=> void;

}

export default function TimeEntryForm({ onAdd}: TimeEntryFormProps){
    const[task, setTask] =useState("");
    const[hours, setHours] = useState("");

    const handleSubmit =(e:React.FormEvent)=>{
        e.preventDefault();

        const parsedHours=parseFloat(hours);

        if(!task.trim()){
            alert("this task name can't be empty");
            return;
        }
        if(isNaN(parsedHours) || parsedHours <=0){
            alert("please enter a valid number of hours");
            return;
        }

        onAdd(task,parsedHours);

        setTask("")
        setHours("")

    };

    return(
        <form onSubmit={handleSubmit}>
            <input
        type="text"
        placeholder="Task name"
        value={task}
        onChange={(e) => setTask(e.target.value)} 
        required
      />
       <input
       type="number"
       placeholder="Hours worked"
        value={hours}
         onChange={(e) => setHours(e.target.value)} 
        min="0"
        step="0.1"
        required
      />

        
    )

        
    }
}