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
          <div className={style.sideBarMenuItemLabel}>
            <span>Configurações</span>
          </div>
        </div>

        <div className={style.sideBarMenuItem}>
          <div className={style.sideBarMenuItemIcons}>
            <div>
            </div>
            <SideBarItem icon={icons.share}/>
          </div>
          <div className={style.sideBarMenuItemLabel}>
            <span>Compartilhamento</span>
          </div>
        </div>

        <div className={`${style.sideBarMenuItem} ${style.sideBarMenuItemSubLis}`}>
          <div>
            <div className={style.sideBarMenuItemIcons}>
              <div>
                {/* <SideBarItem icon={icons.caretRight} /> */}
                <SideBarItem icon={icons.caretDown} />
              </div>
              <SideBarItem icon={icons.fileArchive}/>
            </div>

            <div className={style.sideBarMenuItemLabel}>
              <span>Relatórios</span>
            </div>
          </div>

          <div className={style.subList}>
            <ul>
              <li>Usuários e Perfis</li> 
              <li>Operacionais</li>
              <li>Financeiros e Faturamento</li> 
              <li>Auditoria</li>
              <li>Estoque e Suprimentos</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

export default SideBar;
