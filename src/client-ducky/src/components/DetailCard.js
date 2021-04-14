import {useState} from "react";
import api from '../auth/api';
import {useHistory} from 'react-router-dom';

const DetailCard = ({ key, id, parking_size, price,
                        location, notes, actual_width,
                        actual_length, owner}) => {

    const history = useHistory();

    const [startTime, setStartTime] = useState(new Date().getTime());
    const [endTime, setEndTime] = useState(new Date().getTime());
    const [durationHour, setDurationHour] = useState(0);
    const [durationMinute, setDurationMinute] = useState(0);
    const [cost, setCost] = useState(0);


    Date.prototype.addHours = function(h) {
        this.setTime(this.getTime() + (h*60*60*1000));
        return this;
    }

    Date.prototype.addMinutes = function(m) {
        this.setTime(this.getTime() + (m*60*1000));
        return this;
    }

    const calcCost = (hours, minutes) => {
        let end = new Date(startTime.valueOf());
        end.addHours(durationHour);
        end.addMinutes(durationMinute);
        setEndTime(end.getTime());
        setCost(Math.round((durationHour + durationMinute / 60 ) * Number(price)));
    }

    const handleHour = (e) => {
        let curr_val = Number(e.target.value);
        if (isNaN(curr_val)) {
            e.target.value = "";
            setDurationHour(0);
            calcCost(0, durationMinute);
        }
        if (curr_val > 24) {
            e.target.value = "24";
            setDurationHour(24);
            alert("Can only rent for a maximum of 24 hours.");
            calcCost(24, durationMinute);
        } else if (curr_val < 0) {
            e.target.value = "";
            setDurationHour(0);
            calcCost(0, durationMinute);
        } else {
            e.target.value = Math.round(curr_val);
            setDurationHour(Math.round(curr_val));
            calcCost(Math.round(curr_val), durationMinute);
        }
    }

    const handleMinute = (e) => {
        let curr_val = Number(e.target.value);
        if (isNaN(curr_val)) {
            e.target.value = "";
            setDurationMinute(0);
            calcCost(durationHour, 0);
        }
        if (curr_val > 59) {
            e.target.value = "59";
            setDurationMinute(59);
            calcCost(durationHour, 59);
        } else if (curr_val < 0) {
            e.target.value = "";
            setDurationMinute(0);
            calcCost(durationHour, 0);
        } else {
            e.target.value = Math.round(curr_val);
            setDurationMinute(Math.round(curr_val));
            calcCost(durationHour, Math.round(curr_val));
        }
        calcCost();
    }

    const handleStartDay = (e) => {
        debugger;
        let tempDate = new Date(e.target.value);
        let startDate = new Date(startTime);
        startDate.setFullYear(tempDate.getFullYear());
        startDate.setMonth(tempDate.getMonth());
        startDate.setDate(tempDate.getDate());
        setStartTime(startDate.getTime());
    }

    const handleStartTime = (e) => {
        debugger;
        let temp = e.target.value.split(":");
        let startDate = new Date(startTime);
        startDate.setHours(temp[0]);
        startDate.setMinutes(temp[1]);
        startDate.setSeconds(0);
        setStartTime(startDate.getTime());
    }

    const handleButton = (e) => {
        debugger;
        let start = new Date(startTime);
        let end = new Date(endTime);
        if (endTime !== 0 &&
        startTime !== 0 &&
        endTime > startTime) {
            let data = {
                "parking_spot": id,
                "start_date" : start.toISOString(),
                "end_date": end.toISOString()
            }
            api.post(/reservation/, data)
                .then(r => {
                    alert("i got r pk of the reservation back: ", r);
                    history.push(`reservation/${r}`)
                });

        }
    }

    if (location === undefined || parking_size === undefined) {
        return (
            <div>
                <h2>No data yet</h2>
            </div>
        )
    }

    return (
        <div className="container-fluid">
            <div className="jumbotron">
                <h2>{location.name}</h2>
                <p>$ {price} / hr</p>
                <p>{location.description}</p>
                <p><i>{location.address}, {location.city}</i></p>
            </div>
            <div>
                <h3><i>This spot is hosted by {owner.user.first_name}</i></h3>
            </div>
            <hr/>
            <div>
                <h4>How long do you want this spot?</h4>

                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">Hours | Minutes</span>
                    </div>
                    <input id="hour_input" className="form-control" type={"number"}
                           onChange={handleHour} placeholder={"Hours"}/>
                    <input id="minute_input" className="form-control" type={"number"}
                           onChange={handleMinute} placeholder={"Minutes"}/>
                </div>
                <br/>
                <h4>When should your reservation start?</h4>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">Start time</span>
                    </div>
                    <input id="hour_input" className="form-control" type={"date"} onChange={handleStartDay}/>
                    <input id="minute_input" className="form-control" type={"time"} onChange={handleStartTime}/>
                </div>
                <div className="input-group">
                    <button type="button" className="btn btn-primary btn-lg btn-block"
                            onClick={handleButton}>Make Reservation</button>
                    <p>From {Date(startTime).toLocaleString()}</p>
                    <p>To {Date(endTime).toLocaleString()} </p>
                    <p>| {durationHour}hr {durationMinute}min</p>
                    <p>Total cost ${cost}</p>
                </div>

            </div>
        </div>
    )
}

export default DetailCard;