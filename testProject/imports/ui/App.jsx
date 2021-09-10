import React from 'react';
import { Task } from './Task';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { Blog } from './Blog';
const tasks =[
  {_id:1, text:"task 1"},
  {_id:2, text:"task 2"},
  {_id:3, text:"task 3"},
  {_id:4, text:"task 4"}
]
export const App = () => (
  <div>
    <Blog/>
    <h1>Welcome to Meteor!</h1>
    <ul>
      { tasks.map(task => <Task key={ task._id } task={ task }/>) }
    </ul>
    <Hello/>
    <Info/>
  </div>
);
