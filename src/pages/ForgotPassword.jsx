import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiArrowBack } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { getPasswordResetToken } from '../services/operations/authAPI';
import toast from 'react-hot-toast';

export const ForgotPassword = () => {

    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState("");

    const {loading} = useSelector( (state) => state.auth);

    const dispatch = useDispatch();

    const handleOnSubmit = (e) => {
        // toast.success("Button clicked");
        e.preventDefault();
        dispatch(getPasswordResetToken(email, setEmailSent));
    }

  return (
    <div className='flex items-center justify center mx-auto text-white'>
        {
            loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <h1>
                        {
                            emailSent ? ("Check Email") : ("Reset your password")
                        }
                    </h1>

                    <p>
                        {
                            emailSent ? (
                                `We have sent the reset email to ${email}`
                            ) : (
                                "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
                            )
                        }
                    </p>

                    <form onSubmit={handleOnSubmit}>
                        {
                            !emailSent && (
                                <label>

                                    <p>Email Address<sup>*</sup></p>
                                    <input
                                        required
                                        type='email'
                                        name='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder='Enter your email address'
                                    />

                                </label>
                            )
                        }

                        <button type='submit'>
                            {
                                emailSent ? ("Resend Email") : ("Reset Password")
                            }
                        </button>
                    </form>

                    <div>
                        <Link to="/login">
                            <p className='flex flex-row gap-2 items-center justify-center'>
                                <BiArrowBack />
                                Back to login
                            </p>
                        </Link>
                    </div>
                </div>
            )
        }
    </div>
  )
}
