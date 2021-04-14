const DetailCard = ({id ,data}) => {

    debugger;

    function rentClicked () {
        let sent = false;
        let resID = 123;
        console.log("the rent button is clicked");
        console.log("Making is connfirmation in the database")
        sent = true;
        if (sent) {
            window.location.href = `/reservation/${resID}`;
        } else {
            alert("Something went wrong making the reservation! Try Again.")
        }

    }

    return (
        <div className="text-left container parking-card m-3">
            <div className="row">
                <div className="col-10">
                    <p className=""><i>type</i></p>
                </div>
                <div className="col-2">
                    <img className="m-2" src="../../public/red_heart.svg" alt=""/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 col-sm-12">
                    <h3 className="">title</h3>
                    <p className="">information</p>
                </div>
                <div className="col-lg-2 col-sm-6">
                    <p><b>$ 10 / hr</b></p>
                </div>
                <div className="col-lg-2 col-sm-6 ">
                    <button onClick={rentClicked}>RENT ME!</button>
                </div>
            </div>


        </div>
    )
}

export default DetailCard;