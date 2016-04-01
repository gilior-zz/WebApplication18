var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var NgGrid = (function () {
    //	Constructor
    function NgGrid(_differs, _ngEl, _renderer, _loader) {
        this._differs = _differs;
        this._ngEl = _ngEl;
        this._renderer = _renderer;
        this._loader = _loader;
        //	Event Emitters
        this.dragStart = new core_1.EventEmitter();
        this.drag = new core_1.EventEmitter();
        this.dragStop = new core_1.EventEmitter();
        this.resizeStart = new core_1.EventEmitter();
        this.resize = new core_1.EventEmitter();
        this.resizeStop = new core_1.EventEmitter();
        //	Public variables
        this.colWidth = 250;
        this.rowHeight = 250;
        this.minCols = 1;
        this.minRows = 1;
        this.marginTop = 10;
        this.marginRight = 10;
        this.marginBottom = 10;
        this.marginLeft = 10;
        this.isDragging = false;
        this.isResizing = false;
        this.autoStyle = true;
        this.resizeEnable = true;
        this.dragEnable = true;
        this.cascade = 'up';
        //	Private variables
        this._items = [];
        this._draggingItem = null;
        this._resizingItem = null;
        this._resizeDirection = null;
        this._itemGrid = { 1: { 1: null } };
        this._maxCols = 0;
        this._maxRows = 0;
        this._minWidth = 100;
        this._minHeight = 100;
        this._setWidth = 250;
        this._setHeight = 250;
        this._posOffset = null;
        this._adding = false;
        this._placeholderRef = null;
        this._fixToGrid = false;
        this._autoResize = false;
        this._config = NgGrid.CONST_DEFAULT_CONFIG;
    }
    Object.defineProperty(NgGrid.prototype, "config", {
        //	[ng-grid] attribute handler
        set: function (v) {
            this._config = v;
            if (this._differ == null && v != null) {
                this._differ = this._differs.find(this._config).create(null);
            }
            this.setConfig(this._config);
        },
        enumerable: true,
        configurable: true
    });
    //	Public methods
    NgGrid.prototype.ngOnInit = function () {
        this._renderer.setElementClass(this._ngEl.nativeElement, 'grid', true);
        if (this.autoStyle)
            this._renderer.setElementStyle(this._ngEl.nativeElement, 'position', 'relative');
        this.setConfig(this._config);
    };
    NgGrid.prototype.setConfig = function (config) {
        var maxColRowChanged = false;
        for (var x in config) {
            var val = config[x];
            switch (x) {
                case 'margins':
                    this.setMargins(val);
                    break;
                case 'col_width':
                    this.colWidth = parseInt(val);
                    break;
                case 'row_height':
                    this.rowHeight = parseInt(val);
                    break;
                case 'auto_style':
                    this.autoStyle = val ? true : false;
                    break;
                case 'auto_resize':
                    this._autoResize = val ? true : false;
                    break;
                case 'draggable':
                    this.dragEnable = val ? true : false;
                    break;
                case 'resizable':
                    this.resizeEnable = val ? true : false;
                    break;
                case 'max_rows':
                    maxColRowChanged = maxColRowChanged || this._maxRows != parseInt(val);
                    this._maxRows = parseInt(val);
                    break;
                case 'max_cols':
                    maxColRowChanged = maxColRowChanged || this._maxCols != parseInt(val);
                    this._maxCols = parseInt(val);
                    break;
                case 'min_rows':
                    this.minRows = Math.max(parseInt(val), 1);
                    break;
                case 'min_cols':
                    this.minCols = Math.max(parseInt(val), 1);
                    break;
                case 'min_height':
                    this._minHeight = parseInt(val);
                    break;
                case 'min_width':
                    this._minWidth = parseInt(val);
                    break;
                case 'cascade':
                    if (this.cascade != val) {
                        this.cascade = val;
                        this._cascadeGrid();
                    }
                    break;
                case 'fix_to_grid':
                    this._fixToGrid = val ? true : false;
                    break;
            }
        }
        if (maxColRowChanged) {
            if (this._maxCols > 0 && this._maxRows > 0) {
                switch (this.cascade) {
                    case "left":
                    case "right":
                        this._maxCols = 0;
                        break;
                    case "up":
                    case "down":
                    default:
                        this._maxRows = 0;
                        break;
                }
            }
            for (var x in this._items) {
                var pos = this._items[x].getGridPosition();
                var dims = this._items[x].getSize();
                this._removeFromGrid(this._items[x]);
                if (this._hasGridCollision(pos, dims) || !this._isWithinBounds(pos, dims)) {
                    var newPosition = this._fixGridPosition(pos, dims);
                    this._items[x].setGridPosition(newPosition.col, newPosition.row);
                }
                this._addToGrid(this._items[x]);
            }
            this._cascadeGrid();
        }
        if (this._autoResize && this._maxCols > 0) {
            var maxWidth = this._ngEl.nativeElement.getBoundingClientRect().width;
            var colWidth = Math.floor(maxWidth / this._maxCols);
            colWidth -= (this.marginLeft + this.marginRight);
            if (colWidth > 0)
                this.colWidth = colWidth;
        }
        else if (this._autoResize && this._maxRows > 0) {
            var maxHeight = window.innerHeight;
            var rowHeight = Math.floor(maxHeight / this._maxRows);
            rowHeight -= (this.marginTop + this.marginBottom);
            if (rowHeight > 0)
                this.rowHeight = rowHeight;
        }
        var maxWidth = this._maxCols * this.colWidth;
        var maxHeight = this._maxRows * this.rowHeight;
        if (maxWidth > 0 && this._minWidth > maxWidth)
            this._minWidth = 0.75 * this.colWidth;
        if (maxHeight > 0 && this._minHeight > maxHeight)
            this._minHeight = 0.75 * this.rowHeight;
        if (this._minWidth > this.colWidth)
            this.minCols = Math.max(this.minCols, Math.ceil(this._minWidth / this.colWidth));
        if (this._minHeight > this.rowHeight)
            this.minRows = Math.max(this.minRows, Math.ceil(this._minHeight / this.rowHeight));
        if (this._maxCols > 0 && this.minCols > this._maxCols)
            this.minCols = 1;
        if (this._maxRows > 0 && this.minRows > this._maxRows)
            this.minRows = 1;
        for (var x in this._items) {
            this._removeFromGrid(this._items[x]);
            this._items[x].recalculateSelf();
            this._addToGrid(this._items[x]);
        }
        this._cascadeGrid();
        this._updateSize();
    };
    NgGrid.prototype.getItemPosition = function (index) {
        return this._items[index].getGridPosition();
    };
    NgGrid.prototype.getItemSize = function (index) {
        return this._items[index].getSize();
    };
    NgGrid.prototype.ngDoCheck = function () {
        if (this._differ != null) {
            var changes = this._differ.diff(this._config);
            if (changes != null) {
                this._applyChanges(changes);
                return true;
            }
        }
        return false;
    };
    NgGrid.prototype.setMargins = function (margins) {
        this.marginTop = parseInt(margins[0]);
        this.marginRight = margins.length >= 2 ? parseInt(margins[1]) : this.marginTop;
        this.marginBottom = margins.length >= 3 ? parseInt(margins[2]) : this.marginTop;
        this.marginLeft = margins.length >= 4 ? parseInt(margins[3]) : this.marginRight;
    };
    NgGrid.prototype.enableDrag = function () {
        this.dragEnable = true;
    };
    NgGrid.prototype.disableDrag = function () {
        this.dragEnable = false;
    };
    NgGrid.prototype.enableResize = function () {
        this.resizeEnable = true;
    };
    NgGrid.prototype.disableResize = function () {
        this.resizeEnable = false;
    };
    NgGrid.prototype.addItem = function (ngItem) {
        var newPos = this._fixGridPosition(ngItem.getGridPosition(), ngItem.getSize());
        ngItem.setGridPosition(newPos.col, newPos.row);
        this._items.push(ngItem);
        this._addToGrid(ngItem);
        ngItem.recalculateSelf();
    };
    NgGrid.prototype.removeItem = function (ngItem) {
        this._removeFromGrid(ngItem);
        for (var x in this._items)
            if (this._items[x] == ngItem)
                this._items.splice(x, 1);
        // Update position of all items
        this._cascadeGrid();
        this._updateSize();
        this._items.forEach(function (item) { return item.recalculateSelf(); });
    };
    //	Private methods
    NgGrid.prototype._onResize = function (e) {
        if (this._autoResize && this._maxCols > 0) {
            var maxWidth = this._ngEl.nativeElement.getBoundingClientRect().width;
            var colWidth = Math.floor(maxWidth / this._maxCols);
            colWidth -= (this.marginLeft + this.marginRight);
            this.colWidth = colWidth;
        }
        else if (this._autoResize && this._maxRows > 0) {
            var maxHeight = window.innerHeight;
            var rowHeight = Math.floor(maxHeight / this._maxRows);
            rowHeight -= (this.marginTop + this.marginBottom);
            this.rowHeight = rowHeight;
        }
        for (var x in this._items) {
            this._items[x].recalculateSelf();
        }
        this._updateSize();
    };
    NgGrid.prototype._applyChanges = function (changes) {
        var _this = this;
        changes.forEachAddedItem(function (record) { _this._config[record.key] = record.currentValue; });
        changes.forEachChangedItem(function (record) { _this._config[record.key] = record.currentValue; });
        changes.forEachRemovedItem(function (record) { delete _this._config[record.key]; });
        this.setConfig(this._config);
    };
    NgGrid.prototype._onMouseDown = function (e) {
        var mousePos = this._getMousePosition(e);
        var item = this._getItemFromPosition(mousePos);
        if (item != null) {
            if (this.resizeEnable && item.canResize(e) != null) {
                this._resizeStart(e);
                return false;
            }
            else if (this.dragEnable && item.canDrag(e)) {
                this._dragStart(e);
                return false;
            }
        }
        return true;
    };
    NgGrid.prototype._resizeStart = function (e) {
        if (this.resizeEnable) {
            var mousePos = this._getMousePosition(e);
            var item = this._getItemFromPosition(mousePos);
            item.startMoving();
            this._resizingItem = item;
            this._resizeDirection = item.canResize(e);
            this._removeFromGrid(item);
            this._createPlaceholder(item.getGridPosition(), item.getSize());
            this.isResizing = true;
            this.resizeStart.emit(item);
            item.resizeStart.emit(item.getEventOutput());
        }
    };
    NgGrid.prototype._dragStart = function (e) {
        if (this.dragEnable) {
            var mousePos = this._getMousePosition(e);
            var item = this._getItemFromPosition(mousePos);
            var itemPos = item.getPosition();
            var pOffset = { 'left': (mousePos.left - itemPos.left), 'top': (mousePos.top - itemPos.top) };
            item.startMoving();
            this._draggingItem = item;
            this._posOffset = pOffset;
            this._removeFromGrid(item);
            this._createPlaceholder(item.getGridPosition(), item.getSize());
            this.isDragging = true;
            this.dragStart.emit(item);
            item.dragStart.emit(item.getEventOutput());
        }
    };
    NgGrid.prototype._onMouseMove = function (e) {
        if (e.buttons == 0 && this.isDragging) {
            this._dragStop(e);
        }
        else if (e.buttons == 0 && this.isResizing) {
            this._resizeStop(e);
        }
        else if (this.isDragging) {
            this._drag(e);
        }
        else if (this.isResizing) {
            this._resize(e);
        }
        else {
            var mousePos = this._getMousePosition(e);
            var item = this._getItemFromPosition(mousePos);
            if (item) {
                item.onMouseMove(e);
            }
        }
    };
    NgGrid.prototype._drag = function (e) {
        if (this.isDragging) {
            var mousePos = this._getMousePosition(e);
            var newL = (mousePos.left - this._posOffset.left);
            var newT = (mousePos.top - this._posOffset.top);
            var itemPos = this._draggingItem.getGridPosition();
            var gridPos = this._calculateGridPosition(newL, newT);
            var dims = this._draggingItem.getSize();
            if (!this._isWithinBoundsX(gridPos, dims))
                gridPos.col = this._maxCols - (dims.x - 1);
            if (!this._isWithinBoundsY(gridPos, dims))
                gridPos.row = this._maxRows - (dims.y - 1);
            if (gridPos.col != itemPos.col || gridPos.row != itemPos.row) {
                this._draggingItem.setGridPosition(gridPos.col, gridPos.row);
                this._placeholderRef.instance.setGridPosition(gridPos.col, gridPos.row);
                if (['up', 'down', 'left', 'right'].indexOf(this.cascade) >= 0) {
                    this._fixGridCollisions(gridPos, dims);
                    this._cascadeGrid(gridPos, dims);
                }
            }
            if (!this._fixToGrid) {
                this._draggingItem.setPosition(newL, newT);
            }
            this.drag.emit(this._draggingItem);
            this._draggingItem.drag.emit(this._draggingItem.getEventOutput());
        }
    };
    NgGrid.prototype._resize = function (e) {
        if (this.isResizing) {
            var mousePos = this._getMousePosition(e);
            var itemPos = this._resizingItem.getPosition();
            var itemDims = this._resizingItem.getDimensions();
            var newW = this._resizeDirection == 'height' ? itemDims.width : (mousePos.left - itemPos.left + 10);
            var newH = this._resizeDirection == 'width' ? itemDims.height : (mousePos.top - itemPos.top + 10);
            if (newW < this._minWidth)
                newW = this._minWidth;
            if (newH < this._minHeight)
                newH = this._minHeight;
            var calcSize = this._calculateGridSize(newW, newH);
            var itemSize = this._resizingItem.getSize();
            var iGridPos = this._resizingItem.getGridPosition();
            if (!this._isWithinBoundsX(iGridPos, calcSize))
                calcSize.x = (this._maxCols - iGridPos.col) + 1;
            if (!this._isWithinBoundsY(iGridPos, calcSize))
                calcSize.y = (this._maxRows - iGridPos.row) + 1;
            if (calcSize.x != itemSize.x || calcSize.y != itemSize.y) {
                this._resizingItem.setSize(calcSize.x, calcSize.y);
                this._placeholderRef.instance.setSize(calcSize.x, calcSize.y);
                if (['up', 'down', 'left', 'right'].indexOf(this.cascade) >= 0) {
                    this._fixGridCollisions(iGridPos, calcSize);
                    this._cascadeGrid(iGridPos, calcSize);
                }
            }
            if (!this._fixToGrid)
                this._resizingItem.setDimensions(newW, newH);
            var bigGrid = this._maxGridSize(itemPos.left + newW + (2 * e.movementX), itemPos.top + newH + (2 * e.movementY));
            if (this._resizeDirection == 'height')
                bigGrid.x = iGridPos.col + itemSize.x;
            if (this._resizeDirection == 'width')
                bigGrid.y = iGridPos.row + itemSize.y;
            this.resize.emit(this._resizingItem);
            this._resizingItem.resize.emit(this._resizingItem.getEventOutput());
        }
    };
    NgGrid.prototype._onMouseUp = function (e) {
        if (this.isDragging) {
            this._dragStop(e);
            return false;
        }
        else if (this.isResizing) {
            this._resizeStop(e);
            return false;
        }
        return true;
    };
    NgGrid.prototype._dragStop = function (e) {
        if (this.isDragging) {
            this.isDragging = false;
            var itemPos = this._draggingItem.getGridPosition();
            this._draggingItem.setGridPosition(itemPos.col, itemPos.row);
            this._addToGrid(this._draggingItem);
            this._cascadeGrid();
            this._draggingItem.stopMoving();
            this._draggingItem.dragStop.emit(this._draggingItem.getEventOutput());
            this.dragStop.emit(this._draggingItem);
            this._draggingItem = null;
            this._posOffset = null;
            this._placeholderRef.dispose();
        }
    };
    NgGrid.prototype._resizeStop = function (e) {
        if (this.isResizing) {
            this.isResizing = false;
            var itemDims = this._resizingItem.getSize();
            this._resizingItem.setSize(itemDims.x, itemDims.y);
            this._addToGrid(this._resizingItem);
            this._cascadeGrid();
            this._resizingItem.stopMoving();
            this._resizingItem.resizeStop.emit(this._resizingItem.getEventOutput());
            this.resizeStop.emit(this._resizingItem);
            this._resizingItem = null;
            this._resizeDirection = null;
            this._placeholderRef.dispose();
        }
    };
    NgGrid.prototype._maxGridSize = function (w, h) {
        var sizex = Math.ceil(w / (this.colWidth + this.marginLeft + this.marginRight));
        var sizey = Math.ceil(h / (this.rowHeight + this.marginTop + this.marginBottom));
        return { 'x': sizex, 'y': sizey };
    };
    NgGrid.prototype._calculateGridSize = function (width, height) {
        width += this.marginLeft + this.marginRight;
        height += this.marginTop + this.marginBottom;
        var sizex = Math.max(this.minCols, Math.round(width / (this.colWidth + this.marginLeft + this.marginRight)));
        var sizey = Math.max(this.minRows, Math.round(height / (this.rowHeight + this.marginTop + this.marginBottom)));
        if (!this._isWithinBoundsX({ col: 1, row: 1 }, { x: sizex, y: sizey }))
            sizex = this._maxCols;
        if (!this._isWithinBoundsY({ col: 1, row: 1 }, { x: sizex, y: sizey }))
            sizey = this._maxRows;
        return { 'x': sizex, 'y': sizey };
    };
    NgGrid.prototype._calculateGridPosition = function (left, top) {
        var col = Math.max(1, Math.round(left / (this.colWidth + this.marginLeft + this.marginRight)) + 1);
        var row = Math.max(1, Math.round(top / (this.rowHeight + this.marginTop + this.marginBottom)) + 1);
        if (!this._isWithinBoundsX({ col: col, row: row }, { x: 1, y: 1 }))
            col = this._maxCols;
        if (!this._isWithinBoundsY({ col: col, row: row }, { x: 1, y: 1 }))
            row = this._maxRows;
        return { 'col': col, 'row': row };
    };
    NgGrid.prototype._hasGridCollision = function (pos, dims) {
        var positions = this._getCollisions(pos, dims);
        if (positions == null || positions.length == 0)
            return false;
        return positions.some(function (v) {
            return !(v === null);
        });
    };
    NgGrid.prototype._getCollisions = function (pos, dims) {
        var returns = [];
        for (var j = 0; j < dims.y; j++)
            if (this._itemGrid[pos.row + j] != null)
                for (var i = 0; i < dims.x; i++)
                    if (this._itemGrid[pos.row + j][pos.col + i] != null)
                        returns.push(this._itemGrid[pos.row + j][pos.col + i]);
        return returns;
    };
    NgGrid.prototype._fixGridCollisions = function (pos, dims) {
        while (this._hasGridCollision(pos, dims)) {
            var collisions = this._getCollisions(pos, dims);
            var me = this;
            this._removeFromGrid(collisions[0]);
            var itemPos = collisions[0].getGridPosition();
            var itemDims = collisions[0].getSize();
            switch (this.cascade) {
                case "up":
                case "down":
                default:
                    if (!this._isWithinBoundsY(itemPos, itemDims)) {
                        itemPos.col++;
                    }
                    else {
                        itemPos.row++;
                    }
                    collisions[0].setGridPosition(itemPos.col, itemPos.row);
                    break;
                case "left":
                case "right":
                    if (!this._isWithinBoundsX(itemPos, itemDims)) {
                        itemPos.row++;
                    }
                    else {
                        itemPos.col++;
                    }
                    collisions[0].setGridPosition(itemPos.col, itemPos.row);
                    break;
            }
            this._fixGridCollisions(itemPos, itemDims);
            this._addToGrid(collisions[0]);
        }
    };
    NgGrid.prototype._cascadeGrid = function (pos, dims) {
        if (pos && !dims)
            throw new Error("Cannot cascade with only position and not dimensions");
        switch (this.cascade) {
            case "up":
            case "down":
                var lowRow = [0];
                for (var i = 1; i <= this._getMaxCol(); i++)
                    lowRow[i] = 1;
                for (var r = 1; r <= this._getMaxRow(); r++) {
                    if (this._itemGrid[r] == undefined)
                        continue;
                    for (var c = 1; c <= this._getMaxCol(); c++) {
                        if (this._itemGrid[r] == undefined)
                            break;
                        if (r < lowRow[c])
                            continue;
                        if (this._itemGrid[r][c] != null) {
                            var item = this._itemGrid[r][c];
                            if (item.isFixed)
                                continue;
                            var itemDims = item.getSize();
                            var itemPos = item.getGridPosition();
                            if (itemPos.col != c || itemPos.row != r)
                                continue; //	If this is not the element's start
                            var lowest = lowRow[c];
                            for (var i = 1; i < itemDims.x; i++) {
                                lowest = Math.max(lowRow[(c + i)], lowest);
                            }
                            if (pos && (c + itemDims.x) > pos.col && c < (pos.col + dims.x)) {
                                if ((r >= pos.row && r < (pos.row + dims.y)) ||
                                    ((itemDims.y > (pos.row - lowest)) &&
                                        (r >= (pos.row + dims.y) && lowest < (pos.row + dims.y)))) {
                                    lowest = Math.max(lowest, pos.row + dims.y); //	Set the lowest row to be below it
                                }
                            }
                            if (lowest != itemPos.row) {
                                this._removeFromGrid(item);
                                item.setGridPosition(c, lowest);
                                this._addToGrid(item);
                            }
                            for (var i = 0; i < itemDims.x; i++) {
                                lowRow[c + i] = lowest + itemDims.y; //	Update the lowest row to be below the item
                            }
                        }
                    }
                }
                break;
            case "left":
            case "right":
                var lowCol = [0];
                for (var i = 1; i <= this._getMaxRow(); i++)
                    lowCol[i] = 1;
                for (var r = 1; r <= this._getMaxRow(); r++) {
                    if (this._itemGrid[r] == undefined)
                        continue;
                    for (var c = 1; c <= this._getMaxCol(); c++) {
                        if (this._itemGrid[r] == undefined)
                            break;
                        if (c < lowCol[r])
                            continue;
                        if (this._itemGrid[r][c] != null) {
                            var item = this._itemGrid[r][c];
                            var itemDims = item.getSize();
                            var itemPos = item.getGridPosition();
                            if (itemPos.col != c || itemPos.row != r)
                                continue; //	If this is not the element's start
                            var lowest = lowCol[r];
                            for (var i = 1; i < itemDims.y; i++) {
                                lowest = Math.max(lowCol[(r + i)], lowest);
                            }
                            if (pos && (r + itemDims.y) > pos.row && r < (pos.row + dims.y)) {
                                if ((c >= pos.col && c < (pos.col + dims.x)) ||
                                    ((itemDims.x > (pos.col - lowest)) &&
                                        (c >= (pos.col + dims.x) && lowest < (pos.col + dims.x)))) {
                                    lowest = Math.max(lowest, pos.col + dims.x); //	Set the lowest col to be below it
                                }
                            }
                            if (lowest != itemPos.col) {
                                this._removeFromGrid(item);
                                item.setGridPosition(lowest, r);
                                this._addToGrid(item);
                            }
                            for (var i = 0; i < itemDims.y; i++) {
                                lowCol[r + i] = lowest + itemDims.x; //	Update the lowest col to be below the item
                            }
                        }
                    }
                }
                break;
            default:
                break;
        }
    };
    NgGrid.prototype._fixGridPosition = function (pos, dims) {
        while (this._hasGridCollision(pos, dims) || !this._isWithinBounds(pos, dims)) {
            if (this._hasGridCollision(pos, dims)) {
                switch (this.cascade) {
                    case 'up':
                    case 'down':
                        pos.row++;
                        break;
                    case 'left':
                    case 'right':
                        pos.col++;
                        break;
                    default:
                        break;
                }
            }
            if (!this._isWithinBoundsY(pos, dims)) {
                pos.col++;
                pos.row = 1;
            }
            if (!this._isWithinBoundsX(pos, dims)) {
                pos.row++;
                pos.col = 1;
            }
        }
        return pos;
    };
    NgGrid.prototype._isWithinBoundsX = function (pos, dims) {
        return (this._maxCols == 0 || (pos.col + dims.x - 1) <= this._maxCols);
    };
    NgGrid.prototype._isWithinBoundsY = function (pos, dims) {
        return (this._maxRows == 0 || (pos.row + dims.y - 1) <= this._maxRows);
    };
    NgGrid.prototype._isWithinBounds = function (pos, dims) {
        return this._isWithinBoundsX(pos, dims) && this._isWithinBoundsY(pos, dims);
    };
    NgGrid.prototype._addToGrid = function (item) {
        var pos = item.getGridPosition();
        var dims = item.getSize();
        if (this._hasGridCollision(pos, dims)) {
            this._fixGridCollisions(pos, dims);
            pos = item.getGridPosition();
        }
        for (var j = 0; j < dims.y; j++) {
            if (this._itemGrid[pos.row + j] == null)
                this._itemGrid[pos.row + j] = {};
            for (var i = 0; i < dims.x; i++) {
                this._itemGrid[pos.row + j][pos.col + i] = item;
                this._updateSize(pos.col + dims.x - 1, pos.row + dims.y - 1);
            }
        }
    };
    NgGrid.prototype._removeFromGrid = function (item) {
        for (var y in this._itemGrid)
            for (var x in this._itemGrid[y])
                if (this._itemGrid[y][x] == item)
                    this._itemGrid[y][x] = null;
    };
    NgGrid.prototype._updateSize = function (col, row) {
        col = (col == undefined) ? 0 : col;
        row = (row == undefined) ? 0 : row;
        this._filterGrid();
        var maxRow = Math.max(this._getMaxRow(), row);
        var maxCol = Math.max(this._getMaxCol(), col);
        this._renderer.setElementStyle(this._ngEl.nativeElement, 'width', "100%"); //(maxCol * (this.colWidth + this.marginLeft + this.marginRight))+"px");
        this._renderer.setElementStyle(this._ngEl.nativeElement, 'height', (maxRow * (this.rowHeight + this.marginTop + this.marginBottom)) + "px");
    };
    NgGrid.prototype._filterGrid = function () {
        var curMaxCol = this._getMaxCol();
        var curMaxRow = this._getMaxRow();
        var maxCol = 0;
        var maxRow = 0;
        for (var r = 1; r <= curMaxRow; r++) {
            if (this._itemGrid[r] == undefined)
                continue;
            for (var c = 1; c <= curMaxCol; c++) {
                if (this._itemGrid[r][c] != null) {
                    maxCol = Math.max(maxCol, c);
                    maxRow = Math.max(maxRow, r);
                }
            }
        }
        if (curMaxRow != maxRow)
            for (var r = maxRow + 1; r <= curMaxRow; r++)
                if (this._itemGrid[r] !== undefined)
                    delete this._itemGrid[r];
        if (curMaxCol != maxCol)
            for (var r = 1; r <= maxRow; r++) {
                if (this._itemGrid[r] == undefined)
                    continue;
                for (var c = maxCol + 1; c <= curMaxCol; c++)
                    if (this._itemGrid[r][c] !== undefined)
                        delete this._itemGrid[r][c];
            }
    };
    NgGrid.prototype._getMaxRow = function () {
        return Math.max.apply(null, Object.keys(this._itemGrid));
    };
    NgGrid.prototype._getMaxCol = function () {
        var me = this;
        var maxes = [0];
        Object.keys(me._itemGrid).map(function (v) { maxes.push(Math.max.apply(null, Object.keys(me._itemGrid[v]))); });
        return Math.max.apply(null, maxes);
    };
    NgGrid.prototype._getMousePosition = function (e) {
        if ((window.TouchEvent && e instanceof TouchEvent) || (e.touches || e.changedTouches)) {
            e = e.touches.length > 0 ? e.touches[0] : e.changedTouches[0];
        }
        var refPos = this._ngEl.nativeElement.getBoundingClientRect();
        var left = e.clientX - refPos.left;
        var top = e.clientY - refPos.top;
        if (this.cascade == "down")
            top = refPos.top + refPos.height - e.clientY;
        if (this.cascade == "right")
            left = refPos.left + refPos.width - e.clientX;
        return {
            left: left,
            top: top
        };
    };
    NgGrid.prototype._getAbsoluteMousePosition = function (e) {
        if ((window.TouchEvent && e instanceof TouchEvent) || (e.touches || e.changedTouches)) {
            e = e.touches.length > 0 ? e.touches[0] : e.changedTouches[0];
        }
        return {
            left: e.clientX,
            top: e.clientY
        };
    };
    NgGrid.prototype._getItemFromPosition = function (position) {
        for (var x in this._items) {
            var size = this._items[x].getDimensions();
            var pos = this._items[x].getPosition();
            if (position.left > (pos.left + this.marginLeft) && position.left < (pos.left + this.marginLeft + size.width) &&
                position.top > (pos.top + this.marginTop) && position.top < (pos.top + this.marginTop + size.height)) {
                return this._items[x];
            }
        }
        return null;
    };
    NgGrid.prototype._createPlaceholder = function (pos, dims) {
        var me = this;
        this._loader.loadNextToLocation(NgGridPlaceholder, this._ngEl.internalElement.parentView.appElements[this._ngEl.internalElement.proto.index + 1].ref).then(function (componentRef) {
            me._placeholderRef = componentRef;
            var placeholder = componentRef.instance;
            // me._placeholder.setGrid(me);
            placeholder.setGridPosition(pos.col, pos.row);
            placeholder.setSize(dims.x, dims.y);
        });
    };
    //	Default config
    NgGrid.CONST_DEFAULT_CONFIG = {
        'margins': [10],
        'draggable': true,
        'resizable': true,
        'max_cols': 0,
        'max_rows': 0,
        'col_width': 250,
        'row_height': 250,
        'cascade': 'up',
        'min_width': 100,
        'min_height': 100,
        'fix_to_grid': false,
        'auto_style': true,
        'auto_resize': false
    };
    NgGrid = __decorate([
        core_1.Directive({
            selector: '[ngGrid]',
            inputs: ['config: ngGrid'],
            host: {
                '(mousedown)': '_onMouseDown($event)',
                '(mousemove)': '_onMouseMove($event)',
                '(mouseup)': '_onMouseUp($event)',
                '(touchstart)': '_onMouseDown($event)',
                '(touchmove)': '_onMouseMove($event)',
                '(touchend)': '_onMouseUp($event)',
                '(window:resize)': '_onResize($event)',
                '(document:mousemove)': '_onMouseMove($event)',
                '(document:mouseup)': '_onMouseUp($event)'
            },
            outputs: ['dragStart', 'drag', 'dragStop', 'resizeStart', 'resize', 'resizeStop']
        })
    ], NgGrid);
    return NgGrid;
})();
exports.NgGrid = NgGrid;
var NgGridItem = (function () {
    //	Constructor
    function NgGridItem(_ngEl, _renderer, _ngGrid) {
        this._ngEl = _ngEl;
        this._renderer = _renderer;
        this._ngGrid = _ngGrid;
        //	Event Emitters
        this.itemChange = new core_1.EventEmitter();
        this.dragStart = new core_1.EventEmitter();
        this.drag = new core_1.EventEmitter();
        this.dragStop = new core_1.EventEmitter();
        this.resizeStart = new core_1.EventEmitter();
        this.resize = new core_1.EventEmitter();
        this.resizeStop = new core_1.EventEmitter();
        this.gridPosition = { 'col': 1, 'row': 1 };
        this.gridSize = { 'x': 1, 'y': 1 };
        this.isFixed = false;
        this.isDraggable = true;
        this.isResizable = true;
        //	Private variables
        this._col = 1;
        this._row = 1;
        this._sizex = 1;
        this._sizey = 1;
        this._config = NgGridItem.CONST_DEFAULT_CONFIG;
        this._added = false;
    }
    Object.defineProperty(NgGridItem.prototype, "config", {
        //	[ng-grid-item] handler
        set: function (v) {
            var defaults = NgGridItem.CONST_DEFAULT_CONFIG;
            for (var x in defaults)
                if (v[x] == null)
                    v[x] = defaults[x];
            this.setConfig(v);
            if (!this._added) {
                this._added = true;
                this._ngGrid.addItem(this);
            }
            this._recalculateDimensions();
            this._recalculatePosition();
        },
        enumerable: true,
        configurable: true
    });
    NgGridItem.prototype.ngOnInit = function () {
        this._renderer.setElementClass(this._ngEl.nativeElement, 'grid-item', true);
        if (this._ngGrid.autoStyle)
            this._renderer.setElementStyle(this._ngEl.nativeElement, 'position', 'absolute');
        this._recalculateDimensions();
        this._recalculatePosition();
        if (!this._added) {
            this._added = true;
            this._ngGrid.addItem(this);
        }
    };
    //	Public methods
    NgGridItem.prototype.canDrag = function (e) {
        if (!this.isDraggable)
            return false;
        if (this._dragHandle) {
            var parent = e.target.parentElement;
            return parent.querySelector(this._dragHandle) == e.target;
        }
        return true;
    };
    NgGridItem.prototype.canResize = function (e) {
        if (!this.isResizable)
            return null;
        if (this._resizeHandle) {
            var parent = e.target.parentElement;
            return parent.querySelector(this._resizeHandle) == e.target ? 'both' : null;
        }
        var mousePos = this._getMousePosition(e);
        if (mousePos.left < this._elemWidth && mousePos.left > this._elemWidth - this._borderSize
            && mousePos.top < this._elemHeight && mousePos.top > this._elemHeight - this._borderSize) {
            return 'both';
        }
        else if (mousePos.left < this._elemWidth && mousePos.left > this._elemWidth - this._borderSize) {
            return 'width';
        }
        else if (mousePos.top < this._elemHeight && mousePos.top > this._elemHeight - this._borderSize) {
            return 'height';
        }
        return null;
    };
    NgGridItem.prototype.onMouseMove = function (e) {
        if (this._ngGrid.autoStyle) {
            if (this._ngGrid.dragEnable && this.canDrag(e)) {
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'cursor', 'move');
            }
            else if (this._ngGrid.resizeEnable && !this._resizeHandle && this.isResizable) {
                var mousePos = this._getMousePosition(e);
                if (mousePos.left < this._elemWidth && mousePos.left > this._elemWidth - this._borderSize
                    && mousePos.top < this._elemHeight && mousePos.top > this._elemHeight - this._borderSize) {
                    this._renderer.setElementStyle(this._ngEl.nativeElement, 'cursor', 'nwse-resize');
                }
                else if (mousePos.left < this._elemWidth && mousePos.left > this._elemWidth - this._borderSize) {
                    this._renderer.setElementStyle(this._ngEl.nativeElement, 'cursor', 'ew-resize');
                }
                else if (mousePos.top < this._elemHeight && mousePos.top > this._elemHeight - this._borderSize) {
                    this._renderer.setElementStyle(this._ngEl.nativeElement, 'cursor', 'ns-resize');
                }
                else {
                    this._renderer.setElementStyle(this._ngEl.nativeElement, 'cursor', 'default');
                }
            }
            else if (this._ngGrid.resizeEnable && this.canResize(e)) {
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'cursor', 'nwse-resize');
            }
            else {
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'cursor', 'default');
            }
        }
    };
    NgGridItem.prototype.ngOnDestroy = function () {
        if (this._added)
            this._ngGrid.removeItem(this);
    };
    //	Getters
    NgGridItem.prototype.getElement = function () {
        return this._ngEl;
    };
    NgGridItem.prototype.getDragHandle = function () {
        return this._dragHandle;
    };
    NgGridItem.prototype.getResizeHandle = function () {
        return this._resizeHandle;
    };
    NgGridItem.prototype.getDimensions = function () {
        return { 'width': this._elemWidth, 'height': this._elemHeight };
    };
    NgGridItem.prototype.getSize = function () {
        return { 'x': this._sizex, 'y': this._sizey };
    };
    NgGridItem.prototype.getPosition = function () {
        return { 'left': this._elemLeft, 'top': this._elemTop };
    };
    NgGridItem.prototype.getGridPosition = function () {
        return { 'col': this._col, 'row': this._row };
    };
    //	Setters
    NgGridItem.prototype.setConfig = function (config) {
        this._col = config.col;
        this._row = config.row;
        this._sizex = config.sizex;
        this._sizey = config.sizey;
        this._dragHandle = config.dragHandle;
        this._resizeHandle = config.resizeHandle;
        this._borderSize = config.borderSize;
        this.isDraggable = config.draggable ? true : false;
        this.isResizable = config.resizable ? true : false;
        this.isFixed = config.fixed ? true : false;
        this._recalculatePosition();
        this._recalculateDimensions();
    };
    NgGridItem.prototype.setSize = function (x, y) {
        this._sizex = x;
        this._sizey = y;
        this.gridSize = { 'x': this._sizex, 'y': this._sizey };
        this._recalculateDimensions();
        this.itemChange.emit(this.getEventOutput());
    };
    NgGridItem.prototype.setGridPosition = function (col, row) {
        this._col = col;
        this._row = row;
        this.gridPosition = { 'col': this._col, 'row': this._row };
        this._recalculatePosition();
        this.itemChange.emit(this.getEventOutput());
    };
    NgGridItem.prototype.getEventOutput = function () {
        return {
            col: this._col,
            row: this._row,
            sizex: this._sizex,
            sizey: this._sizey,
            width: this._elemWidth,
            height: this._elemHeight,
            left: this._elemLeft,
            top: this._elemTop
        };
    };
    NgGridItem.prototype.setPosition = function (x, y) {
        switch (this._ngGrid.cascade) {
            case 'up':
            case 'left':
            default:
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'left', x + "px");
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'top', y + "px");
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'right', null);
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'bottom', null);
                break;
            case 'right':
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'right', x + "px");
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'top', y + "px");
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'left', null);
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'bottom', null);
                break;
            case 'down':
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'left', x + "px");
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'bottom', y + "px");
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'right', null);
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'top', null);
                break;
        }
        this._elemLeft = x;
        this._elemTop = y;
    };
    NgGridItem.prototype.setDimensions = function (w, h) {
        this._renderer.setElementStyle(this._ngEl.nativeElement, 'width', w + "px");
        this._renderer.setElementStyle(this._ngEl.nativeElement, 'height', h + "px");
        this._elemWidth = w;
        this._elemHeight = h;
    };
    NgGridItem.prototype.startMoving = function () {
        this._renderer.setElementClass(this._ngEl.nativeElement, 'moving', true);
        var style = window.getComputedStyle(this._ngEl.nativeElement);
        if (this._ngGrid.autoStyle)
            this._renderer.setElementStyle(this._ngEl.nativeElement, 'z-index', (parseInt(style.getPropertyValue('z-index')) + 1).toString());
    };
    NgGridItem.prototype.stopMoving = function () {
        this._renderer.setElementClass(this._ngEl.nativeElement, 'moving', false);
        var style = window.getComputedStyle(this._ngEl.nativeElement);
        if (this._ngGrid.autoStyle)
            this._renderer.setElementStyle(this._ngEl.nativeElement, 'z-index', (parseInt(style.getPropertyValue('z-index')) - 1).toString());
    };
    NgGridItem.prototype.recalculateSelf = function () {
        this._recalculatePosition();
        this._recalculateDimensions();
    };
    //	Private methods
    NgGridItem.prototype._recalculatePosition = function () {
        var x = (this._ngGrid.colWidth + this._ngGrid.marginLeft + this._ngGrid.marginRight) * (this._col - 1) + this._ngGrid.marginLeft;
        var y = (this._ngGrid.rowHeight + this._ngGrid.marginTop + this._ngGrid.marginBottom) * (this._row - 1) + this._ngGrid.marginTop;
        this.setPosition(x, y);
    };
    NgGridItem.prototype._recalculateDimensions = function () {
        if (this._sizex < this._ngGrid.minCols)
            this._sizex = this._ngGrid.minCols;
        if (this._sizey < this._ngGrid.minRows)
            this._sizey = this._ngGrid.minRows;
        var w = (this._ngGrid.colWidth * this._sizex) + ((this._ngGrid.marginLeft + this._ngGrid.marginRight) * (this._sizex - 1));
        var h = (this._ngGrid.rowHeight * this._sizey) + ((this._ngGrid.marginTop + this._ngGrid.marginBottom) * (this._sizey - 1));
        this.setDimensions(w, h);
    };
    NgGridItem.prototype._getMousePosition = function (e) {
        if (e.originalEvent && e.originalEvent.touches) {
            var oe = e.originalEvent;
            e = oe.touches.length ? oe.touches[0] : oe.changedTouches[0];
        }
        var refPos = this._ngEl.nativeElement.getBoundingClientRect();
        return {
            left: e.clientX - refPos.left,
            top: e.clientY - refPos.top
        };
    };
    //	Default config
    NgGridItem.CONST_DEFAULT_CONFIG = {
        'col': 1,
        'row': 1,
        'sizex': 1,
        'sizey': 1,
        'dragHandle': null,
        'resizeHandle': null,
        'fixed': false,
        'draggable': true,
        'resizable': true,
        'borderSize': 15
    };
    NgGridItem = __decorate([
        core_1.Directive({
            selector: '[ngGridItem]',
            inputs: ['config: ngGridItem', 'gridPosition: ngGridPosition', 'gridSize: ngGridSize'],
            outputs: ['itemChange', 'dragStart', 'drag', 'dragStop', 'resizeStart', 'resize', 'resizeStop']
        })
    ], NgGridItem);
    return NgGridItem;
})();
exports.NgGridItem = NgGridItem;
var NgGridPlaceholder = (function () {
    function NgGridPlaceholder(_ngEl, _renderer, _ngGrid) {
        this._ngEl = _ngEl;
        this._renderer = _renderer;
        this._ngGrid = _ngGrid;
    }
    NgGridPlaceholder.prototype.ngOnInit = function () {
        this._renderer.setElementClass(this._ngEl.nativeElement, 'grid-placeholder', true);
        if (this._ngGrid.autoStyle)
            this._renderer.setElementStyle(this._ngEl.nativeElement, 'position', 'absolute');
    };
    NgGridPlaceholder.prototype.setSize = function (x, y) {
        this._sizex = x;
        this._sizey = y;
        this._recalculateDimensions();
    };
    NgGridPlaceholder.prototype.setGridPosition = function (col, row) {
        this._col = col;
        this._row = row;
        this._recalculatePosition();
    };
    NgGridPlaceholder.prototype._setPosition = function (x, y) {
        switch (this._ngGrid.cascade) {
            case 'up':
            case 'left':
            default:
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'left', x + "px");
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'top', y + "px");
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'right', null);
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'bottom', null);
                break;
            case 'right':
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'right', x + "px");
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'top', y + "px");
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'left', null);
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'bottom', null);
                break;
            case 'down':
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'left', x + "px");
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'bottom', y + "px");
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'right', null);
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'top', null);
                break;
        }
    };
    NgGridPlaceholder.prototype._setDimensions = function (w, h) {
        this._renderer.setElementStyle(this._ngEl.nativeElement, 'width', w + "px");
        this._renderer.setElementStyle(this._ngEl.nativeElement, 'height', h + "px");
    };
    //	Private methods
    NgGridPlaceholder.prototype._recalculatePosition = function () {
        var x = (this._ngGrid.colWidth + this._ngGrid.marginLeft + this._ngGrid.marginRight) * (this._col - 1) + this._ngGrid.marginLeft;
        var y = (this._ngGrid.rowHeight + this._ngGrid.marginTop + this._ngGrid.marginBottom) * (this._row - 1) + this._ngGrid.marginTop;
        this._setPosition(x, y);
    };
    NgGridPlaceholder.prototype._recalculateDimensions = function () {
        var w = (this._ngGrid.colWidth * this._sizex) + ((this._ngGrid.marginLeft + this._ngGrid.marginRight) * (this._sizex - 1));
        var h = (this._ngGrid.rowHeight * this._sizey) + ((this._ngGrid.marginTop + this._ngGrid.marginBottom) * (this._sizey - 1));
        this._setDimensions(w, h);
    };
    NgGridPlaceholder = __decorate([
        core_1.Component({
            selector: 'div'
        }),
        core_1.View({
            template: ""
        })
    ], NgGridPlaceholder);
    return NgGridPlaceholder;
})();
exports.NgGridPlaceholder = NgGridPlaceholder;
//# sourceMappingURL=NgGrid.js.map