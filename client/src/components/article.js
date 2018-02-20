import React, { Component } from 'react';
import { Layout, Icon, List, Avatar } from 'antd';
import CodeMirror from 'codemirror';

const { Content, Sider } = Layout;

export default class Article extends Component {

	componentDidMount () {
		console.log(this.refs.codeditor);
		const editor = CodeMirror.fromTextArea(this.refs.codeditor, {
			lineNumbers: true
		});
	}

	render () {
		const data = [
		  {
		    title: 'Ant Design Title 1',
		  },
		  {
		    title: 'Ant Design Title 2',
		  },
		  {
		    title: 'Ant Design Title 3',
		  },
		  {
		    title: 'Ant Design Title 4',
		  },
		];
		return (
			<div className="Article" style={{marginTop: '20px'}}>
				<Layout>
					<Content style={{textAlign: 'center'}}>
						<h1>HTTPS安全协议</h1>
						<Icon type="calendar" />
						<span>2017-02-10</span>
						<Icon type="user" />
						<span>sceley</span>
						<Icon type="folder" />
						大前端

						<List
						    itemLayout="horizontal"
						    dataSource={data}
						    style={{marginTop: '20px', background: 'white'}}
						    renderItem={item => (
						      <List.Item  actions={[<Icon type="like-o" />, <Icon type="enter" />]}>
						        <List.Item.Meta
						          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
						          title={<a href="https://ant.design">{item.title}</a>}
						          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
						        />
						      </List.Item>
						    )}
						/>
						<textarea style={{background: "white"}} ref="codeditor"></textarea>
					</Content>
					<Sider width={300}>
					</Sider>
				</Layout>
			</div>
		);
	}
}