
import {Typewriter} from 'react-simple-typewriter';
export default function Hero(){

    return(
        <div className="hero">
            <div className="Hero-text">
                <h1>One Step Closer</h1>
                <h3>to your {''}
                    <Typewriter
                        words={['dream job!', 'stable life', 'future']}
                        loop={true}
                        cursor={true}
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h3>
                <p>Let us help you find a job that suits you the best</p>
                <button>Get started</button>
            </div>
            <div className='hero-image'>
                <img src="https://hases.onrender.com/hero.png" alt="" />
            </div>
        </div>
    )
}