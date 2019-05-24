import React, { Component } from 'react';
import "../css/footer.css"

class Footer extends Component {
    render() {
        return (
            <div className="footer text-center">
                <ul className="icons-ul">
                    <li className="icons-li"><a href="https://github.com/melihozden/react-plan-app">Github</a></li>
                    <li className="icons-li"><a href="https://github.com/melihozden/react-plan-app">About us</a></li>
                    <li className="icons-li"><a href="https://github.com/melihozden/react-plan-app">Career</a></li>
                    <li className="icons-li"><a href="https://github.com/melihozden/react-plan-app">Terms</a></li>
                    <li className="icons-li"><a href="https://github.com/melihozden/react-plan-app">Privacy Policy</a></li>
                    <li className="icons-li"><a href="https://github.com/melihozden/react-plan-app">Cookies</a></li>
                    <li className="icons-li"><a href="https://github.com/melihozden/react-plan-app">Developers</a></li>
                    <li className="icons-li"><a href="https://github.com/melihozden/react-plan-app">Settings</a></li>
                    <li className="icons-li"><a href="https://github.com/melihozden/react-plan-app">© 2019 PlanApp</a></li>
                </ul>
                <div className="product">PlanApp is product of Diver Technology</div>
            </div>
        );
    }
}

export default Footer;
