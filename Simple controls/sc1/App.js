import{useState} from 'react';
import{
      View
      Text
      Textinput
      button
      stylesheet
} from 'react-native';

function app(){

        const [text, settext] = useState('');
        const [anothervar, selectanothervar] = useState ('');

        const ontop = () => {
          setanothervar ("This button was clicked") 
        }

        return(
                <view style (styles.container)>
                      <text>heading</text>
                      </view>
                                <textinput 
                                        placeholder='Text'/>
                                <text></text>
                                <button />
                                <text></text>
                      <view>
                  </view>
        );
}

const styles = stylesheet.create



export default app;