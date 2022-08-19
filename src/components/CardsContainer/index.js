import useSWR from 'swr';

import cardApi from '../../api/card';

function CardsContainer() {
  const { data, error } = useSWR('get-all-cards', cardApi.getAllCards);

  console.log('data', data);
  console.log('error', error);

  return <h1>Cards</h1>;
}

export default CardsContainer;
