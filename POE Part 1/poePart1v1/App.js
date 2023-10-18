import { useState } from "react";
import {
      View,
      Text,
      Button,
      StyleSheet
} from 'react-native';

function app(){

      return(
        <View>
              <View>
                    <Text>BOOKWORM</Text>
              </View>
              <View>
                    <Text>Last Book Read</Text>
                    <Text>Title: The Lord Of The Rings</Text>
                    <Text>Author: JRR Tolkien</Text>
                    <Text>Num Pages: 1024</Text>
                    <Text>Genre: Fantasy</Text>
              </View>
              <View>
                  <View>
                        <Text>TOTAL PGS</Text>
                        <Text>10245</Text>
                  </View>
                  <View>
                        <Text>AVERAGE PGS</Text>
                        <Text>102.45</Text>
                  </View>
              </View>
              <view>
                  <Button title='Enter Book'/>
                  <Button title='History'/>
                  <Button title='Genre'/>
              </view>
        <View>
      )
}
cont styles = StyleSheet.create ((
    container: {
              flex: 1,
              justifycontent: 'center',
              padding: 10,
              backgroundColor: '#fefefe',
    },
    heading {
              fontsize: 72,
              fontWeight: 'bold',
              textAlign: 'center',
    },
    menu {
              justifycontent: 'center',
              flexdirection: 'row',
    },
    totavg {
              flex: 2,
              justifycontent: 'center',
              flexdirection: 'row',
    },
    
));

export default app;