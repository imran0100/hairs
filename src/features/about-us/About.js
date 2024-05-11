import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <>
      <div className="about-us">
        <div className="container">
          <div className="about-us-container">
            <div>
              <h1 className="contect-us-heading">ABOUT US</h1>
            </div>
            <div>
              <img alt='hair' src="/assets/img/about/about-banner.png" />
            </div>
            <div>
              <h4 className="sub-had-2">HAVE EXPERT ADVICE FROM OUR</h4>
              <h2 className="cont-head-2">PROFESSIONAL TEAM</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="about-section-2 container">
        <div className="item-2">
          <h1>
            Welcome to HairsN<span className="h1-span">Cares</span>
          </h1>
          <span>
            At Hairsncares, we believe that healthy, lustrous, beautiful hair is
            a reflection of overall well-being.
          </span>
          <p>
            We understand the emotional impact that hair loss and thinning can
            have on individuals. Our mission is to provide latest, effective,
            affordable solutions and support to help our clients regain their
            confidence as well as to restore their hair's vitality.We understand
            the emotional impact that hair loss and thinning can have on
            individuals. Our mission is to provide latest, effective, affordable
            solutions and support to help our clients regain their confidence as
            well as to restore their hair's vitality
          </p>
        </div>
        <div className="image-2">
          <img alt='hair' src="\IMG_20240425_085350.jpg" />
        </div>
      </div>
      <div className="section-3-wrapper">
        <div className="container">
          <div>
            <h1 className="content-3-heading">Our Journey</h1>
          </div>
          <div className="content-3">
            <div className="content-container">
              <img alt='hair' src="\IMG_20240425_100125.png" />
            </div>
            <div className="content-container-2">
              <div className="content-item">
                <span>01</span>
                <div>
                  <p className="content-sub-item">
                    Personal Passion and Experience:
                  </p>
                  <p>
                    Hairsncares was inspired by the founder, Dr. Amit Agarkar's
                    personal journey and his deep commitment to holistic hair
                    care. As an esteemed Trichologist and Hair Transplant
                    Surgeon in India, he sought effective and reliable solutions
                    for his patients' hair care needs.
                  </p>
                </div>
              </div>
              <div className="content-item">
                <span>03</span>
                <div>
                  <p className="content-sub-item">Addressing the Gap:</p>
                  <p>
                    Dr. Agarkar identified a significant gap in the availability
                    of comprehensive resources and personalized guidance for
                    individuals dealing with hair loss. He aimed to bridge this
                    gap by establishing a platform that not only offers precise
                    hair analysis but also tailors treatment plans to suit each
                    individual's specific requirements.
                  </p>
                </div>
              </div>
              <div className="content-item">
                <span>02</span>
                <div>
                  <p className="content-sub-item">
                    Development of Advanced Solutions:
                  </p>
                  <p>
                    Dr. Agarkar's journey led to the creation of advanced and
                    holistic hair care solutions with a strong track record of
                    success. These solutions form the core of Hairsncares'
                    offerings.
                  </p>
                </div>
              </div>
              <div className="content-item">
                <span>04</span>
                <div>
                  <p className="content-sub-item">
                    Creating a Team for Change:
                  </p>
                  <p>
                    With a shared vision to transform the approach to hair care,
                    Dr. Amit Agarkar assembled a team of dedicated
                    professionals, including renowned specialists in hair
                    health. Together, they founded Hairsncares as a
                    comprehensive resource and destination for individuals
                    seeking expert guidance and proven solutions to combat hair
                    loss and thinning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-container-3 container">
        <div className="container-3-item">
          <img alt='hair' src="/uploads/approach.png" />
        </div>
        <div className="container-3-item">
          <h1>Our Comprehensive Approach</h1>
          <p>
            At Hairsncares, we understand that every individual's hair health
            journey is unique. That's why we offer a seamless and convenient
            online hair test. With just a few simple steps, you can take the
            hair test on our website, providing us with valuable insights of
            your hair and scalp condition. Once you've completed the hair test,
            our advanced algorithm analyzes the data and generates a
            comprehensive report detailing your hair health status. This report
            forms the foundation of your personalized holistic treatment plan
            including medicine, diet, stress & lifestyle care designed to tackle
            hair loss or thinning effectively. To ensure the highest level of
            care and expertise, Hairsncares boasts a panel of esteemed doctors
            who specialize in hair health. These professionals have extensive
            experience in the hair care field and are at the forefront of the
            latest advancements in hair care. You have the option to opt for a
            virtual consultation with one of our hair expert doctors, allowing
            you to discuss your hair concerns in-depth and receive holistic
            personalized recommendations.
          </p>
        </div>
      </div>
      <div className="about-container-4 container">
        <div className="head-2-container">
          <h1 className="contect-us-heading-2">
            Core Principles for hair care
          </h1>
        </div>
        <div className="about-4-items">
          <div className="items-con">
            <div className="circle-4">
              <img alt='hair' src="/uploads/admprcore-pic-1.png" />
            </div>
            <div className="circle-conta">
              <button>Modern Medicine</button>
            </div>
            <p>
              Proven Treatment for Hair Loss/Thinning : We believe in
              evidence-based approaches, and our recommended treatments are
              backed by scientific research and proven results. Our panel of
              experienced doctors ensures thorough assessment of your hair &amp;
              overall health to offer advanced, effective, affordable and safe
              treatment, empowering our clients to make informed decisions about
              their hair health.
            </p>
          </div>
          <div className="items-con">
            <div className="circle-4">
              <img alt='hair' src="/uploads/admprcore-pic-3.png" />
            </div>
            <div className="circle-conta">
              <button className="circle-4">Diet</button>
            </div>
            <p>
              We understand that proper nutrition plays a vital role in
              maintaining healthy hair. Our approach emphasizes the importance
              of a protein-rich diet and essential vitamins like E, D, biotin
              etc. We provide personalized dietary recommendations that boosts
              hair growth and overall well-being.
            </p>
          </div>
          <div className="items-con">
            <div className="circle-4">
              <img alt='hair' src="/uploads/admprcore-pic-2.png" />
            </div>
            <div className="circle-conta">
              <button>Healthy Lifestyle</button>
            </div>
            <p>
              At Hairsncares, we recognize the significance of adopting healthy
              lifestyle for optimal hair health. We educate our clients about
              the importance of avoiding harmful practices such as smoking,
              excessive drinking, and damaging hairstyling techniques. We
              provide guidance on proper hair care practices, including
              shampooing, conditioning, and oil treatments, to promote healthier
              and stronger hair.
            </p>
          </div>
          <div className="items-con">
            <div className="circle-4">
              <img alt='hair' src="/uploads/core-pic-4.png" />
            </div>
            <div className="circle-conta">
              <button>Stress Management</button>
            </div>
            <p>
              We acknowledge that stress can significantly impact hair health.
              Our holistic approach extends beyond physical treatments and
              incorporates stress management techniques such as exercise,
              meditation, and exploring new hobbies. We also offer dietary
              recommendations that help manage stress levels, as a balanced mind
              contributes to healthy hair.
            </p>
          </div>
        </div>
        <div className="hero-btn-about">
          <button
            onClick={() => navigate("/hair-test")}
            className="btn primary"
          >
            TAKE AN ONLINE HAIR TEST
          </button>
        </div>
      </div>
      <div className="our-commitment-container">
        <div className="container">
          <h1>Our Commitment</h1>
          <p>
            At Hairsncares, we are committed to providing an empowering and
            supportive environment for our clients. Through our user-friendly
            website, individuals can easily take a hair test online, receive
            personalized analysis, and access expert treatment recommendations
            for their hair care journey. We offer the option of virtual
            consultations with our esteemed doctors, ensuring personalized
            attention and guidance throughout the process.
          </p>
          <p>
            We are inspired by the success stories of our clients who have
            regained their confidence and transformed their lives through our
            comprehensive hair care programs. Hairsncares is dedicated to being
            the trusted companion on your path to healthier, fuller hair.
          </p>
          <p>
            Welcome to Hairsncares, where your hair health is our top priority.
            Together, let's unlock the secrets to radiant, thriving hair and
            embrace a life filled with confidence and vitality.
          </p>
          <div className="commit-con">
            <div className="commit-item">
              <div>
                <div className="commit-sub">
                  <img alt='hair' src="/assets/img/about/vission.png" />
                  <h2>Our Vision</h2>
                </div>
                <p>
                  To reach out to people across the world aspiring to have
                  enhanced hair regrowth with better results and make it
                  possible for them with our customized holistic treatment plans
                  checking
                </p>
              </div>
            </div>
            <div className="commit-item">
              <div>
                {" "}
                <div className="commit-sub">
                  <img alt='hair' src="/assets/img/about/mission.png" />
                  <h2>Our Goal</h2>
                </div>{" "}
                <p>
                  To provide advance, affordable, result oriented hair care
                  solutions and to cater clients worldwide checking
                </p>
              </div>
            </div>
          </div>
          <div className="hero-btn-about">
          <button
            onClick={() => navigate("/shop")}
            className="btn primary"
          >
            VIEW PRODUCT RANGE
          </button>
        </div>
        </div>
      </div>
    </>
  );
}
