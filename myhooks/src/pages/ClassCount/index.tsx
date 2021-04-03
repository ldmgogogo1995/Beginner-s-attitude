import React, { Component } from 'react'
import ReactDOM from 'react-dom'
type IProps = {

}
interface IState {
    list: Array<any>
}
export default class ClassPage extends Component<IProps, IState> {
    node: any
    constructor(props: IProps) {
        super(props)
        this.state = {
            list: []
        }
    }
    addLine = () => {
        this.setState((preState) => ({
            list: ['item' + preState.list.length, ...preState.list]
        }))
    }
    componentDidMount() {
        for (let i = 0; i < 20; i++) {
            this.addLine()

        }
        setInterval(() => {
            this.addLine()
        }, 1200)

    }
   getSnapshotBeforeUpdate() {
        return this.node.scrollHeight
    }
    componentDidUpdate(preProps: IProps, preState: IState, snapShot: number) {
            console.log(snapShot,'snapShot')
            const changeHeight = this.node.scrollHeight-snapShot
            this.node.scrollTop += changeHeight

    }
    //卸载方法
    unmount = () => {
        ReactDOM.unmountComponentAtNode(document.querySelector('#root') as Element)
    }
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <ul className='scorll-continar' ref={node => this.node = node}>
                    {this.state.list.map((item, index) => <li className='item-height' key={index}>{item}</li>)}
                </ul>
            </div>
        )
    }
}
