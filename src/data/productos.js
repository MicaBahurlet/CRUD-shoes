//Deportivos
import jvlProduct from "./imgProducts/InEarFinishProduct.png";
import ziaomiProduct from "./imgProducts/ZiaomiProduct.png";
import PilipProduc from "./imgProducts/PilipProduct.png";
import AirpodProduct from "./imgProducts/AirpodsProduct.png";

//Gamer
import Gamer10 from "./imgProducts/Gamer10.png";
import InEarProduct from "./imgProducts/ProductInEar.png";
import KotionGamer from "./imgProducts/gamerProduct1.png";
import HylasGaming from "./imgProducts/ProductGamer2.png";
import NuwoGamer from "./imgProducts/ProductGamer3.png";

//Classic
import DeportivoProduct from "./imgProducts/DeportivoProduct.png";
import LenoboDeportivo from "./imgProducts/LenovoDeportivo.png";
import SportProduct from "./imgProducts/ProductDeportivo.png";

//In-ear
import ClassicProducts from "./imgProducts/ClassicProduct.png";
import ClassicProduct from "./imgProducts/CassicProduct1.png";
import genericoProduct from "./imgProducts/ClassicProduct2.png";
import ZonnyProduct from "./imgProducts/ClasicProduct3.png";


export const productos = [
    {
        id: 1,
        title: "Okimura K9",
        img: KotionGamer,
        category: "Gamer",
        desc: "Gamer sin fin",
        New: "NUEVO",
        price: 1000,
    },
    {
        id: 2,
        title: "Hylas Gaming",
        img: HylasGaming,
        category: "Gamer",
        desc: "Redragon H260",
        price: 2500,
    },
    {
        id: 3,
        title: "Nubwo N1",
        img: NuwoGamer,
        category: "Gamer",
        desc: "Auris Pro",
        price: 4500,
    },
    {
        id: 4,
        title: "Sport",
        img: SportProduct,
        category: "Depotivo",
        desc: "A correr!",
        price: 900,
    },
    {
        id: 5,
        title: "In-Ear",
        img: InEarProduct,
        category: "In-ear",
        desc: "Batería 10hs",
        price: 5000,
    },
    {
        id: 6,
        title: "MichiShi",
        img: ClassicProduct,
        category: "Classic",
        desc: "El fiel amigo",
        price: 1000,
    },
    {
        id: 7,
        title: "Soul 4.3",
        img: genericoProduct,
        category: "Classic",
        desc: "Bueno, bonito, barato",
        price: 400,
    },
    {
        id: 8,
        title: "Zonny",
        img: ZonnyProduct,
        category: "Classic",
        desc: "Bajos calidad premium",
        price: 2000,
    },
    {
        id: 9,
        title: "Pilip´s",
        img: PilipProduc,
        category: "Classic",
        desc: "El cásico de siempre",
        price: 1000,
    },
    {
        id: 10,
        title: "MaAirpod´s",
        img: AirpodProduct,
        category: "In-ear",
        desc: "Original´s",
        price: 1000,
    },
    {
        id: 11,
        title: "Ziaomi",
        img: ziaomiProduct,
        category: "In-ear",
        desc: "5hs batería",
        price: 1000,
    },
    {
        id: 12,
        title: "JVL",
        img: jvlProduct,
        category: "In-ear",
        desc: "Resistentes al agua",
        price: 1000,
    },

    {
        id: 13,
        title: "F9-5 BTH-F9",
        img: DeportivoProduct,
        category: "Deportivo",
        desc: "El nombre es difícil,pero suenan tremendo",
        
        price: 4000,
    },
    {
        id: 14,
        title: "Lenobo",
        img: LenoboDeportivo,
        category: "Deportivo",
        desc: "Ideales para correr y actividades al aire libre",
        price: 3500,
    },
    {
        id: 15,
        title: "Classiquito ",
        img: ClassicProducts,
        category: "Classic",
        desc: "Con cables, como era antes!",
        price: 2500,
    },
    {
        id: 16,
        title: "Gamer 3000 ",
        img: Gamer10,
        category: "Gamer",
        desc: "¡Ahoora sí! que suenen esos headshots",
        price: 10000,
    },


    

    
]

export const TotalProducts = productos.length; 