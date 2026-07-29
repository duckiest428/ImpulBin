import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-links">
                <div className="footer-column">
                    <h3>LATEST SQUADS</h3>
                    <ul>
                        <li><Link to="/">Futties Icon and Heroes 1</Link></li>
                        <li><Link to="/">Futties Team 1</Link></li>
                        <li><Link to="/">Summer Stars Winners</Link></li>
                        <li><Link to="/">Summer Stars</Link></li>
                        <li><Link to="/">Phenoms</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>USEFUL LINKS</h3>
                    <ul>
                        <li><Link to="/squad-builder">Squad Builder</Link></li>
                        <li><Link to="/">SBC</Link></li>
                        <li><Link to="/players">FIFA 17 Players</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>This site was created under license from Electronic Arts Inc. Trademarks are property of their respective owners. Game materials copyright Electronic Arts Inc. and/or its licensors. Electronic Arts Inc. and its licensors have not endorsed and are not responsible for the operations of or content on this site.</p>
                <div className="footer-bottom-links">
                    <Link to="/">TOS</Link>
                    <Link to="/">Privacy Policy</Link>
                    <Link to="/">Cookie Policy</Link>
                </div>
                <p>© 2026</p>
                <br/>
            </div>
        </footer>
    );
}

