import React from "react";
import EventMod from "../Eventcomp/EventMod";

const Calender = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">8 am</td>
            <EventMod event="Starbucks ☕️" color="green" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <EventMod event="Yolk 🍳" color="green" />
            <td></td>
          </tr>

          <tr>
            <td className="time">9 am</td>
            <td></td>
            <td></td>
            <td></td>
            <EventMod event="Subway 🚊" color="pink" />
            <td></td>
            <td></td>
            <EventMod event="The Bean 🫘" color="blue" />
          </tr>
          {/* Additional rows for other weeks */}
        </tbody>
      </table>
    </div>
  );
};

export default Calender;