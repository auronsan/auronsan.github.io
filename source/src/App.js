import React, {Component} from 'react';
import logo from './logo.svg';
import {
    Carousel,
    message,
    Button,
    Skeleton,
    Switch,
    Card,
    Icon,
    Avatar,
    Timeline,
    Menu
} from 'antd';

import './App.css';
import Home from './component/home';
const {Meta} = Card;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        message
            .loading('Wait me..', 1.5)
            .then(() => {
                message.success('I am Ahsanul', 0)
                message.info('Full Stack Developer', 0)
                this.setState({loading: false});
            });
    }
    render() {
        const {loading} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                <Menu
        
        mode="horizontal"
      >
        <Menu.Item key="mail">  <a href="mailto:auronsanjr@gmail.com" >Contact Me</a>
        </Menu.Item>
        <Menu.Item key="alipay"> <a href="https://www.linkedin.com/in/auronsan/" target="_blank" rel="noopener noreferrer">Linkedin</a>
        </Menu.Item>
      </Menu>
                </header>
                {loading && <section className="bodyContent">
                    <div className="avatarContent" >
                        <Card
                            loading={loading}
                            hoverable
                            style={{
                            width: 240
                        }}
                            cover={< img alt = "example" src = "https://media.licdn.com/dms/image/C5103AQE6ehXge7s7qQ/profile-displayphoto-shrink_200_200/0?e=1554336000&v=beta&t=e7JIX6fSQ1cb4SUxPk25LGT2WdLboOB_JG4L-fAowyo" />}>
                            
                        </Card>
                    </div>
                    <div>
                        <Timeline pending="Loading..."></Timeline>
                    </div>
                </section>}
                {!loading &&
                <section className="bodyContent"  >
                
                    <div className="avatarContent">
                        <Card
                            hoverable
                            style={{
                            width: 240
                        }}
                            cover={
                            < img alt = "Anshor" src = "https://media.licdn.com/dms/image/C5103AQE6ehXge7s7qQ/profile-displayphoto-shrink_200_200/0?e=1554336000&v=beta&t=e7JIX6fSQ1cb4SUxPk25LGT2WdLboOB_JG4L-fAowyo" />
                            }>
                            <Meta title="" description="https://auronsan.github.io./"/>
                        </Card>
                    </div>
                    <div>
                      <h1>Working Experiences</h1>
                        <Timeline pending="Search Happy Client.." reverse>
                            <Timeline.Item color="red">
                                <p><a href="https://wegen-energy.com" target="_blank" >Wegen Energy</a></p>
                                <p> Full Stack Developer : JS,HTML5,CSS, NodeJS</p>
                            </Timeline.Item>

                            <Timeline.Item color="red">
                                <p><a href="https://doctor.help" target="_blank" >Doctor.help </a></p>
                                <p> Full Stack Developer : JS,HTML5,CSS, Python</p>
                            </Timeline.Item>


                            <Timeline.Item>
                                <p><a href="https://vietnamworks.com" target="_blank" >Vietnamworks.com </a></p>
                                <p> Full Stack Developer  : JS,HTML5,CSS, PHP, Python, Golang</p>
                            </Timeline.Item>

                        </Timeline>
                    </div>
                </section>}
            </div>
        );
    }
}

export default App;
