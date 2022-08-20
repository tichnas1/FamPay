import bellIcon from '../../assets/img/bell-icon.svg';
import crossIcon from '../../assets/img/cross-icon.svg';

function SideAction({ icon, text, onClick }) {
  return (
    <div className='big-display-card-side-action' onClick={onClick}>
      <img src={icon} alt='' />
      <span>{text}</span>
    </div>
  );
}

function SideActions({ onRemind, onDismiss }) {
  return (
    <div className='big-display-card-side-actions'>
      <SideAction text='remind later' icon={bellIcon} onClick={onRemind} />
      <SideAction text='dismiss now' icon={crossIcon} onClick={onDismiss} />
    </div>
  );
}

export default SideActions;
