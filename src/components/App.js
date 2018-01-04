import React from 'react';
import AppBarTemplete from './AppBarTemplete';
import AutoCompleteTemplete from './AutoCompleteTemplete';
import Avatar from './Avatar';
import BadgeTemplete from './BadgeTemplete';
import BottomNavigationTemplete from './BottomNavigationTemplete';

class App extends React.Component {
    render(){

        return (
                <div>
					<BottomNavigationTemplete/>
                </div>
        );
    }
}

export default App;

/*
                	<AppBarTemplete/>
                	<AutoCompleteTemplete/>
                	<Avatar/>
                	<BadgeTemplete/>
*/