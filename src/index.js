import React, {Component} from "react";
import ReactDOM from "react-dom";
import SweetAlert from 'sweetalert';
import './index.css'

// class HelloTitle extends React.Component {
//     render() {
//         return (
//             <h1>Hello World</h1>
//         );
//     }
// }

// ReactDOM.render(
//     <HelloTitle />,
//     document.getElementById('root')
// )

/**
 * 頁面渲染標題
 */
class ReactExample extends Component {
    render() {
        return renderContent("Hello World123");
    }
}

function renderContent(content) {
    return (
        <div>
            <h1 className="title"> 練習題1：頁面渲染標題 </h1>
            <div>
                <h2>{content}</h2>
                <span
                    className="span">-------------------------------------------------------------------------------
                </span>
            </div>
        </div>
    );
}

/**
 * 構建未讀消息組件
 */
class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            date: new Date()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            count: getNotificationCount(this.state.count) + 1,
            date: new Date()
        });

        // this.setState({
        //         count: getNotificationCount(this.state.count) + 1
        //     }
        // );
    }

    render() {
        if (this.state.count === 0) {
            return (
                <div>
                    <h1 className="title"> 練習題2：構建未讀消息組件 </h1>
                    <div>
                        <span>沒有未讀消息</span>
                        <FormattedDate date={this.state.date}/>
                        <span
                            className="span">-------------------------------------------------------------------------------
                        </span>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <h1 className="title"> 練習題2：構建未讀消息組件 </h1>
                    <div>
                        <span>有（{this.state.count}）條未讀消息</span>
                        <FormattedDate date={this.state.date}/>
                        <span
                            className="span">-------------------------------------------------------------------------------
                        </span>
                    </div>
                </div>
            );
        }
    }
}

function getNotificationCount(count) {
    return count;
}

function FormattedDate(props) {
    return <h2>{props.date.toLocaleTimeString()}</h2>;
}

/**
 * JSX 元素變量
 */
class JSXElementVar extends Component {
    render() {
        return (
            <div>
                <h1 className="title"> 練習題3：JSX 元素變量 </h1>
                <div>
                    <JSXTitle/>
                    <JSXContent/>
                    <span
                        className="span">-------------------------------------------------------------------------------
                    </span>
                </div>
            </div>
        );
    }
}

const title = <h1>Line8</h1>;
const page = (
    <div>
        <h1>******** content ********</h1>
        {title}
        <h1>******** content ********</h1>
    </div>
);

class JSXTitle extends Component {
    render() {
        return title;
    }
}

class JSXContent extends Component {
    render() {
        return page;
    }
}

/**
 * 組建的房子
 */
class HouseBuilt extends Component {
    render() {
        return (
            <div>
                <h1 className="title"> 練習題4：組建的房子 </h1>
                <div>
                    <House/>
                    <span
                        className="span">-------------------------------------------------------------------------------
                    </span>
                </div>
            </div>
        );
    }
}

class House extends Component {
    render() {
        return (
            <div>
                <Room/>
                <Bathroom/>
            </div>
        );
    }
}

class Room extends Component {
    render() {
        return (
            <div>
                <h1>******** 我是Room ********</h1>
                <Man/>
                <Dog/>
                <h1>******** 我是Room ********</h1>
            </div>
        );
    }
}

class Bathroom extends Component {
    render() {
        return (
            <div>
                <h1>******** 我是Bathroom ********</h1>
                <Man/>
                <h1>******** 我是Bathroom ********</h1>
            </div>
        );
    }
}

class Man extends Component {
    render() {
        return <h2>我是Man</h2>;
    }
}

class Dog extends Component {
    render() {
        return <h2>我是Dog</h2>;
    }
}

/**
 * 不能摸的狗（一）
 */
class CannotTouchTheDog1 extends Component {
    render() {
        return (
            <div>
                <h1 className="title"> 練習題5：不能摸的狗（一） </h1>
                <div>
                    <Dog1/>
                    <span
                        className="span">-------------------------------------------------------------------------------
                    </span>
                </div>
            </div>
        );
    }
}

class Dog1 extends Component {
    bark() {
        console.log('Dog1 barks.')
    }

    run() {
        console.log('Dog1 runs.')
    }

