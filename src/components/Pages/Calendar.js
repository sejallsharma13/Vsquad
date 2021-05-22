import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from 
"@fullcalendar/interaction";
import hcbgImage from "./bg.jpg";
import './Calendar.css';
class Calendar extends React.Component {
    render() {
  return (
    <>
    <div className= 'hero-container'
            
            style={{
            backgroundImage: 'url('+hcbgImage+')',
        
            backgroundSize: "cover",
            height: "50vh",
            color: '#f5f5f5',
          backgroundPosition: "center",
          
            }}>
              <h2>EVENTS OF CALENDAR</h2>
            </div>
            <section>
            <div className="maincontainer">
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        eventClick={
          function(arg){
            alert(arg.event.title)
            alert(arg.event.start)
          }
        }
        
        events={[
         
          { title: 'Lori', date: '2022-01-13' },
          { title: 'Makar Sakranti', date: '2022-01-14' },
          { title: 'Republic Day', date: '2022-01-26' },
          { title: 'Vasant Panchmi', date: '2022-02-22' },
          { title: 'Mahashivratri', date: '2022-03-01' },
          { title: 'Holika dahan', date: '2022-03-17' },
          { title: 'Mahavir Jayanti', date: '2022-04-14' },
          { title: 'Eid', date: '2022-05-03' },
          { title: 'Budha Purnima', date: '2022-05-16' },
          { title: 'Eid', date: '2022-07-10' },
          { title: 'Raksha Bandhan', date: '2022-08-11' },
          { title: 'Independence Day', date: '2022-08-15' },
          { title: 'Janamashtmi', date: '2022-08-18' },
          { title: 'Ganesh Chaturthi', date: '2022-08-31' },
          { title: 'Mahatma Gandhi Jayanti', date: '2022-10-02' },
          { title: 'Maha navmi', date: '2022-10-04' },
          { title: 'Dussehra', date: '2022-10-05' },
          { title: 'Diwali', date: '2022-10-24' },
          { title: 'Govardhan pooja', date: '2022-10-26' },
          { title: 'Guru Nayak Jayanti', date: '2022-11-08' },
          { title: 'Children Day', date: '2022-11-14' },
          { title: 'Christmas', date: '2022-12-25' },
          { title: 'New year', date: '2021-01-01' },
          { title: 'Lohri', date: '2021-01-13' },
          { title: 'Makar Sakaranti', date: '2021-01-01' },
          { title: 'Guru Govind Jayanti', date: '2021-01-20' },
          { title: 'Repulic Day', date: '2021-01-26' },
          { title: 'Vasant Panchmi', date: '2021-02-16' },
          { title: 'Guru Ravidas Jayanti', date: '2021-02-27' },
          { title: 'Mahashivratri', date: '2021-03-11' },
          { title: 'Holika Dahan', date: '2021-03-28' },
          { title: 'Holi', date: '2021-03-29' },
          { title: 'Ambedkar Jayanti', date: '2021-04-14' },
          { title: 'Ram Navami', date: '2021-04-21' },
          { title: 'Mahavir Jayanti', date: '2021-04-25' },
          { title: 'Eid-ul-fitar', date: '2021-05-14' },
          { title: 'Buddha purnima', date: '2021-05-26' },
          { title: 'Independence Day', date: '2021-08-15' },
          { title: 'Raksha Bandhan', date: '2021-08-22' },
          { title: 'Janamashatmi', date: '2021-08-30' },
          { title: 'Ganesh Chaturthi', date: '2021-09-10' },
          { title: 'Mahatma gandhi jyanati', date: '2021-10-02' },
          { title: 'Maha Navmi', date: '2021-10-14'},
          { title: 'Dussehra', date: '2021-10-15'},
          { title: 'Eid', date: '2021-10-19'},
          { title: 'Diwali', date: '2021-11-04'},
          { title: 'Govardhan puja', date: '2021-11-05'},
          { title: 'Bhai dooj', date: '2021-11-06'},
          { title: 'Children Day', date: '2021-11-16'},
          { title: 'Guru Nayak Jayanti', date: '2021-11-19'},
          { title: 'Christmas', date: '2021-12-25'}
        
          
        ]}
      />
</div>
</section>
          </>
          
            )
          };
        }
          
  
export default Calendar