import React from "react";

import Facebook from "../../assets/social/facebook-logo.png"
import Linkedin from "../../assets/social/linkedin.png"
import Twitter from "../../assets/social/twitter.png"
import Instagram from "../../assets/social/instagram.png"



import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="email">
        <h4 className="touch">Want to get in touch ?</h4>
        <h4 className="hear"> I'd love to hear from you !</h4>
        <a href="socialemail">
          {" "}
          <p>ruchitsawalkar@gmail.com</p>{" "}
        </a>
      </div>

      <div className="social">
        <p className="learn"> Learn more about me </p>
        <div className="footicon">

            {/* //facebook */}

            <a href="https://www.linkedin.com/in/james-thomas007/" >
            <img
              alt="linkedin-icon"
              className="socialicon"
              src= {Instagram}
            />
          </a>

          {/* //linkedin */}

        
          <a href="https://www.linkedin.com/in/james-thomas007/">
            <img
              alt="linkedin-icon"
              className="socialicon"
              src= {Linkedin}
            />
          </a>

        
          <a href="https://www.linkedin.com/in/james-thomas007/">
            <img
              alt="linkedin-icon"
              className="socialicon"
              src= {Twitter}
            />
          </a>
          {/* <a href="https://www.linkedin.com/in/james-thomas007/">
            <img
              alt="linkedin-icon"
              class="sidebar-icon"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjBxcWEjESa9+RAAACr0lEQVRo3u2ZsWsUQRTG35vdM3qoVYwogkhAkShqIoqgCBEiaLCwsIlCxKCooGihf4BWoiAWYhoRsQkIQTCYIkGQJGohCAqKWpwaEzUQMVFjbt/sZ+El3F12xty5N2n2TbXzzXvf73bmZuf2mKYDy/U2Xorx8FXqGYPcRnar9EooyLWMtEE5tNenRabNp9o9LHRkL4dnmE8huLgLqJExAwDkiAOA4ILRHpIBV9pfqb0WdWXQUHEA1FrltRUHoHk2mRdVHmDYJmN4toXKB+i3qNrrn3WlcgFw26J289dKAxCRdBu+hL8n6xzYE6Fa3kXYa2lxYk9EhBrpKbIfkWZn9n9DmqVDBmVSRuWxPo/Fju2TmLuo0NMOtXon6riGqoiI6DuG+KPXw5lIAKTD41g9QxhU7cXbkOyn3ZF+T/2b09YLwlY6gXWRn/Y53VHXeaKoW+5Gb0TBaxQ8qFAl2nRywJpcrX2SsZwvIJAPcrAYYMI0OFtfAJA2l802EEEFV/IOtrZ2A/5UVQWm+cYFki5l3nU7n53lmjqmu1CVAyjFwmp/htpKGN6kr8UKoFpxucSUo9JKRMRgHZrGYEeqL+8qrX/Gg5uLEa+Wx13+/imOJeHJGNdAOYFT4DkFoGVB/dwCkLfH//8ihYE36lbY5w8F1d5GHKDGf4xeT2DzjhVsLxic/ucOJ/ocUvk5wS4ZsmY8inMKQC3eJQ7yu1K93hb6ZMlZESMArvodM3t5EIcsSaviAxjzL0YLqYf0xJwWH0AXj5okfuAAgAfMGl46AMBni/bNAQBlLZp2AVBmJAAJQAKQACQACUACkAAkAAmAYtCYScQPJ3cA7QZtIPWi4FooMBfCL7Pmj5DpPdQXJiIKmtSG4snAe6+TJwv7spu9xug3gXjrddr+8g+a1KaoNHX/Dy60cazY7dCHAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA3LTIzVDIwOjE4OjQ5KzAyOjAw6zRqSgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNy0yM1QyMDoxODo0OSswMjowMJpp0vYAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"
            />
          </a> */}
        </div>
      </div>
      {/* <div>
               <h4>Learn more about:</h4>
                
            </div> */}
    </div>
  );
};

export default Footer;
