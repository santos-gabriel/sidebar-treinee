import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faYoutube, faLinkedin, faGithub, faTwitter, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


import style from './styles.module.css';

function Header() {
  return (
    <div className={style.header}>
      <div>
        <div className={style.divBurger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={style.divImg}>
          <img src="logo.svg" alt="" />
          <p>Hello Header!</p>
        </div>
      </div>

      <div>
        <div className={style.divSearch}>
          <input type="text" placeholder='Pesquise aqui'/>
        </div>
        <div className={style.divContacts}>
          <FontAwesomeIcon icon={faWhatsapp} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>
    </div>
  );
}

export default Header;
