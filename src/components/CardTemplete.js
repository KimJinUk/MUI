import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class CardExampleWithAvatar extends React.Component {
  constructor(props) {
    super(props)
  }



  render() {
   console.log(this.props)
    return (
      <div>
        6. Card With Avatar
        <MuiThemeProvider>
          <Card>
            <CardHeader
              title={this.props.user[0].userName}
              subtitle={this.props.user[0].userDescription}
              avatar="http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png"
              actAsExpander={true}
              showExpandableButton={true}
            />

            <CardText  expandable={true}>
              <CardTitle title="Card title" subtitle="Card subtitle" />
              <CardMedia
                overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
              >
               <img src="https://data.whicdn.com/images/56063227/original.jpg" alt="" />
              </CardMedia>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>

            <CardActions>
              <FlatButton label="Buy" />
              <FlatButton label="isBuy" onClick = {this.props.user[0].idBuy?()=>{alert('1')}:()=>{alert('3')}} />
            </CardActions>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }

}

export default CardExampleWithAvatar;