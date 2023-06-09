import classes from './CartButton.module.css';
import {useDispatch} from  'react-redux';
import { uiActions } from '../../Store/ui-slice';
const CartButton = (props) => {
  const  dispatch=useDispatch()
   const toogleHandler =()=>{
    dispatch(uiActions.toogle())
   }
  return (
    <button className={classes.button} conClick={toogleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
