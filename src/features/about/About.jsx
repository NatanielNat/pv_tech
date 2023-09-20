import React from 'react'
import "./About.css"
import IMG__1 from "../../resources/5509942.jpg"

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const About = () => {
    return (
        <div >
            <Parallax pages={8} style={{ top: '100px', left: '0' }} className="parallax_container">

                <ParallaxLayer offset={0} speed={0.2}>
                    <div className="animation_layer parallax text_middle title">
                        <h1> Lorem ipsum dolo ducimus ipsum in veniam expedita labopa totam consectetur quae odio</h1>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1.1} speed={0.5}>
                    <div className="animation_layer parallax bg_img_middle" id="first"></div>
                </ParallaxLayer>

                <ParallaxLayer offset={1.1} speed={1}>
                    <div className="animation_layer parallax text_middle">
                        <h1> <strong>Unserer Angebot</strong><br />
                            Unserer Team ist in der Lage, komplexe Service-Arbeiten im Bereich Photovoltaik und kleine Reparaturarbeiten zeitnah und professionell zu erledigen.<br />
                            *Verkauf von Photovoltaikanlagen<br />
                            *Montage von Photovoltaikanlagen<br />
                            *Reinigung von PV-Anlagen<br />
                            *PV-Wartung (nach DGUV3)<br />
                            *PV-Service<br />
                            *PV-Umbau/ Reparatur<br />
                            Photovoltaikanlagen für Wohnungsbau, Gewerbe und Industrie
                        </h1>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1.8} speed={2}>
                    <div className="animation_layer parallax text_right">
                        <h1 className="gap"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, reiciendis. Quia amet, ducimus ipsum in veniam expedita laborum, facere et aliquid molestiae necessitatibus culpa totam consectetur quae odio inventore, iure tempore natus! Ipsam ipsa, velit quae consequatur, vel ut tempora sapiente rem enim ipsum accusamus, similique excepturi aperiam rerum commodi!</h1>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda excepturi, veritatis aperiam eligendi tenetur facere illum quia mollitia, temporibus ex necessitatibus aut hic! Consequuntur, delectus recusandae? Natus totam exercitationem voluptate sint, et neque tenetur aspernatur ex accusamus eius quae dicta fuga eos iusto sapiente! Impedit veniam ex sit consequuntur laudantium!</h1>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1.8} speed={1}>
                    <div className="animation_layer parallax bg_img_left" id="second"></div>
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={1}>
                    <div className="animation_layer parallax text_middle hero_banner ">
                        <h1> <strong>Unser Versprechen</strong> <br />
                            Premiumarbeit, verlässlich und professionell</h1>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={2.3} speed={2}>
                    <div className="animation_layer parallax bg_img_right" id="third"></div>
                    <div className="animation_layer parallax bg_img_right" id="fourth"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={2.4} speed={0.3}>
                    <div className="animation_layer parallax text_left">
                        <h1> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, reiciendis. Quia amet, ducimus ipsum
                            in veniam expedita laborum, facere et aliquid molestiae necessitatibus culpa totam c
                            onsectetur quae odio inventore, iure tempore natus! Ipsam ipsa, velit quae consequatur, vel ut
                            tempora sapiente rem enim ipsum accusamus, similique excepturi aperiam rerum commodi!</h1>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={1}>
                    <div className="animation_layer parallax text_middle anchor">
                        <h1 className="gap">
                            <strong>Unsere Fachkräfte</strong><br/>
                            Unsere hochqualifizierten Facharbeiter erledigen jede Aufgabe schnell und zuverlässig<br/>


                            Wir bringen Ihre Technik auf den neusten Stand. Unsere erfahrenen Handwerker helfen Ihnen, jedes Problem zu lösen – ganz gleich ob Standardfall oder spezieller Sonderauftrag.
                            Durch unsere umfassende Beratung, flexible Arbeitszeiten und kurzfristige Termine gelingt es uns garantiert, all Ihre Erwartungen zu erfüllen.
                            Mit geschulten Arbeitern und modernsten Maschinen arbeiten wir jederzeit auf höchstem Niveau – für Ihre Zufriedenheit.
                        </h1>
                    </div>
                </ParallaxLayer>

            </Parallax>
        </div>
    )
}

export default About