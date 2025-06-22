import{useState} from 'react';
import TimeEntryForm from './Components/TimeEntryForm';
import type { TimeEntry } from './types/timeEntry';

import './App.css';


function App(){
  const[entries, setEntries] =useState<TimeEntry[]>([]);

  const handleAddEntry =(task:string,hours:number)=>{
    const newEntry:TimeEntry ={
      id:crypto.randomUUID(),
      task,
      hours,
    };
    setEntries([...entries,newEntry]);

  };
  return(
    <div className="App">
      <h1>Mini Time Tracker</h1>
      <TimeEntryForm onAdd={handleAddEntry}/>
    </div>
  )
}