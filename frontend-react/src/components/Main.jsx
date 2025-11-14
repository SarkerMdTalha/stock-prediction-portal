import React from 'react'
import Button from './Button'


const Main = () => {
    return (
        <>

            <div className='container'>
                <div className='p-5 text-center bg-light-dark rounded'>
                    <h1 className='text-light'>Stock Prediction Portal</h1>
                    <p className='text-light lead'>This is your stock prediction portal. Predict the stocks and be a stock market expert through our site. Thank you for using our site</p>
                    <Button text='login' class='btn-outline-info' />
                </div>
            </div>

        </>
    )
}

export default Main
