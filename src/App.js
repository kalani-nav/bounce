import React from 'react'
import Welcome from './Welcome'
import './App.scss'

export default function App() {
    const [ point, setPoint ] = React.useState([0,0])

    return (
        <div
            className="w-100 h-100 position-relative"
            onMouseMove={e => {
                setPoint([e.clientX, e.clientY])
            }}
        >
            <Welcome point={point} />
        </div>
    )
}