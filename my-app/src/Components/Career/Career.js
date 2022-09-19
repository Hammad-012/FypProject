import './Career.css';
import CareerImg from './CareerImg.jpg';
import hammadImg from './hammad.jpeg';
import HamadNasirImg from './HamadNasir.jpeg';
import ArslanImg from  './Arslan.jpeg';
import CoreValue1 from './CoreValue1.webp';
import CoreValue2 from './CoreValue2.webp';
import CoreValue3 from './CoreValue3.webp';
import CoreValue4 from './CoreValue4.webp';
import CoreValue5 from  './CoreValue5.webp';
import CoreValue6 from './CoreValue6.webp';
const Career = () => {
    return (
        <div className='Section3-Container'>
           <div className='Section3-Container'>
            <img src={CareerImg} alt='CareerImage' />
           </div>
           <div className='text-container'>
            <div className='texts'>
            <h2>Working with us<br />More then just a job</h2>
            </div>
           </div>
           <center><h1>What our team say about StudyPortals</h1></center>
           <div className='Section3-Container3'>
           
             <div className='Section3-row1'>
                <img src={hammadImg} alt='Hammad-Image' />
                    <p>“I love the enthusiasm and dedication that there is throughout the company to constantly improve the tools and info that we have across our websites. There’s always more we can do to help students choose the right study. This culture is not only noticeable on regular sprint-days, but also on the bi-weekly hackdays. On a hackday you can work on any cool idea you might have that could have a positive impact on Studyportals’ mission.” </p>
             </div>
             <div className='Section3-row2'>
                <img src={HamadNasirImg} alt='HamadNasir-Image' />
                <p>The fact that I am fighting with “the good guys”, helping them in making education choice transparent, globally, is really a motivational factor and I truly understand the impact of my work, every day. I love that my colleagues and I are friends before we are co-workers, the fact that Studyportals cares about my personal growth and that these people work with the same intensity as they have fun. That’s awesome!’</p>
             </div>
             <div className='Section3-row3'>
                <img src={ArslanImg} alt='Arslan-Image' />
                <p>‘I joined Studyportals in 2014 and since then I’ve always been engaged, inspired and challenged. It is extremely gratifying to work with people from so many different countries and backgrounds, which leads to the endless amount of opportunities to learn new things and acquire new skills. It feels great to solve design problems at the same time as you help millions of students with some of the most important choices in their life.’</p>
             </div>
           </div>
           <center><h1>Our Core Values</h1></center>
           <div className='Section4-Container'>
           <div className='Section4-row1'>
            <img src={CoreValue1} alt='Core-Value1' />
            <p>Heads up <br />and hearts open</p>
           </div>
           <div className='Section4-row2'>
            <img src={CoreValue2} alt='Core-Value2' />
            <p>Dedicated <br />and never give up</p>
           </div>
           <div className='Section4-row3'>
            <img src={CoreValue3} alt='Core-Value3' />
            <p>Personal growth is key</p>
           </div>
           <div className='Section4-row4'>
            <img src={CoreValue4} alt='Core-Value4' />
            <p>Make our world a little better</p>
           </div>
           <div className='Section4-row5'>
             <img src={CoreValue5} alt='Core value5' />
             <p>Serious about fun</p>
           </div>
           <div className='Section4-row6'>
            <img src={CoreValue6} alt='Core-Value6' />
            <p>Learn more about our mission and core values.</p>
           </div>
           </div>
        </div>
    )
}
export default Career