import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

import About from '../About/About';
import Todo from '../Todo/Todo';
import Contacts from '../Contacts/Contacts';

import styles from './App.module.css';

const App = () => (
	<Router>
		<div className={styles.wrap}>
			<Card>
				<MenuList>
					<Link to='/' className={styles.link}><MenuItem>Обо мне</MenuItem></Link>
					<Link to='/todo' className={styles.link}><MenuItem>Дела</MenuItem></Link>
					<Link to='/contacts' className={styles.link}><MenuItem>Контакты</MenuItem></Link>
				</MenuList>
			</Card>
			
			<Card>
				<Route path='/' exact component={About} />
				<Route path='/todo' component={Todo} />
				<Route path='/contacts' component={Contacts} />
			</Card>
		</div>
	</Router>
);

export default App;

