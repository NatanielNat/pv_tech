import React from 'react'
import IMG1 from "../../resources/main ft.jpeg"
import IMG2 from "../../resources/20230602_120849.jpg"
import "./Home.css"

document.querySelectorAll(".td_img img").forEach(image => {
  image.onclick = () => {
    document.querySelector(".popup_img").style.display = 'block';
    document.querySelector(".popup_img img").src = image.getAttribute("src");
  }

  document.querySelector(".popup_img span").onclick = () => {
    document.querySelector(".popup_img").style.display = 'none';
  }
});

const Home = () => {
  return (
    <>
      <div className="home__body">
        <div className="home__title">
          <h2>Nasze Ostatnie<br></br>
            <span>Budowy</span>
          </h2>
        </div>
        <div className="popup_img">
          <span>&times;</span>
          <img src={IMG1} alt="img" />
        </div>
        <div className="table">
          <table>
            <th colspan="2" className="table_header">Domy Jedno-rodzinne</th>
            <tr>
              <td className="td_img">
                <img src={IMG2} alt="" />
              </td>
              <td className="td_text">
                <span className="content_title_v2"><h2>Markt Elbach</h2></span>
                <p> Module: 4000</p>
                <p> strom prod. ca. 200kw</p>
                <p> Starting Price: 5,999$</p>
                <p> Time it Takes: ca. 14 days</p>
              </td>
            </tr>
            <tr>
              <td className="td_text">
                <span className="content_title_v2"><h2>Markt Elbach</h2></span>
                <p> Module: 4000</p>
                <p> strom prod. ca. 200kw</p>
                <p> Starting Price: 5,999$</p>
                <p> Time it Takes: ca. 14 days</p>
              </td>
              <td className="td_img"></td>
            </tr>
            <th colspan="2" className="table_header">Firmy / Zakłady</th>
            <tr>
              <td className="td_img"></td>
              <td className="td_text">
                <span className="content_title_v2"><h2>Markt Elbach</h2></span>
                <p> Module: 4000</p>
                <p> strom prod. ca. 200kw</p>
                <p> Starting Price: 5,999$</p>
                <p> Time it Takes: ca. 14 days</p>
              </td>
            </tr>
            <tr>
              <td className="td_text">
                <span className="content_title_v2"><h2>Markt Elbach</h2></span>
                <p> Module: 4000</p>
                <p> strom prod. ca. 200kw</p>
                <p> Starting Price: 5,999$</p>
                <p> Time it Takes: ca. 14 days</p>
              </td>
              <td className="td_img">costam</td>
            </tr>
            <th colspan="2" className="table_header">Duze Firmy</th>
            <tr>
              <td className="td_img"></td>
              <td className="td_text">
                <span className="content_title_v2"><h2>Markt Elbach</h2></span>
                <p> Module: 4000</p>
                <p> strom prod. ca. 200kw</p>
                <p> Starting Price: 5,999$</p>
                <p> Time it Takes: ca. 14 days</p>
              </td>
            </tr>
            <tr>
              <td className="td_text">
                <span className="content_title_v2"><h2>Markt Elbach</h2></span>
                <p> Module: 4000</p>
                <p> strom prod. ca. 200kw</p>
                <p> Starting Price: 5,999$</p>
                <p> Time it Takes: ca. 14 days</p>
              </td>
              <td className="td_img">costam</td>
            </tr>
          </table>

        </div>
      </div >
    </>
  )
}

export default Home;