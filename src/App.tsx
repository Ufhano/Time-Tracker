import{useState} from 'react';
import TimeEntryForm from './Components/TimeEntryForm';
import type { TimeEntry } from './types/timeEntry';

import './App.css';
import TimeEntryList from './Components/TimeEntryList';


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
  const handleDeleteEntry=(id:string)=>{
    setEntries((prev)=>prev.filter((entry)=>entry.id !==id));
  };
  return(
    <div className="App">
      <h1>Mini Time Tracker</h1>
      <TimeEntryForm onAdd={handleAddEntry}/>
      <TimeEntryList entries ={entries} onDelete={handleDeleteEntry}/>
    </div>
  )
}
export default App;