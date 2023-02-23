export const styledText = ({
	fsize,
	weight,
	tAlign,
	tStyle,
	color,
	sMobile,
	mMobile,
	lMobile,
	tablet,
	laptop,
	laptopL,
}: TextStyledType): string => {
	return `
		${fsize		? `font-size:		${fsize};`			: ``}
		${weight	? `font-weight:		${weight};`			: ``}
		${tAlign	? `text-align:		${tAlign};`			: ``}
		${tStyle	? `text-transform:	${tStyle};`			: ``}
		${color		? `color:			var(--${color});`	: ``}
	`
}

export const styledElement = ({
	fill,
	m,
	mx,
	my,
	mt,
	mr,
	mb,
	ml,
	p,
	px,
	py,
	pt,
	pr,
	pb,
	pl,
	w,
	h,
	minw,
	minh,
	maxw,
	maxh,
	// sMobile,
	// mMobile,
	// lMobile,
	// tablet,
	// laptop,
	// laptopL,
}: ElementStyledType): string => {
	return `
		${fill				? `flex:			${fill};`: ``}
		${mt || my || m		? `margin-top:		${mt ? mt : my ? my : m};`: ``}
		${mr || mx || m		? `margin-right:	${mr ? mr : mx ? mx : m};`: ``}
		${mb || my || m		? `margin-bottom:	${mb ? mb : my ? my : m};`: ``}
		${ml || mx || m		? `margin-left:		${ml ? ml : mx ? mx : m};`: ``}
		${pt || py || p		? `padding-top:		${pt ? pt : py ? py : p};`: ``}
		${pr || px || p		? `padding-right:	${pr ? pr : px ? px : p};`: ``}
		${pb || py || p		? `padding-bottom:	${pb ? pb : py ? py : p};`: ``}
		${pl || px || p		? `padding-left:	${pl ? pl : px ? px : p};`: ``}
		${w					? `width: 			${w};`	: ``}
		${h					? `height:			${h};` : ``}
		${minw				? `min-width:		${minw};` : ``}
		${minh				? `min-height:		${minh};` : ``}
		${maxw				? `max-width:		${maxw};` : ``}
		${maxh				? `max-height:		${maxh};` : ``}

		@media (max-width: 768px) {
			${fill				? `flex:			${fill};`: ``}
			${mt || my || m		? `margin-top:		${mt ? `calc(${mt} / 2)` : my ? `calc(${my} / 2)` : `calc(${m} / 2)`};`: ``}
			${mr || mx || m		? `margin-right:	${mr ? `calc(${mr} / 2)` : mx ? `calc(${mx} / 2)` : `calc(${m} / 2)`};`: ``}
			${mb || my || m		? `margin-bottom:	${mb ? `calc(${mb} / 2)` : my ? `calc(${my} / 2)` : `calc(${m} / 2)`};`: ``}
			${ml || mx || m		? `margin-left:		${ml ? `calc(${ml} / 2)` : mx ? `calc(${mx} / 2)` : `calc(${m} / 2)`};`: ``}
			${pt || py || p		? `padding-top:		${pt ? `calc(${pt} / 2)` : py ? `calc(${py} / 2)` : `calc(${p} / 2)`};`: ``}
			${pr || px || p		? `padding-right:	${pr ? `calc(${pr} / 2)` : px ? `calc(${px} / 2)` : `calc(${p} / 2)`};`: ``}
			${pb || py || p		? `padding-bottom:	${pb ? `calc(${pb} / 2)` : py ? `calc(${py} / 2)` : `calc(${p} / 2)`};`: ``}
			${pl || px || p		? `padding-left:	${pl ? `calc(${pl} / 2)` : px ? `calc(${px} / 2)` : `calc(${p} / 2)`};`: ``}
			${w					? `width: 			${w};`	: ``}
			${h					? `height:			${h};`	: ``}
			${minw				? `min-width:		${minw};` : ``}
			${minh				? `min-height:		${minh};` : ``}
			${maxw				? `max-width:		${maxw};` : ``}
			${maxh				? `max-height:		${maxh};` : ``}
		}
	`
}

export const styledFlex = ({
	wrap,
	direct,
	vAlign,
	hAlign,
	gap,
	gapX,
	gapY,
	sMobile,
	mMobile,
	lMobile,
	tablet,
	laptop,
	laptopL,
}: FlexStyledType): string => {
	return `
		${wrap			? `flex-wrap:		${wrap};`				: ``}
		${direct		? `flex-direction:	${direct};`				: ``}
		${vAlign		? `align-items:		${vAlign};`				: ``}
		${hAlign		? `justify-content:	${hAlign};`				: ``}
		${gapX || gap	? `column-gap:		${gapX ? gapX : gap};`	: ``}
		${gapY || gap	? `row-gap:			${gapY ? gapY : gap};`	: ``}

		@media (max-width: 768px) {
			${gapX || gap	? `column-gap:		${gapX ? `calc(${gapX} / 2)` : `calc(${gap} / 2)`};`	: ``}
			${gapY || gap	? `row-gap:			${gapY ? `calc(${gapY} / 2)` : `calc(${gap} / 2)`};`	: ``}
		}
	`
}