import React, { useState } from 'react';
import './Login.css'
import { auth, provider } from "./firebase";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = () => {
        auth.signInWithPopup(provider).catch((e) => alert(e.message));
    }

    const handleLogin = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(
            (auth) => {
                console.log(auth);
            }).catch((e) => alert(e.message))

        setEmail("");
        setPassword("");
    }

    const handleRegister = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            if (auth) {
                console.log(auth)
            }

        }).catch((e) => alert(e.message))
        setEmail("");
        setPassword("");
    };

    return (
        <div className="login">
            <div className="login_container">
                <div className="login_desc">
                    <p> 로그인 화면입니다</p>
                </div>
                <div className="login_auth">
                    <div className="login_authOptions">
                        <div className="login_authOption">
                            <img className="login_gooogleAuth"
                                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                                alt="" />
                            <p onClick={signIn}> 구글 아이디로 로그인 </p>
                        </div>
                    </div>
                    <div className="login_emailPass">
                        <div className="login_label">
                            <h4> 로그인 </h4>
                        </div>
                        <div className="login_inputFields">
                            <div className="login_inputField">
                                <input type="text" placeholder="이메일"
                                    value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="login_inputField">
                                <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="login_forgButt">
                            <small> 비밀번호 찾기</small>
                            <button type="submit" onClick={handleLogin}>로그인</button>
                        </div>
                        <button onClick={handleRegister}>회원가입</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;