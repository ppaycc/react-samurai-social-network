import imgprof from "./../../mountains.jpg";
import s from "./Profile.module.css";
import userNone from '../../default/img/user.png';

const Profile = (props) => {
  if(!props.profile){
    return <div>рендер</div>
  } else {
    return (
        <div className={s.content}>
          <div className={s.contentHeader}>{/* <img src={imgprof} /> */}</div>
          <div className={s.about}>
            <div className={s.avatar}>
              {/*<img src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg" />*/}
              <img src={props.profile.photos.large ? props.profile.photos.large : userNone} />
            </div>
            <div className={s.aboutInf}>
              <h2>{props.profile.fullName}</h2>
              <p>
                <b>About me:</b> {props.profile.aboutMe ? props.profile.aboutMe : "no"}
              </p>
              <p>
                <b>Looking for a job:</b> {props.profile.lookingForAJobDescription || "nope"}
              </p>
              {/*<p>*/}
              {/*  <b>Education:</b> University*/}
              {/*</p>*/}
              {/*<p>*/}
              {/*  <b>Hobbies:</b> nothing*/}
              {/*</p>*/}
            </div>
          </div>
        </div>
    );
  }
  // return (
  //   <div className={s.content}>
  //     <div className={s.contentHeader}>{/* <img src={imgprof} /> */}</div>
  //     <div className={s.about}>
  //       <div className={s.avatar}>
  //         <img src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg" />
  //         {/*<img src={props} />*/}
  //       </div>
  //       <div className={s.aboutInf}>
  //         <h2>Имя Фамилия</h2>
  //         <p>
  //           <b>B-Day: </b> Jenuary 1
  //         </p>
  //         <p>
  //           <b>City:</b> Berlin
  //         </p>
  //         <p>
  //           <b>Education:</b> University
  //         </p>
  //         <p>
  //           <b>Hobbies:</b> nothing
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Profile;
