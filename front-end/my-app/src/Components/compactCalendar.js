import React, { useState } from 'react';
import { Calendar, Badge, Popover } from 'rsuite';

function getTodoList(date) {
  const day = date.getDate();

  switch (day) {
    case 10:
      return [
        { time: '10:30 am', title: 'Meeting' },
        { time: '12:00 pm', title: 'Lunch' }
      ];
    case 15:
      return [
        { time: '09:30 pm', title: 'Products Introduction Meeting' },
        { time: '12:30 pm', title: 'Client entertaining' },
        { time: '02:00 pm', title: 'Product design discussion' },
        { time: '05:00 pm', title: 'Product test and acceptance' },
        { time: '06:30 pm', title: 'Reporting' },
        { time: '10:00 pm', title: 'Going home to walk the dog' }
      ];
    default:
      return [];
  }
}

const CompactCalendar = () => {
    const [activePopover, setActivePopover] = useState(false);

    function handleClick() {
        setActivePopover(activePopover => !activePopover);
    }
  function renderCell(date) {
    const list = getTodoList(date);

    if (list.length) {
    return (
    <Badge 
    className="calendar-todo-item-badge" 
    onClick={handleClick}/>
    );
    }

    return null;
  }
  function getDateValue(date) {
    return date.getDate();
  }

  
  return (
    <div style={{ width: 580 }}>
      <Calendar compact bordered renderCell={renderCell} />{''}
      {activePopover && (
        
        <Popover
          title={`Todo List for ${getTodoList(getDateValue).toLocaleDateString()}`}
          onHide={() => setActivePopover(false)}
        >
          <ul>
            {getTodoList(getDateValue).map((item, index) => (
              <li key={index}>
                <span>{item.time}</span> - <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </Popover>
      )}
    </div>
  );
};

export default CompactCalendar;