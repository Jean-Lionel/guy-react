import { Carousel } from '@sefailyasoz/react-carousel'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import "../../asset/carousel.css"

const CarsoulTest = () => {

const CarouselData = [
  {
    headerText: null,
    subText: 'Sub Text One',
    image: 'https://picsum.photos/300/300',
  },
  {
    headerText: 'Header Text Two',
    subText: null,
    image: 'https://picsum.photos/1200/800',
  },
  {
    headerText: null,
    subText: null,
    image: 'https://picsum.photos/720/720',
  },
  {
    headerText: 'Header Text Four',
    subText: 'Sub Text Four',
    image: 'https://picsum.photos/1920/1080',
  },
  {
    headerText: 'Header Text Five',
    subText: 'Sub Text Five',
    image: 'https://picsum.photos/480/360',
  },
  {
    headerText: 'Header Text 21',
    subText: 'Sub Text Five',
    image: 'https://picsum.photos/480/360',
  },
  {
    headerText: 'Header Text 25',
    subText: 'Sub Text 40',
    image: 'https://picsum.photos/480/360',
  },
]
  return    <Carousel
              data={CarouselData}
              autoPlay={true}
              rightItem={<FaArrowRight />}
              leftItem={<FaArrowLeft />}
              animationDuration={2}
              headerTextType="black"
              subTextType="white"
              size="normal"
            />
}

export default CarsoulTest