import React from 'react';
import './styles/briefAbout.css';
import './styles/responsive.css';
const BriefAbout = () => {
    return (
        <section className='briefAboutSection'>
            <div className='briefAboutDiv'>
                <h1 className='briefAboutHeader'>Who Are We ?</h1>
                <div className='breafAboutStatement'>
                <p>We are a charitable organization that focuses on aiding in providing quality education for <b>children</b> from less priviledged homes by providing them with school bags and other learning materials.The foundation also helps in < br /><b>Women Empowerment</b> by providing platforms for women to build their capacity </p>
                </div>
            </div>
        </section>
    )
}

export default BriefAbout
