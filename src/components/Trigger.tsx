import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import main from '../pages/main-page/main.module.css';

export const Trigger = ({ isCollapsed, onTrigger, sm }: Props) => {
    return (
        <div
            className={main.trigger}
            onClick={onTrigger}
            data-test-id={sm ? 'sider-switch' : 'sider-switch-mobile'}
        >
            {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
    );
};
