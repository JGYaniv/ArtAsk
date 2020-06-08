import React, {useState} from 'react'


export default (props) => {

    const today = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const dateNum = (today.getDate());
    const month = months[today.getMonth()];
    const year = today.getFullYear()
    const weekDay = weekDays[today.getDay()];

    const [date, setDate] = useState(dateNum);
    const [time, setTime] = useState("");
    
    const calculateDate = (id) => dateNum + id;
    const assignActive = (id) => (date === calculateDate(id) ? "active" : "");
    const handleSubmit = (e) => {
        e.preventDefault();
        props.setTimeForm({start_date: today })
        props.setFormStep(4)
    }

    return (
        <>
            <div className="select-time-form">
                <h1>Choose your project start date and time:</h1>
                <div className="calendar-columns">
                    <div className="datetime-section">
                        <div className="artist-name">
                            <img width="20px" src="https://www.careercontessa.com/uploadedImages/Library/career-contessa-anon-avatar.jpg" alt=""/>
                            <h3>Artist's Avail</h3>
                        </div>
                        <div className="calendar">
                            <h4>{month} {year}</h4>
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
                                <li id="0" onClick={(e) => setDate(calculateDate(0))} className={assignActive(0)}>{calculateDate(0)}</li>
                                <li id="1" onClick={(e) => setDate(calculateDate(1))} className={assignActive(1)}>{calculateDate(1)}</li>
                                <li id="2" onClick={(e) => setDate(calculateDate(2))} className={assignActive(2)}>{calculateDate(2)}</li>
                                <li id="3" onClick={(e) => setDate(calculateDate(3))} className={assignActive(3)}>{calculateDate(3)}</li>
                                <li id="4" onClick={(e) => setDate(calculateDate(4))} className={assignActive(4)}>{calculateDate(4)}</li>
                                <li id="5" onClick={(e) => setDate(calculateDate(5))} className={assignActive(5)}>{calculateDate(5)}</li>
                                <li id="6" onClick={(e) => setDate(calculateDate(6))} className={assignActive(6)}>{calculateDate(6)}</li>
                            </ul>
                            <ul className="week dates">
                                <li id="8" onClick={() => setDate(8)} className={assignActive(8)}>8</li>
                                <li id="9" onClick={() => setDate(9)} className={assignActive(9)}>9</li>
                                <li id="10" onClick={() => setDate(10)} className={assignActive(10)}>10</li>
                                <li id="11" onClick={() => setDate(11)} className={assignActive(11)}>11</li>
                                <li id="12" onClick={() => setDate(12)} className={assignActive(12)}>12</li>
                                <li id="13" onClick={() => setDate(13)} className={assignActive(13)}>13</li>
                                <li id="14" onClick={() => setDate(14)} className={assignActive(14)}>14</li>
                            </ul>
                            <ul className="week dates">
                                <li id="15" onClick={() => setDate(15)} className={assignActive(15)}>15</li>
                                <li id="16" onClick={() => setDate(16)} className={assignActive(16)}>16</li>
                                <li id="17" onClick={() => setDate(17)} className={assignActive(17)}>17</li>
                                <li id="18" onClick={() => setDate(18)} className={assignActive(18)}>18</li>
                                <li id="19" onClick={() => setDate(19)} className={assignActive(19)}>19</li>
                                <li id="20" onClick={() => setDate(20)} className={assignActive(20)}>20</li>
                                <li id="21" onClick={() => setDate(21)} className={assignActive(21)}>21</li>
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
                        <h2>{month} {date} {time}</h2>
                        <button onClick={handleSubmit}>Select & Continue</button>
                        <p>Next, confirm your details to get connected with your artist volunteer!</p>
                    </div>
                </div>
            </div>
        </>
    )
}