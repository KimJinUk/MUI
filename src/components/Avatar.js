import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import {blue300,indigo900,orange200,deepOrange300,pink400,purple500,} from 'material-ui/styles/colors';

const img = "http://www.material-ui.com/images/uxceo-128.jpg"

const style = {margin: 5};

/**
 * Examples of `Avatar` using an image, [Font Icon](/#/components/font-icon), [SVG Icon](/#/components/svg-icon)
 * and "Letter" (string), with and without custom colors at the default size (`40dp`) and an alternate size (`30dp`).
 */
const AvatarTemplete = () => (
  <MuiThemeProvider>
    <div>3.Avatar
    <List>
      <ListItem
        disabled={false}
        leftAvatar={
          <Avatar src={img} />
        }
      >
        Image Avatar
      </ListItem>
      <ListItem
        disabled={true}
        leftAvatar={
          <Avatar
            src={img}
            size={30}
            style={style}
          />
        }
      >
        Image Avatar with custom size
      </ListItem>
      <ListItem
        disabled={true}
        leftAvatar={
          <Avatar icon={<FontIcon className="muidocs-icon-communication-voicemail" />} />
        }
      >
        FontIcon Avatar
      </ListItem>
      <ListItem
        disabled={true}
        leftAvatar={
          <Avatar
            icon={<FontIcon className="muidocs-icon-communication-voicemail" />}
            color={blue300}
            backgroundColor={indigo900}
            size={30}
            style={style}
          />
        }
      >
        FontIcon Avatar with custom colors and size
      </ListItem>
      <ListItem
        disabled={true}
        leftAvatar={
          <Avatar icon={<FileFolder />} />
        }
      >
        SvgIcon Avatar
      </ListItem>
      <ListItem
        disabled={true}
        leftAvatar={
          <Avatar
            icon={<FileFolder />}
            color={orange200}
            backgroundColor='black'
            size={30}
            style={style}
          />
        }
      >
        SvgIcon Avatar with custom colors and size
      </ListItem>
      <ListItem
        disabled={true}

        
       
        leftAvatar={
          <Avatar
            children="ADFFFFD"
            color={deepOrange300}
            backgroundColor={purple500}
            size={30}
            style={style}
          >
          </Avatar>
        }
      >
        Letter Avatar
      </ListItem>
      <ListItem
        disabled={true}
        leftAvatar={
          <Avatar
            color={deepOrange300}
            backgroundColor={purple500}
            size={30}
            style={style}
          >
            A
          </Avatar>
        }
      >
        Letter Avatar with custom colors and size
      </ListItem>
    </List>
    </div>
  </MuiThemeProvider>
);

export default AvatarTemplete;