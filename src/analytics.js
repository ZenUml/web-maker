import { log } from './utils';

/* global ga */

// eslint-disable-next-line max-params
export function trackEvent(category, action, label, value) {
	if (window.DEBUG) {
		log('trackevent', category, action, label, value);
		return;
	}
	if (window.ga) {
		ga('send', 'event', category, action, label, value);
	}
}

// eslint-disable-next-line max-params
export function trackPageView(pageName) {
	if (window.DEBUG) {
		log('trackPageView', pageName);
		return;
	}
	if (window.ga) {
		ga('send', 'pageview', pageName);
	}
}

// if online, load after sometime
if (navigator.onLine && !window.DEBUG) {
	/* eslint-disable */

	// prettier-ignore
	setTimeout(function () {
		(function (i, s, o, g, r, a, m) {
			i['GoogleAnalyticsObject'] = r;
			i[r] = i[r] || function () {
				(i[r].q = i[r].q || []).push(arguments)
			}, i[r].l = 1 * new Date();
			a = s.createElement(o),
				m = s.getElementsByTagName(o)[0];
			a.async = 1;
			a.src = g;
			m.parentNode.insertBefore(a, m)
		})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

		if (location.href.indexOf('chrome-extension://') === -1) {
			ga('create', 'UA-1211588-20');
		} else {
			ga('create', 'UA-1211588-20', {
				'cookieDomain': 'none'
			});
			// required for chrome extension protocol
			ga('set', 'checkProtocolTask', function () { /* nothing */ });
		}
	}, 100);

	/* eslint-enable */
}
