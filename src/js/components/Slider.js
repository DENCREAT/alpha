import slick from 'slick-carousel'
import { slidersSettings as settings } from '../settings/sliders.config';

export default class Slider {
	constructor(el) {
		this.el = $(el);
		this.activeCls = 'active';
		this.navItems = this.getNavItems();
		this.container = this.getContainer();

		this.init();
		this.addEvents();
	}

	init() {
		this.container.slick(settings.defaultOptions);
	}

	setActive($items, indx) {
		$items
			.removeClass(this.activeCls)
			.eq(indx)
			.addClass(this.activeCls);
	}

	getNavItems() {
		return $(settings.default.controls.navItems, this.el);
	}

	getContainer() {
		return $(settings.default.container, this.el);
	}

	getControls() {
		return {
			prev: $(settings.default.controls.prev, this.el),
			next: $(settings.default.controls.next, this.el)
		};
	}

	addEvents() {
		const self = this;

		this.navItems.on('click', function() {
			self.container.slick('slickGoTo', $(this).index());
		});

		self.container.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		  self.setActive(self.navItems, nextSlide);
		});
	}
}