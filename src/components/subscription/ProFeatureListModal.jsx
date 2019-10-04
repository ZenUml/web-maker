import Modal from '../Modal';
import { SubscriptionAction } from './SubscriptionAction';
import featureToggle from '../../services/feature_toggle';

export function ProFeatureListModal(props) {
	return (
		<Modal show={props.show} closeHandler={props.closeHandler} extraClasses={'feature-list'}>
			<section className={'header'}>
				<h1 className={'price'}>$9.99<sup>[1]</sup>/month</h1>
				<h2>Pro</h2>
			</section>
			<section className={'content'}>
				<ul>
					<li>(Free) Real-time sequence diagram converter</li>
					<li>(Free) Export to PNG and JPEG</li>
					<li>(Free) Hand-tuned themes</li>
					<li>(Free) Up to 10 lines of code per diagram</li>
					<li>(Pro) No limitation on lines of code</li>
				</ul>
			</section>
			<section className={'call-for-action hide'}>
				<button>Back</button>
			</section>
			{ featureToggle.isPaymentEnabled ? (
				<div class="user-subscription-link">
					<SubscriptionAction preActionCallback={props.closeHandler} loginCallback={props.loginHandler} postActionCallback={props.onSubscriptionChange} />
				</div>
				) : null }
			<hr />
			<section className={'notes'}>
				<ol>
					<li>Unsubscribe at any time, no questions asked.</li>
				</ol>
			</section>

		</Modal>
	);
}
