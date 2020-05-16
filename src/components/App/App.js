import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {

	state = {
		items: [
			{
				value: 'Встреча с клиентом',
				isDone: true
			},
			{
				value: 'Подпись договора',
				isDone: true
			},
			{
				value: 'Урок английского',
				isDone: false
			}
		]
	};

  render() {
    return (
    	<div className={styles.wrap}>
				<div>
  				<h1 className={styles.header}>Важные дела:</h1>
  				<InputItem />
  				<ItemList items={this.state.items}/>
  				<Footer count={1} />
  			</div>
			</div>);	
	}
};



export default App;

