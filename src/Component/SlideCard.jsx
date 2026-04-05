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
                            <img  src={img.image} alt={img.title} className='w-full h-96'/>
                            <h3 className='absolute text-primary bebas bottom-8 left-8 text-4xl'>{img.title}</h3>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default SlideCard;