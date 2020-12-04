import imgprof from "./../../mountains.jpg";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.contentHeader}>{/* <img src={imgprof} /> */}</div>
      <div className={s.about}>
        <div className={s.avatar}>
          <img src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg" />
        </div>
        <div className={s.aboutInf}>
          <h2>Имя Фамилия</h2>
          <p>
            <b>B-Day: </b> Jenuary 1
          </p>
          <p>
            <b>City:</b> Berlin
          </p>
          <p>
            <b>Education:</b> University
          </p>
          <p>
            <b>Hobbies:</b> nothing
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
