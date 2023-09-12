import { useState } from 'react';
import { Button, Overlay } from 'react-bootstrap';
import Popover from 'react-bootstrap/Popover';
import './PopOver.css';
import img from './../../../assets/user.svg';
import { useRef } from 'react';
import toast from 'react-hot-toast';
import { handleSignOut } from '../../Auth/LogIn';
import { SET_USER, useAuthContext } from '../../../context';

const PopOver = () => {
  const {
    state: {
      user: { username, businessName, email },
    },
    dispatch,
  } = useAuthContext();
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  const signOut = () => {
    const loading = toast.loading('Please wait...');
    handleSignOut().then((res) => {
      toast.dismiss(loading);
      console.log(res);
      dispatch({ type: SET_USER, payload: res });
      toast.error('Logged Out!');
    });
  };
  return (
    <div>
      <h5 className="BusinessName">{`${businessName}`}</h5>
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref.current}
        containerPadding={50}
      >
        <Popover id="popover-contained">
          <div className="text-center">
            <img src={img} alt="" onClick={handleClick} className="popImg" />
            <p className="userName">{`${username}`}</p>
            <p className="userEmail">{email}</p>
            <Button variant="outline-danger" size="sm" onClick={signOut}>
              Log out
            </Button>
          </div>
        </Popover>
      </Overlay>
    </div>
  );
};

export default PopOver;
