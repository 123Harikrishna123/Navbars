import React from 'react'

import student from '../../assets/student.jpg';



const Home = () => {
  return (
    <div >
        <div className="content">
      <h1>Free Online E-Commerce Courses</h1>
      

      <h4><b>Learn how to build a web-based store in just a few hours with our free online e-commerce courses.<br></br> eCommerce encompasses the buying and selling of goods or services using the internet and involves<br></br> the transfer of money and data to execute these transactions. 
        By taking Alison’s e-commerce training<br></br> classes which teach web development and marketing strategies,
        you will learn how online transactions<br></br> work, gain mastery of key e-commerce concepts, and discover how to earn more from your online store.<br></br>
         And with such streamlined courses, you can learn all this in just a few short hours! Read Less</b></h4>
        
         </div>
         <img src={student} alt="Student" />
         <h3>"Earning my Google Project Management: Professional Certificate is one of the<br></br> biggest accomplishments I’ve made in my education, and it was a key stepping stone to my new career."</h3>
        
    
         {/* <div class="card" style="width: 18rem;">
     <img src="student.jpg" class="card-img-top" alt="Student"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>  */}

 




    </div>
    
    
  )
}

export default Home
