  
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

function Loading() {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    return (
        <Spin indicator={antIcon} />
    );
}

export default Loading;