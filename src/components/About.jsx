import React from 'react'

const About = () => {
    return (
        <div name="sobre mi" className='w-full h-screen bg-gradient-to-b from-gray-800 to-purple-900 text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure distinctio expedita veritatis ipsam odit maiores exercitationem consectetur cum eligendi, quia assumenda nulla enim porro inventore quae earum dolorum laborum voluptatibus veniam corrupti natus consequatur! Alias rem deleniti provident ipsam, odit quaerat sequi exercitationem ducimus ut, illum tempore praesentium voluptas corrupti?</p>
                <br />
                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ea esse. Doloribus ex porro non! Itaque iste quidem suscipit natus tempora id aperiam nam et nihil, est veritatis officia iure debitis nulla repudiandae maxime obcaecati non. Sint debitis nemo exercitationem dicta sequi odio at vel deleniti. Totam cumque distinctio beatae?</p>
            </div>
        </div>
    )
}

export default About