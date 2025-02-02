import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OtpInput from 'react-otp-input';
import { BiArrowBack } from "react-icons/bi";
import { sendOtp, signUp } from '../services/operations/authAPI';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const VerifyEmail = () => {

  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {signupData ,loading} = useSelector( (state) => state.auth);

  useEffect( () => {
    if(!signupData) {
      navigate("/signup");
    }
  }, [])

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    } = signupData;

    dispatch(signUp(accountType,firstName,lastName,email,password,confirmPassword,otp,navigate));
  }

  return (
    <div className='text-white'>
      {
        loading ? (
          <div>
            Loading...
          </div>
        ) : (
          <div>
            <h1>
              Verfiy email
            </h1>
            <p>
              A verification code has been sent to you. Enter the code below
            </p>
            <form onSubmit={handleOnSubmit}>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} className='bg-richblack-600 text-richblack-5'/>}
              />

              <button type='submit'>
                Verfiy email
              </button>
            </form>

            <div>
              <div>
                <Link to="/login">
                  <p className='flex flex-row gap-2 items-center justify-center'>
                    <BiArrowBack />
                    Back to login
                  </p>
                </Link>
              </div>
              
              <button
              onClick={() => dispatch(sendOtp(signupData.email,navigate))}
              >
                Resend it
              </button>
            </div>
          </div>
        )
      }
    </div>
  )
}
