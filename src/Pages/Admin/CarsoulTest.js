import { Card, CardContent } from '@mui/material';
import { Carousel } from '@sefailyasoz/react-carousel'
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import "../../asset/carousel.css"
import useFetchDataWithPagination from '../../utility/useFetchDataWithPagination';

const CarsoulTest = () => {
    const { data} = useFetchDataWithPagination("slides");
    const [carouselData] = useState([])

    useEffect(() => {
        if (data?.data) {
            const xElement = data?.data.data
            console.log(xElement)
            xElement.map(e => {
                carouselData.push({
                    headerText: e.title,
                    subText:  e.title,
                    image: e.image,
                })
                return {}
            });
      }
    }, [data,carouselData])
    
    return <Card sx={{ minWidth: 275, backgroundColor: 'green'}}>
        <CardContent>
            <Carousel
                data={carouselData}
                autoPlay={true}
                rightItem={<FaArrowRight />}
                leftItem={<FaArrowLeft />}
                animationDuration={2}
                headerTextType="black"
                subTextType="white"
                size="normal"
                />
         </CardContent>
  </Card>   
}

export default CarsoulTest