import useSWR from 'swr';
import PullToRefresh from 'react-simple-pull-to-refresh';

import cardApi from '../../api/card';
import { DESIGN_TYPE } from '../../constants';
import BigDisplayCard from '../BigDisplayCard';
import SmallDisplayCard from '../SmallDisplayCard';
import SmallCardWithArrow from '../SmallCardWithArrow';
import ImageCard from '../ImageCard';
import DynamicWidthCard from '../DynamicWidthCard';
import Loading from '../Loading';
import Error from '../Error';

function CardsContainer() {
  const { data, error } = useSWR('get-all-cards', cardApi.getAllCards);

  if (error) return <Error />;

  if (!data) return <Loading />;

  return (
    <PullToRefresh
      className='cards-container'
      onRefresh={() => window.location.reload()}
    >
      {data.card_groups.map(cardGroup => {
        const {
          id,
          design_type,
          cards,
          is_scrollable: isScrollable,
          height,
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
          case DESIGN_TYPE.SmallDisplayCard:
            return (
              <div key={id} className='card-row'>
                {cards.map(card => (
                  <SmallDisplayCard
                    key={card.name}
                    card={card}
                    widthClassName={isScrollable ? 'card--full-width' : ''}
                    containerClassName={isScrollable ? 'card--fit-content' : ''}
                  />
                ))}
              </div>
            );
          case DESIGN_TYPE.SmallCardWithArrow:
            return (
              <div key={id} className='card-row'>
                {cards.map(card => (
                  <SmallCardWithArrow
                    key={card.name}
                    card={card}
                    widthClassName={isScrollable ? 'card--full-width' : ''}
                    containerClassName={isScrollable ? 'card--fit-content' : ''}
                  />
                ))}
              </div>
            );
          case DESIGN_TYPE.ImageCard:
            return (
              <div key={id} className='card-row'>
                {cards.map(card => (
                  <ImageCard
                    key={card.name}
                    card={card}
                    widthClassName={isScrollable ? 'card--full-width' : ''}
                    containerClassName={isScrollable ? 'card--fit-content' : ''}
                  />
                ))}
              </div>
            );
          case DESIGN_TYPE.DynamicWidthCard:
            return (
              <div key={id} className='card-row'>
                {cards.map(card => (
                  <DynamicWidthCard
                    key={card.name}
                    card={card}
                    height={height}
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
