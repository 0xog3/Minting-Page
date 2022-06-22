{/* slideshow*/}
import React from 'react';


const Slideshow = () => {
  return (
    <div name='about' className="bg-[url('https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_960_720.png')]
    bg-no-repeat bg-cover">
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              NFT Token
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>100,000 NFT COLLECTON</p>
            </div>
            <div>
              <p>THIS IS WHERE YOU WOULD PUT INFO ABOUT SOMETHING IDK YOU MAKE IT UP
                 THIS JUST AN EXAMPLE OF IT 
                </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default Slideshow;