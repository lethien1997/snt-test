import { Container, Grid } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../../redux/action';
import styles from './styles.module.scss';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function isEmpty(str) {
  if (!str || str.length === 0) {
    return true;
  }
  return false;
}

function Login() {
  let navigate = useNavigate();
  const { accessToken, isSubmitting, errMessage } = useSelector(
    (state) => state.login
  );
  const [formValue, setFormValue] = useState({ apiKey: '', secret: '' });
  const [errors, setErrors] = useState({
    apiKey: '',
    secret: '',
  });
  const [isErrorMessage, setIsErrorMessage] = useState(false)
  const { apiKey, secret } = formValue;
  const dispatch = useDispatch();
  const validate = () => {
    if (isEmpty(apiKey)) {
      handleOnError('Vui lòng nhập API Key!', 'apiKey');
    }
    if (isEmpty(secret)) {
      handleOnError('Vui lòng nhập Secret!', 'secret');
    }
    if (apiKey !== '' && secret !== '') {
      const data = {
        grant_type: 'client_credentials',
        client_id: apiKey,
        client_secret: secret,
      };
      dispatch(loginRequest(data));
    }
  };
  const handleOnChange = (text, input) => {
    // setIsErrorMessage(false)

    setErrors((prev) => ({ ...prev, [input]: '' }));
    setFormValue((prev) => ({ ...prev, [input]: text }));
  };
  const handleOnError = (errorMsg, input) => {
    setErrors((prev) => ({ ...prev, [input]: errorMsg }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    validate();
  };
  useEffect(() => {
    if (isSubmitting === false) {
      navigate(`/animals`);
    }
    if(errMessage === true) {
      setIsErrorMessage(true)
    }
  }, [isSubmitting, errMessage]);


  return (
    <Container>
      <Grid container spacing={1} className={styles.wrapper}>
        <Grid item xs={12} sm={8} md={6} className={styles.content}>
          <div className={styles.block}>
            <h1>LOGIN</h1>
            {isErrorMessage === true && (
              <h4 className={styles.errorMessage}>
                API Key hoặc Secret không chính xác!
              </h4>
            )}
            <form>
              <label>API Key:</label>
              <input
                className={clsx({
                  [styles.isErrorApiKey]: errors.apiKey,
                  [styles.isErrorMessage]: isErrorMessage
                })}
                value={formValue.apiKey}
                onChange={(e) => handleOnChange(e.target.value, 'apiKey')}
              />
              {errors.apiKey && <p>{errors.apiKey}</p>}
              <label>Secret:</label>
              <input
                className={clsx({ [styles.isErrorSecret]: errors.secret, 
                  [styles.isErrorMessage]: isErrorMessage
                
                })}
                value={formValue.secret}
                onChange={(e) => handleOnChange(e.target.value, 'secret')}
              />
              {errors.secret && <p>{errors.secret}</p>}

              <span>
                <button onClick={handleSubmit}>
                  {isSubmitting === true ? (
                    <CircularProgress
                      style={{ width: 18, height: 18, margin: 'auto' }}
                    />
                  ) : (
                    'Login'
                  )}
                </button>
              </span>
            </form>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
