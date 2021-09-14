import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Task } from './Task';
import { TasksCollection } from '/imports/api/TasksCollection';
import { TaskForm } from './TaskForm';
const toggoleChecked = ({ _id, isChecked }) => {
  TasksCollection.update(_id, {
    $set: {
      isChecked: !isChecked
    }
  })
};
const deleteTask = ({ _id }) => TasksCollection.remove(_id);
export const App = () => {
  const tasks = useTracker(() => TasksCollection.find({}).fetch());

  return (
    <div className="app">
      <header>
        <div className="app-bar">
          <div className="app-header">
            <h1>right! its a TO DO LIST</h1>
          </div>
        </div>
      </header>


      <div className="main">
        <TaskForm />

        <ul className="tasks">
          {tasks.map(task => <Task key={task._id}
            task={task}
            onCheckboxClick={toggoleChecked}
            onDeleteClick={deleteTask}
          />)}

        </ul>
      </div>
    </div>
  );
};
