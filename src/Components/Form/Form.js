import styles from "./Form.module.css";
const BasicForm = (props) => {
  return (
    <>
      <div className={`${styles.controlGroup}`}>
        <div className={styles.formControl}>
          <label htmlFor="name">Name</label>
          <input
            className={`${props.nameInputClasses ? styles.invalid : ""}`}
            type="text"
            id="name"
            value={props.enteredName}
            onChange={props.nameHandler}
            onBlur={props.nameValidationHandler}
          />
          {props.inputNameValidation && (
            <p className={styles.errorText}>(Name must not be empty)</p>
          )}

          <label htmlFor="name">Addres</label>
          <input
            className={`${props.surNameInputClasses ? styles.invalid : ""}`}
            type="text"
            id="name"
            value={props.enteredSurName}
            onChange={props.surNameHandler}
            onBlur={props.surNameValidationHandler}
          />
          {props.inputSurNameValidation && (
            <p className={styles.errorText}>(Surname must not be empty)</p>
          )}
          <label htmlFor="name">Email </label>
          <input
            className={`${props.mailInputClasses ? styles.invalid : ""}`}
            type="email"
            id="mail"
            onChange={props.mailHandler}
            onBlur={props.mailValidationHandler}
            value={props.enteredMail}
          />
          {props.inputMailValidation ? (
            props.enteredMail === "" ? (
              <p className={styles.errorText}>(Mail must not be empty)</p>
            ) : (
              <p className={styles.errorText}>(Email no Buenou)</p>
            )
          ) : (
            ""
          )}
        </div>
      </div>

      <div className={styles.formActions}></div>
    </>
  );
};

export default BasicForm;
