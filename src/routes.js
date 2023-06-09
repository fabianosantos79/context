import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from 'pages/Login'
import Feira from 'pages/Feira'
import Carrinho from 'pages/Carrinho'
import { useState } from 'react'
import { UsuarioContext } from './common/context/Usuario'

export default function Router() {
    const [nome, setNome] = useState("")
    const [saldo, setSaldo] = useState(0)

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <UsuarioContext.Provider value={{ nome, setNome, saldo, setSaldo }}>
                        <Login />
                    </UsuarioContext.Provider>
                </Route>
                <Route path="/feira">
                    <Feira />
                </Route>
                <Route path="/carrinho">
                    <Carrinho />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}