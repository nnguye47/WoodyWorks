import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';
// import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Prod = styled.div`
  margin: 10px;
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Image = styled.img`
  :hover {
    cursor: pointer;
    transform: rotate(5deg) scale(1.1);
    transition: transform .2s;
  }

  border-radius: 10px;
  text-shadow: 2px 2px 4px #000000;
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  boxShadow: 24,
  p: 4,
};

export default function Product({ item }) {
  // console.log(item.name ? 'test' : 'fail');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Prod>
      <ButtonBase disableRipple onClick={handleOpen}>
        <Image src={item.featured_photo} alt="product" height="200px" width="200px" />
      </ButtonBase>
      <div>
        <h3>{item.name}</h3>
        <p>{`$${item.price}`}</p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Swiper
            dir="rtl"
            navigation
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="./assets/lightlogo.png" alt="product" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./assets/lightlogo.png" alt="product" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./assets/lightlogo.png" alt="product" />
            </SwiperSlide>
          </Swiper>
          <Typography id="modal-modal-title" variant="h6">
            {item.name}
          </Typography>
          <Typography id="modal-modal-title" variant="h6">
            {`$${item.price}`}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {item.description}
          </Typography>
        </Box>
      </Modal>
    </Prod>
  );
}
