import React, {useState, useEffect} from 'react'


export default (props) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const today = new Date()
    const [date, setDate] = useState(today);
    const [time, setTime] = useState("");

    function addDays(startDate, days) {
        var newDate = new Date(date);
        newDate.setDate(startDate.getDate() + days);
        return newDate;
    }

    const threeWeeks = (startDate) => {
        const dates = []
        for (let i = 0; i < 21; i++) {
            dates.push(addDays(startDate, i))
        }
        return dates
    }

    const assignActive = (id) => {
        let truth = (date.getTime() === calDates[id].getTime())
        let value = truth ? "active" : ""
        console.log(`${id}: ${value}`)
        return (value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setTimeForm({ start_date: today })
        props.setFormStep(4)
    }

    const calendarStart = addDays(today, (-1 * today.getDay()))
    const calDates = threeWeeks(calendarStart)
    
    return (
        <>
            <div className="select-time-form">
                <h1>Choose your project start date and time:</h1>
                <div className="calendar-columns">
                    <div className="datetime-section">
                        <div className="artist-name">
                            <img width="20px" src="https://www.careercontessa.com/uploadedImages/Library/career-contessa-anon-avatar.jpg" alt=""/>
                            <h3>Artist's Availability</h3>
                        </div>
                        <div className="calendar">
                            <h4>{months[date.getMonth()]} {date.getFullYear()}</h4>
                            <ul className="week days">
                                <li>Sun</li>
                                <li>Mon</li>
                                <li>Tue</li>
                                <li>Wed</li>
                                <li>Thu</li>
                                <li>Fri</li>
                                <li>Sat</li>
                            </ul>
                            <ul className="week dates">
                                <li id={0} onClick={(e) => setDate(calDates[0])} className={assignActive(0)}>{`${calDates[0].getDate()}`}</li>
                                <li id={1} onClick={(e) => setDate(calDates[1])} className={assignActive(1)}>{`${calDates[1].getDate()}`}</li>
                                <li id={2} onClick={(e) => setDate(calDates[2])} className={assignActive(2)}>{`${calDates[2].getDate()}`}</li>
                                <li id={3} onClick={(e) => setDate(calDates[3])} className={assignActive(3)}>{`${calDates[3].getDate()}`}</li>
                                <li id={4} onClick={(e) => setDate(calDates[4])} className={assignActive(4)}>{`${calDates[4].getDate()}`}</li>
                                <li id={5} onClick={(e) => setDate(calDates[5])} className={assignActive(5)}>{`${calDates[5].getDate()}`}</li>
                                <li id={6} onClick={(e) => setDate(calDates[6])} className={assignActive(6)}>{`${calDates[6].getDate()}`}</li>
                            </ul>
                            <ul className="week dates">
                                <li id={7} onClick={(e) => setDate(calDates[7])} className={assignActive(7)}>{`${calDates[7].getDate()}`}</li>
                                <li id={8} onClick={(e) => setDate(calDates[8])} className={assignActive(8)}>{`${calDates[8].getDate()}`}</li>
                                <li id={9} onClick={(e) => setDate(calDates[9])} className={assignActive(9)}>{`${calDates[9].getDate()}`}</li>
                                <li id={10} onClick={(e) => setDate(calDates[10])} className={assignActive(10)}>{`${calDates[10].getDate()}`}</li>
                                <li id={11} onClick={(e) => setDate(calDates[11])} className={assignActive(11)}>{`${calDates[11].getDate()}`}</li>
                                <li id={12} onClick={(e) => setDate(calDates[12])} className={assignActive(12)}>{`${calDates[12].getDate()}`}</li>
                                <li id={13} onClick={(e) => setDate(calDates[13])} className={assignActive(13)}>{`${calDates[13].getDate()}`}</li>
                            </ul>
                            <ul className="week dates">
                                <li id={14} onClick={(e) => setDate(calDates[14])} className={assignActive(14)}>{`${calDates[14].getDate()}`}</li>
                                <li id={15} onClick={(e) => setDate(calDates[15])} className={assignActive(15)}>{`${calDates[15].getDate()}`}</li>
                                <li id={16} onClick={(e) => setDate(calDates[16])} className={assignActive(16)}>{`${calDates[16].getDate()}`}</li>
                                <li id={17} onClick={(e) => setDate(calDates[17])} className={assignActive(17)}>{`${calDates[17].getDate()}`}</li>
                                <li id={18} onClick={(e) => setDate(calDates[18])} className={assignActive(18)}>{`${calDates[18].getDate()}`}</li>
                                <li id={19} onClick={(e) => setDate(calDates[19])} className={assignActive(19)}>{`${calDates[19].getDate()}`}</li>
                                <li id={20} onClick={(e) => setDate(calDates[20])} className={assignActive(20)}>{`${calDates[20].getDate()}`}</li>
                            </ul>
                        </div>
                        <div className="select-time">
                            <select value={time} onChange={(e) => setTime(e.target.value)}>
                                <option value="" disabled>Choose a Time</option>
                                <option value="9:00am">9:00am</option>
                                <option value="10:00am">10:00am</option>
                                <option value="11:00am">11:00am</option>
                                <option value="12:00am">12:00am</option>
                                <option value="1:00pm">1:00pm</option>
                                <option value="2:00pm">2:00pm</option>
                                <option value="3:00pm">3:00pm</option>
                                <option value="4:00pm">4:00pm</option>
                                <option value="5:00pm">5:00pm</option>
                                <option value="6:00pm">6:00pm</option>
                            </select>
                        </div>
                    </div>
                    <div className="confirm-time">
                        <h1>Request for:</h1>
                        <h2>{months[date.getMonth()]} {date.getDate()} {time}</h2>
                        <button onClick={handleSubmit}>Select & Continue</button>
                        <p>Next, confirm your details to get connected with your artist volunteer!</p>
                    </div>
                </div>
            </div>
        </>
    )
}