import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './headar';
import CardD from './component/cardD';
import Card from './component/Card';
import Loginpage from './log/loginpage';
import BagsFootwear from './component/AllManu/Bags&Footwear';
import Footer from './Footer';
import BeautyHealth from './component/AllManu/Beauty&Health';
import HoomeKItchen from './component/AllManu/Home&Kitchen';
import Kids from './component/AllManu/Kids';
import Men from './component/AllManu/Men';
import WomenEthnic from './component/AllManu/WomenEthnic';
import Jewellery from './component/AllManu/Jewellery&Accessories';
import WomenWestern from './component/AllManu/WomenWestern'
import { Routes , Route ,Switch} from 'react-router-dom'
function App() {
  return (
<>
<Header /> 
  
<Switch>
<Route exact path='/'  component={Card} />
<Route  path='/c'  component={CardD} />
  <Route path='/log' component={Loginpage}  />
  <Route path='/bags' component={BagsFootwear} />
  <Route path='/beauty' component={BeautyHealth} />
  <Route path='/Hoome&kitchen' component={HoomeKItchen} />
  <Route path='/kids' component={Kids} />
  <Route path='/men' component={Men} />
  <Route path='/women' component={WomenEthnic} />
  <Route path='/jewllery' component={Jewellery} />
  <Route path='/WomenWestern' component={WomenWestern} />
</Switch>
<Footer />

</>
  );
}

export default App;
