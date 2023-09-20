import React from 'react'
import "./War.css"
import IMG_1 from "../../resources/050420_10.jpg.mst.webp"
import IMG_2 from "../../resources/image.webp"
import IMG_3 from "../../resources/pv_3_lieferumfang.jpg"


const War = () => {
    return (
        <div className="war_container">
            <div className="war_contentCard">
                <img className="war_img" src={IMG_1} />
                <div className="war_contentText">
                    <div className="war_cardTitle">tytul </div>
                    <div className="war_cardText">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        At eligendi, asperiores nesciunt quo sequi iure laudantium officia quas ratione,
                        corporis adipisci error quia facere eos eum debitis molestiae? Nulla, culpa?</div>

                </div>
            </div>
            <div className="war_contentCard_2">
                <div className="war_contentText_2 ">
                    <div className="war_cardTitle">tytul </div>
                    <div className="war_cardText">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        At eligendi, asperiores nesciunt quo sequi iure laudantium officia quas ratione,
                        corporis adipisci error quia facere eos eum debitis molestiae? Nulla, culpa?</div>
                </div>
                <img className="war_img" src={IMG_2} />
            </div>
            <div className="war_contentCard">
                <img className="war_img" src={IMG_3} />
                <div className="war_contentText">
                    <div className="war_cardTitle">tytul </div>
                    <div className="war_cardText">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        At eligendi, asperiores nesciunt quo sequi iure laudantium officia quas ratione,
                        corporis adipisci error quia facere eos eum debitis molestiae? Nulla, culpa?</div>

                </div>
            </div>
            <div className="space_with_text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur c
                    um blanditiis provident aspernatur asperiores, ad adipisci quos solu
                    ta. Neque cupiditate quae delectus modi, quasi tenetur nemo, volu
                    ptatum recusandae laborum inventore deleniti rem qui ipsam
                     excepturi mollitia fugiat sit placeat harum quidem se
                     d! Laborum sequi, aperiam natus at quia enim amet?</p>
            </div>
        </div>
    )
}

export default War