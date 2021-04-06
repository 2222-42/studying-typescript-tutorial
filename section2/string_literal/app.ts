export { };

let click: 'click'
click = 'click';
// error TS2322: Type '"dbclick"' is not assignable to type '"click"'.
// click = 'dbclick';

let mouseEvent: 'click' | 'dbclick' | 'mouseup' | 'mousedown';
mouseEvent = 'click';
mouseEvent = 'dbclick';
mouseEvent = 'mouseup'
mouseEvent = 'mousedown';
// Type '"mouseover"' is not assignable to type '"click" | "dbclick" | "mouseup" | "mousedown"'.
// mouseEvent = 'mouseover';

// type alias
type MouseEvent = 'click' | 'dbclick' | 'mouseup' | 'mousedown';
let mouseEvent2: MouseEvent;
mouseEvent2 = 'click';
mouseEvent2 = 'dbclick';
mouseEvent2 = 'mouseup'
mouseEvent2 = 'mousedown';
// Type '"mouseover"' is not assignable to type 'MouseEvent'.
// mouseEvent2 = 'mouseover';