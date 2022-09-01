import LogoInstagram from "../LogoInstagram"
import LogoOrgano from "../LogoOrgano"
import LogoTwitter from "../LogoTwitter"
import LogoFacebook from "../LogoFacebook"
import "./Rodape.css"

const Rodape = ()=>{
    return(
        <footer className="footer">
            <div className="redesSociais">
                <LogoFacebook/>
                <LogoTwitter/>
                <LogoInstagram/>
            </div>
            <LogoOrgano/>
            <h3>Desenvolvido por Luiz Marangoni</h3>
        </footer>
    )
}

export default Rodape