import './Rodape.css'

function Rodape(){
    return(
        <footer className='rodape'>
            <section>
                    <ul>
                        <li>
                            <a href="facebook.com" target="_blank">
                            <img src="/imagens/fb.png" alt='' /></a>
                        </li>
                        <li>
                            <a href="instagram.com" target="_blank">
                            <img src="/imagens/ig.png" alt='' /></a>
                        </li>
                        <li>
                            <a href="twitter.com" target="_blank">
                            <img src="/imagens/tw.png" alt='' /></a>
                        </li>
                    </ul>    
            </section>
            <section>
                <a href="organo.com" target="_blank">
                <img src="/imagens/logo.png" alt='' /></a>
            </section>
            <section>
                <p>Desenvolvido por Kahuan</p>
                <p className='desenvolvido'>Sistema para estudo apenas!</p>
            </section>
            
        </footer>
    )
}

export default Rodape