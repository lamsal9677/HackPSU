import React, { useState } from 'react';
import { Calendar, Badge, Popover } from 'rsuite';
// import "./test.css";

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

const MyCalendar = () => {
  const [activePopover, setActivePopover] = useState(null);
  const [astate, bState] = useState(false);

    function handleClick() {
        bState(astate => !astate);
    }  
  function renderCell(date) {
    const list = getTodoList(date);

    if (list.length) {
      return (
      <Badge
        className="calendar-todo-item-badge"
        onClick={() => {
        setActivePopover(date);
        handleClick();
        }}
      />
      );
    }

    return null;
  }

  function renderPopover() {
    if (activePopover && astate) {
      const list = getTodoList(activePopover);

      return (
        <Popover
          title={`Todo List for ${activePopover.toLocaleDateString()}`}
          onHide={() => setActivePopover(null)}
        >
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                <span>{item.time}</span> - <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </Popover>
      );
    }

    return null;
  }

  return (
    <div style={{ width: 850, height: 400 }}>
      <Calendar compact bordered renderCell={renderCell} />
      {renderPopover()}
    </div>
  );
};

export default MyCalendar;
