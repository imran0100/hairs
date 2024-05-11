import React from "react";
import "./OurSpecialist.css";
import Faq from "./faq/Faq";

export default function OurSpecialist() {
  
    let doctors=[
        {src:"/uploads/admprteam-pic1.png",
    name:'Dr. Sudhir Singh',
    degree:'MBBS, MD',
    decrip:'Dr. Sudhir is a member of IADVL (Indian Association of Dermatologists, Venereologists)'
    },
    {src:"/uploads/admprteam-pic2.png",
    name:'Dr. Ram Tainwala',
    degree:'MBBS',
    decrip:'Dr. Ram is a member of IIADVL (Indian Association of Dermatologists, Venereologists)'
    },     {src:"/uploads/team-pic3.png",
    name:'Dr. Jyoti Agarkar',
    degree:'MBBS, MD MBBS, MD, DDV, PGDHA, D.N.Y.S',
    decrip:'Dr. Jyoti Agarkar is a member of IIADVL (Indian Association of Dermatologists, Venereologists)'
    },
    {src:"/uploads/team-pic4.png",
    name:'Dr. Sunita Patel',
    degree:'MBBS, MD, DDV',
    decrip:'Dr. Sunita is a member of IADVL (Indian Association of Dermatologists, Venereologists)'
    },
    {src:"/uploads/team-pic5.png",
    name:'Dr. Poorti Kolge',
    degree:'MBBS, DDV',
    decrip:'Dr. Poorti is a member of IADVL (Indian Association of Dermatologists, Venereologists)'
    },
    {src:"/uploads/team-pic6.png",
    name:'Dr. Pradeep Mishra',
    degree:'MD, FCAS',
    decrip:'Dr. Pradeep is a member of IADVL (Indian Association of Dermatologists & Venreologists in India)'
    },
    {src:"/uploads/team-pic7.png",
    name:'Dr. Sagar Vyas',
    degree:'MD, FCAS',
    decrip:'Dr. Sagar Vyas is a member of IADVL (Indian Association of Dermatologists & Venreologists in India)'
    },
    {src:"/uploads/team-pic9.png",
    name:'Dr. Trupti K',
    degree:'Nutritionalist',
    decrip:'Dr. Trupti K is a member of IADVL (Indian Association of Dermatologists & Venreologists in India)'
    },
    {src:"/uploads/team-pic10.png",
    name:'Dr. Anjali Dinarajan',
    degree:'BAMS',
    decrip:'Dr. Anjali is a member of Ayurveda Medical Association Of India'
    },
    {src:"/uploads/team-pic11.png",
    name:'Dr. Suvarnna Uday',
    degree:'MBBS',
    decrip:'Dr. Suvarnna is a member of IADVL (Indian Association of Dermatologists & Venreologists in India)'
    }
    ]


  return (
    <>
      <div className="our-specialist">
        <div className="our-specialist-container container">
          <div>
            <h1 className="contect-us-heading">OUR SPECIALISTS</h1>
          </div>
        </div>
      </div>
      <div className="specialist-section-2 container">
        <div className="section-item">
          <img alt='hair' src="/uploads/admprsp-icon1.png" />
          <div className="sec-item">
            <h2>Experienced Team</h2>
            <p>
              Our experienced dermatologists specialize in hair care, offering
              tailored solutions for your hair needs. Trust us for the healthy,
              beautiful hair you deserve.
            </p>
          </div>
        </div>
        <div className="section-item">
          <img alt='hair' src="/uploads/admprsp-icon1.png" />
          <div className="sec-item">
            <h2>Hair Care Counselling:</h2>
            <p>
              Hair counselling is vital for personalized, informed, and
              effective hair management. It empowers individuals to achieve and
              maintain healthy, beautiful hair while addressing their unique
              needs and concerns.
            </p>
          </div>
        </div>
        <div className="section-item">
          <img alt='hair' src="/uploads/admprsp-icon1.png" />
          <div className="sec-item">
            <h2>Award Winning Approach:</h2>
            <p>
              Discover our award-winning holistic approach to hair loss
              management
            </p>
          </div>
        </div>
        <div className="section-item">
          <img alt='hair' src="/uploads/admprsp-icon1.png" />
          <div className="sec-item">
            <h2>Safe & Cost Effective:</h2>
            <p>
              Safe and cost-effective hair loss solution which is
              evidence-based, administered by qualified professionals, tailored
              to your needs, balances effectiveness with affordability, and
              regularly monitored.
            </p>
          </div>
        </div>
      </div>
      <div className="specialist-section-3 container">
        <div className="sec-3">
          <img alt='hair' src="/uploads/doctor.jpg" />
        </div>
        <div className="sec-3 sec-pad">
          <h3>Dr Amit Agarkar</h3>
          <p>
            MBBS, MD FCPS, DDV Hair Transplant Surgeon, Trichologist
            <br />
            MBBS, MD FCPS, DDV Hair <br />
            Transplant Surgeon, Trichologist Medical Director
            <br />
            Experience: 15 Years
          </p>
        </div>
        <div className="sec-3 sec-pad1">
          <div>Trichology</div>
          <div>Hair Transplant Surgeon</div>
          <div>Dermato Surgery</div>
          <div>Skin & Cosmetology</div>
        </div>
      </div>
      <div className="specialist-section-4 container">
        <div className="section-4-first">
          <div class="col-lg-8 col-md-8">
            <div class="row mb-20">
              <div class="col-lg-3">
                <h6>Qualification:</h6>
              </div>
              <div class="col-lg-9">
                <p>
                  MBBS from Government Medical College and Hospital, Nagpur in
                  2005 MD from Grant Medical College &amp; J.J. hospital, Mumbai
                  in 2010. FCPS &amp; DDV from Grand Medical college &amp; J.J.
                  Hospital, Mumbai in 2010
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3">
                <h6>Association:</h6>
              </div>
              <div class="col-lg-9">
                <p>
                  Dr. Amit Agarkar is a part of AHRS (association of hair
                  restoration surgeons) &amp; other such reputed hair
                  restoration associations in India.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-4-second">
          <div className="col-lg-3">
            <h6>Awards</h6>
          </div>
          <img alt='hair' src="/assets/img/specialists/award.png" />
        </div>
      </div>
      <div className=' container'>
        <div className="doc-head"><h1>Our Team of Doctors</h1>
        <p>Introducing Our Esteemed Team of Doctors: Our team embodies a commitment to excellence, utilizing the latest advancements and a patient-centred approach to achieve your desired hair goals.</p>
        </div>
        <div className="doc-container">
            {doctors.map((item)=>
            <div className="doctors"><div className="doc-image"><img alt='hair' src={item.src}/></div>
            <div className="doc-detail"><h2>{item.name}</h2>
            <h2>{item.degree}</h2>
            <p>{item.decrip}</p></div>
            </div>
            )}
        </div>
      </div>
      <div className="councellor-container ">
        <div className="container">
          <h1>HairsNcares Counsellors</h1>
          <p>Our team of skilled hair care counselors is here to provide personalized advice and solutions for all your hair needs. With a deep understanding of various hair types and concerns</p>
        <div className="councellor-item">
          <div className="coun-item">
            <img alt='hair' src="/uploads/admprcoun-icon1.png"/>
            <p>Education & Confidence Boosting</p>
          </div>
       
          <div className="coun-item">
            <img alt='hair' src="/uploads/coun-icon2.png"/>
            <p>Resut Assessment</p>
          </div>
          <div className="coun-item">
            <img alt='hair' src="/uploads/coun-icon3.png"/>
            <p>Recommedation & Product Knowledge</p>
          </div>
          <div className="coun-item">
            <img alt='hair' src="/uploads/coun-icon4.png"/>
            <p>Hair Health and Style Guiding</p>
          </div>
          <div className="coun-item">
            <img alt='hair' src="/uploads/coun-icon5.png"/>
            <p>Regular Follow-Up</p>
          </div>
        </div>
        </div>
      </div>
      <div className=" faq-wraper-container">
        <h1>Role of Hair Counsellor</h1>
        <Faq/>
      </div>

    </>
  );
}
