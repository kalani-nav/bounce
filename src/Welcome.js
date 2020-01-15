import React from 'react'
import { Alert } from 'react-bootstrap'

export default function Welcome(props) {
    if (props.visible){
        return (
            <Alert
                variant="info"
                className="d-inline-block position-absolute"
                style={{
                    left: props.point[0],
                    top: props.point[1],
                }}
            >
                {props.user.name} Welcome to 413!
            </Alert>
        )
    }else{
        return null
    }
}