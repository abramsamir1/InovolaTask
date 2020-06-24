import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Dimensions, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchDataAction } from '../actions';
import {  Container, Content, Icon, Thumbnail } from 'native-base';
import { theme, texts } from '../constants';
import { RFValue } from 'react-native-responsive-fontsize';
import CustomFooter from './CustomFooter';
import CustomSwiper from './CustomSwiper';

import AntDesign from 'react-native-vector-icons';
import Ionicons from 'react-native-vector-icons';
import FontAwesome from 'react-native-vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


let pagesCount;
let pages;

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount() {
    this.props.fetchDataAction();
  }

  renderFlatlist = () => {
    return (

      <FlatList
        data={this.props.data.reservTypes}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item, index }) => {
          return (

            <View style={styles.viewRow}>
              <Text style={styles.flatlistText}>SAR {item.price}</Text>
              <Text style={styles.flatlistText}>{item.name}</Text>
            </View>

          );
        }}
      />

    )
  }

  renderMainScreen() {

    if (this.props.loading === true) {
      return (

        <ActivityIndicator color={theme.colors.secondary} size="large" style={styles.loadingStyle} />

      );
    }
    else if (this.props.data && this.props.error != 1) {

      console.log('this.props.data.trainerImg', this.props.data.trainerImg);

      return (
        <Content>
          <View style={{ flex: 1 }}>

          <CustomSwiper data={this.props.data} />

            <View style={styles.bigView}>
              <View style={styles.normalView}>
                <View style={styles.viewRow}>
                  <Text style={styles.descriptionText}>{texts.texts.music}</Text>
                  <Icon type="FontAwesome" name="hashtag" size={theme.sizes.iconSize} style={styles.iconSmallStyle} />
                </View>
                <Text style={styles.headerText}>{this.props.data.title}</Text>

                <View style={[styles.viewRow, { paddingBottom: theme.sizes.padding - 8 }]}>
                  <Text style={styles.descriptionText}>{this.props.data.date}</Text>
                  <Icon type="FontAwesome" name="calendar" size={theme.sizes.iconSize} style={styles.iconSmallStyle} />
                </View>
                <View style={styles.viewRow}>
                  <Text style={styles.descriptionText}>{this.props.data.address}</Text>
                  <Icon type="AntDesign" name="pushpino" size={theme.sizes.iconSize} style={styles.iconSmallStyle} />
                </View>

              </View>

              <View style={styles.normalView}>
                <View style={styles.viewRow}>
                  <Text style={[styles.descriptionText, {color: theme.colors.gray2}]}>{this.props.data.trainerName}</Text>

                  <Thumbnail circle style={styles.thumbnailStyle} source={{ uri: "https://techcrunch.com/wp-content/uploads/2018/05/gettyimages-953545880.jpg?w=608" }} />
                </View>
                <Text style={styles.descriptionText}>{this.props.data.trainerInfo}</Text>

              </View>

              <View style={styles.normalView}>
                <Text style={[styles.descriptionText, {color: theme.colors.gray2}]}>{texts.texts.about}</Text>
                <Text style={styles.descriptionText}>{this.props.data.occasionDetail}</Text>
              </View>

              <View style={[styles.normalView, { borderBottomWidth: 0, paddingBottom: 2 }]}>
                <Text style={[styles.descriptionText, {color: theme.colors.gray2}]}>{texts.texts.price}</Text>

              </View>

              <View style={{ paddingHorizontal: theme.sizes.padding }}>
                {this.renderFlatlist()}
              </View>

            </View>


          </View>

          <CustomFooter />

        </Content>


      );
    }
    else if (this.props.error ==1){
      console.log('error', this.props.data.error);
    }
  }




  render() {

    return (
      <Container>
        <View style={{ flex: 1 }}>
          {this.renderMainScreen()}
        </View>
      </Container>
    );
  }
}
const mapStateToProps = ({ fetchData }) => {

  console.log('fetchDatafetchData', fetchData);
  return fetchData;

};

export default connect(mapStateToProps, { fetchDataAction })(MainScreen);



const styles = StyleSheet.create({
  bigView: {
    flex: 3,
  },
  normalView: {
    padding: theme.sizes.padding,
    alignItems: 'flex-end',
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 0.5,
  },
  descriptionText: {
    color: theme.colors.primary,  
    fontSize: theme.sizes.body
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: theme.sizes.padding - 4

  },
  headerText: {
    color: theme.colors.gray2,
    fontSize: theme.sizes.header,
    fontWeight: 'bold',
    paddingBottom: theme.sizes.padding - 4
  },
  iconSmallStyle: {
    color: theme.colors.primary,
    paddingLeft: 5,
    fontSize: theme.sizes.iconSize
  },
  flatlistText: {
    flex: 1,
    color: theme.colors.primary,
    paddingBottom: theme.sizes.padding,
    fontSize: theme.sizes.body
  },
  loadingStyle: {
    flex: 1,
    justifyContent: 'center'
  },
  thumbnailStyle:{
     width: theme.sizes.thumbnail , 
     height: theme.sizes.thumbnail, 
     borderRadius: theme.sizes.thumbnail / 2, 
     backgroundColor: 'gray',
  }
})
