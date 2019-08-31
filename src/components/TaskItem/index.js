import React from 'react';

import { applyHighlight } from '../../utils/applyHighlight';

const TaskItem = (props) => {
  const { onTaskClick, highlight, task } = props;

  const highlightTitle = applyHighlight(task.title, highlight, {
    style: {
      backgroundColor: 'yellow',
      fontWeight: 'bold'
    }
  })

  return (
    <tr
      style={{ cursor: 'pointer' }}
      key={task.id}
      onClick={() => onTaskClick(task)}
      className="tasklist__row">
      <td>{task.id}</td>
      <td>{highlightTitle}</td>
      <td>{task.completed ? 'Sim' : 'Não'}</td>
      <td>{task.userId}</td>
    </tr>
  )
}

export default TaskItem;
