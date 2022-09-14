import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import icons from '../shared/icons';

import style from './styles.module.css';

function SideBarItem(props) {
  return (
    <div className={style.test}>
      {/* <FontAwesomeIcon icon={props.icon} /> */}
      <FontAwesomeIcon icon={icons.whatsapp} />
      
      {/* <FontAwesomeIcon icon={faWhatsapp} /> */}
    </div>
  );
}

export default SideBarItem;
