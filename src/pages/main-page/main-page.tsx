import React, { useState } from 'react';
import cn from 'classnames';
import { Breadcrumb, Button, Card, Col, Layout, Menu, Row } from 'antd';
import {
    AndroidFilled,
    AppleFilled,
    CalendarTwoTone,
    HeartTwoTone,
    IdcardOutlined,
    SettingOutlined,
    TrophyTwoTone,
} from '@ant-design/icons';
import Text from 'antd/lib/typography';

import main from './main.module.css';
import header from './css/header.module.css';
import content from './css/content.module.css';
import footer from './css/footer.module.css';

import FitLogo from '@components/svgr/fitLogo';
import Logo from '@components/svgr/LogoFull';
import { Grid } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
import Meta from 'antd/lib/card/Meta';
import ExitLogo from '@components/svgr/exitLogo';
import { Trigger } from '@components/Trigger';

const { useBreakpoint } = Grid;
const { Header, Sider, Content } = Layout;

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const screens = useBreakpoint();

    const toggleCollapsed = () => {
        setCollapsed((collapsed) => !collapsed);
    };

    return (
        <Layout>
            <div className={cn(main.container)}>
                {/* <img src='/Main_page_light.png' alt='' /> */}
                <Sider
                    collapsedWidth={screens.sm ? 64 : 0}
                    trigger={
                        <Button
                            type='text'
                            icon={screens.sm ? <ExitLogo /> : null}
                            size={screens.sm ? 'large' : 'small'}
                            style={
                                screens.sm
                                    ? {
                                          width: '100%',
                                          display: 'flex',
                                          alignItems: 'flex-end',
                                          gap: '26px',
                                          font: '400 14px / 1.3 "Inter", sans-serif',
                                          color: '#262626',
                                          boxShadow: 'inset 0 1px 0 0 #f0f0f0',
                                          background: '#fff',
                                      }
                                    : {
                                          display: 'flex',
                                          position: 'absolute',
                                          bottom: '11px',
                                          right: '31px',
                                      }
                            }
                        >
                            <span
                                style={
                                    collapsed ? { display: 'none' } : { display: 'inline-block' }
                                }
                            >
                                Выход
                            </span>
                        </Button>
                    }
                    collapsible
                    collapsed={collapsed}
                    theme='light'
                    width={screens.sm ? 208 : 106}
                    className={cn(main.sider)}
                    style={
                        !screens.sm
                            ? {
                                  zIndex: '10',
                                  background: '#fff',
                                  height: '100%',
                                  position: 'absolute',
                              }
                            : { background: '#fff', height: '100%' }
                    }
                >
                    <div className={cn(main.menuWrap)}>
                        <div
                            className={cn(main.logo, {
                                [main.logoCollapse]: collapsed,
                            })}
                        >
                            {React.createElement(collapsed || !screens.sm ? FitLogo : Logo, {
                                style: { padding: 0 },
                            })}
                        </div>
                        <Menu
                            inlineIndent={18}
                            theme='light'
                            mode='inline'
                            style={{
                                font: '400 14px / 1.3 "Inter", sans-serif',
                                color: '#262626',
                                padding: !screens.sm ? '8px' : 'initial',
                            }}
                            items={[
                                {
                                    key: '1',
                                    icon: screens.sm ? (
                                        <CalendarTwoTone className={cn(main.iconFill)} />
                                    ) : null,
                                    label: 'Календарь',
                                    style: { padding: !screens.sm ? '0' : '0 16px' },
                                },
                                {
                                    key: '2',
                                    icon: screens.sm ? (
                                        <HeartTwoTone className={cn(main.iconFill)} />
                                    ) : null,
                                    label: 'Тренировки',
                                    style: { padding: !screens.sm ? '0' : '0 16px' },
                                },
                                {
                                    key: '3',
                                    icon: screens.sm ? (
                                        <TrophyTwoTone className={cn(main.iconFill)} />
                                    ) : null,
                                    label: 'Достижения',
                                    style: { padding: !screens.sm ? '0' : '0 16px' },
                                },
                                {
                                    key: '4',
                                    icon: screens.sm ? (
                                        <IdcardOutlined className={cn(main.iconFill)} />
                                    ) : null,
                                    label: 'Профиль',
                                    style: { padding: !screens.sm ? '0' : '0 16px' },
                                },
                            ]}
                        />
                    </div>
                    <Trigger
                        isCollapsed={collapsed}
                        onTrigger={toggleCollapsed}
                        sm={screens.sm ? true : false}
                    />
                </Sider>
                <Layout className={cn(main.site)}>
                    <Header>
                        <div className={cn(header.container)}>
                            <Breadcrumb>Главная</Breadcrumb>
                            <div className={cn(header.inner)}>
                                <h1 className={cn(header.title)}>
                                    Приветствуем тебя в CleverFit — приложении,<br></br> которое
                                    поможет тебе добиться своей мечты!
                                </h1>
                                <div className={cn(header.extra)}>
                                    <Button
                                        type='text'
                                        icon={[
                                            screens.lg ? (
                                                <SettingOutlined />
                                            ) : screens.sm ? null : (
                                                <SettingOutlined />
                                            ),
                                        ]}
                                    >
                                        <span
                                            style={
                                                screens.sm
                                                    ? { display: 'initial' }
                                                    : { display: 'none' }
                                            }
                                        >
                                            Настройки
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Header>
                    <Content className={cn(content.container)}>
                        <Row>
                            <Col span={24}>
                                <Card className={cn(content.card)}>
                                    <Text className={cn(content.text)}>
                                        {' '}
                                        С CleverFit ты сможешь: <br></br>— планировать свои
                                        тренировки на календаре, выбирая тип и уровень нагрузки;
                                        <br></br>— отслеживать свои достижения в разделе статистики,
                                        сравнивая свои результаты с нормами и рекордами; <br></br>—
                                        создавать свой профиль, где ты можешь загружать свои фото,
                                        видео и отзывы о тренировках; <br></br>— выполнять
                                        расписанные тренировки для разных частей тела, следуя
                                        подробным инструкциям и советам профессиональных тренеров.
                                    </Text>
                                </Card>
                            </Col>
                        </Row>
                        <Row gutter={[16, 14]} wrap={true}>
                            <Col span={24}>
                                <Card className={cn(content.card)}>
                                    <Text className={cn(content.text_bold)}>
                                        CleverFit — это не просто приложение, а твой личный помощник
                                        в мире фитнеса. Не откладывай на завтра — начни
                                        тренироваться уже сегодня!
                                    </Text>
                                </Card>
                            </Col>
                            <Col flex='1 1 198px'>
                                <Card
                                    hoverable
                                    bodyStyle={{
                                        padding: '11px 24px',
                                        textAlign: 'center',
                                        font: '400 16px / 1.3 "Inter", sans-serif',
                                        color: '#262626',
                                    }}
                                    actions={[
                                        <Button
                                            style={{ color: '#2F54EB' }}
                                            type='text'
                                            icon={
                                                <HeartTwoTone
                                                    style={{ fontSize: '12px' }}
                                                    className={cn(main.iconFill2)}
                                                />
                                            }
                                        >
                                            Тренировки
                                        </Button>,
                                    ]}
                                >
                                    Расписать тренировки
                                </Card>
                            </Col>
                            <Col flex='1 1 198px'>
                                <Card
                                    hoverable
                                    bodyStyle={{
                                        padding: '11px 24px',
                                        textAlign: 'center',
                                        font: '400 16px / 1.3 "Inter", sans-serif',
                                        color: '#262626',
                                    }}
                                    actions={[
                                        <Button
                                            style={{ color: '#2F54EB' }}
                                            type='text'
                                            icon={
                                                <CalendarTwoTone
                                                    style={{ fontSize: '12px' }}
                                                    className={cn(main.iconFill2)}
                                                />
                                            }
                                        >
                                            Календарь
                                        </Button>,
                                    ]}
                                >
                                    Назначить календарь
                                </Card>
                            </Col>
                            <Col flex='1 1 198px'>
                                <Card
                                    hoverable
                                    bodyStyle={{
                                        padding: '11px 24px',
                                        textAlign: 'center',
                                        font: '400 16px / 1.3 "Inter", sans-serif',
                                        color: '#262626',
                                    }}
                                    actions={[
                                        <Button
                                            style={{ color: '#2F54EB' }}
                                            type='text'
                                            icon={
                                                <IdcardOutlined
                                                    style={{ fontSize: '12px' }}
                                                    className={cn(main.iconFill2)}
                                                />
                                            }
                                        >
                                            Профиль
                                        </Button>,
                                    ]}
                                >
                                    Заполнить профиль
                                </Card>
                            </Col>
                        </Row>
                    </Content>
                    <Footer
                        style={{
                            padding: '42px 24px',
                        }}
                        className={cn(footer.footer)}
                    >
                        <Button
                            size='large'
                            style={{
                                font: '400 16px / 1.3 "Inter", sans-serif',
                                color: '#2F54EB',
                            }}
                            type='text'
                        >
                            Смотреть отзывы
                        </Button>
                        <Card
                            bodyStyle={{
                                padding: '13px 26px',
                                font: '400 16px / 1.3 "Inter", sans-serif',
                                color: '#2F54EB',
                            }}
                            actions={[
                                <Button type='text' icon={<AndroidFilled />}>
                                    Android OS
                                </Button>,
                                <Button type='text' icon={<AppleFilled />}>
                                    Apple iOS
                                </Button>,
                            ]}
                        >
                            Скачать на телефон
                            <Meta
                                style={{
                                    font: '400 14px / 1.3 "Inter", sans-serif',
                                    color: '#8C8C8C',
                                    marginTop: '8px',
                                }}
                                description={'Доступно в PRO-тарифе'}
                            />
                        </Card>
                    </Footer>
                </Layout>
            </div>
        </Layout>
    );
};
