import React from "react";
import { Link } from "react-router-dom";

export default function Newspage() {
  const path = window.location.href;
  const match = path.match(/\/news\/(\d+)/); // Matches "/page/{number}"
  // if (match) {
  const id = match[1]; // Extract the "123"
  console.log(id);
  // }

  const newsmap = {
    1: {
      title:
        "Elevate Your Marketing Strategy with Xenoverse's Animation Studio",
      imagePath: "/src/assets/news1-edited.jpg",
      content:
        "Dear Valued Partner, We are excited to introduce our comprehensive digital marketing services designed to elevate your brand's presence and engagement. Our offerings include: Social Media Management:Crafting and executing strategies to enhance your online footprint.          Content Creation: Developing compelling content that resonates with          your target audience. SEO Optimization: Improving your website's          visibility on search engines. Email Marketing Campaigns: Designing          personalized campaigns to connect with your customers. Partner with us          to transform your marketing approach and achieve measurable results.",
    },
    2: {
      title: "Captivating Animation Videos",
      imagePath: "/src/assets/news2-edited.jpg",

      content:
        "At Xenoverse Interactive, we craft animation ads that go beyond visuals; we tell stories that resonate. Our approach combines creative storytelling with high-quality animation to produce advertisements that not only attract attention but also engage and connect with your target audience on a deeper level.From concept development to final production, our team works closely with you to ensure that each animation aligns with your brand's message and objectives. Experience the power of storytelling through animation and make a lasting impression with your ads.",
    },
    3: {
      title: "Introducing 3D Printing Services",
      imagePath: "/src/assets/news3-edited.jpg",

      content:
        "We are excited to expand our offerings with the addition of professional 3D printing services. Utilizing cutting-edge technology, we provide high-quality 3D printed models tailored to your specifications.Our services cater to a wide range of needs, including:Prototyping: Bring your product ideas to life with precise and functional prototypes.Custom Models: Create unique models for personal projects, gifts, or branding purposes.Educational Tools: Develop interactive and tangible learning aids for educational purposes.Partner with us to transform your concepts into physical realities with our reliable and efficient 3D printing solutions.",
    },
  };
  console.log(newsmap);

  const newsdata = newsmap[id];
  console.log(newsdata);

  return (
    <div style={{ height: "100vh", overflow: "auto" }}>
      <div className="container">
        <header>
          <Link to="/">
            <div>Back</div>
          </Link>
        </header>
        {}
        <div className="post-header">
          <h1>
            {/* Elevate Your Marketing Strategy with Xenoverse's Animation Studio */}
            {newsdata.title}
          </h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={newsdata.imagePath}
            alt="Marketing Strategy"
            className="post-image"
          />
        </div>

        <p className="content">
          {newsdata.content}
          {/* Dear Valued Partner, We are excited to introduce our comprehensive
          digital marketing services designed to elevate your brand's presence
          and engagement. Our offerings include: Social Media Management:
          Crafting and executing strategies to enhance your online footprint.
          Content Creation: Developing compelling content that resonates with
          your target audience. SEO Optimization: Improving your website's
          visibility on search engines. Email Marketing Campaigns: Designing
          personalized campaigns to connect with your customers. Partner with us
          to transform your marketing approach and achieve measurable results. */}
        </p>
      </div>
    </div>
  );
}
