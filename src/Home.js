import React from 'react';
import './Home.css';
import Product from './Product';
import blog from './picture/blog-3.jpg';

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />

            <div className="home__row"> 
                <Product 
                    id="123456"
                    title="Oppo F15 (Unicorn White, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
                    price={253.95}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61imtbccqsL._SL1500_.jpg"
                />
                <Product 
                    id="123457"
                    title="Mi TV 4A PRO 80 cm (32 inches) HD Ready Android LED TV (Black) | With Data Saver"
                    price={173.02}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71sBGR6LZhL._SL1500_.jpg"
                />
            </div>
            <div className="home__row"> 
                <Product 
                    id="123458"
                    title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"
                    price={46.77}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"
                />
                <Product 
                    id="123459"
                    title="
                    Cosmic Byte GS410 Headphones with Mic and for PS4, Xbox One, Laptop, PC, iPhone and Android Phones"
                    price={14.07}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/41dqZOR-GwL.jpg"
                />
                <Product 
                    id="123458"
                    title="Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens, 16GB Card and Carry Case"
                    price={374.21 }
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg"
                />
              
               
            </div>
            <div className="home__row"> 
               
                 <Product 
                    id="123460"
                    title="
                    HP 14 10th Gen Intel Core i5 Processor 14-inch Laptop (i5-1035G1/8GB/1TB HDD + 256GB SSD/Win 10 Home/MS Office/Natural Silver ),14s cs3009TU"
                    price={801.9}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71QmFal-QfL._SL1500_.jpg"
                />
                   <Product 
                    id="123461"
                    title="
                    LG 29 inch Ultrawide Full HD IPS Gaming, Multitasking Monitor with 1ms Response Rate, 75Hz Refresh Rate - USB C, Display Port, HDMI, VGA - 10 W Inbuilt..."
                    price={396.96}
                    rating={1}
                    image="https://images-na.ssl-images-amazon.com/images/I/81t1tAzEgGL._SL1500_.jpg"
                />
               
            </div>


            
        </div>
    )
}

export default Home
