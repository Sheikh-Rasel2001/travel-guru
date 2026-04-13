import React from 'react';

const SlideCard = ({ index, images }) => {
    // console.log(images, index);
    return (
        <div className='relative overflow-hidden w-full'>
            <div className='flex gap-4 transition-all duration-500'
                style={{ transform: `translateX(-${index * 40}%)` }}
            >
                {
                    images.map((img, i) => (
                        <div key={i} className='min-w-[40%] relative'>
                            <img  src={img.image} alt={img.title} className='w-full lg:h-96 h-64'/>
                            <h3 className='absolute text-primary bebas lg:bottom-8 lg:left-8 bottom-4 left-4 text-2xl lg:text-4xl'>{img.title}</h3>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default SlideCard;