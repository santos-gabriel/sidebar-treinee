import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../shared/icons';


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
          <FontAwesomeIcon icon={icons.whatsapp} />
          <FontAwesomeIcon icon={icons.facebook} />
          <FontAwesomeIcon icon={icons.twitter} />
          <FontAwesomeIcon icon={icons.github} />
          <FontAwesomeIcon icon={icons.linkedin} />
          <FontAwesomeIcon icon={icons.youtube} />
        </div>
      </div>
    </div>
  );
}

export default Header;
