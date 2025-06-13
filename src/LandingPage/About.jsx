import React from 'react'
import Navbar from './Navbar'
import './Landingpage.css'
import vote from '../assets/votingimg.avif'
import video from '../assets/4669328-uhd_4096_2160_25fps.mp4'
import voteIndia from '../assets/voteIndia1.webp'
import myVote from '../assets/viteIndia3.jpg'
import Footer from './Footer'


function About() {
  return (
    <div className='container-fill root-img1'>
      <Navbar />

      <div className='row align-items-start mt-5'>


        <div className='col-lg-6 col-sm-12 col-md-12'>
          <img src={vote} alt='voteIndia' style={{ marginTop: "60px", width: "90%", height: "auto" }} />

          <video width="90%" height="auto" controls autoPlay muted loop className='mt-4'>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <img src={voteIndia} alt='voted' style={{ marginTop: "30px", width: "90%", height: "auto" }} />

          <img src={myVote} alt='voted' style={{ marginTop: "30px", width: "90%", height: "auto" }} />

        </div>

        <div className='col-lg-6 p-5 col-sm-12 col-md-12'>
          <p className='text-danger text-center fs-5 fw-bold'>Why Should I Vote?</p>

          <p>Voting gives you the power to create positive change for your community and determine a better quality of life for
            you and your family. Voting together with your neighbors, family, and friends ensures that your shared values and issues
            are prioritized, that you play a key role in choosing who represents us, and where government funding and resources will
            go. The more we vote, the more powerful our voices become, and the likelier the issues that are important to us will be
            heard.Our community has, historically, been one of the communities with the lowest voter registration and voter turnout
            rates. In recent years, this has changed and we are quickly becoming a force to be reckoned with at the ballot box.
            So join the rest of our community and exercise your important right to vote!</p>

          <p className='text-danger text-center fs-5 fw-bold'>Top 5 Reasons to Vote</p>

          <p className='fw-bold'>1.Elections Impact Your Everyday Life and Family</p>
          <p>How much resources will your local schools get? Will city and county government repair the potholes on the road to your
            house? Will public transportation services be expanded? How much access to healthcare will you receive? How much job
            security and pay equity will you have? What are the policies around crime prevention and gun safety? What will immigration
            law look like? All these decisions are determined by the people voted into office at the local, state, and federal levels
            of government. Voting and encouraging others to vote means standing up for the issues you care about by electing the people
            who have your best interests at heart. Voting does not just help our communities in theory; it has tangible effects on whether
            or not our elected officials care about our needs. Voting gives a stake in your community.</p>

          <p className='fw-bold'>2.Every Vote Counts</p>
          <p>More and more, Asian Americans and Pacific Islanders are becoming the margin of victory in elections across the country
            – from Georgia to New Jersey to Virginia to Arizona to Texas. In local elections especially, victory for one candidate
            may be determined by just a few votes more than the other. Your decision to vote could sway an election from someone
            who doesn’t have your best interests at heart to someone who does. Don’t sit out your next election. Vote! Find additional
            information here. </p>

          <p className='fw-bold'>3.Decide Where Your Tax Dollars Go</p>
          <p>Everyone pays taxes, so we should all have a say in where that money goes. By helping to elect city council members,
            county commissioners, governors, state legislators, all the way to members of Congress and the President, your vote
            chooses how your tax dollars are allocated, who runs your communities, and what projects will get local, state and
            federal funding.According to the most recent available data from the American Community Survey, almost 1/3rd of Asian
            Americans living in the United States are “Limited English Proficient,” meaning that they report speaking English “less
            than very well.” Your decision to vote could decide whether governments have the ability to provide critical information
            in-language to the people in our communities who need it the most. </p>

          <p className='fw-bold'>4.Fight Against Racism and Discrimination</p>
          <p>With the rise of anti-AANHPI hate and discriminatory policies affecting Asian Americans, Native Hawaiians and
            Pacific Islanders, now is more important than ever to have your voice and concerns heard by the people in power.
            Voting and encouraging others to vote is one of the most effective ways to make politicians listen to your concerns.
            According to the 2020 Asian American Voter Survey, at least 72% of Asian Americans believe there is discrimination
            against Asian people in our society today. Meanwhile, at least 76% of Asian Americans worry about experiencing hate
            crimes, harassment, and discrimination because of COVID-19. Vote to ensure our communities feel safe in the places
            they live and work. </p>

          <p className='fw-bold'>5.Protect Our Voting Rights</p>
          <p>Many states are enacting increasingly strict voting laws that suppress our right to vote early, vote-by-mail, gain
            language assistance, and even register to vote. Your freedom to vote is a right that is being clawed back by these new
            restrictions and laws. At the same time, some redistricting commissions and state legislatures are working to divide
            up AAPI voter blocs into separate districts so that our voices will have less of an impact on elections. The only way
            to stop these moves from happening is by standing up against the people acting against our interests and voting them
            out of office!Or, viewed another way, vote for those elected officials that stand up for the values you believe in,
            and there is no more basic value than the right of every eligible voter to be able to cast their ballot. Never doubt
            that your vote is powerful but it must be exercised to remain so. Your vote is your voice. More information here. </p>
        </div>

      </div>

      <div className='backTheme'>
        <h3 className='text-center'>India Vote envision a world that is Fair.</h3>
        <div className='row mt-5 d-flex justify-content-between mx-5 gap-1'>

          <div className='col-3 align-items-center d-flex justify-content-center flex-column' style={{ borderRadius: "30px", cursor: "pointer" }}>
            <img src='https://www.transparentpng.com/download/register-button/WqEkyx-register-button-circle-background.png' alt='register' style={{ width: "80px", height: "60px" }} />
            <p className='fs-4 fw-bold'>Register</p>
            <p className='fs-5 text-center'>It all starts here. Register to vote so you can participate.</p>
            <button type='button' className='btn btn-danger rounded-pill mt-3'>Register to vote</button>
          </div>

          <div className='col-3 bg-primary align-items-center d-flex justify-content-center text-light flex-column p-4' style={{ borderRadius: "30px" }}>
            <img src='https://higherlogicdownload.s3.amazonaws.com/HIGHERLOGICTHEMES/2e523b2b-3434-4811-9245-9ea01a2f0b6b/UploadedImages/HL_Theme_Demo_Images/learn.png' alt='learn' style={{ width: "80px", height: "60px", marginTop: "6%" }} />
            <p className='fs-4 fw-bold'>Learn</p>
            <p className='fs-5 text-center'>Being an informed voter is a critical part of our democracy.</p>
            <button type='button' className='btn btn-danger rounded-pill'>Learn Election</button>
          </div>

          <div className='col-3 align-items-center d-flex justify-content-center flex-column' style={{ borderRadius: "30px" }}>
            <img src='https://cdn-icons-png.flaticon.com/512/9809/9809609.png' alt='vote' style={{ width: "80px", height: "60px" }} />
            <p className='fs-4 fw-bold'>Vote</p>
            <p className='fs-5 text-center'>Find out where to vote and see what's on the ballot.</p>
            <button type='button' className='btn btn-danger rounded-pill mt-3'>In your state</button>
          </div>


        </div>
      </div>

      <div className='col-12 mt-5'>
        <p className='fs-4 fw-bold text-center'>Why India's voters are important</p>
        <div className='row mt-5 d-flex justify-content-between mx-5 gap-1'>

          <div className='col-2 d-flex justify-content-center flex-column'>
            <img src='https://www.hindustantimes.com/ht-img/img/2023/11/30/550x309/Around-70-60--voters-exercise-franchise-as-polls-c_1701372722801.jpg' alt='peopleVote' style={{ width: "100%", height: "300px", borderRadius: "20px" }} />
            <p className='fs-4 fw-bold text-center'>Fastest Growing Population</p>
            <p className='text-center'>In the past two decades, India have become one of the fastest growing racial or ethnic groups in the world.</p>
          </div>

          <div className='col-2 d-flex justify-content-center flex-column'>
            <img src='https://cjp.org.in/wp-content/uploads/2023/10/Right-to-Vote.jpg' alt='peopleVote' style={{ width: "100%", height: "300px", borderRadius: "20px" }} />
            <p className='fs-4 fw-bold text-center'>We Shape Elections</p>
            <p className='text-center'>The india electorate is a formidable community with the power to shape and influence elections down the ticket throughout the country.</p>
          </div>

          <div className='col-2  d-flex justify-content-center flex-column'>
            <img src='https://thebasicstructureconlaw.wordpress.com/wp-content/uploads/2024/07/image.png' alt='peopleVote' style={{ width: "100%", height: "300px", borderRadius: "20px" }} />
            <p className='fs-4 fw-bold text-center'>Representation Matters</p>
            <p className='text-center'>The decisions made by policymakers and our representatives at all levels of government impacts our day-to-day lives – from how much funding local schools get to policies around crime prevention and gun safety.</p>
          </div>

          <div className='col-2 d-flex justify-content-center flex-column'>
            <img src='https://www.brookings.edu/wp-content/uploads/2019/04/india-election-2019-001.jpg?quality=75' alt='peopleVote' style={{ width: "100%", height: "300px", borderRadius: "20px" }} />
            <p className='fs-4 fw-bold text-center'>Economic Strength</p>
            <p className='text-center'>The growth of india influence and impact extends beyond the political sphere, into all aspects of  society.</p>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
