import { RiGlobalFill, RiPantoneFill, RiQuillPenLine } from '@remixicon/react'
import React from 'react'
import SlideUp from '../../utlits/animations/slideUp'

const ServiceGrid = () => {
    return (
        <section id="services" className="services-area innerpage-single-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <p>Services</p>
                                    <h2>Quality Services</h2>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="row">
                        <Card id={1} icon={<RiGlobalFill size={60} />} title={"Brand Identity Design"} description={"Brand identity design involves creating visual elements like logos, color palettes, and typography that represent a brand's values and personality, ensuring consistency and recognition across all customer touchpoints."} />
                        <Card id={2} icon={<RiQuillPenLine size={60} />} title={"UI/UX Design Design"} description={"UI/UX design focuses on creating user-friendly digital interfaces. UI deals with visual elements, while UX ensures seamless, intuitive user experiences through research, design, and user-centered problem-solving."} />
                        <Card id={3} icon={<RiPantoneFill size={60} />} title={"Creative Poster Design & Content Creation"} description={"Creative poster design combines visuals and typography to convey messages, while content creation develops engaging text or media to effectively communicate with the target audience."} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceGrid

const Card = ({ icon, title, description, id }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <SlideUp delay={id}>
                <div className="service-item">
                    {icon}
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </SlideUp>
        </div>
    )
}