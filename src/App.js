import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [cardnumber,setCardnumber] = useState();
  const [cardholder,setCardholder] = useState("");
  const [cardmonth,setCardmonth] = useState();
  const [cardyear,setCardyear] = useState();



  return (
    <>
    {/* credit card */}
    <div className='container-fluid'>
      <div className='row'>
        <center>
        <div className='col-md-4 bg-info div1'>
          <img src='img/6508085.png' className='img1 img-fluid float-start m-3'/>
          <img src='img/83daa2cdef3b2a7475f8792f65e63bc0.png' className='img1 img-fluid float-end m-3'/>
          <input type='text' placeholder='CARD NUMBER' className='input1' value={cardnumber}/>

          <div className='container div2'>
            <div className='row'>
              <div className='col-md-8'>
                <input type='text' placeholder='NAME' className='input2 ' value={cardholder}/>
              </div>

              <div className='col-md-4'>
                <input type='text' placeholder='MM' className='input3' value={cardmonth}/>
                <input type='year' placeholder='YY' className='input4' value={cardyear}/>
              </div>
            </div>
          </div>
          
        </div>
        </center>
      </div>
    </div>
    {/* credit end */}

    {/* form */}

    <div className='container'>
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6' style={{background:"gray",borderRadius:"10px"}}>
          <form>
          <h5 className='pt-3'>Card number</h5>
          <input type='text' placeholder='CARD NUMBER' maxLength={16} className='input5' onChange={(e) => setCardnumber(e.target.value) } />

          <h5 className='pt-3'>Card Holder</h5>
          <input type='text' placeholder='CARD HOLDER' maxLength={20} className='input5' onChange={(n) => setCardholder(n.target.value)}/>

          <h5 className='pt-3'>Month/Year</h5>
          <div className='row'>
            <div className='col-md-6'>
            <input type='text' placeholder='MONTH' maxLength={2} className='input6' onChange={(m) => setCardmonth(m.target.value)}/>
            </div>

            <div className='col-md-6'>
            <input type='year' placeholder='YEAR' maxLength={4} className='input6' onChange={(y) => setCardyear(y.target.value)}/>
            </div>
          </div>

          <button type='submit' className='btn1 col-md-12'>
            SUBMIT
          </button>
          </form>
        </div>
        <div className='col-md-3'></div>
      </div>

    </div>


    {/* form end */}
    
    
    
    </>
  );
}

export default App;
