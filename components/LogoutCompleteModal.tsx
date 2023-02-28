import React from 'react'
import { useRecoilState } from 'recoil';
import { logoutCompleteModalShowState } from '../state/logoutCompleteModalShowState';
import { MyCloseIcon } from './LoginModal';
import styles from '../styles/LogoutCompleteModal.module.css';
import { MyMuiRoundButton } from './atoms/buttons/MyMuiRoundButton';

const LogoutCompleteModal = () => {
  // ログアウト完了モーダルの値をrecoilで管理
  const [logouCompleteModalShow, setLogoutCompleteModalShow] = useRecoilState(logoutCompleteModalShowState);
  // モーダルウィンドウを閉じる関数
  const closeLogoutCompleteModal = () => {
    setLogoutCompleteModalShow(false);
  };
  if(logouCompleteModalShow) {
    return (
      <>
        <div id={styles.logout_complete_modal} onClick={closeLogoutCompleteModal}>
          <div id={styles.logout_complete_modal_content}>
            <MyCloseIcon onClick={closeLogoutCompleteModal}/>
            <div>ログアウトしました。</div>
            <MyMuiRoundButton
              onClick={closeLogoutCompleteModal}
            >
              OK
            </MyMuiRoundButton>
          </div>
        </div>
      </>
    )
  } else {
    return null;
  };
};

export default LogoutCompleteModal;