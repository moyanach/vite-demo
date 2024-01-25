import { Card } from 'antd';

import homeStyle from './home.module.less';

const Welcome = () => {
  const env = import.meta.env;
  return (
    <Card title="welcome">
      {import.meta.env.CMDB_APP_ENV}
      <div className={homeStyle.testparent}>
        <div className={homeStyle.test}></div>
        <div className={homeStyle.left}>
          <p>hello</p>
        </div>
        <div className={homeStyle.right}>
          <p>year hello</p>
        </div>
        <div className={homeStyle.clear}></div>
      </div>
    </Card>
  );
};

export default Welcome;
