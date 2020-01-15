import React from 'react'
import Welcome from './Welcome'
import './App.scss'

export default function App() {
    const [ point, setPoint ] = React.useState([0,0]) //state variable - whenever you mess with state, essentially the page will re-render
    //const [ point, setPoint ] = [ 0,0 ] //regular variable
    const [ visible , setVisible ] = React.useState(true)

    let user = {
        name: 'brandon',
        password: 'password'
    }

/*------WAYS TO MAKE FUNCTIONS------
    function add10(num) {
        return num + 10
    }

    const add11 = function(num) {
        return num + 11
    }

    const add12 = (num) => {
        return num + 12
    }
*/
    return (
        <div
            className="w-100 h-100 position-relative"
            onMouseMove={e => {
                //console.log(e)
                setPoint([e.clientX, e.clientY])
            }}
            onClick={e => {
                setVisible(!visible)
            }}
        >
            <Welcome point={point} user={user} visible={visible}/>
        </div>
    ) 
}