import React from 'react';
import { Container, BrandImage } from './MarcasStyles.js';

import Nikepng from '../../data/imgProducts/nike.png';
import Adidaspng from '../../data/imgProducts/adidas.png';
import Puma from '../../data/imgProducts/puma.png';
import Vans from '../../data/imgProducts/vans.png';
import Sketchers from '../../data/imgProducts/skechers.png';

import { Flip } from "react-awesome-reveal"

const Marcas = () => {
  return (
    <Container>
      <Flip direction="left"  duration={1000}>
        <BrandImage src={Nikepng} alt="Marca 1" />
        <BrandImage src={Adidaspng} alt="Marca 2" />
        <BrandImage src={Puma} alt="Marca 3" />
        <BrandImage src={Vans} alt="Marca 4" />
        <BrandImage src={Sketchers} alt="Marca 5" />
      </Flip>
    </Container>
  );
};

export default Marcas
