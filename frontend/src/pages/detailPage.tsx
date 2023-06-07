import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import RestaurantApi from 'api/services/restaurant';
// import RestaurantCard from 'components/molecules/RestaurantCard';
import FooterLayout from 'components/organisms/FooterLayout';
import DetailRestaurant from 'components/templates/DetailRestaurant';

const DetailPage = () => {
  return (
    <>
      <DetailRestaurant />
      <FooterLayout />
    </>
  );
};

export default DetailPage;
