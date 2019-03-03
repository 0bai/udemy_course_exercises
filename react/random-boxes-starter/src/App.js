import React, {Component} from 'react';
import './App.css';

class App extends Component {
	static MAX = 32;
	
	constructor(props) {
		super(props);
		const ALL_COLORS_LENGTH = this.props.allColors.length;
		const rndIndex = App.getRandom(ALL_COLORS_LENGTH);
		const colors = this.props.allColors.slice(rndIndex - 32, rndIndex);
		this.state = {colors};
		setInterval(() => {
			const colors = this.state.colors.slice();
			colors[ App.getRandom(App.MAX) ] = this.props.allColors[ App.getRandom(ALL_COLORS_LENGTH) ];
			this.setState({colors});
		}, 300);
	}
	
	static getRandom(num) {
		return Math.floor(Math.random() * num);
	}
	
	render() {
		return (
			<div className="App">
				<BoxGrid colors={this.state.colors}/>
			</div>
		);
	}
}

App.defaultProps = {
	allColors: [ "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond",
		"Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate",
		"Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod",
		"DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange",
		"DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey",
		"DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue",
		"FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod",
		"Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki",
		"Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan",
		"LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon",
		"LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow",
		"Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid",
		"MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise",
		"MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy",
		"OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen",
		"PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue",
		"Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen",
		"SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen",
		"SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke",
		"Yellow", "YellowGreen" ]
};


const BoxGrid = props => {
	const style = {
		margin: '0',
		padding: '0',
		display: 'flex',
		flexWrap: 'wrap',
		width: '100%'
	};
	const boxList = props.colors.map((color, i) => <Box key={i} color={color}/>);
	return (
		<div style={style}>
			{boxList}
		</div>
	);
};

const Box = props => {
	const style = {
		height: '95px',
		width: '25%',
		backgroundColor: `${props.color}`
	};
	return ( <div style={style}></div> );
};


export default App;
