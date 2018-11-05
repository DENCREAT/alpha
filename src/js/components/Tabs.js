export default class Tabs {
	constructor(el) {
		this.el = $(el);
		this.activeCls = 'active';
		this.links = $('.js-tabs-link', this.el);
		this.tabs = $('.js-tabs-container', this.el);

		this.addEvents();
	}

	setActiveTab($link) {
		this.tabs.removeClass(this.activeCls);
		this.links.removeClass(this.activeCls);

		this.tabs.filter($link.attr('href')).addClass('active');
		$link.addClass('active');
	}

	addEvents() {
		this.links.on('click', (e) => {
			this.setActiveTab( $(e.target) );
			return false;
		});
	}
}