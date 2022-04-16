import React from "react";
import Patika from "../constants/Icon/Patika";
import Rect1 from "../constants/Icon/Rect1";
import Rect2 from "../constants/Icon/Rect2";
 
function Left_Side() {
    return(
        <div className="left_side">
            <Patika />
            <div className="Patika-h1">
                <h1>YAZILIM PATİKALARI</h1>
                <br/>
                <p>Bootcamp'ler teknoloji kariyerine girmek isteyenler için yeni bir eğitim modelidir. Ekibini büyütmek isteyen şirketler bir bootcamp'lere sponsor olurlar. Teknik beceriler kazanmaya başlamış ancak işe girmeye hazır olmayan kişiler bootcamp'lere başvururlar. Seçilen adaylar 4-8 haftalık ücretsiz ve yoğun eğitime kabul alırlar. Bootcamp'lerde başarılı olan öğrenciler sponsor şirkette ya da sektörde başka şirketlere işe yerleşirler.</p>
            </div>
            <Rect1 />
            <Rect2/>
        </div>
    )
}

export default Left_Side;