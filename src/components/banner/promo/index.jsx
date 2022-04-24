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
      <h3 className="bg-black h-44 text-secundary flex items-center text-shadow-lg text-4xl p-2 bg-bg01 font-bold bg-cover">Aposte com <br />nossos cambistas</h3>
    </div>
    <div>
      <h3 className="bg-black bg-center h-44 text-secundary flex items-center justify-center text-center text-shadow-lg text-4xl p-2 bg-register font-bold bg-cover">Receba seus lucros rapidamente via pix</h3>
    </div>
  </Carousel>
}