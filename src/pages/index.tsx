import React, { useState } from 'react';
import { Col, Row, Input, Button, ConfigProvider, Spin } from 'antd';
import styles from '../styles/Index.module.css';
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const monserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

const RegisButton = (props:any) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#1677ff',
        borderRadius: 5,
        colorBorder: '#1677ff'
      },
    }}
  >
    <Button className={styles.regisButton}
      onClick={props.handleSetStatus}
    >
      {props.status === 'login'? 'Signup now' : 'Back to login' }
    </Button>
  </ConfigProvider>
);

const Index: React.FC = () => {
  const [userData, setUserData] = useState({
    userName: '',
    password: '',
    fullName: ''
  })
  const [status, setStatus] = useState('login')
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSetStatus = () => {
    status === 'login' ? setStatus('signup') : setStatus('login')

    setUserData({
      userName: '',
      password: '',
      fullName: ''
    })
  }

  const handleInputData = (event:any) => {
    setUserData({
      ...userData,
      [event.target.name] : event.target.value
    })
  }

  const handleLogin = () => {
    setIsLoading(true)
    router.push('/home')
  }

  const handleSignUp = () => {
    setIsLoading(true)
    // handleSetStatus()
  }

  return (
    <div className={monserrat.className}>
      <Row className={styles.container}>
        <Col span={6} className={styles.leftSide}>
          <div className={styles.logo}>
            <Image
              src="/logos/logo_smpn.png"
              width={60}
              height={60}
              alt="Logo"
            />
            <div className={styles.title}>
              <h3>DASHBOARD GDS - SMPN 1 CIPARAY</h3>
            </div>
          </div>
          { status === 'login' ? (
            <>
              <div>
                <h4>Login into your account</h4>
              </div>
              <div className={styles.form}>
                <h5 className={styles.label}>Email Address</h5>
                <Input placeholder='juan@mail.com' value={userData.userName} name="userName" onChange={handleInputData}/>
                <h5 className={styles.label}>Password</h5>
                <Input.Password
                  placeholder="Enter your password"
                  name="password"
                  value={userData.password}
                  onChange={handleInputData}
                  iconRender={(visible) => (visible ? <EyeTwoTone rev={undefined} /> : <EyeInvisibleOutlined rev={undefined} />)}
                />
                {!isLoading ? (
                  <Button className={styles.loginButton} type="primary" onClick={handleLogin}>Login now</Button>
                ):(
                  <div className={styles.spin}>
                    <Spin size='large'/>
                  </div>
                )}
              </div>
              <Row className={styles.contain}>
                <Col span={10} className={styles.col}>
                  <div className={styles.line}/>
                </Col>
                <Col span={4} className={styles.col}>
                  OR
                </Col>
                <Col span={10} className={styles.col}>
                  <div className={styles.line}/>
                </Col>
              </Row>
              <RegisButton status={status} handleSetStatus={handleSetStatus}/>
            </>
          ) :(
            <>
              <div>
                <h4>Signup for your account</h4>
              </div>
              <div className={styles.form}>
                <h5 className={styles.label}>Fullname</h5>
                <Input placeholder='Your full name' value={userData.fullName} name="fullName" onChange={handleInputData}/>
                <h5 className={styles.label}>Email Address</h5>
                <Input placeholder='juan@mail.com' value={userData.userName} name="userName" onChange={handleInputData}/>
                <h5 className={styles.label}>Password</h5>
                <Input.Password
                  placeholder="Enter your password"
                  name="password"
                  value={userData.password}
                  onChange={handleInputData}
                  iconRender={(visible) => (visible ? <EyeTwoTone rev={undefined} /> : <EyeInvisibleOutlined rev={undefined} />)}
                />
                {!isLoading ? (
                  <Button className={styles.loginButton} type="primary" onClick={handleSignUp}>Signup now</Button>
                ):(
                  <div className={styles.spin}>
                    <Spin size='large'/>
                  </div>
                )}
              </div>
              <Row className={styles.contain}>
                <Col span={10} className={styles.col}>
                  <div className={styles.line}/>
                </Col>
                <Col span={4} className={styles.col}>
                  OR
                </Col>
                <Col span={10} className={styles.col}>
                  <div className={styles.line}/>
                </Col>
              </Row>
              <RegisButton status={status} handleSetStatus={handleSetStatus}/>
            </>
          ) }
        </Col>
        <Col span={18} className={styles.rightSide}>
          <Image
            src="/images/ilustration.svg"
            width={900}
            height={700}
            alt="Logo"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Index;