import React from 'react'
import Titleheader from '../Components/Titleheader'
import { expCards } from '../constants'
import GlowCards from '../Components/GlowCards'

const ExperianceSection = () => {
    return (
        <section id='experiance' className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
            <div className='w-full h-full md:px-20 px-5'>
                <Titleheader
                    title="Professional Work Experience "
                    sub="👜 my Carrier Overview" />

                <div className='mt-32 relative'>
                    <div className='relative z-50 xl:space-y-32 space-y-10'>
                        {expCards.map((card) => (
                            <div key={card.title} className='exp-card-wrapper'>
                                <div className='xl:w-2/6'>
                                    <GlowCards card={card}>
                                        <div>
                                            <img src={card.imgPath} alt={card.title} />
                                        </div>
                                    </GlowCards>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </section>
    )
}

export default ExperianceSection
