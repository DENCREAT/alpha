export default class Popup {
	constructor(el) {
		this.el = $(el);
		this.elCls = 'js-popup';
		this.linkCls = '.js-link-popup';
		this.container = $('.js-popup-container', this.el);
		this.closeBtn = $('.js-popup-close', this.el);
		this.linkToMe = this.getLinkToMe();
		this.showedBodyCls = 'popup-showed';
		this.showedCls = 'showed';

		this.currentTarget = '';

		this.addEvents();
	}

	getLinkToMe() {
		return $(this.linkCls + '[href="#' + this.el[0].id + '"]');
	}

	showPopup(ev) {
		const infoTarget = ev.target.getBoundingClientRect();
		this.currentTarget = ev.target;
		$(this.currentTarget).animate({
			opacity: 0
		}, 70);
		this.container.css({
			left: infoTarget.left,
			top: infoTarget.top,
			width: infoTarget.width,
			maxHeight: infoTarget.height
		}).fadeIn();
		this.el.css({visibility: 'visible'});
		this.container.addClass(this.showedCls);
		$body.addClass(this.showedBodyCls);
	}

	hidePopup() {
		$(this.currentTarget).animate({
			opacity: 1
		}, 260);
		this.container.removeClass(this.showedCls).fadeOut();
		this.el.css({visibility: 'hidden'});
		
		$body.removeClass(this.showedBodyCls);
	}

	isContainer(ev) {
		return !$(ev.target).hasClass(this.elCls) && $(ev.target).closest(`.${this.elCls}`).length;
	}

	addEvents() {

		this.linkToMe.on('click', (e) => {
			this.showPopup(e);
			return false;
		});

		this.el.on('mousedown', (e) => {
			if (!this.isContainer(e)) this.hidePopup();
		});

		this.closeBtn.on('click', () => {
			this.hidePopup();
		});
	}

}