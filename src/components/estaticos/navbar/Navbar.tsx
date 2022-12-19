import React from "react";
import './Navbar.css'

function Navbar(){

    return(
     <div  className="container border">
        <div className="center">
            <a href="index.html"><img className="tm" src="https://s3-alpha-sig.figma.com/img/744c/c21f/2309757b9f043d9e9fa9745b85809000?Expires=1672012800&Signature=hyVfLG~sC9EskVh80KB7RbxIZXeiYvTrCTmkHjlEmghAkpc4kKwaeLeRyNF5MLDSDUSVdbAeACSZr~Pw6A0StscmTgVsMUwbxUuK6UeoV9yq7VoorchO9ISgnjo8iSyiFmem0jRErN5QrkQNjC2v6KbtFdAhUdbE47esqieSw9z5igDX9ybUHlS3xcb5E4kj0nh0aW~xec6k26GQcIZhMmnF8hVTK0r9vm6yobIJ6XScefa6Fh8zPKQGe-seglBKRawLZuirhGl5kQGc9zO903eWIVJyPgXqV-r0PD4DrchjqutIfC1eiFNbkiNxmhkM2wOcnhXqOq7JQDE2ryGayA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" /> </a>
        </div>
        <div className="btn center">
            <a href="/home"><button className="btn btn-design">Home</button></a>
        </div>
        <div className="btn center">
            <a href="/sobre"><button className="btn btn-design">Sobre</button></a>
        </div>
        <div className="btn center">
            <a href="/doacoes"><button className="btn btn-design">Doações</button></a>
        </div>
        <div className="btn center">
            <a href="/login"><button className="btn btn-design">Login</button></a>
        </div>
        <div className="btn center">
            <a href="/cadastrousuario"><button className="btn btn-design">Cadastro</button></a>
        </div>
        <div className="btn center">
            <a href="/contato"><button className=" btn btn-design">Contato</button></a>
        </div>
        <div className="btn center">
            <a href="/"><button className=" btn btn-design">Logout</button></a>
        </div>
     </div>
    );
}

export default Navbar;