import React from 'react'
import {useNavigate} from "react-router-dom"

const Payment = () => {

  const navigate = useNavigate()
  const navv = ()=>{
    navigate("/otpverification")
  }

  return (
    <div className="max-width">

<h6 style={{marginLeft:"480px",marginTop:"30px"}}>Please select Payment Method</h6>

<div style={{display:"flex",gap:"30px", marginLeft:"50px"}}>

  {/* atm logo div */}

<div>
<img   style={{height:"250px", marginTop:"60px"}} src="https://www.indusind.com/content/dam/indusind-platform-images/productCategory/desktopImage/debitCard/platinum_exclusive_VISA_debit_card.png"alt=""/>

</div>

{/* paymntdiv */}

        <div class="accordion" id="accordionExample" style={{width:"40%"}}>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
     <b>CREDIT / DEBIT CARD </b>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       


 <div >

     {/* first div */}
         <div style={{display:"flex",width:"25%"}}>

               <div>

                   <div style={{display:"flex", gap:"50px"}}> 
                  <p> First name</p>
                  <p style={{fontSize:"12px", color:"#6d6e6e"}}>Optional</p>
                   </div>
              <input placeholder="First Name " style={{width:"200px"}}/>
               </div>



             <div >
           <div style={{display:"flex" , gap:"50px",marginLeft:"10px"}}>
          <p>Last name</p>
          <p style={{fontSize:"12px", color:"#6d6e6e"}}>Optional</p>

        </div>
         <input placeholder="Last Name " style={{width:"200px", marginLeft:"10px"}}/>

       </div>


     </div>


     {/* card no and cvv div */}
     

<div style={{display:"flex", marginTop:"10px"}}>

<div>
<p>card number</p>
<input placeholder="**** **** **** ****"  style={{width:"300px"}}/>

</div>

<div>
<p style={{marginLeft:"10px"}}>CVV</p>
<input placeholder="***"  style={{width:"50%", marginLeft:"10px"}} />
</div>

    </div>








{/* ending */}

{/*   starttinh img div */}

  <img  style={{height:"30px", marginLeft:"80px", marginTop:"15px"}}src="https://www.ladydowns.co.uk/wp-content/uploads/2016/06/credit-card-logos.png" alt=""/>

{/* ending */}


{/* dropdowns starttinh */}


<div style={{display:"flex", gap:"30px", marginTop:"20px"}}> 

    <p>Valid until</p>

    {/* first deopdoem */}

    <select class="form-select" aria-label="Default select example" style={{width:"30%"}}>
  <option selected>Month</option>
  <option value="January">January</option>
  <option value="Febraury">Febraury</option>
  <option value="March">March</option>
  <option value="April">April</option>
  <option value="May">May</option>
  <option value="June">June</option>
  <option value="July">July</option>
  <option value="August">August</option>
  <option value="September">September</option>
  <option value="October">October</option>
  <option value="November">November</option>
  <option value="December">December</option>
</select>

{/* end first dropdown */}



{/* second dropdown */}

<select class="form-select" aria-label="Default select example" style={{width:"30%"}}>
  <option selected>Year</option>
  <option value="2022">2022</option>
  <option value="2023">2023</option>
  <option value="2024">2024</option>
  <option value="2025">2025</option>
  <option value="2026">2026</option>
  <option value="2027">2027</option>
  <option value="2028">2028</option>
  <option value="2029">2029</option>
  
 
</select>


{/* end second dropdown */}
    </div>


{/* endd */}


{/* button div start */}

 <div style={{display:"flex", marginTop:"20px", gap:"10px"}}>

     <button style={{width:"200px", height:"40px", backgroundColor:"#4b5666", color:"white", border:"none", fontWeight:"bold"}}>Cancel</button>
     <button style={{width:"200px",backgroundColor:"#40824f", color:"white",border:"none",fontWeight:"bold"}} onClick={navv}> Submit</button>
     </div>
{/* end button div */}

     </div>





      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Cash On Delivery
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       <p>Cash on delivery available</p>
      </div>
    </div>
  </div>
  
</div>


</div>
    </div>
  )
}

export default Payment
