import React from 'react'
import './styles/Footer.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class Footer extends React.Component{
  

    render(){
        return(
            <>
            <div className='footerbg'>
           <div class='p-5'>
           <div className='row'>
               <div className='col-3'>
                  <h1>Shop Non-Stop on Meesho</h1>
                  <p>Trusted by more than 1 Crore Indians
                   Cash on Delivery | Free Delivery</p>
               </div>
               <div className='col-2 legalli'>
                 <ul>
                    <li>Careers</li>
                    <li>Become a supplier</li>
                    <li>Our Influencer ProgramHall</li> 
                    <li>of Fame</li>
                 </ul>
               </div>
               <div className='col-2 legalli'>
                 <ul>
                    <li>Legal and Policies</li>
                    <li>Meesho Tech Blog</li>
                    <li>Notices and Returns</li>
                 </ul>
               </div>
               <div className='col-2 Reachicon'>
               <h3>Reach out to us</h3>
              <a href='https://twitter.com/Meesho_Official/'> <i class="fa fa-twitter" aria-hidden="true"></i></a>
             <a href='https://www.facebook.com/meeshosupply' target='blanck'>  <i class="fa fa-facebook" aria-hidden="true"></i></a>
             <a href='https://www.instagram.com/meeshoapp/' target='blanck'> <i class="fa fa-instagram" aria-hidden="true"></i></a>
             <a href='https://www.youtube.com/channel/UCaGHIRKYUYlaI_ZAt2hxpjw' target='blanck'> <i class="fa fa-youtube-play" aria-hidden="true"></i> </a>
               <a href='' target='blanck'><i class="fa fa-linkedin" aria-hidden="true"></i></a>
               
               </div>
               <div className='col-3'>
                <h3>Contact Us</h3>
                <ul>
                    <li> Fashnear Technologies Private Limited,</li>
                    <li>CIN: U74900KA2015PTC082263</li>
                    <li>06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer Ring Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka, India</li>
                    <li>E-mail address: query@meesho.com</li>
                    <li>© 2015-2022 Meesho.com</li>
                </ul>
               </div>



            </div>
           </div>
           </div>
            
            </>
        )
    }


}

export default Footer;