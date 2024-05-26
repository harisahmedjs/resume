import React from 'react'
import image from "./assets/download.jpg"
export default function App() {
  return (
    <>
      <div className='text-center bg-pink-700 text-pink-700'>
        hello
      </div>
      <div className='ml-10'>


        <div className='flex flex-row mt-16  '>
          <div>
            <img className='rounded-full w-[500px]' src={image} alt="" />
            <div className='mt-[250px]'>
            <p>[Recipient City, ST Zip]</p>
                <p>email</p>
                <p>website</p>
                <p>phone</p>
                </div>
          </div>

          <div className='ml-32'>
            <h1 className='text-4xl text-pink-700 font-medium'>[First Name]</h1>

            <h1 className='text-4xl text-pink-700 font-medium mt-3'> [Surname]</h1>
            <hr className='w-[700px] h-[6px] mt-9 font-bold bg-pink-700' />
            <h3 className='text-xl mt-8 mb-8'>Date</h3>
            <p>[Recipient Name]</p>
            <div className='flex flex-row'>
              <div className=''>
                <p>[Title]</p>
                <p>[Company]</p>
              </div>

              <div className='ml-72 '>
                <p>[Recipient Street Address] </p>
                <p>[Recipient City, ST Zip]</p></div>
            </div>


            <hr className='w-[700px] h-[6px] mt-9 mb-9 font-bold bg-pink-700' />

            <h3 className='text-3xl font-normal text-pink-700'>Dear Recipient Name</h3>
            <p className='mt-9'>Recipient Street Address Recipient City, ST Zip
              If you're ready to write, select a line or paragraph of tip text and start typing to replace it with your own. Don't include space to the right of the characters in your selection. <br />
            </p>
           
               <p className='mt-7'> It's easy to match any of the text formatting you see here. On the Home tab of the ribbon, check out the Styles gallery for all styles used in this letter.</p>

                <p className='mt-4'>Sincerely, <br /> Your Name</p>
              
            


          </div>
        </div>
      </div>

    </>
  )
}
