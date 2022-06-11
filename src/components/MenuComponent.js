import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Button, Menu, DiviDer } from 'react-native-paper';

function MenuComponent(props) {
    const [menuVisible, setMenuVisible] = React.useState(false)
    const [menuTitle, setMenuTitle] = React.useState(props.title)

    const openMenu = () => setMenuVisible(true);
    const closeMenu = () => setMenuVisible(false);

    const menuSelected =(item) => {
        if (props.onSelect !== undefined) {
            props.onSelect(item)
        }

        closeMenu();
    }

    return (
        <View style={styles.menu}>
          <Menu
            visible={menuVisible}
            onDismiss={closeMenu}
            anchor={<Button onPress={openMenu} style={{...styles.menuButton, ...props.customStyle}}>{props.title}</Button>}
            style={{...styles.menuDropdown}} >
            {
              props.items.map(item => {
                return <Menu.Item key={item.id} title={item.name} onPress={() => {menuSelected(item)}}/>
              })
            }
          </Menu>
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row'
      },
    menuButton: {
        backgroundColor: '#f3f3f3',
        minWidth: 150,
    },
    menuDropdown: {
        position: 'absolute',
        marginTop: -40, // workaround for menu item bug
        maxWidth: 300
    }
});

export default MenuComponent;