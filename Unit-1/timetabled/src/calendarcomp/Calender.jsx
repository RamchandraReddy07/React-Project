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
          <tr>
            <td className="time">10 am</td>
            <td></td>
            <EventMod event="River Cruise ⛵️" color="blue" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">11 am</td>
            <td></td>
            <td></td>
            <td></td>
            <EventMod event="Deep Dish 🍕" color="green" />
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">12 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <EventMod event="Subway 🚊" color="pink" />
            <td></td>
           
          </tr>

          <tr>
            <td className="time">1 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">2 pm</td>
            <td></td>
            <td></td>
            <EventMod event="Art Institute 🖼" color="blue" />
            <td></td>
            <EventMod event="Girl & the Goat" color="green" />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">3 pm</td>
            <EventMod event="Cubs Game ⚾️" color="blue" />
            <td></td>
            <td></td>
            <td></td>
            <EventMod event="Subway 🚊" color="pink" />
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">4 pm</td>
            <td></td>
            <td></td>
            <EventMod event="Fancy Dinner 🎩" color="green" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>  
          </tr>

          <tr>
            <td className="time">5 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <EventMod event="Shopping 🛍" color="blue" />
            <td></td>
            
          </tr>
          {/* Additional rows for other weeks */}
        </tbody>
      </table>
    </div>
  );
};

export default Calender;