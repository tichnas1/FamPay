import useSWR from 'swr';
import PullToRefresh from 'react-simple-pull-to-refresh';

import cardApi from '../../api/card';
import { DESIGN_TYPE } from '../../constants';
import BigDisplayCard from '../BigDisplayCard';

function CardsContainer() {
  const { data, error } = useSWR('get-all-cards', cardApi.getAllCards);

  console.log('data', data);
  console.log('error', error);

  if (error) return 'Error';
  if (!data) return 'Loading';

  return (
    <PullToRefresh onRefresh={() => window.location.reload()}>
      {data.card_groups.map(cardGroup => {
        const {
          id,
          design_type,
          cards,
          is_scrollable: isScrollable,
        } = cardGroup;

        switch (design_type) {
          case DESIGN_TYPE.BigDisplayCard:
            return (
              <div key={id} className='card-row'>
                {cards.map(card => (
                  <BigDisplayCard
                    key={card.name}
                    card={card}
                    widthClassName={isScrollable ? 'card--full-width' : ''}
                    containerClassName={isScrollable ? 'card--fit-content' : ''}
                  />
                ))}
              </div>
            );
          default:
            return null;
        }
      })}
    </PullToRefresh>
  );
}

export default CardsContainer;
