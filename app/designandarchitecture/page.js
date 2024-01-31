import React from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import OurProcessItem from '@/components/OurProcessItem'
import ServicePages from '@/components/ServicePages'
import SemiFooter from '@/components/SemiFooter'
import daa from '@/public/DesignAndArchitecture/daa.svg'
import daa1 from '@/public/DesignAndArchitecture/daa1.svg'
import daa2 from '@/public/DesignAndArchitecture/daa2.svg'
import daaprocess from '@/public/DesignAndArchitecture/daaprocess.svg'
import conceptualisation from '@/public/DesignAndArchitecture/conceptualisation.svg'
import interiordesign from '@/public/DesignAndArchitecture/interiordesign.svg'
import design from '@/public/DesignAndArchitecture/design.svg'
import architecture from '@/public/DesignAndArchitecture/architecture.svg'

const page = () => {
    return (
        <>
            <NavBar />

            <ServicePages
                title='DESIGN & ARCHITECTURE'
                description1='We apply all our technical know-how of the profession and experience with Computer-Aided Design (CAD) Software to provide services.'
                description2='As an agile organisation, we offer a unique and innovative Architectural Service that cut across residential, offices, hospitals, and religion centres. We have come to understand that creating architectural designs is much more than just understanding concepts, components, or elements of a structure. It is about replicating and further developing what our clients see in their minds-eye, emotions, sustainability, and most importantly, the experience. At Ahrelia, our team of seasoned experts and futuristic designers are ever ready to guide clients to make the best decisions in all their developments, even when they seem unsure.'
                image1={daa}
                image2={daa2}
                image3={daa1}
            />

            <div className='flex p-10 bg-[#E9E7E7]'>
                <div className='w-[30%]'>
                    <Image src={daaprocess} />
                </div>
                <div className='bg-[#D9D9D9] p-5 w-[70%] ml-10'>
                    <h1 className='text-center mb-10'>OUR PROCESS</h1>
                    <div className='flex justify-evenly'>
                        <OurProcessItem stepImage={conceptualisation}
                            heading='CONCEPTUALISATION'
                            description='In-depth Analysis and study of the Project zoning . Organize proposed spaces to achieve a functional design.Providing our clients with first ideas or concepts.Presenting blueprints and modifiable solutions to our clients'
                            stepNumber={1}
                        />
                        <OurProcessItem stepImage={interiordesign}
                            heading='INTERIOR DESIGN'
                            description='Space planning,Interior designed floor plans, elevations, 3D illustrations, lighting design, kitchen designs, storage solutions, bathrooms, and bedroom designs, coordinating colour schemes, designs for custom furniture'
                            stepNumber={2}
                        />
                        <OurProcessItem stepImage={design}
                            heading='DESIGN'
                            description='Based on the demand and current needs for the project at hand, we also prepare detailed designs for our clients.'
                            stepNumber={3}
                        />
                        <OurProcessItem stepImage={architecture}
                            heading='ARCHITECTURE'
                            description='A dedicated Project Manager will oversee the entire build and construction of your project throughout the process.Once construction is completed our team will complete a final thorough inspection to ensure that all quality standards have been met'
                            stepNumber={4}
                        />
                    </div>
                </div>
            </div>

            <SemiFooter
                title='Have an upcoming project'
                description="let's work with you (Ahrelia ®) to achieve your goal"
                buttonDestination='/contact'
                buttonLabel='CONTACT US'
            />

            <Footer />
        </>
    )
}

export default page