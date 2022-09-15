import SideBarItem from '../side-bar-item/sideBarItem';
import style from './styles.module.css';

import icons from '../shared/icons';

function SideBar() {
  return (
    <>
      <div className={style.test}>
        <SideBarItem icon={icons.gears}/>
      </div>
      <div className={style.test}>
        <SideBarItem icon={icons.share}/>
      </div>
    </>
  );
}

export default SideBar;
