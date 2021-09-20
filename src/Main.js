import React from 'react';
import { auth } from './firebase';

function Main() {
    return (
        <>
        <div>
            <h1>로그인이 성공했습니다.</h1>
        </div>
        <button onClick={() => auth.signOut()}>Logout</button>
    </>
    );
}

export default Main;