/* eslint-disable react-hooks/exhaustive-deps */

import { Container } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import RestaurantApi from 'api/services/restaurant';
// import RestaurantCard from 'components/molecules/RestaurantCard';
import RestaurantList from 'components/templates/RestaurantList';
import HeroLayout from 'components/organisms/HeroLayout';
import FooterLayout from 'components/organisms/FooterLayout';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeroLayout />
      <RestaurantList />
      <FooterLayout />
    </>
  );
};

export default HomePage;
