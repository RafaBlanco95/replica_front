import React from 'react';
import moment from 'moment';



 
    const StudentInternshipDetail = ({ startDate, endDate }) => {
      const start = moment(startDate);
      const end = moment(endDate);
      const days = end.diff(start, 'days') + 1;
    
      const renderCalendar = () => {
        const calendar = [];
        let currentDate = start;
    
        for (let i = 0; i < days; i++) {
          const day = (
            <div key={i} className="col day">
              {currentDate.format('D')}
            </div>
          );
          calendar.push(day);
          currentDate = currentDate.add(1, 'day');
        }
    
        return calendar;
      };
    
      return (
        <div className="container">

           
          <div className="row">
            <div className="col">
              <h2>Calendario</h2>
              <div className="row">
                <div className="col">
                  <strong>Domingo</strong>
                </div>
                <div className="col">
                  <strong>Lunes</strong>
                </div>
                <div className="col">
                  <strong>Martes</strong>
                </div>
                <div className="col">
                  <strong>Miércoles</strong>
                </div>
                <div className="col">
                  <strong>Jueves</strong>
                </div>
                <div className="col">
                  <strong>Viernes</strong>
                </div>
                <div className="col">
                  <strong>Sábado</strong>
                </div>
              </div>
    
              <div className="row">
                {renderCalendar()}
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default StudentInternshipDetail;
    