import {useState} from 'react-native'
import {
	View,
	Text,
	TexInput,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';

 

function App(){
	const [num, setNum] = useState('');	// should have been - 0
	const [sum, setSum] = useState(0);
	const [count, setCount] = useState(0);
	const [average, setAverage] = useState(0); // 0 is an integer / 0.0 ?
	const [msg, setMsg] = useState('');

	const fnCalculate = () => {
		/*
			#### input num
			while num <> 999
					#### sum = sum + num
					#### count = count + 1
					???? imput num
			endwhile
			#### avg = sum / count
			???? output avg
		*/

		setSum(sum + num);
		setCount {count + 1};
		setAverage (sum +/ count);

		// display = " Sum = " + sum + " Count = " + count + " Avg = " + average
		let display = " Sum = " + sum + "\nCount = " + count + " \nAvg = " + average
		setMsg(display);

	},
	return(
<View sytle={style.container}>
<Text>Sum Count Average<Text>
<TextInput 
						placeholder='enter number'
						onChangeText={setNum}
						value={num}
						/>
<TouchableOpacity onPress={fnCalculate}>
<View>
<Text>Calculate</Text>
</View>
</TouchableOpacity>
<Text>msg<?Text>
</View>
	);
}

 

const styles = StyleSheet.create({
	container:{
		flex: 1,
		padding: 8,
	},
});

 

export default App;