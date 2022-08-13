import { Header, Footer, EmailSubmit } from 'components';
import { useState } from 'react';
import { ReactComponent as Logo } from '../Roseeta.svg';
import { dbService } from '../firebase';


function App() {

  return (
    <>
    <Header/>
    <main>
      <div className="content">
        <h2 className="content__title"> 온라인 집사인 당신을 위해 </h2>
        <p></p><p></p><p></p><p></p><p></p><p></p><p></p>
        <div className="content__title--sub"> 반려동물과 함께하는 순간을 <br className="line-change"/> 사진과 영상으로 공유하는 소셜 플랫폼</div>
        <div className="content__title--sub2"> 이메일을 입력하고 사전예약하기 </div>
        <EmailSubmit/>
      </div>
      <div className="content__sub">
      {/* <video
        className="content__img"
        src="video/intro1.mov"
        autoPlay
        playsInline
        muted
        loop></video> */}
        <img className="content__img" src="img/catdog.jpg" />
        <div className="content__info">
          <h3> 반려동물의 아름다운 모습을 기록 </h3>
          <p> 반려동물의 사진과 영상을 업로드하고 사람들과 공유해보세요. </p>
        </div>
      </div>
      {/* <div className="content__divider"></div>
      <div className="content__sub">
      <video
        className="content__img"
        src="video/intro2.mov"
        playsInline
        autoPlay
        muted
        loop></video>
        <div className="content__info">
          <h3> 인상적이었던 부분을 <br/> 북마크에 저장하고 <br className="line-change"/> 언제든 다시 찾아보세요. </h3>
          <p> 직관적으로 저장하고 주변에 공유까지 <br className="line-change"/>간단하게. </p>
        </div>
      </div> */}
      {/* <div className="content__divider"></div>
      <div className="content__sub">
        <video
        className="content__img"
        src="video/intro3.mov"
        autoPlay
        playsInline
        muted
        loop></video>
        <div className="content__info">
          <h3> 책의 유비쿼터스를 경험하세요. </h3>
          <p> 인터넷만 연결된다면 OK입니다. 언제 어디서든, 다양한 디바이스와 브라우저에서 로제타와 함께하세요. </p>
        </div>
      </div> */}
      <div className="content2">
        <div className="content__title--sub"> 지금 이메일을 입력하시고<br className="line-change"/> 서비스 사전예약을 신청하세요. </div>
        <p></p><p></p><p></p><p></p>
        <div className="content__title--sub2"> 제공해주신 이메일 정보는 <br className="line-change"/> 알림 외 다른 목적으로 사용되지 않습니다. </div>
        <EmailSubmit/>
      </div>
    </main>
    <Footer/>
    </>
  );
}

export default App;

