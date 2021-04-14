import {useState, useEffect} from "react";
import api from '../auth/api';
import {useHistory} from 'react-router-dom';

const DetailCard = ({ key, id, parking_size, price,
                        location, notes, actual_width,
                        actual_length, owner}) => {

    const history = useHistory();
    const [startTime, setStartTime] = useState(new Date().getTime());
    const [endTime, setEndTime] = useState(0);
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
        let end = new Date(startTime);
        end.addHours(durationHour);
        end.addMinutes(durationMinute);
        setEndTime(end.getTime());
        setCost(Math.round(((durationHour + durationMinute / 60 ) * Number(price) * 10))/10);
    }

    const handleHour = (e) => {
        let curr_val = Number(e.target.value);
        if (isNaN(curr_val)) {
            e.target.value = "";
            setDurationHour(0);
        }
        const maxTime = 24*7;
        if (curr_val > maxTime) {
            e.target.value = maxTime.toString();
            setDurationHour(maxTime);
            alert(`Can only rent for a maximum of ${maxTime} hours.`);
        } else if (curr_val < 0) {
            e.target.value = "";
            setDurationHour(0);
        } else {
            e.target.value = Math.round(curr_val);
            setDurationHour(Math.round(curr_val));
        }
    }

    const handleMinute = (e) => {
        let curr_val = Number(e.target.value);
        if (isNaN(curr_val)) {
            e.target.value = "";
            setDurationMinute(0);
        }
        if (curr_val > 59) {
            e.target.value = "59";
            setDurationMinute(59);
        } else if (curr_val < 0) {
            e.target.value = "";
            setDurationMinute(0);
        } else {
            e.target.value = Math.round(curr_val);
            setDurationMinute(Math.round(curr_val));
        }
    }

    const handleStartDay = (e) => {
        let tempDate = new Date(e.target.value);
        let startDate = new Date(startTime);
        startDate.setFullYear(tempDate.getFullYear());
        startDate.setMonth(tempDate.getMonth());
        startDate.setDate(tempDate.getDate());
        setStartTime(startDate.getTime());
    }

    const handleStartTime = (e) => {
        let temp = e.target.value.split(":");
        let startDate = new Date(startTime);
        startDate.setHours(temp[0]);
        startDate.setMinutes(temp[1]);
        startDate.setSeconds(0);
        setStartTime(startDate.getTime());
    }

    const handleButton = (e) => {
        let start = new Date(startTime);
        let end = new Date(endTime);
        if (endTime !== 0 &&
        startTime !== 0 &&
        end > start) {
            let data = {
                "parking_spot": id,
                "start_date" : start.toISOString(),
                "end_date": end.toISOString()
            }
            api.post(/reservation/, data)
                .then(r => {
                    let id = r.data.id;
                    alert("i got r pk of the reservation back: ", r);
                    history.push(`reservation/${id}`)
                }).catch((err) => {
                    alert("Something went wrong creating reservation!\nPlease try again.");
            });

        } else {
            alert("Please fill in the form for duration and start time at the bottom of the page.");
        }
    }

    useEffect(() => {
        calcCost(durationHour, durationMinute);
    })

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

            </div>
            <div>
                <p><b>Cost:</b> $ {price} / hr</p>
                <p><b>Description:</b> {location.description}</p>
                <p><b>Address:</b> <i>{location.address}, {location.city}</i></p>
                <p><b>Notes:</b> {notes}</p>
                <p><b>Actual Width:</b> {actual_width}ft  <b>Actual Length:</b> {actual_length}ft</p>
            </div>
            <div className="text-right">
                <p><b><i>This spot is hosted by {owner.user.first_name}</i></b></p>
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
                <br/>
                <div className="row">
                    <div className="col-sm-12 col-lg-6">
                        <p><b>From:</b> {Date(startTime).toLocaleString()}</p>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <p><b>To:</b> {Date(endTime).toLocaleString()} </p>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                        <p><b>Total time:</b>{durationHour}hr {durationMinute}min</p>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                        <p><b>Total cost:</b> ${cost}</p>
                    </div>
                </div>
                <div className="input-group">
                    <button type="button" className="btn btn-primary btn-lg btn-block"
                            onClick={handleButton}>Make Reservation</button>
                </div>



            </div>
        </div>
    )
}

export default DetailCard;