import React from 'react';

function Footer() {

    const footer_info = {
        heading: "Rubber Ducky Parking",
        headingText: "Lets modernize parking together!\nStop settling for the parking shuffle. Get to your location " +
            "and parking in confidence and style!",
        links: [
            {
                id:1,
                text:"Source Code",
                link:"https://github.com/Bryson14/RubberDuckyParking/"
            },
            {
                id:2,
                text:"Creator - Andrew",
                link:"https://github.com/drewrasm"
            },
            {
                id:3,
                text:"Creator - Bryson",
                link:"https://github.com/Bryson14"
            },
            {
                id:4,
                text:"Creator - Peyton",
                link:"https://github.com/duskkiel"
            },
            {
                id:5,
                text:"Creator - Brandon",
                link:"https://github.com/Degin88"
            }

        ],
        random: [
            {
                id:1,
                text:"Best Spotify Library Playlist",
                link:"https://open.spotify.com/playlist/45pd2fsIEdVzy4fa8p85Su"
            },
            {
                id:2,
                text:"Rubber Duckies FTW",
                link:"https://en.wikipedia.org/wiki/Rubber_duck_debugging"
            },
            {
                id:3,
                text:"Get Started with ReactJS",
                link:"https://www.youtube.com/watch?v=w7ejDZ8SWv8"
            },
            {
                id:4,
                text:"Get Started with Django Rest Framework",
                link:"https://www.youtube.com/playlist?list=PLgCYzUzKIBE9Pi8wtx8g55fExDAPXBsbV"
            }
        ]

    }

    return (
        <div className="mt-5 pt-5 pb-5 footer">
            <div className="container">
                <hr/>
                <div className="row">
                    <div className="col-lg-5 col-md-12 col-xs-12 about-company">
                        <h2>{footer_info.heading}</h2>
                        <p className="pr-5 text-black-50">{footer_info.headingText}</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-xs-12 links">
                        <h4 className="mt-lg-0 mt-sm-3">Links</h4>
                        <ul className="m-0 p-0">
                            {footer_info.links.map((s) => (
                                <li key={s.id}><a href={s.link} target="_blank" rel="noreferrer">{s.text}</a></li>
                                ))}

                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 col-xs-12">
                        <h4 className="mt-lg-0 mt-sm-3">Random</h4>
                        <ul className="m-0 p-0">
                            {footer_info.random.map((s) => (
                                <li key={s.id}><a href={s.link} target="_blank" rel="noreferrer">{s.text}</a></li>
                            ))}

                        </ul>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col copyright">
                        <p className=""><small className="text-white-50">RubberDuckyParking © 2021. All Rights Reserved.</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;