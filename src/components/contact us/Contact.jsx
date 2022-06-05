import React from 'react';
import style from '../contact us/Contact.module.css';

const Contact = () => {
    return (
        <div>
            <div className={style.contactUs}>
                <h1>How Can We Help?</h1>
                <p>Send us a text: 1-814-251-9966</p>
                <p>Give us a call: 1-888-963-8944</p>
                <p>Monday - Friday 7AM - 5PM PST</p>
                <div className={style.mb3}>
                    <label for="exampleFormControlTextarea1" class="form-label">Tell Us Your Query</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="button" class="btn btn-secondary btn-lg">SUBMIT</button>
            </div>
        </div>
    )
}

export default Contact