    render() {
        return (
            <div className="dog"
                 onClick={() => {
                     this.bark();
                     this.run();
                     SweetAlert({
                         title: 'Dog1 event',
                         text: '兇狠的狗邊跑邊叫',
                         icon: 'warning', /*有四个預定義圖標："warning" , "error" , "success" 和 "info"*/
                         button: '確定'
                     }).then(() => {
                     });
                 }}>
                兇狠的狗
            </div>
        );
    }
}

/**
 * 不能摸的狗（二）
 */
class CannotTouchTheDog2 extends Component {
    render() {
        return (
            <div>
                <h1 className="title"> 練習題6：不能摸的狗（二） </h1>
                <div>
                    <Dog2/>
                    <span
                        className="span">-------------------------------------------------------------------------------
                    </span>
                </div>
            </div>
        );
    }
}

class Dog2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBarking: false,
            isRunning: false,
        };
    }

    async bark() {
        await this.setState({
            isBarking: true
        });

        // this.setState(state => {
        //     return {
        //         isBarking: !state.isBarking
        //     }
        // });
        console.log('Dog2 barks.', this.state.isBarking);

        this.barkAfterAPeriodOfTime = setInterval(
            () => {
                this.stopBark();
                clearInterval(this.barkAfterAPeriodOfTime);
            },
            5000
        );
    }

    async run() {
        await this.setState({
            isRunning: true
        });
        console.log('Dog2 runs.', this.state.isRunning);

        this.runAfterAPeriodOfTime = setInterval(
            () => {
                this.stopRun();
                clearInterval(this.runAfterAPeriodOfTime);
            },
            5000
        );
    }

    stopBark() {
        this.setState({
            isBarking: false,
        });
        console.log("isBarking: " + this.state.isBarking);
    }

    stopRun() {
        this.setState({
            isRunning: false,
        });
        console.log("isRunning: " + this.state.isRunning);
    }

    render() {
        return (
            <div className="dog"
                 onClick={() => {
                     this.bark();
                     this.run();
                     SweetAlert({
                         title: 'Dog2 event',
                         text: '兇狠的狗邊跑邊叫',
                         icon: 'info', /*有四个預定義圖標："warning" , "error" , "success" 和 "info"*/
                         button: '確定'
                     }).then(() => {
                     });
                 }}>
                壞壞的狗
            </div>
        );
    }
}

/**
 * 打開和關閉電腦
 */
class TurnOnAndTurnOffTheComputer extends Component {
    render() {
        return (
            <div>
                <h1 className="title"> 練習題7：打開和關閉電腦 </h1>
                <div>
                    <Computer/>
                    <span
                        className="span">-------------------------------------------------------------------------------
                    </span>
                </div>
            </div>
        );
    }
}

class Computer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'off'
            // status: 'on'
        }
    }

    turnOnOrTurnOffComputer(status) {
        this.setState({
            status: status
        })
    }

    render() {
        if (this.state.status === 'off') {
            return (
                <div>
                    <h2>顯示器關了(電腦狀態：關)</h2>
                    <button onClick={() => {
                        this.turnOnOrTurnOffComputer('on')
                    }}
                    >
                        開關
                    </button>
                </div>
            );
        } else {
            return (
                <div>
                    <h2>顯示器亮了(電腦狀態：開)</h2>
                    <Screen/>
                    <button onClick={() => {
                        this.turnOnOrTurnOffComputer('off')
                    }}
                    >
                        開關
                    </button>
                </div>
            );
        }
    }
}

class Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showContent: '無內容'
        }
    }

    sendContent(content) {
        this.setState({
            showContent: content
        })
    }

    render() {
        return (
            <div>
                <h2>我是螢幕：{this.state.showContent}</h2>
                <button onClick={() => {
                    this.sendContent('Hello World!')
                }}
                >
                    傳入內容
                </button>
                <button onClick={() => {
                    this.sendContent('無內容')
                }}
                >
                    清除內容
                </button>
            </div>
        )
    }
}

/**
 * 打印章節標題
 */
class PrintChapterTitles extends Component {
    render() {
        return (
            <div>
                <h1 className="title"> 練習題8：打印章節標題 </h1>
                <div>
                    <LessonsList/>
                    <span
                        className="span">-------------------------------------------------------------------------------
                    </span>
                </div>
            </div>
        );
    }
}

