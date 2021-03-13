import React from 'react';

function Footer() {

    return (
        <footer className="bg-light text-center text-lg-start">
        <div className="container p-4">
            <div className="row">
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Rubber Ducky Parking</h5>
    
                    <p>
                    </p>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Development</h5>
    
                    <ul className="list-unstyled mb-0">
                        <li>
                            <a href="https://github.com/Bryson14/RubberDuckyParking" target="_blank" className="text-dark">Source Code</a>
                        </li>
                        <li>
                            <a href="https://github.com/Bryson14" target="_blank" className="text-dark">Bryson</a>
                        </li>
                        <li>
                            <a href="https://github.com/drewrasm" target="_blank" className="text-dark">Andrew</a>
                        </li>
                        <li>
                            <a href="https://github.com/Degin88" target="_blank" className="text-dark">Brandon </a>
                        </li>
                        <li>
                            <a href="https://github.com/duskkiel" target="_blank" className="text-dark">Peyton </a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase mb-0">Links</h5>
    
                    <ul className="list-unstyled">
                        <li>
                            {/* <a href="/host/" className="text-dark">Become a Host</a> */}
                        </li>
                        <li>
                            {/* <a href="mail:support@rubberducky.com" target="_blank" className="text-dark">Contact</a> */}
                        </li>
                        <li>
                            {/* <a href="/user/" className="text-dark">View Profile</a> */}
                        </li>
                        <li>
                            {/* <a href="/" className="text-dark">Cancellation Options</a> */}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    
        <div className="text-center p-3 footer-thing">
            © 2021 Copyright:
            <a className="text-dark" href="https://mdbootstrap.com/">rubberduckyparking.com</a>
        </div>
    </footer>
    )
}

export default Footer;