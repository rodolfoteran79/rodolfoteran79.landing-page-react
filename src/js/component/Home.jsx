import React from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Card from './Card';
import Footer from './Footer';

const Home = () => {
  const cardData = [
    { title: 'Card title', text: 'añldkmñldkv añlskdmñlaksd añlskdmclks añañlskd ñalskdmcñ añlsdkcmm kdmckd añlsdkcmk\'s content.', buttonText: 'Go somewhere' },
    { title: 'Card title', text: 'añsdlkmv añlsdkcdñal añlsdkcmca slskdls lssodw sñals l slskd slkd lskdl salqpeo ñsd\'s content.', buttonText: 'A donde Vamos?' },
    { title: 'Card title', text: 'ñsokdm añls sldkcm sldk allañ alsdkdqp  qpoweid qpowm cc msidmso oapaos dosdim mcis\'s content.', buttonText: 'ya llegamos!' },
    { title: 'Card title', text: 'pqoe sposkdc sksksl sldkc añlskdc skmcañlsd alñsdkcmc akdmcl añsldk añlsdkcm alskcm\'s content.', buttonText: 'ya nos vamos!' }
  ];

  return (
    <div>
      <Navbar />
      <div className="container">
        <Jumbotron />
        <div className="row">
          {cardData.map((card, index) => (
            <div className="col-md-3" key={index}>
              <Card title={card.title} text={card.text} buttonText={card.buttonText} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
