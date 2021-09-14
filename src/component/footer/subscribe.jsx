/* eslint-disable */
import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Checkbox } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import './footer.css';


const Subscribe = () => {
    const [isChecked, setIsChecked] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [inputValues, setInputValues] = useState({ fname: '', lname: '', mob: '', email: '' })

    const CheckboxCallBack = () => {
        setIsChecked(!isChecked)
    }

    /**
     * 
     * @param {*} e event from input
     * @param {*} flag  key in inputValues to be updated
     */
    const handleInputChange = (e, flag) => {
        const val = e.target.value
        switch (flag) {
            case 'fname': setInputValues({ ...inputValues, fname: val })
                break
            case 'lname': setInputValues({ ...inputValues, lname: val })
                break
            case 'mob': setInputValues({ ...inputValues, mob: val })
                break
            case 'email': setInputValues({ ...inputValues, email: val })
                break

        }
    }
    const onButtonClick = () => {
        setInputValues({ fname: '', lname: '', mob: '', email: '' })
        setShowAlert(true)
    }
    useEffect(() => {
        setTimeout(() => {
            setShowAlert(false)
        }, 5000);
    }, [showAlert])
    return (
        <div className="newsletter">
            {showAlert && <Alert variant="filled" severity="success">
                Your response has been saved,thankyou!
            </Alert>}
            <center><p className='subscribenow'>Subscribe to our newsletter!!!</p></center>
            <div >
                <TextField
                    className='textfields'
                    id="first name"
                    label="first name"

                    variant="outlined"
                    color="secondary"
                    value={inputValues.fname}
                    onChange={(e) => handleInputChange(e, 'fname')}
                />
                <TextField
                    className='textfields'
                    id="last name"
                    label="last name"
                    variant="outlined"
                    color="secondary"
                    value={inputValues.lname}
                    onChange={(e) => handleInputChange(e, 'lname')}
                />
            </div>
            <div>
                <TextField
                    className='textfields'
                    id="Mobile number"
                    label="mobile number"
                    variant="outlined"
                    color="secondary"
                    value={inputValues.mob}
                    onChange={(e) => handleInputChange(e, 'mob')}
                />
                <TextField
                    className='textfields'
                    id="email"
                    label="email"
                    variant="outlined"
                    color="secondary"
                    value={inputValues.email}
                    onChange={(e) => handleInputChange(e, 'email')}
                />
            </div>

            <div>
                <div className='subscribe-checkbox'>
                    <Checkbox onChange={CheckboxCallBack} name="Join TEN's Discord Community" checked={isChecked} />
                    <span onClick={() => { setIsChecked(!isChecked) }}>Join TEN's Discord Community</span>
                </div>
                
                <center>  <button className='submit-btn' onClick={onButtonClick}>Submit</button> </center>
            </div>
        </div>
    )
}
export default Subscribe
