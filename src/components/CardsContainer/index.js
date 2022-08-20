import useSWR from 'swr';

import cardApi from '../../api/card';
import { DESIGN_TYPE } from '../../constants';
import BigDisplayCard from '../BigDisplayCard';

function CardsContainer() {
  const { data, error } = useSWR('get-all-cards', cardApi.getAllCards);

  console.log('data', data);
  console.log('error', error);

  if (error) return 'Error';
  if (!data) return 'Loading';

  return data.card_groups.map(cardGroup => {
    const { id, design_type, cards } = cardGroup;

    // TODO: Support rendering multiple cards in a single cardGroup
    switch (design_type) {
      case DESIGN_TYPE.BigDisplayCard:
        return <BigDisplayCard key={id} card={cards[0]} />;
      default:
        return null;
    }
  });
}

export default CardsContainer;
