import { createRoot } from 'react-dom/client'
import './index.css'
// import DataProvider from './provider/DataProvider.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
     <App  data = "divya"/>    // ipdi pannalu app ku mattuthn pogu app child ku ponuna [prop child ku pass pannanu + child theva illma render aagu]

    //  na yosiche app function athulla yella function iruku apo app la pass panna yella functionla yu yeduka panna mudinula
            //- > but even though all comp are child of app prop pass parent - child - child direct ah inner child la yeduka mudiyathu
)