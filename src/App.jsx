import React from 'react'
import image from "./assets/download.jpg"
export default function App() {
  return (
    <>
      <div className='text-center bg-pink-700 text-pink-700 w-[1123] '>
        hello
      </div>
      <div className=' ml-28'>


        <div className='flex flex-row mt-16 text-[17px]'>
          <div>
            <img className='rounded-full w-[250px]' src={image} alt="" />
            <div className='mt-[320px] text-2xl text-pink-700'>
            <p className='ml-8 mb-3' ><i class="ri-map-pin-line mr-2 text-pink-900"></i>Recipient City, ST Zip</p>
                <p  className='ml-8 mb-3' ><i class="ri-mail-line mr-2 text-pink-900"></i>email</p>
                <p  className='ml-8 mb-3' ><i class="ri-global-line mr-2 text-pink-900"></i>website</p>
                <p  className='ml-8 mb-3' ><i class="ri-phone-line mr-2 text-pink-900"></i>phone</p>
                </div>
          </div>

          <div className=' w-[650px] ml-40'>
            <h1 className='text-4xl text-pink-700 font-medium'>First Name</h1>

            <h1 className='text-4xl text-pink-700 font-medium mt-3'> Surname</h1>
            <hr className='w-[650px] h-[6px] mt-9 font-bold bg-pink-700' />
            <h3 className='text-xl mt-8 mb-8'>Date</h3>
            <p>Recipient Name</p>
            <div className='flex flex-row'>
              <div className=''>
                <p>Title</p>
                <p>Company</p>
              </div>

              <div className='ml-72 '>
                <p>Recipient Street Address </p>
                <p>Recipient City, ST Zip</p></div>
            </div>


            <hr className='w-[650px] h-[6px] mt-9 mb-9 font-bold bg-pink-700' />

            <h3 className='text-3xl font-normal text-pink-700'>Dear Recipient Name</h3>
            <p className='mt-9'>Recipient Street Address Recipient City, ST Zip
              If you're ready to write, select a line or paragraph of tip text and start typing to replace it with your own. Don't include space to the right of the characters in your selection. <br />
            </p>
           
               <p className='mt-7'> It's easy to match any of the text formatting you see here. On the Home tab of the ribbon, check out the Styles gallery for all styles used in this letter.</p>

                <p className='mt-6'>Sincerely, <br />  Your Name</p>
              
            


          </div>
        </div>
      </div>

    </>
  )
}
