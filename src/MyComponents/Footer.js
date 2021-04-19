import React from 'react'

export const Footer = () => {
    var  footerStyle={
        position:"relative",
        minHeight:"70vh",
        margin:"40px auto"
       
    }
    return (
        <footer className="bg-dark text-light py-2" style={footerStyle} >
            <p className="text-center ">

            
            Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}
