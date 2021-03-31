import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useMergeState } from '../../Helpers/customHooks';

import CVInformation from './Layout/cvInformation';
import CVDetails from './Layout/cvDetails';
import DetailsInfo from './Layout/detailsInfo';
import { PAGE_MANAGER } from '../../Constants';

const MyCV2 = () => {
  const history = useHistory();
  const [state, setState] = useMergeState({
    isShowDetails: false,
  });

  const { isShowDetails } = state;

  const onClickBack = () => {
    if (isShowDetails) {
      setState({ isShowDetails: false });
      return;
    }
    history.push(PAGE_MANAGER.HOME);
  };

  const onClickDetailCV = () => {
    setState({ isShowDetails: true });
  };

  return (
    <div className='my-cv-wrapper'>
      <div className='my-cv-main'>

        {
          isShowDetails
            ? <DetailsInfo />
            : (
              <>
                <CVInformation />
                <CVDetails />
              </>
            )
        }

      </div>

      <Button
        type='ghost'
        className='back-btn-cv'
        onClick={onClickBack}
      >
        <ArrowLeftOutlined />
      </Button>

      {
        isShowDetails ? null : (
          <Button
            type='ghost'
            className='details-btn-cv'
            onClick={onClickDetailCV}
          >
            <ArrowRightOutlined />
          </Button>
        )
      }
    </div>
  );
};
MyCV2.defaultProps = {
};
MyCV2.propTypes = {
};
export default MyCV2;