const lessons = [
    // '123','abc','def','hij'
    {title: 'Lesson 1: title', description: 'Lesson 1: description'},
    {title: 'Lesson 2: title', description: 'Lesson 2: description'},
    {title: 'Lesson 3: title', description: 'Lesson 3: description'},
    {title: 'Lesson 4: title', description: 'Lesson 4: description'}
];

class Lesson extends Component {
    render() {
        // const {lesson} = this.props;
        return (
            <div className="lesson"
                 onClick={() => {
                     SweetAlert({
                         title: 'print',
                         text: `${this.props.index} - ${this.props.title}`,
                         icon: 'success'
                     }).then(() =>
                         console.log(`${this.props.index} - ${this.props.title}`)
                     )
                 }}
            >
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

class LessonsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lessons: lessons
        }
    }

    render() {
        return (
            <div>
                {this.state.lessons.map((lesson, index) => {
                    // return <Lesson lesson={lesson} key={index} index={index}/>
                    return <Lesson title={lesson.title} description={lesson.description} key={index} index={index}/>
                })}
            </div>
        );
    }
}

/**
 * 數值換算器
 */
class Converter extends Component {
    render() {
        return (
            <div>
                <h1 className="title"> 練習題9：數值換算器 </h1>
                <div>
                    <PercentageApp/>
                    <span
                        className="span">-------------------------------------------------------------------------------
                    </span>
                </div>
            </div>
        );
    }
}

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    async handleChange(event) {
        await this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div>
                <input type='number' value={this.state.value} onChange={this.handleChange}/>
                <PercentageShower value={this.state.value}/>
            </div>
        );
    }
}

class PercentageShower extends Component {
    render() {
        const text = this.props.value * 100.00;
        if (text === 0) {
            return <div/>;
        } else {
            return (
                <div>
                    {text.toFixed(2)} %
                </div>
            );
        }
    }
}

class PercentageApp extends Component {
    render() {
        return (
            <div>
                <Input/>
            </div>
        );
    }
}

/**
 * 加載、刷新數據
 */
class LoadAndRefreshData extends Component {
    render() {
        return (
            <div>
                <h1 className="title"> 練習題10：加載、刷新數據 </h1>
                <div>
                    <Post1/>
                    <span
                        className="span">-------------------------------------------------------------------------------
                    </span>
                </div>
            </div>
        );
    }
}

class Post1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '無數據...'
        };

        this.handleRefresh = this.handleRefresh.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    // async handleRefresh() {
    //     this.setState({content: '數據加載中...'});
    //     const content = await this.getPostData();
    //     this.setState({content})
    // }

    handleRefresh() {
        this.setState({content: '數據加載中...'});
        this.getPostData().then(response => {
            this.setState({content: response});
        })
    }

    handleClear() {
        this.setState({content: '無數據...'});
    }

    getPostData = () => {
        return new Promise((res, rej) => {
            setTimeout(() =>
                    res(Math.random(30))
                , 3000)
        })
    };

    render() {
        return (
            <div>
                <div className="post-content">{this.state.content}</div>
                <button className="refresh" onClick={this.handleRefresh}>刷新</button>
                <button className="clear" onClick={this.handleClear}>清除數據</button>
            </div>
        );
    }
}

/**
 * 獲取點擊元素的高度
 */
class GetElementHeight extends Component {
    render() {
        return (
            <div>
                <h1 className="title"> 練習題11：獲取點擊元素的高度 </h1>
                <div>
                    <Post2/>
                    <span
                        className="span">-------------------------------------------------------------------------------
                    </span>
                </div>
            </div>
        );
    }
}

class Post2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'Hello World',
            clientHeight: ''
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const element = document.getElementById('content');
        if (element) {
            this.setState({
                clientHeight: element.offsetHeight
            })
        }
    }

    handleClick() {
        SweetAlert({
            title: 'clientHeight',
            text: `${this.state.clientHeight}`
        }).then(() => {console.log(this.state.clientHeight)})
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <p id="content">
                    {this.state.content}
                </p>
            </div>
        );
    }
}


function App() {
    return (
        <div>
            <ReactExample/>
            <Notification/>
            <JSXElementVar/>
            <HouseBuilt/>
            <CannotTouchTheDog1/>
            <CannotTouchTheDog2/>
            <TurnOnAndTurnOffTheComputer/>
            <PrintChapterTitles/>
            <Converter/>
            <LoadAndRefreshData/>
            <GetElementHeight/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)