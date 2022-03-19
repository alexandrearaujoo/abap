import { useState } from "react";
import { useEffect } from "react";
import { StyledImg } from './styles';

const Slider = () => {
  const images = [
    "https://images.pexels.com/photos/933701/pexels-photo-933701.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
    "https://images.pexels.com/photos/734973/pexels-photo-734973.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
    "https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
    "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
    "https://images.pexels.com/photos/1231622/pexels-photo-1231622.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
    "https://images.pexels.com/photos/1439227/pexels-photo-1439227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
  ];

  const [img, setImg] = useState("https://images.pexels.com/photos/933701/pexels-photo-933701.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260")

  const carrosselStart = (images, time) => {
    let contador = 0;

    setInterval(function () {
      if (contador < images.length) {
        setImg(images[contador])
        contador++;
      } else {
        contador = 0;
      }
    }, time);
  }

  useEffect(() => {
    carrosselStart(images, 3500)
  }, [])

  return (
    <>
      <StyledImg src={img} width="80%" alt="carrossel de imagens" />
    </>
  );
};

export default Slider;
