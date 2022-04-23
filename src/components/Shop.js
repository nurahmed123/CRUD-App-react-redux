import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';
export default function Shop() {
    const dispatch = useDispatch();
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch)
    return (
        <>
            <div className="container mt-3">
                <h1 className='mx-2'>Deposit/Withdraw money</h1>
                <p>Update your balance</p>
                <div className="btn btn-primary mx-2" onClick={() => { withdrawMoney(100) }} >-</div>
                Add to card to your card
                <div className="btn btn-primary mx-2" onClick={() => { depositMoney(100) }} >+</div>
                {/* <div className="btn btn-primary mx-2" onClick={() => { dispatch(actionCreators.withdrawMoney(100)) }} >-</div>
                Add to card to your card
                <div className="btn btn-primary mx-2" onClick={() => { dispatch(actionCreators.depositMoney(100)) }} >+</div> */}
            </div>
        </>
    )
}
