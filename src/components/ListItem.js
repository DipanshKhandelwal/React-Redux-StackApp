import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { selectLibrary } from '../actions';

class ListItem extends Component {
    renderDescription() {

        const { library, expanded } = this.props;
        const { descriptionStyle} = styles;

        if(expanded) {
            return (
                <CardSection>
                    <Text style={descriptionStyle}>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {

        const { titleStyle } = styles;
        const { id, title } = this.props.library;

        return(
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text  style={ titleStyle }>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    },
    descriptionStyle: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
}; 

export default connect(mapStateToProps, { selectLibrary })(ListItem);
