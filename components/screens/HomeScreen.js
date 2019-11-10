import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, FlatList } from 'react-native';
import BookCount from '../BookCount'
import { Ionicons } from '@expo/vector-icons'
import CustomActionButton from '../CustomAction'


export default class HomeScreen extends React.Component {
    state = {
        totalCount: 0,
        readingCount: 0,
        readCount: 0,
        isAddBookVisible: false,
        textinputData: '',
        books: []

    }

    showAddButton = () => {
        this.setState({ isAddBookVisible: true })
    }

    hideAddButton = () => {
        this.setState({ isAddBookVisible: false })
    }

    addBook = (book) => {

        this.setState((state, props) => ({
            books: [...state.books, book],
            readingCount: state.readingCount + 1,
            totalCount: state.totalCount + 1,

        }), () => { console.log(this.state.books); })
    }

    markAsRead = (selectedBook, index) => {
        let newList = this.state.books.filter(book => book !== selectedBook)

        this.setState(prevState => ({
            books: newList,
            readingCount: prevState.readingCount - 1,
            readCount: prevState.readCount + 1
        }))
    }

    renderItem = (item, index) => (
        <View style={{ height: 50, flexDirection: 'row' }}>
            <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 5 }}>
                <Text >{item}</Text>
            </View>

            <CustomActionButton style={{ width: 100, backgroundColor: '#a5deba' }} onPress={() => this.markAsRead(item, index)}>
                <Text style={{ fontWeight: 'bold', color: 'white' }}>Mark as Done</Text>
            </CustomActionButton>

        </View>
    )

    render() {
        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView />
                {/* header */}
                <View style={styles.header}>
                    <Text style={{ fontSize: 24 }}>My Todo List</Text>
                </View>
                {/* body */}
                <View style={{ flex: 1, }}>
                    {this.state.isAddBookVisible && <View style={{ height: 50, flexDirection: 'row' }}>
                        <TextInput
                            onChangeText={(text) => { this.setState({ textinputData: text }) }}
                            style={{ flex: 1, height: 50, backgroundColor: '#ececec', paddingLeft: 5 }}
                            placeholder='Enter Task Name'
                            placeholderTextColor='grey'
                        />

                        <CustomActionButton style={{ backgroundColor: '#a5deba' }} onPress={() => this.addBook(this.state.textinputData)}>
                            <Ionicons name='ios-checkmark' color="white" size={40} />
                        </CustomActionButton>

                        <CustomActionButton onPress={this.hideAddButton}>
                            <Ionicons name='ios-close' color="white" size={40} />
                        </CustomActionButton>

                    </View>}

                    <FlatList
                        data={this.state.books}
                        renderItem={({ item }, index) => this.renderItem(item, index)}
                        keyExtractor={(item, index) => index.toString()}
                        ListEmptyComponent={
                            <View style={styles.ListEmptyComponent}>
                                <Text style={{ fontWeight: 'bold' }}>
                                    Not Reading Any Tasks
              </Text>
                            </View>
                        }
                    />

                    <CustomActionButton position="left" style={styles.showAddButton} onPress={this.showAddButton}>
                        <Text style={{ color: 'white', fontSize: 30 }}>+</Text>
                    </CustomActionButton>
                </View>
                {/* footer */}
                <View style={styles.footer}>
                    <BookCount title='Total' count={this.state.totalCount} />
                    <BookCount title='Doing' count={this.state.readingCount} />
                    <BookCount title='Done' count={this.state.readCount} />
                </View>
                <SafeAreaView />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: { height: 70, borderTopWidth: 0.5, borderTopColor: '#e9e9e9', flexDirection: 'row' },
    showAddButton: { borderRadius: 25, backgroundColor: '#deada5' },
    ListEmptyComponent: { marginTop: 50, alignItems: 'center' },
    header: { height: 70, borderBottomWidth: 0.5, borderBottomColor: '#e9e9e9', alignItems: 'center', justifyContent: 'center' }

});
