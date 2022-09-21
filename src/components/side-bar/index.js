import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SideBarItem from '../side-bar-item/sideBarItem';
import style from './styles.module.css';

import icons from '../shared/icons';

function SideBar() {
  return (
    <div className={style.sideBar}>
      
      <div className={style.sideBarMenu}>
        <div className={style.sideBarMenuItem}>
          <div className={style.sideBarMenuItemIcons}>
            <div>
            </div>
            <SideBarItem icon={icons.gears}/>
          </div>
          <div>
            <span>Configurações</span>
          </div>
        </div>
        <div className={style.sideBarMenuItem}>
          <div className={style.sideBarMenuItemIcons}>
            <div>
            </div>
            <SideBarItem icon={icons.share}/>
          </div>
          <div>
            <span>Compartilhamento</span>
          </div>
        </div>
        <div className={style.sideBarMenuItem}>
          <div className={style.sideBarMenuItemIcons}>
            <div>
              {/* <SideBarItem icon={icons.caretRight} /> */}
              <SideBarItem icon={icons.caretDown} />
            </div>
            <SideBarItem icon={icons.fileArchive}/>
          </div>
          <div>
            <span>Relatórios</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default SideBar;
