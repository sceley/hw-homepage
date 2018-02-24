import React, { Component } from 'react';
import { List, Avatar, Button, Tabs, Col, Row, Divider } from 'antd';
import BreadCrumb from '../../common/BreadCrumb/BreadCrumb';
import Profile from '../../common/Profile2/Profile';
import config from '../../config';
import ParseDate from '../../common/ParseDate';
import './Club.css';

const TabPane = Tabs.TabPane;

export default class Club extends Component {
	state = {
		current: '',
		good_topics: '',
		topics: '',
		count: '',
		good_count: ''
	}
	componentWillMount() {
		this.pullData('all');
	}
	pullData = (e) => {
		fetch(`${config.server}/topics?tab=${e}`)
		.then(res => {
			if (res.ok) {
				return res.json();
			}
		}).then(json => {
			if (!json.errorcode) {
				if (e === 'all') {
					this.setState({
						topics: json.topics
					});
				} else {
					this.setState({
						good_topics: json.topics
					});
				}
			}
		});
		fetch(`${config.server}/topics/count?tab=${e}`)
		.then(res => {
			if (res.ok) {
				return res.json();
			}
		}).then(json => {
			console.log(json);
			// console.log();
		});

	}
	handleClick = (e) => {
		this.pullData(e);
	}

	render() {
		const pagination = {
			pageSize: 5,
			current: this.state.current,
			total: Number(this.state.count),
			onChange: ((e) => {
				this.setState({
					current: e
				});
				this.pullData(e);
			}),
		};
		return (
			<div className="Club">
				<BreadCrumb name="技术论坛" />
				<Row gutter={16} style={{ marginTop: '20px' }}>
					<Col span={18}>
						<Tabs onChange={this.handleClick} style={{background: 'white'}}>
							<TabPane tab="全部" key="all">
								<div style={{padding: '20px'}}>
									<List
										pagination={pagination}
										style={{ background: 'white' }}
										itemLayout="horizontal"
										dataSource={this.state.topics}
										renderItem={item => (
											<List.Item actions={[<span>{ParseDate(item.Date)}</span>]}>
												<List.Item.Meta
													avatar={<a href=""><Avatar src={item.Avatar} /></a>}
													title={<a href="https://ant.design">{item.Author}</a>}
													description={<h3><a href={`/topic/${item.topic_id}`}>{item.Title}</a></h3>}
												/>
											</List.Item>
										)}
									/>
								</div>
							</TabPane>
							<TabPane tab="精品" key="good">
								<List
									style={{ background: 'white' }}
									itemLayout="horizontal"
									dataSource={this.state.good_topics}
									renderItem={item => (
										<List.Item actions={[<span>more</span>]}>
											<List.Item.Meta
												avatar={<a href=""><Avatar src={item.Avatar} /></a>}
												title={<a href="https://ant.design">{item.Author}</a>}
												description={<h3><a href={`/topic/${item.topic_id}`}>{item.Title}</a></h3>}
											/>
										</List.Item>
									)}
								/>
							</TabPane>
						</Tabs>
					</Col>
					<Col span={6}>
						<div className="user-basic-info">
							<Profile />
							<Divider/>
							<Divider/>
							<div>
								<a href="/create/topic">
									<Button type="primary">
										发布话题
									</Button>
								</a>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}