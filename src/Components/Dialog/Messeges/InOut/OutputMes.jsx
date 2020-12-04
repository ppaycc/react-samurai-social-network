import s from "./OutputMes.module.css";

const OutputMes = () => {
  return (
    <div className={s.main}>
      <div className={s.span}>
        <p>
          Большое
          <span className={s.spy}>1212pxp</span>
        </p>

        <span className={s.time}>12:12 pm</span>
        {/* <div className={s.spyTime}>1212 pm</div> */}
      </div>
    </div>
  );
};

export default OutputMes;
