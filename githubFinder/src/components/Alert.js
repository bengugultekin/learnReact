import React from 'react'

const Alert = (props) => {

    console.log(props);
    return (
        props.alert !== null && (
            <div className='container my-2'>
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}>
                    {props.alert.msg}
                    <button className="close" data-dismiss="alert" aria-label='Close' onClick={()=>props.clearAlert()}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        )
    )
}

export default Alert
