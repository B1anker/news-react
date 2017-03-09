import '@/scss/mobile/index.scss';
import MobileHeader from './header';
import MobileFooter from './footer';

export default class MobileIndex extends React.Component{
	render() {
		return (
			<div class="mobile">
				<MobileHeader></MobileHeader>
				<MobileFooter></MobileFooter>
			</div>
		);
	}
}
