import React from 'react'

export const Footer = () => {
    var  footerStyle={
        position:"fixed",
        left: "0",
   bottom: "0",
   width: "100%",
    }
    return (
        <footer className="bg-dark text-light py-3" style={footerStyle} >
            <p className="text-center ">

            
            Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}
