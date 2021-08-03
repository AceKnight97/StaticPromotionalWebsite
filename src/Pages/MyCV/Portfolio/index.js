import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import _ from 'lodash';
import Modal from 'antd/lib/modal/Modal';
import ProjectInfo from '../../../Components/UI/ProjectInfo';
import { useMergeState } from '../../../Helpers/customHooks';
import { SAVE_MONEY_APP, BIOACRE_CARDIAC } from './data';
import cloverIc from '../../../Images/Pages/CVs/clover.svg';

const PROJECT_DATA = {
  SMA: 'SMA',
  BCCA: 'BCCA',
};
const { SMA, BCCA } = PROJECT_DATA;

const Portfolio = () => {
  const [state, setState] = useMergeState({
    current: '',
    previewImg: undefined,
  });

  const onClickPreview = (previewImg) => {
    setState({ previewImg });
  };

  const onClickClosePreview = () => {
    setState({ previewImg: undefined });
  };
  const { current, previewImg } = state;

  const toggleClickSMA = () => {
    if (current === SMA) {
      setState({ current: '' });
    } else {
      setState({ current: SMA });
    }
  };

  const toggleClickBCCA = () => {
    if (current === BCCA) {
      setState({ current: '' });
    } else {
      setState({ current: BCCA });
    }
  };

  const renderHeader = () => (
    <div className='portfolio-header'>
      <span>Truong Thanh Triet</span>
    </div>
  );

  const renderCarousel = () => {
    let images = [];
    switch (current) {
      case SMA:
        images = SAVE_MONEY_APP.images;
        break;
      case BCCA:
        images = BIOACRE_CARDIAC.images;
        break;
      default:
        break;
    }
    return images.length !== 0 ? (
      <Carousel>
        {
        _.map(images, (x, i) => (
          <button
            key={i}
            className='bas-0-btn'
            onClick={() => {
              onClickPreview(x);
            }}
          >
            <img src={x} alt={`img ${i}`} />
          </button>
        ))
            }
      </Carousel>
    ) : (
      <div className='hello-visitor'>
        <span>Hello visitor,</span>
        <img src={cloverIc} alt='Clover ic' />
        <span>Have a good day!</span>
      </div>
    );
  };

  const renderBody = () => (
    <div className='portfolio-body'>

      <div className='portfolio-body-left'>
        <ProjectInfo
          data={SAVE_MONEY_APP}
          toggleClick={toggleClickSMA}
          isShowDetails={current === SMA}
        />
        <ProjectInfo
          className='mt-24'
          data={BIOACRE_CARDIAC}
          toggleClick={toggleClickBCCA}
          isShowDetails={current === BCCA}
        />
      </div>

      <div className='portfolio-body-right'>
        {renderCarousel()}
      </div>
    </div>
  );

  return (
    <>
      <div className='portfolio'>
        {renderHeader()}

        {renderBody()}
      </div>
      <Modal
        visible={!!previewImg}
        onCancel={onClickClosePreview}
        centered
        footer={null}
        className='profolio-modal'
        // width='100%'
      >
        <img src={previewImg} alt='img preview' />
      </Modal>
    </>
  );
};

Portfolio.defaultProps = {
};
Portfolio.propTypes = {
};

export default Portfolio;
