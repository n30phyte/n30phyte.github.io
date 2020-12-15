import './css/Hero.css'
import profile from './images/profile.webp'

function Hero() {
    return (
      <div className="Hero">

        <div className="Picture">
          <img className="rounded" alt="Me" decoding="auto" src={profile}/>
        </div>

        <div className="Bio">
        A code monkey who loves over-engineering solutions, apparently.
        </div>
      </div>
    );
  }
  
  export default Hero;
