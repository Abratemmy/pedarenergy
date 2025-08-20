import React from 'react';
import './CounterComponent.scss';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function CounterComponent() {
    const { ref, inView } = useInView({
        triggerOnce: true,   // only animate once
        threshold: 0.5,      // 50% of section visible triggers it
    });

    return (
        <div className="homeCounterContainer" ref={ref}>
            <div className="container">
                <div className='counterWrapper'>
                    <div className='counterItem'>
                        <p className='first'>Sucessful Projects Delivered</p>
                    </div>

                    <div className='counterItem'>
                        <h2>
                            {inView ? <CountUp end={7} duration={2} /> : 0}
                        </h2>
                        <p>Distinct Service Lines</p>
                    </div>

                    <div className='counterItem'>
                        <h2>
                            {inView ? <CountUp end={10} duration={3} /> : 0}+
                        </h2>
                        <p>OEM Partnerships</p>
                    </div>

                    <div className='counterItem'>
                        <h2>
                            {inView ? <CountUp end={100} duration={3} /> : 0}%
                        </h2>
                        <p>ESG Commitment</p>
                    </div>
                    {/* <div className="counterContainer">

                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default CounterComponent