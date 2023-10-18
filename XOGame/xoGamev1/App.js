import {useState} from 'react'
import {
      View,
      Text,
      TextInput,
      Button,
      Image,
      StyleSheet;
} from 'react-native'

function app {}{
    return(
        <View>
          <Text style={styles.welcomeText}>Welcome to Tic-Tac-Toe</Text>
          <Text style={styles.nameQuestion}>Enter Player 1 Name:</Text>
          <Text Input placeholder="Player 1 Name" />
          <Text style={styles.nameQuestion}>Enter Player 2 Name:</Text>
          <Text Input placeholder="Player 2 Name" />
          <Button title="Start Game" />
        </View>
    )
}

const styles = StyleSheet.create({
    welcomeText: {
          color: 'purple',
          fontWeight: 'bold',
          fontSize: 28,
          textAlign: 'center'
    }
    nameQuestion: {
          fontStyle:
    }
    nameEntry: {

    }
    mainPicture: {

    }
})

export default app