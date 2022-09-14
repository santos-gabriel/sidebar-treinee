import SideBarItem from '../side-bar-item/sideBarItem';
import style from './styles.module.css';

function SideBar() {
  return (
    <div className={style.test}>
      <SideBarItem icon='fa-brands fa-whatsapp' />
    </div>
  );
}

export default SideBar;
