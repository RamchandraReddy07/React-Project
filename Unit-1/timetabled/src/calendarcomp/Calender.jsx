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
            <EventMod event="Starbucks ☕️" color="green" location="646 Michigan Ave"/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <EventMod event="Yolk 🍳" color="green" location="355 E Ohio St"/>
            <td></td>
          </tr>

          <tr>
            <td className="time">9 am</td>
            <td></td>
            <td></td>
            <td></td>
            <EventMod event="Subway 🚊" color="pink" location="Grand Station"/>
            <td></td>
            <td></td>
            <EventMod event="The Bean 🫘" color="blue" location="Millennium Park"/>
          </tr>
          <tr>
            <td className="time">10 am</td>
            <td></td>
            <EventMod event="River Cruise ⛵️" color="blue" location="Grand Station"/>
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
            <EventMod event="Deep Dish 🍕" color="green" location="Giodano's"/>
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
            <EventMod event="Subway 🚊" color="pink" location="Washington Station"/>
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
            <EventMod event="Art Institute 🖼" color="blue" location="111 S Michigan Ave"/>
            <td></td>
            <EventMod event="Girl & the Goat" color="green" location="809 W Randolph St"/>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">3 pm</td>
            <EventMod event="Cubs Game ⚾️" color="blue" location="Wrigley Field"/>
            <td></td>
            <td></td>
            <td></td>
            <EventMod event="Subway 🚊" color="pink" location="Roosevelt Station"/>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">4 pm</td>
            <td></td>
            <td></td>
            <EventMod event="Fancy Dinner 🎩" color="green" location="Maple & Ash"/>
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
            <EventMod event="Shopping 🛍" color="blue" location="Magnificent Mile"/>
            <td></td>
            
          </tr>
          {/* Additional rows for other weeks */}
        </tbody>
      </table>
    </div>
  );
};

export default Calender;