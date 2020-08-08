import React from 'react'

function ImgComponent({item}) {
  console.log(item)
  let imgsStyles = {
    with: 100 + "%",
    height: "auto"
  }
  return (
    <a href={item.url} target="_blanck">
      <div class="carousel-item">
        <img class="carousel-item__img" src={item.image} alt="slide-img" style={imgsStyles}/>
        <div class="carousel-item__details">
          <p class="carousel-item__details--title">{item.title}</p>
          <p class="carousel-item__details--subtitle">{item.description}</p>
          <p class="carousel-item__details--tec">{item.tec}</p>
        </div>
      </div>
    </a>
  )
}

export default ImgComponent