import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';

const App = () => {
  const [image, setImage] = useState(
    'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/265928631_914438355867953_3164426281830097363_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FIvbUWFPlqcAX_IzDLw&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT_CmeGJO8qU0oLo8YDiHCoRrdC8V73BtWxqTUOLnd_tLg&oe=62F61371',
  );
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      // this.bs.current.snapTo(1);
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Upload Photo</Text>
        </View>
        <View style={styles.main}>
          <View style={styles.picture}>
            <Image
              style={styles.image}
              source={{uri: image}}
              resizeMode="cover"
            />
          </View>
          <View style={styles.choosePicture}>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => {
                takePhotoFromCamera();
              }}>
              <Text style={styles.textMain}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => {
                choosePhotoFromLibrary();
              }}>
              <Text style={styles.textMain}>Choose From Library</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => {
                alert('Updating...');
              }}>
              <Text style={styles.textMain}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.button}></View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  subContainer: {
    flex: 1,
    width: '80%',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 30,
  },
  main: {flex: 8},
  textMain: {
    fontSize: 25,
    padding: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
  image: {
    height: 200,
    width: 200,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 200 / 2,
  },
  touch: {
    alignItems: 'center',
    backgroundColor: '#F15727',
    borderRadius: 20,
    marginVertical: 5,
  },
  picture: {
    flex: 1,
    alignItems: 'center',
  },
  choosePicture: {flex: 1, justifyContent: 'center'},
  button: {flex: 1},
});
