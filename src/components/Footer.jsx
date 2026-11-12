export default function Footer({year}) {
    return (
        <footer className="fg-2 m-9">
            <div id="footer">
            <div className="container">
                <ul id="company-footer">
                    <li>
                        <h4>Contact me</h4>
                    </li>
                    <li>
                       <p>Your Name</p>
                    </li>
                    <li>
                       <p>Your Professional Title</p>
                    </li>
                    <li>
                        <a aria-label="Help" className="footer-link" href="#contact-us">your@email.com</a>
                    </li>
                    <li>
                        <a aria-label="News" className="footer-link" href="#">www.yourwebsite.com</a>
                    </li>
                </ul>
            </div>
            <div className="container">
                <ul id="follow-footer">
                    <li>
                        <h4>Follow Me</h4>
                    </li>
                    <li>
                        <a aria-label="Facebook" href="https://www.facebook.com/" className="footer-link">Facebook</a>
                    </li>
                    <li>
                        <a aria-label="Twitter" href="https://www.x.com/" className="footer-link">Twitter</a>
                    </li>
                    <li>
                        <a aria-label="Instagram" href="https://www.instagram.com/" className="footer-link">Instagram</a>
                    </li>
                    <li>
                        <a aria-label="Pinterest" href="https://www.pinterest.com/" className="footer-link">Pinterest</a>
                    </li>
                </ul>
                
                
                
            </div>
        </div>
        <div className="copy p-3">
            &copy; {year} Portfli. All rights reserved.
        </div>
        
        
        
    </footer>
    )
}