import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './styles.module.css';

function SideBarItem(props) {
  return (
    <div>
      <FontAwesomeIcon icon={props.icon} />
    </div>
  );
}

export default SideBarItem;
