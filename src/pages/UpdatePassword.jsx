import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../services/operations/authAPI';
import { useLocation } from 'react-router-dom';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { BiArrowBack } from "react-icons/bi";
import { Link } from 'react-router-dom';

export const UpdatePassword = () => {

    const dispatch = useDispatch(); 
    const location = useLocation();

    const [formData, setFormData] = useState({
        password:"",
        confirmPassword:""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const {loading} = useSelector((state) => state.auth);

    const {password, confirmPassword} = formData;

    const handleOnChange = (e) => {
        setFormData( (prevData) => (
            {
                ...prevData,
                [e.target.name] : e.target.value
            }
        ))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const token = location.pathname.split('/').at(-1);
        dispatch(resetPassword(password,confirmPassword,token));
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
                        Choose new password
                    </h1>
                    <p>
                        Almost done. Enter your new password and youre all set.
                    </p>
                    <form onSubmit={handleOnSubmit}>
                        <label>
                            <p>New Password</p>
                            <input
                                className='text-black'
                                required
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                value={password}
                                onChange={handleOnChange}
                                placeholder='New password'
                            />
                            <span onClick={() => {
                                setShowPassword(!showPassword);
                            }}>
                                {
                                    showPassword ? (<FaEyeSlash fontSize={24}/>) : (<FaEye fontSize={24}/>)
                                }
                            </span>
                        </label>

                        <label>
                            <p>Confirm New Password</p>
                            <input
                                className='text-black'
                                required
                                type={showConfirmPassword ? 'text' : 'password'}
                                name='confirmPassword'
                                value={confirmPassword}
                                onChange={handleOnChange}
                                placeholder='Confirm new password'
                            />
                            <span onClick={() => {
                                setShowConfirmPassword(!showConfirmPassword);
                            }}>
                                {
                                    showConfirmPassword ? (<FaEyeSlash fontSize={24}/>) : (<FaEye fontSize={24}/>)
                                }
                            </span>
                        </label>

                        <button type='submit'>
                            Reset Password
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
