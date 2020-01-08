import React from 'react'
import { Alert } from 'react-bootstrap'

export default function Welcome(props) {
    return (
        <Alert
            variant="info"
            className="d-inline-block position-absolute"
            style={{
                left: props.point[0],
                top: props.point[1],
            }}
        >
            Welcome to 413!
        </Alert>
    )
}