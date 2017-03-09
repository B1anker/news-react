import PcHeader from './header';
import PcFooter from './footer';
import '@/scss/pc/index.scss';
export default class PcIndex extends React.Component{
	render() {
		return (
			<div>
				<PcHeader></PcHeader>
				<PcFooter></PcFooter>
			</div>
		);
	}
}
