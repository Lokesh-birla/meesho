import React from 'react';
import './styles/headar.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import Badge from '@mui/material/Badge';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { NavLink,Link } from 'react-router-dom';
import Logo from './image/logo.png'
import Menu from '@mui/material/Menu';
import {useSelector} from 'react-redux';
import Loginpage from './log/loginpage';
// import SimpleTabs from './log/loginpage'
const Header = () =>{
  const getdata = useSelector((state)=>state.cartre.carts);
  console.log(getdata);
    const [anchorEl, setAnchorEl]   = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
        <>

  <nav className="navbar navbar-expand-lg navbar-dark Navbgcolor">
    <div className="container">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
      <li className="nav-item">
      <NavLink className="nav-link active fs-4 m-1" to='/' aria-current="page" >  <li><img src={Logo}     width='150px'/></li></NavLink>
        </li>
        <li className="nav-item">
      <NavLink className="nav-link active fs-4 m-2" to='c' aria-current="page" >Home</NavLink>
        </li>
      </ul>
      <div> <Link to='log'><i className="fs-3 pe-4 pb-md-4 pb-sm-4 pb-lg-0 me-auto  fa fa-solid fa-user"></i></Link>
      </div>
      <Badge badgeContent={getdata.length}color="primary" 
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
      >
      <i className="fa fa-light fa-cart-plus  fs-4 "   style={{cursor:'pointer'}} ></i>
  
      </Badge>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>

         {   getdata.length ?
            <div style={{width:'15rem',textAlign:'center'}}>
                <table>
                  <thead>
                    <tr>
                      <td>photo</td>
                      <td>Name</td>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      getdata.map((e)=>{
                        return(
                <>
                  <tr style={{width:'10rem',height:'8rem',padding:'5px 0px '}} >
                          <td ><img style={{width:'5rem',height:'5rem',margin:'0px 0px 0px 20px'}} src={e.image}></img> </td>
                         <td style={{padding:'10px'}}>{e.name}</td>
                          <td style={{padding:'10px'}} >{e.price}</td>
                        </tr>
                        <tr>
                          <td></td>
                            <td>
                              {e.quty}
                          </td>
                          <td className=' pe-3'>
                          <i className="fa fa-solid fa-trash" style={{color : 'red'}}></i>
                          </td>
                        </tr>

                </>
                       ) 

                      })
                    }
                  </tbody>
                </table>
            </div>
                    :   <h6  style={{height:'70px'}}> <img style={{width:'120px'}} src='https://sarivillafashion.com/img/images/listing-5/empty-cart.gif' /></h6>
           }
   </Menu>
{/* <Loginpage />    */}

   </div>
   </div>
   </nav>
   <ul className='container d-flex justify-content-evenly fs-5 navitem'>
<li > <Link to='women'> Women Ethnic </Link></li>
<li><Link to='WomenWestern'> Women Western</Link></li>
<li><Link to='men'> Men </Link></li>
<li><Link to='kids'> Kids </Link></li>
<li><Link to='Hoome&kitchen'> Home & Kitchen </Link></li>
<li><Link to='beauty'> Beauty & Health </Link></li>
<li><Link to='jewllery'> Jewellery & Accessories </Link></li>
<li><Link to='bags'>Bags & Footwear</Link></li>
</ul>

   
   </>
   )
}

export default Header;