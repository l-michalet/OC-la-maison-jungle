import { useState, useEffect } from 'react'
import '../styles/Cart.css'


function Cart({cart, updateCart}) {
    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce((acc, plantType) => acc + plantType.amount * plantType.price, 0)

    useEffect(() => {document.title = `LMJ: ${total}€ d'achats`}, [total])

    function removePlant(name) {
        const updatedCart = cart.filter((plant) => plant.name !== name)
        updateCart([...updatedCart])
    }

    return isOpen ? (
        <div className='lmj-cart'>
            <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>
                Fermer
            </button>

            {cart.length >0 ?(
                <div>
                    <h2>Panier</h2>
                    <ul className={'lmj-cart-list'}>
                        {cart.map(({name, price, amount}, index) => (
                            <li className={'lmj-cart-list-item'} key={`${name}-${index}`}>
                                <b>{amount} {name.toUpperCase()}</b>: <br/>
                                &emsp; {amount} x {price} = <b>{price * amount} €</b>
                                <button type="button" className="lmj-cart-cancel-button" onClick={() => removePlant(name)}>X</button>
                            </li>
                        ))}
                    </ul>
                    <button className='lmj-cart-empty-button' onClick={() => updateCart([])}>Vider le panier</button>
                    <div className={'lmj-cart-total'}><h3>Total: {total}€</h3></div>
                    <button className='lmj-cart-buy-button' onClick={() => alert("La plateforme de paiement en ligne n'est pas disponible pour le moment. Sorry.")}>Payer</button>
                </div>
            ) : (
                <div className='lmj-cart-empty'>
                    <h2>Panier</h2>
                    Votre panier est vide</div>
            )}

        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button className='lmj-cart-toggle-button' onClick={()=>setIsOpen(true)}>
                Panier
            </button>
        </div>
    )
}

export default Cart