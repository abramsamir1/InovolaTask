import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import { Right, Left, Icon } from 'native-base';
import { theme } from '../constants';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class CustomSwiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    //Liked or not.
    renderStar() {
        if (this.props.data.isLiked === true) {
            return (<Icon type="FontAwesome" name='star' size={theme.sizes.header} style={styles.iconBigStyle} />)
        } else {
            return (<Icon type="FontAwesome" name='star-o' size={theme.sizes.header} style={styles.iconBigStyle} />)
        }
    }


    list = () => {
        if (this.props.data) {
            return this.props.data.img.map(item => {
                console.log('element', item);
                return (
                    <Image key={item.position} source={{ uri: item }} style={{
                        flex: 1,
                        height: null,
                        width: null,
                    }} />
                );
            });
        }
    };

    render() {
        return (
            <View style={{ flex: 1.5 }}>
                <Swiper
                    style={{
                        height: windowHeight * 0.35,
                       
                    }}
                   
                    paginationStyle={{ paddingRight: windowWidth / 1.4 }}
                    dot={<View style={{backgroundColor:theme.colors.gray, width: theme.sizes.dotSize, height: theme.sizes.dotSize,borderRadius: theme.sizes.dotSize/2, margin: 3}} />}
                    activeDot={<View style={{backgroundColor:theme.colors.white, width: theme.sizes.dotSize, height: theme.sizes.dotSize,borderRadius: theme.sizes.dotSize/2, margin: 3}} />}
                   
                >
                    {this.list()}
                </Swiper>
                <View style={styles.viewIcons}>
                    <Left style={styles.leftView}>
                        {this.renderStar()}
                        <Icon type="FontAwesome" name="share-alt" size={theme.sizes.header} style={styles.iconBigStyle} />
                    </Left>
                    <Right>
                        <Icon type="Ionicons" name="ios-arrow-forward" size={theme.sizes.header} style={styles.iconBigStyle} />
                    </Right>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    iconBigStyle: {
        padding: theme.sizes.padding - 4,
        color: theme.colors.white
    },
    viewIcons: {
        flex: 1, 
        flexDirection: 'row', 
        position: 'absolute'
    },
    leftView: {
        flex: 1, 
        flexDirection: 'row' 
    }
})
