import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Animation",
    imgPath: "/src/assets/animation.jpg",
    content:
      " We create smooth, engaging animations that bring your website to life. From subtle transitions to dynamic effects, we enhance user experience with seamless motion. Elevate your brand with visually stunning animations.",
  },
  {
    title: "VFX and CGI",
    imgPath: "/src/assets/film-making.jpg",
    content:
      "  We craft cinematic visuals that captivate and inspire. From story boarding to postproduction including VFX and CGI. We bring your vision to life with                professional filmmaking. Elevate your content with stunning                production.",
  },
  {
    title: "Music Composition",
    imgPath: "/src/assets/music.jpg",
    content:
      " We create original, high-quality music tailored to your needs. From melodies to full orchestrations, we bring emotion and depth to every project. Enhance your brand with unforgettable sound.",
  },
  {
    title: "Digital Marketing",
    imgPath: "/src/assets/digital-marketing.jpg",
    content:
      " We drive results with targeted strategies that maximize your online presence. From SEO to social media, we grow your brand with data-driven marketing. Boost engagement and conversions effortlessly.",
  },
  {
    title: "Virtual Production",
    imgPath: "/src/assets/virtual-production.jpg",
    content:
      " We blend real and digital worlds to create cutting-edge visual experiences. From LED walls to 3D environments, we revolutionize storytelling with technology. Elevate your production with innovation.",
  },
  {
    title: "3D Printing",
    imgPath: "/src/assets/3d-printing.jpg",
    content:
      "We bring ideas to life with precision-crafted 3D models. From prototypes to custom designs, we turn concepts into reality with advanced printing technology. Innovate with high-quality 3D solutions.",
  },
];

const newsData = [
  {
    title: "Elevate Your Marketing Strategy",
    path: "/news/1",
    imgPath: "/src/assets/news1-edited.jpg",
  },
  {
    title: "Captivating Animation Videos",
    path: "/news/2",
    imgPath: "/src/assets/news2-edited.jpg",
  },
  {
    title: "Introducing 3D Printing Services",
    path: "/news/3",
    imgPath: "/src/assets/news3-edited.jpg",
  },
  {
    title: "Comic Con 2025",
    path: "https://www.linkedin.com/posts/xenoverse-interactive_chennaicomiccon2025-xenoverseinteractive-activity-7295061674674241536-K6eR?utm_source=share&utm_medium=member_ios&rcm=ACoAAC-gEMQBjHFje97NYCIbvfes5qBFtwhrTgs",
    imgPath: "/src/assets/sherwin-comicon.jpg",
  },
];

