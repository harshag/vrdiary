import { useState } from 'react';
import { View, Alert } from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';
import AppConstants from '../../AppConstants';

const DialogComponent = (props) => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <View>
        <Portal>
          <Dialog visible={props.showDialog} onDismiss={hideDialog}>
            <Dialog.Title>{props.title}</Dialog.Title>
            <Dialog.Content>
              <Paragraph>{props.description}</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button color={AppConstants.buttonColor} onPress={hideDialog}>Ok</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
};

const DialogAlert = {
    show: (options) => {
        Alert.alert(options.title, options.description);
        //return <DialogComponent title={options.title} description={options.description} showDialog={() => true}/>
    }
}

export default DialogAlert;