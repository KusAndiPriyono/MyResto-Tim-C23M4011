/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useSearchParams } from 'react-router-dom';
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