export default function Mainpage() {
  return (
    <div
      style={{
        height: "100vh",
        overflow: "auto",
        scrollBehavior: "smooth",
      }}
    >
      <header className="hero">
        <div className="hero-text">
          <h1>Xenoverse Interactive</h1>
          <p>An Artistic Experience</p>
          {/* <img
            src="/src/assets/xenoverse-logo.jpg"
            alt="Xenoverse Logo"
            className="xenoverse-img"
          /> */}
          <a href="#services" className="button">
            Explore More
          </a>
        </div>
        <div className="hero-image">
          <img
            src="/src/assets/xenoverse-logo.jpg"
            alt="Girl with VR Headset"
          />
        </div>
      </header>
      <section className="about" style={{ position: "relative" }}>
        <h2>About Us</h2>
        <iframe
          width="1316"
          height="565"
          src="https://www.youtube.com/embed/4AoQ5c0L6vo"
          title="Xenoverse Title Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>
      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          {services.map((item) => (
            <div className="service-item">
              <h3>{item.title}</h3>
              <div style={{ height: "25vw" }} className="service-content">
                <img src={item.imgPath} alt="" />
                <div>{item.content}</div>
              </div>
            </div>
          ))}
          {/* <div className="service-item">
            <h3>Animation</h3>
            <div style={{ height: "25vw" }} className="service-content">
              <img src="/src/assets/animation.jpg" alt="" />
              <div>
                We create smooth, engaging animations that bring your website to
                life. From subtle transitions to dynamic effects, we enhance
                user experience with seamless motion. Elevate your brand with
                visually stunning animations.
              </div>
            </div>
          </div>
          <div className="service-item">
            <h3>Film Making</h3>
            <div style={{ height: "25vw" }} className="service-content">
              <img src="/src/assets/film-making.jpg" alt="" />
              <div>
                We craft cinematic visuals that captivate and inspire. From
                storytelling to editing, we bring your vision to life with
                professional filmmaking. Elevate your content with stunning
                production.
              </div>
            </div>
          </div>
          <div className="service-item">
            <h3>Music Composition</h3>
            <div style={{ height: "25vw" }} className="service-content">
              <img src="/src/assets/film-making.jpg" alt="" />
              <div>
                We craft cinematic visuals that captivate and inspire. From
                storytelling to editing, we bring your vision to life with
                professional filmmaking. Elevate your content with stunning
                production.
              </div>
            </div>
          </div>
          <div className="service-item">
            <h3>Digital Marketing</h3>
            <div style={{ height: "25vw" }} className="service-content">
              <img src="/src/assets/film-making.jpg" alt="" />
              <div>
                We craft cinematic visuals that captivate and inspire. From
                storytelling to editing, we bring your vision to life with
                professional filmmaking. Elevate your content with stunning
                production.
              </div>
            </div>
          </div>
          <div className="service-item">
            <h3>Virtual Production</h3>
            <div style={{ height: "25vw" }} className="service-content">
              <img src="/src/assets/film-making.jpg" alt="" />
              <div>
                We craft cinematic visuals that captivate and inspire. From
                storytelling to editing, we bring your vision to life with
                professional filmmaking. Elevate your content with stunning
                production.
              </div>
            </div>
          </div>
          <div className="service-item">
            <h3>3D Printing</h3>
            <div style={{ height: "25vw" }} className="service-content">
              <img src="/src/assets/film-making.jpg" alt="" />
              <div>
                We craft cinematic visuals that captivate and inspire. From
                storytelling to editing, we bring your vision to life with
                professional filmmaking. Elevate your content with stunning
                production.
              </div>
            </div>
          </div> */}
        </div>
      </section>
      <section className="latest-news">
        <h2>Latest News</h2>
        <div className="news-container">
          {newsData.map((newscard) => (
            <div className="news-card">
              <Link to={newscard.path}>
                <img src={newscard.imgPath} alt="News 1" />
                <h3>{newscard.title}</h3>
              </Link>
            </div>
          ))}
          {/* <div className="news-card">
            <Link to="/news/1">
              <img src="/src/assets/news1-edited.jpg" alt="News 1" />
              <h3>Elevate Your Marketing Strategy</h3>
            </Link>
          </div>
          <div className="news-card">
            <Link to="/news/2">
              <img src="/src/assets/news2-edited.jpg" alt="News 2" />
              <h3>Captivating Animation Videos</h3>
            </Link>
          </div>
          <div className="news-card">
            <Link to="/news/3">
              <img src="/src/assets/news3-edited.jpg" alt="News 3" />
              <h3>Introducing 3D Printing Services</h3>
            </Link>
          </div> */}
        </div>
      </section>
      <footer>
        <div className="contact-container">
          <div className="contact-info">
            <h2>Let's Connect</h2>
            <p>
              We’d love to connect with you! Whether you’re looking to
              collaborate on a project, need our services, or want to join our
              team, we’re here to help. Feel free to reach out and let us know
              how we can work together. We look forward to hearing from you!
            </p>
            <div className="contact-links">
              <div className="phone">
                <img
                  src="/src/assets/icons8-phone-100.png"
                  alt="phone"
                  style={{ width: "2rem" }}
                />
                <a href="tel:9994089049">9994089049</a>
              </div>
              <div className="Email">
                <img
                  src="/src/assets/icons8-email-100.png"
                  alt="email"
                  style={{ width: "2rem" }}
                />
                <a href="mailto:xenoverse.interactive@gmail.com">
                  xenoverse.interactive@gmail.com
                </a>
              </div>
              <div className="Linkedln">
                <img
                  src="/src/assets/icons8-linkedin-240.png"
                  alt="email"
                  style={{ width: "2rem" }}
                />
                <a href="https://in.linkedin.com/company/xenoverse-interactive">
                  xenoverse-interactive
                </a>
              </div>
              <div className="Address">
                <img
                  src="/src/assets/icons8-address-100.png"
                  alt="email"
                  style={{ width: "2rem" }}
                />
                <p>
                  4/164F, RBS Gardern, Statebank colony, Thoothukkudi - 628002
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <div>
              <label for="name">Name</label>
              <input type="text" id="name" placeholder="Name" required />

              <label for="email">Your email</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                required
              />
              <label for="email">Your phone</label>
              <input type="phone" id="phone" placeholder="+91" required />
              <label for="message">Message</label>
              <textarea
                id="message"
                placeholder="Let's talk about..."
                required
              ></textarea>

              <button type="submit">Send Message</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
