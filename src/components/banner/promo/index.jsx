import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  // width: '100%',
  // color: '#fff',
  // lineHeight: '160px',
  // textAlign: 'left',
  background: '#364d79',
};

export default function BannerPromo() {

  return <Carousel autoplay>
    <div>
      <h3 className="bg-black bg-center md:h-44 h-20 text-secundary flex items-center text-shadow-lg text-4xl p-2 bg-bg01 font-bold bg-cover"></h3>
    </div>
    <div>
      <h3 className="bg-black bg-center md:h-44 h-20 text-black flex items-center justify-center text-center text-shadow-lg text-4xl p-2 bg-bg02 font-bold bg-cover"></h3>
    </div>
  </Carousel>
}