import React from "react";

export default class Acceuil extends React.Component{

    componentDidMount(): void {
        if(localStorage.getItem("token") == null){
            console.log("token exist");
            window.location.href = "#/validate"
        }
    }
    render(){
        return (
            <div>
                <div className="container">
                    <div className="container_title">
                        <h1>Figrou tiktok bot</h1>
                    </div>
                    <div className="text_container">
                        <input type="text" className="input" id="username" placeholder="username" />
                        <i className="fa fa-sign-in send" aria-hidden="true" id="connect" title="se connecter"></i>
                        <i id="info-connection"></i>
                    </div>
                </div>
            </div>
        )
    }
}

//<img src={svg} alt="connect" className="send" id="connect" height="35vh" title="se connecter"/>