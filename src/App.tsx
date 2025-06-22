import{useState} from 'react';
import TimeEntryForm from './Components/TimeEntryForm';
import { TimeEntry } from './Components/types/timeEntry';
import './App.css';


function App(){
  const[entries, setEntries] =useState<TimeEntry[]>([]);
  
}