import React from 'react'
import ReactDOM from 'react-dom'
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
)
// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             <p>This is private info</p>
//             <WrappedComponent {...props} />
//         </div>
//     )
// }
// const AdminInfo = withAdminWarning(Info)

// ReactDOM.render(<AdminInfo info='details' />, document.getElementById('appRoot'))

const requireAuthentication = (WrappedComponent)=>{
    return(props)=>{
        if(props.isAuthenticated){
            return(<div>
             <p>This is private info</p>
             <WrappedComponent {...props} />
         </div>)
        }
        return <p>Login first</p>
    }
}

const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={true} info='details' />, document.getElementById('appRoot'))