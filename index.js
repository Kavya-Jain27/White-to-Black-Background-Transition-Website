import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      //transition from section 1 to section 2
      const transitionStart1 = 0.8 * windowHeight;
      const transitionEnd1 = windowHeight;
      //transition from section 2 to section 3
      const transitionStart2 = 1.5 * windowHeight;
      const transitionEnd2 = 2 * windowHeight;

      if (scrollTop >= transitionStart1 && scrollTop <= transitionEnd1) {
        const progress = (scrollTop - transitionStart1) / (transitionEnd1 - transitionStart1);
        setScrollProgress(progress);
      } else if (scrollTop >= transitionStart2 && scrollTop <= transitionEnd2) {
        const progress = (scrollTop - transitionStart2) / (transitionEnd2 - transitionStart2);
        setScrollProgress(progress);
      } else if (scrollTop < transitionStart1) {
        setScrollProgress(0);
      } else if (scrollTop < transitionEnd2) {
        setScrollProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerStyle = {
    background: `rgba(${255 * (1 - scrollProgress)}, ${255 * (1 - scrollProgress)}, ${255 * (1 - scrollProgress)}, 1)`,
    height: '300vh', 
    margin: 0,
    fontFamily: '"Poppins", sans-serif',
    transition: 'background 0.2s linear',
  };

  const sectionStyle = {
    padding: '50px',
    textAlign: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const navbarStyle = {
    position: 'fixed',
    top: '0',
    width: '100%',
    background: 'black',
    color: 'blue',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const navLinkStyle = {
    textDecoration: 'underline',
    cursor: 'pointer',
    color: 'white',
    marginLeft: '10px',
    marginRight: '40px',
    transition: 'color 0.3s',
    fontFamily: '"Roboto", sans-serif',
  };

  const contentStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    textAlign: 'left',
  };

  const textStyle = {
    maxWidth: '500px',
    lineHeight: '1.7',
    fontFamily: '"Lora", serif',
    color: 'red', 
  };

  const headingStyle = {
    color: '#00008B', 
  };

  const imageStyle = {
    width: '300px', 
    height: '270px', 
    objectFit: 'cover', 
    borderRadius: '10px',
    marginTop: '20px', 
  };

  const imageStyle1 = {
    width: '500px', 
    height: '500px',
    objectFit: 'cover', 
    borderRadius: '10px',
    marginTop: '20px', 
  };

  const contactContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  const logoStyle = {
    width: '130px',
  };

  const socialIconStyle = {
    width: '40px', 
    height: '40px',
    margin: '10px',
  };

  return (
    <div style={containerStyle}>
      {/* Navigation Bar */}
      <div style={navbarStyle}>
        <div>
          <img
            src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148627268.jpg?semt=ais_hybrid"
            alt="logo"
            style={logoStyle} 
          />
        </div>
        <h1 style={{ ...headingStyle, fontFamily: '"Lora", serif', fontSize: '3em' }}> ~DreamScape Travels</h1>
        <div>
          <a href="#section1" style={navLinkStyle}>
            Home
          </a>
          <a href="#section2" style={navLinkStyle}>
            About
          </a>
          <a href="#section3" style={navLinkStyle}>
            Contact Us
          </a>
        </div>
      </div>

      {/* Section 1 */}
      <section style={{ ...sectionStyle, color: 'black' }} id="section1">
        <div style={contentStyle}>
          <div style={textStyle}>
            <h1 style={headingStyle}>Explore the World with Us!!!</h1>
            <p>
              Discover amazing destinations, personalized travel plans, and unforgettable experiences.
              Let us make your travel dreams come true.
            </p>

            {/* Unordered List of Features in Section 1 */}
            <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
              <li>Customized Travel Packages</li>
              <li>24/7 Customer Support</li>
              <li>Exclusive Discounts and Offers</li>
              <li>Group Travel Discounts</li>
              <li>Easy Booking Process</li>
            </ul>
            {/* CTA Button */}
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                marginTop: '20px',
                fontFamily: '"Roboto", sans-serif',
                fontSize: '1.1em',
              }}
              onClick={() => document.getElementById('section2').scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Journey
            </button>

            {/* Testimonials */}
            <div style={{ marginTop: '30px', fontStyle: 'italic' }}>
              <h2 style={headingStyle}>What Our Customers Say</h2>
              <p>"DreamScape Travels made our honeymoon unforgettable. Highly recommend!" - Jane Doe</p>
              <p>"The best vacation we've ever had. Thanks for the amazing experience!" - Mark Smith</p>
            </div>
          </div>
          <img
            src="https://i.pinimg.com/1200x/e4/d1/42/e4d1426ccea467d48ba584d8242cf8e2.jpg"
            alt="Travel Destination"
            style={imageStyle1}
          />
        </div>
      </section>

      {/* Section 2 */}
      <section style={{ ...sectionStyle, color: 'red' }} id="section2">
        <h1 style={headingStyle}>Plan Your Next Adventure...</h1>
        <p>
          Whether you're looking for a relaxing beach vacation or an adventurous mountain trek, we
          have you covered. Start planning today!
        </p>

        {/* Three Subsections in Section 2 */}
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '30px' }}>
          <div style={{ maxWidth: '300px' }}>
            <h2 style={headingStyle}>Beach Getaways</h2>
            <p>Relax on pristine beaches and enjoy the sun, sand, and sea. Perfect for family vacations or romantic escapes.</p>
            <img
              src="https://i.pinimg.com/736x/62/08/a9/6208a992f54eb341a751446f4d6937a4.jpg"
              alt="Beach Getaway"
              style={imageStyle}
            />
          </div>
          <div style={{ maxWidth: '300px' }}>
            <h2 style={headingStyle}>Mountain Adventures</h2>
            <p>Hike, climb, and explore the world's most scenic mountain ranges. Ideal for adventure seekers.</p>
            <img
              src="https://i.pinimg.com/736x/66/bd/57/66bd57d14c88c6dd8914233d81098af3.jpg"
              alt="Mountain Adventure"
              style={imageStyle}
            />
          </div>
          <div style={{ maxWidth: '300px' }}>
            <h2 style={headingStyle}>Cultural Tours</h2>
            <p>Immerse yourself in the rich culture and history of various destinations. A journey of discovery awaits!</p>
            <img
              src="https://i.pinimg.com/736x/c4/90/ca/c490ca5b5e34a7b2f2adba054ccf18cc.jpg"
              alt="Cultural Tour"
              style={imageStyle}
            />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section style={{ ...sectionStyle, backgroundColor: '#f0f0f0', color: 'red' }} id="section3">
        <div style={contactContainerStyle}>
          <h2 style={headingStyle}>Contact Us</h2>
          <p>We'd love to hear from you! Reach out via the form below or through our social channels.</p>

          {/* Contact Form */}
          <form
            className="contact-form"
            style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <input type="text" placeholder="Your Name" required style={{ margin: '10px', padding: '10px', width: '300px' }} />
            <input type="email" placeholder="Your Email" required style={{ margin: '10px', padding: '10px', width: '300px' }} />
            <textarea placeholder="Your Message" required style={{ margin: '10px', padding: '10px', width: '300px', height: '100px' }}></textarea>
            <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
              Send Message
            </button>
          </form>

          {/* Social Media Icons */}
          <div className="social-icons" style={{ marginTop: '20px' }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              style={socialIconStyle}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              style={socialIconStyle}
            />
            <img
              src="https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"
              alt="LinkedIn"
              style={socialIconStyle}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
