import React from 'react'
import DayListItem from "components/DayListItem"

export default function  DayList (props) {
  const lists = props.days.map(day => {
    return (
      // daylistitem is the actual form that contains the daylists specific items
      <DayListItem 
        key={day.id}
        name={day.name} 
        spots={day.spots} 
        selected={day.name === props.day}
        setDay={props.setDay}  
      />
    );
  });
  return (
    <ul data-testid="day">
      {lists}
    </ul>
  )
}

