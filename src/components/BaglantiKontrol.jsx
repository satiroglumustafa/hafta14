import useInternetKontrol from "../hooks/useInternetKontrol"
import './BaglantiKontrol.css'

const BaglantiKontrol = ()=> {
    const baglanti = useInternetKontrol()
    return (
        <>
            { baglanti === false  &&  <div className='baglanti-uyari'>Dikkat Bağlantınız Yok</div> }
        </>
    )
}

export default BaglantiKontrol