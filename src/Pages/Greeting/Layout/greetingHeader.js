import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import { useMergeState } from '../../../Helpers/customHooks';

const { SubMenu } = Menu;

const GreetingHeader = (props) => {
  const history = useHistory();
  const [state, setState] = useMergeState({
    current: false,
  });

  const handleClick = (e) => {
    console.log('click ', e);
    setState({ current: e.key });
  };

  const { className } = props;
  const { current } = state;
  return (
    <div className='greeting-header'>

      <div className='greeting-header-left'>
        <span>Static Promotional Website</span>
      </div>

      <div className='greeting-header-right'>
        <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
          <Menu.Item key='mail'>
            Navigation One
          </Menu.Item>
          <Menu.Item key='app'>
            Navigation Two
          </Menu.Item>
          <SubMenu key='SubMenu' title='Navigation Three - Submenu'>
            <Menu.ItemGroup title='Item 1'>
              <Menu.Item key='setting:1'>Option 1</Menu.Item>
              <Menu.Item key='setting:2'>Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title='Item 2'>
              <Menu.Item key='setting:3'>Option 3</Menu.Item>
              <Menu.Item key='setting:4'>Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key='alipay'>
            Navigation Four - Link
          </Menu.Item>
        </Menu>
      </div>

    </div>
  );
};

GreetingHeader.defaultProps = {
  className: '',
};
GreetingHeader.propTypes = {
  className: PropTypes.string,
};

export default GreetingHeader;
