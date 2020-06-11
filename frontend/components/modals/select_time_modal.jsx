import React, {useState, useEffect} from 'react'


export default (props) => {

    function addDays(startDate, days) {
        var newDate = new Date();
        newDate.setDate(startDate.getDate() + days);
        return newDate;
    }

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const today = new Date()
    const tomorrow = addDays(today, 1)
    const [date, setDate] = useState(tomorrow);
    const [time, setTime] = useState("09:00");

    const timeToString = () => {
        let hours = parseInt(time.slice(0,2), 10)
        if (hours > 12){
            return `${hours % 12}:00pm`
        } else if (hours < 10) {
            return `${time.slice(1,2)}:00am`
        } else {
            return `${hours}:00am`
        }
    }

    const threeWeeks = (startDate) => {
        const dates = []
        for (let i = 0; i < 21; i++) {
            dates.push(addDays(startDate, i))
        }
        return dates
    }

    const assignActive = (id) => {
        if (calDates[id].getDate() === date.getDate()) {
            return "active";
        } else if (calDates[id].getDate() < tomorrow.getDate()) {
            return "unavailable";
        } else {
            return "";
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const dateTime = new Date(`${date.toDateString()} ${time}`)
        props.setTimeForm({ start_date: dateTime })
        props.setFormStep(4)
    }
    
    const calendarStart = addDays(tomorrow, (-1 * tomorrow.getDay()))
    const calDates = threeWeeks(calendarStart)

    const handleClick = (e) => {
        let newDate = calDates[e.target.id]
        if (newDate >= tomorrow){
            setDate(newDate)
        }
    }

    const artist = props.users[props.taskForm.select_artist.artist_id] || {first_name: "", last_name: "", photo_url: ""}

    return (
        <>
            <div className="select-time-form">
                <h1>Choose your project start date and time:</h1>
                <div className="calendar-columns">
                    <div className="datetime-section">
                        <div className="artist-name">
                            <img width="20px" src={artist.photo_url} alt=""/>
                        <h3>{`${artist.first_name} ${artist.last_name.slice(0, 1)}.`}</h3>
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
                                <li id={0} onClick={handleClick} className={assignActive(0)}>{`${calDates[0].getDate()}`}</li>
                                <li id={1} onClick={handleClick} className={assignActive(1)}>{`${calDates[1].getDate()}`}</li>
                                <li id={2} onClick={handleClick} className={assignActive(2)}>{`${calDates[2].getDate()}`}</li>
                                <li id={3} onClick={handleClick} className={assignActive(3)}>{`${calDates[3].getDate()}`}</li>
                                <li id={4} onClick={handleClick} className={assignActive(4)}>{`${calDates[4].getDate()}`}</li>
                                <li id={5} onClick={handleClick} className={assignActive(5)}>{`${calDates[5].getDate()}`}</li>
                                <li id={6} onClick={handleClick} className={assignActive(6)}>{`${calDates[6].getDate()}`}</li>
                            </ul>
                            <ul className="week dates">
                                <li id={7} onClick={handleClick} className={assignActive(7)}>{`${calDates[7].getDate()}`}</li>
                                <li id={8} onClick={handleClick} className={assignActive(8)}>{`${calDates[8].getDate()}`}</li>
                                <li id={9} onClick={handleClick} className={assignActive(9)}>{`${calDates[9].getDate()}`}</li>
                                <li id={10} onClick={handleClick} className={assignActive(10)}>{`${calDates[10].getDate()}`}</li>
                                <li id={11} onClick={handleClick} className={assignActive(11)}>{`${calDates[11].getDate()}`}</li>
                                <li id={12} onClick={handleClick} className={assignActive(12)}>{`${calDates[12].getDate()}`}</li>
                                <li id={13} onClick={handleClick} className={assignActive(13)}>{`${calDates[13].getDate()}`}</li>
                            </ul>
                            <ul className="week dates">
                                <li id={14} onClick={handleClick} className={assignActive(14)}>{`${calDates[14].getDate()}`}</li>
                                <li id={15} onClick={handleClick} className={assignActive(15)}>{`${calDates[15].getDate()}`}</li>
                                <li id={16} onClick={handleClick} className={assignActive(16)}>{`${calDates[16].getDate()}`}</li>
                                <li id={17} onClick={handleClick} className={assignActive(17)}>{`${calDates[17].getDate()}`}</li>
                                <li id={18} onClick={handleClick} className={assignActive(18)}>{`${calDates[18].getDate()}`}</li>
                                <li id={19} onClick={handleClick} className={assignActive(19)}>{`${calDates[19].getDate()}`}</li>
                                <li id={20} onClick={handleClick} className={assignActive(20)}>{`${calDates[20].getDate()}`}</li>
                            </ul>
                        </div>
                        <div className="select-time">
                            <select value={time} onChange={(e) => setTime(e.target.value)}>
                                <option value="09:00">9:00am</option>
                                <option value="10:00">10:00am</option>
                                <option value="11:00">11:00am</option>
                                <option value="12:00">12:00pm</option>
                                <option value="13:00">1:00pm</option>
                                <option value="14:00">2:00pm</option>
                                <option value="15:00">3:00pm</option>
                                <option value="16:00">4:00pm</option>
                                <option value="17:00">5:00pm</option>
                                <option value="18:00">6:00pm</option>
                            </select>
                        </div>
                    </div>
                    <div className="confirm-time">
                        <h1>Request for:</h1>
                        <h2>{months[date.getMonth()]} {date.getDate()}, {timeToString()}</h2>
                        <button onClick={handleSubmit}>Select & Continue</button>
                        <p>Next, confirm your details to get connected with your artist volunteer!</p>
                    </div>
                </div>
            </div>
        </>
    )
}