(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[9865],{

/***/ "../../node_modules/.pnpm/@wordpress+data@10.6.0_react@17.0.2/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useRegistry)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+data@10.6.0_react@17.0.2/node_modules/@wordpress/data/build-module/components/registry-provider/context.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * A custom react hook exposing the registry context for use.
 *
 * This exposes the `registry` value provided via the
 * <a href="#RegistryProvider">Registry Provider</a> to a component implementing
 * this hook.
 *
 * It acts similarly to the `useContext` react hook.
 *
 * Note: Generally speaking, `useRegistry` is a low level hook that in most cases
 * won't be needed for implementation. Most interactions with the `@wordpress/data`
 * API can be performed via the `useSelect` hook,  or the `withSelect` and
 * `withDispatch` higher order components.
 *
 * @example
 * ```js
 * import {
 *   RegistryProvider,
 *   createRegistry,
 *   useRegistry,
 * } from '@wordpress/data';
 *
 * const registry = createRegistry( {} );
 *
 * const SomeChildUsingRegistry = ( props ) => {
 *   const registry = useRegistry();
 *   // ...logic implementing the registry in other react hooks.
 * };
 *
 *
 * const ParentProvidingRegistry = ( props ) => {
 *   return <RegistryProvider value={ registry }>
 *     <SomeChildUsingRegistry { ...props } />
 *   </RegistryProvider>
 * };
 * ```
 *
 * @return {Function}  A custom react hook exposing the registry context value.
 */
function useRegistry() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__/* .Context */ .ob);
}
//# sourceMappingURL=use-registry.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+dataviews@4.2.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@wordpress/dataviews/build-module/components/dataviews/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ DataViews)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option-base/styles.js
var toggle_group_control_option_base_styles_namespaceObject = {};
__webpack_require__.r(toggle_group_control_option_base_styles_namespaceObject);
__webpack_require__.d(toggle_group_control_option_base_styles_namespaceObject, {
  ButtonContentView: () => (ButtonContentView),
  LabelView: () => (LabelView),
  ou: () => (backdropView),
  uG: () => (buttonView),
  eh: () => (labelBlock)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/h-stack/component.js
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/h-stack/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js
var _2GXGCHW6 = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js
var Z32BISHQ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/TCAGH6BH.js
"use client";



// src/collection/collection-store.ts

function useCollectionStoreProps(store, update, props) {
  (0,Z32BISHQ/* useUpdateEffect */.w5)(update, [props.store]);
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "items", "setItems");
  return store;
}
function useCollectionStore(props = {}) {
  const [store, update] = useStore(Core.createCollectionStore, props);
  return useCollectionStoreProps(store, update, props);
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js
var EQQLU3CG = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js
var PBFD2E7P = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js
var HWOIWM4O = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js
var _3YLGPPWQ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/6DHTHWXD.js
"use client";





// src/collection/collection-store.ts
function isElementPreceding(a, b) {
  return Boolean(
    b.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_PRECEDING
  );
}
function sortBasedOnDOMPosition(items) {
  const pairs = items.map((item, index) => [index, item]);
  let isOrderDifferent = false;
  pairs.sort(([indexA, a], [indexB, b]) => {
    const elementA = a.element;
    const elementB = b.element;
    if (elementA === elementB) return 0;
    if (!elementA || !elementB) return 0;
    if (isElementPreceding(elementA, elementB)) {
      if (indexA > indexB) {
        isOrderDifferent = true;
      }
      return -1;
    }
    if (indexA < indexB) {
      isOrderDifferent = true;
    }
    return 1;
  });
  if (isOrderDifferent) {
    return pairs.map(([_, item]) => item);
  }
  return items;
}
function getCommonParent(items) {
  var _a;
  const firstItem = items.find((item) => !!item.element);
  const lastItem = [...items].reverse().find((item) => !!item.element);
  let parentElement = (_a = firstItem == null ? void 0 : firstItem.element) == null ? void 0 : _a.parentElement;
  while (parentElement && (lastItem == null ? void 0 : lastItem.element)) {
    const parent = parentElement;
    if (lastItem && parent.contains(lastItem.element)) {
      return parentElement;
    }
    parentElement = parentElement.parentElement;
  }
  return (0,HWOIWM4O/* getDocument */.YE)(parentElement).body;
}
function getPrivateStore(store) {
  return store == null ? void 0 : store.__unstablePrivateStore;
}
function createCollectionStore(props = {}) {
  var _a;
  (0,EQQLU3CG/* throwOnConflictingProps */.UE)(props, props.store);
  const syncState = (_a = props.store) == null ? void 0 : _a.getState();
  const items = (0,PBFD2E7P/* defaultValue */.Jh)(
    props.items,
    syncState == null ? void 0 : syncState.items,
    props.defaultItems,
    []
  );
  const itemsMap = new Map(items.map((item) => [item.id, item]));
  const initialState = {
    items,
    renderedItems: (0,PBFD2E7P/* defaultValue */.Jh)(syncState == null ? void 0 : syncState.renderedItems, [])
  };
  const syncPrivateStore = getPrivateStore(props.store);
  const privateStore = (0,EQQLU3CG/* createStore */.y$)(
    { items, renderedItems: initialState.renderedItems },
    syncPrivateStore
  );
  const collection = (0,EQQLU3CG/* createStore */.y$)(initialState, props.store);
  const sortItems = (renderedItems) => {
    const sortedItems = sortBasedOnDOMPosition(renderedItems);
    privateStore.setState("renderedItems", sortedItems);
    collection.setState("renderedItems", sortedItems);
  };
  (0,EQQLU3CG/* setup */.mj)(collection, () => (0,EQQLU3CG/* init */.Ts)(privateStore));
  (0,EQQLU3CG/* setup */.mj)(privateStore, () => {
    return (0,EQQLU3CG/* batch */.vA)(privateStore, ["items"], (state) => {
      collection.setState("items", state.items);
    });
  });
  (0,EQQLU3CG/* setup */.mj)(privateStore, () => {
    return (0,EQQLU3CG/* batch */.vA)(privateStore, ["renderedItems"], (state) => {
      let firstRun = true;
      let raf = requestAnimationFrame(() => {
        const { renderedItems } = collection.getState();
        if (state.renderedItems === renderedItems) return;
        sortItems(state.renderedItems);
      });
      if (typeof IntersectionObserver !== "function") {
        return () => cancelAnimationFrame(raf);
      }
      const ioCallback = () => {
        if (firstRun) {
          firstRun = false;
          return;
        }
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => sortItems(state.renderedItems));
      };
      const root = getCommonParent(state.renderedItems);
      const observer = new IntersectionObserver(ioCallback, { root });
      for (const item of state.renderedItems) {
        if (!item.element) continue;
        observer.observe(item.element);
      }
      return () => {
        cancelAnimationFrame(raf);
        observer.disconnect();
      };
    });
  });
  const mergeItem = (item, setItems, canDeleteFromMap = false) => {
    let prevItem;
    setItems((items2) => {
      const index = items2.findIndex(({ id }) => id === item.id);
      const nextItems = items2.slice();
      if (index !== -1) {
        prevItem = items2[index];
        const nextItem = (0,_3YLGPPWQ/* __spreadValues */.IA)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, prevItem), item);
        nextItems[index] = nextItem;
        itemsMap.set(item.id, nextItem);
      } else {
        nextItems.push(item);
        itemsMap.set(item.id, item);
      }
      return nextItems;
    });
    const unmergeItem = () => {
      setItems((items2) => {
        if (!prevItem) {
          if (canDeleteFromMap) {
            itemsMap.delete(item.id);
          }
          return items2.filter(({ id }) => id !== item.id);
        }
        const index = items2.findIndex(({ id }) => id === item.id);
        if (index === -1) return items2;
        const nextItems = items2.slice();
        nextItems[index] = prevItem;
        itemsMap.set(item.id, prevItem);
        return nextItems;
      });
    };
    return unmergeItem;
  };
  const registerItem = (item) => mergeItem(
    item,
    (getItems) => privateStore.setState("items", getItems),
    true
  );
  return (0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, collection), {
    registerItem,
    renderItem: (item) => (0,PBFD2E7P/* chain */.cy)(
      registerItem(item),
      mergeItem(
        item,
        (getItems) => privateStore.setState("renderedItems", getItems)
      )
    ),
    item: (id) => {
      if (!id) return null;
      let item = itemsMap.get(id);
      if (!item) {
        const { items: items2 } = collection.getState();
        item = items2.find((item2) => item2.id === id);
        if (item) {
          itemsMap.set(id, item);
        }
      }
      return item || null;
    },
    // @ts-expect-error Internal
    __unstablePrivateStore: privateStore
  });
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/7PRQYBBV.js
"use client";

// src/utils/array.ts
function toArray(arg) {
  if (Array.isArray(arg)) {
    return arg;
  }
  return typeof arg !== "undefined" ? [arg] : [];
}
function addItemToArray(array, item, index = -1) {
  if (!(index in array)) {
    return [...array, item];
  }
  return [...array.slice(0, index), item, ...array.slice(index)];
}
function flatten2DArray(array) {
  const flattened = [];
  for (const row of array) {
    flattened.push(...row);
  }
  return flattened;
}
function reverseArray(array) {
  return array.slice().reverse();
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/D7EIQZAU.js
"use client";






// src/composite/composite-store.ts
var NULL_ITEM = { id: null };
function findFirstEnabledItem(items, excludeId) {
  return items.find((item) => {
    if (excludeId) {
      return !item.disabled && item.id !== excludeId;
    }
    return !item.disabled;
  });
}
function getEnabledItems(items, excludeId) {
  return items.filter((item) => {
    if (excludeId) {
      return !item.disabled && item.id !== excludeId;
    }
    return !item.disabled;
  });
}
function getOppositeOrientation(orientation) {
  if (orientation === "vertical") return "horizontal";
  if (orientation === "horizontal") return "vertical";
  return;
}
function getItemsInRow(items, rowId) {
  return items.filter((item) => item.rowId === rowId);
}
function flipItems(items, activeId, shouldInsertNullItem = false) {
  const index = items.findIndex((item) => item.id === activeId);
  return [
    ...items.slice(index + 1),
    ...shouldInsertNullItem ? [NULL_ITEM] : [],
    ...items.slice(0, index)
  ];
}
function groupItemsByRows(items) {
  const rows = [];
  for (const item of items) {
    const row = rows.find((currentRow) => {
      var _a;
      return ((_a = currentRow[0]) == null ? void 0 : _a.rowId) === item.rowId;
    });
    if (row) {
      row.push(item);
    } else {
      rows.push([item]);
    }
  }
  return rows;
}
function getMaxRowLength(array) {
  let maxLength = 0;
  for (const { length } of array) {
    if (length > maxLength) {
      maxLength = length;
    }
  }
  return maxLength;
}
function createEmptyItem(rowId) {
  return {
    id: "__EMPTY_ITEM__",
    disabled: true,
    rowId
  };
}
function normalizeRows(rows, activeId, focusShift) {
  const maxLength = getMaxRowLength(rows);
  for (const row of rows) {
    for (let i = 0; i < maxLength; i += 1) {
      const item = row[i];
      if (!item || focusShift && item.disabled) {
        const isFirst = i === 0;
        const previousItem = isFirst && focusShift ? findFirstEnabledItem(row) : row[i - 1];
        row[i] = previousItem && activeId !== previousItem.id && focusShift ? previousItem : createEmptyItem(previousItem == null ? void 0 : previousItem.rowId);
      }
    }
  }
  return rows;
}
function verticalizeItems(items) {
  const rows = groupItemsByRows(items);
  const maxLength = getMaxRowLength(rows);
  const verticalized = [];
  for (let i = 0; i < maxLength; i += 1) {
    for (const row of rows) {
      const item = row[i];
      if (item) {
        verticalized.push((0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, item), {
          // If there's no rowId, it means that it's not a grid composite, but
          // a single row instead. So, instead of verticalizing it, that is,
          // assigning a different rowId based on the column index, we keep it
          // undefined so they will be part of the same row. This is useful
          // when using up/down on one-dimensional composites.
          rowId: item.rowId ? `${i}` : void 0
        }));
      }
    }
  }
  return verticalized;
}
function createCompositeStore(props = {}) {
  var _a;
  const syncState = (_a = props.store) == null ? void 0 : _a.getState();
  const collection = createCollectionStore(props);
  const activeId = (0,PBFD2E7P/* defaultValue */.Jh)(
    props.activeId,
    syncState == null ? void 0 : syncState.activeId,
    props.defaultActiveId
  );
  const initialState = (0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, collection.getState()), {
    activeId,
    baseElement: (0,PBFD2E7P/* defaultValue */.Jh)(syncState == null ? void 0 : syncState.baseElement, null),
    includesBaseElement: (0,PBFD2E7P/* defaultValue */.Jh)(
      props.includesBaseElement,
      syncState == null ? void 0 : syncState.includesBaseElement,
      activeId === null
    ),
    moves: (0,PBFD2E7P/* defaultValue */.Jh)(syncState == null ? void 0 : syncState.moves, 0),
    orientation: (0,PBFD2E7P/* defaultValue */.Jh)(
      props.orientation,
      syncState == null ? void 0 : syncState.orientation,
      "both"
    ),
    rtl: (0,PBFD2E7P/* defaultValue */.Jh)(props.rtl, syncState == null ? void 0 : syncState.rtl, false),
    virtualFocus: (0,PBFD2E7P/* defaultValue */.Jh)(
      props.virtualFocus,
      syncState == null ? void 0 : syncState.virtualFocus,
      false
    ),
    focusLoop: (0,PBFD2E7P/* defaultValue */.Jh)(props.focusLoop, syncState == null ? void 0 : syncState.focusLoop, false),
    focusWrap: (0,PBFD2E7P/* defaultValue */.Jh)(props.focusWrap, syncState == null ? void 0 : syncState.focusWrap, false),
    focusShift: (0,PBFD2E7P/* defaultValue */.Jh)(props.focusShift, syncState == null ? void 0 : syncState.focusShift, false)
  });
  const composite = (0,EQQLU3CG/* createStore */.y$)(initialState, collection, props.store);
  (0,EQQLU3CG/* setup */.mj)(
    composite,
    () => (0,EQQLU3CG/* sync */.OH)(composite, ["renderedItems", "activeId"], (state) => {
      composite.setState("activeId", (activeId2) => {
        var _a2;
        if (activeId2 !== void 0) return activeId2;
        return (_a2 = findFirstEnabledItem(state.renderedItems)) == null ? void 0 : _a2.id;
      });
    })
  );
  const getNextId = (items, orientation, hasNullItem, skip) => {
    var _a2, _b;
    const { activeId: activeId2, rtl, focusLoop, focusWrap, includesBaseElement } = composite.getState();
    const isHorizontal = orientation !== "vertical";
    const isRTL = rtl && isHorizontal;
    const allItems = isRTL ? reverseArray(items) : items;
    if (activeId2 == null) {
      return (_a2 = findFirstEnabledItem(allItems)) == null ? void 0 : _a2.id;
    }
    const activeItem = allItems.find((item) => item.id === activeId2);
    if (!activeItem) {
      return (_b = findFirstEnabledItem(allItems)) == null ? void 0 : _b.id;
    }
    const isGrid = !!activeItem.rowId;
    const activeIndex = allItems.indexOf(activeItem);
    const nextItems = allItems.slice(activeIndex + 1);
    const nextItemsInRow = getItemsInRow(nextItems, activeItem.rowId);
    if (skip !== void 0) {
      const nextEnabledItemsInRow = getEnabledItems(nextItemsInRow, activeId2);
      const nextItem2 = nextEnabledItemsInRow.slice(skip)[0] || // If we can't find an item, just return the last one.
      nextEnabledItemsInRow[nextEnabledItemsInRow.length - 1];
      return nextItem2 == null ? void 0 : nextItem2.id;
    }
    const oppositeOrientation = getOppositeOrientation(
      // If it's a grid and orientation is not set, it's a next/previous call,
      // which is inherently horizontal. up/down will call next with orientation
      // set to vertical by default (see below on up/down methods).
      isGrid ? orientation || "horizontal" : orientation
    );
    const canLoop = focusLoop && focusLoop !== oppositeOrientation;
    const canWrap = isGrid && focusWrap && focusWrap !== oppositeOrientation;
    hasNullItem = hasNullItem || !isGrid && canLoop && includesBaseElement;
    if (canLoop) {
      const loopItems = canWrap && !hasNullItem ? allItems : getItemsInRow(allItems, activeItem.rowId);
      const sortedItems = flipItems(loopItems, activeId2, hasNullItem);
      const nextItem2 = findFirstEnabledItem(sortedItems, activeId2);
      return nextItem2 == null ? void 0 : nextItem2.id;
    }
    if (canWrap) {
      const nextItem2 = findFirstEnabledItem(
        // We can use nextItems, which contains all the next items, including
        // items from other rows, to wrap between rows. However, if there is a
        // null item (the composite container), we'll only use the next items in
        // the row. So moving next from the last item will focus on the
        // composite container. On grid composites, horizontal navigation never
        // focuses on the composite container, only vertical.
        hasNullItem ? nextItemsInRow : nextItems,
        activeId2
      );
      const nextId = hasNullItem ? (nextItem2 == null ? void 0 : nextItem2.id) || null : nextItem2 == null ? void 0 : nextItem2.id;
      return nextId;
    }
    const nextItem = findFirstEnabledItem(nextItemsInRow, activeId2);
    if (!nextItem && hasNullItem) {
      return null;
    }
    return nextItem == null ? void 0 : nextItem.id;
  };
  return (0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, collection), composite), {
    setBaseElement: (element) => composite.setState("baseElement", element),
    setActiveId: (id) => composite.setState("activeId", id),
    move: (id) => {
      if (id === void 0) return;
      composite.setState("activeId", id);
      composite.setState("moves", (moves) => moves + 1);
    },
    first: () => {
      var _a2;
      return (_a2 = findFirstEnabledItem(composite.getState().renderedItems)) == null ? void 0 : _a2.id;
    },
    last: () => {
      var _a2;
      return (_a2 = findFirstEnabledItem(reverseArray(composite.getState().renderedItems))) == null ? void 0 : _a2.id;
    },
    next: (skip) => {
      const { renderedItems, orientation } = composite.getState();
      return getNextId(renderedItems, orientation, false, skip);
    },
    previous: (skip) => {
      var _a2;
      const { renderedItems, orientation, includesBaseElement } = composite.getState();
      const isGrid = !!((_a2 = findFirstEnabledItem(renderedItems)) == null ? void 0 : _a2.rowId);
      const hasNullItem = !isGrid && includesBaseElement;
      return getNextId(
        reverseArray(renderedItems),
        orientation,
        hasNullItem,
        skip
      );
    },
    down: (skip) => {
      const {
        activeId: activeId2,
        renderedItems,
        focusShift,
        focusLoop,
        includesBaseElement
      } = composite.getState();
      const shouldShift = focusShift && !skip;
      const verticalItems = verticalizeItems(
        flatten2DArray(
          normalizeRows(groupItemsByRows(renderedItems), activeId2, shouldShift)
        )
      );
      const canLoop = focusLoop && focusLoop !== "horizontal";
      const hasNullItem = canLoop && includesBaseElement;
      return getNextId(verticalItems, "vertical", hasNullItem, skip);
    },
    up: (skip) => {
      const { activeId: activeId2, renderedItems, focusShift, includesBaseElement } = composite.getState();
      const shouldShift = focusShift && !skip;
      const verticalItems = verticalizeItems(
        reverseArray(
          flatten2DArray(
            normalizeRows(
              groupItemsByRows(renderedItems),
              activeId2,
              shouldShift
            )
          )
        )
      );
      const hasNullItem = includesBaseElement;
      return getNextId(verticalItems, "vertical", hasNullItem, skip);
    }
  });
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/UVQLZ7T5.js
"use client";



// src/composite/composite-store.ts

function useCompositeStoreProps(store, update, props) {
  store = useCollectionStoreProps(store, update, props);
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "activeId", "setActiveId");
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "includesBaseElement");
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "virtualFocus");
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "orientation");
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "rtl");
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "focusLoop");
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "focusWrap");
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "focusShift");
  return store;
}
function useCompositeStore(props = {}) {
  const [store, update] = (0,_2GXGCHW6/* useStore */.Pj)(createCompositeStore, props);
  return useCompositeStoreProps(store, update, props);
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/7HVFURXT.js
"use client";

// src/group/group-label-context.tsx

var GroupLabelContext = (0,react.createContext)(void 0);



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js
var HKOOKEDE = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js
var _chunks_3YLGPPWQ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/ZPO4YZYE.js
"use client";





// src/group/group.tsx



var TagName = "div";
var useGroup = (0,HKOOKEDE/* createHook */.ab)(
  function useGroup2(props) {
    const [labelId, setLabelId] = (0,react.useState)();
    props = (0,Z32BISHQ/* useWrapElement */.w7)(
      props,
      (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(GroupLabelContext.Provider, { value: setLabelId, children: element }),
      []
    );
    props = (0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      role: "group",
      "aria-labelledby": labelId
    }, props);
    return (0,PBFD2E7P/* removeUndefinedValues */.HR)(props);
  }
);
var Group = (0,HKOOKEDE/* forwardRef */.Rf)(function Group2(props) {
  const htmlProps = useGroup(props);
  return (0,HKOOKEDE/* createElement */.n)(TagName, htmlProps);
});



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/IEKMDIUY.js
"use client";




// src/composite/composite-group.tsx
var IEKMDIUY_TagName = "div";
var useCompositeGroup = (0,HKOOKEDE/* createHook */.ab)(
  function useCompositeGroup2(_a) {
    var _b = _a, { store } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, ["store"]);
    props = useGroup(props);
    return props;
  }
);
var IEKMDIUY_CompositeGroup = (0,HKOOKEDE/* forwardRef */.Rf)(function CompositeGroup2(props) {
  const htmlProps = useCompositeGroup(props);
  return (0,HKOOKEDE/* createElement */.n)(IEKMDIUY_TagName, htmlProps);
});



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/IGFP5YPG.js
"use client";





// src/group/group-label.tsx


var IGFP5YPG_TagName = "div";
var useGroupLabel = (0,HKOOKEDE/* createHook */.ab)(
  function useGroupLabel2(props) {
    const setLabelId = (0,react.useContext)(GroupLabelContext);
    const id = (0,Z32BISHQ/* useId */.Bi)(props.id);
    (0,Z32BISHQ/* useSafeLayoutEffect */.UQ)(() => {
      setLabelId == null ? void 0 : setLabelId(id);
      return () => setLabelId == null ? void 0 : setLabelId(void 0);
    }, [setLabelId, id]);
    props = (0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      id,
      "aria-hidden": true
    }, props);
    return (0,PBFD2E7P/* removeUndefinedValues */.HR)(props);
  }
);
var GroupLabel = (0,HKOOKEDE/* forwardRef */.Rf)(function GroupLabel2(props) {
  const htmlProps = useGroupLabel(props);
  return (0,HKOOKEDE/* createElement */.n)(IGFP5YPG_TagName, htmlProps);
});



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/Y2MAXF6C.js
"use client";




// src/composite/composite-group-label.tsx
var Y2MAXF6C_TagName = "div";
var useCompositeGroupLabel = (0,HKOOKEDE/* createHook */.ab)(function useCompositeGroupLabel2(_a) {
  var _b = _a, { store } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, ["store"]);
  props = useGroupLabel(props);
  return props;
});
var Y2MAXF6C_CompositeGroupLabel = (0,HKOOKEDE/* forwardRef */.Rf)(function CompositeGroupLabel2(props) {
  const htmlProps = useCompositeGroupLabel(props);
  return (0,HKOOKEDE/* createElement */.n)(Y2MAXF6C_TagName, htmlProps);
});



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/FMYQNSCK.js
"use client";


// src/collection/collection-context.tsx
var ctx = (0,HKOOKEDE/* createStoreContext */.B0)();
var useCollectionContext = ctx.useContext;
var useCollectionScopedContext = ctx.useScopedContext;
var useCollectionProviderContext = ctx.useProviderContext;
var CollectionContextProvider = ctx.ContextProvider;
var CollectionScopedContextProvider = ctx.ScopedContextProvider;



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/PLQDTVXM.js
"use client";





// src/collection/collection-item.tsx


var PLQDTVXM_TagName = "div";
var useCollectionItem = (0,HKOOKEDE/* createHook */.ab)(
  function useCollectionItem2(_a) {
    var _b = _a, {
      store,
      shouldRegisterItem = true,
      getItem = PBFD2E7P/* identity */.D_,
      element: element
    } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, [
      "store",
      "shouldRegisterItem",
      "getItem",
      // @ts-expect-error This prop may come from a collection renderer.
      "element"
    ]);
    const context = useCollectionContext();
    store = store || context;
    const id = (0,Z32BISHQ/* useId */.Bi)(props.id);
    const ref = (0,react.useRef)(element);
    (0,react.useEffect)(() => {
      const element2 = ref.current;
      if (!id) return;
      if (!element2) return;
      if (!shouldRegisterItem) return;
      const item = getItem({ id, element: element2 });
      return store == null ? void 0 : store.renderItem(item);
    }, [id, shouldRegisterItem, getItem, store]);
    props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
      ref: (0,Z32BISHQ/* useMergeRefs */.SV)(ref, props.ref)
    });
    return (0,PBFD2E7P/* removeUndefinedValues */.HR)(props);
  }
);
var CollectionItem = (0,HKOOKEDE/* forwardRef */.Rf)(function CollectionItem2(props) {
  const htmlProps = useCollectionItem(props);
  return (0,HKOOKEDE/* createElement */.n)(PLQDTVXM_TagName, htmlProps);
});



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/HGZKAGPL.js
var HGZKAGPL = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/HGZKAGPL.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/utils/events.js
var events = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/utils/events.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/US4USQPI.js
var US4USQPI = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/US4USQPI.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/NAXN2XAB.js
"use client";





// src/command/command.tsx





var NAXN2XAB_TagName = "button";
function isNativeClick(event) {
  if (!event.isTrusted) return false;
  const element = event.currentTarget;
  if (event.key === "Enter") {
    return (0,HWOIWM4O/* isButton */.Bm)(element) || element.tagName === "SUMMARY" || element.tagName === "A";
  }
  if (event.key === " ") {
    return (0,HWOIWM4O/* isButton */.Bm)(element) || element.tagName === "SUMMARY" || element.tagName === "INPUT" || element.tagName === "SELECT";
  }
  return false;
}
var symbol = Symbol("command");
var useCommand = (0,HKOOKEDE/* createHook */.ab)(
  function useCommand2(_a) {
    var _b = _a, { clickOnEnter = true, clickOnSpace = true } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, ["clickOnEnter", "clickOnSpace"]);
    const ref = (0,react.useRef)(null);
    const tagName = (0,Z32BISHQ/* useTagName */.vO)(ref);
    const type = props.type;
    const [isNativeButton, setIsNativeButton] = (0,react.useState)(
      () => !!tagName && (0,HWOIWM4O/* isButton */.Bm)({ tagName, type })
    );
    (0,react.useEffect)(() => {
      if (!ref.current) return;
      setIsNativeButton((0,HWOIWM4O/* isButton */.Bm)(ref.current));
    }, []);
    const [active, setActive] = (0,react.useState)(false);
    const activeRef = (0,react.useRef)(false);
    const disabled = (0,PBFD2E7P/* disabledFromProps */.$f)(props);
    const [isDuplicate, metadataProps] = (0,Z32BISHQ/* useMetadataProps */.P1)(props, symbol, true);
    const onKeyDownProp = props.onKeyDown;
    const onKeyDown = (0,Z32BISHQ/* useEvent */._q)((event) => {
      onKeyDownProp == null ? void 0 : onKeyDownProp(event);
      const element = event.currentTarget;
      if (event.defaultPrevented) return;
      if (isDuplicate) return;
      if (disabled) return;
      if (!(0,events/* isSelfTarget */.uh)(event)) return;
      if ((0,HWOIWM4O/* isTextField */.mB)(element)) return;
      if (element.isContentEditable) return;
      const isEnter = clickOnEnter && event.key === "Enter";
      const isSpace = clickOnSpace && event.key === " ";
      const shouldPreventEnter = event.key === "Enter" && !clickOnEnter;
      const shouldPreventSpace = event.key === " " && !clickOnSpace;
      if (shouldPreventEnter || shouldPreventSpace) {
        event.preventDefault();
        return;
      }
      if (isEnter || isSpace) {
        const nativeClick = isNativeClick(event);
        if (isEnter) {
          if (!nativeClick) {
            event.preventDefault();
            const _a2 = event, { view } = _a2, eventInit = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_a2, ["view"]);
            const click = () => (0,events/* fireClickEvent */.hY)(element, eventInit);
            if ((0,US4USQPI/* isFirefox */.gm)()) {
              (0,events/* queueBeforeEvent */.nz)(element, "keyup", click);
            } else {
              queueMicrotask(click);
            }
          }
        } else if (isSpace) {
          activeRef.current = true;
          if (!nativeClick) {
            event.preventDefault();
            setActive(true);
          }
        }
      }
    });
    const onKeyUpProp = props.onKeyUp;
    const onKeyUp = (0,Z32BISHQ/* useEvent */._q)((event) => {
      onKeyUpProp == null ? void 0 : onKeyUpProp(event);
      if (event.defaultPrevented) return;
      if (isDuplicate) return;
      if (disabled) return;
      if (event.metaKey) return;
      const isSpace = clickOnSpace && event.key === " ";
      if (activeRef.current && isSpace) {
        activeRef.current = false;
        if (!isNativeClick(event)) {
          event.preventDefault();
          setActive(false);
          const element = event.currentTarget;
          const _a2 = event, { view } = _a2, eventInit = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_a2, ["view"]);
          queueMicrotask(() => (0,events/* fireClickEvent */.hY)(element, eventInit));
        }
      }
    });
    props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      "data-active": active || void 0,
      type: isNativeButton ? "button" : void 0
    }, metadataProps), props), {
      ref: (0,Z32BISHQ/* useMergeRefs */.SV)(ref, props.ref),
      onKeyDown,
      onKeyUp
    });
    props = (0,HGZKAGPL/* useFocusable */.W)(props);
    return props;
  }
);
var Command = (0,HKOOKEDE/* forwardRef */.Rf)(function Command2(props) {
  const htmlProps = useCommand(props);
  return (0,HKOOKEDE/* createElement */.n)(NAXN2XAB_TagName, htmlProps);
});



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/5VQZOHHZ.js
"use client";

// src/composite/utils.ts

var _5VQZOHHZ_NULL_ITEM = { id: null };
function _5VQZOHHZ_flipItems(items, activeId, shouldInsertNullItem = false) {
  const index = items.findIndex((item) => item.id === activeId);
  return [
    ...items.slice(index + 1),
    ...shouldInsertNullItem ? [_5VQZOHHZ_NULL_ITEM] : [],
    ...items.slice(0, index)
  ];
}
function _5VQZOHHZ_findFirstEnabledItem(items, excludeId) {
  return items.find((item) => {
    if (excludeId) {
      return !item.disabled && item.id !== excludeId;
    }
    return !item.disabled;
  });
}
function getEnabledItem(store, id) {
  if (!id) return null;
  return store.item(id) || null;
}
function _5VQZOHHZ_groupItemsByRows(items) {
  const rows = [];
  for (const item of items) {
    const row = rows.find((currentRow) => {
      var _a;
      return ((_a = currentRow[0]) == null ? void 0 : _a.rowId) === item.rowId;
    });
    if (row) {
      row.push(item);
    } else {
      rows.push([item]);
    }
  }
  return rows;
}
function selectTextField(element, collapseToEnd = false) {
  if ((0,HWOIWM4O/* isTextField */.mB)(element)) {
    element.setSelectionRange(
      collapseToEnd ? element.value.length : 0,
      element.value.length
    );
  } else if (element.isContentEditable) {
    const selection = (0,HWOIWM4O/* getDocument */.YE)(element).getSelection();
    selection == null ? void 0 : selection.selectAllChildren(element);
    if (collapseToEnd) {
      selection == null ? void 0 : selection.collapseToEnd();
    }
  }
}
var FOCUS_SILENTLY = Symbol("FOCUS_SILENTLY");
function focusSilently(element) {
  element[FOCUS_SILENTLY] = true;
  element.focus({ preventScroll: true });
}
function silentlyFocused(element) {
  const isSilentlyFocused = element[FOCUS_SILENTLY];
  delete element[FOCUS_SILENTLY];
  return isSilentlyFocused;
}
function isItem(store, element, exclude) {
  if (!element) return false;
  if (element === exclude) return false;
  const item = store.item(element.id);
  if (!item) return false;
  if (exclude && item.element === exclude) return false;
  return true;
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/WENSINUV.js
"use client";



// src/composite/composite-context.tsx

var WENSINUV_ctx = (0,HKOOKEDE/* createStoreContext */.B0)(
  [CollectionContextProvider],
  [CollectionScopedContextProvider]
);
var useCompositeContext = WENSINUV_ctx.useContext;
var useCompositeScopedContext = WENSINUV_ctx.useScopedContext;
var useCompositeProviderContext = WENSINUV_ctx.useProviderContext;
var CompositeContextProvider = WENSINUV_ctx.ContextProvider;
var CompositeScopedContextProvider = WENSINUV_ctx.ScopedContextProvider;
var CompositeItemContext = (0,react.createContext)(
  void 0
);
var CompositeRowContext = (0,react.createContext)(
  void 0
);



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/3CCTMYB6.js
"use client";









// src/composite/composite-item.tsx






var _3CCTMYB6_TagName = "button";
function isEditableElement(element) {
  if ((0,HWOIWM4O/* isTextbox */.Bj)(element)) return true;
  return element.tagName === "INPUT" && !(0,HWOIWM4O/* isButton */.Bm)(element);
}
function getNextPageOffset(scrollingElement, pageUp = false) {
  const height = scrollingElement.clientHeight;
  const { top } = scrollingElement.getBoundingClientRect();
  const pageSize = Math.max(height * 0.875, height - 40) * 1.5;
  const pageOffset = pageUp ? height - pageSize + top : pageSize + top;
  if (scrollingElement.tagName === "HTML") {
    return pageOffset + scrollingElement.scrollTop;
  }
  return pageOffset;
}
function getItemOffset(itemElement, pageUp = false) {
  const { top } = itemElement.getBoundingClientRect();
  if (pageUp) {
    return top + itemElement.clientHeight;
  }
  return top;
}
function findNextPageItemId(element, store, next, pageUp = false) {
  var _a;
  if (!store) return;
  if (!next) return;
  const { renderedItems } = store.getState();
  const scrollingElement = (0,HWOIWM4O/* getScrollingElement */.qj)(element);
  if (!scrollingElement) return;
  const nextPageOffset = getNextPageOffset(scrollingElement, pageUp);
  let id;
  let prevDifference;
  for (let i = 0; i < renderedItems.length; i += 1) {
    const previousId = id;
    id = next(i);
    if (!id) break;
    if (id === previousId) continue;
    const itemElement = (_a = getEnabledItem(store, id)) == null ? void 0 : _a.element;
    if (!itemElement) continue;
    const itemOffset = getItemOffset(itemElement, pageUp);
    const difference = itemOffset - nextPageOffset;
    const absDifference = Math.abs(difference);
    if (pageUp && difference <= 0 || !pageUp && difference >= 0) {
      if (prevDifference !== void 0 && prevDifference < absDifference) {
        id = previousId;
      }
      break;
    }
    prevDifference = absDifference;
  }
  return id;
}
function targetIsAnotherItem(event, store) {
  if ((0,events/* isSelfTarget */.uh)(event)) return false;
  return isItem(store, event.target);
}
var useCompositeItem = (0,HKOOKEDE/* createHook */.ab)(
  function useCompositeItem2(_a) {
    var _b = _a, {
      store,
      rowId: rowIdProp,
      preventScrollOnKeyDown = false,
      moveOnKeyPress = true,
      tabbable = false,
      getItem: getItemProp,
      "aria-setsize": ariaSetSizeProp,
      "aria-posinset": ariaPosInSetProp
    } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, [
      "store",
      "rowId",
      "preventScrollOnKeyDown",
      "moveOnKeyPress",
      "tabbable",
      "getItem",
      "aria-setsize",
      "aria-posinset"
    ]);
    const context = useCompositeContext();
    store = store || context;
    const id = (0,Z32BISHQ/* useId */.Bi)(props.id);
    const ref = (0,react.useRef)(null);
    const row = (0,react.useContext)(CompositeRowContext);
    const rowId = (0,_2GXGCHW6/* useStoreState */.O$)(store, (state) => {
      if (rowIdProp) return rowIdProp;
      if (!state) return;
      if (!(row == null ? void 0 : row.baseElement)) return;
      if (row.baseElement !== state.baseElement) return;
      return row.id;
    });
    const disabled = (0,PBFD2E7P/* disabledFromProps */.$f)(props);
    const trulyDisabled = disabled && !props.accessibleWhenDisabled;
    const getItem = (0,react.useCallback)(
      (item) => {
        const nextItem = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({}, item), {
          id: id || item.id,
          rowId,
          disabled: !!trulyDisabled
        });
        if (getItemProp) {
          return getItemProp(nextItem);
        }
        return nextItem;
      },
      [id, rowId, trulyDisabled, getItemProp]
    );
    const onFocusProp = props.onFocus;
    const hasFocusedComposite = (0,react.useRef)(false);
    const onFocus = (0,Z32BISHQ/* useEvent */._q)((event) => {
      onFocusProp == null ? void 0 : onFocusProp(event);
      if (event.defaultPrevented) return;
      if ((0,events/* isPortalEvent */.ho)(event)) return;
      if (!id) return;
      if (!store) return;
      if (targetIsAnotherItem(event, store)) return;
      const { virtualFocus, baseElement: baseElement2 } = store.getState();
      store.setActiveId(id);
      if ((0,HWOIWM4O/* isTextbox */.Bj)(event.currentTarget)) {
        selectTextField(event.currentTarget);
      }
      if (!virtualFocus) return;
      if (!(0,events/* isSelfTarget */.uh)(event)) return;
      if (isEditableElement(event.currentTarget)) return;
      if (!(baseElement2 == null ? void 0 : baseElement2.isConnected)) return;
      if ((0,US4USQPI/* isSafari */.nr)() && event.currentTarget.hasAttribute("data-autofocus")) {
        event.currentTarget.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        });
      }
      hasFocusedComposite.current = true;
      const fromComposite = event.relatedTarget === baseElement2 || isItem(store, event.relatedTarget);
      if (fromComposite) {
        focusSilently(baseElement2);
      } else {
        baseElement2.focus();
      }
    });
    const onBlurCaptureProp = props.onBlurCapture;
    const onBlurCapture = (0,Z32BISHQ/* useEvent */._q)((event) => {
      onBlurCaptureProp == null ? void 0 : onBlurCaptureProp(event);
      if (event.defaultPrevented) return;
      const state = store == null ? void 0 : store.getState();
      if ((state == null ? void 0 : state.virtualFocus) && hasFocusedComposite.current) {
        hasFocusedComposite.current = false;
        event.preventDefault();
        event.stopPropagation();
      }
    });
    const onKeyDownProp = props.onKeyDown;
    const preventScrollOnKeyDownProp = (0,Z32BISHQ/* useBooleanEvent */.O4)(preventScrollOnKeyDown);
    const moveOnKeyPressProp = (0,Z32BISHQ/* useBooleanEvent */.O4)(moveOnKeyPress);
    const onKeyDown = (0,Z32BISHQ/* useEvent */._q)((event) => {
      onKeyDownProp == null ? void 0 : onKeyDownProp(event);
      if (event.defaultPrevented) return;
      if (!(0,events/* isSelfTarget */.uh)(event)) return;
      if (!store) return;
      const { currentTarget } = event;
      const state = store.getState();
      const item = store.item(id);
      const isGrid = !!(item == null ? void 0 : item.rowId);
      const isVertical = state.orientation !== "horizontal";
      const isHorizontal = state.orientation !== "vertical";
      const canHomeEnd = () => {
        if (isGrid) return true;
        if (isHorizontal) return true;
        if (!state.baseElement) return true;
        if (!(0,HWOIWM4O/* isTextField */.mB)(state.baseElement)) return true;
        return false;
      };
      const keyMap = {
        ArrowUp: (isGrid || isVertical) && store.up,
        ArrowRight: (isGrid || isHorizontal) && store.next,
        ArrowDown: (isGrid || isVertical) && store.down,
        ArrowLeft: (isGrid || isHorizontal) && store.previous,
        Home: () => {
          if (!canHomeEnd()) return;
          if (!isGrid || event.ctrlKey) {
            return store == null ? void 0 : store.first();
          }
          return store == null ? void 0 : store.previous(-1);
        },
        End: () => {
          if (!canHomeEnd()) return;
          if (!isGrid || event.ctrlKey) {
            return store == null ? void 0 : store.last();
          }
          return store == null ? void 0 : store.next(-1);
        },
        PageUp: () => {
          return findNextPageItemId(currentTarget, store, store == null ? void 0 : store.up, true);
        },
        PageDown: () => {
          return findNextPageItemId(currentTarget, store, store == null ? void 0 : store.down);
        }
      };
      const action = keyMap[event.key];
      if (action) {
        if ((0,HWOIWM4O/* isTextbox */.Bj)(currentTarget)) {
          const selection = (0,HWOIWM4O/* getTextboxSelection */.Zy)(currentTarget);
          const isLeft = isHorizontal && event.key === "ArrowLeft";
          const isRight = isHorizontal && event.key === "ArrowRight";
          const isUp = isVertical && event.key === "ArrowUp";
          const isDown = isVertical && event.key === "ArrowDown";
          if (isRight || isDown) {
            const { length: valueLength } = (0,HWOIWM4O/* getTextboxValue */.Mk)(currentTarget);
            if (selection.end !== valueLength) return;
          } else if ((isLeft || isUp) && selection.start !== 0) return;
        }
        const nextId = action();
        if (preventScrollOnKeyDownProp(event) || nextId !== void 0) {
          if (!moveOnKeyPressProp(event)) return;
          event.preventDefault();
          store.move(nextId);
        }
      }
    });
    const baseElement = (0,_2GXGCHW6/* useStoreState */.O$)(
      store,
      (state) => (state == null ? void 0 : state.baseElement) || void 0
    );
    const providerValue = (0,react.useMemo)(
      () => ({ id, baseElement }),
      [id, baseElement]
    );
    props = (0,Z32BISHQ/* useWrapElement */.w7)(
      props,
      (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(CompositeItemContext.Provider, { value: providerValue, children: element }),
      [providerValue]
    );
    const isActiveItem = (0,_2GXGCHW6/* useStoreState */.O$)(
      store,
      (state) => !!state && state.activeId === id
    );
    const ariaSetSize = (0,_2GXGCHW6/* useStoreState */.O$)(store, (state) => {
      if (ariaSetSizeProp != null) return ariaSetSizeProp;
      if (!state) return;
      if (!(row == null ? void 0 : row.ariaSetSize)) return;
      if (row.baseElement !== state.baseElement) return;
      return row.ariaSetSize;
    });
    const ariaPosInSet = (0,_2GXGCHW6/* useStoreState */.O$)(store, (state) => {
      if (ariaPosInSetProp != null) return ariaPosInSetProp;
      if (!state) return;
      if (!(row == null ? void 0 : row.ariaPosInSet)) return;
      if (row.baseElement !== state.baseElement) return;
      const itemsInRow = state.renderedItems.filter(
        (item) => item.rowId === rowId
      );
      return row.ariaPosInSet + itemsInRow.findIndex((item) => item.id === id);
    });
    const isTabbable = (0,_2GXGCHW6/* useStoreState */.O$)(store, (state) => {
      if (!(state == null ? void 0 : state.renderedItems.length)) return true;
      if (state.virtualFocus) return false;
      if (tabbable) return true;
      return state.activeId === id;
    });
    props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      id,
      "data-active-item": isActiveItem || void 0
    }, props), {
      ref: (0,Z32BISHQ/* useMergeRefs */.SV)(ref, props.ref),
      tabIndex: isTabbable ? props.tabIndex : -1,
      onFocus,
      onBlurCapture,
      onKeyDown
    });
    props = useCommand(props);
    props = useCollectionItem((0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      store
    }, props), {
      getItem,
      shouldRegisterItem: id ? props.shouldRegisterItem : false
    }));
    return (0,PBFD2E7P/* removeUndefinedValues */.HR)((0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
      "aria-setsize": ariaSetSize,
      "aria-posinset": ariaPosInSet
    }));
  }
);
var _3CCTMYB6_CompositeItem = (0,HKOOKEDE/* memo */.ph)(
  (0,HKOOKEDE/* forwardRef */.Rf)(function CompositeItem2(props) {
    const htmlProps = useCompositeItem(props);
    return (0,HKOOKEDE/* createElement */.n)(_3CCTMYB6_TagName, htmlProps);
  })
);



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/6BE7QOX5.js
"use client";





// src/composite/composite-row.tsx



var _6BE7QOX5_TagName = "div";
var useCompositeRow = (0,HKOOKEDE/* createHook */.ab)(
  function useCompositeRow2(_a) {
    var _b = _a, {
      store,
      "aria-setsize": ariaSetSize,
      "aria-posinset": ariaPosInSet
    } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, [
      "store",
      "aria-setsize",
      "aria-posinset"
    ]);
    const context = useCompositeContext();
    store = store || context;
    (0,PBFD2E7P/* invariant */.V1)(
      store,
       false && 0
    );
    const id = (0,Z32BISHQ/* useId */.Bi)(props.id);
    const baseElement = store.useState(
      (state) => state.baseElement || void 0
    );
    const providerValue = (0,react.useMemo)(
      () => ({ id, baseElement, ariaSetSize, ariaPosInSet }),
      [id, baseElement, ariaSetSize, ariaPosInSet]
    );
    props = (0,Z32BISHQ/* useWrapElement */.w7)(
      props,
      (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(CompositeRowContext.Provider, { value: providerValue, children: element }),
      [providerValue]
    );
    props = (0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({ id }, props);
    return (0,PBFD2E7P/* removeUndefinedValues */.HR)(props);
  }
);
var _6BE7QOX5_CompositeRow = (0,HKOOKEDE/* forwardRef */.Rf)(function CompositeRow2(props) {
  const htmlProps = useCompositeRow(props);
  return (0,HKOOKEDE/* createElement */.n)(_6BE7QOX5_TagName, htmlProps);
});



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/utils/focus.js
var utils_focus = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/utils/focus.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/OBZMLI6J.js
"use client";





// src/composite/composite-hover.tsx




var OBZMLI6J_TagName = "div";
function getMouseDestination(event) {
  const relatedTarget = event.relatedTarget;
  if ((relatedTarget == null ? void 0 : relatedTarget.nodeType) === Node.ELEMENT_NODE) {
    return relatedTarget;
  }
  return null;
}
function hoveringInside(event) {
  const nextElement = getMouseDestination(event);
  if (!nextElement) return false;
  return (0,HWOIWM4O/* contains */.gR)(event.currentTarget, nextElement);
}
var OBZMLI6J_symbol = Symbol("composite-hover");
function movingToAnotherItem(event) {
  let dest = getMouseDestination(event);
  if (!dest) return false;
  do {
    if ((0,PBFD2E7P/* hasOwnProperty */.mQ)(dest, OBZMLI6J_symbol) && dest[OBZMLI6J_symbol]) return true;
    dest = dest.parentElement;
  } while (dest);
  return false;
}
var useCompositeHover = (0,HKOOKEDE/* createHook */.ab)(
  function useCompositeHover2(_a) {
    var _b = _a, {
      store,
      focusOnHover = true,
      blurOnHoverEnd = !!focusOnHover
    } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, [
      "store",
      "focusOnHover",
      "blurOnHoverEnd"
    ]);
    const context = useCompositeContext();
    store = store || context;
    (0,PBFD2E7P/* invariant */.V1)(
      store,
       false && 0
    );
    const isMouseMoving = (0,Z32BISHQ/* useIsMouseMoving */.P$)();
    const onMouseMoveProp = props.onMouseMove;
    const focusOnHoverProp = (0,Z32BISHQ/* useBooleanEvent */.O4)(focusOnHover);
    const onMouseMove = (0,Z32BISHQ/* useEvent */._q)((event) => {
      onMouseMoveProp == null ? void 0 : onMouseMoveProp(event);
      if (event.defaultPrevented) return;
      if (!isMouseMoving()) return;
      if (!focusOnHoverProp(event)) return;
      if (!(0,utils_focus/* hasFocusWithin */.oW)(event.currentTarget)) {
        const baseElement = store == null ? void 0 : store.getState().baseElement;
        if (baseElement && !(0,utils_focus/* hasFocus */.AJ)(baseElement)) {
          baseElement.focus();
        }
      }
      store == null ? void 0 : store.setActiveId(event.currentTarget.id);
    });
    const onMouseLeaveProp = props.onMouseLeave;
    const blurOnHoverEndProp = (0,Z32BISHQ/* useBooleanEvent */.O4)(blurOnHoverEnd);
    const onMouseLeave = (0,Z32BISHQ/* useEvent */._q)((event) => {
      var _a2;
      onMouseLeaveProp == null ? void 0 : onMouseLeaveProp(event);
      if (event.defaultPrevented) return;
      if (!isMouseMoving()) return;
      if (hoveringInside(event)) return;
      if (movingToAnotherItem(event)) return;
      if (!focusOnHoverProp(event)) return;
      if (!blurOnHoverEndProp(event)) return;
      store == null ? void 0 : store.setActiveId(null);
      (_a2 = store == null ? void 0 : store.getState().baseElement) == null ? void 0 : _a2.focus();
    });
    const ref = (0,react.useCallback)((element) => {
      if (!element) return;
      element[OBZMLI6J_symbol] = true;
    }, []);
    props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
      ref: (0,Z32BISHQ/* useMergeRefs */.SV)(ref, props.ref),
      onMouseMove,
      onMouseLeave
    });
    return (0,PBFD2E7P/* removeUndefinedValues */.HR)(props);
  }
);
var OBZMLI6J_CompositeHover = (0,HKOOKEDE/* memo */.ph)(
  (0,HKOOKEDE/* forwardRef */.Rf)(function CompositeHover2(props) {
    const htmlProps = useCompositeHover(props);
    return (0,HKOOKEDE/* createElement */.n)(OBZMLI6J_TagName, htmlProps);
  })
);



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/DS36B3MQ.js
"use client";






// src/composite/composite-typeahead.tsx




var DS36B3MQ_TagName = "div";
var chars = "";
function clearChars() {
  chars = "";
}
function isValidTypeaheadEvent(event) {
  const target = event.target;
  if (target && (0,HWOIWM4O/* isTextField */.mB)(target)) return false;
  if (event.key === " " && chars.length) return true;
  return event.key.length === 1 && !event.ctrlKey && !event.altKey && !event.metaKey && /^[\p{Letter}\p{Number}]$/u.test(event.key);
}
function isSelfTargetOrItem(event, items) {
  if ((0,events/* isSelfTarget */.uh)(event)) return true;
  const target = event.target;
  if (!target) return false;
  const isItem = items.some((item) => item.element === target);
  return isItem;
}
function DS36B3MQ_getEnabledItems(items) {
  return items.filter((item) => !item.disabled);
}
function itemTextStartsWith(item, text) {
  var _a;
  const itemText = ((_a = item.element) == null ? void 0 : _a.textContent) || item.children || // The composite item object itself doesn't include a value property, but
  // other components like Select do. Since CompositeTypeahead is a generic
  // component that can be used with those as well, we also consider the value
  // property as a fallback for the typeahead text content.
  "value" in item && item.value;
  if (!itemText) return false;
  return (0,PBFD2E7P/* normalizeString */.J2)(itemText).trim().toLowerCase().startsWith(text.toLowerCase());
}
function getSameInitialItems(items, char, activeId) {
  if (!activeId) return items;
  const activeItem = items.find((item) => item.id === activeId);
  if (!activeItem) return items;
  if (!itemTextStartsWith(activeItem, char)) return items;
  if (chars !== char && itemTextStartsWith(activeItem, chars)) return items;
  chars = char;
  return _5VQZOHHZ_flipItems(
    items.filter((item) => itemTextStartsWith(item, chars)),
    activeId
  ).filter((item) => item.id !== activeId);
}
var useCompositeTypeahead = (0,HKOOKEDE/* createHook */.ab)(function useCompositeTypeahead2(_a) {
  var _b = _a, { store, typeahead = true } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, ["store", "typeahead"]);
  const context = useCompositeContext();
  store = store || context;
  (0,PBFD2E7P/* invariant */.V1)(
    store,
     false && 0
  );
  const onKeyDownCaptureProp = props.onKeyDownCapture;
  const cleanupTimeoutRef = (0,react.useRef)(0);
  const onKeyDownCapture = (0,Z32BISHQ/* useEvent */._q)((event) => {
    onKeyDownCaptureProp == null ? void 0 : onKeyDownCaptureProp(event);
    if (event.defaultPrevented) return;
    if (!typeahead) return;
    if (!store) return;
    const { renderedItems, items, activeId } = store.getState();
    if (!isValidTypeaheadEvent(event)) return clearChars();
    let enabledItems = DS36B3MQ_getEnabledItems(
      renderedItems.length ? renderedItems : items
    );
    if (!isSelfTargetOrItem(event, enabledItems)) return clearChars();
    event.preventDefault();
    window.clearTimeout(cleanupTimeoutRef.current);
    cleanupTimeoutRef.current = window.setTimeout(() => {
      chars = "";
    }, 500);
    const char = event.key.toLowerCase();
    chars += char;
    enabledItems = getSameInitialItems(enabledItems, char, activeId);
    const item = enabledItems.find((item2) => itemTextStartsWith(item2, chars));
    if (item) {
      store.move(item.id);
    } else {
      clearChars();
    }
  });
  props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
    onKeyDownCapture
  });
  return (0,PBFD2E7P/* removeUndefinedValues */.HR)(props);
});
var DS36B3MQ_CompositeTypeahead = (0,HKOOKEDE/* forwardRef */.Rf)(function CompositeTypeahead2(props) {
  const htmlProps = useCompositeTypeahead(props);
  return (0,HKOOKEDE/* createElement */.n)(DS36B3MQ_TagName, htmlProps);
});



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/TW35PKTK.js
"use client";







// src/composite/composite.tsx







var TW35PKTK_TagName = "div";
function isGrid(items) {
  return items.some((item) => !!item.rowId);
}
function isPrintableKey(event) {
  const target = event.target;
  if (target && !(0,HWOIWM4O/* isTextField */.mB)(target)) return false;
  return event.key.length === 1 && !event.ctrlKey && !event.metaKey;
}
function isModifierKey(event) {
  return event.key === "Shift" || event.key === "Control" || event.key === "Alt" || event.key === "Meta";
}
function useKeyboardEventProxy(store, onKeyboardEvent, previousElementRef) {
  return (0,Z32BISHQ/* useEvent */._q)((event) => {
    var _a;
    onKeyboardEvent == null ? void 0 : onKeyboardEvent(event);
    if (event.defaultPrevented) return;
    if (event.isPropagationStopped()) return;
    if (!(0,events/* isSelfTarget */.uh)(event)) return;
    if (isModifierKey(event)) return;
    if (isPrintableKey(event)) return;
    const state = store.getState();
    const activeElement = (_a = getEnabledItem(store, state.activeId)) == null ? void 0 : _a.element;
    if (!activeElement) return;
    const _b = event, { view } = _b, eventInit = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, ["view"]);
    const previousElement = previousElementRef == null ? void 0 : previousElementRef.current;
    if (activeElement !== previousElement) {
      activeElement.focus();
    }
    if (!(0,events/* fireKeyboardEvent */.sz)(activeElement, event.type, eventInit)) {
      event.preventDefault();
    }
    if (event.currentTarget.contains(activeElement)) {
      event.stopPropagation();
    }
  });
}
function findFirstEnabledItemInTheLastRow(items) {
  return _5VQZOHHZ_findFirstEnabledItem(
    flatten2DArray(reverseArray(_5VQZOHHZ_groupItemsByRows(items)))
  );
}
function useScheduleFocus(store) {
  const [scheduled, setScheduled] = (0,react.useState)(false);
  const schedule = (0,react.useCallback)(() => setScheduled(true), []);
  const activeItem = store.useState(
    (state) => getEnabledItem(store, state.activeId)
  );
  (0,react.useEffect)(() => {
    const activeElement = activeItem == null ? void 0 : activeItem.element;
    if (!scheduled) return;
    if (!activeElement) return;
    setScheduled(false);
    activeElement.focus({ preventScroll: true });
  }, [activeItem, scheduled]);
  return schedule;
}
var useComposite = (0,HKOOKEDE/* createHook */.ab)(
  function useComposite2(_a) {
    var _b = _a, {
      store,
      composite = true,
      focusOnMove = composite,
      moveOnKeyPress = true
    } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, [
      "store",
      "composite",
      "focusOnMove",
      "moveOnKeyPress"
    ]);
    const context = useCompositeProviderContext();
    store = store || context;
    (0,PBFD2E7P/* invariant */.V1)(
      store,
       false && 0
    );
    const ref = (0,react.useRef)(null);
    const previousElementRef = (0,react.useRef)(null);
    const scheduleFocus = useScheduleFocus(store);
    const moves = store.useState("moves");
    const [, setBaseElement] = (0,Z32BISHQ/* useTransactionState */.XB)(
      composite ? store.setBaseElement : null
    );
    (0,react.useEffect)(() => {
      var _a2;
      if (!store) return;
      if (!moves) return;
      if (!composite) return;
      if (!focusOnMove) return;
      const { activeId: activeId2 } = store.getState();
      const itemElement = (_a2 = getEnabledItem(store, activeId2)) == null ? void 0 : _a2.element;
      if (!itemElement) return;
      (0,utils_focus/* focusIntoView */.WA)(itemElement);
    }, [store, moves, composite, focusOnMove]);
    (0,Z32BISHQ/* useSafeLayoutEffect */.UQ)(() => {
      if (!store) return;
      if (!moves) return;
      if (!composite) return;
      const { baseElement, activeId: activeId2 } = store.getState();
      const isSelfAcive = activeId2 === null;
      if (!isSelfAcive) return;
      if (!baseElement) return;
      const previousElement = previousElementRef.current;
      previousElementRef.current = null;
      if (previousElement) {
        (0,events/* fireBlurEvent */.c$)(previousElement, { relatedTarget: baseElement });
      }
      if (!(0,utils_focus/* hasFocus */.AJ)(baseElement)) {
        baseElement.focus();
      }
    }, [store, moves, composite]);
    const activeId = store.useState("activeId");
    const virtualFocus = store.useState("virtualFocus");
    (0,Z32BISHQ/* useSafeLayoutEffect */.UQ)(() => {
      var _a2;
      if (!store) return;
      if (!composite) return;
      if (!virtualFocus) return;
      const previousElement = previousElementRef.current;
      previousElementRef.current = null;
      if (!previousElement) return;
      const activeElement = (_a2 = getEnabledItem(store, activeId)) == null ? void 0 : _a2.element;
      const relatedTarget = activeElement || (0,HWOIWM4O/* getActiveElement */.bq)(previousElement);
      if (relatedTarget === previousElement) return;
      (0,events/* fireBlurEvent */.c$)(previousElement, { relatedTarget });
    }, [store, activeId, virtualFocus, composite]);
    const onKeyDownCapture = useKeyboardEventProxy(
      store,
      props.onKeyDownCapture,
      previousElementRef
    );
    const onKeyUpCapture = useKeyboardEventProxy(
      store,
      props.onKeyUpCapture,
      previousElementRef
    );
    const onFocusCaptureProp = props.onFocusCapture;
    const onFocusCapture = (0,Z32BISHQ/* useEvent */._q)((event) => {
      onFocusCaptureProp == null ? void 0 : onFocusCaptureProp(event);
      if (event.defaultPrevented) return;
      if (!store) return;
      const { virtualFocus: virtualFocus2 } = store.getState();
      if (!virtualFocus2) return;
      const previousActiveElement = event.relatedTarget;
      const isSilentlyFocused = silentlyFocused(event.currentTarget);
      if ((0,events/* isSelfTarget */.uh)(event) && isSilentlyFocused) {
        event.stopPropagation();
        previousElementRef.current = previousActiveElement;
      }
    });
    const onFocusProp = props.onFocus;
    const onFocus = (0,Z32BISHQ/* useEvent */._q)((event) => {
      onFocusProp == null ? void 0 : onFocusProp(event);
      if (event.defaultPrevented) return;
      if (!composite) return;
      if (!store) return;
      const { relatedTarget } = event;
      const { virtualFocus: virtualFocus2 } = store.getState();
      if (virtualFocus2) {
        if ((0,events/* isSelfTarget */.uh)(event) && !isItem(store, relatedTarget)) {
          queueMicrotask(scheduleFocus);
        }
      } else if ((0,events/* isSelfTarget */.uh)(event)) {
        store.setActiveId(null);
      }
    });
    const onBlurCaptureProp = props.onBlurCapture;
    const onBlurCapture = (0,Z32BISHQ/* useEvent */._q)((event) => {
      var _a2;
      onBlurCaptureProp == null ? void 0 : onBlurCaptureProp(event);
      if (event.defaultPrevented) return;
      if (!store) return;
      const { virtualFocus: virtualFocus2, activeId: activeId2 } = store.getState();
      if (!virtualFocus2) return;
      const activeElement = (_a2 = getEnabledItem(store, activeId2)) == null ? void 0 : _a2.element;
      const nextActiveElement = event.relatedTarget;
      const nextActiveElementIsItem = isItem(store, nextActiveElement);
      const previousElement = previousElementRef.current;
      previousElementRef.current = null;
      if ((0,events/* isSelfTarget */.uh)(event) && nextActiveElementIsItem) {
        if (nextActiveElement === activeElement) {
          if (previousElement && previousElement !== nextActiveElement) {
            (0,events/* fireBlurEvent */.c$)(previousElement, event);
          }
        } else if (activeElement) {
          (0,events/* fireBlurEvent */.c$)(activeElement, event);
        } else if (previousElement) {
          (0,events/* fireBlurEvent */.c$)(previousElement, event);
        }
        event.stopPropagation();
      } else {
        const targetIsItem = isItem(store, event.target);
        if (!targetIsItem && activeElement) {
          (0,events/* fireBlurEvent */.c$)(activeElement, event);
        }
      }
    });
    const onKeyDownProp = props.onKeyDown;
    const moveOnKeyPressProp = (0,Z32BISHQ/* useBooleanEvent */.O4)(moveOnKeyPress);
    const onKeyDown = (0,Z32BISHQ/* useEvent */._q)((event) => {
      var _a2;
      onKeyDownProp == null ? void 0 : onKeyDownProp(event);
      if (event.defaultPrevented) return;
      if (!store) return;
      if (!(0,events/* isSelfTarget */.uh)(event)) return;
      const { orientation, items, renderedItems, activeId: activeId2 } = store.getState();
      const activeItem = getEnabledItem(store, activeId2);
      if ((_a2 = activeItem == null ? void 0 : activeItem.element) == null ? void 0 : _a2.isConnected) return;
      const isVertical = orientation !== "horizontal";
      const isHorizontal = orientation !== "vertical";
      const grid = isGrid(renderedItems);
      const isHorizontalKey = event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "Home" || event.key === "End";
      if (isHorizontalKey && (0,HWOIWM4O/* isTextField */.mB)(event.currentTarget)) return;
      const up = () => {
        if (grid) {
          const item = items && findFirstEnabledItemInTheLastRow(items);
          return item == null ? void 0 : item.id;
        }
        return store == null ? void 0 : store.last();
      };
      const keyMap = {
        ArrowUp: (grid || isVertical) && up,
        ArrowRight: (grid || isHorizontal) && store.first,
        ArrowDown: (grid || isVertical) && store.first,
        ArrowLeft: (grid || isHorizontal) && store.last,
        Home: store.first,
        End: store.last,
        PageUp: store.first,
        PageDown: store.last
      };
      const action = keyMap[event.key];
      if (action) {
        const id = action();
        if (id !== void 0) {
          if (!moveOnKeyPressProp(event)) return;
          event.preventDefault();
          store.move(id);
        }
      }
    });
    props = (0,Z32BISHQ/* useWrapElement */.w7)(
      props,
      (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(CompositeContextProvider, { value: store, children: element }),
      [store]
    );
    const activeDescendant = store.useState((state) => {
      var _a2;
      if (!store) return;
      if (!composite) return;
      if (!state.virtualFocus) return;
      return (_a2 = getEnabledItem(store, state.activeId)) == null ? void 0 : _a2.id;
    });
    props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      "aria-activedescendant": activeDescendant
    }, props), {
      ref: (0,Z32BISHQ/* useMergeRefs */.SV)(ref, setBaseElement, props.ref),
      onKeyDownCapture,
      onKeyUpCapture,
      onFocusCapture,
      onFocus,
      onBlurCapture,
      onKeyDown
    });
    const focusable = store.useState(
      (state) => composite && (state.virtualFocus || state.activeId === null)
    );
    props = (0,HGZKAGPL/* useFocusable */.W)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({ focusable }, props));
    return props;
  }
);
var TW35PKTK_Composite = (0,HKOOKEDE/* forwardRef */.Rf)(function Composite2(props) {
  const htmlProps = useComposite(props);
  return (0,HKOOKEDE/* createElement */.n)(TW35PKTK_TagName, htmlProps);
});



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/composite/context.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

const CompositeContext = (0,react.createContext)(undefined);
const context_useCompositeContext = () => (0,react.useContext)(CompositeContext);
//# sourceMappingURL=context.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/composite/index.js
/**
 * Composite is a component that may contain navigable items represented by
 * Composite.Item. It's inspired by the WAI-ARIA Composite Role and implements
 * all the keyboard navigation mechanisms to ensure that there's only one
 * tab stop for the whole Composite element. This means that it can behave as
 * a roving tabindex or aria-activedescendant container.
 *
 * @see https://ariakit.org/components/composite
 */

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



/**
 * Creates a composite store.
 *
 * @example
 * ```jsx
 * import { Composite, useCompositeStore } from '@wordpress/components';
 *
 * const store = useCompositeStore();
 * <Composite store={store}>
 *   <Composite.Item>Item</Composite.Item>
 *   <Composite.Item>Item</Composite.Item>
 *   <Composite.Item>Item</Composite.Item>
 * </Composite>
 * ```
 */
function composite_useCompositeStore({
  focusLoop = false,
  focusWrap = false,
  focusShift = false,
  virtualFocus = false,
  orientation = 'both',
  rtl = false,
  ...props
} = {}) {
  return useCompositeStore({
    focusLoop,
    focusWrap,
    focusShift,
    virtualFocus,
    orientation,
    rtl,
    ...props
  });
}
const composite_Group = (0,react.forwardRef)(function CompositeGroup(props, ref) {
  const context = context_useCompositeContext();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(IEKMDIUY_CompositeGroup, {
    store: context?.store,
    ...props,
    ref: ref
  });
});
composite_Group.displayName = 'Composite.Group';
const composite_GroupLabel = (0,react.forwardRef)(function CompositeGroupLabel(props, ref) {
  const context = context_useCompositeContext();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Y2MAXF6C_CompositeGroupLabel, {
    store: context?.store,
    ...props,
    ref: ref
  });
});
composite_GroupLabel.displayName = 'Composite.GroupLabel';
const Item = (0,react.forwardRef)(function CompositeItem(props, ref) {
  const context = context_useCompositeContext();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(_3CCTMYB6_CompositeItem, {
    store: context?.store,
    ...props,
    ref: ref
  });
});
Item.displayName = 'Composite.Item';
const Row = (0,react.forwardRef)(function CompositeRow(props, ref) {
  const context = context_useCompositeContext();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(_6BE7QOX5_CompositeRow, {
    store: context?.store,
    ...props,
    ref: ref
  });
});
Row.displayName = 'Composite.Row';
const Hover = (0,react.forwardRef)(function CompositeHover(props, ref) {
  const context = context_useCompositeContext();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(OBZMLI6J_CompositeHover, {
    store: context?.store,
    ...props,
    ref: ref
  });
});
Hover.displayName = 'Composite.Hover';
const Typeahead = (0,react.forwardRef)(function CompositeTypeahead(props, ref) {
  const context = context_useCompositeContext();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(DS36B3MQ_CompositeTypeahead, {
    store: context?.store,
    ...props,
    ref: ref
  });
});
Typeahead.displayName = 'Composite.Typeahead';

/**
 * Renders a widget based on the WAI-ARIA [`composite`](https://w3c.github.io/aria/#composite)
 * role, which provides a single tab stop on the page and arrow key navigation
 * through the focusable descendants.
 *
 * @example
 * ```jsx
 * import { Composite, useCompositeStore } from '@wordpress/components';
 *
 * const store = useCompositeStore();
 * <Composite store={store}>
 *   <Composite.Item>Item 1</Composite.Item>
 *   <Composite.Item>Item 2</Composite.Item>
 * </Composite>
 * ```
 */
const Composite = Object.assign((0,react.forwardRef)(function Composite({
  children,
  store,
  disabled = false,
  ...props
}, ref) {
  const contextValue = (0,react.useMemo)(() => ({
    store
  }), [store]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TW35PKTK_Composite, {
    disabled: disabled,
    store: store,
    ...props,
    ref: ref,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(CompositeContext.Provider, {
      value: contextValue,
      children: children
    })
  });
}), {
  displayName: 'Composite',
  /**
   * Renders a group element for composite items.
   *
   * @example
   * ```jsx
   * import { Composite, useCompositeStore } from '@wordpress/components';
   *
   * const store = useCompositeStore();
   * <Composite store={store}>
   *   <Composite.Group>
   *     <Composite.GroupLabel>Label</Composite.GroupLabel>
   *     <Composite.Item>Item 1</Composite.Item>
   *     <Composite.Item>Item 2</Composite.Item>
   *   </CompositeGroup>
   * </Composite>
   * ```
   */
  Group: composite_Group,
  /**
   * Renders a label in a composite group. This component must be wrapped with
   * `Composite.Group` so the `aria-labelledby` prop is properly set on the
   * composite group element.
   *
   * @example
   * ```jsx
   * import { Composite, useCompositeStore } from '@wordpress/components';
   *
   * const store = useCompositeStore();
   * <Composite store={store}>
   *   <Composite.Group>
   *     <Composite.GroupLabel>Label</Composite.GroupLabel>
   *     <Composite.Item>Item 1</Composite.Item>
   *     <Composite.Item>Item 2</Composite.Item>
   *   </CompositeGroup>
   * </Composite>
   * ```
   */
  GroupLabel: composite_GroupLabel,
  /**
   * Renders a composite item.
   *
   * @example
   * ```jsx
   * import { Composite, useCompositeStore } from '@wordpress/components';
   *
   * const store = useCompositeStore();
   * <Composite store={store}>
   *   <Composite.Item>Item 1</Composite.Item>
   *   <Composite.Item>Item 2</Composite.Item>
   *   <Composite.Item>Item 3</Composite.Item>
   * </Composite>
   * ```
   */
  Item,
  /**
   * Renders a composite row. Wrapping `Composite.Item` elements within
   * `Composite.Row` will create a two-dimensional composite widget, such as a
   * grid.
   *
   * @example
   * ```jsx
   * import { Composite, useCompositeStore } from '@wordpress/components';
   *
   * const store = useCompositeStore();
   * <Composite store={store}>
   *   <Composite.Row>
   *     <Composite.Item>Item 1.1</Composite.Item>
   *     <Composite.Item>Item 1.2</Composite.Item>
   *     <Composite.Item>Item 1.3</Composite.Item>
   *   </Composite.Row>
   *   <Composite.Row>
   *     <Composite.Item>Item 2.1</Composite.Item>
   *     <Composite.Item>Item 2.2</Composite.Item>
   *     <Composite.Item>Item 2.3</Composite.Item>
   *   </Composite.Row>
   * </Composite>
   * ```
   */
  Row,
  /**
   * Renders an element in a composite widget that receives focus on mouse move
   * and loses focus to the composite base element on mouse leave. This should
   * be combined with the `Composite.Item` component.
   *
   * @example
   * ```jsx
   * import { Composite, useCompositeStore } from '@wordpress/components';
   *
   * const store = useCompositeStore();
   * <Composite store={store}>
   *   <Composite.Hover render={ <Composite.Item /> }>
   *     Item 1
   *   </Composite.Hover>
   *   <Composite.Hover render={ <Composite.Item /> }>
   *     Item 2
   *   </Composite.Hover>
   * </Composite>
   * ```
   */
  Hover,
  /**
   * Renders a component that adds typeahead functionality to composite
   * components. Hitting printable character keys will move focus to the next
   * composite item that begins with the input characters.
   *
   * @example
   * ```jsx
   * import { Composite, useCompositeStore } from '@wordpress/components';
   *
   * const store = useCompositeStore();
   * <Composite store={store} render={ <CompositeTypeahead /> }>
   *   <Composite.Item>Item 1</Composite.Item>
   *   <Composite.Item>Item 2</Composite.Item>
   * </Composite>
   * ```
   */
  Typeahead,
  /**
   * The React context used by the composite components. It can be used by
   * to access the composite store, and to forward the context when composite
   * sub-components are rendered across portals (ie. `SlotFill` components)
   * that would not otherwise forward the context to the `Fill` children.
   *
   * @example
   * ```jsx
   * import { Composite } from '@wordpress/components';
   * import { useContext } from '@wordpress/element';
   *
   * const compositeContext = useContext( Composite.Context );
   * ```
   */
  Context: CompositeContext
});
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/popover/utils.js
var utils = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/popover/utils.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/slot-fill/index.js + 7 modules
var slot_fill = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/slot-fill/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/CTQR3VDU.js
var CTQR3VDU = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/CTQR3VDU.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/LG4RFBHV.js
"use client";





// src/menu/menu-context.tsx

var menu = (0,HKOOKEDE/* createStoreContext */.B0)(
  [CompositeContextProvider, CTQR3VDU/* HovercardContextProvider */.pR],
  [CompositeScopedContextProvider, CTQR3VDU/* HovercardScopedContextProvider */.n0]
);
var useMenuContext = menu.useContext;
var useMenuScopedContext = menu.useScopedContext;
var useMenuProviderContext = menu.useProviderContext;
var MenuContextProvider = menu.ContextProvider;
var MenuScopedContextProvider = menu.ScopedContextProvider;
var useMenuBarContext = (/* unused pure expression or super */ null && (useMenubarContext));
var useMenuBarScopedContext = (/* unused pure expression or super */ null && (useMenubarScopedContext));
var useMenuBarProviderContext = (/* unused pure expression or super */ null && (useMenubarProviderContext));
var MenuBarContextProvider = (/* unused pure expression or super */ null && (MenubarContextProvider));
var MenuBarScopedContextProvider = (/* unused pure expression or super */ null && (MenubarScopedContextProvider));
var MenuItemCheckedContext = (0,react.createContext)(
  void 0
);



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/EYKMH5G5.js
"use client";

// src/checkbox/checkbox-checked-context.tsx

var CheckboxCheckedContext = (0,react.createContext)(false);



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/RPLYUYNN.js
"use client";




// src/checkbox/checkbox-check.tsx



var RPLYUYNN_TagName = "span";
var checkmark = /* @__PURE__ */ (0,jsx_runtime.jsx)(
  "svg",
  {
    display: "block",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    viewBox: "0 0 16 16",
    height: "1em",
    width: "1em",
    children: /* @__PURE__ */ (0,jsx_runtime.jsx)("polyline", { points: "4,8 7,12 12,4" })
  }
);
function getChildren(props) {
  if (props.checked) {
    return props.children || checkmark;
  }
  if (typeof props.children === "function") {
    return props.children;
  }
  return null;
}
var useCheckboxCheck = (0,HKOOKEDE/* createHook */.ab)(
  function useCheckboxCheck2(_a) {
    var _b = _a, { store, checked } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, ["store", "checked"]);
    const context = (0,react.useContext)(CheckboxCheckedContext);
    checked = checked != null ? checked : context;
    const children = getChildren({ checked, children: props.children });
    props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      "aria-hidden": true
    }, props), {
      children,
      style: (0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
        width: "1em",
        height: "1em",
        pointerEvents: "none"
      }, props.style)
    });
    return (0,PBFD2E7P/* removeUndefinedValues */.HR)(props);
  }
);
var CheckboxCheck = (0,HKOOKEDE/* forwardRef */.Rf)(function CheckboxCheck2(props) {
  const htmlProps = useCheckboxCheck(props);
  return (0,HKOOKEDE/* createElement */.n)(RPLYUYNN_TagName, htmlProps);
});



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/menu/menu-item-check.js
"use client";















// src/menu/menu-item-check.tsx

var menu_item_check_TagName = "span";
var useMenuItemCheck = (0,HKOOKEDE/* createHook */.ab)(
  function useMenuItemCheck2(_a) {
    var _b = _a, { store, checked } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, ["store", "checked"]);
    const context = (0,react.useContext)(MenuItemCheckedContext);
    checked = checked != null ? checked : context;
    props = useCheckboxCheck((0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({}, props), { checked }));
    return props;
  }
);
var MenuItemCheck = (0,HKOOKEDE/* forwardRef */.Rf)(function MenuItemCheck2(props) {
  const htmlProps = useMenuItemCheck(props);
  return (0,HKOOKEDE/* createElement */.n)(menu_item_check_TagName, htmlProps);
});


;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/WSQNIDGC.js
"use client";



// src/menubar/menubar-context.tsx

var menubar = (0,HKOOKEDE/* createStoreContext */.B0)(
  [CompositeContextProvider],
  [CompositeScopedContextProvider]
);
var WSQNIDGC_useMenubarContext = menubar.useContext;
var WSQNIDGC_useMenubarScopedContext = menubar.useScopedContext;
var WSQNIDGC_useMenubarProviderContext = menubar.useProviderContext;
var WSQNIDGC_MenubarContextProvider = menubar.ContextProvider;
var WSQNIDGC_MenubarScopedContextProvider = menubar.ScopedContextProvider;
var WSQNIDGC_MenuItemCheckedContext = (0,react.createContext)(
  void 0
);



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/54MGSIOI.js
var _54MGSIOI = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/54MGSIOI.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/DWZ7E5TJ.js
"use client";




// src/combobox/combobox-context.tsx

var ComboboxListRoleContext = (0,react.createContext)(
  void 0
);
var DWZ7E5TJ_ctx = (0,HKOOKEDE/* createStoreContext */.B0)(
  [_54MGSIOI/* PopoverContextProvider */.wf, CompositeContextProvider],
  [_54MGSIOI/* PopoverScopedContextProvider */.s1, CompositeScopedContextProvider]
);
var useComboboxContext = DWZ7E5TJ_ctx.useContext;
var useComboboxScopedContext = DWZ7E5TJ_ctx.useScopedContext;
var useComboboxProviderContext = DWZ7E5TJ_ctx.useProviderContext;
var ComboboxContextProvider = DWZ7E5TJ_ctx.ContextProvider;
var ComboboxScopedContextProvider = DWZ7E5TJ_ctx.ScopedContextProvider;
var ComboboxItemValueContext = (0,react.createContext)(
  void 0
);
var ComboboxItemCheckedContext = (0,react.createContext)(false);



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/XMDAT5SM.js
var XMDAT5SM = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/XMDAT5SM.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/EACLTACN.js
var EACLTACN = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/EACLTACN.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/menu/menu-store.js
"use client";












// src/menu/menu-store.ts
function createMenuStore(_a = {}) {
  var _b = _a, {
    combobox,
    parent,
    menubar
  } = _b, props = (0,_3YLGPPWQ/* __objRest */.YG)(_b, [
    "combobox",
    "parent",
    "menubar"
  ]);
  const parentIsMenubar = !!menubar && !parent;
  const store = (0,EQQLU3CG/* mergeStore */.od)(
    props.store,
    (0,EQQLU3CG/* pick */.Up)(parent, ["values"]),
    (0,EQQLU3CG/* omit */.cJ)(combobox, [
      "arrowElement",
      "anchorElement",
      "contentElement",
      "popoverElement",
      "disclosureElement"
    ])
  );
  (0,EQQLU3CG/* throwOnConflictingProps */.UE)(props, store);
  const syncState = store.getState();
  const composite = createCompositeStore((0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
    store,
    orientation: (0,PBFD2E7P/* defaultValue */.Jh)(
      props.orientation,
      syncState.orientation,
      "vertical"
    )
  }));
  const hovercard = (0,EACLTACN/* createHovercardStore */.y)((0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
    store,
    placement: (0,PBFD2E7P/* defaultValue */.Jh)(
      props.placement,
      syncState.placement,
      "bottom-start"
    ),
    timeout: (0,PBFD2E7P/* defaultValue */.Jh)(
      props.timeout,
      syncState.timeout,
      parentIsMenubar ? 0 : 150
    ),
    hideTimeout: (0,PBFD2E7P/* defaultValue */.Jh)(props.hideTimeout, syncState.hideTimeout, 0)
  }));
  const initialState = (0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, composite.getState()), hovercard.getState()), {
    initialFocus: (0,PBFD2E7P/* defaultValue */.Jh)(syncState.initialFocus, "container"),
    values: (0,PBFD2E7P/* defaultValue */.Jh)(
      props.values,
      syncState.values,
      props.defaultValues,
      {}
    )
  });
  const menu = (0,EQQLU3CG/* createStore */.y$)(initialState, composite, hovercard, store);
  (0,EQQLU3CG/* setup */.mj)(
    menu,
    () => (0,EQQLU3CG/* sync */.OH)(menu, ["mounted"], (state) => {
      if (state.mounted) return;
      menu.setState("activeId", null);
    })
  );
  (0,EQQLU3CG/* setup */.mj)(
    menu,
    () => (0,EQQLU3CG/* sync */.OH)(parent, ["orientation"], (state) => {
      menu.setState(
        "placement",
        state.orientation === "vertical" ? "right-start" : "bottom-start"
      );
    })
  );
  return (0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)((0,_3YLGPPWQ/* __spreadValues */.IA)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, composite), hovercard), menu), {
    combobox,
    parent,
    menubar,
    hideAll: () => {
      hovercard.hide();
      parent == null ? void 0 : parent.hideAll();
    },
    setInitialFocus: (value) => menu.setState("initialFocus", value),
    setValues: (values) => menu.setState("values", values),
    setValue: (name, value) => {
      if (name === "__proto__") return;
      if (name === "constructor") return;
      if (Array.isArray(name)) return;
      menu.setState("values", (values) => {
        const prevValue = values[name];
        const nextValue = (0,PBFD2E7P/* applyState */.Qh)(value, prevValue);
        if (nextValue === prevValue) return values;
        return (0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, values), {
          [name]: nextValue !== void 0 && nextValue
        });
      });
    }
  });
}


;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/MS4VD4RJ.js
"use client";









// src/menu/menu-store.ts

function useMenuStoreProps(store, update, props) {
  (0,Z32BISHQ/* useUpdateEffect */.w5)(update, [props.combobox, props.parent, props.menubar]);
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "values", "setValues");
  return Object.assign(
    (0,XMDAT5SM/* useHovercardStoreProps */.B)(
      useCompositeStoreProps(store, update, props),
      update,
      props
    ),
    {
      combobox: props.combobox,
      parent: props.parent,
      menubar: props.menubar
    }
  );
}
function useMenuStore(props = {}) {
  const parent = useMenuContext();
  const menubar = WSQNIDGC_useMenubarContext();
  const combobox = useComboboxProviderContext();
  props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
    parent: props.parent !== void 0 ? props.parent : parent,
    menubar: props.menubar !== void 0 ? props.menubar : menubar,
    combobox: props.combobox !== void 0 ? props.combobox : combobox
  });
  const [store, update] = (0,_2GXGCHW6/* useStore */.Pj)(createMenuStore, props);
  return useMenuStoreProps(store, update, props);
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/3R3N43YO.js
"use client";





// src/button/button.tsx


var _3R3N43YO_TagName = "button";
var useButton = (0,HKOOKEDE/* createHook */.ab)(
  function useButton2(props) {
    const ref = (0,react.useRef)(null);
    const tagName = (0,Z32BISHQ/* useTagName */.vO)(ref, _3R3N43YO_TagName);
    const [isNativeButton, setIsNativeButton] = (0,react.useState)(
      () => !!tagName && (0,HWOIWM4O/* isButton */.Bm)({ tagName, type: props.type })
    );
    (0,react.useEffect)(() => {
      if (!ref.current) return;
      setIsNativeButton((0,HWOIWM4O/* isButton */.Bm)(ref.current));
    }, []);
    props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      role: !isNativeButton && tagName !== "a" ? "button" : void 0
    }, props), {
      ref: (0,Z32BISHQ/* useMergeRefs */.SV)(ref, props.ref)
    });
    props = useCommand(props);
    return props;
  }
);
var Button = (0,HKOOKEDE/* forwardRef */.Rf)(function Button2(props) {
  const htmlProps = useButton(props);
  return (0,HKOOKEDE/* createElement */.n)(_3R3N43YO_TagName, htmlProps);
});



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/RGUP62TM.js
var RGUP62TM = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/RGUP62TM.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/O3TNZQBF.js
"use client";






// src/disclosure/disclosure.tsx


var O3TNZQBF_TagName = "button";
var O3TNZQBF_symbol = Symbol("disclosure");
var useDisclosure = (0,HKOOKEDE/* createHook */.ab)(
  function useDisclosure2(_a) {
    var _b = _a, { store, toggleOnClick = true } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, ["store", "toggleOnClick"]);
    const context = (0,RGUP62TM/* useDisclosureProviderContext */.vO)();
    store = store || context;
    (0,PBFD2E7P/* invariant */.V1)(
      store,
       false && 0
    );
    const ref = (0,react.useRef)(null);
    const [expanded, setExpanded] = (0,react.useState)(false);
    const disclosureElement = store.useState("disclosureElement");
    const open = store.useState("open");
    (0,react.useEffect)(() => {
      let isCurrentDisclosure = disclosureElement === ref.current;
      if (!(disclosureElement == null ? void 0 : disclosureElement.isConnected)) {
        store == null ? void 0 : store.setDisclosureElement(ref.current);
        isCurrentDisclosure = true;
      }
      setExpanded(open && isCurrentDisclosure);
    }, [disclosureElement, store, open]);
    const onClickProp = props.onClick;
    const toggleOnClickProp = (0,Z32BISHQ/* useBooleanEvent */.O4)(toggleOnClick);
    const [isDuplicate, metadataProps] = (0,Z32BISHQ/* useMetadataProps */.P1)(props, O3TNZQBF_symbol, true);
    const onClick = (0,Z32BISHQ/* useEvent */._q)((event) => {
      onClickProp == null ? void 0 : onClickProp(event);
      if (event.defaultPrevented) return;
      if (isDuplicate) return;
      if (!toggleOnClickProp(event)) return;
      store == null ? void 0 : store.setDisclosureElement(event.currentTarget);
      store == null ? void 0 : store.toggle();
    });
    const contentElement = store.useState("contentElement");
    props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      "aria-expanded": expanded,
      "aria-controls": contentElement == null ? void 0 : contentElement.id
    }, metadataProps), props), {
      ref: (0,Z32BISHQ/* useMergeRefs */.SV)(ref, props.ref),
      onClick
    });
    props = useButton(props);
    return props;
  }
);
var Disclosure = (0,HKOOKEDE/* forwardRef */.Rf)(function Disclosure2(props) {
  const htmlProps = useDisclosure(props);
  return (0,HKOOKEDE/* createElement */.n)(O3TNZQBF_TagName, htmlProps);
});



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/DU4D3UCJ.js
var DU4D3UCJ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/DU4D3UCJ.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/KCVNYWKF.js
"use client";





// src/dialog/dialog-disclosure.tsx


var KCVNYWKF_TagName = "button";
var useDialogDisclosure = (0,HKOOKEDE/* createHook */.ab)(
  function useDialogDisclosure2(_a) {
    var _b = _a, { store } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, ["store"]);
    const context = (0,DU4D3UCJ/* useDialogProviderContext */.cH)();
    store = store || context;
    (0,PBFD2E7P/* invariant */.V1)(
      store,
       false && 0
    );
    const contentElement = store.useState("contentElement");
    props = (0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      "aria-haspopup": (0,HWOIWM4O/* getPopupRole */.Tc)(contentElement, "dialog")
    }, props);
    props = useDisclosure((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({ store }, props));
    return props;
  }
);
var DialogDisclosure = (0,HKOOKEDE/* forwardRef */.Rf)(function DialogDisclosure2(props) {
  const htmlProps = useDialogDisclosure(props);
  return (0,HKOOKEDE/* createElement */.n)(KCVNYWKF_TagName, htmlProps);
});



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/74NFH3UH.js
"use client";





// src/popover/popover-anchor.tsx
var _74NFH3UH_TagName = "div";
var usePopoverAnchor = (0,HKOOKEDE/* createHook */.ab)(
  function usePopoverAnchor2(_a) {
    var _b = _a, { store } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, ["store"]);
    const context = (0,_54MGSIOI/* usePopoverProviderContext */.zG)();
    store = store || context;
    props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
      ref: (0,Z32BISHQ/* useMergeRefs */.SV)(store == null ? void 0 : store.setAnchorElement, props.ref)
    });
    return props;
  }
);
var PopoverAnchor = (0,HKOOKEDE/* forwardRef */.Rf)(function PopoverAnchor2(props) {
  const htmlProps = usePopoverAnchor(props);
  return (0,HKOOKEDE/* createElement */.n)(_74NFH3UH_TagName, htmlProps);
});



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/IZAFJHVY.js
"use client";







// src/popover/popover-disclosure.tsx


var IZAFJHVY_TagName = "button";
var usePopoverDisclosure = (0,HKOOKEDE/* createHook */.ab)(function usePopoverDisclosure2(_a) {
  var _b = _a, { store } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, ["store"]);
  const context = (0,_54MGSIOI/* usePopoverProviderContext */.zG)();
  store = store || context;
  (0,PBFD2E7P/* invariant */.V1)(
    store,
     false && 0
  );
  const onClickProp = props.onClick;
  const onClick = (0,Z32BISHQ/* useEvent */._q)((event) => {
    store == null ? void 0 : store.setAnchorElement(event.currentTarget);
    onClickProp == null ? void 0 : onClickProp(event);
  });
  props = (0,Z32BISHQ/* useWrapElement */.w7)(
    props,
    (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(_54MGSIOI/* PopoverScopedContextProvider */.s1, { value: store, children: element }),
    [store]
  );
  props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
    onClick
  });
  props = usePopoverAnchor((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({ store }, props));
  props = useDialogDisclosure((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({ store }, props));
  return props;
});
var PopoverDisclosure = (0,HKOOKEDE/* forwardRef */.Rf)(function PopoverDisclosure2(props) {
  const htmlProps = usePopoverDisclosure(props);
  return (0,HKOOKEDE/* createElement */.n)(IZAFJHVY_TagName, htmlProps);
});



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/QA27FYGF.js
var QA27FYGF = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/QA27FYGF.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/AXRBYZQP.js
var AXRBYZQP = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/AXRBYZQP.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/menu/menu-button.js
"use client";


























// src/menu/menu-button.tsx




var menu_button_TagName = "button";
function getInitialFocus(event, dir) {
  const keyMap = {
    ArrowDown: dir === "bottom" || dir === "top" ? "first" : false,
    ArrowUp: dir === "bottom" || dir === "top" ? "last" : false,
    ArrowRight: dir === "right" ? "first" : false,
    ArrowLeft: dir === "left" ? "first" : false
  };
  return keyMap[event.key];
}
function hasActiveItem(items, excludeElement) {
  return !!(items == null ? void 0 : items.some((item) => {
    if (!item.element) return false;
    if (item.element === excludeElement) return false;
    return item.element.getAttribute("aria-expanded") === "true";
  }));
}
var useMenuButton = (0,HKOOKEDE/* createHook */.ab)(
  function useMenuButton2(_a) {
    var _b = _a, {
      store,
      focusable,
      accessibleWhenDisabled,
      showOnHover
    } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, [
      "store",
      "focusable",
      "accessibleWhenDisabled",
      "showOnHover"
    ]);
    const context = useMenuProviderContext();
    store = store || context;
    (0,PBFD2E7P/* invariant */.V1)(
      store,
       false && 0
    );
    const ref = (0,react.useRef)(null);
    const parentMenu = store.parent;
    const parentMenubar = store.menubar;
    const hasParentMenu = !!parentMenu;
    const parentIsMenubar = !!parentMenubar && !hasParentMenu;
    const disabled = (0,PBFD2E7P/* disabledFromProps */.$f)(props);
    const showMenu = () => {
      const trigger = ref.current;
      if (!trigger) return;
      store == null ? void 0 : store.setDisclosureElement(trigger);
      store == null ? void 0 : store.setAnchorElement(trigger);
      store == null ? void 0 : store.show();
    };
    const onFocusProp = props.onFocus;
    const onFocus = (0,Z32BISHQ/* useEvent */._q)((event) => {
      onFocusProp == null ? void 0 : onFocusProp(event);
      if (disabled) return;
      if (event.defaultPrevented) return;
      store == null ? void 0 : store.setAutoFocusOnShow(false);
      store == null ? void 0 : store.setActiveId(null);
      if (!parentMenubar) return;
      if (!parentIsMenubar) return;
      const { items } = parentMenubar.getState();
      if (hasActiveItem(items, event.currentTarget)) {
        showMenu();
      }
    });
    const dir = store.useState(
      (state) => state.placement.split("-")[0]
    );
    const onKeyDownProp = props.onKeyDown;
    const onKeyDown = (0,Z32BISHQ/* useEvent */._q)((event) => {
      onKeyDownProp == null ? void 0 : onKeyDownProp(event);
      if (disabled) return;
      if (event.defaultPrevented) return;
      const initialFocus = getInitialFocus(event, dir);
      if (initialFocus) {
        event.preventDefault();
        showMenu();
        store == null ? void 0 : store.setAutoFocusOnShow(true);
        store == null ? void 0 : store.setInitialFocus(initialFocus);
      }
    });
    const onClickProp = props.onClick;
    const onClick = (0,Z32BISHQ/* useEvent */._q)((event) => {
      onClickProp == null ? void 0 : onClickProp(event);
      if (event.defaultPrevented) return;
      if (!store) return;
      const isKeyboardClick = !event.detail;
      const { open } = store.getState();
      if (!open || isKeyboardClick) {
        if (!hasParentMenu || isKeyboardClick) {
          store.setAutoFocusOnShow(true);
        }
        store.setInitialFocus(isKeyboardClick ? "first" : "container");
      }
      if (hasParentMenu) {
        showMenu();
      }
    });
    props = (0,Z32BISHQ/* useWrapElement */.w7)(
      props,
      (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(MenuContextProvider, { value: store, children: element }),
      [store]
    );
    if (hasParentMenu) {
      props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
        render: /* @__PURE__ */ (0,jsx_runtime.jsx)(AXRBYZQP/* Role */.X.div, { render: props.render })
      });
    }
    const id = (0,Z32BISHQ/* useId */.Bi)(props.id);
    const parentContentElement = (0,_2GXGCHW6/* useStoreState */.O$)(
      (parentMenu == null ? void 0 : parentMenu.combobox) || parentMenu,
      "contentElement"
    );
    const role = hasParentMenu || parentIsMenubar ? (0,HWOIWM4O/* getPopupItemRole */.cn)(parentContentElement, "menuitem") : void 0;
    const contentElement = store.useState("contentElement");
    props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      id,
      role,
      "aria-haspopup": (0,HWOIWM4O/* getPopupRole */.Tc)(contentElement, "menu")
    }, props), {
      ref: (0,Z32BISHQ/* useMergeRefs */.SV)(ref, props.ref),
      onFocus,
      onKeyDown,
      onClick
    });
    props = (0,QA27FYGF/* useHovercardAnchor */.p)((0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      store,
      focusable,
      accessibleWhenDisabled
    }, props), {
      showOnHover: (event) => {
        const getShowOnHover = () => {
          if (typeof showOnHover === "function") return showOnHover(event);
          if (showOnHover != null) return showOnHover;
          if (hasParentMenu) return true;
          if (!parentMenubar) return false;
          const { items } = parentMenubar.getState();
          return parentIsMenubar && hasActiveItem(items);
        };
        const canShowOnHover = getShowOnHover();
        if (!canShowOnHover) return false;
        const parent = parentIsMenubar ? parentMenubar : parentMenu;
        if (!parent) return true;
        parent.setActiveId(event.currentTarget.id);
        return true;
      }
    }));
    props = usePopoverDisclosure((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      store,
      toggleOnClick: !hasParentMenu,
      focusable,
      accessibleWhenDisabled
    }, props));
    props = useCompositeTypeahead((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      store,
      typeahead: parentIsMenubar
    }, props));
    return props;
  }
);
var MenuButton = (0,HKOOKEDE/* forwardRef */.Rf)(function MenuButton2(props) {
  const htmlProps = useMenuButton(props);
  return (0,HKOOKEDE/* createElement */.n)(menu_button_TagName, htmlProps);
});


// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.6.0/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.6.0/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+primitives@4.6.0_react@17.0.2/node_modules/@wordpress/primitives/build-module/svg/index.js
var svg = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@4.6.0_react@17.0.2/node_modules/@wordpress/primitives/build-module/svg/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@17.0.2/node_modules/@wordpress/icons/build-module/library/check.js
/**
 * WordPress dependencies
 */


const check = /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* SVG */.t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
    d: "M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"
  })
});
/* harmony default export */ const library_check = (check);
//# sourceMappingURL=check.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@17.0.2/node_modules/@wordpress/icons/build-module/library/chevron-right-small.js
/**
 * WordPress dependencies
 */


const chevronRightSmall = /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* SVG */.t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
    d: "M10.8622 8.04053L14.2805 12.0286L10.8622 16.0167L9.72327 15.0405L12.3049 12.0286L9.72327 9.01672L10.8622 8.04053Z"
  })
});
/* harmony default export */ const chevron_right_small = (chevronRightSmall);
//# sourceMappingURL=chevron-right-small.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/context/use-context-system.js + 1 modules
var use_context_system = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/context/use-context-system.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/context/context-connect.js
var context_connect = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/context/context-connect.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/icon/index.js + 1 modules
var build_module_icon = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/icon/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@17.0.71_react@17.0.2__@types+react@17.0.71_react@17.0.2/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js
var emotion_styled_base_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@17.0.71_react@17.0.2__@types+react@17.0.71_react@17.0.2/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/BSEL4YAF.js
var BSEL4YAF = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/BSEL4YAF.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/ULASSYJG.js
"use client";









// src/menu/menu-list.tsx



var ULASSYJG_TagName = "div";
function useAriaLabelledBy(_a) {
  var _b = _a, { store } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, ["store"]);
  const [id, setId] = (0,react.useState)(void 0);
  const label = props["aria-label"];
  const disclosureElement = (0,_2GXGCHW6/* useStoreState */.O$)(store, "disclosureElement");
  const contentElement = (0,_2GXGCHW6/* useStoreState */.O$)(store, "contentElement");
  (0,react.useEffect)(() => {
    const disclosure = disclosureElement;
    if (!disclosure) return;
    const menu = contentElement;
    if (!menu) return;
    const menuLabel = label || menu.hasAttribute("aria-label");
    if (menuLabel) {
      setId(void 0);
    } else if (disclosure.id) {
      setId(disclosure.id);
    }
  }, [label, disclosureElement, contentElement]);
  return id;
}
var useMenuList = (0,HKOOKEDE/* createHook */.ab)(
  function useMenuList2(_a) {
    var _b = _a, { store, alwaysVisible, composite } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, ["store", "alwaysVisible", "composite"]);
    const context = useMenuProviderContext();
    store = store || context;
    (0,PBFD2E7P/* invariant */.V1)(
      store,
       false && 0
    );
    const parentMenu = store.parent;
    const parentMenubar = store.menubar;
    const hasParentMenu = !!parentMenu;
    const id = (0,Z32BISHQ/* useId */.Bi)(props.id);
    const onKeyDownProp = props.onKeyDown;
    const dir = store.useState(
      (state) => state.placement.split("-")[0]
    );
    const orientation = store.useState(
      (state) => state.orientation === "both" ? void 0 : state.orientation
    );
    const isHorizontal = orientation !== "vertical";
    const isMenubarHorizontal = (0,_2GXGCHW6/* useStoreState */.O$)(
      parentMenubar,
      (state) => !!state && state.orientation !== "vertical"
    );
    const onKeyDown = (0,Z32BISHQ/* useEvent */._q)((event) => {
      onKeyDownProp == null ? void 0 : onKeyDownProp(event);
      if (event.defaultPrevented) return;
      if (hasParentMenu || parentMenubar && !isHorizontal) {
        const hideMap = {
          ArrowRight: () => dir === "left" && !isHorizontal,
          ArrowLeft: () => dir === "right" && !isHorizontal,
          ArrowUp: () => dir === "bottom" && isHorizontal,
          ArrowDown: () => dir === "top" && isHorizontal
        };
        const action = hideMap[event.key];
        if (action == null ? void 0 : action()) {
          event.stopPropagation();
          event.preventDefault();
          return store == null ? void 0 : store.hide();
        }
      }
      if (parentMenubar) {
        const keyMap = {
          ArrowRight: () => {
            if (!isMenubarHorizontal) return;
            return parentMenubar.next();
          },
          ArrowLeft: () => {
            if (!isMenubarHorizontal) return;
            return parentMenubar.previous();
          },
          ArrowDown: () => {
            if (isMenubarHorizontal) return;
            return parentMenubar.next();
          },
          ArrowUp: () => {
            if (isMenubarHorizontal) return;
            return parentMenubar.previous();
          }
        };
        const action = keyMap[event.key];
        const id2 = action == null ? void 0 : action();
        if (id2 !== void 0) {
          event.stopPropagation();
          event.preventDefault();
          parentMenubar.move(id2);
        }
      }
    });
    props = (0,Z32BISHQ/* useWrapElement */.w7)(
      props,
      (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(MenuScopedContextProvider, { value: store, children: element }),
      [store]
    );
    const ariaLabelledBy = useAriaLabelledBy((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({ store }, props));
    const mounted = store.useState("mounted");
    const hidden = (0,BSEL4YAF/* isHidden */.dK)(mounted, props.hidden, alwaysVisible);
    const style = hidden ? (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({}, props.style), { display: "none" }) : props.style;
    props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      id,
      "aria-labelledby": ariaLabelledBy,
      hidden
    }, props), {
      ref: (0,Z32BISHQ/* useMergeRefs */.SV)(id ? store.setContentElement : null, props.ref),
      style,
      onKeyDown
    });
    const hasCombobox = !!store.combobox;
    composite = composite != null ? composite : !hasCombobox;
    if (composite) {
      props = (0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
        role: "menu",
        "aria-orientation": orientation
      }, props);
    }
    props = useComposite((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({ store, composite }, props));
    props = useCompositeTypeahead((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({ store, typeahead: !hasCombobox }, props));
    return props;
  }
);
var MenuList = (0,HKOOKEDE/* forwardRef */.Rf)(function MenuList2(props) {
  const htmlProps = useMenuList(props);
  return (0,HKOOKEDE/* createElement */.n)(ULASSYJG_TagName, htmlProps);
});



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/HQFKUKP3.js + 2 modules
var HQFKUKP3 = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/HQFKUKP3.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/TT2355LN.js + 21 modules
var TT2355LN = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/TT2355LN.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/menu/menu.js
"use client";

















































// src/menu/menu.tsx




var menu_TagName = "div";
var useMenu = (0,HKOOKEDE/* createHook */.ab)(function useMenu2(_a) {
  var _b = _a, {
    store,
    modal: modalProp = false,
    portal = !!modalProp,
    hideOnEscape = true,
    autoFocusOnShow = true,
    hideOnHoverOutside,
    alwaysVisible
  } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, [
    "store",
    "modal",
    "portal",
    "hideOnEscape",
    "autoFocusOnShow",
    "hideOnHoverOutside",
    "alwaysVisible"
  ]);
  const context = useMenuProviderContext();
  store = store || context;
  (0,PBFD2E7P/* invariant */.V1)(
    store,
     false && 0
  );
  const ref = (0,react.useRef)(null);
  const parentMenu = store.parent;
  const parentMenubar = store.menubar;
  const hasParentMenu = !!parentMenu;
  const parentIsMenubar = !!parentMenubar && !hasParentMenu;
  props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
    ref: (0,Z32BISHQ/* useMergeRefs */.SV)(ref, props.ref)
  });
  const _a2 = useMenuList((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
    store,
    alwaysVisible
  }, props)), { "aria-labelledby": ariaLabelledBy } = _a2, menuListProps = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_a2, ["aria-labelledby"]);
  props = menuListProps;
  const [initialFocusRef, setInitialFocusRef] = (0,react.useState)();
  const autoFocusOnShowState = store.useState("autoFocusOnShow");
  const initialFocus = store.useState("initialFocus");
  const baseElement = store.useState("baseElement");
  const items = store.useState("renderedItems");
  (0,react.useEffect)(() => {
    let cleaning = false;
    setInitialFocusRef((prevInitialFocusRef) => {
      var _a3, _b2, _c;
      if (cleaning) return;
      if (!autoFocusOnShowState) return;
      if ((_a3 = prevInitialFocusRef == null ? void 0 : prevInitialFocusRef.current) == null ? void 0 : _a3.isConnected) return prevInitialFocusRef;
      const ref2 = (0,react.createRef)();
      switch (initialFocus) {
        case "first":
          ref2.current = ((_b2 = items.find((item) => !item.disabled && item.element)) == null ? void 0 : _b2.element) || null;
          break;
        case "last":
          ref2.current = ((_c = [...items].reverse().find((item) => !item.disabled && item.element)) == null ? void 0 : _c.element) || null;
          break;
        default:
          ref2.current = baseElement;
      }
      return ref2;
    });
    return () => {
      cleaning = true;
    };
  }, [store, autoFocusOnShowState, initialFocus, items, baseElement]);
  const modal = hasParentMenu ? false : modalProp;
  const mayAutoFocusOnShow = !!autoFocusOnShow;
  const canAutoFocusOnShow = !!initialFocusRef || !!props.initialFocus || !!modal;
  const contentElement = (0,_2GXGCHW6/* useStoreState */.O$)(
    store.combobox || store,
    "contentElement"
  );
  const parentContentElement = (0,_2GXGCHW6/* useStoreState */.O$)(
    (parentMenu == null ? void 0 : parentMenu.combobox) || parentMenu,
    "contentElement"
  );
  const preserveTabOrderAnchor = (0,react.useMemo)(() => {
    if (!parentContentElement) return;
    if (!contentElement) return;
    const role = contentElement.getAttribute("role");
    const parentRole = parentContentElement.getAttribute("role");
    const parentIsMenuOrMenubar = parentRole === "menu" || parentRole === "menubar";
    if (parentIsMenuOrMenubar && role === "menu") return;
    return parentContentElement;
  }, [contentElement, parentContentElement]);
  if (preserveTabOrderAnchor !== void 0) {
    props = (0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      preserveTabOrderAnchor
    }, props);
  }
  props = (0,HQFKUKP3/* useHovercard */.a)((0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
    store,
    alwaysVisible,
    initialFocus: initialFocusRef,
    autoFocusOnShow: mayAutoFocusOnShow ? canAutoFocusOnShow && autoFocusOnShow : autoFocusOnShowState || !!modal
  }, props), {
    hideOnEscape(event) {
      if ((0,PBFD2E7P/* isFalsyBooleanCallback */.zO)(hideOnEscape, event)) return false;
      store == null ? void 0 : store.hideAll();
      return true;
    },
    hideOnHoverOutside(event) {
      const disclosureElement = store == null ? void 0 : store.getState().disclosureElement;
      const getHideOnHoverOutside = () => {
        if (typeof hideOnHoverOutside === "function") {
          return hideOnHoverOutside(event);
        }
        if (hideOnHoverOutside != null) return hideOnHoverOutside;
        if (hasParentMenu) return true;
        if (!parentIsMenubar) return false;
        if (!disclosureElement) return true;
        if ((0,utils_focus/* hasFocusWithin */.oW)(disclosureElement)) return false;
        return true;
      };
      if (!getHideOnHoverOutside()) return false;
      if (event.defaultPrevented) return true;
      if (!hasParentMenu) return true;
      if (!disclosureElement) return true;
      (0,events/* fireEvent */.rC)(disclosureElement, "mouseout", event);
      if (!(0,utils_focus/* hasFocusWithin */.oW)(disclosureElement)) return true;
      requestAnimationFrame(() => {
        if ((0,utils_focus/* hasFocusWithin */.oW)(disclosureElement)) return;
        store == null ? void 0 : store.hide();
      });
      return false;
    },
    modal,
    portal,
    backdrop: hasParentMenu ? false : props.backdrop
  }));
  props = (0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
    "aria-labelledby": ariaLabelledBy
  }, props);
  return props;
});
var Menu = (0,TT2355LN/* createDialogComponent */.AV)(
  (0,HKOOKEDE/* forwardRef */.Rf)(function Menu2(props) {
    const htmlProps = useMenu(props);
    return (0,HKOOKEDE/* createElement */.n)(menu_TagName, htmlProps);
  }),
  useMenuProviderContext
);


;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/B6XZVSMQ.js
"use client";









// src/menu/menu-item.tsx




var B6XZVSMQ_TagName = "div";
function menuHasFocus(baseElement, items, currentTarget) {
  var _a;
  if (!baseElement) return false;
  if ((0,utils_focus/* hasFocusWithin */.oW)(baseElement)) return true;
  const expandedItem = items == null ? void 0 : items.find((item) => {
    var _a2;
    if (item.element === currentTarget) return false;
    return ((_a2 = item.element) == null ? void 0 : _a2.getAttribute("aria-expanded")) === "true";
  });
  const expandedMenuId = (_a = expandedItem == null ? void 0 : expandedItem.element) == null ? void 0 : _a.getAttribute("aria-controls");
  if (!expandedMenuId) return false;
  const doc = (0,HWOIWM4O/* getDocument */.YE)(baseElement);
  const expandedMenu = doc.getElementById(expandedMenuId);
  if (!expandedMenu) return false;
  if ((0,utils_focus/* hasFocusWithin */.oW)(expandedMenu)) return true;
  return !!expandedMenu.querySelector("[role=menuitem][aria-expanded=true]");
}
var useMenuItem = (0,HKOOKEDE/* createHook */.ab)(
  function useMenuItem2(_a) {
    var _b = _a, {
      store,
      hideOnClick = true,
      preventScrollOnKeyDown = true,
      focusOnHover,
      blurOnHoverEnd
    } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, [
      "store",
      "hideOnClick",
      "preventScrollOnKeyDown",
      "focusOnHover",
      "blurOnHoverEnd"
    ]);
    const menuContext = useMenuScopedContext(true);
    const menubarContext = WSQNIDGC_useMenubarScopedContext();
    store = store || menuContext || menubarContext;
    (0,PBFD2E7P/* invariant */.V1)(
      store,
       false && 0
    );
    const onClickProp = props.onClick;
    const hideOnClickProp = (0,Z32BISHQ/* useBooleanEvent */.O4)(hideOnClick);
    const hideMenu = "hideAll" in store ? store.hideAll : void 0;
    const isWithinMenu = !!hideMenu;
    const onClick = (0,Z32BISHQ/* useEvent */._q)((event) => {
      onClickProp == null ? void 0 : onClickProp(event);
      if (event.defaultPrevented) return;
      if ((0,events/* isDownloading */.RN)(event)) return;
      if ((0,events/* isOpeningInNewTab */.$b)(event)) return;
      if (!hideMenu) return;
      const popupType = event.currentTarget.getAttribute("aria-haspopup");
      if (popupType === "menu") return;
      if (!hideOnClickProp(event)) return;
      hideMenu();
    });
    const contentElement = (0,_2GXGCHW6/* useStoreState */.O$)(
      store,
      (state) => "contentElement" in state ? state.contentElement : null
    );
    const role = (0,HWOIWM4O/* getPopupItemRole */.cn)(contentElement, "menuitem");
    props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      role
    }, props), {
      onClick
    });
    props = useCompositeItem((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      store,
      preventScrollOnKeyDown
    }, props));
    props = useCompositeHover((0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      store
    }, props), {
      focusOnHover(event) {
        const getFocusOnHover = () => {
          if (typeof focusOnHover === "function") return focusOnHover(event);
          if (focusOnHover != null) return focusOnHover;
          return true;
        };
        if (!store) return false;
        if (!getFocusOnHover()) return false;
        const { baseElement, items } = store.getState();
        if (isWithinMenu) {
          if (event.currentTarget.hasAttribute("aria-expanded")) {
            event.currentTarget.focus();
          }
          return true;
        }
        if (menuHasFocus(baseElement, items, event.currentTarget)) {
          event.currentTarget.focus();
          return true;
        }
        return false;
      },
      blurOnHoverEnd(event) {
        if (typeof blurOnHoverEnd === "function") return blurOnHoverEnd(event);
        if (blurOnHoverEnd != null) return blurOnHoverEnd;
        return isWithinMenu;
      }
    }));
    return props;
  }
);
var MenuItem = (0,HKOOKEDE/* memo */.ph)(
  (0,HKOOKEDE/* forwardRef */.Rf)(function MenuItem2(props) {
    const htmlProps = useMenuItem(props);
    return (0,HKOOKEDE/* createElement */.n)(B6XZVSMQ_TagName, htmlProps);
  })
);



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/AUGWLYYL.js
"use client";


// src/checkbox/checkbox-context.tsx
var AUGWLYYL_ctx = (0,HKOOKEDE/* createStoreContext */.B0)();
var useCheckboxContext = AUGWLYYL_ctx.useContext;
var useCheckboxScopedContext = AUGWLYYL_ctx.useScopedContext;
var useCheckboxProviderContext = AUGWLYYL_ctx.useProviderContext;
var CheckboxContextProvider = AUGWLYYL_ctx.ContextProvider;
var CheckboxScopedContextProvider = AUGWLYYL_ctx.ScopedContextProvider;



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/L7GTXQJP.js
"use client";








// src/checkbox/checkbox.tsx



var L7GTXQJP_TagName = "input";
function setMixed(element, mixed) {
  if (mixed) {
    element.indeterminate = true;
  } else if (element.indeterminate) {
    element.indeterminate = false;
  }
}
function isNativeCheckbox(tagName, type) {
  return tagName === "input" && (!type || type === "checkbox");
}
function getPrimitiveValue(value) {
  if (Array.isArray(value)) {
    return value.toString();
  }
  return value;
}
var useCheckbox = (0,HKOOKEDE/* createHook */.ab)(
  function useCheckbox2(_a) {
    var _b = _a, {
      store,
      name,
      value: valueProp,
      checked: checkedProp,
      defaultChecked
    } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, [
      "store",
      "name",
      "value",
      "checked",
      "defaultChecked"
    ]);
    const context = useCheckboxContext();
    store = store || context;
    const [_checked, setChecked] = (0,react.useState)(defaultChecked != null ? defaultChecked : false);
    const checked = (0,_2GXGCHW6/* useStoreState */.O$)(store, (state) => {
      if (checkedProp !== void 0) return checkedProp;
      if ((state == null ? void 0 : state.value) === void 0) return _checked;
      if (valueProp != null) {
        if (Array.isArray(state.value)) {
          const primitiveValue = getPrimitiveValue(valueProp);
          return state.value.includes(primitiveValue);
        }
        return state.value === valueProp;
      }
      if (Array.isArray(state.value)) return false;
      if (typeof state.value === "boolean") return state.value;
      return false;
    });
    const ref = (0,react.useRef)(null);
    const tagName = (0,Z32BISHQ/* useTagName */.vO)(ref, L7GTXQJP_TagName);
    const nativeCheckbox = isNativeCheckbox(tagName, props.type);
    const mixed = checked ? checked === "mixed" : void 0;
    const isChecked = checked === "mixed" ? false : checked;
    const disabled = (0,PBFD2E7P/* disabledFromProps */.$f)(props);
    const [propertyUpdated, schedulePropertyUpdate] = (0,Z32BISHQ/* useForceUpdate */.CH)();
    (0,react.useEffect)(() => {
      const element = ref.current;
      if (!element) return;
      setMixed(element, mixed);
      if (nativeCheckbox) return;
      element.checked = isChecked;
      if (name !== void 0) {
        element.name = name;
      }
      if (valueProp !== void 0) {
        element.value = `${valueProp}`;
      }
    }, [propertyUpdated, mixed, nativeCheckbox, isChecked, name, valueProp]);
    const onChangeProp = props.onChange;
    const onChange = (0,Z32BISHQ/* useEvent */._q)((event) => {
      if (disabled) {
        event.stopPropagation();
        event.preventDefault();
        return;
      }
      setMixed(event.currentTarget, mixed);
      if (!nativeCheckbox) {
        event.currentTarget.checked = !event.currentTarget.checked;
        schedulePropertyUpdate();
      }
      onChangeProp == null ? void 0 : onChangeProp(event);
      if (event.defaultPrevented) return;
      const elementChecked = event.currentTarget.checked;
      setChecked(elementChecked);
      store == null ? void 0 : store.setValue((prevValue) => {
        if (valueProp == null) return elementChecked;
        const primitiveValue = getPrimitiveValue(valueProp);
        if (!Array.isArray(prevValue)) {
          return prevValue === primitiveValue ? false : primitiveValue;
        }
        if (elementChecked) {
          if (prevValue.includes(primitiveValue)) {
            return prevValue;
          }
          return [...prevValue, primitiveValue];
        }
        return prevValue.filter((v) => v !== primitiveValue);
      });
    });
    const onClickProp = props.onClick;
    const onClick = (0,Z32BISHQ/* useEvent */._q)((event) => {
      onClickProp == null ? void 0 : onClickProp(event);
      if (event.defaultPrevented) return;
      if (nativeCheckbox) return;
      onChange(event);
    });
    props = (0,Z32BISHQ/* useWrapElement */.w7)(
      props,
      (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(CheckboxCheckedContext.Provider, { value: isChecked, children: element }),
      [isChecked]
    );
    props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      role: !nativeCheckbox ? "checkbox" : void 0,
      type: nativeCheckbox ? "checkbox" : void 0,
      "aria-checked": checked
    }, props), {
      ref: (0,Z32BISHQ/* useMergeRefs */.SV)(ref, props.ref),
      onChange,
      onClick
    });
    props = useCommand((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({ clickOnEnter: !nativeCheckbox }, props));
    return (0,PBFD2E7P/* removeUndefinedValues */.HR)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      name: nativeCheckbox ? name : void 0,
      value: nativeCheckbox ? valueProp : void 0,
      checked: isChecked
    }, props));
  }
);
var Checkbox = (0,HKOOKEDE/* forwardRef */.Rf)(function Checkbox2(props) {
  const htmlProps = useCheckbox(props);
  return (0,HKOOKEDE/* createElement */.n)(L7GTXQJP_TagName, htmlProps);
});



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/checkbox/checkbox-store.js
"use client";




// src/checkbox/checkbox-store.ts
function createCheckboxStore(props = {}) {
  var _a;
  (0,EQQLU3CG/* throwOnConflictingProps */.UE)(props, props.store);
  const syncState = (_a = props.store) == null ? void 0 : _a.getState();
  const initialState = {
    value: (0,PBFD2E7P/* defaultValue */.Jh)(
      props.value,
      syncState == null ? void 0 : syncState.value,
      props.defaultValue,
      false
    )
  };
  const checkbox = (0,EQQLU3CG/* createStore */.y$)(initialState, props.store);
  return (0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, checkbox), {
    setValue: (value) => checkbox.setState("value", value)
  });
}


;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/EJOTW52C.js
"use client";



// src/checkbox/checkbox-store.ts

function useCheckboxStoreProps(store, update, props) {
  (0,Z32BISHQ/* useUpdateEffect */.w5)(update, [props.store]);
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "value", "setValue");
  return store;
}
function useCheckboxStore(props = {}) {
  const [store, update] = (0,_2GXGCHW6/* useStore */.Pj)(createCheckboxStore, props);
  return useCheckboxStoreProps(store, update, props);
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/menu/menu-item-checkbox.js
"use client";


























// src/menu/menu-item-checkbox.tsx


var menu_item_checkbox_TagName = "div";
function menu_item_checkbox_getPrimitiveValue(value) {
  if (Array.isArray(value)) {
    return value.toString();
  }
  return value;
}
function getValue(storeValue, value, checked) {
  if (value === void 0) {
    if (Array.isArray(storeValue)) return storeValue;
    return !!checked;
  }
  const primitiveValue = menu_item_checkbox_getPrimitiveValue(value);
  if (!Array.isArray(storeValue)) {
    if (checked) {
      return primitiveValue;
    }
    return storeValue === primitiveValue ? false : storeValue;
  }
  if (checked) {
    if (storeValue.includes(primitiveValue)) {
      return storeValue;
    }
    return [...storeValue, primitiveValue];
  }
  return storeValue.filter((v) => v !== primitiveValue);
}
var useMenuItemCheckbox = (0,HKOOKEDE/* createHook */.ab)(
  function useMenuItemCheckbox2(_a) {
    var _b = _a, {
      store,
      name,
      value,
      checked,
      defaultChecked: defaultCheckedProp,
      hideOnClick = false
    } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, [
      "store",
      "name",
      "value",
      "checked",
      "defaultChecked",
      "hideOnClick"
    ]);
    const context = useMenuScopedContext();
    store = store || context;
    (0,PBFD2E7P/* invariant */.V1)(
      store,
       false && 0
    );
    const defaultChecked = (0,Z32BISHQ/* useInitialValue */.nf)(defaultCheckedProp);
    (0,react.useEffect)(() => {
      store == null ? void 0 : store.setValue(name, (prevValue = []) => {
        if (!defaultChecked) return prevValue;
        return getValue(prevValue, value, true);
      });
    }, [store, name, value, defaultChecked]);
    (0,react.useEffect)(() => {
      if (checked === void 0) return;
      store == null ? void 0 : store.setValue(name, (prevValue) => {
        return getValue(prevValue, value, checked);
      });
    }, [store, name, value, checked]);
    const checkboxStore = useCheckboxStore({
      value: store.useState((state) => state.values[name]),
      setValue(internalValue) {
        store == null ? void 0 : store.setValue(name, () => {
          if (checked === void 0) return internalValue;
          const nextValue = getValue(internalValue, value, checked);
          if (!Array.isArray(nextValue)) return nextValue;
          if (!Array.isArray(internalValue)) return nextValue;
          if ((0,PBFD2E7P/* shallowEqual */.bN)(internalValue, nextValue)) return internalValue;
          return nextValue;
        });
      }
    });
    props = (0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      role: "menuitemcheckbox"
    }, props);
    props = useCheckbox((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      store: checkboxStore,
      name,
      value,
      checked
    }, props));
    props = useMenuItem((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({ store, hideOnClick }, props));
    return props;
  }
);
var MenuItemCheckbox = (0,HKOOKEDE/* memo */.ph)(
  (0,HKOOKEDE/* forwardRef */.Rf)(function MenuItemCheckbox2(props) {
    const htmlProps = useMenuItemCheckbox(props);
    return (0,HKOOKEDE/* createElement */.n)(menu_item_checkbox_TagName, htmlProps);
  })
);


;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/SOKV3TSX.js
"use client";



// src/radio/radio-context.tsx
var SOKV3TSX_ctx = (0,HKOOKEDE/* createStoreContext */.B0)(
  [CompositeContextProvider],
  [CompositeScopedContextProvider]
);
var useRadioContext = SOKV3TSX_ctx.useContext;
var useRadioScopedContext = SOKV3TSX_ctx.useScopedContext;
var useRadioProviderContext = SOKV3TSX_ctx.useProviderContext;
var RadioContextProvider = SOKV3TSX_ctx.ContextProvider;
var RadioScopedContextProvider = SOKV3TSX_ctx.ScopedContextProvider;



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/K7FXVWIT.js
"use client";







// src/radio/radio.tsx


var K7FXVWIT_TagName = "input";
function getIsChecked(value, storeValue) {
  if (storeValue === void 0) return;
  if (value != null && storeValue != null) {
    return storeValue === value;
  }
  return !!storeValue;
}
function isNativeRadio(tagName, type) {
  return tagName === "input" && (!type || type === "radio");
}
var useRadio = (0,HKOOKEDE/* createHook */.ab)(function useRadio2(_a) {
  var _b = _a, {
    store,
    name,
    value,
    checked
  } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, [
    "store",
    "name",
    "value",
    "checked"
  ]);
  const context = useRadioContext();
  store = store || context;
  const id = (0,Z32BISHQ/* useId */.Bi)(props.id);
  const ref = (0,react.useRef)(null);
  const isChecked = (0,_2GXGCHW6/* useStoreState */.O$)(
    store,
    (state) => checked != null ? checked : getIsChecked(value, state == null ? void 0 : state.value)
  );
  (0,react.useEffect)(() => {
    if (!id) return;
    if (!isChecked) return;
    const isActiveItem = (store == null ? void 0 : store.getState().activeId) === id;
    if (isActiveItem) return;
    store == null ? void 0 : store.setActiveId(id);
  }, [store, isChecked, id]);
  const onChangeProp = props.onChange;
  const tagName = (0,Z32BISHQ/* useTagName */.vO)(ref, K7FXVWIT_TagName);
  const nativeRadio = isNativeRadio(tagName, props.type);
  const disabled = (0,PBFD2E7P/* disabledFromProps */.$f)(props);
  const [propertyUpdated, schedulePropertyUpdate] = (0,Z32BISHQ/* useForceUpdate */.CH)();
  (0,react.useEffect)(() => {
    const element = ref.current;
    if (!element) return;
    if (nativeRadio) return;
    if (isChecked !== void 0) {
      element.checked = isChecked;
    }
    if (name !== void 0) {
      element.name = name;
    }
    if (value !== void 0) {
      element.value = `${value}`;
    }
  }, [propertyUpdated, nativeRadio, isChecked, name, value]);
  const onChange = (0,Z32BISHQ/* useEvent */._q)((event) => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (!nativeRadio) {
      event.currentTarget.checked = true;
      schedulePropertyUpdate();
    }
    onChangeProp == null ? void 0 : onChangeProp(event);
    if (event.defaultPrevented) return;
    store == null ? void 0 : store.setValue(value);
  });
  const onClickProp = props.onClick;
  const onClick = (0,Z32BISHQ/* useEvent */._q)((event) => {
    onClickProp == null ? void 0 : onClickProp(event);
    if (event.defaultPrevented) return;
    if (nativeRadio) return;
    onChange(event);
  });
  const onFocusProp = props.onFocus;
  const onFocus = (0,Z32BISHQ/* useEvent */._q)((event) => {
    onFocusProp == null ? void 0 : onFocusProp(event);
    if (event.defaultPrevented) return;
    if (!nativeRadio) return;
    if (!store) return;
    const { moves, activeId } = store.getState();
    if (!moves) return;
    if (id && activeId !== id) return;
    onChange(event);
  });
  props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
    id,
    role: !nativeRadio ? "radio" : void 0,
    type: nativeRadio ? "radio" : void 0,
    "aria-checked": isChecked
  }, props), {
    ref: (0,Z32BISHQ/* useMergeRefs */.SV)(ref, props.ref),
    onChange,
    onClick,
    onFocus
  });
  props = useCompositeItem((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
    store,
    clickOnEnter: !nativeRadio
  }, props));
  return (0,PBFD2E7P/* removeUndefinedValues */.HR)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
    name: nativeRadio ? name : void 0,
    value: nativeRadio ? value : void 0,
    checked: isChecked
  }, props));
});
var Radio = (0,HKOOKEDE/* memo */.ph)(
  (0,HKOOKEDE/* forwardRef */.Rf)(function Radio2(props) {
    const htmlProps = useRadio(props);
    return (0,HKOOKEDE/* createElement */.n)(K7FXVWIT_TagName, htmlProps);
  })
);



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/menu/menu-item-radio.js
"use client";
























// src/menu/menu-item-radio.tsx



var menu_item_radio_TagName = "div";
function menu_item_radio_getValue(prevValue, value, checked) {
  if (checked === void 0) return prevValue;
  if (checked) return value;
  return prevValue;
}
var useMenuItemRadio = (0,HKOOKEDE/* createHook */.ab)(
  function useMenuItemRadio2(_a) {
    var _b = _a, {
      store,
      name,
      value,
      checked,
      onChange: onChangeProp,
      hideOnClick = false
    } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, [
      "store",
      "name",
      "value",
      "checked",
      "onChange",
      "hideOnClick"
    ]);
    const context = useMenuScopedContext();
    store = store || context;
    (0,PBFD2E7P/* invariant */.V1)(
      store,
       false && 0
    );
    const defaultChecked = (0,Z32BISHQ/* useInitialValue */.nf)(props.defaultChecked);
    (0,react.useEffect)(() => {
      store == null ? void 0 : store.setValue(name, (prevValue = false) => {
        return menu_item_radio_getValue(prevValue, value, defaultChecked);
      });
    }, [store, name, value, defaultChecked]);
    (0,react.useEffect)(() => {
      if (checked === void 0) return;
      store == null ? void 0 : store.setValue(name, (prevValue) => {
        return menu_item_radio_getValue(prevValue, value, checked);
      });
    }, [store, name, value, checked]);
    const isChecked = store.useState((state) => state.values[name] === value);
    props = (0,Z32BISHQ/* useWrapElement */.w7)(
      props,
      (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(MenuItemCheckedContext.Provider, { value: !!isChecked, children: element }),
      [isChecked]
    );
    props = (0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      role: "menuitemradio"
    }, props);
    props = useRadio((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      name,
      value,
      checked: isChecked,
      onChange(event) {
        onChangeProp == null ? void 0 : onChangeProp(event);
        if (event.defaultPrevented) return;
        const element = event.currentTarget;
        store == null ? void 0 : store.setValue(name, (prevValue) => {
          return menu_item_radio_getValue(prevValue, value, checked != null ? checked : element.checked);
        });
      }
    }, props));
    props = useMenuItem((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({ store, hideOnClick }, props));
    return props;
  }
);
var MenuItemRadio = (0,HKOOKEDE/* memo */.ph)(
  (0,HKOOKEDE/* forwardRef */.Rf)(function MenuItemRadio2(props) {
    const htmlProps = useMenuItemRadio(props);
    return (0,HKOOKEDE/* createElement */.n)(menu_item_radio_TagName, htmlProps);
  })
);


;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/menu/menu-group.js
"use client";








// src/menu/menu-group.tsx
var menu_group_TagName = "div";
var useMenuGroup = (0,HKOOKEDE/* createHook */.ab)(
  function useMenuGroup2(props) {
    props = useCompositeGroup(props);
    return props;
  }
);
var MenuGroup = (0,HKOOKEDE/* forwardRef */.Rf)(function MenuGroup2(props) {
  const htmlProps = useMenuGroup(props);
  return (0,HKOOKEDE/* createElement */.n)(menu_group_TagName, htmlProps);
});


;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/LOI6GHIP.js
"use client";



// src/separator/separator.tsx
var LOI6GHIP_TagName = "hr";
var useSeparator = (0,HKOOKEDE/* createHook */.ab)(
  function useSeparator2(_a) {
    var _b = _a, { orientation = "horizontal" } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, ["orientation"]);
    props = (0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      role: "separator",
      "aria-orientation": orientation
    }, props);
    return props;
  }
);
var Separator = (0,HKOOKEDE/* forwardRef */.Rf)(function Separator2(props) {
  const htmlProps = useSeparator(props);
  return (0,HKOOKEDE/* createElement */.n)(LOI6GHIP_TagName, htmlProps);
});



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/WEEEI3KU.js
"use client";





// src/composite/composite-separator.tsx

var WEEEI3KU_TagName = "hr";
var useCompositeSeparator = (0,HKOOKEDE/* createHook */.ab)(function useCompositeSeparator2(_a) {
  var _b = _a, { store } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, ["store"]);
  const context = useCompositeContext();
  store = store || context;
  (0,PBFD2E7P/* invariant */.V1)(
    store,
     false && 0
  );
  const orientation = store.useState(
    (state) => state.orientation === "horizontal" ? "vertical" : "horizontal"
  );
  props = useSeparator((0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({}, props), { orientation }));
  return props;
});
var CompositeSeparator = (0,HKOOKEDE/* forwardRef */.Rf)(function CompositeSeparator2(props) {
  const htmlProps = useCompositeSeparator(props);
  return (0,HKOOKEDE/* createElement */.n)(WEEEI3KU_TagName, htmlProps);
});



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/menu/menu-separator.js
"use client";















// src/menu/menu-separator.tsx
var menu_separator_TagName = "hr";
var useMenuSeparator = (0,HKOOKEDE/* createHook */.ab)(
  function useMenuSeparator2(_a) {
    var _b = _a, { store } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, ["store"]);
    const context = useMenuContext();
    store = store || context;
    props = useCompositeSeparator((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({ store }, props));
    return props;
  }
);
var MenuSeparator = (0,HKOOKEDE/* forwardRef */.Rf)(function MenuSeparator2(props) {
  const htmlProps = useMenuSeparator(props);
  return (0,HKOOKEDE/* createElement */.n)(menu_separator_TagName, htmlProps);
});


// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@17.0.71_react@17.0.2/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@17.0.71_react@17.0.2/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/utils/colors-values.js
var colors_values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/utils/colors-values.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/utils/config-values.js
var config_values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/utils/config-values.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/utils/font.js + 1 modules
var font = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/utils/font.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/utils/rtl.js
var rtl = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/utils/rtl.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/utils/space.js
var space = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/utils/space.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/view/component.js
var view_component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/view/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/truncate/hook.js + 2 modules
var hook = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/truncate/hook.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/truncate/component.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */





function UnconnectedTruncate(props, forwardedRef) {
  const truncateProps = (0,hook/* default */.A)(props);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(view_component/* default */.A, {
    as: "span",
    ...truncateProps,
    ref: forwardedRef
  });
}

/**
 * `Truncate` is a typography primitive that trims text content.
 * For almost all cases, it is recommended that `Text`, `Heading`, or
 * `Subheading` is used to render text content. However,`Truncate` is
 * available for custom implementations.
 *
 * ```jsx
 * import { __experimentalTruncate as Truncate } from `@wordpress/components`;
 *
 * function Example() {
 * 	return (
 * 		<Truncate>
 * 			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex
 * 			neque, vulputate a diam et, luctus convallis lacus. Vestibulum ac
 * 			mollis mi. Morbi id elementum massa.
 * 		</Truncate>
 * 	);
 * }
 * ```
 */
const Truncate = (0,context_connect/* contextConnect */.KZ)(UnconnectedTruncate, 'Truncate');
/* harmony default export */ const truncate_component = (Truncate);
//# sourceMappingURL=component.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/dropdown-menu-v2/styles.js

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */




const ANIMATION_PARAMS = {
  SLIDE_AMOUNT: '2px',
  DURATION: '400ms',
  EASING: 'cubic-bezier( 0.16, 1, 0.3, 1 )'
};
const CONTENT_WRAPPER_PADDING = (0,space/* space */.x)(1);
const ITEM_PADDING_BLOCK = (0,space/* space */.x)(2);
const ITEM_PADDING_INLINE = (0,space/* space */.x)(3);

// TODO:
// - border color and divider color are different from COLORS.theme variables
// - lighter text color is not defined in COLORS.theme, should it be?
// - lighter background color is not defined in COLORS.theme, should it be?
const DEFAULT_BORDER_COLOR = colors_values/* COLORS */.l.theme.gray[300];
const DIVIDER_COLOR = colors_values/* COLORS */.l.theme.gray[200];
const LIGHTER_TEXT_COLOR = colors_values/* COLORS */.l.theme.gray[700];
const LIGHT_BACKGROUND_COLOR = colors_values/* COLORS */.l.theme.gray[100];
const TOOLBAR_VARIANT_BORDER_COLOR = colors_values/* COLORS */.l.theme.foreground;
const DEFAULT_BOX_SHADOW = `0 0 0 ${config_values/* default */.A.borderWidth} ${DEFAULT_BORDER_COLOR}, ${config_values/* default */.A.elevationXSmall}`;
const TOOLBAR_VARIANT_BOX_SHADOW = `0 0 0 ${config_values/* default */.A.borderWidth} ${TOOLBAR_VARIANT_BORDER_COLOR}`;
const GRID_TEMPLATE_COLS = 'minmax( 0, max-content ) 1fr';
const slideUpAndFade = (0,emotion_react_browser_esm/* keyframes */.i7)({
  '0%': {
    opacity: 0,
    transform: `translateY(${ANIMATION_PARAMS.SLIDE_AMOUNT})`
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)'
  }
});
const slideRightAndFade = (0,emotion_react_browser_esm/* keyframes */.i7)({
  '0%': {
    opacity: 0,
    transform: `translateX(-${ANIMATION_PARAMS.SLIDE_AMOUNT})`
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0)'
  }
});
const slideDownAndFade = (0,emotion_react_browser_esm/* keyframes */.i7)({
  '0%': {
    opacity: 0,
    transform: `translateY(-${ANIMATION_PARAMS.SLIDE_AMOUNT})`
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)'
  }
});
const slideLeftAndFade = (0,emotion_react_browser_esm/* keyframes */.i7)({
  '0%': {
    opacity: 0,
    transform: `translateX(${ANIMATION_PARAMS.SLIDE_AMOUNT})`
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0)'
  }
});
const DropdownMenu = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)(Menu,  true ? {
  target: "e1kdzosf12"
} : 0)("position:relative;z-index:1000000;display:grid;grid-template-columns:", GRID_TEMPLATE_COLS, ";grid-template-rows:auto;box-sizing:border-box;min-width:160px;max-width:320px;max-height:var( --popover-available-height );padding:", CONTENT_WRAPPER_PADDING, ";background-color:", colors_values/* COLORS */.l.ui.background, ";border-radius:", config_values/* default */.A.radiusMedium, ";", props => /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("box-shadow:", props.variant === 'toolbar' ? TOOLBAR_VARIANT_BOX_SHADOW : DEFAULT_BOX_SHADOW, ";" + ( true ? "" : 0),  true ? "" : 0), " overscroll-behavior:contain;overflow:auto;outline:2px solid transparent!important;&[data-open]{@media not ( prefers-reduced-motion ){animation-duration:", ANIMATION_PARAMS.DURATION, ";animation-timing-function:", ANIMATION_PARAMS.EASING, ";will-change:transform,opacity;animation-name:", slideDownAndFade, ";&[data-side='left']{animation-name:", slideLeftAndFade, ";}&[data-side='up']{animation-name:", slideUpAndFade, ";}&[data-side='right']{animation-name:", slideRightAndFade, ";}}}" + ( true ? "" : 0));
const baseItem = /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("all:unset;position:relative;min-height:", (0,space/* space */.x)(10), ";box-sizing:border-box;grid-column:1/-1;display:grid;grid-template-columns:", GRID_TEMPLATE_COLS, ";align-items:center;@supports ( grid-template-columns: subgrid ){grid-template-columns:subgrid;}font-size:", (0,font/* font */.g)('default.fontSize'), ";font-family:inherit;font-weight:normal;line-height:20px;color:", colors_values/* COLORS */.l.theme.foreground, ";border-radius:", config_values/* default */.A.radiusSmall, ";padding-block:", ITEM_PADDING_BLOCK, ";padding-inline:", ITEM_PADDING_INLINE, ";scroll-margin:", CONTENT_WRAPPER_PADDING, ";user-select:none;outline:none;&[aria-disabled='true']{color:", colors_values/* COLORS */.l.ui.textDisabled, ";cursor:not-allowed;}&[data-active-item]:not( [data-focus-visible] ):not(\n\t\t\t[aria-disabled='true']\n\t\t){background-color:", colors_values/* COLORS */.l.theme.accent, ";color:", colors_values/* COLORS */.l.white, ";}&[data-focus-visible]{box-shadow:0 0 0 1.5px ", colors_values/* COLORS */.l.theme.accent, ";outline:2px solid transparent;}&:active,&[data-active]{}", DropdownMenu, ":not(:focus) &:not(:focus)[aria-expanded=\"true\"]{background-color:", LIGHT_BACKGROUND_COLOR, ";color:", colors_values/* COLORS */.l.theme.foreground, ";}svg{fill:currentColor;}" + ( true ? "" : 0),  true ? "" : 0);
const styles_DropdownMenuItem = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)(MenuItem,  true ? {
  target: "e1kdzosf11"
} : 0)(baseItem, ";" + ( true ? "" : 0));
const styles_DropdownMenuCheckboxItem = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)(MenuItemCheckbox,  true ? {
  target: "e1kdzosf10"
} : 0)(baseItem, ";" + ( true ? "" : 0));
const styles_DropdownMenuRadioItem = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)(MenuItemRadio,  true ? {
  target: "e1kdzosf9"
} : 0)(baseItem, ";" + ( true ? "" : 0));
const ItemPrefixWrapper = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("span",  true ? {
  target: "e1kdzosf8"
} : 0)("grid-column:1;", styles_DropdownMenuCheckboxItem, ">&,", styles_DropdownMenuRadioItem, ">&{min-width:", (0,space/* space */.x)(6), ";}", styles_DropdownMenuCheckboxItem, ">&,", styles_DropdownMenuRadioItem, ">&,&:not( :empty ){margin-inline-end:", (0,space/* space */.x)(2), ";}display:flex;align-items:center;justify-content:center;color:", LIGHTER_TEXT_COLOR, ";[data-active-item]:not( [data-focus-visible] )>&,[aria-disabled='true']>&{color:inherit;}" + ( true ? "" : 0));
const DropdownMenuItemContentWrapper = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",  true ? {
  target: "e1kdzosf7"
} : 0)("grid-column:2;display:flex;align-items:center;justify-content:space-between;gap:", (0,space/* space */.x)(3), ";pointer-events:none;" + ( true ? "" : 0));
const DropdownMenuItemChildrenWrapper = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",  true ? {
  target: "e1kdzosf6"
} : 0)("flex:1;display:inline-flex;flex-direction:column;gap:", (0,space/* space */.x)(1), ";" + ( true ? "" : 0));
const ItemSuffixWrapper = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("span",  true ? {
  target: "e1kdzosf5"
} : 0)("flex:0 1 fit-content;min-width:0;width:fit-content;display:flex;align-items:center;justify-content:center;gap:", (0,space/* space */.x)(3), ";color:", LIGHTER_TEXT_COLOR, ";[data-active-item]:not( [data-focus-visible] ) *:not(", DropdownMenu, ") &,[aria-disabled='true'] *:not(", DropdownMenu, ") &{color:inherit;}" + ( true ? "" : 0));
const styles_DropdownMenuGroup = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)(MenuGroup,  true ? {
  target: "e1kdzosf4"
} : 0)( true ? {
  name: "49aokf",
  styles: "display:contents"
} : 0);
const styles_DropdownMenuSeparator = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)(MenuSeparator,  true ? {
  target: "e1kdzosf3"
} : 0)("grid-column:1/-1;border:none;height:", config_values/* default */.A.borderWidth, ";background-color:", props => props.variant === 'toolbar' ? TOOLBAR_VARIANT_BORDER_COLOR : DIVIDER_COLOR, ";margin-block:", (0,space/* space */.x)(2), ";margin-inline:", ITEM_PADDING_INLINE, ";outline:2px solid transparent;" + ( true ? "" : 0));
const SubmenuChevronIcon = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)(build_module_icon/* default */.A,  true ? {
  target: "e1kdzosf2"
} : 0)("width:", (0,space/* space */.x)(1.5), ";", (0,rtl/* rtl */.h)({
  transform: `scaleX(1)`
}, {
  transform: `scaleX(-1)`
}), ";" + ( true ? "" : 0));
const styles_DropdownMenuItemLabel = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)(truncate_component,  true ? {
  target: "e1kdzosf1"
} : 0)("font-size:", (0,font/* font */.g)('default.fontSize'), ";line-height:20px;color:inherit;" + ( true ? "" : 0));
const styles_DropdownMenuItemHelpText = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)(truncate_component,  true ? {
  target: "e1kdzosf0"
} : 0)("font-size:", (0,font/* font */.g)('helpText.fontSize'), ";line-height:16px;color:", LIGHTER_TEXT_COLOR, ";word-break:break-all;[data-active-item]:not( [data-focus-visible] ) *:not( ", DropdownMenu, " ) &,[aria-disabled='true'] *:not( ", DropdownMenu, " ) &{color:inherit;}" + ( true ? "" : 0));
//# sourceMappingURL=styles.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/dropdown-menu-v2/index.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */






const DropdownMenuContext = (0,react.createContext)(undefined);
const DropdownMenuItem = (0,react.forwardRef)(function DropdownMenuItem({
  prefix,
  suffix,
  children,
  hideOnClick = true,
  ...props
}, ref) {
  const dropdownMenuContext = (0,react.useContext)(DropdownMenuContext);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(styles_DropdownMenuItem, {
    ref: ref,
    ...props,
    accessibleWhenDisabled: true,
    hideOnClick: hideOnClick,
    store: dropdownMenuContext?.store,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ItemPrefixWrapper, {
      children: prefix
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(DropdownMenuItemContentWrapper, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DropdownMenuItemChildrenWrapper, {
        children: children
      }), suffix && /*#__PURE__*/(0,jsx_runtime.jsx)(ItemSuffixWrapper, {
        children: suffix
      })]
    })]
  });
});
const DropdownMenuCheckboxItem = (0,react.forwardRef)(function DropdownMenuCheckboxItem({
  suffix,
  children,
  hideOnClick = false,
  ...props
}, ref) {
  const dropdownMenuContext = (0,react.useContext)(DropdownMenuContext);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(styles_DropdownMenuCheckboxItem, {
    ref: ref,
    ...props,
    accessibleWhenDisabled: true,
    hideOnClick: hideOnClick,
    store: dropdownMenuContext?.store,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItemCheck, {
      store: dropdownMenuContext?.store,
      render: /*#__PURE__*/(0,jsx_runtime.jsx)(ItemPrefixWrapper, {})
      // Override some ariakit inline styles
      ,
      style: {
        width: 'auto',
        height: 'auto'
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_icon/* default */.A, {
        icon: library_check,
        size: 24
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(DropdownMenuItemContentWrapper, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DropdownMenuItemChildrenWrapper, {
        children: children
      }), suffix && /*#__PURE__*/(0,jsx_runtime.jsx)(ItemSuffixWrapper, {
        children: suffix
      })]
    })]
  });
});
const radioCheck = /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* SVG */.t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Circle */.jl, {
    cx: 12,
    cy: 12,
    r: 3
  })
});
const DropdownMenuRadioItem = (0,react.forwardRef)(function DropdownMenuRadioItem({
  suffix,
  children,
  hideOnClick = false,
  ...props
}, ref) {
  const dropdownMenuContext = (0,react.useContext)(DropdownMenuContext);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(styles_DropdownMenuRadioItem, {
    ref: ref,
    ...props,
    accessibleWhenDisabled: true,
    hideOnClick: hideOnClick,
    store: dropdownMenuContext?.store,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItemCheck, {
      store: dropdownMenuContext?.store,
      render: /*#__PURE__*/(0,jsx_runtime.jsx)(ItemPrefixWrapper, {})
      // Override some ariakit inline styles
      ,
      style: {
        width: 'auto',
        height: 'auto'
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_icon/* default */.A, {
        icon: radioCheck,
        size: 24
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(DropdownMenuItemContentWrapper, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DropdownMenuItemChildrenWrapper, {
        children: children
      }), suffix && /*#__PURE__*/(0,jsx_runtime.jsx)(ItemSuffixWrapper, {
        children: suffix
      })]
    })]
  });
});
const DropdownMenuGroup = (0,react.forwardRef)(function DropdownMenuGroup(props, ref) {
  const dropdownMenuContext = (0,react.useContext)(DropdownMenuContext);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(styles_DropdownMenuGroup, {
    ref: ref,
    ...props,
    store: dropdownMenuContext?.store
  });
});
const UnconnectedDropdownMenu = (props, ref) => {
  var _props$placement;
  const {
    // Store props
    open,
    defaultOpen = false,
    onOpenChange,
    placement,
    // Menu trigger props
    trigger,
    // Menu props
    gutter,
    children,
    shift,
    modal = true,
    // From internal components context
    variant,
    // Rest
    ...otherProps
  } = (0,use_context_system/* useContextSystem */.A)(props, 'DropdownMenu');
  const parentContext = (0,react.useContext)(DropdownMenuContext);
  const computedDirection = (0,build_module/* isRTL */.V8)() ? 'rtl' : 'ltr';

  // If an explicit value for the `placement` prop is not passed,
  // apply a default placement of `bottom-start` for the root dropdown,
  // and of `right-start` for nested dropdowns.
  let computedPlacement = (_props$placement = props.placement) !== null && _props$placement !== void 0 ? _props$placement : parentContext?.store ? 'right-start' : 'bottom-start';
  // Swap left/right in case of RTL direction
  if (computedDirection === 'rtl') {
    if (/right/.test(computedPlacement)) {
      computedPlacement = computedPlacement.replace('right', 'left');
    } else if (/left/.test(computedPlacement)) {
      computedPlacement = computedPlacement.replace('left', 'right');
    }
  }
  const dropdownMenuStore = useMenuStore({
    parent: parentContext?.store,
    open,
    defaultOpen,
    placement: computedPlacement,
    focusLoop: true,
    setOpen(willBeOpen) {
      onOpenChange?.(willBeOpen);
    },
    rtl: computedDirection === 'rtl'
  });
  const contextValue = (0,react.useMemo)(() => ({
    store: dropdownMenuStore,
    variant
  }), [dropdownMenuStore, variant]);

  // Extract the side from the applied placement — useful for animations.
  const appliedPlacementSide = (0,_2GXGCHW6/* useStoreState */.O$)(dropdownMenuStore, 'placement').split('-')[0];
  if (dropdownMenuStore.parent && !((0,react.isValidElement)(trigger) && DropdownMenuItem === trigger.type)) {
    // eslint-disable-next-line no-console
    console.warn('For nested DropdownMenus, the `trigger` should always be a `DropdownMenuItem`.');
  }
  const hideOnEscape = (0,react.useCallback)(event => {
    // Pressing Escape can cause unexpected consequences (ie. exiting
    // full screen mode on MacOs, close parent modals...).
    event.preventDefault();
    // Returning `true` causes the menu to hide.
    return true;
  }, []);
  const wrapperProps = (0,react.useMemo)(() => ({
    dir: computedDirection,
    style: {
      direction: computedDirection
    }
  }), [computedDirection]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(MenuButton, {
      ref: ref,
      store: dropdownMenuStore,
      render: dropdownMenuStore.parent ? (0,react.cloneElement)(trigger, {
        // Add submenu arrow, unless a `suffix` is explicitly specified
        suffix: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [trigger.props.suffix, /*#__PURE__*/(0,jsx_runtime.jsx)(SubmenuChevronIcon, {
            "aria-hidden": "true",
            icon: chevron_right_small,
            size: 24,
            preserveAspectRatio: "xMidYMid slice"
          })]
        })
      }) : trigger
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(DropdownMenu, {
      ...otherProps,
      modal: modal,
      store: dropdownMenuStore
      // Root menu has an 8px distance from its trigger,
      // otherwise 0 (which causes the submenu to slightly overlap)
      ,
      gutter: gutter !== null && gutter !== void 0 ? gutter : dropdownMenuStore.parent ? 0 : 8
      // Align nested menu by the same (but opposite) amount
      // as the menu container's padding.
      ,
      shift: shift !== null && shift !== void 0 ? shift : dropdownMenuStore.parent ? -4 : 0,
      hideOnHoverOutside: false,
      "data-side": appliedPlacementSide,
      variant: variant,
      wrapperProps: wrapperProps,
      hideOnEscape: hideOnEscape,
      unmountOnHide: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(DropdownMenuContext.Provider, {
        value: contextValue,
        children: children
      })
    })]
  });
};
const dropdown_menu_v2_DropdownMenu = (0,context_connect/* contextConnect */.KZ)(UnconnectedDropdownMenu, 'DropdownMenu');
const DropdownMenuSeparator = (0,react.forwardRef)(function DropdownMenuSeparator(props, ref) {
  const dropdownMenuContext = (0,react.useContext)(DropdownMenuContext);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(styles_DropdownMenuSeparator, {
    ref: ref,
    ...props,
    store: dropdownMenuContext?.store,
    variant: dropdownMenuContext?.variant
  });
});
const DropdownMenuItemLabel = (0,react.forwardRef)(function DropdownMenuItemLabel(props, ref) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(styles_DropdownMenuItemLabel, {
    numberOfLines: 1,
    ref: ref,
    ...props
  });
});
const DropdownMenuItemHelpText = (0,react.forwardRef)(function DropdownMenuItemHelpText(props, ref) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(styles_DropdownMenuItemHelpText, {
    numberOfLines: 2,
    ref: ref,
    ...props
  });
});
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/context/context-system-provider.js + 1 modules
var context_system_provider = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/context/context-system-provider.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/theme/styles.js

function styles_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */

const colorVariables = ({
  colors
}) => {
  const shades = Object.entries(colors.gray || {}).map(([k, v]) => `--wp-components-color-gray-${k}: ${v};`).join('');
  return [/*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("--wp-components-color-accent:", colors.accent, ";--wp-components-color-accent-darker-10:", colors.accentDarker10, ";--wp-components-color-accent-darker-20:", colors.accentDarker20, ";--wp-components-color-accent-inverted:", colors.accentInverted, ";--wp-components-color-background:", colors.background, ";--wp-components-color-foreground:", colors.foreground, ";--wp-components-color-foreground-inverted:", colors.foregroundInverted, ";", shades, ";" + ( true ? "" : 0),  true ? "" : 0)];
};
const Wrapper = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",  true ? {
  target: "e1krjpvb0"
} : 0)( true ? {
  name: "1a3idx0",
  styles: "color:var( --wp-components-color-foreground, currentColor )"
} : 0);
//# sourceMappingURL=styles.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/index.mjs
var colord = __webpack_require__("../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/index.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/plugins/a11y.mjs
var a11y = __webpack_require__("../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/plugins/a11y.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/plugins/names.mjs
var names = __webpack_require__("../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/plugins/names.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+warning@3.6.0/node_modules/@wordpress/warning/build-module/index.js + 1 modules
var warning_build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+warning@3.6.0/node_modules/@wordpress/warning/build-module/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/theme/color-algorithms.js
/**
 * External dependencies
 */




/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


(0,colord/* extend */.X$)([names/* default */.A, a11y/* default */.A]);
function generateThemeVariables(inputs) {
  validateInputs(inputs);
  const generatedColors = {
    ...generateAccentDependentColors(inputs.accent),
    ...generateBackgroundDependentColors(inputs.background)
  };
  warnContrastIssues(checkContrasts(inputs, generatedColors));
  return {
    colors: generatedColors
  };
}
function validateInputs(inputs) {
  for (const [key, value] of Object.entries(inputs)) {
    if (typeof value !== 'undefined' && !(0,colord/* colord */.Mj)(value).isValid()) {
      globalThis.SCRIPT_DEBUG === true ? (0,warning_build_module/* default */.A)(`wp.components.Theme: "${value}" is not a valid color value for the '${key}' prop.`) : void 0;
    }
  }
}
function checkContrasts(inputs, outputs) {
  const background = inputs.background || colors_values/* COLORS */.l.white;
  const accent = inputs.accent || '#3858e9';
  const foreground = outputs.foreground || colors_values/* COLORS */.l.gray[900];
  const gray = outputs.gray || colors_values/* COLORS */.l.gray;
  return {
    accent: (0,colord/* colord */.Mj)(background).isReadable(accent) ? undefined : `The background color ("${background}") does not have sufficient contrast against the accent color ("${accent}").`,
    foreground: (0,colord/* colord */.Mj)(background).isReadable(foreground) ? undefined : `The background color provided ("${background}") does not have sufficient contrast against the standard foreground colors.`,
    grays: (0,colord/* colord */.Mj)(background).contrast(gray[600]) >= 3 && (0,colord/* colord */.Mj)(background).contrast(gray[700]) >= 4.5 ? undefined : `The background color provided ("${background}") cannot generate a set of grayscale foreground colors with sufficient contrast. Try adjusting the color to be lighter or darker.`
  };
}
function warnContrastIssues(issues) {
  for (const error of Object.values(issues)) {
    if (error) {
      globalThis.SCRIPT_DEBUG === true ? (0,warning_build_module/* default */.A)('wp.components.Theme: ' + error) : void 0;
    }
  }
}
function generateAccentDependentColors(accent) {
  if (!accent) {
    return {};
  }
  return {
    accent,
    accentDarker10: (0,colord/* colord */.Mj)(accent).darken(0.1).toHex(),
    accentDarker20: (0,colord/* colord */.Mj)(accent).darken(0.2).toHex(),
    accentInverted: getForegroundForColor(accent)
  };
}
function generateBackgroundDependentColors(background) {
  if (!background) {
    return {};
  }
  const foreground = getForegroundForColor(background);
  return {
    background,
    foreground,
    foregroundInverted: getForegroundForColor(foreground),
    gray: generateShades(background, foreground)
  };
}
function getForegroundForColor(color) {
  return (0,colord/* colord */.Mj)(color).isDark() ? colors_values/* COLORS */.l.white : colors_values/* COLORS */.l.gray[900];
}
function generateShades(background, foreground) {
  // How much darkness you need to add to #fff to get the COLORS.gray[n] color
  const SHADES = {
    100: 0.06,
    200: 0.121,
    300: 0.132,
    400: 0.2,
    600: 0.42,
    700: 0.543,
    800: 0.821
  };

  // Darkness of COLORS.gray[ 900 ], relative to #fff
  const limit = 0.884;
  const direction = (0,colord/* colord */.Mj)(background).isDark() ? 'lighten' : 'darken';

  // Lightness delta between the background and foreground colors
  const range = Math.abs((0,colord/* colord */.Mj)(background).toHsl().l - (0,colord/* colord */.Mj)(foreground).toHsl().l) / 100;
  const result = {};
  Object.entries(SHADES).forEach(([key, value]) => {
    result[parseInt(key)] = (0,colord/* colord */.Mj)(background)[direction](value / limit * range).toHex();
  });
  return result;
}
//# sourceMappingURL=color-algorithms.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js
var use_cx = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/theme/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





/**
 * `Theme` allows defining theme variables for components in the `@wordpress/components` package.
 *
 * Multiple `Theme` components can be nested in order to override specific theme variables.
 *
 *
 * ```jsx
 * const Example = () => {
 *   return (
 *     <Theme accent="red">
 *       <Button variant="primary">I'm red</Button>
 *       <Theme accent="blue">
 *         <Button variant="primary">I'm blue</Button>
 *       </Theme>
 *     </Theme>
 *   );
 * };
 * ```
 */

function Theme({
  accent,
  background,
  className,
  ...props
}) {
  const cx = (0,use_cx/* useCx */.l)();
  const classes = (0,react.useMemo)(() => cx(...colorVariables(generateThemeVariables({
    accent,
    background
  })), className), [accent, background, className, cx]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Wrapper, {
    className: classes,
    ...props
  });
}
/* harmony default export */ const theme = (Theme);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/KZ2S4ZC5.js
"use client";




// src/select/select-context.tsx

var KZ2S4ZC5_ctx = (0,HKOOKEDE/* createStoreContext */.B0)(
  [_54MGSIOI/* PopoverContextProvider */.wf, CompositeContextProvider],
  [_54MGSIOI/* PopoverScopedContextProvider */.s1, CompositeScopedContextProvider]
);
var useSelectContext = KZ2S4ZC5_ctx.useContext;
var useSelectScopedContext = KZ2S4ZC5_ctx.useScopedContext;
var useSelectProviderContext = KZ2S4ZC5_ctx.useProviderContext;
var SelectContextProvider = KZ2S4ZC5_ctx.ContextProvider;
var SelectScopedContextProvider = KZ2S4ZC5_ctx.ScopedContextProvider;
var SelectItemCheckedContext = (0,react.createContext)(false);
var SelectHeadingContext = (0,react.createContext)(null);



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/tab/tab-store.js
"use client";








// src/tab/tab-store.ts
function createTabStore(_a = {}) {
  var _b = _a, {
    composite: parentComposite,
    combobox
  } = _b, props = (0,_3YLGPPWQ/* __objRest */.YG)(_b, [
    "composite",
    "combobox"
  ]);
  const independentKeys = [
    "items",
    "renderedItems",
    "moves",
    "orientation",
    "virtualFocus",
    "includesBaseElement",
    "baseElement",
    "focusLoop",
    "focusShift",
    "focusWrap"
  ];
  const store = (0,EQQLU3CG/* mergeStore */.od)(
    props.store,
    (0,EQQLU3CG/* omit */.cJ)(parentComposite, independentKeys),
    (0,EQQLU3CG/* omit */.cJ)(combobox, independentKeys)
  );
  const syncState = store == null ? void 0 : store.getState();
  const composite = createCompositeStore((0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
    store,
    // We need to explicitly set the default value of `includesBaseElement` to
    // `false` since we don't want the composite store to default it to `true`
    // when the activeId state is null, which could be the case when rendering
    // combobox with tab.
    includesBaseElement: (0,PBFD2E7P/* defaultValue */.Jh)(
      props.includesBaseElement,
      syncState == null ? void 0 : syncState.includesBaseElement,
      false
    ),
    orientation: (0,PBFD2E7P/* defaultValue */.Jh)(
      props.orientation,
      syncState == null ? void 0 : syncState.orientation,
      "horizontal"
    ),
    focusLoop: (0,PBFD2E7P/* defaultValue */.Jh)(props.focusLoop, syncState == null ? void 0 : syncState.focusLoop, true)
  }));
  const panels = createCollectionStore();
  const initialState = (0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, composite.getState()), {
    selectedId: (0,PBFD2E7P/* defaultValue */.Jh)(
      props.selectedId,
      syncState == null ? void 0 : syncState.selectedId,
      props.defaultSelectedId
    ),
    selectOnMove: (0,PBFD2E7P/* defaultValue */.Jh)(
      props.selectOnMove,
      syncState == null ? void 0 : syncState.selectOnMove,
      true
    )
  });
  const tab = (0,EQQLU3CG/* createStore */.y$)(initialState, composite, store);
  (0,EQQLU3CG/* setup */.mj)(
    tab,
    () => (0,EQQLU3CG/* sync */.OH)(tab, ["moves"], () => {
      const { activeId, selectOnMove } = tab.getState();
      if (!selectOnMove) return;
      if (!activeId) return;
      const tabItem = composite.item(activeId);
      if (!tabItem) return;
      if (tabItem.dimmed) return;
      if (tabItem.disabled) return;
      tab.setState("selectedId", tabItem.id);
    })
  );
  (0,EQQLU3CG/* setup */.mj)(
    tab,
    () => (0,EQQLU3CG/* batch */.vA)(tab, ["selectedId"], (state, prev) => {
      if (parentComposite && state.selectedId === prev.selectedId) return;
      tab.setState("activeId", state.selectedId);
    })
  );
  (0,EQQLU3CG/* setup */.mj)(
    tab,
    () => (0,EQQLU3CG/* sync */.OH)(tab, ["selectedId", "renderedItems"], (state) => {
      if (state.selectedId !== void 0) return;
      const { activeId, renderedItems } = tab.getState();
      const tabItem = composite.item(activeId);
      if (tabItem && !tabItem.disabled && !tabItem.dimmed) {
        tab.setState("selectedId", tabItem.id);
      } else {
        const tabItem2 = renderedItems.find(
          (item) => !item.disabled && !item.dimmed
        );
        tab.setState("selectedId", tabItem2 == null ? void 0 : tabItem2.id);
      }
    })
  );
  (0,EQQLU3CG/* setup */.mj)(
    tab,
    () => (0,EQQLU3CG/* sync */.OH)(tab, ["renderedItems"], (state) => {
      const tabs = state.renderedItems;
      if (!tabs.length) return;
      return (0,EQQLU3CG/* sync */.OH)(panels, ["renderedItems"], (state2) => {
        const items = state2.renderedItems;
        const hasOrphanPanels = items.some((panel) => !panel.tabId);
        if (!hasOrphanPanels) return;
        items.forEach((panel, i) => {
          if (panel.tabId) return;
          const tabItem = tabs[i];
          if (!tabItem) return;
          panels.renderItem((0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, panel), { tabId: tabItem.id }));
        });
      });
    })
  );
  let selectedIdFromSelectedValue = null;
  (0,EQQLU3CG/* setup */.mj)(tab, () => {
    const backupSelectedId = () => {
      selectedIdFromSelectedValue = tab.getState().selectedId;
    };
    const restoreSelectedId = () => {
      tab.setState("selectedId", selectedIdFromSelectedValue);
    };
    if (parentComposite && "setSelectElement" in parentComposite) {
      return (0,PBFD2E7P/* chain */.cy)(
        (0,EQQLU3CG/* sync */.OH)(parentComposite, ["value"], backupSelectedId),
        (0,EQQLU3CG/* sync */.OH)(parentComposite, ["open"], restoreSelectedId)
      );
    }
    if (!combobox) return;
    return (0,PBFD2E7P/* chain */.cy)(
      (0,EQQLU3CG/* sync */.OH)(combobox, ["selectedValue"], backupSelectedId),
      (0,EQQLU3CG/* sync */.OH)(combobox, ["open"], restoreSelectedId)
    );
  });
  return (0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, composite), tab), {
    panels,
    setSelectedId: (id) => tab.setState("selectedId", id),
    select: (id) => {
      tab.setState("selectedId", id);
      composite.move(id);
    }
  });
}


;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/JZUY7XL6.js
"use client";







// src/tab/tab-store.ts


function useTabStoreProps(store, update, props) {
  (0,Z32BISHQ/* useUpdateEffect */.w5)(update, [props.composite, props.combobox]);
  store = useCompositeStoreProps(store, update, props);
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "selectedId", "setSelectedId");
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "selectOnMove");
  const [panels, updatePanels] = (0,_2GXGCHW6/* useStore */.Pj)(() => store.panels, {});
  (0,Z32BISHQ/* useUpdateEffect */.w5)(updatePanels, [store, updatePanels]);
  return Object.assign(
    (0,react.useMemo)(() => (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({}, store), { panels }), [store, panels]),
    { composite: props.composite, combobox: props.combobox }
  );
}
function useTabStore(props = {}) {
  const combobox = useComboboxContext();
  const composite = useSelectContext() || combobox;
  props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
    composite: props.composite !== void 0 ? props.composite : composite,
    combobox: props.combobox !== void 0 ? props.combobox : combobox
  });
  const [store, update] = (0,_2GXGCHW6/* useStore */.Pj)(createTabStore, props);
  return useTabStoreProps(store, update, props);
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.6.0_react@17.0.2/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js
var use_instance_id = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.6.0_react@17.0.2/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/tabs/context.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

const TabsContext = (0,react.createContext)(undefined);
const useTabsContext = () => (0,react.useContext)(TabsContext);
//# sourceMappingURL=context.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/TNITL632.js
"use client";



// src/tab/tab-context.tsx
var TNITL632_ctx = (0,HKOOKEDE/* createStoreContext */.B0)(
  [CompositeContextProvider],
  [CompositeScopedContextProvider]
);
var useTabContext = TNITL632_ctx.useContext;
var useTabScopedContext = TNITL632_ctx.useScopedContext;
var useTabProviderContext = TNITL632_ctx.useProviderContext;
var TabContextProvider = TNITL632_ctx.ContextProvider;
var TabScopedContextProvider = TNITL632_ctx.ScopedContextProvider;



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/tab/tab.js
"use client";















// src/tab/tab.tsx



var tab_TagName = "button";
var useTab = (0,HKOOKEDE/* createHook */.ab)(function useTab2(_a) {
  var _b = _a, {
    store,
    getItem: getItemProp
  } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, [
    "store",
    "getItem"
  ]);
  var _a2;
  const context = useTabScopedContext();
  store = store || context;
  (0,PBFD2E7P/* invariant */.V1)(
    store,
     false && 0
  );
  const defaultId = (0,Z32BISHQ/* useId */.Bi)();
  const id = props.id || defaultId;
  const dimmed = (0,PBFD2E7P/* disabledFromProps */.$f)(props);
  const getItem = (0,react.useCallback)(
    (item) => {
      const nextItem = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({}, item), { dimmed });
      if (getItemProp) {
        return getItemProp(nextItem);
      }
      return nextItem;
    },
    [dimmed, getItemProp]
  );
  const onClickProp = props.onClick;
  const onClick = (0,Z32BISHQ/* useEvent */._q)((event) => {
    onClickProp == null ? void 0 : onClickProp(event);
    if (event.defaultPrevented) return;
    store == null ? void 0 : store.setSelectedId(id);
  });
  const panelId = store.panels.useState(
    (state) => {
      var _a3;
      return (_a3 = state.items.find((item) => item.tabId === id)) == null ? void 0 : _a3.id;
    }
  );
  const shouldRegisterItem = defaultId ? props.shouldRegisterItem : false;
  const isActive = store.useState((state) => !!id && state.activeId === id);
  const selected = store.useState((state) => !!id && state.selectedId === id);
  const hasActiveItem = store.useState((state) => !!store.item(state.activeId));
  const canRegisterComposedItem = isActive || selected && !hasActiveItem;
  const accessibleWhenDisabled = selected || ((_a2 = props.accessibleWhenDisabled) != null ? _a2 : true);
  const isWithinVirtualFocusComposite = (0,_2GXGCHW6/* useStoreState */.O$)(
    store.combobox || store.composite,
    "virtualFocus"
  );
  if (isWithinVirtualFocusComposite) {
    props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
      tabIndex: -1
    });
  }
  props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
    id,
    role: "tab",
    "aria-selected": selected,
    "aria-controls": panelId || void 0
  }, props), {
    onClick
  });
  if (store.composite) {
    const defaultProps = {
      id,
      accessibleWhenDisabled,
      store: store.composite,
      shouldRegisterItem: canRegisterComposedItem && shouldRegisterItem,
      render: props.render
    };
    props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
      render: /* @__PURE__ */ (0,jsx_runtime.jsx)(
        _3CCTMYB6_CompositeItem,
        (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({}, defaultProps), {
          render: store.combobox && store.composite !== store.combobox ? /* @__PURE__ */ (0,jsx_runtime.jsx)(_3CCTMYB6_CompositeItem, (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({}, defaultProps), { store: store.combobox })) : defaultProps.render
        })
      )
    });
  }
  props = useCompositeItem((0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
    store
  }, props), {
    accessibleWhenDisabled,
    getItem,
    shouldRegisterItem
  }));
  return props;
});
var Tab = (0,HKOOKEDE/* memo */.ph)(
  (0,HKOOKEDE/* forwardRef */.Rf)(function Tab2(props) {
    const htmlProps = useTab(props);
    return (0,HKOOKEDE/* createElement */.n)(tab_TagName, htmlProps);
  })
);


// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/KGK2TTFO.js
var KGK2TTFO = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/KGK2TTFO.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/tab/tab-panel.js
"use client";
















// src/tab/tab-panel.tsx





var tab_panel_TagName = "div";
var useTabPanel = (0,HKOOKEDE/* createHook */.ab)(
  function useTabPanel2(_a) {
    var _b = _a, {
      store,
      unmountOnHide,
      tabId: tabIdProp,
      getItem: getItemProp
    } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, [
      "store",
      "unmountOnHide",
      "tabId",
      "getItem"
    ]);
    const context = useTabProviderContext();
    store = store || context;
    (0,PBFD2E7P/* invariant */.V1)(
      store,
       false && 0
    );
    const ref = (0,react.useRef)(null);
    const id = (0,Z32BISHQ/* useId */.Bi)(props.id);
    const [hasTabbableChildren, setHasTabbableChildren] = (0,react.useState)(false);
    (0,react.useEffect)(() => {
      const element = ref.current;
      if (!element) return;
      const tabbable = (0,utils_focus/* getAllTabbableIn */.a9)(element);
      setHasTabbableChildren(!!tabbable.length);
    }, []);
    const getItem = (0,react.useCallback)(
      (item) => {
        const nextItem = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({}, item), { id: id || item.id, tabId: tabIdProp });
        if (getItemProp) {
          return getItemProp(nextItem);
        }
        return nextItem;
      },
      [id, tabIdProp, getItemProp]
    );
    const onKeyDownProp = props.onKeyDown;
    const onKeyDown = (0,Z32BISHQ/* useEvent */._q)((event) => {
      onKeyDownProp == null ? void 0 : onKeyDownProp(event);
      if (event.defaultPrevented) return;
      if (!(store == null ? void 0 : store.composite)) return;
      const state = store.getState();
      const tab = createTabStore((0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({}, state), { activeId: state.selectedId }));
      tab.setState("renderedItems", state.renderedItems);
      const keyMap = {
        ArrowLeft: tab.previous,
        ArrowRight: tab.next,
        Home: tab.first,
        End: tab.last
      };
      const action = keyMap[event.key];
      if (!action) return;
      const nextId = action();
      if (!nextId) return;
      event.preventDefault();
      store.move(nextId);
    });
    props = (0,Z32BISHQ/* useWrapElement */.w7)(
      props,
      (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(TabScopedContextProvider, { value: store, children: element }),
      [store]
    );
    const tabId = store.panels.useState(
      () => {
        var _a2;
        return tabIdProp || ((_a2 = store == null ? void 0 : store.panels.item(id)) == null ? void 0 : _a2.tabId);
      }
    );
    const open = store.useState(
      (state) => !!tabId && state.selectedId === tabId
    );
    const disclosure = (0,KGK2TTFO/* useDisclosureStore */.E)({ open });
    const mounted = disclosure.useState("mounted");
    props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      id,
      role: "tabpanel",
      "aria-labelledby": tabId || void 0
    }, props), {
      children: unmountOnHide && !mounted ? null : props.children,
      ref: (0,Z32BISHQ/* useMergeRefs */.SV)(ref, props.ref),
      onKeyDown
    });
    props = (0,HGZKAGPL/* useFocusable */.W)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      // If the tab panel is rendered as part of another composite widget such
      // as combobox, it should not be focusable.
      focusable: !store.composite && !hasTabbableChildren
    }, props));
    props = (0,BSEL4YAF/* useDisclosureContent */.aT)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({ store: disclosure }, props));
    props = useCollectionItem((0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({ store: store.panels }, props), { getItem }));
    return props;
  }
);
var TabPanel = (0,HKOOKEDE/* forwardRef */.Rf)(function TabPanel2(props) {
  const htmlProps = useTabPanel(props);
  return (0,HKOOKEDE/* createElement */.n)(tab_panel_TagName, htmlProps);
});


;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/tabs/styles.js

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


const TabListWrapper = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",  true ? {
  target: "enfox0g2"
} : 0)("position:relative;display:flex;align-items:stretch;flex-direction:row;text-align:center;&[aria-orientation='vertical']{flex-direction:column;text-align:start;}@media not ( prefers-reduced-motion: reduce ){&.is-animation-enabled::after{transition-property:left,top,width,height;transition-duration:0.2s;transition-timing-function:ease-out;}}&::after{content:'';position:absolute;pointer-events:none;outline:2px solid transparent;outline-offset:-1px;}&:not( [aria-orientation='vertical'] )::after{bottom:0;left:var( --indicator-left );width:var( --indicator-width );height:0;border-bottom:var( --wp-admin-border-width-focus ) solid ", colors_values/* COLORS */.l.theme.accent, ";}&[aria-orientation='vertical']::after{z-index:-1;left:0;width:100%;top:var( --indicator-top );height:var( --indicator-height );background-color:", colors_values/* COLORS */.l.theme.gray[100], ";}" + ( true ? "" : 0));
const styles_Tab = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)(Tab,  true ? {
  target: "enfox0g1"
} : 0)("&{display:inline-flex;align-items:center;position:relative;border-radius:0;min-height:", (0,space/* space */.x)(12), ";height:auto;background:transparent;border:none;box-shadow:none;cursor:pointer;line-height:1.2;padding:", (0,space/* space */.x)(4), ";margin-left:0;font-weight:500;text-align:inherit;hyphens:auto;color:", colors_values/* COLORS */.l.theme.foreground, ";&[aria-disabled='true']{cursor:default;color:", colors_values/* COLORS */.l.ui.textDisabled, ";}&:not( [aria-disabled='true'] ):hover{color:", colors_values/* COLORS */.l.theme.accent, ";}&:focus:not( :disabled ){position:relative;box-shadow:none;outline:none;}&::before{content:'';position:absolute;top:", (0,space/* space */.x)(3), ";right:", (0,space/* space */.x)(3), ";bottom:", (0,space/* space */.x)(3), ";left:", (0,space/* space */.x)(3), ";pointer-events:none;outline:var( --wp-admin-border-width-focus ) solid ", colors_values/* COLORS */.l.theme.accent, ";border-radius:2px;opacity:0;@media not ( prefers-reduced-motion ){transition:opacity 0.1s linear;}}&:focus-visible::before{opacity:1;}}[aria-orientation='vertical'] &{min-height:", (0,space/* space */.x)(10), ";}" + ( true ? "" : 0));
const styles_TabPanel = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)(TabPanel,  true ? {
  target: "enfox0g0"
} : 0)("&:focus{box-shadow:none;outline:none;}&:focus-visible{border-radius:2px;box-shadow:0 0 0 var( --wp-admin-border-width-focus ) ", colors_values/* COLORS */.l.theme.accent, ";outline:2px solid transparent;outline-offset:0;}" + ( true ? "" : 0));
//# sourceMappingURL=styles.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/tabs/tab.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */





const tab_Tab = (0,react.forwardRef)(function Tab({
  children,
  tabId,
  disabled,
  render,
  ...otherProps
}, ref) {
  const context = useTabsContext();
  if (!context) {
    globalThis.SCRIPT_DEBUG === true ? (0,warning_build_module/* default */.A)('`Tabs.Tab` must be wrapped in a `Tabs` component.') : void 0;
    return null;
  }
  const {
    store,
    instanceId
  } = context;
  const instancedTabId = `${instanceId}-${tabId}`;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(styles_Tab, {
    ref: ref,
    store: store,
    id: instancedTabId,
    disabled: disabled,
    render: render,
    ...otherProps,
    children: children
  });
});
//# sourceMappingURL=tab.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/tab/tab-list.js
"use client";












// src/tab/tab-list.tsx


var tab_list_TagName = "div";
var useTabList = (0,HKOOKEDE/* createHook */.ab)(
  function useTabList2(_a) {
    var _b = _a, { store } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, ["store"]);
    const context = useTabProviderContext();
    store = store || context;
    (0,PBFD2E7P/* invariant */.V1)(
      store,
       false && 0
    );
    const orientation = store.useState(
      (state) => state.orientation === "both" ? void 0 : state.orientation
    );
    props = (0,Z32BISHQ/* useWrapElement */.w7)(
      props,
      (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(TabScopedContextProvider, { value: store, children: element }),
      [store]
    );
    if (store.composite) {
      props = (0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
        focusable: false
      }, props);
    }
    props = (0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      role: "tablist",
      "aria-orientation": orientation
    }, props);
    props = useComposite((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({ store }, props));
    return props;
  }
);
var tab_list_TabList = (0,HKOOKEDE/* forwardRef */.Rf)(function TabList2(props) {
  const htmlProps = useTabList(props);
  return (0,HKOOKEDE/* createElement */.n)(tab_list_TagName, htmlProps);
});


// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/utils/hooks/use-event.js
/* eslint-disable jsdoc/require-param */
/**
 * WordPress dependencies
 */


/**
 * Any function.
 */

/**
 * Creates a stable callback function that has access to the latest state and
 * can be used within event handlers and effect callbacks. Throws when used in
 * the render phase.
 *
 * @example
 *
 * ```tsx
 * function Component(props) {
 *   const onClick = useEvent(props.onClick);
 *   React.useEffect(() => {}, [onClick]);
 * }
 * ```
 */
function useEvent(callback) {
  const ref = (0,react.useRef)(() => {
    throw new Error('Cannot call an event handler while rendering.');
  });
  (0,react.useInsertionEffect)(() => {
    ref.current = callback;
  });
  return (0,react.useCallback)((...args) => ref.current?.(...args), []);
}
/* eslint-enable jsdoc/require-param */
//# sourceMappingURL=use-event.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/utils/element-rect.js
/* eslint-disable jsdoc/require-param */
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * `useTrackElementRectUpdates` options.
 */

/**
 * Tracks an element's "rect" (size and position) and fires `onRect` for all
 * of its discrete values. The element can be changed dynamically and **it
 * must not be stored in a ref**. Instead, it should be stored in a React
 * state or equivalent.
 *
 * By default, `onRect` is called initially for the target element (including
 * when the target element changes), not only on size or position updates.
 * This allows consumers of the hook to always be in sync with all rect values
 * of the target element throughout its lifetime. This behavior can be
 * disabled by setting the `fireOnElementInit` option to `false`.
 *
 * Under the hood, it sets up a `ResizeObserver` that tracks the element. The
 * target element can be changed dynamically, and the observer will be
 * updated accordingly.
 *
 * @example
 *
 * ```tsx
 * const [ targetElement, setTargetElement ] = useState< HTMLElement | null >();
 *
 * useTrackElementRectUpdates( targetElement, ( element ) => {
 *   console.log( 'Element resized:', element );
 * } );
 *
 * <div ref={ setTargetElement } />;
 * ```
 */
function useTrackElementRectUpdates(
/**
 * The target element to observe. It can be changed dynamically.
 */
targetElement,
/**
 * Callback to fire when the element is resized. It will also be
 * called when the observer is set up, unless `fireOnElementInit` is
 * set to `false`.
 */
onRect, {
  fireOnElementInit = true
} = {}) {
  const onRectEvent = useEvent(onRect);
  const observedElementRef = (0,react.useRef)();
  const resizeObserverRef = (0,react.useRef)();

  // TODO: could this be a layout effect?
  (0,react.useEffect)(() => {
    if (targetElement === observedElementRef.current) {
      return;
    }
    observedElementRef.current = targetElement;

    // Set up a ResizeObserver.
    if (!resizeObserverRef.current) {
      resizeObserverRef.current = new ResizeObserver(entries => {
        if (observedElementRef.current) {
          onRectEvent(observedElementRef.current, entries);
        }
      });
    }
    const {
      current: resizeObserver
    } = resizeObserverRef;

    // Observe new element.
    if (targetElement) {
      if (fireOnElementInit) {
        // TODO: investigate if this can be removed,
        // see: https://stackoverflow.com/a/60026394
        onRectEvent(targetElement);
      }
      resizeObserver.observe(targetElement);
    }
    return () => {
      // Unobserve previous element.
      if (observedElementRef.current) {
        resizeObserver.unobserve(observedElementRef.current);
      }
    };
  }, [fireOnElementInit, onRectEvent, targetElement]);
}

/**
 * The position and dimensions of an element, relative to its offset parent.
 */

/**
 * An `ElementOffsetRect` object with all values set to zero.
 */
const NULL_ELEMENT_OFFSET_RECT = {
  left: 0,
  top: 0,
  width: 0,
  height: 0
};

/**
 * Returns the position and dimensions of an element, relative to its offset
 * parent. This is useful in contexts where `getBoundingClientRect` is not
 * suitable, such as when the element is transformed.
 *
 * **Note:** the `left` and `right` values are adjusted due to a limitation
 * in the way the browser calculates the offset position of the element,
 * which can cause unwanted scrollbars to appear. This adjustment makes the
 * values potentially inaccurate within a range of 1 pixel.
 */
function getElementOffsetRect(element) {
  return {
    // The adjustments mentioned in the documentation above are necessary
    // because `offsetLeft` and `offsetTop` are rounded to the nearest pixel,
    // which can result in a position mismatch that causes unwanted overflow.
    // For context, see: https://github.com/WordPress/gutenberg/pull/61979
    left: Math.max(element.offsetLeft - 1, 0),
    top: Math.max(element.offsetTop - 1, 0),
    // This is a workaround to obtain these values with a sub-pixel precision,
    // since `offsetWidth` and `offsetHeight` are rounded to the nearest pixel.
    width: parseFloat(getComputedStyle(element).width),
    height: parseFloat(getComputedStyle(element).height)
  };
}

/**
 * Tracks the position and dimensions of an element, relative to its offset
 * parent. The element can be changed dynamically.
 */
function useTrackElementOffsetRect(targetElement) {
  const [indicatorPosition, setIndicatorPosition] = (0,react.useState)(NULL_ELEMENT_OFFSET_RECT);
  useTrackElementRectUpdates(targetElement, element => setIndicatorPosition(getElementOffsetRect(element)));
  return indicatorPosition;
}

/* eslint-enable jsdoc/require-param */
//# sourceMappingURL=element-rect.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/utils/hooks/use-on-value-update.js
/* eslint-disable jsdoc/require-param */
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Context object for the `onUpdate` callback of `useOnValueUpdate`.
 */

/**
 * Calls the `onUpdate` callback when the `value` changes.
 */
function useOnValueUpdate(
/**
 * The value to watch for changes.
 */
value,
/**
 * Callback to fire when the value changes.
 */
onUpdate) {
  const previousValueRef = (0,react.useRef)(value);
  const updateCallbackEvent = useEvent(onUpdate);
  (0,react.useEffect)(() => {
    if (previousValueRef.current !== value) {
      updateCallbackEvent({
        previousValue: previousValueRef.current
      });
      previousValueRef.current = value;
    }
  }, [updateCallbackEvent, value]);
}
/* eslint-enable jsdoc/require-param */
//# sourceMappingURL=use-on-value-update.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/tabs/tablist.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */







const TabList = (0,react.forwardRef)(function TabList({
  children,
  ...otherProps
}, ref) {
  const context = useTabsContext();
  const tabStoreState = (0,_2GXGCHW6/* useStoreState */.O$)(context?.store);
  const selectedId = tabStoreState?.selectedId;
  const indicatorPosition = useTrackElementOffsetRect(context?.store.item(selectedId)?.element);
  const [animationEnabled, setAnimationEnabled] = (0,react.useState)(false);
  useOnValueUpdate(selectedId, ({
    previousValue
  }) => previousValue && setAnimationEnabled(true));
  if (!context || !tabStoreState) {
    globalThis.SCRIPT_DEBUG === true ? (0,warning_build_module/* default */.A)('`Tabs.TabList` must be wrapped in a `Tabs` component.') : void 0;
    return null;
  }
  const {
    store
  } = context;
  const {
    activeId,
    selectOnMove
  } = tabStoreState;
  const {
    setActiveId
  } = store;
  const onBlur = () => {
    if (!selectOnMove) {
      return;
    }

    // When automatic tab selection is on, make sure that the active tab is up
    // to date with the selected tab when leaving the tablist. This makes sure
    // that the selected tab will receive keyboard focus when tabbing back into
    // the tablist.
    if (selectedId !== activeId) {
      setActiveId(selectedId);
    }
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(tab_list_TabList, {
    ref: ref,
    store: store,
    render: /*#__PURE__*/(0,jsx_runtime.jsx)(TabListWrapper, {
      onTransitionEnd: event => {
        if (event.pseudoElement === '::after') {
          setAnimationEnabled(false);
        }
      }
    }),
    onBlur: onBlur,
    ...otherProps,
    style: {
      '--indicator-left': `${indicatorPosition.left}px`,
      '--indicator-top': `${indicatorPosition.top}px`,
      '--indicator-width': `${indicatorPosition.width}px`,
      '--indicator-height': `${indicatorPosition.height}px`,
      ...otherProps.style
    },
    className: (0,clsx/* default */.A)(animationEnabled ? 'is-animation-enabled' : '', otherProps.className),
    children: children
  });
});
//# sourceMappingURL=tablist.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/tabs/tabpanel.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





const tabpanel_TabPanel = (0,react.forwardRef)(function TabPanel({
  children,
  tabId,
  focusable = true,
  ...otherProps
}, ref) {
  const context = useTabsContext();
  const selectedId = (0,_2GXGCHW6/* useStoreState */.O$)(context?.store, 'selectedId');
  if (!context) {
    globalThis.SCRIPT_DEBUG === true ? (0,warning_build_module/* default */.A)('`Tabs.TabPanel` must be wrapped in a `Tabs` component.') : void 0;
    return null;
  }
  const {
    store,
    instanceId
  } = context;
  const instancedTabId = `${instanceId}-${tabId}`;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(styles_TabPanel, {
    ref: ref,
    store: store
    // For TabPanel, the id passed here is the id attribute of the DOM
    // element.
    // `tabId` is the id of the tab that controls this panel.
    ,
    id: `${instancedTabId}-view`,
    tabId: instancedTabId,
    focusable: focusable,
    ...otherProps,
    children: selectedId === instancedTabId && children
  });
});
//# sourceMappingURL=tabpanel.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/tabs/index.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */






function Tabs({
  selectOnMove = true,
  defaultTabId,
  orientation = 'horizontal',
  onSelect,
  children,
  selectedTabId
}) {
  const instanceId = (0,use_instance_id/* default */.A)(Tabs, 'tabs');
  const store = useTabStore({
    selectOnMove,
    orientation,
    defaultSelectedId: defaultTabId && `${instanceId}-${defaultTabId}`,
    setSelectedId: selectedId => {
      const strippedDownId = typeof selectedId === 'string' ? selectedId.replace(`${instanceId}-`, '') : selectedId;
      onSelect?.(strippedDownId);
    },
    selectedId: selectedTabId && `${instanceId}-${selectedTabId}`
  });
  const isControlled = selectedTabId !== undefined;
  const {
    items,
    selectedId,
    activeId
  } = (0,_2GXGCHW6/* useStoreState */.O$)(store);
  const {
    setSelectedId,
    setActiveId
  } = store;

  // Keep track of whether tabs have been populated. This is used to prevent
  // certain effects from firing too early while tab data and relevant
  // variables are undefined during the initial render.
  const tabsHavePopulated = (0,react.useRef)(false);
  if (items.length > 0) {
    tabsHavePopulated.current = true;
  }
  const selectedTab = items.find(item => item.id === selectedId);
  const firstEnabledTab = items.find(item => {
    // Ariakit internally refers to disabled tabs as `dimmed`.
    return !item.dimmed;
  });
  const initialTab = items.find(item => item.id === `${instanceId}-${defaultTabId}`);

  // Handle selecting the initial tab.
  (0,react.useLayoutEffect)(() => {
    if (isControlled) {
      return;
    }

    // Wait for the denoted initial tab to be declared before making a
    // selection. This ensures that if a tab is declared lazily it can
    // still receive initial selection, as well as ensuring no tab is
    // selected if an invalid `defaultTabId` is provided.
    if (defaultTabId && !initialTab) {
      return;
    }

    // If the currently selected tab is missing (i.e. removed from the DOM),
    // fall back to the initial tab or the first enabled tab if there is
    // one. Otherwise, no tab should be selected.
    if (!items.find(item => item.id === selectedId)) {
      if (initialTab && !initialTab.dimmed) {
        setSelectedId(initialTab?.id);
        return;
      }
      if (firstEnabledTab) {
        setSelectedId(firstEnabledTab.id);
      } else if (tabsHavePopulated.current) {
        setSelectedId(null);
      }
    }
  }, [firstEnabledTab, initialTab, defaultTabId, isControlled, items, selectedId, setSelectedId]);

  // Handle the currently selected tab becoming disabled.
  (0,react.useLayoutEffect)(() => {
    if (!selectedTab?.dimmed) {
      return;
    }

    // In controlled mode, we trust that disabling tabs is done
    // intentionally, and don't select a new tab automatically.
    if (isControlled) {
      setSelectedId(null);
      return;
    }

    // If the currently selected tab becomes disabled, fall back to the
    // `defaultTabId` if possible. Otherwise select the first
    // enabled tab (if there is one).
    if (initialTab && !initialTab.dimmed) {
      setSelectedId(initialTab.id);
      return;
    }
    if (firstEnabledTab) {
      setSelectedId(firstEnabledTab.id);
    }
  }, [firstEnabledTab, initialTab, isControlled, selectedTab?.dimmed, setSelectedId]);

  // Clear `selectedId` if the active tab is removed from the DOM in controlled mode.
  (0,react.useLayoutEffect)(() => {
    if (!isControlled) {
      return;
    }

    // Once the tabs have populated, if the `selectedTabId` still can't be
    // found, clear the selection.
    if (tabsHavePopulated.current && !!selectedTabId && !selectedTab) {
      setSelectedId(null);
    }
  }, [isControlled, selectedTab, selectedTabId, setSelectedId]);
  (0,react.useEffect)(() => {
    // If there is no active tab, fallback to place focus on the first enabled tab
    // so there is always an active element
    if (selectedTabId === null && !activeId && firstEnabledTab?.id) {
      setActiveId(firstEnabledTab.id);
    }
  }, [selectedTabId, activeId, firstEnabledTab?.id, setActiveId]);
  (0,react.useEffect)(() => {
    if (!isControlled) {
      return;
    }
    requestAnimationFrame(() => {
      const focusedElement = items?.[0]?.element?.ownerDocument.activeElement;
      if (!focusedElement || !items.some(item => focusedElement === item.element)) {
        return; // Return early if no tabs are focused.
      }

      // If, after ariakit re-computes the active tab, that tab doesn't match
      // the currently focused tab, then we force an update to ariakit to avoid
      // any mismatches, especially when navigating to previous/next tab with
      // arrow keys.
      if (activeId !== focusedElement.id) {
        setActiveId(focusedElement.id);
      }
    });
  }, [activeId, isControlled, items, setActiveId]);
  const contextValue = (0,react.useMemo)(() => ({
    store,
    instanceId
  }), [store, instanceId]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TabsContext.Provider, {
    value: contextValue,
    children: children
  });
}
Tabs.TabList = TabList;
Tabs.Tab = tab_Tab;
Tabs.TabPanel = tabpanel_TabPanel;
Tabs.Context = TabsContext;
/* harmony default export */ const tabs = (Tabs);
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/remove-accents@0.5.0/node_modules/remove-accents/index.js
var remove_accents = __webpack_require__("../../node_modules/.pnpm/remove-accents@0.5.0/node_modules/remove-accents/index.js");
var remove_accents_default = /*#__PURE__*/__webpack_require__.n(remove_accents);
// EXTERNAL MODULE: ../../node_modules/.pnpm/param-case@3.0.4/node_modules/param-case/dist.es2015/index.js + 1 modules
var dist_es2015 = __webpack_require__("../../node_modules/.pnpm/param-case@3.0.4/node_modules/param-case/dist.es2015/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/utils/strings.js
/**
 * External dependencies
 */



/**
 * All unicode characters that we consider "dash-like":
 * - `\u007e`: ~ (tilde)
 * - `\u00ad`: ­ (soft hyphen)
 * - `\u2053`: ⁓ (swung dash)
 * - `\u207b`: ⁻ (superscript minus)
 * - `\u208b`: ₋ (subscript minus)
 * - `\u2212`: − (minus sign)
 * - `\\p{Pd}`: any other Unicode dash character
 */
const ALL_UNICODE_DASH_CHARACTERS = (/* unused pure expression or super */ null && (new RegExp(/[\u007e\u00ad\u2053\u207b\u208b\u2212\p{Pd}]/gu)));
const normalizeTextString = value => {
  return removeAccents(value).toLocaleLowerCase().replace(ALL_UNICODE_DASH_CHARACTERS, '-');
};

/**
 * Converts any string to kebab case.
 * Backwards compatible with Lodash's `_.kebabCase()`.
 * Backwards compatible with `_wp_to_kebab_case()`.
 *
 * @see https://lodash.com/docs/4.17.15#kebabCase
 * @see https://developer.wordpress.org/reference/functions/_wp_to_kebab_case/
 *
 * @param str String to convert.
 * @return Kebab-cased string
 */
function kebabCase(str) {
  var _str$toString;
  let input = (_str$toString = str?.toString?.()) !== null && _str$toString !== void 0 ? _str$toString : '';

  // See https://github.com/lodash/lodash/blob/b185fcee26b2133bd071f4aaca14b455c2ed1008/lodash.js#L4970
  input = input.replace(/['\u2019]/, '');
  return (0,dist_es2015/* paramCase */.c)(input, {
    splitRegexp: [/(?!(?:1ST|2ND|3RD|[4-9]TH)(?![a-z]))([a-z0-9])([A-Z])/g,
    // fooBar => foo-bar, 3Bar => 3-bar
    /(?!(?:1st|2nd|3rd|[4-9]th)(?![a-z]))([0-9])([a-z])/g,
    // 3bar => 3-bar
    /([A-Za-z])([0-9])/g,
    // Foo3 => foo-3, foo3 => foo-3
    /([A-Z])([A-Z][a-z])/g // FOOBar => foo-bar
    ]
  });
}

/**
 * Escapes the RegExp special characters.
 *
 * @param string Input string.
 *
 * @return Regex-escaped string.
 */
function escapeRegExp(string) {
  return string.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&');
}
//# sourceMappingURL=strings.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+private-apis@1.6.0/node_modules/@wordpress/private-apis/build-module/implementation.js
var implementation = __webpack_require__("../../node_modules/.pnpm/@wordpress+private-apis@1.6.0/node_modules/@wordpress/private-apis/build-module/implementation.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/lock-unlock.js
/**
 * WordPress dependencies
 */

const {
  lock,
  unlock
} = (0,implementation/* __dangerousOptInToUnstableAPIsOnlyForCoreModules */.yf)('I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.', '@wordpress/components');
//# sourceMappingURL=lock-unlock.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/private-apis.js
/**
 * Internal dependencies
 */









const privateApis = {};
lock(privateApis, {
  CompositeV2: Composite,
  CompositeGroupV2: Composite.Group,
  CompositeItemV2: Composite.Item,
  CompositeRowV2: Composite.Row,
  useCompositeStoreV2: composite_useCompositeStore,
  __experimentalPopoverLegacyPositionToPlacement: utils/* positionToPlacement */.YK,
  createPrivateSlotFill: slot_fill/* createPrivateSlotFill */.VI,
  ComponentsContext: context_system_provider/* ComponentsContext */.aG,
  Tabs: tabs,
  Theme: theme,
  DropdownMenuV2: dropdown_menu_v2_DropdownMenu,
  DropdownMenuGroupV2: DropdownMenuGroup,
  DropdownMenuItemV2: DropdownMenuItem,
  DropdownMenuCheckboxItemV2: DropdownMenuCheckboxItem,
  DropdownMenuRadioItemV2: DropdownMenuRadioItem,
  DropdownMenuSeparatorV2: DropdownMenuSeparator,
  DropdownMenuItemLabelV2: DropdownMenuItemLabel,
  DropdownMenuItemHelpTextV2: DropdownMenuItemHelpText,
  kebabCase: kebabCase
});
//# sourceMappingURL=private-apis.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js
var react_dom = __webpack_require__("../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.6.0_react@17.0.2/node_modules/@wordpress/compose/build-module/hooks/use-focus-on-mount/index.js
var use_focus_on_mount = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.6.0_react@17.0.2/node_modules/@wordpress/compose/build-module/hooks/use-focus-on-mount/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.6.0_react@17.0.2/node_modules/@wordpress/compose/build-module/hooks/use-constrained-tabbing/index.js
var use_constrained_tabbing = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.6.0_react@17.0.2/node_modules/@wordpress/compose/build-module/hooks/use-constrained-tabbing/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.6.0_react@17.0.2/node_modules/@wordpress/compose/build-module/hooks/use-focus-return/index.js
var use_focus_return = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.6.0_react@17.0.2/node_modules/@wordpress/compose/build-module/hooks/use-focus-return/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.6.0_react@17.0.2/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js
var use_merge_refs = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.6.0_react@17.0.2/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@17.0.2/node_modules/@wordpress/icons/build-module/library/close.js
var library_close = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@17.0.2/node_modules/@wordpress/icons/build-module/library/close.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dom@4.6.0/node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js
function assertIsDefined(val, name) {
  if (false) {}
}
//# sourceMappingURL=assert-is-defined.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dom@4.6.0/node_modules/@wordpress/dom/build-module/dom/get-computed-style.js
/**
 * Internal dependencies
 */


/* eslint-disable jsdoc/valid-types */
/**
 * @param {Element} element
 * @return {ReturnType<Window['getComputedStyle']>} The computed style for the element.
 */
function get_computed_style_getComputedStyle(element) {
  /* eslint-enable jsdoc/valid-types */
  assertIsDefined(element.ownerDocument.defaultView, 'element.ownerDocument.defaultView');
  return element.ownerDocument.defaultView.getComputedStyle(element);
}
//# sourceMappingURL=get-computed-style.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dom@4.6.0/node_modules/@wordpress/dom/build-module/dom/get-scroll-container.js
/**
 * Internal dependencies
 */


/**
 * Given a DOM node, finds the closest scrollable container node or the node
 * itself, if scrollable.
 *
 * @param {Element | null} node      Node from which to start.
 * @param {?string}        direction Direction of scrollable container to search for ('vertical', 'horizontal', 'all').
 *                                   Defaults to 'vertical'.
 * @return {Element | undefined} Scrollable container node, if found.
 */
function getScrollContainer(node, direction = 'vertical') {
  if (!node) {
    return undefined;
  }
  if (direction === 'vertical' || direction === 'all') {
    // Scrollable if scrollable height exceeds displayed...
    if (node.scrollHeight > node.clientHeight) {
      // ...except when overflow is defined to be hidden or visible
      const {
        overflowY
      } = get_computed_style_getComputedStyle(node);
      if (/(auto|scroll)/.test(overflowY)) {
        return node;
      }
    }
  }
  if (direction === 'horizontal' || direction === 'all') {
    // Scrollable if scrollable width exceeds displayed...
    if (node.scrollWidth > node.clientWidth) {
      // ...except when overflow is defined to be hidden or visible
      const {
        overflowX
      } = get_computed_style_getComputedStyle(node);
      if (/(auto|scroll)/.test(overflowX)) {
        return node;
      }
    }
  }
  if (node.ownerDocument === node.parentNode) {
    return node;
  }

  // Continue traversing.
  return getScrollContainer( /** @type {Element} */node.parentNode, direction);
}
//# sourceMappingURL=get-scroll-container.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/modal/aria-helper.js
const LIVE_REGION_ARIA_ROLES = new Set(['alert', 'status', 'log', 'marquee', 'timer']);
const hiddenElementsByDepth = [];

/**
 * Hides all elements in the body element from screen-readers except
 * the provided element and elements that should not be hidden from
 * screen-readers.
 *
 * The reason we do this is because `aria-modal="true"` currently is bugged
 * in Safari, and support is spotty in other browsers overall. In the future
 * we should consider removing these helper functions in favor of
 * `aria-modal="true"`.
 *
 * @param modalElement The element that should not be hidden.
 */
function modalize(modalElement) {
  const elements = Array.from(document.body.children);
  const hiddenElements = [];
  hiddenElementsByDepth.push(hiddenElements);
  for (const element of elements) {
    if (element === modalElement) {
      continue;
    }
    if (elementShouldBeHidden(element)) {
      element.setAttribute('aria-hidden', 'true');
      hiddenElements.push(element);
    }
  }
}

/**
 * Determines if the passed element should not be hidden from screen readers.
 *
 * @param element The element that should be checked.
 *
 * @return Whether the element should not be hidden from screen-readers.
 */
function elementShouldBeHidden(element) {
  const role = element.getAttribute('role');
  return !(element.tagName === 'SCRIPT' || element.hasAttribute('aria-hidden') || element.hasAttribute('aria-live') || role && LIVE_REGION_ARIA_ROLES.has(role));
}

/**
 * Accessibly reveals the elements hidden by the latest modal.
 */
function unmodalize() {
  const hiddenElements = hiddenElementsByDepth.pop();
  if (!hiddenElements) {
    return;
  }
  for (const element of hiddenElements) {
    element.removeAttribute('aria-hidden');
  }
}
//# sourceMappingURL=aria-helper.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/style-provider/index.js
var style_provider = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/style-provider/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/utils/with-ignore-ime-events.js
var with_ignore_ime_events = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/utils/with-ignore-ime-events.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/modal/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */





// Used to track and dismiss the prior modal when another opens unless nested.


const ModalContext = (0,react.createContext)(new Set());

// Used to track body class names applied while modals are open.
const bodyOpenClasses = new Map();
function UnforwardedModal(props, forwardedRef) {
  const {
    bodyOpenClassName = 'modal-open',
    role = 'dialog',
    title = null,
    focusOnMount = true,
    shouldCloseOnEsc = true,
    shouldCloseOnClickOutside = true,
    isDismissible = true,
    /* Accessibility. */
    aria = {
      labelledby: undefined,
      describedby: undefined
    },
    onRequestClose,
    icon,
    closeButtonLabel,
    children,
    style,
    overlayClassName,
    className,
    contentLabel,
    onKeyDown,
    isFullScreen = false,
    size,
    headerActions = null,
    __experimentalHideHeader = false
  } = props;
  const ref = (0,react.useRef)();
  const instanceId = (0,use_instance_id/* default */.A)(Modal);
  const headingId = title ? `components-modal-header-${instanceId}` : aria.labelledby;

  // The focus hook does not support 'firstContentElement' but this is a valid
  // value for the Modal's focusOnMount prop. The following code ensures the focus
  // hook will focus the first focusable node within the element to which it is applied.
  // When `firstContentElement` is passed as the value of the focusOnMount prop,
  // the focus hook is applied to the Modal's content element.
  // Otherwise, the focus hook is applied to the Modal's ref. This ensures that the
  // focus hook will focus the first element in the Modal's **content** when
  // `firstContentElement` is passed.
  const focusOnMountRef = (0,use_focus_on_mount/* default */.A)(focusOnMount === 'firstContentElement' ? 'firstElement' : focusOnMount);
  const constrainedTabbingRef = (0,use_constrained_tabbing/* default */.A)();
  const focusReturnRef = (0,use_focus_return/* default */.A)();
  const contentRef = (0,react.useRef)(null);
  const childrenContainerRef = (0,react.useRef)(null);
  const [hasScrolledContent, setHasScrolledContent] = (0,react.useState)(false);
  const [hasScrollableContent, setHasScrollableContent] = (0,react.useState)(false);
  let sizeClass;
  if (isFullScreen || size === 'fill') {
    sizeClass = 'is-full-screen';
  } else if (size) {
    sizeClass = `has-size-${size}`;
  }

  // Determines whether the Modal content is scrollable and updates the state.
  const isContentScrollable = (0,react.useCallback)(() => {
    if (!contentRef.current) {
      return;
    }
    const closestScrollContainer = getScrollContainer(contentRef.current);
    if (contentRef.current === closestScrollContainer) {
      setHasScrollableContent(true);
    } else {
      setHasScrollableContent(false);
    }
  }, [contentRef]);

  // Accessibly isolates/unisolates the modal.
  (0,react.useEffect)(() => {
    modalize(ref.current);
    return () => unmodalize();
  }, []);

  // Keeps a fresh ref for the subsequent effect.
  const refOnRequestClose = (0,react.useRef)();
  (0,react.useEffect)(() => {
    refOnRequestClose.current = onRequestClose;
  }, [onRequestClose]);

  // The list of `onRequestClose` callbacks of open (non-nested) Modals. Only
  // one should remain open at a time and the list enables closing prior ones.
  const dismissers = (0,react.useContext)(ModalContext);
  // Used for the tracking and dismissing any nested modals.
  const [nestedDismissers] = (0,react.useState)(() => new Set());

  // Updates the stack tracking open modals at this level and calls
  // onRequestClose for any prior and/or nested modals as applicable.
  (0,react.useEffect)(() => {
    // add this modal instance to the dismissers set
    dismissers.add(refOnRequestClose);
    // request that all the other modals close themselves
    for (const dismisser of dismissers) {
      if (dismisser !== refOnRequestClose) {
        dismisser.current?.();
      }
    }
    return () => {
      // request that all the nested modals close themselves
      for (const dismisser of nestedDismissers) {
        dismisser.current?.();
      }
      // remove this modal instance from the dismissers set
      dismissers.delete(refOnRequestClose);
    };
  }, [dismissers, nestedDismissers]);

  // Adds/removes the value of bodyOpenClassName to body element.
  (0,react.useEffect)(() => {
    var _bodyOpenClasses$get;
    const theClass = bodyOpenClassName;
    const oneMore = 1 + ((_bodyOpenClasses$get = bodyOpenClasses.get(theClass)) !== null && _bodyOpenClasses$get !== void 0 ? _bodyOpenClasses$get : 0);
    bodyOpenClasses.set(theClass, oneMore);
    document.body.classList.add(bodyOpenClassName);
    return () => {
      const oneLess = bodyOpenClasses.get(theClass) - 1;
      if (oneLess === 0) {
        document.body.classList.remove(theClass);
        bodyOpenClasses.delete(theClass);
      } else {
        bodyOpenClasses.set(theClass, oneLess);
      }
    };
  }, [bodyOpenClassName]);

  // Calls the isContentScrollable callback when the Modal children container resizes.
  (0,react.useLayoutEffect)(() => {
    if (!window.ResizeObserver || !childrenContainerRef.current) {
      return;
    }
    const resizeObserver = new ResizeObserver(isContentScrollable);
    resizeObserver.observe(childrenContainerRef.current);
    isContentScrollable();
    return () => {
      resizeObserver.disconnect();
    };
  }, [isContentScrollable, childrenContainerRef]);
  function handleEscapeKeyDown(event) {
    if (shouldCloseOnEsc && (event.code === 'Escape' || event.key === 'Escape') && !event.defaultPrevented) {
      event.preventDefault();
      if (onRequestClose) {
        onRequestClose(event);
      }
    }
  }
  const onContentContainerScroll = (0,react.useCallback)(e => {
    var _e$currentTarget$scro;
    const scrollY = (_e$currentTarget$scro = e?.currentTarget?.scrollTop) !== null && _e$currentTarget$scro !== void 0 ? _e$currentTarget$scro : -1;
    if (!hasScrolledContent && scrollY > 0) {
      setHasScrolledContent(true);
    } else if (hasScrolledContent && scrollY <= 0) {
      setHasScrolledContent(false);
    }
  }, [hasScrolledContent]);
  let pressTarget = null;
  const overlayPressHandlers = {
    onPointerDown: event => {
      if (event.target === event.currentTarget) {
        pressTarget = event.target;
        // Avoids focus changing so that focus return works as expected.
        event.preventDefault();
      }
    },
    // Closes the modal with two exceptions. 1. Opening the context menu on
    // the overlay. 2. Pressing on the overlay then dragging the pointer
    // over the modal and releasing. Due to the modal being a child of the
    // overlay, such a gesture is a `click` on the overlay and cannot be
    // excepted by a `click` handler. Thus the tactic of handling
    // `pointerup` and comparing its target to that of the `pointerdown`.
    onPointerUp: ({
      target,
      button
    }) => {
      const isSameTarget = target === pressTarget;
      pressTarget = null;
      if (button === 0 && isSameTarget) {
        onRequestClose();
      }
    }
  };
  const modal =
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  (0,jsx_runtime.jsx)("div", {
    ref: (0,use_merge_refs/* default */.A)([ref, forwardedRef]),
    className: (0,clsx/* default */.A)('components-modal__screen-overlay', overlayClassName),
    onKeyDown: (0,with_ignore_ime_events/* withIgnoreIMEEvents */.n)(handleEscapeKeyDown),
    ...(shouldCloseOnClickOutside ? overlayPressHandlers : {}),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(style_provider/* default */.A, {
      document: document,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: (0,clsx/* default */.A)('components-modal__frame', sizeClass, className),
        style: style,
        ref: (0,use_merge_refs/* default */.A)([constrainedTabbingRef, focusReturnRef, focusOnMount !== 'firstContentElement' ? focusOnMountRef : null]),
        role: role,
        "aria-label": contentLabel,
        "aria-labelledby": contentLabel ? undefined : headingId,
        "aria-describedby": aria.describedby,
        tabIndex: -1,
        onKeyDown: onKeyDown,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: (0,clsx/* default */.A)('components-modal__content', {
            'hide-header': __experimentalHideHeader,
            'is-scrollable': hasScrollableContent,
            'has-scrolled-content': hasScrolledContent
          }),
          role: "document",
          onScroll: onContentContainerScroll,
          ref: contentRef,
          "aria-label": hasScrollableContent ? (0,build_module.__)('Scrollable section') : undefined,
          tabIndex: hasScrollableContent ? 0 : undefined,
          children: [!__experimentalHideHeader && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "components-modal__header",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "components-modal__header-heading-container",
              children: [icon && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: "components-modal__icon-container",
                "aria-hidden": true,
                children: icon
              }), title && /*#__PURE__*/(0,jsx_runtime.jsx)("h1", {
                id: headingId,
                className: "components-modal__header-heading",
                children: title
              })]
            }), headerActions, isDismissible && /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
              onClick: onRequestClose,
              icon: library_close/* default */.A,
              label: closeButtonLabel || (0,build_module.__)('Close')
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            ref: (0,use_merge_refs/* default */.A)([childrenContainerRef, focusOnMount === 'firstContentElement' ? focusOnMountRef : null]),
            children: children
          })]
        })
      })
    })
  });
  return (0,react_dom.createPortal)( /*#__PURE__*/(0,jsx_runtime.jsx)(ModalContext.Provider, {
    value: nestedDismissers,
    children: modal
  }), document.body);
}

/**
 * Modals give users information and choices related to a task they’re trying to
 * accomplish. They can contain critical information, require decisions, or
 * involve multiple tasks.
 *
 * ```jsx
 * import { Button, Modal } from '@wordpress/components';
 * import { useState } from '@wordpress/element';
 *
 * const MyModal = () => {
 *   const [ isOpen, setOpen ] = useState( false );
 *   const openModal = () => setOpen( true );
 *   const closeModal = () => setOpen( false );
 *
 *   return (
 *     <>
 *       <Button variant="secondary" onClick={ openModal }>
 *         Open Modal
 *       </Button>
 *       { isOpen && (
 *         <Modal title="This is my modal" onRequestClose={ closeModal }>
 *           <Button variant="secondary" onClick={ closeModal }>
 *             My custom close button
 *           </Button>
 *         </Modal>
 *       ) }
 *     </>
 *   );
 * };
 * ```
 */
const Modal = (0,react.forwardRef)(UnforwardedModal);
/* harmony default export */ const modal = (Modal);
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+data@10.6.0_react@17.0.2/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js
var use_registry = __webpack_require__("../../node_modules/.pnpm/@wordpress+data@10.6.0_react@17.0.2/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@17.0.2/node_modules/@wordpress/icons/build-module/library/arrow-up.js
/**
 * WordPress dependencies
 */


const arrowUp = /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* SVG */.t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
    d: "M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"
  })
});
/* harmony default export */ const arrow_up = (arrowUp);
//# sourceMappingURL=arrow-up.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@17.0.2/node_modules/@wordpress/icons/build-module/library/arrow-down.js
/**
 * WordPress dependencies
 */


const arrowDown = /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* SVG */.t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
    d: "m16.5 13.5-3.7 3.7V4h-1.5v13.2l-3.8-3.7-1 1 5.5 5.6 5.5-5.6z"
  })
});
/* harmony default export */ const arrow_down = (arrowDown);
//# sourceMappingURL=arrow-down.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.2.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@wordpress/dataviews/build-module/constants.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

// Filter operators.
const OPERATOR_IS = 'is';
const OPERATOR_IS_NOT = 'isNot';
const OPERATOR_IS_ANY = 'isAny';
const OPERATOR_IS_NONE = 'isNone';
const OPERATOR_IS_ALL = 'isAll';
const OPERATOR_IS_NOT_ALL = 'isNotAll';
const ALL_OPERATORS = [OPERATOR_IS, OPERATOR_IS_NOT, OPERATOR_IS_ANY, OPERATOR_IS_NONE, OPERATOR_IS_ALL, OPERATOR_IS_NOT_ALL];
const OPERATORS = {
  [OPERATOR_IS]: {
    key: 'is-filter',
    label: (0,build_module.__)('Is')
  },
  [OPERATOR_IS_NOT]: {
    key: 'is-not-filter',
    label: (0,build_module.__)('Is not')
  },
  [OPERATOR_IS_ANY]: {
    key: 'is-any-filter',
    label: (0,build_module.__)('Is any')
  },
  [OPERATOR_IS_NONE]: {
    key: 'is-none-filter',
    label: (0,build_module.__)('Is none')
  },
  [OPERATOR_IS_ALL]: {
    key: 'is-all-filter',
    label: (0,build_module.__)('Is all')
  },
  [OPERATOR_IS_NOT_ALL]: {
    key: 'is-not-all-filter',
    label: (0,build_module.__)('Is not all')
  }
};
const SORTING_DIRECTIONS = ['asc', 'desc'];
const sortArrows = {
  asc: '↑',
  desc: '↓'
};
const sortValues = {
  asc: 'ascending',
  desc: 'descending'
};
const sortLabels = {
  asc: (0,build_module.__)('Sort ascending'),
  desc: (0,build_module.__)('Sort descending')
};
const sortIcons = {
  asc: arrow_up,
  desc: arrow_down
};

// View layouts.
const LAYOUT_TABLE = 'table';
const LAYOUT_GRID = 'grid';
const LAYOUT_LIST = 'list';
//# sourceMappingURL=constants.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.2.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@wordpress/dataviews/build-module/components/dataviews-context/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const DataViewsContext = (0,react.createContext)({
  view: {
    type: LAYOUT_TABLE
  },
  onChangeView: () => {},
  fields: [],
  data: [],
  paginationInfo: {
    totalItems: 0,
    totalPages: 0
  },
  selection: [],
  onChangeSelection: () => {},
  setOpenedFilter: () => {},
  openedFilter: null,
  getItemId: item => item.id,
  density: 0
});
/* harmony default export */ const dataviews_context = (DataViewsContext);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.2.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@wordpress/dataviews/build-module/lock-unlock.js
/**
 * WordPress dependencies
 */

const {
  lock: lock_unlock_lock,
  unlock: lock_unlock_unlock
} = (0,implementation/* __dangerousOptInToUnstableAPIsOnlyForCoreModules */.yf)('I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.', '@wordpress/dataviews');
//# sourceMappingURL=lock-unlock.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.2.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@wordpress/dataviews/build-module/components/dataviews-bulk-actions/index.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */






const {
  DropdownMenuV2: dataviews_bulk_actions_DropdownMenu,
  DropdownMenuGroupV2: dataviews_bulk_actions_DropdownMenuGroup,
  DropdownMenuItemV2: dataviews_bulk_actions_DropdownMenuItem,
  DropdownMenuSeparatorV2: dataviews_bulk_actions_DropdownMenuSeparator
} = lock_unlock_unlock(privateApis);
function useHasAPossibleBulkAction(actions, item) {
  return (0,react.useMemo)(() => {
    return actions.some(action => {
      return action.supportsBulk && (!action.isEligible || action.isEligible(item));
    });
  }, [actions, item]);
}
function useSomeItemHasAPossibleBulkAction(actions, data) {
  return (0,react.useMemo)(() => {
    return data.some(item => {
      return actions.some(action => {
        return action.supportsBulk && (!action.isEligible || action.isEligible(item));
      });
    });
  }, [actions, data]);
}
function ActionWithModal({
  action,
  selectedItems,
  setActionWithModal,
  onMenuOpenChange
}) {
  const eligibleItems = (0,react.useMemo)(() => {
    return selectedItems.filter(item => !action.isEligible || action.isEligible(item));
  }, [action, selectedItems]);
  const {
    RenderModal,
    hideModalHeader
  } = action;
  const onCloseModal = (0,react.useCallback)(() => {
    setActionWithModal(undefined);
  }, [setActionWithModal]);
  if (!eligibleItems.length) {
    return null;
  }
  const label = typeof action.label === 'string' ? action.label : action.label(selectedItems);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(modal, {
    title: !hideModalHeader ? label : undefined,
    __experimentalHideHeader: !!hideModalHeader,
    onRequestClose: onCloseModal,
    overlayClassName: "dataviews-bulk-actions__modal",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(RenderModal, {
      items: eligibleItems,
      closeModal: onCloseModal,
      onActionPerformed: () => onMenuOpenChange(false)
    })
  });
}
function BulkActionItem({
  action,
  selectedItems,
  setActionWithModal
}) {
  const registry = (0,use_registry/* default */.A)();
  const eligibleItems = (0,react.useMemo)(() => {
    return selectedItems.filter(item => !action.isEligible || action.isEligible(item));
  }, [action, selectedItems]);
  const shouldShowModal = ('RenderModal' in action);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(dataviews_bulk_actions_DropdownMenuItem, {
    hideOnClick: !shouldShowModal,
    onClick: async () => {
      if (shouldShowModal) {
        setActionWithModal(action);
      } else {
        action.callback(eligibleItems, {
          registry
        });
      }
    },
    suffix: eligibleItems.length,
    children: action.label
  }, action.id);
}
function ActionsMenuGroup({
  actions,
  selectedItems,
  setActionWithModal
}) {
  const elligibleActions = (0,react.useMemo)(() => {
    return actions.filter(action => {
      return selectedItems.some(item => !action.isEligible || action.isEligible(item));
    });
  }, [actions, selectedItems]);
  if (!elligibleActions.length) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(dataviews_bulk_actions_DropdownMenuGroup, {
      children: elligibleActions.map(action => /*#__PURE__*/(0,jsx_runtime.jsx)(BulkActionItem, {
        action: action,
        selectedItems: selectedItems,
        setActionWithModal: setActionWithModal
      }, action.id))
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(dataviews_bulk_actions_DropdownMenuSeparator, {})]
  });
}
function _BulkActions() {
  const {
    data,
    actions = [],
    selection,
    onChangeSelection,
    getItemId
  } = (0,react.useContext)(dataviews_context);
  const bulkActions = (0,react.useMemo)(() => actions.filter(action => action.supportsBulk), [actions]);
  const [isMenuOpen, onMenuOpenChange] = (0,react.useState)(false);
  const [actionWithModal, setActionWithModal] = (0,react.useState)();
  const selectableItems = (0,react.useMemo)(() => {
    return data.filter(item => {
      return bulkActions.some(action => !action.isEligible || action.isEligible(item));
    });
  }, [data, bulkActions]);
  const numberSelectableItems = selectableItems.length;
  const selectedItems = (0,react.useMemo)(() => {
    return data.filter(item => selection.includes(getItemId(item)) && selectableItems.includes(item));
  }, [selection, data, getItemId, selectableItems]);
  const areAllSelected = selectedItems.length === numberSelectableItems;
  if (bulkActions.length === 0) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(dataviews_bulk_actions_DropdownMenu, {
      open: isMenuOpen,
      onOpenChange: onMenuOpenChange,
      label: (0,build_module.__)('Bulk actions'),
      style: {
        minWidth: '240px'
      },
      trigger: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
        className: "dataviews-bulk-actions__edit-button",
        __next40pxDefaultSize: true,
        variant: "tertiary",
        size: "compact",
        children: selectedItems.length ? (0,build_module/* sprintf */.nv)( /* translators: %d: Number of items. */
        (0,build_module._n)('Edit %d item', 'Edit %d items', selectedItems.length), selectedItems.length) : (0,build_module.__)('Bulk edit')
      }),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ActionsMenuGroup, {
        actions: bulkActions,
        setActionWithModal: setActionWithModal,
        selectedItems: selectedItems
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(dataviews_bulk_actions_DropdownMenuGroup, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(dataviews_bulk_actions_DropdownMenuItem, {
          disabled: areAllSelected,
          hideOnClick: false,
          onClick: () => {
            onChangeSelection(selectableItems.map(item => getItemId(item)));
          },
          suffix: numberSelectableItems,
          children: (0,build_module.__)('Select all')
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(dataviews_bulk_actions_DropdownMenuItem, {
          disabled: selection.length === 0,
          hideOnClick: false,
          onClick: () => {
            onChangeSelection([]);
          },
          children: (0,build_module.__)('Deselect')
        })]
      })]
    }), actionWithModal && /*#__PURE__*/(0,jsx_runtime.jsx)(ActionWithModal, {
      action: actionWithModal,
      selectedItems: selectedItems,
      setActionWithModal: setActionWithModal,
      onMenuOpenChange: onMenuOpenChange
    })]
  });
}
function BulkActions() {
  const {
    data,
    actions = [],
    view
  } = (0,react.useContext)(dataviews_context);
  const hasPossibleBulkAction = useSomeItemHasAPossibleBulkAction(actions, data);
  if (![LAYOUT_TABLE, LAYOUT_GRID].includes(view.type) || !hasPossibleBulkAction) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(_BulkActions, {});
}
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/IIER4YBF.js
"use client";



// src/toolbar/toolbar-context.tsx
var IIER4YBF_ctx = (0,HKOOKEDE/* createStoreContext */.B0)(
  [CompositeContextProvider],
  [CompositeScopedContextProvider]
);
var useToolbarContext = IIER4YBF_ctx.useContext;
var useToolbarScopedContext = IIER4YBF_ctx.useScopedContext;
var useToolbarProviderContext = IIER4YBF_ctx.useProviderContext;
var ToolbarContextProvider = IIER4YBF_ctx.ContextProvider;
var ToolbarScopedContextProvider = IIER4YBF_ctx.ScopedContextProvider;



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/FGSEH62K.js
"use client";





// src/toolbar/toolbar-item.tsx
var FGSEH62K_TagName = "button";
var useToolbarItem = (0,HKOOKEDE/* createHook */.ab)(
  function useToolbarItem2(_a) {
    var _b = _a, { store } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, ["store"]);
    const context = useToolbarContext();
    store = store || context;
    props = useCompositeItem((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({ store }, props));
    return props;
  }
);
var ToolbarItem = (0,HKOOKEDE/* memo */.ph)(
  (0,HKOOKEDE/* forwardRef */.Rf)(function ToolbarItem2(props) {
    const htmlProps = useToolbarItem(props);
    return (0,HKOOKEDE/* createElement */.n)(FGSEH62K_TagName, htmlProps);
  })
);



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/toolbar/toolbar-context/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

const ToolbarContext = (0,react.createContext)(undefined);
/* harmony default export */ const toolbar_context = (ToolbarContext);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/toolbar/toolbar-item/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function toolbar_item_ToolbarItem({
  children,
  as: Component,
  ...props
}, ref) {
  const accessibleToolbarStore = (0,react.useContext)(toolbar_context);
  const isRenderProp = typeof children === 'function';
  if (!isRenderProp && !Component) {
    globalThis.SCRIPT_DEBUG === true ? (0,warning_build_module/* default */.A)('`ToolbarItem` is a generic headless component. You must pass either a `children` prop as a function or an `as` prop as a component. ' + 'See https://developer.wordpress.org/block-editor/components/toolbar-item/') : void 0;
    return null;
  }
  const allProps = {
    ...props,
    ref,
    'data-toolbar-item': true
  };
  if (!accessibleToolbarStore) {
    if (Component) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
        ...allProps,
        children: children
      });
    }
    if (!isRenderProp) {
      return null;
    }
    return children(allProps);
  }
  const render = isRenderProp ? children : Component && /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    children: children
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ToolbarItem, {
    accessibleWhenDisabled: true,
    ...allProps,
    store: accessibleToolbarStore,
    render: render
  });
}
/* harmony default export */ const toolbar_item = ((0,react.forwardRef)(toolbar_item_ToolbarItem));
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/toolbar/toolbar-button/toolbar-button-container.js

/**
 * Internal dependencies
 */

const ToolbarButtonContainer = ({
  children,
  className
}) => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
  className: className,
  children: children
});
/* harmony default export */ const toolbar_button_container = (ToolbarButtonContainer);
//# sourceMappingURL=toolbar-button-container.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/toolbar/toolbar-button/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





function useDeprecatedProps({
  isDisabled,
  ...otherProps
}) {
  return {
    disabled: isDisabled,
    ...otherProps
  };
}
function UnforwardedToolbarButton(props, ref) {
  const {
    children,
    className,
    containerClassName,
    extraProps,
    isActive,
    title,
    ...restProps
  } = useDeprecatedProps(props);
  const accessibleToolbarState = (0,react.useContext)(toolbar_context);
  if (!accessibleToolbarState) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(toolbar_button_container, {
      className: containerClassName,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
        ref: ref,
        icon: restProps.icon,
        label: title,
        shortcut: restProps.shortcut,
        "data-subscript": restProps.subscript,
        onClick: event => {
          event.stopPropagation();
          // TODO: Possible bug; maybe use onClick instead of restProps.onClick.
          if (restProps.onClick) {
            restProps.onClick(event);
          }
        },
        className: (0,clsx/* default */.A)('components-toolbar__control', className),
        isPressed: isActive,
        accessibleWhenDisabled: true,
        "data-toolbar-item": true,
        ...extraProps,
        ...restProps,
        children: children
      })
    });
  }

  // ToobarItem will pass all props to the render prop child, which will pass
  // all props to Button. This means that ToolbarButton has the same API as
  // Button.
  return /*#__PURE__*/(0,jsx_runtime.jsx)(toolbar_item, {
    className: (0,clsx/* default */.A)('components-toolbar-button', className),
    ...extraProps,
    ...restProps,
    ref: ref,
    children: toolbarItemProps => /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
      label: title,
      isPressed: isActive,
      ...toolbarItemProps,
      children: children
    })
  });
}

/**
 * ToolbarButton can be used to add actions to a toolbar, usually inside a Toolbar
 * or ToolbarGroup when used to create general interfaces.
 *
 * ```jsx
 * import { Toolbar, ToolbarButton } from '@wordpress/components';
 * import { edit } from '@wordpress/icons';
 *
 * function MyToolbar() {
 *   return (
 *		<Toolbar label="Options">
 *			<ToolbarButton
 *				icon={ edit }
 *				label="Edit"
 *				onClick={ () => alert( 'Editing' ) }
 *			/>
 *		</Toolbar>
 *   );
 * }
 * ```
 */
const ToolbarButton = (0,react.forwardRef)(UnforwardedToolbarButton);
/* harmony default export */ const toolbar_button = (ToolbarButton);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/toolbar/toolbar-group/toolbar-group-container.js

/**
 * Internal dependencies
 */

const ToolbarGroupContainer = ({
  className,
  children,
  ...props
}) => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
  className: className,
  ...props,
  children: children
});
/* harmony default export */ const toolbar_group_container = (ToolbarGroupContainer);
//# sourceMappingURL=toolbar-group-container.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@17.0.2/node_modules/@wordpress/icons/build-module/library/menu.js
/**
 * WordPress dependencies
 */


const menu_menu = /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* SVG */.t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
    d: "M5 5v1.5h14V5H5zm0 7.8h14v-1.5H5v1.5zM5 19h14v-1.5H5V19z"
  })
});
/* harmony default export */ const library_menu = (menu_menu);
//# sourceMappingURL=menu.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/dropdown/index.js
var dropdown = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/dropdown/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+dom@4.6.0/node_modules/@wordpress/dom/build-module/index.js + 2 modules
var dom_build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+dom@4.6.0/node_modules/@wordpress/dom/build-module/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/navigable-container/container.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

const noop = () => {};
const MENU_ITEM_ROLES = ['menuitem', 'menuitemradio', 'menuitemcheckbox'];
function cycleValue(value, total, offset) {
  const nextValue = value + offset;
  if (nextValue < 0) {
    return total + nextValue;
  } else if (nextValue >= total) {
    return nextValue - total;
  }
  return nextValue;
}
class NavigableContainer extends react.Component {
  constructor(args) {
    super(args);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.bindContainer = this.bindContainer.bind(this);
    this.getFocusableContext = this.getFocusableContext.bind(this);
    this.getFocusableIndex = this.getFocusableIndex.bind(this);
  }
  componentDidMount() {
    if (!this.container) {
      return;
    }

    // We use DOM event listeners instead of React event listeners
    // because we want to catch events from the underlying DOM tree
    // The React Tree can be different from the DOM tree when using
    // portals. Block Toolbars for instance are rendered in a separate
    // React Trees.
    this.container.addEventListener('keydown', this.onKeyDown);
  }
  componentWillUnmount() {
    if (!this.container) {
      return;
    }
    this.container.removeEventListener('keydown', this.onKeyDown);
  }
  bindContainer(ref) {
    const {
      forwardedRef
    } = this.props;
    this.container = ref;
    if (typeof forwardedRef === 'function') {
      forwardedRef(ref);
    } else if (forwardedRef && 'current' in forwardedRef) {
      forwardedRef.current = ref;
    }
  }
  getFocusableContext(target) {
    if (!this.container) {
      return null;
    }
    const {
      onlyBrowserTabstops
    } = this.props;
    const finder = onlyBrowserTabstops ? dom_build_module/* focus */.XC.tabbable : dom_build_module/* focus */.XC.focusable;
    const focusables = finder.find(this.container);
    const index = this.getFocusableIndex(focusables, target);
    if (index > -1 && target) {
      return {
        index,
        target,
        focusables
      };
    }
    return null;
  }
  getFocusableIndex(focusables, target) {
    return focusables.indexOf(target);
  }
  onKeyDown(event) {
    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }
    const {
      getFocusableContext
    } = this;
    const {
      cycle = true,
      eventToOffset,
      onNavigate = noop,
      stopNavigationEvents
    } = this.props;
    const offset = eventToOffset(event);

    // eventToOffset returns undefined if the event is not handled by the component.
    if (offset !== undefined && stopNavigationEvents) {
      // Prevents arrow key handlers bound to the document directly interfering.
      event.stopImmediatePropagation();

      // When navigating a collection of items, prevent scroll containers
      // from scrolling. The preventDefault also prevents Voiceover from
      // 'handling' the event, as voiceover will try to use arrow keys
      // for highlighting text.
      const targetRole = event.target?.getAttribute('role');
      const targetHasMenuItemRole = !!targetRole && MENU_ITEM_ROLES.includes(targetRole);
      if (targetHasMenuItemRole) {
        event.preventDefault();
      }
    }
    if (!offset) {
      return;
    }
    const activeElement = event.target?.ownerDocument?.activeElement;
    if (!activeElement) {
      return;
    }
    const context = getFocusableContext(activeElement);
    if (!context) {
      return;
    }
    const {
      index,
      focusables
    } = context;
    const nextIndex = cycle ? cycleValue(index, focusables.length, offset) : index + offset;
    if (nextIndex >= 0 && nextIndex < focusables.length) {
      focusables[nextIndex].focus();
      onNavigate(nextIndex, focusables[nextIndex]);

      // `preventDefault()` on tab to avoid having the browser move the focus
      // after this component has already moved it.
      if (event.code === 'Tab') {
        event.preventDefault();
      }
    }
  }
  render() {
    const {
      children,
      stopNavigationEvents,
      eventToOffset,
      onNavigate,
      onKeyDown,
      cycle,
      onlyBrowserTabstops,
      forwardedRef,
      ...restProps
    } = this.props;
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      ref: this.bindContainer,
      ...restProps,
      children: children
    });
  }
}
const forwardedNavigableContainer = (props, ref) => {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(NavigableContainer, {
    ...props,
    forwardedRef: ref
  });
};
forwardedNavigableContainer.displayName = 'NavigableContainer';
/* harmony default export */ const container = ((0,react.forwardRef)(forwardedNavigableContainer));
//# sourceMappingURL=container.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/navigable-container/menu.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function UnforwardedNavigableMenu({
  role = 'menu',
  orientation = 'vertical',
  ...rest
}, ref) {
  const eventToOffset = evt => {
    const {
      code
    } = evt;
    let next = ['ArrowDown'];
    let previous = ['ArrowUp'];
    if (orientation === 'horizontal') {
      next = ['ArrowRight'];
      previous = ['ArrowLeft'];
    }
    if (orientation === 'both') {
      next = ['ArrowRight', 'ArrowDown'];
      previous = ['ArrowLeft', 'ArrowUp'];
    }
    if (next.includes(code)) {
      return 1;
    } else if (previous.includes(code)) {
      return -1;
    } else if (['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(code)) {
      // Key press should be handled, e.g. have event propagation and
      // default behavior handled by NavigableContainer but not result
      // in an offset.
      return 0;
    }
    return undefined;
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(container, {
    ref: ref,
    stopNavigationEvents: true,
    onlyBrowserTabstops: false,
    role: role,
    "aria-orientation": role !== 'presentation' && (orientation === 'vertical' || orientation === 'horizontal') ? orientation : undefined,
    eventToOffset: eventToOffset,
    ...rest
  });
}

/**
 * A container for a navigable menu.
 *
 *  ```jsx
 *  import {
 *    NavigableMenu,
 *    Button,
 *  } from '@wordpress/components';
 *
 *  function onNavigate( index, target ) {
 *    console.log( `Navigates to ${ index }`, target );
 *  }
 *
 *  const MyNavigableContainer = () => (
 *    <div>
 *      <span>Navigable Menu:</span>
 *      <NavigableMenu onNavigate={ onNavigate } orientation="horizontal">
 *        <Button variant="secondary">Item 1</Button>
 *        <Button variant="secondary">Item 2</Button>
 *        <Button variant="secondary">Item 3</Button>
 *      </NavigableMenu>
 *    </div>
 *  );
 *  ```
 */
const NavigableMenu = (0,react.forwardRef)(UnforwardedNavigableMenu);
/* harmony default export */ const navigable_container_menu = (NavigableMenu);
//# sourceMappingURL=menu.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/dropdown-menu/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */






function mergeProps(defaultProps = {}, props = {}) {
  const mergedProps = {
    ...defaultProps,
    ...props
  };
  if (props.className && defaultProps.className) {
    mergedProps.className = (0,clsx/* default */.A)(props.className, defaultProps.className);
  }
  return mergedProps;
}
function isFunction(maybeFunc) {
  return typeof maybeFunc === 'function';
}
function dropdown_menu_UnconnectedDropdownMenu(dropdownMenuProps) {
  const {
    children,
    className,
    controls,
    icon = library_menu,
    label,
    popoverProps,
    toggleProps,
    menuProps,
    disableOpenOnArrowDown = false,
    text,
    noIcons,
    open,
    defaultOpen,
    onToggle: onToggleProp,
    // Context
    variant
  } = (0,use_context_system/* useContextSystem */.A)(dropdownMenuProps, 'DropdownMenu');
  if (!controls?.length && !isFunction(children)) {
    return null;
  }

  // Normalize controls to nested array of objects (sets of controls)
  let controlSets;
  if (controls?.length) {
    // @ts-expect-error The check below is needed because `DropdownMenus`
    // rendered by `ToolBarGroup` receive controls as a nested array.
    controlSets = controls;
    if (!Array.isArray(controlSets[0])) {
      // This is not ideal, but at this point we know that `controls` is
      // not a nested array, even if TypeScript doesn't.
      controlSets = [controls];
    }
  }
  const mergedPopoverProps = mergeProps({
    className: 'components-dropdown-menu__popover',
    variant
  }, popoverProps);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.A, {
    className: className,
    popoverProps: mergedPopoverProps,
    renderToggle: ({
      isOpen,
      onToggle
    }) => {
      var _toggleProps$showTool;
      const openOnArrowDown = event => {
        if (disableOpenOnArrowDown) {
          return;
        }
        if (!isOpen && event.code === 'ArrowDown') {
          event.preventDefault();
          onToggle();
        }
      };
      const {
        as: Toggle = build_module_button/* default */.Ay,
        ...restToggleProps
      } = toggleProps !== null && toggleProps !== void 0 ? toggleProps : {};
      const mergedToggleProps = mergeProps({
        className: (0,clsx/* default */.A)('components-dropdown-menu__toggle', {
          'is-opened': isOpen
        })
      }, restToggleProps);
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Toggle, {
        ...mergedToggleProps,
        icon: icon,
        onClick: event => {
          onToggle();
          if (mergedToggleProps.onClick) {
            mergedToggleProps.onClick(event);
          }
        },
        onKeyDown: event => {
          openOnArrowDown(event);
          if (mergedToggleProps.onKeyDown) {
            mergedToggleProps.onKeyDown(event);
          }
        },
        "aria-haspopup": "true",
        "aria-expanded": isOpen,
        label: label,
        text: text,
        showTooltip: (_toggleProps$showTool = toggleProps?.showTooltip) !== null && _toggleProps$showTool !== void 0 ? _toggleProps$showTool : true,
        children: mergedToggleProps.children
      });
    },
    renderContent: props => {
      const mergedMenuProps = mergeProps({
        'aria-label': label,
        className: (0,clsx/* default */.A)('components-dropdown-menu__menu', {
          'no-icons': noIcons
        })
      }, menuProps);
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(navigable_container_menu, {
        ...mergedMenuProps,
        role: "menu",
        children: [isFunction(children) ? children(props) : null, controlSets?.flatMap((controlSet, indexOfSet) => controlSet.map((control, indexOfControl) => /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
          onClick: event => {
            event.stopPropagation();
            props.onClose();
            if (control.onClick) {
              control.onClick();
            }
          },
          className: (0,clsx/* default */.A)('components-dropdown-menu__menu-item', {
            'has-separator': indexOfSet > 0 && indexOfControl === 0,
            'is-active': control.isActive,
            'is-icon-only': !control.title
          }),
          icon: control.icon,
          label: control.label,
          "aria-checked": control.role === 'menuitemcheckbox' || control.role === 'menuitemradio' ? control.isActive : undefined,
          role: control.role === 'menuitemcheckbox' || control.role === 'menuitemradio' ? control.role : 'menuitem',
          accessibleWhenDisabled: true,
          disabled: control.isDisabled,
          children: control.title
        }, [indexOfSet, indexOfControl].join())))]
      });
    },
    open: open,
    defaultOpen: defaultOpen,
    onToggle: onToggleProp
  });
}

/**
 *
 * The DropdownMenu displays a list of actions (each contained in a MenuItem,
 * MenuItemsChoice, or MenuGroup) in a compact way. It appears in a Popover
 * after the user has interacted with an element (a button or icon) or when
 * they perform a specific action.
 *
 * Render a Dropdown Menu with a set of controls:
 *
 * ```jsx
 * import { DropdownMenu } from '@wordpress/components';
 * import {
 * 	more,
 * 	arrowLeft,
 * 	arrowRight,
 * 	arrowUp,
 * 	arrowDown,
 * } from '@wordpress/icons';
 *
 * const MyDropdownMenu = () => (
 * 	<DropdownMenu
 * 		icon={ more }
 * 		label="Select a direction"
 * 		controls={ [
 * 			{
 * 				title: 'Up',
 * 				icon: arrowUp,
 * 				onClick: () => console.log( 'up' ),
 * 			},
 * 			{
 * 				title: 'Right',
 * 				icon: arrowRight,
 * 				onClick: () => console.log( 'right' ),
 * 			},
 * 			{
 * 				title: 'Down',
 * 				icon: arrowDown,
 * 				onClick: () => console.log( 'down' ),
 * 			},
 * 			{
 * 				title: 'Left',
 * 				icon: arrowLeft,
 * 				onClick: () => console.log( 'left' ),
 * 			},
 * 		] }
 * 	/>
 * );
 * ```
 *
 * Alternatively, specify a `children` function which returns elements valid for
 * use in a DropdownMenu: `MenuItem`, `MenuItemsChoice`, or `MenuGroup`.
 *
 * ```jsx
 * import { DropdownMenu, MenuGroup, MenuItem } from '@wordpress/components';
 * import { more, arrowUp, arrowDown, trash } from '@wordpress/icons';
 *
 * const MyDropdownMenu = () => (
 * 	<DropdownMenu icon={ more } label="Select a direction">
 * 		{ ( { onClose } ) => (
 * 			<>
 * 				<MenuGroup>
 * 					<MenuItem icon={ arrowUp } onClick={ onClose }>
 * 						Move Up
 * 					</MenuItem>
 * 					<MenuItem icon={ arrowDown } onClick={ onClose }>
 * 						Move Down
 * 					</MenuItem>
 * 				</MenuGroup>
 * 				<MenuGroup>
 * 					<MenuItem icon={ trash } onClick={ onClose }>
 * 						Remove
 * 					</MenuItem>
 * 				</MenuGroup>
 * 			</>
 * 		) }
 * 	</DropdownMenu>
 * );
 * ```
 *
 */
const dropdown_menu_DropdownMenu = (0,context_connect/* contextConnectWithoutRef */.zS)(dropdown_menu_UnconnectedDropdownMenu, 'DropdownMenu');
/* harmony default export */ const dropdown_menu = (dropdown_menu_DropdownMenu);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/toolbar/toolbar-group/toolbar-group-collapsed.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




function ToolbarGroupCollapsed({
  controls = [],
  toggleProps,
  ...props
}) {
  // It'll contain state if `ToolbarGroup` is being used within
  // `<Toolbar label="label" />`
  const accessibleToolbarState = (0,react.useContext)(toolbar_context);
  const renderDropdownMenu = internalToggleProps => /*#__PURE__*/(0,jsx_runtime.jsx)(dropdown_menu, {
    controls: controls,
    toggleProps: {
      ...internalToggleProps,
      'data-toolbar-item': true
    },
    ...props
  });
  if (accessibleToolbarState) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(toolbar_item, {
      ...toggleProps,
      children: renderDropdownMenu
    });
  }
  return renderDropdownMenu(toggleProps);
}
/* harmony default export */ const toolbar_group_collapsed = (ToolbarGroupCollapsed);
//# sourceMappingURL=toolbar-group-collapsed.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/toolbar/toolbar-group/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */






function isNestedArray(arr) {
  return Array.isArray(arr) && Array.isArray(arr[0]);
}

/**
 * Renders a collapsible group of controls
 *
 * The `controls` prop accepts an array of sets. A set is an array of controls.
 * Controls have the following shape:
 *
 * ```
 * {
 *   icon: string,
 *   title: string,
 *   subscript: string,
 *   onClick: Function,
 *   isActive: boolean,
 *   isDisabled: boolean
 * }
 * ```
 *
 * For convenience it is also possible to pass only an array of controls. It is
 * then assumed this is the only set.
 *
 * Either `controls` or `children` is required, otherwise this components
 * renders nothing.
 *
 * @param props               Component props.
 * @param [props.controls]    The controls to render in this toolbar.
 * @param [props.children]    Any other things to render inside the toolbar besides the controls.
 * @param [props.className]   Class to set on the container div.
 * @param [props.isCollapsed] Turns ToolbarGroup into a dropdown menu.
 * @param [props.title]       ARIA label for dropdown menu if is collapsed.
 */
function ToolbarGroup({
  controls = [],
  children,
  className,
  isCollapsed,
  title,
  ...props
}) {
  // It'll contain state if `ToolbarGroup` is being used within
  // `<Toolbar label="label" />`
  const accessibleToolbarState = (0,react.useContext)(toolbar_context);
  if ((!controls || !controls.length) && !children) {
    return null;
  }
  const finalClassName = (0,clsx/* default */.A)(
  // Unfortunately, there's legacy code referencing to `.components-toolbar`
  // So we can't get rid of it
  accessibleToolbarState ? 'components-toolbar-group' : 'components-toolbar', className);

  // Normalize controls to nested array of objects (sets of controls)
  let controlSets;
  if (isNestedArray(controls)) {
    controlSets = controls;
  } else {
    controlSets = [controls];
  }
  if (isCollapsed) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(toolbar_group_collapsed, {
      label: title,
      controls: controlSets,
      className: finalClassName,
      children: children,
      ...props
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(toolbar_group_container, {
    className: finalClassName,
    ...props,
    children: [controlSets?.flatMap((controlSet, indexOfSet) => controlSet.map((control, indexOfControl) => /*#__PURE__*/(0,jsx_runtime.jsx)(toolbar_button, {
      containerClassName: indexOfSet > 0 && indexOfControl === 0 ? 'has-left-divider' : undefined,
      ...control
    }, [indexOfSet, indexOfControl].join()))), children]
  });
}
/* harmony default export */ const toolbar_group = (ToolbarGroup);
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/framer-motion/dist/es/context/PresenceContext.mjs
var PresenceContext = __webpack_require__("../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/framer-motion/dist/es/context/PresenceContext.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/framer-motion/dist/es/utils/use-constant.mjs
var use_constant = __webpack_require__("../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/framer-motion/dist/es/utils/use-constant.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
var MotionConfigContext = __webpack_require__("../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs





/**
 * Measurement functionality has to be within a separate component
 * to leverage snapshot lifecycle.
 */
class PopChildMeasure extends react.Component {
    getSnapshotBeforeUpdate(prevProps) {
        const element = this.props.childRef.current;
        if (element && prevProps.isPresent && !this.props.isPresent) {
            const size = this.props.sizeRef.current;
            size.height = element.offsetHeight || 0;
            size.width = element.offsetWidth || 0;
            size.top = element.offsetTop;
            size.left = element.offsetLeft;
        }
        return null;
    }
    /**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */
    componentDidUpdate() { }
    render() {
        return this.props.children;
    }
}
function PopChild({ children, isPresent }) {
    const id = (0,react.useId)();
    const ref = (0,react.useRef)(null);
    const size = (0,react.useRef)({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
    });
    const { nonce } = (0,react.useContext)(MotionConfigContext/* MotionConfigContext */.Q);
    /**
     * We create and inject a style block so we can apply this explicit
     * sizing in a non-destructive manner by just deleting the style block.
     *
     * We can't apply size via render as the measurement happens
     * in getSnapshotBeforeUpdate (post-render), likewise if we apply the
     * styles directly on the DOM node, we might be overwriting
     * styles set via the style prop.
     */
    (0,react.useInsertionEffect)(() => {
        const { width, height, top, left } = size.current;
        if (isPresent || !ref.current || !width || !height)
            return;
        ref.current.dataset.motionPopId = id;
        const style = document.createElement("style");
        if (nonce)
            style.nonce = nonce;
        document.head.appendChild(style);
        if (style.sheet) {
            style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top}px !important;
            left: ${left}px !important;
          }
        `);
        }
        return () => {
            document.head.removeChild(style);
        };
    }, [isPresent]);
    return ((0,jsx_runtime.jsx)(PopChildMeasure, { isPresent: isPresent, childRef: ref, sizeRef: size, children: react.cloneElement(children, { ref }) }));
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs







const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, }) => {
    const presenceChildren = (0,use_constant/* useConstant */.M)(newChildrenMap);
    const id = (0,react.useId)();
    const context = (0,react.useMemo)(() => ({
        id,
        initial,
        isPresent,
        custom,
        onExitComplete: (childId) => {
            presenceChildren.set(childId, true);
            for (const isComplete of presenceChildren.values()) {
                if (!isComplete)
                    return; // can stop searching when any is incomplete
            }
            onExitComplete && onExitComplete();
        },
        register: (childId) => {
            presenceChildren.set(childId, false);
            return () => presenceChildren.delete(childId);
        },
    }), 
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    presenceAffectsLayout ? [Math.random()] : [isPresent]);
    (0,react.useMemo)(() => {
        presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
    }, [isPresent]);
    /**
     * If there's no `motion` components to fire exit animations, we want to remove this
     * component immediately.
     */
    react.useEffect(() => {
        !isPresent &&
            !presenceChildren.size &&
            onExitComplete &&
            onExitComplete();
    }, [isPresent]);
    if (mode === "popLayout") {
        children = (0,jsx_runtime.jsx)(PopChild, { isPresent: isPresent, children: children });
    }
    return ((0,jsx_runtime.jsx)(PresenceContext/* PresenceContext */.t.Provider, { value: context, children: children }));
};
function newChildrenMap() {
    return new Map();
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var LayoutGroupContext = __webpack_require__("../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/framer-motion/dist/es/utils/errors.mjs
var errors = __webpack_require__("../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/framer-motion/dist/es/utils/errors.mjs");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs


const getChildKey = (child) => child.key || "";
function onlyElements(children) {
    const filtered = [];
    // We use forEach here instead of map as map mutates the component key by preprending `.$`
    react.Children.forEach(children, (child) => {
        if ((0,react.isValidElement)(child))
            filtered.push(child);
    });
    return filtered;
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var use_isomorphic_effect = __webpack_require__("../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs









/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `usePresence` all need to call `safeToRemove`.
 *
 * @public
 */
const AnimatePresence = ({ children, exitBeforeEnter, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", }) => {
    (0,errors/* invariant */.V)(!exitBeforeEnter, "Replace exitBeforeEnter with mode='wait'");
    /**
     * Filter any children that aren't ReactElements. We can only track components
     * between renders with a props.key.
     */
    const presentChildren = (0,react.useMemo)(() => onlyElements(children), [children]);
    /**
     * Track the keys of the currently rendered children. This is used to
     * determine which children are exiting.
     */
    const presentKeys = presentChildren.map(getChildKey);
    /**
     * If `initial={false}` we only want to pass this to components in the first render.
     */
    const isInitialRender = (0,react.useRef)(true);
    /**
     * A ref containing the currently present children. When all exit animations
     * are complete, we use this to re-render the component with the latest children
     * *committed* rather than the latest children *rendered*.
     */
    const pendingPresentChildren = (0,react.useRef)(presentChildren);
    /**
     * Track which exiting children have finished animating out.
     */
    const exitComplete = (0,use_constant/* useConstant */.M)(() => new Map());
    /**
     * Save children to render as React state. To ensure this component is concurrent-safe,
     * we check for exiting children via an effect.
     */
    const [diffedChildren, setDiffedChildren] = (0,react.useState)(presentChildren);
    const [renderedChildren, setRenderedChildren] = (0,react.useState)(presentChildren);
    (0,use_isomorphic_effect/* useIsomorphicLayoutEffect */.E)(() => {
        isInitialRender.current = false;
        pendingPresentChildren.current = presentChildren;
        /**
         * Update complete status of exiting children.
         */
        for (let i = 0; i < renderedChildren.length; i++) {
            const key = getChildKey(renderedChildren[i]);
            if (!presentKeys.includes(key)) {
                if (exitComplete.get(key) !== true) {
                    exitComplete.set(key, false);
                }
            }
            else {
                exitComplete.delete(key);
            }
        }
    }, [renderedChildren, presentKeys.length, presentKeys.join("-")]);
    const exitingChildren = [];
    if (presentChildren !== diffedChildren) {
        let nextChildren = [...presentChildren];
        /**
         * Loop through all the currently rendered components and decide which
         * are exiting.
         */
        for (let i = 0; i < renderedChildren.length; i++) {
            const child = renderedChildren[i];
            const key = getChildKey(child);
            if (!presentKeys.includes(key)) {
                nextChildren.splice(i, 0, child);
                exitingChildren.push(child);
            }
        }
        /**
         * If we're in "wait" mode, and we have exiting children, we want to
         * only render these until they've all exited.
         */
        if (mode === "wait" && exitingChildren.length) {
            nextChildren = exitingChildren;
        }
        setRenderedChildren(onlyElements(nextChildren));
        setDiffedChildren(presentChildren);
        /**
         * Early return to ensure once we've set state with the latest diffed
         * children, we can immediately re-render.
         */
        return;
    }
    if (false) {}
    /**
     * If we've been provided a forceRender function by the LayoutGroupContext,
     * we can use it to force a re-render amongst all surrounding components once
     * all components have finished animating out.
     */
    const { forceRender } = (0,react.useContext)(LayoutGroupContext/* LayoutGroupContext */.L);
    return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: renderedChildren.map((child) => {
            const key = getChildKey(child);
            const isPresent = presentChildren === renderedChildren ||
                presentKeys.includes(key);
            const onExit = () => {
                if (exitComplete.has(key)) {
                    exitComplete.set(key, true);
                }
                else {
                    return;
                }
                let isEveryExitComplete = true;
                exitComplete.forEach((isExitComplete) => {
                    if (!isExitComplete)
                        isEveryExitComplete = false;
                });
                if (isEveryExitComplete) {
                    forceRender === null || forceRender === void 0 ? void 0 : forceRender();
                    setRenderedChildren(pendingPresentChildren.current);
                    onExitComplete && onExitComplete();
                }
            };
            return ((0,jsx_runtime.jsx)(PresenceChild, { isPresent: isPresent, initial: !isInitialRender.current || initial
                    ? undefined
                    : false, custom: isPresent ? undefined : custom, presenceAffectsLayout: presenceAffectsLayout, mode: mode, onExitComplete: isPresent ? undefined : onExit, children: child }, key));
        }) }));
};



// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/framer-motion/dist/es/render/dom/motion.mjs + 206 modules
var motion = __webpack_require__("../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/framer-motion/dist/es/render/dom/motion.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+deprecated@4.6.0/node_modules/@wordpress/deprecated/build-module/index.js
var deprecated_build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+deprecated@4.6.0/node_modules/@wordpress/deprecated/build-module/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/toolbar/toolbar-store.js
"use client";








// src/toolbar/toolbar-store.ts
function createToolbarStore(props = {}) {
  var _a;
  const syncState = (_a = props.store) == null ? void 0 : _a.getState();
  return createCompositeStore((0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
    orientation: (0,PBFD2E7P/* defaultValue */.Jh)(
      props.orientation,
      syncState == null ? void 0 : syncState.orientation,
      "horizontal"
    ),
    focusLoop: (0,PBFD2E7P/* defaultValue */.Jh)(props.focusLoop, syncState == null ? void 0 : syncState.focusLoop, true)
  }));
}


;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/GO2SPXQX.js
"use client";



// src/toolbar/toolbar-store.ts

function useToolbarStoreProps(store, update, props) {
  return useCompositeStoreProps(store, update, props);
}
function useToolbarStore(props = {}) {
  const [store, update] = (0,_2GXGCHW6/* useStore */.Pj)(createToolbarStore, props);
  return useToolbarStoreProps(store, update, props);
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/toolbar/toolbar.js
"use client";
















// src/toolbar/toolbar.tsx

var toolbar_TagName = "div";
var useToolbar = (0,HKOOKEDE/* createHook */.ab)(
  function useToolbar2(_a) {
    var _b = _a, {
      store: storeProp,
      orientation: orientationProp,
      virtualFocus,
      focusLoop,
      rtl
    } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, [
      "store",
      "orientation",
      "virtualFocus",
      "focusLoop",
      "rtl"
    ]);
    const context = useToolbarProviderContext();
    storeProp = storeProp || context;
    const store = useToolbarStore({
      store: storeProp,
      orientation: orientationProp,
      virtualFocus,
      focusLoop,
      rtl
    });
    const orientation = store.useState(
      (state) => state.orientation === "both" ? void 0 : state.orientation
    );
    props = (0,Z32BISHQ/* useWrapElement */.w7)(
      props,
      (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(ToolbarScopedContextProvider, { value: store, children: element }),
      [store]
    );
    props = (0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      role: "toolbar",
      "aria-orientation": orientation
    }, props);
    props = useComposite((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({ store }, props));
    return props;
  }
);
var Toolbar = (0,HKOOKEDE/* forwardRef */.Rf)(function Toolbar2(props) {
  const htmlProps = useToolbar(props);
  return (0,HKOOKEDE/* createElement */.n)(toolbar_TagName, htmlProps);
});


;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/toolbar/toolbar/toolbar-container.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function UnforwardedToolbarContainer({
  label,
  ...props
}, ref) {
  const toolbarStore = useToolbarStore({
    focusLoop: true,
    rtl: (0,build_module/* isRTL */.V8)()
  });
  return (
    /*#__PURE__*/
    // This will provide state for `ToolbarButton`'s
    (0,jsx_runtime.jsx)(toolbar_context.Provider, {
      value: toolbarStore,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Toolbar, {
        ref: ref,
        "aria-label": label,
        store: toolbarStore,
        ...props
      })
    })
  );
}
const ToolbarContainer = (0,react.forwardRef)(UnforwardedToolbarContainer);
/* harmony default export */ const toolbar_container = (ToolbarContainer);
//# sourceMappingURL=toolbar-container.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/toolbar/toolbar/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




function UnforwardedToolbar({
  className,
  label,
  variant,
  ...props
}, ref) {
  const isVariantDefined = variant !== undefined;
  const contextSystemValue = (0,react.useMemo)(() => {
    if (isVariantDefined) {
      return {};
    }
    return {
      DropdownMenu: {
        variant: 'toolbar'
      },
      Dropdown: {
        variant: 'toolbar'
      }
    };
  }, [isVariantDefined]);
  if (!label) {
    (0,deprecated_build_module/* default */.A)('Using Toolbar without label prop', {
      since: '5.6',
      alternative: 'ToolbarGroup component',
      link: 'https://developer.wordpress.org/block-editor/components/toolbar/'
    });
    // Extracting title from `props` because `ToolbarGroup` doesn't accept it.
    const {
      title: _title,
      ...restProps
    } = props;
    return /*#__PURE__*/(0,jsx_runtime.jsx)(toolbar_group, {
      isCollapsed: false,
      ...restProps,
      className: className
    });
  }
  // `ToolbarGroup` already uses components-toolbar for compatibility reasons.
  const finalClassName = (0,clsx/* default */.A)('components-accessible-toolbar', className, variant && `is-${variant}`);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(context_system_provider/* ContextSystemProvider */.c7, {
    value: contextSystemValue,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(toolbar_container, {
      className: finalClassName,
      label: label,
      ref: ref,
      ...props
    })
  });
}

/**
 * Renders a toolbar.
 *
 * To add controls, simply pass `ToolbarButton` components as children.
 *
 * ```jsx
 * import { Toolbar, ToolbarButton } from '@wordpress/components';
 * import { formatBold, formatItalic, link } from '@wordpress/icons';
 *
 * function MyToolbar() {
 *   return (
 *     <Toolbar label="Options">
 *       <ToolbarButton icon={ formatBold } label="Bold" />
 *       <ToolbarButton icon={ formatItalic } label="Italic" />
 *       <ToolbarButton icon={ link } label="Link" />
 *     </Toolbar>
 *   );
 * }
 * ```
 */
const toolbar_Toolbar = (0,react.forwardRef)(UnforwardedToolbar);
/* harmony default export */ const toolbar = (toolbar_Toolbar);
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@17.0.2/node_modules/@wordpress/icons/build-module/library/close-small.js
var close_small = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@17.0.2/node_modules/@wordpress/icons/build-module/library/close-small.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.6.0_react@17.0.2/node_modules/@wordpress/compose/build-module/hooks/use-reduced-motion/index.js
var use_reduced_motion = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.6.0_react@17.0.2/node_modules/@wordpress/compose/build-module/hooks/use-reduced-motion/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@17.0.2/node_modules/@wordpress/icons/build-module/library/more-vertical.js
/**
 * WordPress dependencies
 */


const moreVertical = /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* SVG */.t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
    d: "M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"
  })
});
/* harmony default export */ const more_vertical = (moreVertical);
//# sourceMappingURL=more-vertical.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.2.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@wordpress/dataviews/build-module/components/dataviews-item-actions/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */




const {
  DropdownMenuV2: dataviews_item_actions_DropdownMenu,
  DropdownMenuGroupV2: dataviews_item_actions_DropdownMenuGroup,
  DropdownMenuItemV2: dataviews_item_actions_DropdownMenuItem,
  DropdownMenuItemLabelV2: dataviews_item_actions_DropdownMenuItemLabel,
  kebabCase: dataviews_item_actions_kebabCase
} = lock_unlock_unlock(privateApis);
function ButtonTrigger({
  action,
  onClick,
  items
}) {
  const label = typeof action.label === 'string' ? action.label : action.label(items);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
    label: label,
    icon: action.icon,
    isDestructive: action.isDestructive,
    size: "compact",
    onClick: onClick
  });
}
function DropdownMenuItemTrigger({
  action,
  onClick,
  items
}) {
  const label = typeof action.label === 'string' ? action.label : action.label(items);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(dataviews_item_actions_DropdownMenuItem, {
    onClick: onClick,
    hideOnClick: !('RenderModal' in action),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(dataviews_item_actions_DropdownMenuItemLabel, {
      children: label
    })
  });
}
function ActionModal({
  action,
  items,
  closeModal
}) {
  const label = typeof action.label === 'string' ? action.label : action.label(items);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(modal, {
    title: action.modalHeader || label,
    __experimentalHideHeader: !!action.hideModalHeader,
    onRequestClose: closeModal !== null && closeModal !== void 0 ? closeModal : () => {},
    focusOnMount: "firstContentElement",
    size: "small",
    overlayClassName: `dataviews-action-modal dataviews-action-modal__${dataviews_item_actions_kebabCase(action.id)}`,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(action.RenderModal, {
      items: items,
      closeModal: closeModal
    })
  });
}
function dataviews_item_actions_ActionWithModal({
  action,
  items,
  ActionTrigger,
  isBusy
}) {
  const [isModalOpen, setIsModalOpen] = (0,react.useState)(false);
  const actionTriggerProps = {
    action,
    onClick: () => {
      setIsModalOpen(true);
    },
    items,
    isBusy
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ActionTrigger, {
      ...actionTriggerProps
    }), isModalOpen && /*#__PURE__*/(0,jsx_runtime.jsx)(ActionModal, {
      action: action,
      items: items,
      closeModal: () => setIsModalOpen(false)
    })]
  });
}
function ActionsDropdownMenuGroup({
  actions,
  item
}) {
  const registry = (0,use_registry/* default */.A)();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(dataviews_item_actions_DropdownMenuGroup, {
    children: actions.map(action => {
      if ('RenderModal' in action) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(dataviews_item_actions_ActionWithModal, {
          action: action,
          items: [item],
          ActionTrigger: DropdownMenuItemTrigger
        }, action.id);
      }
      return /*#__PURE__*/(0,jsx_runtime.jsx)(DropdownMenuItemTrigger, {
        action: action,
        onClick: () => {
          action.callback([item], {
            registry
          });
        },
        items: [item]
      }, action.id);
    })
  });
}
function ItemActions({
  item,
  actions,
  isCompact
}) {
  const registry = (0,use_registry/* default */.A)();
  const {
    primaryActions,
    eligibleActions
  } = (0,react.useMemo)(() => {
    // If an action is eligible for all items, doesn't need
    // to provide the `isEligible` function.
    const _eligibleActions = actions.filter(action => !action.isEligible || action.isEligible(item));
    const _primaryActions = _eligibleActions.filter(action => action.isPrimary && !!action.icon);
    return {
      primaryActions: _primaryActions,
      eligibleActions: _eligibleActions
    };
  }, [actions, item]);
  if (isCompact) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(CompactItemActions, {
      item: item,
      actions: eligibleActions
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(component/* default */.A, {
    spacing: 1,
    justify: "flex-end",
    className: "dataviews-item-actions",
    style: {
      flexShrink: '0',
      width: 'auto'
    },
    children: [!!primaryActions.length && primaryActions.map(action => {
      if ('RenderModal' in action) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(dataviews_item_actions_ActionWithModal, {
          action: action,
          items: [item],
          ActionTrigger: ButtonTrigger
        }, action.id);
      }
      return /*#__PURE__*/(0,jsx_runtime.jsx)(ButtonTrigger, {
        action: action,
        onClick: () => {
          action.callback([item], {
            registry
          });
        },
        items: [item]
      }, action.id);
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(CompactItemActions, {
      item: item,
      actions: eligibleActions
    })]
  });
}
function CompactItemActions({
  item,
  actions
}) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(dataviews_item_actions_DropdownMenu, {
    trigger: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
      size: "compact",
      icon: more_vertical,
      label: (0,build_module.__)('Actions'),
      accessibleWhenDisabled: true,
      disabled: !actions.length,
      className: "dataviews-all-actions-button"
    }),
    placement: "bottom-end",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ActionsDropdownMenuGroup, {
      actions: actions,
      item: item
    })
  });
}
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.2.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@wordpress/dataviews/build-module/components/dataviews-bulk-actions-toolbar/index.js
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */







const SNACKBAR_VARIANTS = {
  init: {
    bottom: -48
  },
  open: {
    bottom: 24,
    transition: {
      bottom: {
        type: 'tween',
        duration: 0.2,
        ease: [0, 0, 0.2, 1]
      }
    }
  },
  exit: {
    opacity: 0,
    bottom: 24,
    transition: {
      opacity: {
        type: 'tween',
        duration: 0.2,
        ease: [0, 0, 0.2, 1]
      }
    }
  }
};
function ActionTrigger({
  action,
  onClick,
  isBusy,
  items
}) {
  const label = typeof action.label === 'string' ? action.label : action.label(items);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(toolbar_button, {
    disabled: isBusy,
    label: label,
    icon: action.icon,
    isDestructive: action.isDestructive,
    size: "compact",
    onClick: onClick,
    isBusy: isBusy,
    tooltipPosition: "top"
  });
}
const EMPTY_ARRAY = [];
function ActionButton({
  action,
  selectedItems,
  actionInProgress,
  setActionInProgress
}) {
  const registry = (0,use_registry/* default */.A)();
  const selectedEligibleItems = (0,react.useMemo)(() => {
    return selectedItems.filter(item => {
      return !action.isEligible || action.isEligible(item);
    });
  }, [action, selectedItems]);
  if ('RenderModal' in action) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(dataviews_item_actions_ActionWithModal, {
      action: action,
      items: selectedEligibleItems,
      ActionTrigger: ActionTrigger
    }, action.id);
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ActionTrigger, {
    action: action,
    onClick: () => {
      setActionInProgress(action.id);
      action.callback(selectedItems, {
        registry
      });
    },
    items: selectedEligibleItems,
    isBusy: actionInProgress === action.id
  }, action.id);
}
function renderToolbarContent(selection, actionsToShow, selectedItems, actionInProgress, setActionInProgress, onChangeSelection) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(toolbar_group, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "dataviews-bulk-actions-toolbar__selection-count",
        children: selection.length === 1 ? (0,build_module.__)('1 item selected') : (0,build_module/* sprintf */.nv)(
        // translators: %s: Total number of selected items.
        (0,build_module._n)('%s item selected', '%s items selected', selection.length), selection.length)
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(toolbar_group, {
      children: actionsToShow.map(action => {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(ActionButton, {
          action: action,
          selectedItems: selectedItems,
          actionInProgress: actionInProgress,
          setActionInProgress: setActionInProgress
        }, action.id);
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(toolbar_group, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(toolbar_button, {
        icon: close_small/* default */.A,
        showTooltip: true,
        tooltipPosition: "top",
        label: (0,build_module.__)('Cancel'),
        disabled: !!actionInProgress,
        onClick: () => {
          onChangeSelection(EMPTY_ARRAY);
        }
      })
    })]
  });
}
function ToolbarContent({
  selection,
  actionsToShow,
  selectedItems,
  onChangeSelection
}) {
  const [actionInProgress, setActionInProgress] = (0,react.useState)(null);
  const buttons = (0,react.useRef)(null);
  if (!actionInProgress) {
    if (buttons.current) {
      buttons.current = null;
    }
    return renderToolbarContent(selection, actionsToShow, selectedItems, actionInProgress, setActionInProgress, onChangeSelection);
  } else if (!buttons.current) {
    buttons.current = renderToolbarContent(selection, actionsToShow, selectedItems, actionInProgress, setActionInProgress, onChangeSelection);
  }
  return buttons.current;
}
function _BulkActionsToolbar() {
  const {
    data,
    selection,
    actions = EMPTY_ARRAY,
    onChangeSelection,
    getItemId
  } = (0,react.useContext)(dataviews_context);
  const isReducedMotion = (0,use_reduced_motion/* default */.A)();
  const selectedItems = (0,react.useMemo)(() => {
    return data.filter(item => selection.includes(getItemId(item)));
  }, [selection, data, getItemId]);
  const actionsToShow = (0,react.useMemo)(() => actions.filter(action => {
    return action.supportsBulk && action.icon && selectedItems.some(item => !action.isEligible || action.isEligible(item));
  }), [actions, selectedItems]);
  if (selection && selection.length === 0 || actionsToShow.length === 0) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(AnimatePresence, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(motion/* motion */.P.div, {
      layout: !isReducedMotion // See https://www.framer.com/docs/animation/#layout-animations
      ,
      initial: "init",
      animate: "open",
      exit: "exit",
      variants: isReducedMotion ? undefined : SNACKBAR_VARIANTS,
      className: "dataviews-bulk-actions-toolbar",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(toolbar, {
        label: (0,build_module.__)('Bulk actions'),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "dataviews-bulk-actions-toolbar__wrapper",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(ToolbarContent, {
            selection: selection,
            actionsToShow: actionsToShow,
            selectedItems: selectedItems,
            onChangeSelection: onChangeSelection
          })
        })
      })
    })
  });
}
function BulkActionsToolbar() {
  const {
    data,
    actions = [],
    view
  } = (0,react.useContext)(dataviews_context);
  const hasPossibleBulkAction = useSomeItemHasAPossibleBulkAction(actions, data);
  if (![LAYOUT_TABLE, LAYOUT_GRID].includes(view.type) || !hasPossibleBulkAction) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(_BulkActionsToolbar, {});
}
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@17.0.2/node_modules/@wordpress/icons/build-module/library/funnel.js
/**
 * WordPress dependencies
 */


const funnel = /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* SVG */.t4, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
    d: "M10 17.5H14V16H10V17.5ZM6 6V7.5H18V6H6ZM8 12.5H16V11H8V12.5Z"
  })
});
/* harmony default export */ const library_funnel = (funnel);
//# sourceMappingURL=funnel.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/flex/flex-item/component.js + 1 modules
var flex_item_component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/flex/flex-item/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/select-control/index.js + 3 modules
var select_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/select-control/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/tooltip/index.js + 6 modules
var tooltip = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/tooltip/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/v-stack/component.js + 1 modules
var v_stack_component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/v-stack/component.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+element@6.6.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js
/**
 * Internal dependencies
 */


/**
 * Object containing a React element.
 *
 * @typedef {import('react').ReactElement} Element
 */

let indoc, offset, output, stack;

/**
 * Matches tags in the localized string
 *
 * This is used for extracting the tag pattern groups for parsing the localized
 * string and along with the map converting it to a react element.
 *
 * There are four references extracted using this tokenizer:
 *
 * match: Full match of the tag (i.e. <strong>, </strong>, <br/>)
 * isClosing: The closing slash, if it exists.
 * name: The name portion of the tag (strong, br) (if )
 * isSelfClosed: The slash on a self closing tag, if it exists.
 *
 * @type {RegExp}
 */
const tokenizer = /<(\/)?(\w+)\s*(\/)?>/g;

/**
 * The stack frame tracking parse progress.
 *
 * @typedef Frame
 *
 * @property {Element}   element            A parent element which may still have
 * @property {number}    tokenStart         Offset at which parent element first
 *                                          appears.
 * @property {number}    tokenLength        Length of string marking start of parent
 *                                          element.
 * @property {number}    [prevOffset]       Running offset at which parsing should
 *                                          continue.
 * @property {number}    [leadingTextStart] Offset at which last closing element
 *                                          finished, used for finding text between
 *                                          elements.
 * @property {Element[]} children           Children.
 */

/**
 * Tracks recursive-descent parse state.
 *
 * This is a Stack frame holding parent elements until all children have been
 * parsed.
 *
 * @private
 * @param {Element} element            A parent element which may still have
 *                                     nested children not yet parsed.
 * @param {number}  tokenStart         Offset at which parent element first
 *                                     appears.
 * @param {number}  tokenLength        Length of string marking start of parent
 *                                     element.
 * @param {number}  [prevOffset]       Running offset at which parsing should
 *                                     continue.
 * @param {number}  [leadingTextStart] Offset at which last closing element
 *                                     finished, used for finding text between
 *                                     elements.
 *
 * @return {Frame} The stack frame tracking parse progress.
 */
function createFrame(element, tokenStart, tokenLength, prevOffset, leadingTextStart) {
  return {
    element,
    tokenStart,
    tokenLength,
    prevOffset,
    leadingTextStart,
    children: []
  };
}

/**
 * This function creates an interpolated element from a passed in string with
 * specific tags matching how the string should be converted to an element via
 * the conversion map value.
 *
 * @example
 * For example, for the given string:
 *
 * "This is a <span>string</span> with <a>a link</a> and a self-closing
 * <CustomComponentB/> tag"
 *
 * You would have something like this as the conversionMap value:
 *
 * ```js
 * {
 *     span: <span />,
 *     a: <a href={ 'https://github.com' } />,
 *     CustomComponentB: <CustomComponent />,
 * }
 * ```
 *
 * @param {string}                  interpolatedString The interpolation string to be parsed.
 * @param {Record<string, Element>} conversionMap      The map used to convert the string to
 *                                                     a react element.
 * @throws {TypeError}
 * @return {Element}  A wp element.
 */
const createInterpolateElement = (interpolatedString, conversionMap) => {
  indoc = interpolatedString;
  offset = 0;
  output = [];
  stack = [];
  tokenizer.lastIndex = 0;
  if (!isValidConversionMap(conversionMap)) {
    throw new TypeError('The conversionMap provided is not valid. It must be an object with values that are React Elements');
  }
  do {
    // twiddle our thumbs
  } while (proceed(conversionMap));
  return (0,react.createElement)(react.Fragment, null, ...output);
};

/**
 * Validate conversion map.
 *
 * A map is considered valid if it's an object and every value in the object
 * is a React Element
 *
 * @private
 *
 * @param {Object} conversionMap The map being validated.
 *
 * @return {boolean}  True means the map is valid.
 */
const isValidConversionMap = conversionMap => {
  const isObject = typeof conversionMap === 'object';
  const values = isObject && Object.values(conversionMap);
  return isObject && values.length && values.every(element => (0,react.isValidElement)(element));
};

/**
 * This is the iterator over the matches in the string.
 *
 * @private
 *
 * @param {Object} conversionMap The conversion map for the string.
 *
 * @return {boolean} true for continuing to iterate, false for finished.
 */
function proceed(conversionMap) {
  const next = nextToken();
  const [tokenType, name, startOffset, tokenLength] = next;
  const stackDepth = stack.length;
  const leadingTextStart = startOffset > offset ? offset : null;
  if (!conversionMap[name]) {
    addText();
    return false;
  }
  switch (tokenType) {
    case 'no-more-tokens':
      if (stackDepth !== 0) {
        const {
          leadingTextStart: stackLeadingText,
          tokenStart
        } = stack.pop();
        output.push(indoc.substr(stackLeadingText, tokenStart));
      }
      addText();
      return false;
    case 'self-closed':
      if (0 === stackDepth) {
        if (null !== leadingTextStart) {
          output.push(indoc.substr(leadingTextStart, startOffset - leadingTextStart));
        }
        output.push(conversionMap[name]);
        offset = startOffset + tokenLength;
        return true;
      }

      // Otherwise we found an inner element.
      addChild(createFrame(conversionMap[name], startOffset, tokenLength));
      offset = startOffset + tokenLength;
      return true;
    case 'opener':
      stack.push(createFrame(conversionMap[name], startOffset, tokenLength, startOffset + tokenLength, leadingTextStart));
      offset = startOffset + tokenLength;
      return true;
    case 'closer':
      // If we're not nesting then this is easy - close the block.
      if (1 === stackDepth) {
        closeOuterElement(startOffset);
        offset = startOffset + tokenLength;
        return true;
      }

      // Otherwise we're nested and we have to close out the current
      // block and add it as a innerBlock to the parent.
      const stackTop = stack.pop();
      const text = indoc.substr(stackTop.prevOffset, startOffset - stackTop.prevOffset);
      stackTop.children.push(text);
      stackTop.prevOffset = startOffset + tokenLength;
      const frame = createFrame(stackTop.element, stackTop.tokenStart, stackTop.tokenLength, startOffset + tokenLength);
      frame.children = stackTop.children;
      addChild(frame);
      offset = startOffset + tokenLength;
      return true;
    default:
      addText();
      return false;
  }
}

/**
 * Grabs the next token match in the string and returns it's details.
 *
 * @private
 *
 * @return {Array}  An array of details for the token matched.
 */
function nextToken() {
  const matches = tokenizer.exec(indoc);
  // We have no more tokens.
  if (null === matches) {
    return ['no-more-tokens'];
  }
  const startedAt = matches.index;
  const [match, isClosing, name, isSelfClosed] = matches;
  const length = match.length;
  if (isSelfClosed) {
    return ['self-closed', name, startedAt, length];
  }
  if (isClosing) {
    return ['closer', name, startedAt, length];
  }
  return ['opener', name, startedAt, length];
}

/**
 * Pushes text extracted from the indoc string to the output stack given the
 * current rawLength value and offset (if rawLength is provided ) or the
 * indoc.length and offset.
 *
 * @private
 */
function addText() {
  const length = indoc.length - offset;
  if (0 === length) {
    return;
  }
  output.push(indoc.substr(offset, length));
}

/**
 * Pushes a child element to the associated parent element's children for the
 * parent currently active in the stack.
 *
 * @private
 *
 * @param {Frame} frame The Frame containing the child element and it's
 *                      token information.
 */
function addChild(frame) {
  const {
    element,
    tokenStart,
    tokenLength,
    prevOffset,
    children
  } = frame;
  const parent = stack[stack.length - 1];
  const text = indoc.substr(parent.prevOffset, tokenStart - parent.prevOffset);
  if (text) {
    parent.children.push(text);
  }
  parent.children.push((0,react.cloneElement)(element, null, ...children));
  parent.prevOffset = prevOffset ? prevOffset : tokenStart + tokenLength;
}

/**
 * This is called for closing tags. It creates the element currently active in
 * the stack.
 *
 * @private
 *
 * @param {number} endOffset Offset at which the closing tag for the element
 *                           begins in the string. If this is greater than the
 *                           prevOffset attached to the element, then this
 *                           helps capture any remaining nested text nodes in
 *                           the element.
 */
function closeOuterElement(endOffset) {
  const {
    element,
    leadingTextStart,
    prevOffset,
    tokenStart,
    children
  } = stack.pop();
  const text = endOffset ? indoc.substr(prevOffset, endOffset - prevOffset) : indoc.substr(prevOffset);
  if (text) {
    children.push(text);
  }
  if (null !== leadingTextStart) {
    output.push(indoc.substr(leadingTextStart, tokenStart - leadingTextStart));
  }
  output.push((0,react.cloneElement)(element, null, ...children));
}
/* harmony default export */ const create_interpolate_element = (createInterpolateElement);
//# sourceMappingURL=create-interpolate-element.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/P2OTTZSX.js
"use client";



// src/tag/tag-context.tsx

var TagValueContext = (0,react.createContext)(null);
var TagRemoveIdContext = (0,react.createContext)(
  null
);
var P2OTTZSX_ctx = (0,HKOOKEDE/* createStoreContext */.B0)(
  [CompositeContextProvider],
  [CompositeScopedContextProvider]
);
var useTagContext = P2OTTZSX_ctx.useContext;
var useTagScopedContext = P2OTTZSX_ctx.useScopedContext;
var useTagProviderContext = P2OTTZSX_ctx.useProviderContext;
var TagContextProvider = P2OTTZSX_ctx.ContextProvider;
var TagScopedContextProvider = P2OTTZSX_ctx.ScopedContextProvider;



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/CBC47ZYL.js
var CBC47ZYL = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/CBC47ZYL.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/3UYWTADI.js
var _3UYWTADI = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/3UYWTADI.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/combobox/combobox-store.js
"use client";












// src/combobox/combobox-store.ts
var isTouchSafari = (0,US4USQPI/* isSafari */.nr)() && (0,US4USQPI/* isTouchDevice */.CN)();
function createComboboxStore(_a = {}) {
  var _b = _a, {
    tag
  } = _b, props = (0,_3YLGPPWQ/* __objRest */.YG)(_b, [
    "tag"
  ]);
  const store = (0,EQQLU3CG/* mergeStore */.od)(props.store, (0,EQQLU3CG/* pick */.Up)(tag, ["value", "rtl"]));
  (0,EQQLU3CG/* throwOnConflictingProps */.UE)(props, store);
  const tagState = tag == null ? void 0 : tag.getState();
  const syncState = store == null ? void 0 : store.getState();
  const activeId = (0,PBFD2E7P/* defaultValue */.Jh)(
    props.activeId,
    syncState == null ? void 0 : syncState.activeId,
    props.defaultActiveId,
    null
  );
  const composite = createCompositeStore((0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
    activeId,
    includesBaseElement: (0,PBFD2E7P/* defaultValue */.Jh)(
      props.includesBaseElement,
      syncState == null ? void 0 : syncState.includesBaseElement,
      true
    ),
    orientation: (0,PBFD2E7P/* defaultValue */.Jh)(
      props.orientation,
      syncState == null ? void 0 : syncState.orientation,
      "vertical"
    ),
    focusLoop: (0,PBFD2E7P/* defaultValue */.Jh)(props.focusLoop, syncState == null ? void 0 : syncState.focusLoop, true),
    focusWrap: (0,PBFD2E7P/* defaultValue */.Jh)(props.focusWrap, syncState == null ? void 0 : syncState.focusWrap, true),
    virtualFocus: (0,PBFD2E7P/* defaultValue */.Jh)(
      props.virtualFocus,
      syncState == null ? void 0 : syncState.virtualFocus,
      true
    )
  }));
  const popover = (0,_3UYWTADI/* createPopoverStore */.N)((0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
    placement: (0,PBFD2E7P/* defaultValue */.Jh)(
      props.placement,
      syncState == null ? void 0 : syncState.placement,
      "bottom-start"
    )
  }));
  const value = (0,PBFD2E7P/* defaultValue */.Jh)(
    props.value,
    syncState == null ? void 0 : syncState.value,
    props.defaultValue,
    ""
  );
  const selectedValue = (0,PBFD2E7P/* defaultValue */.Jh)(
    props.selectedValue,
    syncState == null ? void 0 : syncState.selectedValue,
    tagState == null ? void 0 : tagState.values,
    props.defaultSelectedValue,
    ""
  );
  const multiSelectable = Array.isArray(selectedValue);
  const initialState = (0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, composite.getState()), popover.getState()), {
    value,
    selectedValue,
    resetValueOnSelect: (0,PBFD2E7P/* defaultValue */.Jh)(
      props.resetValueOnSelect,
      syncState == null ? void 0 : syncState.resetValueOnSelect,
      multiSelectable
    ),
    resetValueOnHide: (0,PBFD2E7P/* defaultValue */.Jh)(
      props.resetValueOnHide,
      syncState == null ? void 0 : syncState.resetValueOnHide,
      multiSelectable && !tag
    ),
    activeValue: syncState == null ? void 0 : syncState.activeValue
  });
  const combobox = (0,EQQLU3CG/* createStore */.y$)(initialState, composite, popover, store);
  if (isTouchSafari) {
    (0,EQQLU3CG/* setup */.mj)(
      combobox,
      () => (0,EQQLU3CG/* sync */.OH)(combobox, ["virtualFocus"], () => {
        combobox.setState("virtualFocus", false);
      })
    );
  }
  (0,EQQLU3CG/* setup */.mj)(combobox, () => {
    if (!tag) return;
    return (0,PBFD2E7P/* chain */.cy)(
      (0,EQQLU3CG/* sync */.OH)(combobox, ["selectedValue"], (state) => {
        if (!Array.isArray(state.selectedValue)) return;
        tag.setValues(state.selectedValue);
      }),
      (0,EQQLU3CG/* sync */.OH)(tag, ["values"], (state) => {
        combobox.setState("selectedValue", state.values);
      })
    );
  });
  (0,EQQLU3CG/* setup */.mj)(
    combobox,
    () => (0,EQQLU3CG/* sync */.OH)(combobox, ["resetValueOnHide", "mounted"], (state) => {
      if (!state.resetValueOnHide) return;
      if (state.mounted) return;
      combobox.setState("value", value);
    })
  );
  (0,EQQLU3CG/* setup */.mj)(
    combobox,
    () => (0,EQQLU3CG/* batch */.vA)(combobox, ["mounted"], (state) => {
      if (state.mounted) return;
      combobox.setState("activeId", activeId);
      combobox.setState("moves", 0);
    })
  );
  (0,EQQLU3CG/* setup */.mj)(
    combobox,
    () => (0,EQQLU3CG/* sync */.OH)(combobox, ["moves", "activeId"], (state, prevState) => {
      if (state.moves === prevState.moves) {
        combobox.setState("activeValue", void 0);
      }
    })
  );
  (0,EQQLU3CG/* setup */.mj)(
    combobox,
    () => (0,EQQLU3CG/* batch */.vA)(combobox, ["moves", "renderedItems"], (state, prev) => {
      if (state.moves === prev.moves) return;
      const { activeId: activeId2 } = combobox.getState();
      const activeItem = composite.item(activeId2);
      combobox.setState("activeValue", activeItem == null ? void 0 : activeItem.value);
    })
  );
  return (0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)((0,_3YLGPPWQ/* __spreadValues */.IA)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, popover), composite), combobox), {
    tag,
    setValue: (value2) => combobox.setState("value", value2),
    resetValue: () => combobox.setState("value", initialState.value),
    setSelectedValue: (selectedValue2) => combobox.setState("selectedValue", selectedValue2)
  });
}


;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/7BSNT25J.js
"use client";







// src/combobox/combobox-store.ts

function useComboboxStoreProps(store, update, props) {
  (0,Z32BISHQ/* useUpdateEffect */.w5)(update, [props.tag]);
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "value", "setValue");
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "selectedValue", "setSelectedValue");
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "resetValueOnHide");
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "resetValueOnSelect");
  return Object.assign(
    useCompositeStoreProps(
      (0,CBC47ZYL/* usePopoverStoreProps */.o)(store, update, props),
      update,
      props
    ),
    { tag: props.tag }
  );
}
function useComboboxStore(props = {}) {
  const tag = useTagContext();
  props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
    tag: props.tag !== void 0 ? props.tag : tag
  });
  const [store, update] = (0,_2GXGCHW6/* useStore */.Pj)(createComboboxStore, props);
  return useComboboxStoreProps(store, update, props);
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/combobox/combobox-provider.js
"use client";



















// src/combobox/combobox-provider.tsx

function ComboboxProvider(props = {}) {
  const store = useComboboxStore(props);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(ComboboxContextProvider, { value: store, children: props.children });
}


;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/combobox/combobox-label.js
"use client";











// src/combobox/combobox-label.tsx

var combobox_label_TagName = "label";
var useComboboxLabel = (0,HKOOKEDE/* createHook */.ab)(
  function useComboboxLabel2(_a) {
    var _b = _a, { store } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, ["store"]);
    const context = useComboboxProviderContext();
    store = store || context;
    (0,PBFD2E7P/* invariant */.V1)(
      store,
       false && 0
    );
    const comboboxId = store.useState((state) => {
      var _a2;
      return (_a2 = state.baseElement) == null ? void 0 : _a2.id;
    });
    props = (0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      htmlFor: comboboxId
    }, props);
    return (0,PBFD2E7P/* removeUndefinedValues */.HR)(props);
  }
);
var ComboboxLabel = (0,HKOOKEDE/* memo */.ph)(
  (0,HKOOKEDE/* forwardRef */.Rf)(function ComboboxLabel2(props) {
    const htmlProps = useComboboxLabel(props);
    return (0,HKOOKEDE/* createElement */.n)(combobox_label_TagName, htmlProps);
  })
);


;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/combobox/combobox.js
"use client";
















// src/combobox/combobox.tsx






var combobox_TagName = "input";
function isFirstItemAutoSelected(items, activeValue, autoSelect) {
  if (!autoSelect) return false;
  const firstItem = items.find((item) => !item.disabled && item.value);
  return (firstItem == null ? void 0 : firstItem.value) === activeValue;
}
function hasCompletionString(value, activeValue) {
  if (!activeValue) return false;
  if (value == null) return false;
  value = (0,PBFD2E7P/* normalizeString */.J2)(value);
  return activeValue.length > value.length && activeValue.toLowerCase().indexOf(value.toLowerCase()) === 0;
}
function isInputEvent(event) {
  return event.type === "input";
}
function isAriaAutoCompleteValue(value) {
  return value === "inline" || value === "list" || value === "both" || value === "none";
}
function getDefaultAutoSelectId(items) {
  const item = items.find((item2) => {
    var _a;
    if (item2.disabled) return false;
    return ((_a = item2.element) == null ? void 0 : _a.getAttribute("role")) !== "tab";
  });
  return item == null ? void 0 : item.id;
}
var useCombobox = (0,HKOOKEDE/* createHook */.ab)(
  function useCombobox2(_a) {
    var _b = _a, {
      store,
      focusable = true,
      autoSelect: autoSelectProp = false,
      getAutoSelectId,
      setValueOnChange,
      showMinLength = 0,
      showOnChange,
      showOnMouseDown,
      showOnClick = showOnMouseDown,
      showOnKeyDown,
      showOnKeyPress = showOnKeyDown,
      blurActiveItemOnClick,
      setValueOnClick = true,
      moveOnKeyPress = true,
      autoComplete = "list"
    } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, [
      "store",
      "focusable",
      "autoSelect",
      "getAutoSelectId",
      "setValueOnChange",
      "showMinLength",
      "showOnChange",
      "showOnMouseDown",
      "showOnClick",
      "showOnKeyDown",
      "showOnKeyPress",
      "blurActiveItemOnClick",
      "setValueOnClick",
      "moveOnKeyPress",
      "autoComplete"
    ]);
    const context = useComboboxProviderContext();
    store = store || context;
    (0,PBFD2E7P/* invariant */.V1)(
      store,
       false && 0
    );
    const ref = (0,react.useRef)(null);
    const [valueUpdated, forceValueUpdate] = (0,Z32BISHQ/* useForceUpdate */.CH)();
    const canAutoSelectRef = (0,react.useRef)(false);
    const composingRef = (0,react.useRef)(false);
    const autoSelect = store.useState(
      (state) => state.virtualFocus && autoSelectProp
    );
    const inline = autoComplete === "inline" || autoComplete === "both";
    const [canInline, setCanInline] = (0,react.useState)(inline);
    (0,Z32BISHQ/* useUpdateLayoutEffect */.Kp)(() => {
      if (!inline) return;
      setCanInline(true);
    }, [inline]);
    const storeValue = store.useState("value");
    const prevSelectedValueRef = (0,react.useRef)();
    (0,react.useEffect)(() => {
      return (0,EQQLU3CG/* sync */.OH)(store, ["selectedValue", "activeId"], (_, prev) => {
        prevSelectedValueRef.current = prev.selectedValue;
      });
    }, []);
    const inlineActiveValue = store.useState((state) => {
      var _a2;
      if (!inline) return;
      if (!canInline) return;
      if (state.activeValue && Array.isArray(state.selectedValue)) {
        if (state.selectedValue.includes(state.activeValue)) return;
        if ((_a2 = prevSelectedValueRef.current) == null ? void 0 : _a2.includes(state.activeValue)) return;
      }
      return state.activeValue;
    });
    const items = store.useState("renderedItems");
    const open = store.useState("open");
    const contentElement = store.useState("contentElement");
    const value = (0,react.useMemo)(() => {
      if (!inline) return storeValue;
      if (!canInline) return storeValue;
      const firstItemAutoSelected = isFirstItemAutoSelected(
        items,
        inlineActiveValue,
        autoSelect
      );
      if (firstItemAutoSelected) {
        if (hasCompletionString(storeValue, inlineActiveValue)) {
          const slice = (inlineActiveValue == null ? void 0 : inlineActiveValue.slice(storeValue.length)) || "";
          return storeValue + slice;
        }
        return storeValue;
      }
      return inlineActiveValue || storeValue;
    }, [inline, canInline, items, inlineActiveValue, autoSelect, storeValue]);
    (0,react.useEffect)(() => {
      const element = ref.current;
      if (!element) return;
      const onCompositeItemMove = () => setCanInline(true);
      element.addEventListener("combobox-item-move", onCompositeItemMove);
      return () => {
        element.removeEventListener("combobox-item-move", onCompositeItemMove);
      };
    }, []);
    (0,react.useEffect)(() => {
      if (!inline) return;
      if (!canInline) return;
      if (!inlineActiveValue) return;
      const firstItemAutoSelected = isFirstItemAutoSelected(
        items,
        inlineActiveValue,
        autoSelect
      );
      if (!firstItemAutoSelected) return;
      if (!hasCompletionString(storeValue, inlineActiveValue)) return;
      let cleanup = PBFD2E7P/* noop */.lQ;
      queueMicrotask(() => {
        const element = ref.current;
        if (!element) return;
        const { start: prevStart, end: prevEnd } = (0,HWOIWM4O/* getTextboxSelection */.Zy)(element);
        const nextStart = storeValue.length;
        const nextEnd = inlineActiveValue.length;
        (0,HWOIWM4O/* setSelectionRange */.eG)(element, nextStart, nextEnd);
        cleanup = () => {
          if (!(0,utils_focus/* hasFocus */.AJ)(element)) return;
          const { start, end } = (0,HWOIWM4O/* getTextboxSelection */.Zy)(element);
          if (start !== nextStart) return;
          if (end !== nextEnd) return;
          (0,HWOIWM4O/* setSelectionRange */.eG)(element, prevStart, prevEnd);
        };
      });
      return () => cleanup();
    }, [
      valueUpdated,
      inline,
      canInline,
      inlineActiveValue,
      items,
      autoSelect,
      storeValue
    ]);
    const scrollingElementRef = (0,react.useRef)(null);
    const getAutoSelectIdProp = (0,Z32BISHQ/* useEvent */._q)(getAutoSelectId);
    const autoSelectIdRef = (0,react.useRef)(null);
    (0,react.useEffect)(() => {
      if (!open) return;
      if (!contentElement) return;
      const scrollingElement = (0,HWOIWM4O/* getScrollingElement */.qj)(contentElement);
      if (!scrollingElement) return;
      scrollingElementRef.current = scrollingElement;
      const onUserScroll = () => {
        canAutoSelectRef.current = false;
      };
      const onScroll = () => {
        if (!store) return;
        if (!canAutoSelectRef.current) return;
        const { activeId } = store.getState();
        if (activeId === null) return;
        if (activeId === autoSelectIdRef.current) return;
        canAutoSelectRef.current = false;
      };
      const options = { passive: true, capture: true };
      scrollingElement.addEventListener("wheel", onUserScroll, options);
      scrollingElement.addEventListener("touchmove", onUserScroll, options);
      scrollingElement.addEventListener("scroll", onScroll, options);
      return () => {
        scrollingElement.removeEventListener("wheel", onUserScroll, true);
        scrollingElement.removeEventListener("touchmove", onUserScroll, true);
        scrollingElement.removeEventListener("scroll", onScroll, true);
      };
    }, [open, contentElement, store]);
    (0,Z32BISHQ/* useSafeLayoutEffect */.UQ)(() => {
      if (!storeValue) return;
      if (composingRef.current) return;
      canAutoSelectRef.current = true;
    }, [storeValue]);
    (0,Z32BISHQ/* useSafeLayoutEffect */.UQ)(() => {
      if (autoSelect !== "always" && open) return;
      canAutoSelectRef.current = open;
    }, [autoSelect, open]);
    const resetValueOnSelect = store.useState("resetValueOnSelect");
    (0,Z32BISHQ/* useUpdateEffect */.w5)(() => {
      var _a2, _b2;
      const canAutoSelect = canAutoSelectRef.current;
      if (!store) return;
      if (!open) return;
      if ((!autoSelect || !canAutoSelect) && !resetValueOnSelect) return;
      const { baseElement, contentElement: contentElement2, activeId } = store.getState();
      if (baseElement && !(0,utils_focus/* hasFocus */.AJ)(baseElement)) return;
      if (contentElement2 == null ? void 0 : contentElement2.hasAttribute("data-placing")) {
        const observer = new MutationObserver(forceValueUpdate);
        observer.observe(contentElement2, { attributeFilter: ["data-placing"] });
        return () => observer.disconnect();
      }
      if (autoSelect && canAutoSelect) {
        const userAutoSelectId = getAutoSelectIdProp(items);
        const autoSelectId = userAutoSelectId !== void 0 ? userAutoSelectId : (_a2 = getDefaultAutoSelectId(items)) != null ? _a2 : store.first();
        autoSelectIdRef.current = autoSelectId;
        store.move(autoSelectId != null ? autoSelectId : null);
      } else {
        const element = (_b2 = store.item(activeId)) == null ? void 0 : _b2.element;
        if (element && "scrollIntoView" in element) {
          element.scrollIntoView({ block: "nearest", inline: "nearest" });
        }
      }
      return;
    }, [
      store,
      open,
      valueUpdated,
      storeValue,
      autoSelect,
      resetValueOnSelect,
      getAutoSelectIdProp,
      items
    ]);
    (0,react.useEffect)(() => {
      if (!inline) return;
      const combobox = ref.current;
      if (!combobox) return;
      const elements = [combobox, contentElement].filter(
        (value2) => !!value2
      );
      const onBlur2 = (event) => {
        if (elements.every((el) => (0,events/* isFocusEventOutside */.aG)(event, el))) {
          store == null ? void 0 : store.setValue(value);
        }
      };
      for (const element of elements) {
        element.addEventListener("focusout", onBlur2);
      }
      return () => {
        for (const element of elements) {
          element.removeEventListener("focusout", onBlur2);
        }
      };
    }, [inline, contentElement, store, value]);
    const canShow = (event) => {
      const currentTarget = event.currentTarget;
      return currentTarget.value.length >= showMinLength;
    };
    const onChangeProp = props.onChange;
    const showOnChangeProp = (0,Z32BISHQ/* useBooleanEvent */.O4)(showOnChange != null ? showOnChange : canShow);
    const setValueOnChangeProp = (0,Z32BISHQ/* useBooleanEvent */.O4)(
      // If the combobox is combined with tags, the value will be set by the tag
      // input component.
      setValueOnChange != null ? setValueOnChange : !store.tag
    );
    const onChange = (0,Z32BISHQ/* useEvent */._q)((event) => {
      onChangeProp == null ? void 0 : onChangeProp(event);
      if (event.defaultPrevented) return;
      if (!store) return;
      const currentTarget = event.currentTarget;
      const { value: value2, selectionStart, selectionEnd } = currentTarget;
      const nativeEvent = event.nativeEvent;
      canAutoSelectRef.current = true;
      if (isInputEvent(nativeEvent)) {
        if (nativeEvent.isComposing) {
          canAutoSelectRef.current = false;
          composingRef.current = true;
        }
        if (inline) {
          const textInserted = nativeEvent.inputType === "insertText" || nativeEvent.inputType === "insertCompositionText";
          const caretAtEnd = selectionStart === value2.length;
          setCanInline(textInserted && caretAtEnd);
        }
      }
      if (setValueOnChangeProp(event)) {
        const isSameValue = value2 === store.getState().value;
        store.setValue(value2);
        queueMicrotask(() => {
          (0,HWOIWM4O/* setSelectionRange */.eG)(currentTarget, selectionStart, selectionEnd);
        });
        if (inline && autoSelect && isSameValue) {
          forceValueUpdate();
        }
      }
      if (showOnChangeProp(event)) {
        store.show();
      }
      if (!autoSelect || !canAutoSelectRef.current) {
        store.setActiveId(null);
      }
    });
    const onCompositionEndProp = props.onCompositionEnd;
    const onCompositionEnd = (0,Z32BISHQ/* useEvent */._q)((event) => {
      canAutoSelectRef.current = true;
      composingRef.current = false;
      onCompositionEndProp == null ? void 0 : onCompositionEndProp(event);
      if (event.defaultPrevented) return;
      if (!autoSelect) return;
      forceValueUpdate();
    });
    const onMouseDownProp = props.onMouseDown;
    const blurActiveItemOnClickProp = (0,Z32BISHQ/* useBooleanEvent */.O4)(
      blurActiveItemOnClick != null ? blurActiveItemOnClick : () => !!(store == null ? void 0 : store.getState().includesBaseElement)
    );
    const setValueOnClickProp = (0,Z32BISHQ/* useBooleanEvent */.O4)(setValueOnClick);
    const showOnClickProp = (0,Z32BISHQ/* useBooleanEvent */.O4)(showOnClick != null ? showOnClick : canShow);
    const onMouseDown = (0,Z32BISHQ/* useEvent */._q)((event) => {
      onMouseDownProp == null ? void 0 : onMouseDownProp(event);
      if (event.defaultPrevented) return;
      if (event.button) return;
      if (event.ctrlKey) return;
      if (!store) return;
      if (blurActiveItemOnClickProp(event)) {
        store.setActiveId(null);
      }
      if (setValueOnClickProp(event)) {
        store.setValue(value);
      }
      if (showOnClickProp(event)) {
        (0,events/* queueBeforeEvent */.nz)(event.currentTarget, "mouseup", store.show);
      }
    });
    const onKeyDownProp = props.onKeyDown;
    const showOnKeyPressProp = (0,Z32BISHQ/* useBooleanEvent */.O4)(showOnKeyPress != null ? showOnKeyPress : canShow);
    const onKeyDown = (0,Z32BISHQ/* useEvent */._q)((event) => {
      onKeyDownProp == null ? void 0 : onKeyDownProp(event);
      if (!event.repeat) {
        canAutoSelectRef.current = false;
      }
      if (event.defaultPrevented) return;
      if (event.ctrlKey) return;
      if (event.altKey) return;
      if (event.shiftKey) return;
      if (event.metaKey) return;
      if (!store) return;
      const { open: open2, activeId } = store.getState();
      if (open2) return;
      if (activeId !== null) return;
      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        if (showOnKeyPressProp(event)) {
          event.preventDefault();
          store.show();
        }
      }
    });
    const onBlurProp = props.onBlur;
    const onBlur = (0,Z32BISHQ/* useEvent */._q)((event) => {
      canAutoSelectRef.current = false;
      onBlurProp == null ? void 0 : onBlurProp(event);
      if (event.defaultPrevented) return;
    });
    const id = (0,Z32BISHQ/* useId */.Bi)(props.id);
    const ariaAutoComplete = isAriaAutoCompleteValue(autoComplete) ? autoComplete : void 0;
    const isActiveItem = store.useState((state) => state.activeId === null);
    props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      id,
      role: "combobox",
      "aria-autocomplete": ariaAutoComplete,
      "aria-haspopup": (0,HWOIWM4O/* getPopupRole */.Tc)(contentElement, "listbox"),
      "aria-expanded": open,
      "aria-controls": contentElement == null ? void 0 : contentElement.id,
      "data-active-item": isActiveItem || void 0,
      value
    }, props), {
      ref: (0,Z32BISHQ/* useMergeRefs */.SV)(ref, props.ref),
      onChange,
      onCompositionEnd,
      onMouseDown,
      onKeyDown,
      onBlur
    });
    props = useComposite((0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      store,
      focusable
    }, props), {
      // Enable inline autocomplete when the user moves from the combobox input
      // to an item.
      moveOnKeyPress: (event) => {
        if ((0,PBFD2E7P/* isFalsyBooleanCallback */.zO)(moveOnKeyPress, event)) return false;
        if (inline) setCanInline(true);
        return true;
      }
    }));
    props = usePopoverAnchor((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({ store }, props));
    return (0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({ autoComplete: "off" }, props);
  }
);
var Combobox = (0,HKOOKEDE/* forwardRef */.Rf)(function Combobox2(props) {
  const htmlProps = useCombobox(props);
  return (0,HKOOKEDE/* createElement */.n)(combobox_TagName, htmlProps);
});


;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/6ZVAPMHT.js
"use client";






// src/combobox/combobox-list.tsx



var _6ZVAPMHT_TagName = "div";
var useComboboxList = (0,HKOOKEDE/* createHook */.ab)(
  function useComboboxList2(_a) {
    var _b = _a, { store, alwaysVisible } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, ["store", "alwaysVisible"]);
    const scopedContext = useComboboxScopedContext(true);
    const context = useComboboxContext();
    store = store || context;
    const scopedContextSameStore = !!store && store === scopedContext;
    (0,PBFD2E7P/* invariant */.V1)(
      store,
       false && 0
    );
    const ref = (0,react.useRef)(null);
    const id = (0,Z32BISHQ/* useId */.Bi)(props.id);
    const mounted = store.useState("mounted");
    const hidden = (0,BSEL4YAF/* isHidden */.dK)(mounted, props.hidden, alwaysVisible);
    const style = hidden ? (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({}, props.style), { display: "none" }) : props.style;
    const multiSelectable = store.useState(
      (state) => Array.isArray(state.selectedValue)
    );
    const role = (0,Z32BISHQ/* useAttribute */.Cy)(ref, "role", props.role);
    const isCompositeRole = role === "listbox" || role === "tree" || role === "grid";
    const ariaMultiSelectable = isCompositeRole ? multiSelectable || void 0 : void 0;
    const [hasListboxInside, setHasListboxInside] = (0,react.useState)(false);
    const contentElement = store.useState("contentElement");
    (0,Z32BISHQ/* useSafeLayoutEffect */.UQ)(() => {
      if (!mounted) return;
      const element = ref.current;
      if (!element) return;
      if (contentElement !== element) return;
      const callback = () => {
        setHasListboxInside(!!element.querySelector("[role='listbox']"));
      };
      const observer = new MutationObserver(callback);
      observer.observe(element, {
        subtree: true,
        childList: true,
        attributeFilter: ["role"]
      });
      callback();
      return () => observer.disconnect();
    }, [mounted, contentElement]);
    if (!hasListboxInside) {
      props = (0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
        role: "listbox",
        "aria-multiselectable": ariaMultiSelectable
      }, props);
    }
    props = (0,Z32BISHQ/* useWrapElement */.w7)(
      props,
      (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(ComboboxScopedContextProvider, { value: store, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ComboboxListRoleContext.Provider, { value: role, children: element }) }),
      [store, role]
    );
    const setContentElement = id && (!scopedContext || !scopedContextSameStore) ? store.setContentElement : null;
    props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      id,
      hidden
    }, props), {
      ref: (0,Z32BISHQ/* useMergeRefs */.SV)(setContentElement, ref, props.ref),
      style
    });
    return (0,PBFD2E7P/* removeUndefinedValues */.HR)(props);
  }
);
var ComboboxList = (0,HKOOKEDE/* forwardRef */.Rf)(function ComboboxList2(props) {
  const htmlProps = useComboboxList(props);
  return (0,HKOOKEDE/* createElement */.n)(_6ZVAPMHT_TagName, htmlProps);
});



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/combobox/combobox-item.js
"use client";



















// src/combobox/combobox-item.tsx






var combobox_item_TagName = "div";
function isSelected(storeValue, itemValue) {
  if (itemValue == null) return;
  if (storeValue == null) return false;
  if (Array.isArray(storeValue)) {
    return storeValue.includes(itemValue);
  }
  return storeValue === itemValue;
}
function getItemRole(popupRole) {
  var _a;
  const itemRoleByPopupRole = {
    menu: "menuitem",
    listbox: "option",
    tree: "treeitem"
  };
  const key = popupRole;
  return (_a = itemRoleByPopupRole[key]) != null ? _a : "option";
}
var useComboboxItem = (0,HKOOKEDE/* createHook */.ab)(
  function useComboboxItem2(_a) {
    var _b = _a, {
      store,
      value,
      hideOnClick,
      setValueOnClick,
      selectValueOnClick = true,
      resetValueOnSelect,
      focusOnHover = false,
      moveOnKeyPress = true,
      getItem: getItemProp
    } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, [
      "store",
      "value",
      "hideOnClick",
      "setValueOnClick",
      "selectValueOnClick",
      "resetValueOnSelect",
      "focusOnHover",
      "moveOnKeyPress",
      "getItem"
    ]);
    var _a2;
    const context = useComboboxScopedContext();
    store = store || context;
    (0,PBFD2E7P/* invariant */.V1)(
      store,
       false && 0
    );
    const getItem = (0,react.useCallback)(
      (item) => {
        const nextItem = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({}, item), { value });
        if (getItemProp) {
          return getItemProp(nextItem);
        }
        return nextItem;
      },
      [value, getItemProp]
    );
    const multiSelectable = store.useState(
      (state) => Array.isArray(state.selectedValue)
    );
    const selected = store.useState(
      (state) => isSelected(state.selectedValue, value)
    );
    const resetValueOnSelectState = store.useState("resetValueOnSelect");
    setValueOnClick = setValueOnClick != null ? setValueOnClick : !multiSelectable;
    hideOnClick = hideOnClick != null ? hideOnClick : value != null && !multiSelectable;
    const onClickProp = props.onClick;
    const setValueOnClickProp = (0,Z32BISHQ/* useBooleanEvent */.O4)(setValueOnClick);
    const selectValueOnClickProp = (0,Z32BISHQ/* useBooleanEvent */.O4)(selectValueOnClick);
    const resetValueOnSelectProp = (0,Z32BISHQ/* useBooleanEvent */.O4)(
      (_a2 = resetValueOnSelect != null ? resetValueOnSelect : resetValueOnSelectState) != null ? _a2 : multiSelectable
    );
    const hideOnClickProp = (0,Z32BISHQ/* useBooleanEvent */.O4)(hideOnClick);
    const onClick = (0,Z32BISHQ/* useEvent */._q)((event) => {
      onClickProp == null ? void 0 : onClickProp(event);
      if (event.defaultPrevented) return;
      if ((0,events/* isDownloading */.RN)(event)) return;
      if ((0,events/* isOpeningInNewTab */.$b)(event)) return;
      if (value != null) {
        if (selectValueOnClickProp(event)) {
          if (resetValueOnSelectProp(event)) {
            store == null ? void 0 : store.resetValue();
          }
          store == null ? void 0 : store.setSelectedValue((prevValue) => {
            if (!Array.isArray(prevValue)) return value;
            if (prevValue.includes(value)) {
              return prevValue.filter((v) => v !== value);
            }
            return [...prevValue, value];
          });
        }
        if (setValueOnClickProp(event)) {
          store == null ? void 0 : store.setValue(value);
        }
      }
      if (hideOnClickProp(event)) {
        store == null ? void 0 : store.hide();
      }
    });
    const onKeyDownProp = props.onKeyDown;
    const onKeyDown = (0,Z32BISHQ/* useEvent */._q)((event) => {
      onKeyDownProp == null ? void 0 : onKeyDownProp(event);
      if (event.defaultPrevented) return;
      const baseElement = store == null ? void 0 : store.getState().baseElement;
      if (!baseElement) return;
      if ((0,utils_focus/* hasFocus */.AJ)(baseElement)) return;
      const printable = event.key.length === 1;
      if (printable || event.key === "Backspace" || event.key === "Delete") {
        queueMicrotask(() => baseElement.focus());
        if ((0,HWOIWM4O/* isTextField */.mB)(baseElement)) {
          store == null ? void 0 : store.setValue(baseElement.value);
        }
      }
    });
    if (multiSelectable && selected != null) {
      props = (0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
        "aria-selected": selected
      }, props);
    }
    props = (0,Z32BISHQ/* useWrapElement */.w7)(
      props,
      (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(ComboboxItemValueContext.Provider, { value, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ComboboxItemCheckedContext.Provider, { value: selected != null ? selected : false, children: element }) }),
      [value, selected]
    );
    const popupRole = (0,react.useContext)(ComboboxListRoleContext);
    props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      role: getItemRole(popupRole),
      children: value
    }, props), {
      onClick,
      onKeyDown
    });
    const moveOnKeyPressProp = (0,Z32BISHQ/* useBooleanEvent */.O4)(moveOnKeyPress);
    props = useCompositeItem((0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      store
    }, props), {
      getItem,
      // Dispatch a custom event on the combobox input when moving to an item
      // with the keyboard so the Combobox component can enable inline
      // autocompletion.
      moveOnKeyPress: (event) => {
        if (!moveOnKeyPressProp(event)) return false;
        const moveEvent = new Event("combobox-item-move");
        const baseElement = store == null ? void 0 : store.getState().baseElement;
        baseElement == null ? void 0 : baseElement.dispatchEvent(moveEvent);
        return true;
      }
    }));
    props = useCompositeHover((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({ store, focusOnHover }, props));
    return props;
  }
);
var ComboboxItem = (0,HKOOKEDE/* memo */.ph)(
  (0,HKOOKEDE/* forwardRef */.Rf)(function ComboboxItem2(props) {
    const htmlProps = useComboboxItem(props);
    return (0,HKOOKEDE/* createElement */.n)(combobox_item_TagName, htmlProps);
  })
);


;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/combobox/combobox-item-value.js
"use client";












// src/combobox/combobox-item-value.tsx




var combobox_item_value_TagName = "span";
function normalizeValue(value) {
  return (0,PBFD2E7P/* normalizeString */.J2)(value).toLowerCase();
}
function getOffsets(string, values) {
  const offsets = [];
  for (const value of values) {
    let pos = 0;
    const length = value.length;
    while (string.indexOf(value, pos) !== -1) {
      const index = string.indexOf(value, pos);
      if (index !== -1) {
        offsets.push([index, length]);
      }
      pos = index + 1;
    }
  }
  return offsets;
}
function filterOverlappingOffsets(offsets) {
  return offsets.filter(([offset, length], i, arr) => {
    return !arr.some(
      ([o, l], j) => j !== i && o <= offset && o + l >= offset + length
    );
  });
}
function sortOffsets(offsets) {
  return offsets.sort(([a], [b]) => a - b);
}
function splitValue(itemValue, userValue) {
  if (!itemValue) return itemValue;
  if (!userValue) return itemValue;
  const userValues = toArray(userValue).filter(Boolean).map(normalizeValue);
  const parts = [];
  const span = (value, autocomplete = false) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "span",
    {
      "data-autocomplete-value": autocomplete ? "" : void 0,
      "data-user-value": autocomplete ? void 0 : "",
      children: value
    },
    parts.length
  );
  const offsets = sortOffsets(
    filterOverlappingOffsets(
      // Convert userValues into a set to avoid duplicates
      getOffsets(normalizeValue(itemValue), new Set(userValues))
    )
  );
  if (!offsets.length) {
    parts.push(span(itemValue, true));
    return parts;
  }
  const [firstOffset] = offsets[0];
  const values = [
    itemValue.slice(0, firstOffset),
    ...offsets.flatMap(([offset, length], i) => {
      var _a;
      const value = itemValue.slice(offset, offset + length);
      const nextOffset = (_a = offsets[i + 1]) == null ? void 0 : _a[0];
      const nextValue = itemValue.slice(offset + length, nextOffset);
      return [value, nextValue];
    })
  ];
  values.forEach((value, i) => {
    if (!value) return;
    parts.push(span(value, i % 2 === 0));
  });
  return parts;
}
var useComboboxItemValue = (0,HKOOKEDE/* createHook */.ab)(function useComboboxItemValue2(_a) {
  var _b = _a, { store, value, userValue } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, ["store", "value", "userValue"]);
  const context = useComboboxScopedContext();
  store = store || context;
  const itemContext = (0,react.useContext)(ComboboxItemValueContext);
  const itemValue = value != null ? value : itemContext;
  const inputValue = (0,_2GXGCHW6/* useStoreState */.O$)(store, (state) => userValue != null ? userValue : state == null ? void 0 : state.value);
  const children = (0,react.useMemo)(() => {
    if (!itemValue) return;
    if (!inputValue) return itemValue;
    return splitValue(itemValue, inputValue);
  }, [itemValue, inputValue]);
  props = (0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
    children
  }, props);
  return (0,PBFD2E7P/* removeUndefinedValues */.HR)(props);
});
var ComboboxItemValue = (0,HKOOKEDE/* forwardRef */.Rf)(function ComboboxItemValue2(props) {
  const htmlProps = useComboboxItemValue(props);
  return (0,HKOOKEDE/* createElement */.n)(combobox_item_value_TagName, htmlProps);
});


// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/visually-hidden/component.js + 1 modules
var visually_hidden_component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/visually-hidden/component.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@17.0.2/node_modules/@wordpress/icons/build-module/library/search.js
/**
 * WordPress dependencies
 */


const search = /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* SVG */.t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
    d: "M13 5c-3.3 0-6 2.7-6 6 0 1.4.5 2.7 1.3 3.7l-3.8 3.8 1.1 1.1 3.8-3.8c1 .8 2.3 1.3 3.7 1.3 3.3 0 6-2.7 6-6S16.3 5 13 5zm0 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"
  })
});
/* harmony default export */ const library_search = (search);
//# sourceMappingURL=search.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.2.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@wordpress/dataviews/build-module/components/dataviews-filters/search-widget.js
/**
 * External dependencies
 */
// eslint-disable-next-line no-restricted-imports



/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



const {
  CompositeV2: search_widget_Composite,
  CompositeItemV2: CompositeItem,
  useCompositeStoreV2: search_widget_useCompositeStore
} = lock_unlock_unlock(privateApis);
const search_widget_radioCheck = /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* SVG */.t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Circle */.jl, {
    cx: 12,
    cy: 12,
    r: 3
  })
});
function normalizeSearchInput(input = '') {
  return remove_accents_default()(input.trim().toLowerCase());
}
const search_widget_EMPTY_ARRAY = [];
const getCurrentValue = (filterDefinition, currentFilter) => {
  if (filterDefinition.singleSelection) {
    return currentFilter?.value;
  }
  if (Array.isArray(currentFilter?.value)) {
    return currentFilter.value;
  }
  if (!Array.isArray(currentFilter?.value) && !!currentFilter?.value) {
    return [currentFilter.value];
  }
  return search_widget_EMPTY_ARRAY;
};
const getNewValue = (filterDefinition, currentFilter, value) => {
  if (filterDefinition.singleSelection) {
    return value;
  }
  if (Array.isArray(currentFilter?.value)) {
    return currentFilter.value.includes(value) ? currentFilter.value.filter(v => v !== value) : [...currentFilter.value, value];
  }
  return [value];
};
function ListBox({
  view,
  filter,
  onChangeView
}) {
  const compositeStore = search_widget_useCompositeStore({
    virtualFocus: true,
    focusLoop: true,
    // When we have no or just one operator, we can set the first item as active.
    // We do that by passing `undefined` to `defaultActiveId`. Otherwise, we set it to `null`,
    // so the first item is not selected, since the focus is on the operators control.
    defaultActiveId: filter.operators?.length === 1 ? undefined : null
  });
  const currentFilter = view.filters?.find(f => f.field === filter.field);
  const currentValue = getCurrentValue(filter, currentFilter);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(search_widget_Composite, {
    store: compositeStore,
    role: "listbox",
    className: "dataviews-filters__search-widget-listbox",
    "aria-label": (0,build_module/* sprintf */.nv)( /* translators: List of items for a filter. 1: Filter name. e.g.: "List of: Author". */
    (0,build_module.__)('List of: %1$s'), filter.name),
    onFocusVisible: () => {
      if (!compositeStore.getState().activeId) {
        compositeStore.move(compositeStore.first());
      }
    },
    render: /*#__PURE__*/(0,jsx_runtime.jsx)(DS36B3MQ_CompositeTypeahead, {
      store: compositeStore
    }),
    children: filter.elements.map(element => /*#__PURE__*/(0,jsx_runtime.jsxs)(OBZMLI6J_CompositeHover, {
      store: compositeStore,
      render: /*#__PURE__*/(0,jsx_runtime.jsx)(CompositeItem, {
        render: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          "aria-label": element.label,
          role: "option",
          className: "dataviews-filters__search-widget-listitem"
        }),
        onClick: () => {
          var _view$filters, _view$filters2;
          const newFilters = currentFilter ? [...((_view$filters = view.filters) !== null && _view$filters !== void 0 ? _view$filters : []).map(_filter => {
            if (_filter.field === filter.field) {
              return {
                ..._filter,
                operator: currentFilter.operator || filter.operators[0],
                value: getNewValue(filter, currentFilter, element.value)
              };
            }
            return _filter;
          })] : [...((_view$filters2 = view.filters) !== null && _view$filters2 !== void 0 ? _view$filters2 : []), {
            field: filter.field,
            operator: filter.operators[0],
            value: getNewValue(filter, currentFilter, element.value)
          }];
          onChangeView({
            ...view,
            page: 1,
            filters: newFilters
          });
        }
      }),
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
        className: "dataviews-filters__search-widget-listitem-check",
        children: [filter.singleSelection && currentValue === element.value && /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_icon/* default */.A, {
          icon: search_widget_radioCheck
        }), !filter.singleSelection && currentValue.includes(element.value) && /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_icon/* default */.A, {
          icon: library_check
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        children: element.label
      })]
    }, element.value))
  });
}
function search_widget_ComboboxList({
  view,
  filter,
  onChangeView
}) {
  const [searchValue, setSearchValue] = (0,react.useState)('');
  const deferredSearchValue = (0,react.useDeferredValue)(searchValue);
  const currentFilter = view.filters?.find(_filter => _filter.field === filter.field);
  const currentValue = getCurrentValue(filter, currentFilter);
  const matches = (0,react.useMemo)(() => {
    const normalizedSearch = normalizeSearchInput(deferredSearchValue);
    return filter.elements.filter(item => normalizeSearchInput(item.label).includes(normalizedSearch));
  }, [filter.elements, deferredSearchValue]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ComboboxProvider, {
    resetValueOnSelect: false,
    selectedValue: currentValue,
    setSelectedValue: value => {
      var _view$filters3, _view$filters4;
      const newFilters = currentFilter ? [...((_view$filters3 = view.filters) !== null && _view$filters3 !== void 0 ? _view$filters3 : []).map(_filter => {
        if (_filter.field === filter.field) {
          return {
            ..._filter,
            operator: currentFilter.operator || filter.operators[0],
            value
          };
        }
        return _filter;
      })] : [...((_view$filters4 = view.filters) !== null && _view$filters4 !== void 0 ? _view$filters4 : []), {
        field: filter.field,
        operator: filter.operators[0],
        value
      }];
      onChangeView({
        ...view,
        page: 1,
        filters: newFilters
      });
    },
    setValue: setSearchValue,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "dataviews-filters__search-widget-filter-combobox__wrapper",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ComboboxLabel, {
        render: /*#__PURE__*/(0,jsx_runtime.jsx)(visually_hidden_component/* default */.A, {
          children: (0,build_module.__)('Search items')
        }),
        children: (0,build_module.__)('Search items')
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Combobox, {
        autoSelect: "always",
        placeholder: (0,build_module.__)('Search'),
        className: "dataviews-filters__search-widget-filter-combobox__input"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "dataviews-filters__search-widget-filter-combobox__icon",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_icon/* default */.A, {
          icon: library_search
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ComboboxList, {
      className: "dataviews-filters__search-widget-filter-combobox-list",
      alwaysVisible: true,
      children: [matches.map(element => {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(ComboboxItem, {
          value: element.value,
          className: "dataviews-filters__search-widget-listitem",
          hideOnClick: false,
          setValueOnClick: false,
          focusOnHover: true,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            className: "dataviews-filters__search-widget-listitem-check",
            children: [filter.singleSelection && currentValue === element.value && /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_icon/* default */.A, {
              icon: search_widget_radioCheck
            }), !filter.singleSelection && currentValue.includes(element.value) && /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_icon/* default */.A, {
              icon: library_check
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ComboboxItemValue, {
              className: "dataviews-filters__search-widget-filter-combobox-item-value",
              value: element.label
            }), !!element.description && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "dataviews-filters__search-widget-listitem-description",
              children: element.description
            })]
          })]
        }, element.value);
      }), !matches.length && /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        children: (0,build_module.__)('No results found')
      })]
    })]
  });
}
function SearchWidget(props) {
  const Widget = props.filter.elements.length > 10 ? search_widget_ComboboxList : ListBox;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Widget, {
    ...props
  });
}
//# sourceMappingURL=search-widget.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.2.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@wordpress/dataviews/build-module/components/dataviews-filters/filter-summary.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




const ENTER = 'Enter';
const SPACE = ' ';

/**
 * Internal dependencies
 */




const FilterText = ({
  activeElements,
  filterInView,
  filter
}) => {
  if (activeElements === undefined || activeElements.length === 0) {
    return filter.name;
  }
  const filterTextWrappers = {
    Name: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: "dataviews-filters__summary-filter-text-name"
    }),
    Value: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: "dataviews-filters__summary-filter-text-value"
    })
  };
  if (filterInView?.operator === OPERATOR_IS_ANY) {
    return create_interpolate_element((0,build_module/* sprintf */.nv)( /* translators: 1: Filter name. 3: Filter value. e.g.: "Author is any: Admin, Editor". */
    (0,build_module.__)('<Name>%1$s is any: </Name><Value>%2$s</Value>'), filter.name, activeElements.map(element => element.label).join(', ')), filterTextWrappers);
  }
  if (filterInView?.operator === OPERATOR_IS_NONE) {
    return create_interpolate_element((0,build_module/* sprintf */.nv)( /* translators: 1: Filter name. 3: Filter value. e.g.: "Author is none: Admin, Editor". */
    (0,build_module.__)('<Name>%1$s is none: </Name><Value>%2$s</Value>'), filter.name, activeElements.map(element => element.label).join(', ')), filterTextWrappers);
  }
  if (filterInView?.operator === OPERATOR_IS_ALL) {
    return create_interpolate_element((0,build_module/* sprintf */.nv)( /* translators: 1: Filter name. 3: Filter value. e.g.: "Author is all: Admin, Editor". */
    (0,build_module.__)('<Name>%1$s is all: </Name><Value>%2$s</Value>'), filter.name, activeElements.map(element => element.label).join(', ')), filterTextWrappers);
  }
  if (filterInView?.operator === OPERATOR_IS_NOT_ALL) {
    return create_interpolate_element((0,build_module/* sprintf */.nv)( /* translators: 1: Filter name. 3: Filter value. e.g.: "Author is not all: Admin, Editor". */
    (0,build_module.__)('<Name>%1$s is not all: </Name><Value>%2$s</Value>'), filter.name, activeElements.map(element => element.label).join(', ')), filterTextWrappers);
  }
  if (filterInView?.operator === OPERATOR_IS) {
    return create_interpolate_element((0,build_module/* sprintf */.nv)( /* translators: 1: Filter name. 3: Filter value. e.g.: "Author is: Admin". */
    (0,build_module.__)('<Name>%1$s is: </Name><Value>%2$s</Value>'), filter.name, activeElements[0].label), filterTextWrappers);
  }
  if (filterInView?.operator === OPERATOR_IS_NOT) {
    return create_interpolate_element((0,build_module/* sprintf */.nv)( /* translators: 1: Filter name. 3: Filter value. e.g.: "Author is not: Admin". */
    (0,build_module.__)('<Name>%1$s is not: </Name><Value>%2$s</Value>'), filter.name, activeElements[0].label), filterTextWrappers);
  }
  return (0,build_module/* sprintf */.nv)( /* translators: 1: Filter name e.g.: "Unknown status for Author". */
  (0,build_module.__)('Unknown status for %1$s'), filter.name);
};
function OperatorSelector({
  filter,
  view,
  onChangeView
}) {
  const operatorOptions = filter.operators?.map(operator => ({
    value: operator,
    label: OPERATORS[operator]?.label
  }));
  const currentFilter = view.filters?.find(_filter => _filter.field === filter.field);
  const value = currentFilter?.operator || filter.operators[0];
  return operatorOptions.length > 1 && /*#__PURE__*/(0,jsx_runtime.jsxs)(component/* default */.A, {
    spacing: 2,
    justify: "flex-start",
    className: "dataviews-filters__summary-operators-container",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(flex_item_component/* default */.A, {
      className: "dataviews-filters__summary-operators-filter-name",
      children: filter.name
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(select_control/* default */.A, {
      label: (0,build_module.__)('Conditions'),
      value: value,
      options: operatorOptions,
      onChange: newValue => {
        var _view$filters, _view$filters2;
        const operator = newValue;
        const newFilters = currentFilter ? [...((_view$filters = view.filters) !== null && _view$filters !== void 0 ? _view$filters : []).map(_filter => {
          if (_filter.field === filter.field) {
            return {
              ..._filter,
              operator
            };
          }
          return _filter;
        })] : [...((_view$filters2 = view.filters) !== null && _view$filters2 !== void 0 ? _view$filters2 : []), {
          field: filter.field,
          operator,
          value: undefined
        }];
        onChangeView({
          ...view,
          page: 1,
          filters: newFilters
        });
      },
      size: "small",
      __nextHasNoMarginBottom: true,
      hideLabelFromVision: true
    })]
  });
}
function FilterSummary({
  addFilterRef,
  openedFilter,
  ...commonProps
}) {
  const toggleRef = (0,react.useRef)(null);
  const {
    filter,
    view,
    onChangeView
  } = commonProps;
  const filterInView = view.filters?.find(f => f.field === filter.field);
  const activeElements = filter.elements.filter(element => {
    if (filter.singleSelection) {
      return element.value === filterInView?.value;
    }
    return filterInView?.value?.includes(element.value);
  });
  const isPrimary = filter.isPrimary;
  const hasValues = filterInView?.value !== undefined;
  const canResetOrRemove = !isPrimary || hasValues;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.A, {
    defaultOpen: openedFilter === filter.field,
    contentClassName: "dataviews-filters__summary-popover",
    popoverProps: {
      placement: 'bottom-start',
      role: 'dialog'
    },
    onClose: () => {
      toggleRef.current?.focus();
    },
    renderToggle: ({
      isOpen,
      onToggle
    }) => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "dataviews-filters__summary-chip-container",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Ay, {
        text: (0,build_module/* sprintf */.nv)( /* translators: 1: Filter name. */
        (0,build_module.__)('Filter by: %1$s'), filter.name.toLowerCase()),
        placement: "top",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: (0,clsx/* default */.A)('dataviews-filters__summary-chip', {
            'has-reset': canResetOrRemove,
            'has-values': hasValues
          }),
          role: "button",
          tabIndex: 0,
          onClick: onToggle,
          onKeyDown: event => {
            if ([ENTER, SPACE].includes(event.key)) {
              onToggle();
              event.preventDefault();
            }
          },
          "aria-pressed": isOpen,
          "aria-expanded": isOpen,
          ref: toggleRef,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(FilterText, {
            activeElements: activeElements,
            filterInView: filterInView,
            filter: filter
          })
        })
      }), canResetOrRemove && /*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Ay, {
        text: isPrimary ? (0,build_module.__)('Reset') : (0,build_module.__)('Remove'),
        placement: "top",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
          className: (0,clsx/* default */.A)('dataviews-filters__summary-chip-remove', {
            'has-values': hasValues
          }),
          onClick: () => {
            onChangeView({
              ...view,
              page: 1,
              filters: view.filters?.filter(_filter => _filter.field !== filter.field)
            });
            // If the filter is not primary and can be removed, it will be added
            // back to the available filters from `Add filter` component.
            if (!isPrimary) {
              addFilterRef.current?.focus();
            } else {
              // If is primary, focus the toggle button.
              toggleRef.current?.focus();
            }
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_icon/* default */.A, {
            icon: close_small/* default */.A
          })
        })
      })]
    }),
    renderContent: () => {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(v_stack_component/* default */.A, {
        spacing: 0,
        justify: "flex-start",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(OperatorSelector, {
          ...commonProps
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(SearchWidget, {
          ...commonProps
        })]
      });
    }
  });
}
//# sourceMappingURL=filter-summary.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.2.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@wordpress/dataviews/build-module/components/dataviews-filters/add-filter.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


const {
  DropdownMenuV2: add_filter_DropdownMenu,
  DropdownMenuItemV2: add_filter_DropdownMenuItem,
  DropdownMenuItemLabelV2: add_filter_DropdownMenuItemLabel
} = lock_unlock_unlock(privateApis);
function AddFilterDropdownMenu({
  filters,
  view,
  onChangeView,
  setOpenedFilter,
  trigger
}) {
  const inactiveFilters = filters.filter(filter => !filter.isVisible);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(add_filter_DropdownMenu, {
    trigger: trigger,
    children: inactiveFilters.map(filter => {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(add_filter_DropdownMenuItem, {
        onClick: () => {
          setOpenedFilter(filter.field);
          onChangeView({
            ...view,
            page: 1,
            filters: [...(view.filters || []), {
              field: filter.field,
              value: undefined,
              operator: filter.operators[0]
            }]
          });
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(add_filter_DropdownMenuItemLabel, {
          children: filter.name
        })
      }, filter.field);
    })
  });
}
function AddFilter({
  filters,
  view,
  onChangeView,
  setOpenedFilter
}, ref) {
  if (!filters.length || filters.every(({
    isPrimary
  }) => isPrimary)) {
    return null;
  }
  const inactiveFilters = filters.filter(filter => !filter.isVisible);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(AddFilterDropdownMenu, {
    trigger: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
      accessibleWhenDisabled: true,
      size: "compact",
      className: "dataviews-filters-button",
      variant: "tertiary",
      disabled: !inactiveFilters.length,
      ref: ref,
      children: (0,build_module.__)('Add filter')
    }),
    filters,
    view,
    onChangeView,
    setOpenedFilter
  });
}
/* harmony default export */ const add_filter = ((0,react.forwardRef)(AddFilter));
//# sourceMappingURL=add-filter.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.2.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@wordpress/dataviews/build-module/components/dataviews-filters/reset-filters.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

function ResetFilter({
  filters,
  view,
  onChangeView
}) {
  const isPrimary = field => filters.some(_filter => _filter.field === field && _filter.isPrimary);
  const isDisabled = !view.search && !view.filters?.some(_filter => _filter.value !== undefined || !isPrimary(_filter.field));
  return /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
    disabled: isDisabled,
    accessibleWhenDisabled: true,
    size: "compact",
    variant: "tertiary",
    className: "dataviews-filters__reset-button",
    onClick: () => {
      onChangeView({
        ...view,
        page: 1,
        search: '',
        filters: []
      });
    },
    children: (0,build_module.__)('Reset')
  });
}
//# sourceMappingURL=reset-filters.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.2.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@wordpress/dataviews/build-module/utils.js
/**
 * Internal dependencies
 */

function sanitizeOperators(field) {
  let operators = field.filterBy?.operators;

  // Assign default values.
  if (!operators || !Array.isArray(operators)) {
    operators = [OPERATOR_IS_ANY, OPERATOR_IS_NONE];
  }

  // Make sure only valid operators are used.
  operators = operators.filter(operator => ALL_OPERATORS.includes(operator));

  // Do not allow mixing single & multiselection operators.
  // Remove multiselection operators if any of the single selection ones is present.
  if (operators.includes(OPERATOR_IS) || operators.includes(OPERATOR_IS_NOT)) {
    operators = operators.filter(operator => [OPERATOR_IS, OPERATOR_IS_NOT].includes(operator));
  }
  return operators;
}
//# sourceMappingURL=utils.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.2.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@wordpress/dataviews/build-module/components/dataviews-filters/index.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */








function useFilters(fields, view) {
  return (0,react.useMemo)(() => {
    const filters = [];
    fields.forEach(field => {
      if (!field.elements?.length) {
        return;
      }
      const operators = sanitizeOperators(field);
      if (operators.length === 0) {
        return;
      }
      const isPrimary = !!field.filterBy?.isPrimary;
      filters.push({
        field: field.id,
        name: field.label,
        elements: field.elements,
        singleSelection: operators.some(op => [OPERATOR_IS, OPERATOR_IS_NOT].includes(op)),
        operators,
        isVisible: isPrimary || !!view.filters?.some(f => f.field === field.id && ALL_OPERATORS.includes(f.operator)),
        isPrimary
      });
    });
    // Sort filters by primary property. We need the primary filters to be first.
    // Then we sort by name.
    filters.sort((a, b) => {
      if (a.isPrimary && !b.isPrimary) {
        return -1;
      }
      if (!a.isPrimary && b.isPrimary) {
        return 1;
      }
      return a.name.localeCompare(b.name);
    });
    return filters;
  }, [fields, view]);
}
function FilterVisibilityToggle({
  filters,
  view,
  onChangeView,
  setOpenedFilter,
  isShowingFilter,
  setIsShowingFilter
}) {
  const onChangeViewWithFilterVisibility = (0,react.useCallback)(_view => {
    onChangeView(_view);
    setIsShowingFilter(true);
  }, [onChangeView, setIsShowingFilter]);
  const visibleFilters = filters.filter(filter => filter.isVisible);
  const hasVisibleFilters = !!visibleFilters.length;
  if (filters.length === 0) {
    return null;
  }
  if (!hasVisibleFilters) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(AddFilterDropdownMenu, {
      filters: filters,
      view: view,
      onChangeView: onChangeViewWithFilterVisibility,
      setOpenedFilter: setOpenedFilter,
      trigger: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
        className: "dataviews-filters__visibility-toggle",
        size: "compact",
        icon: library_funnel,
        label: (0,build_module.__)('Add filter'),
        isPressed: false,
        "aria-expanded": false
      })
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "dataviews-filters__container-visibility-toggle",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
      className: "dataviews-filters__visibility-toggle",
      size: "compact",
      icon: library_funnel,
      label: (0,build_module.__)('Toggle filter display'),
      onClick: () => {
        if (!isShowingFilter) {
          setOpenedFilter(null);
        }
        setIsShowingFilter(!isShowingFilter);
      },
      isPressed: isShowingFilter,
      "aria-expanded": isShowingFilter
    }), hasVisibleFilters && !!view.filters?.length && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: "dataviews-filters-toggle__count",
      children: view.filters?.length
    })]
  });
}
function Filters() {
  const {
    fields,
    view,
    onChangeView,
    openedFilter,
    setOpenedFilter
  } = (0,react.useContext)(dataviews_context);
  const addFilterRef = (0,react.useRef)(null);
  const filters = useFilters(fields, view);
  const addFilter = /*#__PURE__*/(0,jsx_runtime.jsx)(add_filter, {
    filters: filters,
    view: view,
    onChangeView: onChangeView,
    ref: addFilterRef,
    setOpenedFilter: setOpenedFilter
  }, "add-filter");
  const visibleFilters = filters.filter(filter => filter.isVisible);
  if (visibleFilters.length === 0) {
    return null;
  }
  const filterComponents = [...visibleFilters.map(filter => {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(FilterSummary, {
      filter: filter,
      view: view,
      onChangeView: onChangeView,
      addFilterRef: addFilterRef,
      openedFilter: openedFilter
    }, filter.field);
  }), addFilter];
  filterComponents.push( /*#__PURE__*/(0,jsx_runtime.jsx)(ResetFilter, {
    filters: filters,
    view: view,
    onChangeView: onChangeView
  }, "reset-filters"));
  return /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
    justify: "flex-start",
    style: {
      width: 'fit-content'
    },
    className: "dataviews-filters__container",
    wrap: true,
    children: filterComponents
  });
}
/* harmony default export */ const dataviews_filters = ((0,react.memo)(Filters));
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@17.0.2/node_modules/@wordpress/icons/build-module/library/block-table.js
/**
 * WordPress dependencies
 */


const blockTable = /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* SVG */.t4, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v3.5h-15V5c0-.3.2-.5.5-.5zm8 5.5h6.5v3.5H13V10zm-1.5 3.5h-7V10h7v3.5zm-7 5.5v-4h7v4.5H5c-.3 0-.5-.2-.5-.5zm14.5.5h-6V15h6.5v4c0 .3-.2.5-.5.5z"
  })
});
/* harmony default export */ const block_table = (blockTable);
//# sourceMappingURL=block-table.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@17.0.2/node_modules/@wordpress/icons/build-module/library/category.js
/**
 * WordPress dependencies
 */


const category = /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* SVG */.t4, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
    d: "M6 5.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm11-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM13 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V6zm5 8.5h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM15 13a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3zm-9 1.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM4 15a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3z",
    fillRule: "evenodd",
    clipRule: "evenodd"
  })
});
/* harmony default export */ const library_category = (category);
//# sourceMappingURL=category.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@17.0.2/node_modules/@wordpress/icons/build-module/library/format-list-bullets-rtl.js
/**
 * WordPress dependencies
 */


const formatListBulletsRTL = /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* SVG */.t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
    d: "M4 8.8h8.9V7.2H4v1.6zm0 7h8.9v-1.5H4v1.5zM18 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
  })
});
/* harmony default export */ const format_list_bullets_rtl = (formatListBulletsRTL);
//# sourceMappingURL=format-list-bullets-rtl.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@17.0.2/node_modules/@wordpress/icons/build-module/library/format-list-bullets.js
/**
 * WordPress dependencies
 */


const formatListBullets = /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* SVG */.t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
    d: "M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM6 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  })
});
/* harmony default export */ const format_list_bullets = (formatListBullets);
//# sourceMappingURL=format-list-bullets.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.6.0_react@17.0.2/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js
var use_ref_effect = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.6.0_react@17.0.2/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@17.0.2/node_modules/@wordpress/icons/build-module/icon/index.js
var icon = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@17.0.2/node_modules/@wordpress/icons/build-module/icon/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@17.0.2/node_modules/@wordpress/icons/build-module/library/reset.js
var library_reset = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@17.0.2/node_modules/@wordpress/icons/build-module/library/reset.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/base-control/index.js
var base_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/base-control/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/checkbox-control/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




/**
 * Checkboxes allow the user to select one or more items from a set.
 *
 * ```jsx
 * import { CheckboxControl } from '@wordpress/components';
 * import { useState } from '@wordpress/element';
 *
 * const MyCheckboxControl = () => {
 *   const [ isChecked, setChecked ] = useState( true );
 *   return (
 *     <CheckboxControl
 *       __nextHasNoMarginBottom
 *       label="Is author"
 *       help="Is the user a author or not?"
 *       checked={ isChecked }
 *       onChange={ setChecked }
 *     />
 *   );
 * };
 * ```
 */
function CheckboxControl(props) {
  const {
    __nextHasNoMarginBottom,
    label,
    className,
    heading,
    checked,
    indeterminate,
    help,
    id: idProp,
    onChange,
    ...additionalProps
  } = props;
  if (heading) {
    (0,deprecated_build_module/* default */.A)('`heading` prop in `CheckboxControl`', {
      alternative: 'a separate element to implement a heading',
      since: '5.8'
    });
  }
  const [showCheckedIcon, setShowCheckedIcon] = (0,react.useState)(false);
  const [showIndeterminateIcon, setShowIndeterminateIcon] = (0,react.useState)(false);

  // Run the following callback every time the `ref` (and the additional
  // dependencies) change.
  const ref = (0,use_ref_effect/* default */.A)(node => {
    if (!node) {
      return;
    }

    // It cannot be set using an HTML attribute.
    node.indeterminate = !!indeterminate;
    setShowCheckedIcon(node.matches(':checked'));
    setShowIndeterminateIcon(node.matches(':indeterminate'));
  }, [checked, indeterminate]);
  const id = (0,use_instance_id/* default */.A)(CheckboxControl, 'inspector-checkbox-control', idProp);
  const onChangeValue = event => onChange(event.target.checked);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default */.Ay, {
    __nextHasNoMarginBottom: __nextHasNoMarginBottom,
    __associatedWPComponentName: "CheckboxControl",
    label: heading,
    id: id,
    help: help && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: "components-checkbox-control__help",
      children: help
    }),
    className: (0,clsx/* default */.A)('components-checkbox-control', className),
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(component/* default */.A, {
      spacing: 0,
      justify: "start",
      alignment: "top",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
        className: "components-checkbox-control__input-container",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", {
          ref: ref,
          id: id,
          className: "components-checkbox-control__input",
          type: "checkbox",
          value: "1",
          onChange: onChangeValue,
          checked: checked,
          "aria-describedby": !!help ? id + '__help' : undefined,
          ...additionalProps
        }), showIndeterminateIcon ? /*#__PURE__*/(0,jsx_runtime.jsx)(icon/* default */.A, {
          icon: library_reset/* default */.A,
          className: "components-checkbox-control__indeterminate",
          role: "presentation"
        }) : null, showCheckedIcon ? /*#__PURE__*/(0,jsx_runtime.jsx)(icon/* default */.A, {
          icon: library_check,
          className: "components-checkbox-control__checked",
          role: "presentation"
        }) : null]
      }), label && /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
        className: "components-checkbox-control__label",
        htmlFor: id,
        children: label
      })]
    })
  });
}
/* harmony default export */ const checkbox_control = (CheckboxControl);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/spinner/styles.js

function spinner_styles_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */

const spinAnimation = (0,emotion_react_browser_esm/* keyframes */.i7)`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `;
const StyledSpinner = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("svg",  true ? {
  target: "ea4tfvq2"
} : 0)("width:", config_values/* default */.A.spinnerSize, "px;height:", config_values/* default */.A.spinnerSize, "px;display:inline-block;margin:5px 11px 0;position:relative;color:", colors_values/* COLORS */.l.theme.accent, ";overflow:visible;opacity:1;background-color:transparent;" + ( true ? "" : 0));
const commonPathProps =  true ? {
  name: "9s4963",
  styles: "fill:transparent;stroke-width:1.5px"
} : 0;
const SpinnerTrack = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("circle",  true ? {
  target: "ea4tfvq1"
} : 0)(commonPathProps, ";stroke:", colors_values/* COLORS */.l.gray[300], ";" + ( true ? "" : 0));
const SpinnerIndicator = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("path",  true ? {
  target: "ea4tfvq0"
} : 0)(commonPathProps, ";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ", spinAnimation, ";" + ( true ? "" : 0));
//# sourceMappingURL=styles.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/spinner/index.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */



function UnforwardedSpinner({
  className,
  ...props
}, forwardedRef) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledSpinner, {
    className: (0,clsx/* default */.A)('components-spinner', className),
    viewBox: "0 0 100 100",
    width: "16",
    height: "16",
    xmlns: "http://www.w3.org/2000/svg",
    role: "presentation",
    focusable: "false",
    ...props,
    ref: forwardedRef,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SpinnerTrack, {
      cx: "50",
      cy: "50",
      r: "50",
      vectorEffect: "non-scaling-stroke"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(SpinnerIndicator, {
      d: "m 50 0 a 50 50 0 0 1 50 50",
      vectorEffect: "non-scaling-stroke"
    })]
  });
}
/**
 * `Spinner` is a component used to notify users that their action is being processed.
 *
 * ```js
 *   import { Spinner } from '@wordpress/components';
 *
 *   function Example() {
 *     return <Spinner />;
 *   }
 * ```
 */
const Spinner = (0,react.forwardRef)(UnforwardedSpinner);
/* harmony default export */ const spinner = (Spinner);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.2.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@wordpress/dataviews/build-module/components/dataviews-selection-checkbox/index.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

function DataViewsSelectionCheckbox({
  selection,
  onChangeSelection,
  item,
  getItemId,
  primaryField,
  disabled
}) {
  const id = getItemId(item);
  const checked = !disabled && selection.includes(id);
  let selectionLabel;
  if (primaryField?.getValue && item) {
    // eslint-disable-next-line @wordpress/valid-sprintf
    selectionLabel = (0,build_module/* sprintf */.nv)( /* translators: %s: item title. */
    checked ? (0,build_module.__)('Deselect item: %s') : (0,build_module.__)('Select item: %s'), primaryField.getValue({
      item
    }));
  } else {
    selectionLabel = checked ? (0,build_module.__)('Select a new item') : (0,build_module.__)('Deselect item');
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_control, {
    className: "dataviews-selection-checkbox",
    __nextHasNoMarginBottom: true,
    "aria-label": selectionLabel,
    "aria-disabled": disabled,
    checked: checked,
    onChange: () => {
      if (disabled) {
        return;
      }
      onChangeSelection(selection.includes(id) ? selection.filter(itemId => id !== itemId) : [...selection, id]);
    }
  });
}
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@17.0.2/node_modules/@wordpress/icons/build-module/library/arrow-left.js
/**
 * WordPress dependencies
 */


const arrowLeft = /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* SVG */.t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
    d: "M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"
  })
});
/* harmony default export */ const arrow_left = (arrowLeft);
//# sourceMappingURL=arrow-left.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@17.0.2/node_modules/@wordpress/icons/build-module/library/arrow-right.js
/**
 * WordPress dependencies
 */


const arrowRight = /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* SVG */.t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
    d: "m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"
  })
});
/* harmony default export */ const arrow_right = (arrowRight);
//# sourceMappingURL=arrow-right.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@17.0.2/node_modules/@wordpress/icons/build-module/library/unseen.js
/**
 * WordPress dependencies
 */


const unseen = /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* SVG */.t4, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
    d: "M4.67 10.664s-2.09 1.11-2.917 1.582l.494.87 1.608-.914.002.002c.343.502.86 1.17 1.563 1.84.348.33.742.663 1.185.976L5.57 16.744l.858.515 1.02-1.701a9.1 9.1 0 0 0 4.051 1.18V19h1v-2.263a9.1 9.1 0 0 0 4.05-1.18l1.021 1.7.858-.514-1.034-1.723c.442-.313.837-.646 1.184-.977.703-.669 1.22-1.337 1.563-1.839l.002-.003 1.61.914.493-.87c-1.75-.994-2.918-1.58-2.918-1.58l-.003.005a8.29 8.29 0 0 1-.422.689 10.097 10.097 0 0 1-1.36 1.598c-1.218 1.16-3.042 2.293-5.544 2.293-2.503 0-4.327-1.132-5.546-2.293a10.099 10.099 0 0 1-1.359-1.599 8.267 8.267 0 0 1-.422-.689l-.003-.005Z"
  })
});
/* harmony default export */ const library_unseen = (unseen);
//# sourceMappingURL=unseen.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.2.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@wordpress/dataviews/build-module/dataviews-layouts/table/column-header-menu.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */





const {
  DropdownMenuV2: column_header_menu_DropdownMenu,
  DropdownMenuGroupV2: column_header_menu_DropdownMenuGroup,
  DropdownMenuItemV2: column_header_menu_DropdownMenuItem,
  DropdownMenuRadioItemV2: column_header_menu_DropdownMenuRadioItem,
  DropdownMenuItemLabelV2: column_header_menu_DropdownMenuItemLabel,
  DropdownMenuSeparatorV2: column_header_menu_DropdownMenuSeparator
} = lock_unlock_unlock(privateApis);
function WithDropDownMenuSeparators({
  children
}) {
  return react.Children.toArray(children).filter(Boolean).map((child, i) => /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [i > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(column_header_menu_DropdownMenuSeparator, {}), child]
  }, i));
}
const _HeaderMenu = (0,react.forwardRef)(function HeaderMenu({
  fieldId,
  view,
  fields,
  onChangeView,
  onHide,
  setOpenedFilter
}, ref) {
  const combinedField = view.layout?.combinedFields?.find(f => f.id === fieldId);
  const index = view.fields?.indexOf(fieldId);
  if (!!combinedField) {
    return combinedField.header || combinedField.label;
  }
  const field = fields.find(f => f.id === fieldId);
  if (!field) {
    return null;
  }
  const isHidable = field.enableHiding !== false;
  const isSortable = field.enableSorting !== false;
  const isSorted = view.sort?.field === field.id;
  const operators = sanitizeOperators(field);
  // Filter can be added:
  // 1. If the field is not already part of a view's filters.
  // 2. If the field meets the type and operator requirements.
  // 3. If it's not primary. If it is, it should be already visible.
  const canAddFilter = !view.filters?.some(_filter => field.id === _filter.field) && !!field.elements?.length && !!operators.length && !field.filterBy?.isPrimary;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(column_header_menu_DropdownMenu, {
    align: "start",
    trigger: /*#__PURE__*/(0,jsx_runtime.jsxs)(build_module_button/* default */.Ay, {
      size: "compact",
      className: "dataviews-view-table-header-button",
      ref: ref,
      variant: "tertiary",
      children: [field.header, view.sort && isSorted && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        "aria-hidden": "true",
        children: sortArrows[view.sort.direction]
      })]
    }),
    style: {
      minWidth: '240px'
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(WithDropDownMenuSeparators, {
      children: [isSortable && /*#__PURE__*/(0,jsx_runtime.jsx)(column_header_menu_DropdownMenuGroup, {
        children: SORTING_DIRECTIONS.map(direction => {
          const isChecked = view.sort && isSorted && view.sort.direction === direction;
          const value = `${field.id}-${direction}`;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(column_header_menu_DropdownMenuRadioItem, {
            // All sorting radio items share the same name, so that
            // selecting a sorting option automatically deselects the
            // previously selected one, even if it is displayed in
            // another submenu. The field and direction are passed via
            // the `value` prop.
            name: "view-table-sorting",
            value: value,
            checked: isChecked,
            onChange: () => {
              onChangeView({
                ...view,
                sort: {
                  field: field.id,
                  direction
                }
              });
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(column_header_menu_DropdownMenuItemLabel, {
              children: sortLabels[direction]
            })
          }, value);
        })
      }), canAddFilter && /*#__PURE__*/(0,jsx_runtime.jsx)(column_header_menu_DropdownMenuGroup, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(column_header_menu_DropdownMenuItem, {
          prefix: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_icon/* default */.A, {
            icon: library_funnel
          }),
          onClick: () => {
            setOpenedFilter(field.id);
            onChangeView({
              ...view,
              page: 1,
              filters: [...(view.filters || []), {
                field: field.id,
                value: undefined,
                operator: operators[0]
              }]
            });
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(column_header_menu_DropdownMenuItemLabel, {
            children: (0,build_module.__)('Add filter')
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(column_header_menu_DropdownMenuGroup, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(column_header_menu_DropdownMenuItem, {
          prefix: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_icon/* default */.A, {
            icon: arrow_left
          }),
          disabled: index < 1,
          onClick: () => {
            var _view$fields$slice;
            if (!view.fields || index < 1) {
              return;
            }
            onChangeView({
              ...view,
              fields: [...((_view$fields$slice = view.fields.slice(0, index - 1)) !== null && _view$fields$slice !== void 0 ? _view$fields$slice : []), field.id, view.fields[index - 1], ...view.fields.slice(index + 1)]
            });
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(column_header_menu_DropdownMenuItemLabel, {
            children: (0,build_module.__)('Move left')
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(column_header_menu_DropdownMenuItem, {
          prefix: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_icon/* default */.A, {
            icon: arrow_right
          }),
          disabled: !view.fields || index >= view.fields.length - 1,
          onClick: () => {
            var _view$fields$slice2;
            if (!view.fields || index >= view.fields.length - 1) {
              return;
            }
            onChangeView({
              ...view,
              fields: [...((_view$fields$slice2 = view.fields.slice(0, index)) !== null && _view$fields$slice2 !== void 0 ? _view$fields$slice2 : []), view.fields[index + 1], field.id, ...view.fields.slice(index + 2)]
            });
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(column_header_menu_DropdownMenuItemLabel, {
            children: (0,build_module.__)('Move right')
          })
        }), isHidable && /*#__PURE__*/(0,jsx_runtime.jsx)(column_header_menu_DropdownMenuItem, {
          prefix: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_icon/* default */.A, {
            icon: library_unseen
          }),
          onClick: () => {
            const viewFields = view.fields || fields.map(f => f.id);
            onHide(field);
            onChangeView({
              ...view,
              fields: viewFields.filter(id => id !== field.id)
            });
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(column_header_menu_DropdownMenuItemLabel, {
            children: (0,build_module.__)('Hide column')
          })
        })]
      })]
    })
  });
});

// @ts-expect-error Lift the `Item` type argument through the forwardRef.
const ColumnHeaderMenu = _HeaderMenu;
/* harmony default export */ const column_header_menu = (ColumnHeaderMenu);
//# sourceMappingURL=column-header-menu.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.2.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@wordpress/dataviews/build-module/dataviews-layouts/table/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */








function BulkSelectionCheckbox({
  selection,
  onChangeSelection,
  data,
  actions,
  getItemId
}) {
  const selectableItems = (0,react.useMemo)(() => {
    return data.filter(item => {
      return actions.some(action => action.supportsBulk && (!action.isEligible || action.isEligible(item)));
    });
  }, [data, actions]);
  const selectedItems = data.filter(item => selection.includes(getItemId(item)) && selectableItems.includes(item));
  const areAllSelected = selectedItems.length === selectableItems.length;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_control, {
    className: "dataviews-view-table-selection-checkbox",
    __nextHasNoMarginBottom: true,
    checked: areAllSelected,
    indeterminate: !areAllSelected && !!selectedItems.length,
    onChange: () => {
      if (areAllSelected) {
        onChangeSelection([]);
      } else {
        onChangeSelection(selectableItems.map(item => getItemId(item)));
      }
    },
    "aria-label": areAllSelected ? (0,build_module.__)('Deselect all') : (0,build_module.__)('Select all')
  });
}
function TableColumn({
  column,
  fields,
  view,
  ...props
}) {
  const field = fields.find(f => f.id === column);
  if (!!field) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(TableColumnField, {
      ...props,
      field: field
    });
  }
  const combinedField = view.layout?.combinedFields?.find(f => f.id === column);
  if (!!combinedField) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(TableColumnCombined, {
      ...props,
      fields: fields,
      view: view,
      field: combinedField
    });
  }
  return null;
}
function TableColumnField({
  primaryField,
  item,
  field
}) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: (0,clsx/* default */.A)('dataviews-view-table__cell-content-wrapper', {
      'dataviews-view-table__primary-field': primaryField?.id === field.id
    }),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(field.render, {
      item
    })
  });
}
function TableColumnCombined({
  field,
  ...props
}) {
  const children = field.children.map(child => /*#__PURE__*/(0,jsx_runtime.jsx)(TableColumn, {
    ...props,
    column: child
  }, child));
  if (field.direction === 'horizontal') {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
      spacing: 3,
      children: children
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(v_stack_component/* default */.A, {
    spacing: 0,
    children: children
  });
}
function TableRow({
  hasBulkActions,
  item,
  actions,
  fields,
  id,
  view,
  primaryField,
  selection,
  getItemId,
  onChangeSelection
}) {
  const hasPossibleBulkAction = useHasAPossibleBulkAction(actions, item);
  const isSelected = hasPossibleBulkAction && selection.includes(id);
  const [isHovered, setIsHovered] = (0,react.useState)(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Will be set to true if `onTouchStart` fires. This happens before
  // `onClick` and can be used to exclude touchscreen devices from certain
  // behaviours.
  const isTouchDevice = (0,react.useRef)(false);
  const columns = view.fields || fields.map(f => f.id);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
    className: (0,clsx/* default */.A)('dataviews-view-table__row', {
      'is-selected': hasPossibleBulkAction && isSelected,
      'is-hovered': isHovered,
      'has-bulk-actions': hasPossibleBulkAction
    }),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onTouchStart: () => {
      isTouchDevice.current = true;
    },
    onClick: () => {
      if (!hasPossibleBulkAction) {
        return;
      }
      if (!isTouchDevice.current && document.getSelection()?.type !== 'Range') {
        onChangeSelection(selection.includes(id) ? selection.filter(itemId => id !== itemId) : [id]);
      }
    },
    children: [hasBulkActions && /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
      className: "dataviews-view-table__checkbox-column",
      style: {
        width: '1%'
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "dataviews-view-table__cell-content-wrapper",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(DataViewsSelectionCheckbox, {
          item: item,
          selection: selection,
          onChangeSelection: onChangeSelection,
          getItemId: getItemId,
          primaryField: primaryField,
          disabled: !hasPossibleBulkAction
        })
      })
    }), columns.map(column => {
      var _view$layout$styles$c;
      // Explicits picks the supported styles.
      const {
        width,
        maxWidth,
        minWidth
      } = (_view$layout$styles$c = view.layout?.styles?.[column]) !== null && _view$layout$styles$c !== void 0 ? _view$layout$styles$c : {};
      return /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        style: {
          width,
          maxWidth,
          minWidth
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(TableColumn, {
          primaryField: primaryField,
          fields: fields,
          item: item,
          column: column,
          view: view
        })
      }, column);
    }), !!actions?.length &&
    /*#__PURE__*/
    // Disable reason: we are not making the element interactive,
    // but preventing any click events from bubbling up to the
    // table row. This allows us to add a click handler to the row
    // itself (to toggle row selection) without erroneously
    // intercepting click events from ItemActions.
    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
    (0,jsx_runtime.jsx)("td", {
      className: "dataviews-view-table__actions-column",
      onClick: e => e.stopPropagation(),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ItemActions, {
        item: item,
        actions: actions
      })
    })
    /* eslint-enable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */]
  });
}
function ViewTable({
  actions,
  data,
  fields,
  getItemId,
  isLoading = false,
  onChangeView,
  onChangeSelection,
  selection,
  setOpenedFilter,
  view
}) {
  const headerMenuRefs = (0,react.useRef)(new Map());
  const headerMenuToFocusRef = (0,react.useRef)();
  const [nextHeaderMenuToFocus, setNextHeaderMenuToFocus] = (0,react.useState)();
  const hasBulkActions = useSomeItemHasAPossibleBulkAction(actions, data);
  (0,react.useEffect)(() => {
    if (headerMenuToFocusRef.current) {
      headerMenuToFocusRef.current.focus();
      headerMenuToFocusRef.current = undefined;
    }
  });
  const tableNoticeId = (0,react.useId)();
  if (nextHeaderMenuToFocus) {
    // If we need to force focus, we short-circuit rendering here
    // to prevent any additional work while we handle that.
    // Clearing out the focus directive is necessary to make sure
    // future renders don't cause unexpected focus jumps.
    headerMenuToFocusRef.current = nextHeaderMenuToFocus;
    setNextHeaderMenuToFocus(undefined);
    return;
  }
  const onHide = field => {
    const hidden = headerMenuRefs.current.get(field.id);
    const fallback = hidden ? headerMenuRefs.current.get(hidden.fallback) : undefined;
    setNextHeaderMenuToFocus(fallback?.node);
  };
  const columns = view.fields || fields.map(f => f.id);
  const hasData = !!data?.length;
  const primaryField = fields.find(field => field.id === view.layout?.primaryField);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
      className: "dataviews-view-table",
      "aria-busy": isLoading,
      "aria-describedby": tableNoticeId,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
          className: "dataviews-view-table__row",
          children: [hasBulkActions && /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
            className: "dataviews-view-table__checkbox-column",
            style: {
              width: '1%'
            },
            scope: "col",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(BulkSelectionCheckbox, {
              selection: selection,
              onChangeSelection: onChangeSelection,
              data: data,
              actions: actions,
              getItemId: getItemId
            })
          }), columns.map((column, index) => {
            var _view$layout$styles$c2;
            // Explicits picks the supported styles.
            const {
              width,
              maxWidth,
              minWidth
            } = (_view$layout$styles$c2 = view.layout?.styles?.[column]) !== null && _view$layout$styles$c2 !== void 0 ? _view$layout$styles$c2 : {};
            return /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              style: {
                width,
                maxWidth,
                minWidth
              },
              "aria-sort": view.sort?.field === column ? sortValues[view.sort.direction] : undefined,
              scope: "col",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(column_header_menu, {
                ref: node => {
                  if (node) {
                    headerMenuRefs.current.set(column, {
                      node,
                      fallback: columns[index > 0 ? index - 1 : 1]
                    });
                  } else {
                    headerMenuRefs.current.delete(column);
                  }
                },
                fieldId: column,
                view: view,
                fields: fields,
                onChangeView: onChangeView,
                onHide: onHide,
                setOpenedFilter: setOpenedFilter
              })
            }, column);
          }), !!actions?.length && /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
            className: "dataviews-view-table__actions-column",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "dataviews-view-table-header",
              children: (0,build_module.__)('Actions')
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
        children: hasData && data.map((item, index) => /*#__PURE__*/(0,jsx_runtime.jsx)(TableRow, {
          item: item,
          hasBulkActions: hasBulkActions,
          actions: actions,
          fields: fields,
          id: getItemId(item) || index.toString(),
          view: view,
          primaryField: primaryField,
          selection: selection,
          getItemId: getItemId,
          onChangeSelection: onChangeSelection
        }, getItemId(item)))
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: (0,clsx/* default */.A)({
        'dataviews-loading': isLoading,
        'dataviews-no-results': !hasData && !isLoading
      }),
      id: tableNoticeId,
      children: !hasData && /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        children: isLoading ? /*#__PURE__*/(0,jsx_runtime.jsx)(spinner, {}) : (0,build_module.__)('No results')
      })
    })]
  });
}
/* harmony default export */ const table = (ViewTable);
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/flex/flex/component.js
var flex_component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/flex/flex/component.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/grid/utils.js
/**
 * External dependencies
 */

const ALIGNMENTS = {
  bottom: {
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  bottomLeft: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  bottomRight: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  spaced: {
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  left: {
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  right: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  stretch: {
    alignItems: 'stretch'
  },
  top: {
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  topLeft: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  topRight: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  }
};
function getAlignmentProps(alignment) {
  const alignmentProps = alignment ? ALIGNMENTS[alignment] : {};
  return alignmentProps;
}
//# sourceMappingURL=utils.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/utils/use-responsive-value.js
var use_responsive_value = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/utils/use-responsive-value.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/grid/hook.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */






function useGrid(props) {
  const {
    align,
    alignment,
    className,
    columnGap,
    columns = 2,
    gap = 3,
    isInline = false,
    justify,
    rowGap,
    rows,
    templateColumns,
    templateRows,
    ...otherProps
  } = (0,use_context_system/* useContextSystem */.A)(props, 'Grid');
  const columnsAsArray = Array.isArray(columns) ? columns : [columns];
  const column = (0,use_responsive_value/* useResponsiveValue */.t)(columnsAsArray);
  const rowsAsArray = Array.isArray(rows) ? rows : [rows];
  const row = (0,use_responsive_value/* useResponsiveValue */.t)(rowsAsArray);
  const gridTemplateColumns = templateColumns || !!columns && `repeat( ${column}, 1fr )`;
  const gridTemplateRows = templateRows || !!rows && `repeat( ${row}, 1fr )`;
  const cx = (0,use_cx/* useCx */.l)();
  const classes = (0,react.useMemo)(() => {
    const alignmentProps = getAlignmentProps(alignment);
    const gridClasses = /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)({
      alignItems: align,
      display: isInline ? 'inline-grid' : 'grid',
      gap: `calc( ${config_values/* default */.A.gridBase} * ${gap} )`,
      gridTemplateColumns: gridTemplateColumns || undefined,
      gridTemplateRows: gridTemplateRows || undefined,
      gridRowGap: rowGap,
      gridColumnGap: columnGap,
      justifyContent: justify,
      verticalAlign: isInline ? 'middle' : undefined,
      ...alignmentProps
    },  true ? "" : 0,  true ? "" : 0);
    return cx(gridClasses, className);
  }, [align, alignment, className, columnGap, cx, gap, gridTemplateColumns, gridTemplateRows, isInline, justify, rowGap]);
  return {
    ...otherProps,
    className: classes
  };
}
//# sourceMappingURL=hook.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/grid/component.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */





function UnconnectedGrid(props, forwardedRef) {
  const gridProps = useGrid(props);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(view_component/* default */.A, {
    ...gridProps,
    ref: forwardedRef
  });
}

/**
 * `Grid` is a primitive layout component that can arrange content in a grid configuration.
 *
 * ```jsx
 * import {
 * 	__experimentalGrid as Grid,
 * 	__experimentalText as Text
 * } from `@wordpress/components`;
 *
 * function Example() {
 * 	return (
 * 		<Grid columns={ 3 }>
 * 			<Text>Code</Text>
 * 			<Text>is</Text>
 * 			<Text>Poetry</Text>
 * 		</Grid>
 * 	);
 * }
 * ```
 */
const Grid = (0,context_connect/* contextConnect */.KZ)(UnconnectedGrid, 'Grid');
/* harmony default export */ const grid_component = (Grid);
//# sourceMappingURL=component.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.2.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@wordpress/dataviews/build-module/dataviews-layouts/grid/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */






function GridItem({
  selection,
  onChangeSelection,
  getItemId,
  item,
  actions,
  mediaField,
  primaryField,
  visibleFields,
  badgeFields,
  columnFields
}) {
  const hasBulkAction = useHasAPossibleBulkAction(actions, item);
  const id = getItemId(item);
  const isSelected = selection.includes(id);
  const renderedMediaField = mediaField?.render ? /*#__PURE__*/(0,jsx_runtime.jsx)(mediaField.render, {
    item: item
  }) : null;
  const renderedPrimaryField = primaryField?.render ? /*#__PURE__*/(0,jsx_runtime.jsx)(primaryField.render, {
    item: item
  }) : null;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(v_stack_component/* default */.A, {
    spacing: 0,
    className: (0,clsx/* default */.A)('dataviews-view-grid__card', {
      'is-selected': hasBulkAction && isSelected
    }),
    onClickCapture: event => {
      if (event.ctrlKey || event.metaKey) {
        event.stopPropagation();
        event.preventDefault();
        if (!hasBulkAction) {
          return;
        }
        onChangeSelection(selection.includes(id) ? selection.filter(itemId => id !== itemId) : [...selection, id]);
      }
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "dataviews-view-grid__media",
      children: renderedMediaField
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(DataViewsSelectionCheckbox, {
      item: item,
      selection: selection,
      onChangeSelection: onChangeSelection,
      getItemId: getItemId,
      primaryField: primaryField,
      disabled: !hasBulkAction
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(component/* default */.A, {
      justify: "space-between",
      className: "dataviews-view-grid__title-actions",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
        className: "dataviews-view-grid__primary-field",
        children: renderedPrimaryField
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ItemActions, {
        item: item,
        actions: actions,
        isCompact: true
      })]
    }), !!badgeFields?.length && /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
      className: "dataviews-view-grid__badge-fields",
      spacing: 2,
      wrap: true,
      alignment: "top",
      justify: "flex-start",
      children: badgeFields.map(field => {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(flex_item_component/* default */.A, {
          className: "dataviews-view-grid__field-value",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(field.render, {
            item: item
          })
        }, field.id);
      })
    }), !!visibleFields?.length && /*#__PURE__*/(0,jsx_runtime.jsx)(v_stack_component/* default */.A, {
      className: "dataviews-view-grid__fields",
      spacing: 1,
      children: visibleFields.map(field => {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(flex_component/* default */.A, {
          className: (0,clsx/* default */.A)('dataviews-view-grid__field', columnFields?.includes(field.id) ? 'is-column' : 'is-row'),
          gap: 1,
          justify: "flex-start",
          expanded: true,
          style: {
            height: 'auto'
          },
          direction: columnFields?.includes(field.id) ? 'column' : 'row',
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(flex_item_component/* default */.A, {
              className: "dataviews-view-grid__field-name",
              children: field.header
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(flex_item_component/* default */.A, {
              className: "dataviews-view-grid__field-value",
              style: {
                maxHeight: 'none'
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(field.render, {
                item: item
              })
            })]
          })
        }, field.id);
      })
    })]
  }, id);
}
function ViewGrid({
  actions,
  data,
  fields,
  getItemId,
  isLoading,
  onChangeSelection,
  selection,
  view,
  density
}) {
  const mediaField = fields.find(field => field.id === view.layout?.mediaField);
  const primaryField = fields.find(field => field.id === view.layout?.primaryField);
  const viewFields = view.fields || fields.map(field => field.id);
  const {
    visibleFields,
    badgeFields
  } = fields.reduce((accumulator, field) => {
    if (!viewFields.includes(field.id) || [view.layout?.mediaField, view?.layout?.primaryField].includes(field.id)) {
      return accumulator;
    }
    // If the field is a badge field, add it to the badgeFields array
    // otherwise add it to the rest visibleFields array.
    const key = view.layout?.badgeFields?.includes(field.id) ? 'badgeFields' : 'visibleFields';
    accumulator[key].push(field);
    return accumulator;
  }, {
    visibleFields: [],
    badgeFields: []
  });
  const hasData = !!data?.length;
  const gridStyle = density ? {
    gridTemplateColumns: `repeat(${density}, minmax(0, 1fr))`
  } : {};
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [hasData && /*#__PURE__*/(0,jsx_runtime.jsx)(grid_component, {
      gap: 8,
      columns: 2,
      alignment: "top",
      className: "dataviews-view-grid",
      style: gridStyle,
      "aria-busy": isLoading,
      children: data.map(item => {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(GridItem, {
          selection: selection,
          onChangeSelection: onChangeSelection,
          getItemId: getItemId,
          item: item,
          actions: actions,
          mediaField: mediaField,
          primaryField: primaryField,
          visibleFields: visibleFields,
          badgeFields: badgeFields,
          columnFields: view.layout?.columnFields
        }, getItemId(item));
      })
    }), !hasData && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: (0,clsx/* default */.A)({
        'dataviews-loading': isLoading,
        'dataviews-no-results': !isLoading
      }),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        children: isLoading ? /*#__PURE__*/(0,jsx_runtime.jsx)(spinner, {}) : (0,build_module.__)('No results')
      })
    })]
  });
}
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.2.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@wordpress/dataviews/build-module/dataviews-layouts/list/index.js
/**
 * External dependencies
 */

// TODO: use the @wordpress/components one once public
// eslint-disable-next-line no-restricted-imports

// Import CompositeStore type, which is not exported from @wordpress/components.
// eslint-disable-next-line no-restricted-imports

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */




const {
  useCompositeStoreV2: list_useCompositeStore,
  CompositeV2: list_Composite,
  CompositeItemV2: list_CompositeItem,
  CompositeRowV2: CompositeRow,
  DropdownMenuV2: list_DropdownMenu
} = lock_unlock_unlock(privateApis);
function ListItem({
  actions,
  id,
  isSelected,
  item,
  mediaField,
  onSelect,
  primaryField,
  store,
  visibleFields
}) {
  const registry = (0,use_registry/* default */.A)();
  const itemRef = (0,react.useRef)(null);
  const labelId = `${id}-label`;
  const descriptionId = `${id}-description`;
  const [isHovered, setIsHovered] = (0,react.useState)(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  (0,react.useEffect)(() => {
    if (isSelected) {
      itemRef.current?.scrollIntoView({
        behavior: 'auto',
        block: 'nearest',
        inline: 'nearest'
      });
    }
  }, [isSelected]);
  const {
    primaryAction,
    eligibleActions
  } = (0,react.useMemo)(() => {
    // If an action is eligible for all items, doesn't need
    // to provide the `isEligible` function.
    const _eligibleActions = actions.filter(action => !action.isEligible || action.isEligible(item));
    const _primaryActions = _eligibleActions.filter(action => action.isPrimary && !!action.icon);
    return {
      primaryAction: _primaryActions?.[0],
      eligibleActions: _eligibleActions
    };
  }, [actions, item]);
  const [isModalOpen, setIsModalOpen] = (0,react.useState)(false);
  const primaryActionLabel = primaryAction && (typeof primaryAction.label === 'string' ? primaryAction.label : primaryAction.label([item]));
  const renderedMediaField = mediaField?.render ? /*#__PURE__*/(0,jsx_runtime.jsx)(mediaField.render, {
    item: item
  }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "dataviews-view-list__media-placeholder"
  });
  const renderedPrimaryField = primaryField?.render ? /*#__PURE__*/(0,jsx_runtime.jsx)(primaryField.render, {
    item: item
  }) : null;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CompositeRow, {
    ref: itemRef,
    render: /*#__PURE__*/(0,jsx_runtime.jsx)("li", {}),
    role: "row",
    className: (0,clsx/* default */.A)({
      'is-selected': isSelected,
      'is-hovered': isHovered
    }),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(component/* default */.A, {
      className: "dataviews-view-list__item-wrapper",
      alignment: "center",
      spacing: 0,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        role: "gridcell",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(list_CompositeItem, {
          store: store,
          render: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {}),
          role: "button",
          id: id,
          "aria-pressed": isSelected,
          "aria-labelledby": labelId,
          "aria-describedby": descriptionId,
          className: "dataviews-view-list__item",
          onClick: () => onSelect(item),
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(component/* default */.A, {
            spacing: 3,
            justify: "start",
            alignment: "flex-start",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "dataviews-view-list__media-wrapper",
              children: renderedMediaField
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(v_stack_component/* default */.A, {
              spacing: 1,
              className: "dataviews-view-list__field-wrapper",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: "dataviews-view-list__primary-field",
                id: labelId,
                children: renderedPrimaryField
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "dataviews-view-list__fields",
                id: descriptionId,
                children: visibleFields.map(field => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "dataviews-view-list__field",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(visually_hidden_component/* default */.A, {
                    as: "span",
                    className: "dataviews-view-list__field-label",
                    children: field.label
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                    className: "dataviews-view-list__field-value",
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(field.render, {
                      item: item
                    })
                  })]
                }, field.id))
              })]
            })]
          })
        })
      }), eligibleActions?.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(component/* default */.A, {
        spacing: 3,
        justify: "flex-end",
        className: "dataviews-view-list__item-actions",
        style: {
          flexShrink: '0',
          width: 'auto'
        },
        children: [primaryAction && 'RenderModal' in primaryAction && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          role: "gridcell",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(list_CompositeItem, {
            store: store,
            render: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
              label: primaryActionLabel,
              icon: primaryAction.icon,
              isDestructive: primaryAction.isDestructive,
              size: "small",
              onClick: () => setIsModalOpen(true)
            }),
            children: isModalOpen && /*#__PURE__*/(0,jsx_runtime.jsx)(ActionModal, {
              action: primaryAction,
              items: [item],
              closeModal: () => setIsModalOpen(false)
            })
          })
        }), primaryAction && !('RenderModal' in primaryAction) && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          role: "gridcell",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(list_CompositeItem, {
            store: store,
            render: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
              label: primaryActionLabel,
              icon: primaryAction.icon,
              isDestructive: primaryAction.isDestructive,
              size: "small",
              onClick: () => {
                primaryAction.callback([item], {
                  registry
                });
              }
            })
          })
        }, primaryAction.id), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          role: "gridcell",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(list_DropdownMenu, {
            trigger: /*#__PURE__*/(0,jsx_runtime.jsx)(list_CompositeItem, {
              store: store,
              render: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
                size: "small",
                icon: more_vertical,
                label: (0,build_module.__)('Actions'),
                accessibleWhenDisabled: true,
                disabled: !actions.length,
                onKeyDown: event => {
                  if (event.key === 'ArrowDown') {
                    // Prevent the default behaviour (open dropdown menu) and go down.
                    event.preventDefault();
                    store.move(store.down());
                  }
                  if (event.key === 'ArrowUp') {
                    // Prevent the default behavior (open dropdown menu) and go up.
                    event.preventDefault();
                    store.move(store.up());
                  }
                }
              })
            }),
            placement: "bottom-end",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ActionsDropdownMenuGroup, {
              actions: eligibleActions,
              item: item
            })
          })
        })]
      })]
    })
  });
}
function ViewList(props) {
  const {
    actions,
    data,
    fields,
    getItemId,
    isLoading,
    onChangeSelection,
    selection,
    view
  } = props;
  const baseId = (0,use_instance_id/* default */.A)(ViewList, 'view-list');
  const selectedItem = data?.findLast(item => selection.includes(getItemId(item)));
  const mediaField = fields.find(field => field.id === view.layout?.mediaField);
  const primaryField = fields.find(field => field.id === view.layout?.primaryField);
  const viewFields = view.fields || fields.map(field => field.id);
  const visibleFields = fields.filter(field => viewFields.includes(field.id) && ![view.layout?.primaryField, view.layout?.mediaField].includes(field.id));
  const onSelect = item => onChangeSelection([getItemId(item)]);
  const getItemDomId = (0,react.useCallback)(item => item ? `${baseId}-${getItemId(item)}` : undefined, [baseId, getItemId]);
  const store = list_useCompositeStore({
    defaultActiveId: getItemDomId(selectedItem)
  }); // TODO, remove once composite APIs are public

  // Manage focused item, when the active one is removed from the list.
  const isActiveIdInList = (0,_2GXGCHW6/* useStoreState */.O$)(store, state => state.items.some(item => item.id === state.activeId));
  (0,react.useEffect)(() => {
    if (!isActiveIdInList) {
      // Prefer going down, except if there is no item below (last item), then go up (last item in list).
      if (store.down()) {
        store.move(store.down());
      } else if (store.up()) {
        store.move(store.up());
      }
    }
  }, [isActiveIdInList]);
  const hasData = data?.length;
  if (!hasData) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: (0,clsx/* default */.A)({
        'dataviews-loading': isLoading,
        'dataviews-no-results': !hasData && !isLoading
      }),
      children: !hasData && /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        children: isLoading ? /*#__PURE__*/(0,jsx_runtime.jsx)(spinner, {}) : (0,build_module.__)('No results')
      })
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(list_Composite, {
    id: baseId,
    render: /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {}),
    className: "dataviews-view-list",
    role: "grid",
    store: store,
    children: data.map(item => {
      const id = getItemDomId(item);
      return /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem, {
        id: id,
        actions: actions,
        item: item,
        isSelected: item === selectedItem,
        onSelect: onSelect,
        mediaField: mediaField,
        primaryField: primaryField,
        store: store,
        visibleFields: visibleFields
      }, id);
    })
  });
}
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.2.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@wordpress/dataviews/build-module/dataviews-layouts/index.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




const VIEW_LAYOUTS = [{
  type: LAYOUT_TABLE,
  label: (0,build_module.__)('Table'),
  component: table,
  icon: block_table
}, {
  type: LAYOUT_GRID,
  label: (0,build_module.__)('Grid'),
  component: ViewGrid,
  icon: library_category
}, {
  type: LAYOUT_LIST,
  label: (0,build_module.__)('List'),
  component: ViewList,
  icon: (0,build_module/* isRTL */.V8)() ? format_list_bullets_rtl : format_list_bullets
}];
function getMandatoryFields(view) {
  if (view.type === 'table') {
    var _view$layout$combined;
    return [view.layout?.primaryField].concat((_view$layout$combined = view.layout?.combinedFields?.flatMap(field => field.children)) !== null && _view$layout$combined !== void 0 ? _view$layout$combined : []).filter(item => !!item);
  }
  if (view.type === 'grid') {
    return [view.layout?.primaryField, view.layout?.mediaField].filter(item => !!item);
  }
  if (view.type === 'list') {
    return [view.layout?.primaryField, view.layout?.mediaField].filter(item => !!item);
  }
  return [];
}
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.2.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@wordpress/dataviews/build-module/components/dataviews-layout/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function DataViewsLayout() {
  const {
    actions = [],
    data,
    fields,
    getItemId,
    isLoading,
    view,
    onChangeView,
    selection,
    onChangeSelection,
    setOpenedFilter,
    density
  } = (0,react.useContext)(dataviews_context);
  const ViewComponent = VIEW_LAYOUTS.find(v => v.type === view.type)?.component;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ViewComponent, {
    actions: actions,
    data: data,
    fields: fields,
    getItemId: getItemId,
    isLoading: isLoading,
    onChangeView: onChangeView,
    onChangeSelection: onChangeSelection,
    selection: selection,
    setOpenedFilter: setOpenedFilter,
    view: view,
    density: density
  });
}
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@17.0.2/node_modules/@wordpress/icons/build-module/library/previous.js
/**
 * WordPress dependencies
 */


const previous = /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* SVG */.t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
    d: "M11.6 7l-1.1-1L5 12l5.5 6 1.1-1L7 12l4.6-5zm6 0l-1.1-1-5.5 6 5.5 6 1.1-1-4.6-5 4.6-5z"
  })
});
/* harmony default export */ const library_previous = (previous);
//# sourceMappingURL=previous.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@17.0.2/node_modules/@wordpress/icons/build-module/library/next.js
/**
 * WordPress dependencies
 */


const next = /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* SVG */.t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
    d: "M6.6 6L5.4 7l4.5 5-4.5 5 1.1 1 5.5-6-5.4-6zm6 0l-1.1 1 4.5 5-4.5 5 1.1 1 5.5-6-5.5-6z"
  })
});
/* harmony default export */ const library_next = (next);
//# sourceMappingURL=next.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.2.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@wordpress/dataviews/build-module/components/dataviews-pagination/index.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



function DataViewsPagination() {
  var _view$page;
  const {
    view,
    onChangeView,
    paginationInfo: {
      totalItems = 0,
      totalPages
    }
  } = (0,react.useContext)(dataviews_context);
  if (!totalItems || !totalPages) {
    return null;
  }
  const currentPage = (_view$page = view.page) !== null && _view$page !== void 0 ? _view$page : 1;
  const pageSelectOptions = Array.from(Array(totalPages)).map((_, i) => {
    const page = i + 1;
    return {
      value: page.toString(),
      label: page.toString(),
      'aria-label': currentPage === page ? (0,build_module/* sprintf */.nv)(
      // translators: Current page number in total number of pages
      (0,build_module.__)('Page %1$s of %2$s'), currentPage, totalPages) : page.toString()
    };
  });
  return !!totalItems && totalPages !== 1 && /*#__PURE__*/(0,jsx_runtime.jsxs)(component/* default */.A, {
    expanded: false,
    spacing: 6,
    justify: "end",
    className: "dataviews-pagination",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
      justify: "flex-start",
      expanded: false,
      spacing: 1,
      className: "dataviews-pagination__page-select",
      children: create_interpolate_element((0,build_module/* sprintf */.nv)(
      // translators: 1: Current page number, 2: Total number of pages.
      (0,build_module._x)('<div>Page</div>%1$s<div>of %2$s</div>', 'paging'), '<CurrentPage />', totalPages), {
        div: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          "aria-hidden": true
        }),
        CurrentPage: /*#__PURE__*/(0,jsx_runtime.jsx)(select_control/* default */.A, {
          "aria-label": (0,build_module.__)('Current page'),
          value: currentPage.toString(),
          options: pageSelectOptions,
          onChange: newValue => {
            onChangeView({
              ...view,
              page: +newValue
            });
          },
          size: "small",
          __nextHasNoMarginBottom: true,
          variant: "minimal"
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(component/* default */.A, {
      expanded: false,
      spacing: 1,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
        onClick: () => onChangeView({
          ...view,
          page: currentPage - 1
        }),
        disabled: currentPage === 1,
        accessibleWhenDisabled: true,
        label: (0,build_module.__)('Previous page'),
        icon: library_previous,
        showTooltip: true,
        size: "compact",
        tooltipPosition: "top"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
        onClick: () => onChangeView({
          ...view,
          page: currentPage + 1
        }),
        disabled: currentPage >= totalPages,
        accessibleWhenDisabled: true,
        label: (0,build_module.__)('Next page'),
        icon: library_next,
        showTooltip: true,
        size: "compact",
        tooltipPosition: "top"
      })]
    })]
  });
}
/* harmony default export */ const dataviews_pagination = ((0,react.memo)(DataViewsPagination));
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/input-control/index.js + 8 modules
var input_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/input-control/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/search-control/styles.js

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



const inlinePadding = ({
  size
}) => {
  return (0,space/* space */.x)(size === 'compact' ? 1 : 2);
};
const SuffixItemWrapper = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",  true ? {
  target: "effl84m1"
} : 0)("display:flex;padding-inline-end:", inlinePadding, ";svg{fill:currentColor;}" + ( true ? "" : 0));
const StyledInputControl = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)(input_control/* default */.Ay,  true ? {
  target: "effl84m0"
} : 0)("input[type='search']{&::-webkit-search-decoration,&::-webkit-search-cancel-button,&::-webkit-search-results-button,&::-webkit-search-results-decoration{-webkit-appearance:none;}}&:not( :focus-within ){--wp-components-color-background:", colors_values/* COLORS */.l.theme.gray[100], ";}" + ( true ? "" : 0));
//# sourceMappingURL=styles.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/search-control/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




function SuffixItem({
  searchRef,
  value,
  onChange,
  onClose
}) {
  if (!onClose && !value) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(icon/* default */.A, {
      icon: library_search
    });
  }
  const onReset = () => {
    onChange('');
    searchRef.current?.focus();
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
    size: "small",
    icon: close_small/* default */.A,
    label: onClose ? (0,build_module.__)('Close search') : (0,build_module.__)('Reset search'),
    onClick: onClose !== null && onClose !== void 0 ? onClose : onReset
  });
}
function UnforwardedSearchControl({
  __nextHasNoMarginBottom = false,
  className,
  onChange,
  value,
  label = (0,build_module.__)('Search'),
  placeholder = (0,build_module.__)('Search'),
  hideLabelFromVision = true,
  onClose,
  size = 'default',
  ...restProps
}, forwardedRef) {
  // @ts-expect-error The `disabled` prop is not yet supported in the SearchControl component.
  // Work with the design team (@WordPress/gutenberg-design) if you need this feature.
  delete restProps.disabled;
  const searchRef = (0,react.useRef)(null);
  const instanceId = (0,use_instance_id/* default */.A)(SearchControl, 'components-search-control');
  const contextValue = (0,react.useMemo)(() => ({
    BaseControl: {
      // Overrides the underlying BaseControl `__nextHasNoMarginBottom` via the context system
      // to provide backwards compatibile margin for SearchControl.
      // (In a standard InputControl, the BaseControl `__nextHasNoMarginBottom` is always set to true.)
      _overrides: {
        __nextHasNoMarginBottom
      },
      __associatedWPComponentName: 'SearchControl'
    },
    // `isBorderless` is still experimental and not a public prop for InputControl yet.
    InputBase: {
      isBorderless: true
    }
  }), [__nextHasNoMarginBottom]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(context_system_provider/* ContextSystemProvider */.c7, {
    value: contextValue,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputControl, {
      __next40pxDefaultSize: true,
      id: instanceId,
      hideLabelFromVision: hideLabelFromVision,
      label: label,
      ref: (0,use_merge_refs/* default */.A)([searchRef, forwardedRef]),
      type: "search",
      size: size,
      className: (0,clsx/* default */.A)('components-search-control', className),
      onChange: nextValue => onChange(nextValue !== null && nextValue !== void 0 ? nextValue : ''),
      autoComplete: "off",
      placeholder: placeholder,
      value: value !== null && value !== void 0 ? value : '',
      suffix: /*#__PURE__*/(0,jsx_runtime.jsx)(SuffixItemWrapper, {
        size: size,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(SuffixItem, {
          searchRef: searchRef,
          value: value,
          onChange: onChange,
          onClose: onClose
        })
      }),
      ...restProps
    })
  });
}

/**
 * SearchControl components let users display a search control.
 *
 * ```jsx
 * import { SearchControl } from '@wordpress/components';
 * import { useState } from '@wordpress/element';
 *
 * function MySearchControl( { className, setState } ) {
 *   const [ searchInput, setSearchInput ] = useState( '' );
 *
 *   return (
 *     <SearchControl
 *       __nextHasNoMarginBottom
 *       value={ searchInput }
 *       onChange={ setSearchInput }
 *     />
 *   );
 * }
 * ```
 */
const SearchControl = (0,react.forwardRef)(UnforwardedSearchControl);
/* harmony default export */ const search_control = (SearchControl);
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/use-memo-one@1.1.3_react@17.0.2/node_modules/use-memo-one/dist/use-memo-one.esm.js
var use_memo_one_esm = __webpack_require__("../../node_modules/.pnpm/use-memo-one@1.1.3_react@17.0.2/node_modules/use-memo-one/dist/use-memo-one.esm.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.6.0_react@17.0.2/node_modules/@wordpress/compose/build-module/utils/debounce/index.js
/**
 * Parts of this source were derived and modified from lodash,
 * released under the MIT license.
 *
 * https://github.com/lodash/lodash
 *
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 *
 * Based on Underscore.js, copyright Jeremy Ashkenas,
 * DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>
 *
 * This software consists of voluntary contributions made by many
 * individuals. For exact contribution history, see the revision history
 * available at https://github.com/lodash/lodash
 *
 * The following license applies to all parts of this software except as
 * documented below:
 *
 * ====
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * A simplified and properly typed version of lodash's `debounce`, that
 * always uses timers instead of sometimes using rAF.
 *
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel delayed
 * `func` invocations and a `flush` method to immediately invoke them. Provide
 * `options` to indicate whether `func` should be invoked on the leading and/or
 * trailing edge of the `wait` timeout. The `func` is invoked with the last
 * arguments provided to the debounced function. Subsequent calls to the debounced
 * function return the result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * @param {Function}                   func             The function to debounce.
 * @param {number}                     wait             The number of milliseconds to delay.
 * @param {Partial< DebounceOptions >} options          The options object.
 * @param {boolean}                    options.leading  Specify invoking on the leading edge of the timeout.
 * @param {number}                     options.maxWait  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean}                    options.trailing Specify invoking on the trailing edge of the timeout.
 *
 * @return Returns the new debounced function.
 */
const debounce = (func, wait, options) => {
  let lastArgs;
  let lastThis;
  let maxWait = 0;
  let result;
  let timerId;
  let lastCallTime;
  let lastInvokeTime = 0;
  let leading = false;
  let maxing = false;
  let trailing = true;
  if (options) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    if (options.maxWait !== undefined) {
      maxWait = Math.max(options.maxWait, wait);
    }
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    const args = lastArgs;
    const thisArg = lastThis;
    lastArgs = undefined;
    lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function startTimer(pendingFunc, waitTime) {
    timerId = setTimeout(pendingFunc, waitTime);
  }
  function cancelTimer() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
  }
  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    startTimer(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }
  function getTimeSinceLastCall(time) {
    return time - (lastCallTime || 0);
  }
  function remainingWait(time) {
    const timeSinceLastCall = getTimeSinceLastCall(time);
    const timeSinceLastInvoke = time - lastInvokeTime;
    const timeWaiting = wait - timeSinceLastCall;
    return maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    const timeSinceLastCall = getTimeSinceLastCall(time);
    const timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    startTimer(timerExpired, remainingWait(time));
    return undefined;
  }
  function clearTimer() {
    timerId = undefined;
  }
  function trailingEdge(time) {
    clearTimer();

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }
  function cancel() {
    cancelTimer();
    lastInvokeTime = 0;
    clearTimer();
    lastArgs = lastCallTime = lastThis = undefined;
  }
  function flush() {
    return pending() ? trailingEdge(Date.now()) : result;
  }
  function pending() {
    return timerId !== undefined;
  }
  function debounced(...args) {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);
    lastArgs = args;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (!pending()) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        startTimer(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (!pending()) {
      startTimer(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  debounced.pending = pending;
  return debounced;
};
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.6.0_react@17.0.2/node_modules/@wordpress/compose/build-module/hooks/use-debounce/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Debounces a function similar to Lodash's `debounce`. A new debounced function will
 * be returned and any scheduled calls cancelled if any of the arguments change,
 * including the function to debounce, so please wrap functions created on
 * render in components in `useCallback`.
 *
 * @see https://lodash.com/docs/4#debounce
 *
 * @template {(...args: any[]) => void} TFunc
 *
 * @param {TFunc}                                          fn        The function to debounce.
 * @param {number}                                         [wait]    The number of milliseconds to delay.
 * @param {import('../../utils/debounce').DebounceOptions} [options] The options object.
 * @return {import('../../utils/debounce').DebouncedFunc<TFunc>} Debounced function.
 */
function useDebounce(fn, wait, options) {
  const debounced = (0,use_memo_one_esm/* useMemoOne */.MA)(() => debounce(fn, wait !== null && wait !== void 0 ? wait : 0, options), [fn, wait, options]);
  (0,react.useEffect)(() => () => debounced.cancel(), [debounced]);
  return debounced;
}
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.6.0_react@17.0.2/node_modules/@wordpress/compose/build-module/hooks/use-debounced-input/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Helper hook for input fields that need to debounce the value before using it.
 *
 * @param defaultValue The default value to use.
 * @return The input value, the setter and the debounced input value.
 */
function useDebouncedInput(defaultValue = '') {
  const [input, setInput] = (0,react.useState)(defaultValue);
  const [debouncedInput, setDebouncedState] = (0,react.useState)(defaultValue);
  const setDebouncedInput = useDebounce(setDebouncedState, 250);
  (0,react.useEffect)(() => {
    setDebouncedInput(input);
  }, [input, setDebouncedInput]);
  return [input, setInput, debouncedInput];
}
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.2.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@wordpress/dataviews/build-module/components/dataviews-search/index.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


const DataViewsSearch = (0,react.memo)(function Search({
  label
}) {
  const {
    view,
    onChangeView
  } = (0,react.useContext)(dataviews_context);
  const [search, setSearch, debouncedSearch] = useDebouncedInput(view.search);
  (0,react.useEffect)(() => {
    var _view$search;
    setSearch((_view$search = view.search) !== null && _view$search !== void 0 ? _view$search : '');
  }, [view.search, setSearch]);
  const onChangeViewRef = (0,react.useRef)(onChangeView);
  const viewRef = (0,react.useRef)(view);
  (0,react.useEffect)(() => {
    onChangeViewRef.current = onChangeView;
    viewRef.current = view;
  }, [onChangeView, view]);
  (0,react.useEffect)(() => {
    if (debouncedSearch !== viewRef.current?.search) {
      onChangeViewRef.current({
        ...viewRef.current,
        page: 1,
        search: debouncedSearch
      });
    }
  }, [debouncedSearch]);
  const searchLabel = label || (0,build_module.__)('Search');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(search_control, {
    className: "dataviews-search",
    __nextHasNoMarginBottom: true,
    onChange: setSearch,
    value: search,
    label: searchLabel,
    placeholder: searchLabel,
    size: "compact"
  });
});
/* harmony default export */ const dataviews_search = (DataViewsSearch);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/framer-motion/dist/es/context/DeprecatedLayoutGroupContext.mjs


/**
 * Note: Still used by components generated by old versions of Framer
 *
 * @deprecated
 */
const DeprecatedLayoutGroupContext = (0,react.createContext)(null);



;// CONCATENATED MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs



function useIsMounted() {
    const isMounted = (0,react.useRef)(false);
    (0,use_isomorphic_effect/* useIsomorphicLayoutEffect */.E)(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);
    return isMounted;
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/framer-motion/dist/es/frameloop/frame.mjs
var frameloop_frame = __webpack_require__("../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/framer-motion/dist/es/frameloop/frame.mjs");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/framer-motion/dist/es/utils/use-force-update.mjs




function useForceUpdate() {
    const isMounted = useIsMounted();
    const [forcedRenderCount, setForcedRenderCount] = (0,react.useState)(0);
    const forceRender = (0,react.useCallback)(() => {
        isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
    }, [forcedRenderCount]);
    /**
     * Defer this to the end of the next animation frame in case there are multiple
     * synchronous calls.
     */
    const deferredForceRender = (0,react.useCallback)(() => frameloop_frame/* frame */.Gt.postRender(forceRender), [forceRender]);
    return [deferredForceRender, forcedRenderCount];
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/framer-motion/dist/es/projection/node/group.mjs
const notify = (node) => !node.isLayoutDirty && node.willUpdate(false);
function nodeGroup() {
    const nodes = new Set();
    const subscriptions = new WeakMap();
    const dirtyAll = () => nodes.forEach(notify);
    return {
        add: (node) => {
            nodes.add(node);
            subscriptions.set(node, node.addEventListener("willUpdate", dirtyAll));
        },
        remove: (node) => {
            nodes.delete(node);
            const unsubscribe = subscriptions.get(node);
            if (unsubscribe) {
                unsubscribe();
                subscriptions.delete(node);
            }
            dirtyAll();
        },
        dirty: dirtyAll,
    };
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs







const shouldInheritGroup = (inherit) => inherit === true;
const shouldInheritId = (inherit) => shouldInheritGroup(inherit === true) || inherit === "id";
const LayoutGroup = ({ children, id, inherit = true }) => {
    const layoutGroupContext = (0,react.useContext)(LayoutGroupContext/* LayoutGroupContext */.L);
    const deprecatedLayoutGroupContext = (0,react.useContext)(DeprecatedLayoutGroupContext);
    const [forceRender, key] = useForceUpdate();
    const context = (0,react.useRef)(null);
    const upstreamId = layoutGroupContext.id || deprecatedLayoutGroupContext;
    if (context.current === null) {
        if (shouldInheritId(inherit) && upstreamId) {
            id = id ? upstreamId + "-" + id : upstreamId;
        }
        context.current = {
            id,
            group: shouldInheritGroup(inherit)
                ? layoutGroupContext.group || nodeGroup()
                : nodeGroup(),
        };
    }
    const memoizedContext = (0,react.useMemo)(() => ({ ...context.current, forceRender }), [key]);
    return ((0,jsx_runtime.jsx)(LayoutGroupContext/* LayoutGroupContext */.L.Provider, { value: memoizedContext, children: children }));
};



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control/styles.js

function toggle_group_control_styles_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

const toggleGroupControl = ({
  isBlock,
  isDeselectable,
  size
}) => /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("background:", colors_values/* COLORS */.l.ui.background, ";border:1px solid transparent;border-radius:", config_values/* default */.A.radiusSmall, ";display:inline-flex;min-width:0;position:relative;", toggleGroupControlSize(size), " ", !isDeselectable && enclosingBorders(isBlock), ";" + ( true ? "" : 0),  true ? "" : 0);
const enclosingBorders = isBlock => {
  const enclosingBorder = /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("border-color:", colors_values/* COLORS */.l.ui.border, ";" + ( true ? "" : 0),  true ? "" : 0);
  return /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)(isBlock && enclosingBorder, " &:hover{border-color:", colors_values/* COLORS */.l.ui.borderHover, ";}&:focus-within{border-color:", colors_values/* COLORS */.l.ui.borderFocus, ";box-shadow:", config_values/* default */.A.controlBoxShadowFocus, ";z-index:1;outline:2px solid transparent;outline-offset:-2px;}" + ( true ? "" : 0),  true ? "" : 0);
};
var _ref =  true ? {
  name: "1aqh2c7",
  styles: "min-height:40px;padding:3px"
} : 0;
var _ref2 =  true ? {
  name: "1ndywgm",
  styles: "min-height:36px;padding:2px"
} : 0;
const toggleGroupControlSize = size => {
  const styles = {
    default: _ref2,
    '__unstable-large': _ref
  };
  return styles[size];
};
const block =  true ? {
  name: "7whenc",
  styles: "display:flex;width:100%"
} : 0;
const VisualLabelWrapper = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",  true ? {
  target: "eakva830"
} : 0)( true ? {
  name: "zjik7",
  styles: "display:flex"
} : 0);
//# sourceMappingURL=styles.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/radio/radio-store.js
"use client";








// src/radio/radio-store.ts
function createRadioStore(_a = {}) {
  var props = (0,_3YLGPPWQ/* __objRest */.YG)(_a, []);
  var _a2;
  const syncState = (_a2 = props.store) == null ? void 0 : _a2.getState();
  const composite = createCompositeStore((0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
    focusLoop: (0,PBFD2E7P/* defaultValue */.Jh)(props.focusLoop, syncState == null ? void 0 : syncState.focusLoop, true)
  }));
  const initialState = (0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, composite.getState()), {
    value: (0,PBFD2E7P/* defaultValue */.Jh)(
      props.value,
      syncState == null ? void 0 : syncState.value,
      props.defaultValue,
      null
    )
  });
  const radio = (0,EQQLU3CG/* createStore */.y$)(initialState, composite, props.store);
  return (0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, composite), radio), {
    setValue: (value) => radio.setState("value", value)
  });
}


;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/__chunks/DYHFBFEH.js
"use client";



// src/radio/radio-store.ts

function useRadioStoreProps(store, update, props) {
  store = useCompositeStoreProps(store, update, props);
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "value", "setValue");
  return store;
}
function useRadioStore(props = {}) {
  const [store, update] = (0,_2GXGCHW6/* useStore */.Pj)(createRadioStore, props);
  return useRadioStoreProps(store, update, props);
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@ariakit/react-core/esm/radio/radio-group.js
"use client";












// src/radio/radio-group.tsx


var radio_group_TagName = "div";
var useRadioGroup = (0,HKOOKEDE/* createHook */.ab)(
  function useRadioGroup2(_a) {
    var _b = _a, { store } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, ["store"]);
    const context = useRadioProviderContext();
    store = store || context;
    (0,PBFD2E7P/* invariant */.V1)(
      store,
       false && 0
    );
    props = (0,Z32BISHQ/* useWrapElement */.w7)(
      props,
      (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(RadioScopedContextProvider, { value: store, children: element }),
      [store]
    );
    props = (0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      role: "radiogroup"
    }, props);
    props = useComposite((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({ store }, props));
    return props;
  }
);
var RadioGroup = (0,HKOOKEDE/* forwardRef */.Rf)(function RadioGroup2(props) {
  const htmlProps = useRadioGroup(props);
  return (0,HKOOKEDE/* createElement */.n)(radio_group_TagName, htmlProps);
});


;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/toggle-group-control/context.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

const ToggleGroupControlContext = (0,react.createContext)({});
const useToggleGroupControlContext = () => (0,react.useContext)(ToggleGroupControlContext);
/* harmony default export */ const context = (ToggleGroupControlContext);
//# sourceMappingURL=context.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.6.0_react@17.0.2/node_modules/@wordpress/compose/build-module/hooks/use-previous/index.js
/**
 * WordPress dependencies
 */


/**
 * Use something's value from the previous render.
 * Based on https://usehooks.com/usePrevious/.
 *
 * @param value The value to track.
 *
 * @return The value from the previous render.
 */
function usePrevious(value) {
  const ref = (0,react.useRef)();

  // Store current value in ref.
  (0,react.useEffect)(() => {
    ref.current = value;
  }, [value]); // Re-run when value changes.

  // Return previous value (happens before update in useEffect above).
  return ref.current;
}
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control/utils.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

/**
 * Used to determine, via an internal heuristics, whether an `undefined` value
 * received for the `value` prop should be interpreted as the component being
 * used in uncontrolled mode, or as an "empty" value for controlled mode.
 *
 * @param valueProp The received `value`
 */
function useComputeControlledOrUncontrolledValue(valueProp) {
  const isInitialRender = (0,react.useRef)(true);
  const prevValueProp = usePrevious(valueProp);
  const prevIsControlled = (0,react.useRef)(false);
  (0,react.useEffect)(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
    }
  }, []);

  // Assume the component is being used in controlled mode on the first re-render
  // that has a different `valueProp` from the previous render.
  const isControlled = prevIsControlled.current || !isInitialRender.current && prevValueProp !== valueProp;
  (0,react.useEffect)(() => {
    prevIsControlled.current = isControlled;
  }, [isControlled]);
  if (isControlled) {
    // When in controlled mode, use `''` instead of `undefined`
    return {
      value: valueProp !== null && valueProp !== void 0 ? valueProp : '',
      defaultValue: undefined
    };
  }

  // When in uncontrolled mode, the `value` should be intended as the initial value
  return {
    value: undefined,
    defaultValue: valueProp
  };
}
//# sourceMappingURL=utils.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control/as-radio-group.js
/**
 * External dependencies
 */




/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




function UnforwardedToggleGroupControlAsRadioGroup({
  children,
  isAdaptiveWidth,
  label,
  onChange: onChangeProp,
  size,
  value: valueProp,
  id: idProp,
  ...otherProps
}, forwardedRef) {
  const generatedId = (0,use_instance_id/* default */.A)(ToggleGroupControlAsRadioGroup, 'toggle-group-control-as-radio-group');
  const baseId = idProp || generatedId;

  // Use a heuristic to understand if the component is being used in controlled
  // or uncontrolled mode, and consequently:
  // - when controlled, convert `undefined` values to `''` (ie. "no value")
  // - use the `value` prop as the `defaultValue` when uncontrolled
  const {
    value,
    defaultValue
  } = useComputeControlledOrUncontrolledValue(valueProp);

  // `useRadioStore`'s `setValue` prop can be called with `null`, while
  // the component's `onChange` prop only expects `undefined`
  const wrappedOnChangeProp = onChangeProp ? v => {
    onChangeProp(v !== null && v !== void 0 ? v : undefined);
  } : undefined;
  const radio = useRadioStore({
    defaultValue,
    value,
    setValue: wrappedOnChangeProp
  });
  const selectedValue = (0,_2GXGCHW6/* useStoreState */.O$)(radio, 'value');
  const setValue = radio.setValue;
  const groupContextValue = (0,react.useMemo)(() => ({
    baseId,
    isBlock: !isAdaptiveWidth,
    size,
    value: selectedValue,
    setValue
  }), [baseId, isAdaptiveWidth, size, selectedValue, setValue]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(context.Provider, {
    value: groupContextValue,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(RadioGroup, {
      store: radio,
      "aria-label": label,
      render: /*#__PURE__*/(0,jsx_runtime.jsx)(view_component/* default */.A, {}),
      ...otherProps,
      id: baseId,
      ref: forwardedRef,
      children: children
    })
  });
}
const ToggleGroupControlAsRadioGroup = (0,react.forwardRef)(UnforwardedToggleGroupControlAsRadioGroup);
//# sourceMappingURL=as-radio-group.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js
var use_controlled_value = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control/as-button-group.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */





function UnforwardedToggleGroupControlAsButtonGroup({
  children,
  isAdaptiveWidth,
  label,
  onChange,
  size,
  value: valueProp,
  id: idProp,
  ...otherProps
}, forwardedRef) {
  const generatedId = (0,use_instance_id/* default */.A)(ToggleGroupControlAsButtonGroup, 'toggle-group-control-as-button-group');
  const baseId = idProp || generatedId;

  // Use a heuristic to understand if the component is being used in controlled
  // or uncontrolled mode, and consequently:
  // - when controlled, convert `undefined` values to `''` (ie. "no value")
  // - use the `value` prop as the `defaultValue` when uncontrolled
  const {
    value,
    defaultValue
  } = useComputeControlledOrUncontrolledValue(valueProp);
  const [selectedValue, setSelectedValue] = (0,use_controlled_value/* useControlledValue */.j)({
    defaultValue,
    value,
    onChange
  });
  const groupContextValue = (0,react.useMemo)(() => ({
    baseId,
    value: selectedValue,
    setValue: setSelectedValue,
    isBlock: !isAdaptiveWidth,
    isDeselectable: true,
    size
  }), [baseId, selectedValue, setSelectedValue, isAdaptiveWidth, size]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(context.Provider, {
    value: groupContextValue,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(view_component/* default */.A, {
      "aria-label": label,
      ...otherProps,
      ref: forwardedRef,
      role: "group",
      children: children
    })
  });
}
const ToggleGroupControlAsButtonGroup = (0,react.forwardRef)(UnforwardedToggleGroupControlAsButtonGroup);
//# sourceMappingURL=as-button-group.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control/component.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */










function UnconnectedToggleGroupControl(props, forwardedRef) {
  const {
    __nextHasNoMarginBottom = false,
    __next40pxDefaultSize = false,
    className,
    isAdaptiveWidth = false,
    isBlock = false,
    isDeselectable = false,
    label,
    hideLabelFromVision = false,
    help,
    onChange,
    size = 'default',
    value,
    children,
    ...otherProps
  } = (0,use_context_system/* useContextSystem */.A)(props, 'ToggleGroupControl');
  const baseId = (0,use_instance_id/* default */.A)(ToggleGroupControl, 'toggle-group-control');
  const normalizedSize = __next40pxDefaultSize && size === 'default' ? '__unstable-large' : size;
  const cx = (0,use_cx/* useCx */.l)();
  const classes = (0,react.useMemo)(() => cx(toggleGroupControl({
    isBlock,
    isDeselectable,
    size: normalizedSize
  }), isBlock && block, className), [className, cx, isBlock, isDeselectable, normalizedSize]);
  const MainControl = isDeselectable ? ToggleGroupControlAsButtonGroup : ToggleGroupControlAsRadioGroup;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(base_control/* default */.Ay, {
    help: help,
    __nextHasNoMarginBottom: __nextHasNoMarginBottom,
    __associatedWPComponentName: "ToggleGroupControl",
    children: [!hideLabelFromVision && /*#__PURE__*/(0,jsx_runtime.jsx)(VisualLabelWrapper, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default.VisualLabel */.Ay.VisualLabel, {
        children: label
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(MainControl, {
      ...otherProps,
      className: classes,
      isAdaptiveWidth: isAdaptiveWidth,
      label: label,
      onChange: onChange,
      ref: forwardedRef,
      size: normalizedSize,
      value: value,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(LayoutGroup, {
        id: baseId,
        children: children
      })
    })]
  });
}

/**
 * `ToggleGroupControl` is a form component that lets users choose options
 * represented in horizontal segments. To render options for this control use
 * `ToggleGroupControlOption` component.
 *
 * This component is intended for selecting a single persistent value from a set of options,
 * similar to a how a radio button group would work. If you simply want a toggle to switch between views,
 * use a `TabPanel` instead.
 *
 * Only use this control when you know for sure the labels of items inside won't
 * wrap. For items with longer labels, you can consider a `SelectControl` or a
 * `CustomSelectControl` component instead.
 *
 * ```jsx
 * import {
 *   __experimentalToggleGroupControl as ToggleGroupControl,
 *   __experimentalToggleGroupControlOption as ToggleGroupControlOption,
 * } from '@wordpress/components';
 *
 * function Example() {
 *   return (
 *     <ToggleGroupControl
 *       label="my label"
 *       value="vertical"
 *       isBlock
 *       __nextHasNoMarginBottom
 *     >
 *       <ToggleGroupControlOption value="horizontal" label="Horizontal" />
 *       <ToggleGroupControlOption value="vertical" label="Vertical" />
 *     </ToggleGroupControl>
 *   );
 * }
 * ```
 */
const ToggleGroupControl = (0,context_connect/* contextConnect */.KZ)(UnconnectedToggleGroupControl, 'ToggleGroupControl');
/* harmony default export */ const toggle_group_control_component = (ToggleGroupControl);
//# sourceMappingURL=component.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option-base/styles.js

function toggle_group_control_option_base_styles_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

const LabelView = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",  true ? {
  target: "et6ln9s1"
} : 0)( true ? {
  name: "sln1fl",
  styles: "display:inline-flex;max-width:100%;min-width:0;position:relative"
} : 0);
const labelBlock =  true ? {
  name: "82a6rk",
  styles: "flex:1"
} : 0;
const buttonView = ({
  isDeselectable,
  isIcon,
  isPressed,
  size
}) => /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("align-items:center;appearance:none;background:transparent;border:none;border-radius:", config_values/* default */.A.radiusXSmall, ";color:", colors_values/* COLORS */.l.gray[700], ";fill:currentColor;cursor:pointer;display:flex;font-family:inherit;height:100%;justify-content:center;line-height:100%;outline:none;padding:0 12px;position:relative;text-align:center;@media not ( prefers-reduced-motion ){transition:background ", config_values/* default */.A.transitionDurationFast, " linear,color ", config_values/* default */.A.transitionDurationFast, " linear,font-weight 60ms linear;}user-select:none;width:100%;z-index:2;&::-moz-focus-inner{border:0;}&[disabled]{opacity:0.4;cursor:default;}&:active{background:", config_values/* default */.A.toggleGroupControlBackgroundColor, ";}", isDeselectable && deselectable, " ", isIcon && isIconStyles({
  size
}), " ", isPressed && pressed, ";" + ( true ? "" : 0),  true ? "" : 0);
const pressed = /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("color:", colors_values/* COLORS */.l.white, ";&:active{background:transparent;}" + ( true ? "" : 0),  true ? "" : 0);
const deselectable = /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("color:", colors_values/* COLORS */.l.gray[900], ";&:focus{box-shadow:inset 0 0 0 1px ", colors_values/* COLORS */.l.white, ",0 0 0 ", config_values/* default */.A.borderWidthFocus, " ", colors_values/* COLORS */.l.theme.accent, ";outline:2px solid transparent;}" + ( true ? "" : 0),  true ? "" : 0);
const ButtonContentView = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",  true ? {
  target: "et6ln9s0"
} : 0)("display:flex;font-size:", config_values/* default */.A.fontSize, ";line-height:1;" + ( true ? "" : 0));
const isIconStyles = ({
  size = 'default'
}) => {
  const iconButtonSizes = {
    default: '30px',
    '__unstable-large': '32px'
  };
  return /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("color:", colors_values/* COLORS */.l.gray[900], ";height:", iconButtonSizes[size], ";aspect-ratio:1;padding-left:0;padding-right:0;" + ( true ? "" : 0),  true ? "" : 0);
};
const backdropView = /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("background:", colors_values/* COLORS */.l.gray[900], ";border-radius:", config_values/* default */.A.radiusXSmall, ";position:absolute;inset:0;z-index:1;outline:2px solid transparent;outline-offset:-3px;" + ( true ? "" : 0),  true ? "" : 0);
//# sourceMappingURL=styles.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option-base/component.js
/**
 * External dependencies
 */




/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */









const {
  ButtonContentView: component_ButtonContentView,
  LabelView: component_LabelView
} = toggle_group_control_option_base_styles_namespaceObject;
const REDUCED_MOTION_TRANSITION_CONFIG = {
  duration: 0
};
const LAYOUT_ID = 'toggle-group-backdrop-shared-layout-id';
const WithToolTip = ({
  showTooltip,
  text,
  children
}) => {
  if (showTooltip && text) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Ay, {
      text: text,
      placement: "top",
      children: children
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: children
  });
};
function ToggleGroupControlOptionBase(props, forwardedRef) {
  const shouldReduceMotion = (0,use_reduced_motion/* default */.A)();
  const toggleGroupControlContext = useToggleGroupControlContext();
  const id = (0,use_instance_id/* default */.A)(ToggleGroupControlOptionBase, toggleGroupControlContext.baseId || 'toggle-group-control-option-base');
  const buttonProps = (0,use_context_system/* useContextSystem */.A)({
    ...props,
    id
  }, 'ToggleGroupControlOptionBase');
  const {
    isBlock = false,
    isDeselectable = false,
    size = 'default'
  } = toggleGroupControlContext;
  const {
    className,
    isIcon = false,
    value,
    children,
    showTooltip = false,
    onFocus: onFocusProp,
    disabled,
    ...otherButtonProps
  } = buttonProps;
  const isPressed = toggleGroupControlContext.value === value;
  const cx = (0,use_cx/* useCx */.l)();
  const labelViewClasses = (0,react.useMemo)(() => cx(isBlock && labelBlock), [cx, isBlock]);
  const itemClasses = (0,react.useMemo)(() => cx(buttonView({
    isDeselectable,
    isIcon,
    isPressed,
    size
  }), className), [cx, isDeselectable, isIcon, isPressed, size, className]);
  const backdropClasses = (0,react.useMemo)(() => cx(backdropView), [cx]);
  const buttonOnClick = () => {
    if (isDeselectable && isPressed) {
      toggleGroupControlContext.setValue(undefined);
    } else {
      toggleGroupControlContext.setValue(value);
    }
  };
  const commonProps = {
    ...otherButtonProps,
    className: itemClasses,
    'data-value': value,
    ref: forwardedRef
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(component_LabelView, {
    className: labelViewClasses,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(WithToolTip, {
      showTooltip: showTooltip,
      text: otherButtonProps['aria-label'],
      children: isDeselectable ? /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        ...commonProps,
        disabled: disabled,
        onFocus: onFocusProp,
        "aria-pressed": isPressed,
        type: "button",
        onClick: buttonOnClick,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(component_ButtonContentView, {
          children: children
        })
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Radio, {
        disabled: disabled,
        render: /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
          type: "button",
          ...commonProps,
          onFocus: event => {
            onFocusProp?.(event);
            if (event.defaultPrevented) {
              return;
            }
            toggleGroupControlContext.setValue(value);
          }
        }),
        value: value,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(component_ButtonContentView, {
          children: children
        })
      })
    }), isPressed ? /*#__PURE__*/(0,jsx_runtime.jsx)(motion/* motion */.P.div, {
      layout: true,
      layoutRoot: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(motion/* motion */.P.div, {
        className: backdropClasses,
        transition: shouldReduceMotion ? REDUCED_MOTION_TRANSITION_CONFIG : undefined,
        role: "presentation",
        layoutId: LAYOUT_ID
      })
    }) : null]
  });
}

/**
 * `ToggleGroupControlOptionBase` is a form component and is meant to be used as an internal,
 * generic component for any children of `ToggleGroupControl`.
 *
 * @example
 * ```jsx
 * import {
 *   __experimentalToggleGroupControl as ToggleGroupControl,
 *   __experimentalToggleGroupControlOptionBase as ToggleGroupControlOptionBase,
 * } from '@wordpress/components';
 *
 * function Example() {
 *   return (
 *     <ToggleGroupControl label="my label" value="vertical" isBlock>
 *       <ToggleGroupControlOption value="horizontal" label="Horizontal" />
 *       <ToggleGroupControlOption value="vertical" label="Vertical" />
 *     </ToggleGroupControl>
 *   );
 * }
 * ```
 */
const ConnectedToggleGroupControlOptionBase = (0,context_connect/* contextConnect */.KZ)(ToggleGroupControlOptionBase, 'ToggleGroupControlOptionBase');
/* harmony default export */ const toggle_group_control_option_base_component = (ConnectedToggleGroupControlOptionBase);
//# sourceMappingURL=component.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option-icon/component.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




function UnforwardedToggleGroupControlOptionIcon(props, ref) {
  const {
    icon,
    label,
    ...restProps
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(toggle_group_control_option_base_component, {
    ...restProps,
    isIcon: true,
    "aria-label": label,
    showTooltip: true,
    ref: ref,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_icon/* default */.A, {
      icon: icon
    })
  });
}

/**
 * `ToggleGroupControlOptionIcon` is a form component which is meant to be used as a
 * child of `ToggleGroupControl` and displays an icon.
 *
 * ```jsx
 *
 * import {
 *	__experimentalToggleGroupControl as ToggleGroupControl,
 *	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
 * from '@wordpress/components';
 * import { formatLowercase, formatUppercase } from '@wordpress/icons';
 *
 * function Example() {
 *  return (
 *    <ToggleGroupControl __nextHasNoMarginBottom>
 *      <ToggleGroupControlOptionIcon
 *        value="uppercase"
 *        label="Uppercase"
 *        icon={ formatUppercase }
 *      />
 *      <ToggleGroupControlOptionIcon
 *        value="lowercase"
 *        label="Lowercase"
 *        icon={ formatLowercase }
 *      />
 *    </ToggleGroupControl>
 *  );
 * }
 * ```
 */
const ToggleGroupControlOptionIcon = (0,react.forwardRef)(UnforwardedToggleGroupControlOptionIcon);
/* harmony default export */ const toggle_group_control_option_icon_component = (ToggleGroupControlOptionIcon);
//# sourceMappingURL=component.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option/component.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function UnforwardedToggleGroupControlOption(props, ref) {
  const {
    label,
    ...restProps
  } = props;
  const optionLabel = restProps['aria-label'] || label;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(toggle_group_control_option_base_component, {
    ...restProps,
    "aria-label": optionLabel,
    ref: ref,
    children: label
  });
}

/**
 * `ToggleGroupControlOption` is a form component and is meant to be used as a
 * child of `ToggleGroupControl`.
 *
 * ```jsx
 * import {
 *   __experimentalToggleGroupControl as ToggleGroupControl,
 *   __experimentalToggleGroupControlOption as ToggleGroupControlOption,
 * } from '@wordpress/components';
 *
 * function Example() {
 *   return (
 *     <ToggleGroupControl
 *       label="my label"
 *       value="vertical"
 *       isBlock
 *       __nextHasNoMarginBottom
 *     >
 *       <ToggleGroupControlOption value="horizontal" label="Horizontal" />
 *       <ToggleGroupControlOption value="vertical" label="Vertical" />
 *     </ToggleGroupControl>
 *   );
 * }
 * ```
 */
const ToggleGroupControlOption = (0,react.forwardRef)(UnforwardedToggleGroupControlOption);
/* harmony default export */ const toggle_group_control_option_component = (ToggleGroupControlOption);
//# sourceMappingURL=component.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/item-group/styles.js
function item_group_styles_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */

const unstyledButton = as => {
  return /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("font-size:", (0,font/* font */.g)('default.fontSize'), ";font-family:inherit;appearance:none;border:1px solid transparent;cursor:pointer;background:none;text-align:start;text-decoration:", as === 'a' ? 'none' : undefined, ";svg,path{fill:currentColor;}&:hover{color:", colors_values/* COLORS */.l.theme.accent, ";}&:focus{box-shadow:none;outline:none;}&:focus-visible{box-shadow:0 0 0 var( --wp-admin-border-width-focus ) ", colors_values/* COLORS */.l.theme.accent, ";outline:2px solid transparent;outline-offset:0;}" + ( true ? "" : 0),  true ? "" : 0);
};
const itemWrapper =  true ? {
  name: "1bcj5ek",
  styles: "width:100%;display:block"
} : 0;
const item =  true ? {
  name: "150ruhm",
  styles: "box-sizing:border-box;width:100%;display:block;margin:0;color:inherit"
} : 0;
const bordered = /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("border:1px solid ", config_values/* default */.A.surfaceBorderColor, ";" + ( true ? "" : 0),  true ? "" : 0);
const separated = /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)(">*:not( marquee )>*{border-bottom:1px solid ", config_values/* default */.A.surfaceBorderColor, ";}>*:last-of-type>*:not( :focus ){border-bottom-color:transparent;}" + ( true ? "" : 0),  true ? "" : 0);
const borderRadius = config_values/* default */.A.radiusSmall;
const styles_spacedAround = /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("border-radius:", borderRadius, ";" + ( true ? "" : 0),  true ? "" : 0);
const rounded = /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("border-radius:", borderRadius, ";>*:first-of-type>*{border-top-left-radius:", borderRadius, ";border-top-right-radius:", borderRadius, ";}>*:last-of-type>*{border-bottom-left-radius:", borderRadius, ";border-bottom-right-radius:", borderRadius, ";}" + ( true ? "" : 0),  true ? "" : 0);
const baseFontHeight = `calc(${config_values/* default */.A.fontSize} * ${config_values/* default */.A.fontLineHeightBase})`;

/*
 * Math:
 * - Use the desired height as the base value
 * - Subtract the computed height of (default) text
 * - Subtract the effects of border
 * - Divide the calculated number by 2, in order to get an individual top/bottom padding
 */
const paddingY = `calc((${config_values/* default */.A.controlHeight} - ${baseFontHeight} - 2px) / 2)`;
const paddingYSmall = `calc((${config_values/* default */.A.controlHeightSmall} - ${baseFontHeight} - 2px) / 2)`;
const paddingYLarge = `calc((${config_values/* default */.A.controlHeightLarge} - ${baseFontHeight} - 2px) / 2)`;
const itemSizes = {
  small: /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("padding:", paddingYSmall, " ", config_values/* default */.A.controlPaddingXSmall, ";" + ( true ? "" : 0),  true ? "" : 0),
  medium: /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("padding:", paddingY, " ", config_values/* default */.A.controlPaddingX, ";" + ( true ? "" : 0),  true ? "" : 0),
  large: /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("padding:", paddingYLarge, " ", config_values/* default */.A.controlPaddingXLarge, ";" + ( true ? "" : 0),  true ? "" : 0)
};
//# sourceMappingURL=styles.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/item-group/item-group/hook.js
/**
 * Internal dependencies
 */



/**
 * Internal dependencies
 */


function useItemGroup(props) {
  const {
    className,
    isBordered = false,
    isRounded = true,
    isSeparated = false,
    role = 'list',
    ...otherProps
  } = (0,use_context_system/* useContextSystem */.A)(props, 'ItemGroup');
  const cx = (0,use_cx/* useCx */.l)();
  const classes = cx(isBordered && bordered, isSeparated && separated, isRounded && rounded, className);
  return {
    isBordered,
    className: classes,
    role,
    isSeparated,
    ...otherProps
  };
}
//# sourceMappingURL=hook.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/item-group/context.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

const ItemGroupContext = (0,react.createContext)({
  size: 'medium'
});
const useItemGroupContext = () => (0,react.useContext)(ItemGroupContext);
//# sourceMappingURL=context.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/item-group/item-group/component.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */






function UnconnectedItemGroup(props, forwardedRef) {
  const {
    isBordered,
    isSeparated,
    size: sizeProp,
    ...otherProps
  } = useItemGroup(props);
  const {
    size: contextSize
  } = useItemGroupContext();
  const spacedAround = !isBordered && !isSeparated;
  const size = sizeProp || contextSize;
  const contextValue = {
    spacedAround,
    size
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ItemGroupContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(view_component/* default */.A, {
      ...otherProps,
      ref: forwardedRef
    })
  });
}

/**
 * `ItemGroup` displays a list of `Item`s grouped and styled together.
 *
 * ```jsx
 * import {
 *   __experimentalItemGroup as ItemGroup,
 *   __experimentalItem as Item,
 * } from '@wordpress/components';
 *
 * function Example() {
 *   return (
 *     <ItemGroup>
 *       <Item>Code</Item>
 *       <Item>is</Item>
 *       <Item>Poetry</Item>
 *     </ItemGroup>
 *   );
 * }
 * ```
 */
const ItemGroup = (0,context_connect/* contextConnect */.KZ)(UnconnectedItemGroup, 'ItemGroup');
/* harmony default export */ const item_group_component = (ItemGroup);
//# sourceMappingURL=component.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/item-group/item/hook.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





function useItem(props) {
  const {
    as: asProp,
    className,
    onClick,
    role = 'listitem',
    size: sizeProp,
    ...otherProps
  } = (0,use_context_system/* useContextSystem */.A)(props, 'Item');
  const {
    spacedAround,
    size: contextSize
  } = useItemGroupContext();
  const size = sizeProp || contextSize;
  const as = asProp || (typeof onClick !== 'undefined' ? 'button' : 'div');
  const cx = (0,use_cx/* useCx */.l)();
  const classes = (0,react.useMemo)(() => cx((as === 'button' || as === 'a') && unstyledButton(as), itemSizes[size] || itemSizes.medium, item, spacedAround && styles_spacedAround, className), [as, className, cx, size, spacedAround]);
  const wrapperClassName = cx(itemWrapper);
  return {
    as,
    className: classes,
    onClick,
    wrapperClassName,
    role,
    ...otherProps
  };
}
//# sourceMappingURL=hook.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/item-group/item/component.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */





function UnconnectedItem(props, forwardedRef) {
  const {
    role,
    wrapperClassName,
    ...otherProps
  } = useItem(props);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    role: role,
    className: wrapperClassName,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(view_component/* default */.A, {
      ...otherProps,
      ref: forwardedRef
    })
  });
}

/**
 * `Item` is used in combination with `ItemGroup` to display a list of items
 * grouped and styled together.
 *
 * ```jsx
 * import {
 *   __experimentalItemGroup as ItemGroup,
 *   __experimentalItem as Item,
 * } from '@wordpress/components';
 *
 * function Example() {
 *   return (
 *     <ItemGroup>
 *       <Item>Code</Item>
 *       <Item>is</Item>
 *       <Item>Poetry</Item>
 *     </ItemGroup>
 *   );
 * }
 * ```
 */
const component_Item = (0,context_connect/* contextConnect */.KZ)(UnconnectedItem, 'Item');
/* harmony default export */ const item_component = (component_Item);
//# sourceMappingURL=component.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/heading/component.js + 1 modules
var heading_component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/heading/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/text/component.js
var text_component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/text/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/popover/index.js + 7 modules
var popover = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/popover/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@17.0.2/node_modules/@wordpress/icons/build-module/library/seen.js
/**
 * WordPress dependencies
 */


const seen = /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* SVG */.t4, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
    d: "M3.99961 13C4.67043 13.3354 4.6703 13.3357 4.67017 13.3359L4.67298 13.3305C4.67621 13.3242 4.68184 13.3135 4.68988 13.2985C4.70595 13.2686 4.7316 13.2218 4.76695 13.1608C4.8377 13.0385 4.94692 12.8592 5.09541 12.6419C5.39312 12.2062 5.84436 11.624 6.45435 11.0431C7.67308 9.88241 9.49719 8.75 11.9996 8.75C14.502 8.75 16.3261 9.88241 17.5449 11.0431C18.1549 11.624 18.6061 12.2062 18.9038 12.6419C19.0523 12.8592 19.1615 13.0385 19.2323 13.1608C19.2676 13.2218 19.2933 13.2686 19.3093 13.2985C19.3174 13.3135 19.323 13.3242 19.3262 13.3305L19.3291 13.3359C19.3289 13.3357 19.3288 13.3354 19.9996 13C20.6704 12.6646 20.6703 12.6643 20.6701 12.664L20.6697 12.6632L20.6688 12.6614L20.6662 12.6563L20.6583 12.6408C20.6517 12.6282 20.6427 12.6108 20.631 12.5892C20.6078 12.5459 20.5744 12.4852 20.5306 12.4096C20.4432 12.2584 20.3141 12.0471 20.1423 11.7956C19.7994 11.2938 19.2819 10.626 18.5794 9.9569C17.1731 8.61759 14.9972 7.25 11.9996 7.25C9.00203 7.25 6.82614 8.61759 5.41987 9.9569C4.71736 10.626 4.19984 11.2938 3.85694 11.7956C3.68511 12.0471 3.55605 12.2584 3.4686 12.4096C3.42484 12.4852 3.39142 12.5459 3.36818 12.5892C3.35656 12.6108 3.34748 12.6282 3.34092 12.6408L3.33297 12.6563L3.33041 12.6614L3.32948 12.6632L3.32911 12.664C3.32894 12.6643 3.32879 12.6646 3.99961 13ZM11.9996 16C13.9326 16 15.4996 14.433 15.4996 12.5C15.4996 10.567 13.9326 9 11.9996 9C10.0666 9 8.49961 10.567 8.49961 12.5C8.49961 14.433 10.0666 16 11.9996 16Z"
  })
});
/* harmony default export */ const library_seen = (seen);
//# sourceMappingURL=seen.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@17.0.2/node_modules/@wordpress/icons/build-module/library/cog.js
/**
 * WordPress dependencies
 */


const cog = /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* SVG */.t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
    fillRule: "evenodd",
    d: "M10.289 4.836A1 1 0 0111.275 4h1.306a1 1 0 01.987.836l.244 1.466c.787.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 011.216.437l.653 1.13a1 1 0 01-.23 1.273l-1.148.944a6.025 6.025 0 010 2.435l1.149.946a1 1 0 01.23 1.272l-.653 1.13a1 1 0 01-1.216.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466a1 1 0 01-.987.836h-1.306a1 1 0 01-.986-.836l-.244-1.466a5.995 5.995 0 01-2.108-1.218l-1.394.522a1 1 0 01-1.217-.436l-.653-1.131a1 1 0 01.23-1.272l1.149-.946a6.026 6.026 0 010-2.435l-1.148-.944a1 1 0 01-.23-1.272l.653-1.131a1 1 0 011.217-.437l1.393.522a5.994 5.994 0 012.108-1.218l.244-1.466zM14.929 12a3 3 0 11-6 0 3 3 0 016 0z",
    clipRule: "evenodd"
  })
});
/* harmony default export */ const library_cog = (cog);
//# sourceMappingURL=cog.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/utils/values.js
var values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/utils/values.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-state.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * @template T
 * @typedef Options
 * @property {T}      [initial] Initial value
 * @property {T | ""} fallback  Fallback value
 */

/** @type {Readonly<{ initial: undefined, fallback: '' }>} */
const defaultOptions = {
  initial: undefined,
  /**
   * Defaults to empty string, as that is preferred for usage with
   * <input />, <textarea />, and <select /> form elements.
   */
  fallback: ''
};

/**
 * Custom hooks for "controlled" components to track and consolidate internal
 * state and incoming values. This is useful for components that render
 * `input`, `textarea`, or `select` HTML elements.
 *
 * https://reactjs.org/docs/forms.html#controlled-components
 *
 * At first, a component using useControlledState receives an initial prop
 * value, which is used as initial internal state.
 *
 * This internal state can be maintained and updated without
 * relying on new incoming prop values.
 *
 * Unlike the basic useState hook, useControlledState's state can
 * be updated if a new incoming prop value is changed.
 *
 * @template T
 *
 * @param {T | undefined} currentState             The current value.
 * @param {Options<T>}    [options=defaultOptions] Additional options for the hook.
 *
 * @return {[T | "", (nextState: T) => void]} The controlled value and the value setter.
 */
function useControlledState(currentState, options = defaultOptions) {
  const {
    initial,
    fallback
  } = {
    ...defaultOptions,
    ...options
  };
  const [internalState, setInternalState] = (0,react.useState)(currentState);
  const hasCurrentState = (0,values/* isValueDefined */.J5)(currentState);

  /*
   * Resets internal state if value every changes from uncontrolled <-> controlled.
   */
  (0,react.useEffect)(() => {
    if (hasCurrentState && internalState) {
      setInternalState(undefined);
    }
  }, [hasCurrentState, internalState]);
  const state = (0,values/* getDefinedValue */.vD)([currentState, internalState, initial], fallback);

  /* eslint-disable jsdoc/no-undefined-types */
  /** @type {(nextState: T) => void} */
  const setState = (0,react.useCallback)(nextState => {
    if (!hasCurrentState) {
      setInternalState(nextState);
    }
  }, [hasCurrentState]);
  /* eslint-enable jsdoc/no-undefined-types */

  return [state, setState];
}
/* harmony default export */ const use_controlled_state = (useControlledState);
//# sourceMappingURL=use-controlled-state.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/utils/math.js
var math = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/utils/math.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/range-control/utils.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * A float supported clamp function for a specific value.
 *
 * @param value The value to clamp.
 * @param min   The minimum value.
 * @param max   The maximum value.
 *
 * @return A (float) number
 */
function floatClamp(value, min, max) {
  if (typeof value !== 'number') {
    return null;
  }
  return parseFloat(`${(0,math/* clamp */.qE)(value, min, max)}`);
}

/**
 * Hook to store a clamped value, derived from props.
 *
 * @param settings
 * @return The controlled value and the value setter.
 */
function useControlledRangeValue(settings) {
  const {
    min,
    max,
    value: valueProp,
    initial
  } = settings;
  const [state, setInternalState] = use_controlled_state(floatClamp(valueProp, min, max), {
    initial: floatClamp(initial !== null && initial !== void 0 ? initial : null, min, max),
    fallback: null
  });
  const setState = (0,react.useCallback)(nextValue => {
    if (nextValue === null) {
      setInternalState(null);
    } else {
      setInternalState(floatClamp(nextValue, min, max));
    }
  }, [min, max, setInternalState]);

  // `state` can't be an empty string because we specified a fallback value of
  // `null` in `useControlledState`
  return [state, setState];
}
//# sourceMappingURL=utils.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/number-control/index.js + 2 modules
var number_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/number-control/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/range-control/styles/range-control-styles.js

function range_control_styles_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



const rangeHeightValue = 30;
const railHeight = 4;
const rangeHeight = () => /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)({
  height: rangeHeightValue,
  minHeight: rangeHeightValue
},  true ? "" : 0,  true ? "" : 0);
const thumbSize = 12;
const deprecatedHeight = ({
  __next40pxDefaultSize
}) => !__next40pxDefaultSize && /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)({
  minHeight: rangeHeightValue
},  true ? "" : 0,  true ? "" : 0);
const Root = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",  true ? {
  target: "e1epgpqk14"
} : 0)("-webkit-tap-highlight-color:transparent;align-items:center;display:flex;justify-content:flex-start;padding:0;position:relative;touch-action:none;width:100%;min-height:40px;", deprecatedHeight, ";" + ( true ? "" : 0));
const wrapperColor = ({
  color = colors_values/* COLORS */.l.ui.borderFocus
}) => /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)({
  color
},  true ? "" : 0,  true ? "" : 0);
const wrapperMargin = ({
  marks,
  __nextHasNoMarginBottom
}) => {
  if (!__nextHasNoMarginBottom) {
    return /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)({
      marginBottom: marks ? 16 : undefined
    },  true ? "" : 0,  true ? "" : 0);
  }
  return '';
};
const range_control_styles_Wrapper = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",  true ? {
  target: "e1epgpqk13"
} : 0)("display:block;flex:1;position:relative;width:100%;", wrapperColor, ";", rangeHeight, ";", wrapperMargin, ";" + ( true ? "" : 0));
const BeforeIconWrapper = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("span",  true ? {
  target: "e1epgpqk12"
} : 0)("display:flex;margin-top:", railHeight, "px;", (0,rtl/* rtl */.h)({
  marginRight: 6
}), ";" + ( true ? "" : 0));
const AfterIconWrapper = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("span",  true ? {
  target: "e1epgpqk11"
} : 0)("display:flex;margin-top:", railHeight, "px;", (0,rtl/* rtl */.h)({
  marginLeft: 6
}), ";" + ( true ? "" : 0));
const railBackgroundColor = ({
  disabled,
  railColor
}) => {
  let background = railColor || '';
  if (disabled) {
    background = colors_values/* COLORS */.l.ui.backgroundDisabled;
  }
  return /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)({
    background
  },  true ? "" : 0,  true ? "" : 0);
};
const Rail = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("span",  true ? {
  target: "e1epgpqk10"
} : 0)("background-color:", colors_values/* COLORS */.l.gray[300], ";left:0;pointer-events:none;right:0;display:block;height:", railHeight, "px;position:absolute;margin-top:", (rangeHeightValue - railHeight) / 2, "px;top:0;border-radius:", railHeight, "px;", railBackgroundColor, ";" + ( true ? "" : 0));
const trackBackgroundColor = ({
  disabled,
  trackColor
}) => {
  let background = trackColor || 'currentColor';
  if (disabled) {
    background = colors_values/* COLORS */.l.gray[400];
  }
  return /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)({
    background
  },  true ? "" : 0,  true ? "" : 0);
};
const Track = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("span",  true ? {
  target: "e1epgpqk9"
} : 0)("background-color:currentColor;border-radius:", railHeight, "px;height:", railHeight, "px;pointer-events:none;display:block;position:absolute;margin-top:", (rangeHeightValue - railHeight) / 2, "px;top:0;", trackBackgroundColor, ";" + ( true ? "" : 0));
const MarksWrapper = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("span",  true ? {
  target: "e1epgpqk8"
} : 0)( true ? {
  name: "l7tjj5",
  styles: "display:block;pointer-events:none;position:relative;width:100%;user-select:none"
} : 0);
const markFill = ({
  disabled,
  isFilled
}) => {
  let backgroundColor = isFilled ? 'currentColor' : colors_values/* COLORS */.l.gray[300];
  if (disabled) {
    backgroundColor = colors_values/* COLORS */.l.gray[400];
  }
  return /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)({
    backgroundColor
  },  true ? "" : 0,  true ? "" : 0);
};
const Mark = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("span",  true ? {
  target: "e1epgpqk7"
} : 0)("height:", thumbSize, "px;left:0;position:absolute;top:9px;width:1px;", markFill, ";" + ( true ? "" : 0));
const markLabelFill = ({
  isFilled
}) => {
  return /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)({
    color: isFilled ? colors_values/* COLORS */.l.gray[700] : colors_values/* COLORS */.l.gray[300]
  },  true ? "" : 0,  true ? "" : 0);
};
const MarkLabel = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("span",  true ? {
  target: "e1epgpqk6"
} : 0)("color:", colors_values/* COLORS */.l.gray[300], ";font-size:11px;position:absolute;top:22px;white-space:nowrap;", (0,rtl/* rtl */.h)({
  left: 0
}), ";", (0,rtl/* rtl */.h)({
  transform: 'translateX( -50% )'
}, {
  transform: 'translateX( 50% )'
}), ";", markLabelFill, ";" + ( true ? "" : 0));
const thumbColor = ({
  disabled
}) => disabled ? /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("background-color:", colors_values/* COLORS */.l.gray[400], ";" + ( true ? "" : 0),  true ? "" : 0) : /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("background-color:", colors_values/* COLORS */.l.theme.accent, ";" + ( true ? "" : 0),  true ? "" : 0);
const ThumbWrapper = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("span",  true ? {
  target: "e1epgpqk5"
} : 0)("align-items:center;display:flex;height:", thumbSize, "px;justify-content:center;margin-top:", (rangeHeightValue - thumbSize) / 2, "px;outline:0;pointer-events:none;position:absolute;top:0;user-select:none;width:", thumbSize, "px;border-radius:50%;", thumbColor, ";", (0,rtl/* rtl */.h)({
  marginLeft: -10
}), ";", (0,rtl/* rtl */.h)({
  transform: 'translateX( 4.5px )'
}, {
  transform: 'translateX( -4.5px )'
}), ";" + ( true ? "" : 0));
const thumbFocus = ({
  isFocused
}) => {
  return isFocused ? /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("&::before{content:' ';position:absolute;background-color:", colors_values/* COLORS */.l.theme.accent, ";opacity:0.4;border-radius:50%;height:", thumbSize + 8, "px;width:", thumbSize + 8, "px;top:-4px;left:-4px;}" + ( true ? "" : 0),  true ? "" : 0) : '';
};
const Thumb = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("span",  true ? {
  target: "e1epgpqk4"
} : 0)("align-items:center;border-radius:50%;height:100%;outline:0;position:absolute;user-select:none;width:100%;", thumbColor, ";", thumbFocus, ";" + ( true ? "" : 0));
const InputRange = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("input",  true ? {
  target: "e1epgpqk3"
} : 0)("box-sizing:border-box;cursor:pointer;display:block;height:100%;left:0;margin:0 -", thumbSize / 2, "px;opacity:0;outline:none;position:absolute;right:0;top:0;width:calc( 100% + ", thumbSize, "px );" + ( true ? "" : 0));
const tooltipShow = ({
  show
}) => {
  return /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)({
    opacity: show ? 1 : 0
  },  true ? "" : 0,  true ? "" : 0);
};
var range_control_styles_ref =  true ? {
  name: "1cypxip",
  styles: "top:-80%"
} : 0;
var range_control_styles_ref2 =  true ? {
  name: "1lr98c4",
  styles: "bottom:-80%"
} : 0;
const tooltipPosition = ({
  position
}) => {
  const isBottom = position === 'bottom';
  if (isBottom) {
    return range_control_styles_ref2;
  }
  return range_control_styles_ref;
};
const Tooltip = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("span",  true ? {
  target: "e1epgpqk2"
} : 0)("background:rgba( 0, 0, 0, 0.8 );border-radius:2px;color:white;display:inline-block;font-size:12px;min-width:32px;opacity:0;padding:4px 8px;pointer-events:none;position:absolute;text-align:center;user-select:none;line-height:1.4;@media not ( prefers-reduced-motion ){transition:opacity 120ms ease;}", tooltipShow, ";", tooltipPosition, ";", (0,rtl/* rtl */.h)({
  transform: 'translateX(-50%)'
}, {
  transform: 'translateX(50%)'
}), ";" + ( true ? "" : 0));

// @todo Refactor RangeControl with latest HStack configuration
// @see: packages/components/src/h-stack
const InputNumber = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)(number_control/* default */.A,  true ? {
  target: "e1epgpqk1"
} : 0)("display:inline-block;font-size:13px;margin-top:0;input[type='number']&{", rangeHeight, ";}", (0,rtl/* rtl */.h)({
  marginLeft: `${(0,space/* space */.x)(4)} !important`
}), ";" + ( true ? "" : 0));
const ActionRightWrapper = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("span",  true ? {
  target: "e1epgpqk0"
} : 0)("display:block;margin-top:0;button,button.is-small{margin-left:0;", rangeHeight, ";}", (0,rtl/* rtl */.h)({
  marginLeft: 8
}), ";" + ( true ? "" : 0));
//# sourceMappingURL=range-control-styles.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/range-control/input-range.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function input_range_InputRange(props, ref) {
  const {
    describedBy,
    label,
    value,
    ...otherProps
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(InputRange, {
    ...otherProps,
    "aria-describedby": describedBy,
    "aria-label": label,
    "aria-hidden": false,
    ref: ref,
    tabIndex: 0,
    type: "range",
    value: value
  });
}
const ForwardedComponent = (0,react.forwardRef)(input_range_InputRange);
/* harmony default export */ const input_range = (ForwardedComponent);
//# sourceMappingURL=input-range.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/range-control/mark.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */




function RangeMark(props) {
  const {
    className,
    isFilled = false,
    label,
    style = {},
    ...otherProps
  } = props;
  const classes = (0,clsx/* default */.A)('components-range-control__mark', isFilled && 'is-filled', className);
  const labelClasses = (0,clsx/* default */.A)('components-range-control__mark-label', isFilled && 'is-filled');
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Mark, {
      ...otherProps,
      "aria-hidden": "true",
      className: classes,
      isFilled: isFilled,
      style: style
    }), label && /*#__PURE__*/(0,jsx_runtime.jsx)(MarkLabel, {
      "aria-hidden": "true",
      className: labelClasses,
      isFilled: isFilled,
      style: style,
      children: label
    })]
  });
}
//# sourceMappingURL=mark.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/range-control/rail.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */






function RangeRail(props) {
  const {
    disabled = false,
    marks = false,
    min = 0,
    max = 100,
    step = 1,
    value = 0,
    ...restProps
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Rail, {
      disabled: disabled,
      ...restProps
    }), marks && /*#__PURE__*/(0,jsx_runtime.jsx)(Marks, {
      disabled: disabled,
      marks: marks,
      min: min,
      max: max,
      step: step,
      value: value
    })]
  });
}
function Marks(props) {
  const {
    disabled = false,
    marks = false,
    min = 0,
    max = 100,
    step: stepProp = 1,
    value = 0
  } = props;
  const step = stepProp === 'any' ? 1 : stepProp;
  const marksData = useMarks({
    marks,
    min,
    max,
    step,
    value
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(MarksWrapper, {
    "aria-hidden": "true",
    className: "components-range-control__marks",
    children: marksData.map(mark => /*#__PURE__*/(0,react.createElement)(RangeMark, {
      ...mark,
      key: mark.key,
      "aria-hidden": "true",
      disabled: disabled
    }))
  });
}
function useMarks({
  marks,
  min = 0,
  max = 100,
  step = 1,
  value = 0
}) {
  if (!marks) {
    return [];
  }
  const range = max - min;
  if (!Array.isArray(marks)) {
    marks = [];
    const count = 1 + Math.round(range / step);
    while (count > marks.push({
      value: step * marks.length + min
    })) {}
  }
  const placedMarks = [];
  marks.forEach((mark, index) => {
    if (mark.value < min || mark.value > max) {
      return;
    }
    const key = `mark-${index}`;
    const isFilled = mark.value <= value;
    const offset = `${(mark.value - min) / range * 100}%`;
    const offsetStyle = {
      [(0,build_module/* isRTL */.V8)() ? 'right' : 'left']: offset
    };
    placedMarks.push({
      ...mark,
      isFilled,
      key,
      style: offsetStyle
    });
  });
  return placedMarks;
}
//# sourceMappingURL=rail.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/range-control/tooltip.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function SimpleTooltip(props) {
  const {
    className,
    inputRef,
    tooltipPosition,
    show = false,
    style = {},
    value = 0,
    renderTooltipContent = v => v,
    zIndex = 100,
    ...restProps
  } = props;
  const position = useTooltipPosition({
    inputRef,
    tooltipPosition
  });
  const classes = (0,clsx/* default */.A)('components-simple-tooltip', className);
  const styles = {
    ...style,
    zIndex
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip, {
    ...restProps,
    "aria-hidden": show,
    className: classes,
    position: position,
    show: show,
    role: "tooltip",
    style: styles,
    children: renderTooltipContent(value)
  });
}
function useTooltipPosition({
  inputRef,
  tooltipPosition
}) {
  const [position, setPosition] = (0,react.useState)();
  const setTooltipPosition = (0,react.useCallback)(() => {
    if (inputRef && inputRef.current) {
      setPosition(tooltipPosition);
    }
  }, [tooltipPosition, inputRef]);
  (0,react.useEffect)(() => {
    setTooltipPosition();
  }, [setTooltipPosition]);
  (0,react.useEffect)(() => {
    window.addEventListener('resize', setTooltipPosition);
    return () => {
      window.removeEventListener('resize', setTooltipPosition);
    };
  });
  return position;
}
//# sourceMappingURL=tooltip.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.6.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0_tefritxxlvj4e25mzxokcfa7ri/node_modules/@wordpress/components/build-module/range-control/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */













const range_control_noop = () => {};

/**
 * Computes the value that `RangeControl` should reset to when pressing
 * the reset button.
 */
function computeResetValue({
  resetFallbackValue,
  initialPosition
}) {
  if (resetFallbackValue !== undefined) {
    return !Number.isNaN(resetFallbackValue) ? resetFallbackValue : null;
  }
  if (initialPosition !== undefined) {
    return !Number.isNaN(initialPosition) ? initialPosition : null;
  }
  return null;
}
function UnforwardedRangeControl(props, forwardedRef) {
  const {
    __nextHasNoMarginBottom = false,
    afterIcon,
    allowReset = false,
    beforeIcon,
    className,
    color: colorProp = colors_values/* COLORS */.l.theme.accent,
    currentInput,
    disabled = false,
    help,
    hideLabelFromVision = false,
    initialPosition,
    isShiftStepEnabled = true,
    label,
    marks = false,
    max = 100,
    min = 0,
    onBlur = range_control_noop,
    onChange = range_control_noop,
    onFocus = range_control_noop,
    onMouseLeave = range_control_noop,
    onMouseMove = range_control_noop,
    railColor,
    renderTooltipContent = v => v,
    resetFallbackValue,
    __next40pxDefaultSize = false,
    shiftStep = 10,
    showTooltip: showTooltipProp,
    step = 1,
    trackColor,
    value: valueProp,
    withInputField = true,
    ...otherProps
  } = props;
  const [value, setValue] = useControlledRangeValue({
    min,
    max,
    value: valueProp !== null && valueProp !== void 0 ? valueProp : null,
    initial: initialPosition
  });
  const isResetPendent = (0,react.useRef)(false);
  let hasTooltip = showTooltipProp;
  let hasInputField = withInputField;
  if (step === 'any') {
    // The tooltip and number input field are hidden when the step is "any"
    // because the decimals get too lengthy to fit well.
    hasTooltip = false;
    hasInputField = false;
  }
  const [showTooltip, setShowTooltip] = (0,react.useState)(hasTooltip);
  const [isFocused, setIsFocused] = (0,react.useState)(false);
  const inputRef = (0,react.useRef)();
  const isCurrentlyFocused = inputRef.current?.matches(':focus');
  const isThumbFocused = !disabled && isFocused;
  const isValueReset = value === null;
  const currentValue = value !== undefined ? value : currentInput;
  const inputSliderValue = isValueReset ? '' : currentValue;
  const rangeFillValue = isValueReset ? (max - min) / 2 + min : value;
  const fillValue = isValueReset ? 50 : (value - min) / (max - min) * 100;
  const fillValueOffset = `${(0,math/* clamp */.qE)(fillValue, 0, 100)}%`;
  const classes = (0,clsx/* default */.A)('components-range-control', className);
  const wrapperClasses = (0,clsx/* default */.A)('components-range-control__wrapper', !!marks && 'is-marked');
  const id = (0,use_instance_id/* default */.A)(UnforwardedRangeControl, 'inspector-range-control');
  const describedBy = !!help ? `${id}__help` : undefined;
  const enableTooltip = hasTooltip !== false && Number.isFinite(value);
  const handleOnRangeChange = event => {
    const nextValue = parseFloat(event.target.value);
    setValue(nextValue);
    onChange(nextValue);
  };
  const handleOnChange = next => {
    // @ts-expect-error TODO: Investigate if it's problematic for setValue() to
    // potentially receive a NaN when next is undefined.
    let nextValue = parseFloat(next);
    setValue(nextValue);

    /*
     * Calls onChange only when nextValue is numeric
     * otherwise may queue a reset for the blur event.
     */
    if (!isNaN(nextValue)) {
      if (nextValue < min || nextValue > max) {
        nextValue = floatClamp(nextValue, min, max);
      }
      onChange(nextValue);
      isResetPendent.current = false;
    } else if (allowReset) {
      isResetPendent.current = true;
    }
  };
  const handleOnInputNumberBlur = () => {
    if (isResetPendent.current) {
      handleOnReset();
      isResetPendent.current = false;
    }
  };
  const handleOnReset = () => {
    // Reset to `resetFallbackValue` if defined, otherwise set internal value
    // to `null` — which, if propagated to the `value` prop, will cause
    // the value to be reset to the `initialPosition` prop if defined.
    const resetValue = Number.isNaN(resetFallbackValue) ? null : resetFallbackValue !== null && resetFallbackValue !== void 0 ? resetFallbackValue : null;
    setValue(resetValue);

    /**
     * Previously, this callback would always receive undefined as
     * an argument. This behavior is unexpected, specifically
     * when resetFallbackValue is defined.
     *
     * The value of undefined is not ideal. Passing it through
     * to internal <input /> elements would change it from a
     * controlled component to an uncontrolled component.
     *
     * For now, to minimize unexpected regressions, we're going to
     * preserve the undefined callback argument, except when a
     * resetFallbackValue is defined.
     */
    onChange(resetValue !== null && resetValue !== void 0 ? resetValue : undefined);
  };
  const handleShowTooltip = () => setShowTooltip(true);
  const handleHideTooltip = () => setShowTooltip(false);
  const handleOnBlur = event => {
    onBlur(event);
    setIsFocused(false);
    handleHideTooltip();
  };
  const handleOnFocus = event => {
    onFocus(event);
    setIsFocused(true);
    handleShowTooltip();
  };
  const offsetStyle = {
    [(0,build_module/* isRTL */.V8)() ? 'right' : 'left']: fillValueOffset
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default */.Ay, {
    __nextHasNoMarginBottom: __nextHasNoMarginBottom,
    __associatedWPComponentName: "RangeControl",
    className: classes,
    label: label,
    hideLabelFromVision: hideLabelFromVision,
    id: `${id}`,
    help: help,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Root, {
      className: "components-range-control__root",
      __next40pxDefaultSize: __next40pxDefaultSize,
      children: [beforeIcon && /*#__PURE__*/(0,jsx_runtime.jsx)(BeforeIconWrapper, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_icon/* default */.A, {
          icon: beforeIcon
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(range_control_styles_Wrapper, {
        __nextHasNoMarginBottom: __nextHasNoMarginBottom,
        className: wrapperClasses,
        color: colorProp,
        marks: !!marks,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(input_range, {
          ...otherProps,
          className: "components-range-control__slider",
          describedBy: describedBy,
          disabled: disabled,
          id: `${id}`,
          label: label,
          max: max,
          min: min,
          onBlur: handleOnBlur,
          onChange: handleOnRangeChange,
          onFocus: handleOnFocus,
          onMouseMove: onMouseMove,
          onMouseLeave: onMouseLeave,
          ref: (0,use_merge_refs/* default */.A)([inputRef, forwardedRef]),
          step: step,
          value: inputSliderValue !== null && inputSliderValue !== void 0 ? inputSliderValue : undefined
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(RangeRail, {
          "aria-hidden": true,
          disabled: disabled,
          marks: marks,
          max: max,
          min: min,
          railColor: railColor,
          step: step,
          value: rangeFillValue
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Track, {
          "aria-hidden": true,
          className: "components-range-control__track",
          disabled: disabled,
          style: {
            width: fillValueOffset
          },
          trackColor: trackColor
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(ThumbWrapper, {
          className: "components-range-control__thumb-wrapper",
          style: offsetStyle,
          disabled: disabled,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Thumb, {
            "aria-hidden": true,
            isFocused: isThumbFocused,
            disabled: disabled
          })
        }), enableTooltip && /*#__PURE__*/(0,jsx_runtime.jsx)(SimpleTooltip, {
          className: "components-range-control__tooltip",
          inputRef: inputRef,
          tooltipPosition: "bottom",
          renderTooltipContent: renderTooltipContent,
          show: isCurrentlyFocused || showTooltip,
          style: offsetStyle,
          value: value
        })]
      }), afterIcon && /*#__PURE__*/(0,jsx_runtime.jsx)(AfterIconWrapper, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_icon/* default */.A, {
          icon: afterIcon
        })
      }), hasInputField && /*#__PURE__*/(0,jsx_runtime.jsx)(InputNumber, {
        "aria-label": label,
        className: "components-range-control__number",
        disabled: disabled,
        inputMode: "decimal",
        isShiftStepEnabled: isShiftStepEnabled,
        max: max,
        min: min,
        onBlur: handleOnInputNumberBlur,
        onChange: handleOnChange,
        shiftStep: shiftStep,
        size: __next40pxDefaultSize ? '__unstable-large' : 'default',
        __unstableInputWidth: __next40pxDefaultSize ? (0,space/* space */.x)(20) : (0,space/* space */.x)(16),
        step: step
        // @ts-expect-error TODO: Investigate if the `null` value is necessary
        ,
        value: inputSliderValue
      }), allowReset && /*#__PURE__*/(0,jsx_runtime.jsx)(ActionRightWrapper, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
          className: "components-range-control__reset"
          // If the RangeControl itself is disabled, the reset button shouldn't be in the tab sequence.
          ,
          accessibleWhenDisabled: !disabled
          // The reset button should be disabled if RangeControl itself is disabled,
          // or if the current `value` is equal to the value that would be currently
          // assigned when clicking the button.
          ,
          disabled: disabled || value === computeResetValue({
            resetFallbackValue,
            initialPosition
          }),
          variant: "secondary",
          size: "small",
          onClick: handleOnReset,
          children: (0,build_module.__)('Reset')
        })
      })]
    })
  });
}

/**
 * RangeControls are used to make selections from a range of incremental values.
 *
 * ```jsx
 * import { RangeControl } from '@wordpress/components';
 * import { useState } from '@wordpress/element';
 *
 * const MyRangeControl = () => {
 *   const [ isChecked, setChecked ] = useState( true );
 *   return (
 *     <RangeControl
 *       __nextHasNoMarginBottom
 *       help="Please select how transparent you would like this."
 *       initialPosition={50}
 *       label="Opacity"
 *       max={100}
 *       min={0}
 *       onChange={() => {}}
 *     />
 *   );
 * };
 * ```
 */
const RangeControl = (0,react.forwardRef)(UnforwardedRangeControl);
/* harmony default export */ const range_control = (RangeControl);
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.6.0_react@17.0.2/node_modules/@wordpress/compose/build-module/hooks/use-viewport-match/index.js
var use_viewport_match = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.6.0_react@17.0.2/node_modules/@wordpress/compose/build-module/hooks/use-viewport-match/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.2.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@wordpress/dataviews/build-module/dataviews-layouts/grid/density-picker.js
/**
 * WordPress dependencies
 */





const viewportBreaks = {
  xhuge: {
    min: 3,
    max: 6,
    default: 5
  },
  huge: {
    min: 2,
    max: 4,
    default: 4
  },
  xlarge: {
    min: 2,
    max: 3,
    default: 3
  },
  large: {
    min: 1,
    max: 2,
    default: 2
  },
  mobile: {
    min: 1,
    max: 2,
    default: 2
  }
};
function useViewPortBreakpoint() {
  const isXHuge = (0,use_viewport_match/* default */.A)('xhuge', '>=');
  const isHuge = (0,use_viewport_match/* default */.A)('huge', '>=');
  const isXlarge = (0,use_viewport_match/* default */.A)('xlarge', '>=');
  const isLarge = (0,use_viewport_match/* default */.A)('large', '>=');
  const isMobile = (0,use_viewport_match/* default */.A)('mobile', '>=');
  if (isXHuge) {
    return 'xhuge';
  }
  if (isHuge) {
    return 'huge';
  }
  if (isXlarge) {
    return 'xlarge';
  }
  if (isLarge) {
    return 'large';
  }
  if (isMobile) {
    return 'mobile';
  }
  return null;
}
function DensityPicker({
  density,
  setDensity
}) {
  const viewport = useViewPortBreakpoint();
  (0,react.useEffect)(() => {
    setDensity(_density => {
      if (!viewport || !_density) {
        return 0;
      }
      const breakValues = viewportBreaks[viewport];
      if (_density < breakValues.min) {
        return breakValues.min;
      }
      if (_density > breakValues.max) {
        return breakValues.max;
      }
      return _density;
    });
  }, [setDensity, viewport]);
  const breakValues = viewportBreaks[viewport || 'mobile'];
  const densityToUse = density || breakValues.default;
  const marks = (0,react.useMemo)(() => Array.from({
    length: breakValues.max - breakValues.min + 1
  }, (_, i) => {
    return {
      value: breakValues.min + i
    };
  }), [breakValues]);
  if (!viewport) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(range_control, {
    __nextHasNoMarginBottom: true,
    __next40pxDefaultSize: true,
    showTooltip: false,
    label: (0,build_module.__)('Preview size'),
    value: breakValues.max + breakValues.min - densityToUse,
    marks: marks,
    min: breakValues.min,
    max: breakValues.max,
    withInputField: false,
    onChange: (value = 0) => {
      setDensity(breakValues.max + breakValues.min - value);
    },
    step: 1
  });
}
//# sourceMappingURL=density-picker.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.2.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@wordpress/dataviews/build-module/components/dataviews-view-config/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */








const {
  DropdownMenuV2: dataviews_view_config_DropdownMenu,
  DropdownMenuRadioItemV2: dataviews_view_config_DropdownMenuRadioItem,
  DropdownMenuItemLabelV2: dataviews_view_config_DropdownMenuItemLabel
} = lock_unlock_unlock(privateApis);
function ViewTypeMenu({
  defaultLayouts = {
    list: {},
    grid: {},
    table: {}
  }
}) {
  const {
    view,
    onChangeView
  } = (0,react.useContext)(dataviews_context);
  const availableLayouts = Object.keys(defaultLayouts);
  if (availableLayouts.length <= 1) {
    return null;
  }
  const activeView = VIEW_LAYOUTS.find(v => view.type === v.type);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(dataviews_view_config_DropdownMenu, {
    trigger: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
      size: "compact",
      icon: activeView?.icon,
      label: (0,build_module.__)('Layout')
    }),
    children: availableLayouts.map(layout => {
      const config = VIEW_LAYOUTS.find(v => v.type === layout);
      if (!config) {
        return null;
      }
      return /*#__PURE__*/(0,jsx_runtime.jsx)(dataviews_view_config_DropdownMenuRadioItem, {
        value: layout,
        name: "view-actions-available-view",
        checked: layout === view.type,
        hideOnClick: true,
        onChange: e => {
          switch (e.target.value) {
            case 'list':
            case 'grid':
            case 'table':
              return onChangeView({
                ...view,
                type: e.target.value,
                ...defaultLayouts[e.target.value]
              });
          }
          globalThis.SCRIPT_DEBUG === true ? (0,warning_build_module/* default */.A)('Invalid dataview') : void 0;
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(dataviews_view_config_DropdownMenuItemLabel, {
          children: config.label
        })
      }, layout);
    })
  });
}
function SortFieldControl() {
  const {
    view,
    fields,
    onChangeView
  } = (0,react.useContext)(dataviews_context);
  const orderOptions = (0,react.useMemo)(() => {
    const sortableFields = fields.filter(field => field.enableSorting !== false);
    return sortableFields.map(field => {
      return {
        label: field.label,
        value: field.id
      };
    });
  }, [fields]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(select_control/* default */.A, {
    __nextHasNoMarginBottom: true,
    __next40pxDefaultSize: true,
    label: (0,build_module.__)('Sort by'),
    value: view.sort?.field,
    options: orderOptions,
    onChange: value => {
      onChangeView({
        ...view,
        sort: {
          direction: view?.sort?.direction || 'desc',
          field: value
        }
      });
    }
  });
}
function SortDirectionControl() {
  const {
    view,
    fields,
    onChangeView
  } = (0,react.useContext)(dataviews_context);
  let value = view.sort?.direction;
  if (!value && view.sort?.field) {
    value = 'desc';
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(toggle_group_control_component, {
    className: "dataviews-view-config__sort-direction",
    __nextHasNoMarginBottom: true,
    __next40pxDefaultSize: true,
    isBlock: true,
    label: (0,build_module.__)('Order'),
    value: value,
    onChange: newDirection => {
      if (newDirection === 'asc' || newDirection === 'desc') {
        onChangeView({
          ...view,
          sort: {
            direction: newDirection,
            field: view.sort?.field ||
            // If there is no field assigned as the sorting field assign the first sortable field.
            fields.find(field => field.enableSorting !== false)?.id || ''
          }
        });
        return;
      }
      globalThis.SCRIPT_DEBUG === true ? (0,warning_build_module/* default */.A)('Invalid direction') : void 0;
    },
    children: SORTING_DIRECTIONS.map(direction => {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(toggle_group_control_option_icon_component, {
        value: direction,
        icon: sortIcons[direction],
        label: sortLabels[direction]
      }, direction);
    })
  });
}
const PAGE_SIZE_VALUES = [10, 20, 50, 100];
function ItemsPerPageControl() {
  const {
    view,
    onChangeView
  } = (0,react.useContext)(dataviews_context);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(toggle_group_control_component, {
    __nextHasNoMarginBottom: true,
    __next40pxDefaultSize: true,
    isBlock: true,
    label: (0,build_module.__)('Items per page'),
    value: view.perPage || 10,
    disabled: !view?.sort?.field,
    onChange: newItemsPerPage => {
      const newItemsPerPageNumber = typeof newItemsPerPage === 'number' || newItemsPerPage === undefined ? newItemsPerPage : parseInt(newItemsPerPage, 10);
      onChangeView({
        ...view,
        perPage: newItemsPerPageNumber,
        page: 1
      });
    },
    children: PAGE_SIZE_VALUES.map(value => {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(toggle_group_control_option_component, {
        value: value,
        label: value.toString()
      }, value);
    })
  });
}
function FieldControl() {
  const {
    view,
    fields,
    onChangeView
  } = (0,react.useContext)(dataviews_context);
  const mandatoryFields = getMandatoryFields(view);
  const hidableFields = fields.filter(field => field.enableHiding !== false && !mandatoryFields.includes(field.id));
  const viewFields = view.fields || fields.map(field => field.id);
  if (!hidableFields?.length) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(item_group_component, {
    isBordered: true,
    isSeparated: true,
    children: hidableFields?.map(field => {
      const isVisible = viewFields.includes(field.id);
      return /*#__PURE__*/(0,jsx_runtime.jsx)(item_component, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(component/* default */.A, {
          expanded: true,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            children: field.label
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
            size: "compact",
            onClick: () => onChangeView({
              ...view,
              fields: isVisible ? viewFields.filter(id => id !== field.id) : [...viewFields, field.id]
            }),
            icon: isVisible ? library_seen : library_unseen,
            label: isVisible ? (0,build_module.__)('Hide field') : (0,build_module.__)('Show field')
          })]
        })
      }, field.id);
    })
  });
}
function SettingsSection({
  title,
  description,
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(grid_component, {
    columns: 12,
    className: "dataviews-settings-section",
    gap: 4,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "dataviews-settings-section__sidebar",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(heading_component/* default */.A, {
        level: 2,
        className: "dataviews-settings-section__title",
        children: title
      }), description && /*#__PURE__*/(0,jsx_runtime.jsx)(text_component/* default */.A, {
        variant: "muted",
        className: "dataviews-settings-section__description",
        children: description
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grid_component, {
      columns: 8,
      gap: 4,
      className: "dataviews-settings-section__content",
      children: children
    })]
  });
}
function DataviewsViewConfigContent({
  density,
  setDensity
}) {
  const {
    view
  } = (0,react.useContext)(dataviews_context);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(v_stack_component/* default */.A, {
    className: "dataviews-view-config",
    spacing: 6,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(SettingsSection, {
      title: (0,build_module.__)('Appearance'),
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(component/* default */.A, {
        expanded: true,
        className: "is-divided-in-two",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SortFieldControl, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(SortDirectionControl, {})]
      }), view.type === LAYOUT_GRID && /*#__PURE__*/(0,jsx_runtime.jsx)(DensityPicker, {
        density: density,
        setDensity: setDensity
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ItemsPerPageControl, {})]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(SettingsSection, {
      title: (0,build_module.__)('Properties'),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(FieldControl, {})
    })]
  });
}
function _DataViewsViewConfig({
  density,
  setDensity,
  defaultLayouts = {
    list: {},
    grid: {},
    table: {}
  }
}) {
  const [isShowingViewPopover, setIsShowingViewPopover] = (0,react.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ViewTypeMenu, {
      defaultLayouts: defaultLayouts
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
        size: "compact",
        icon: library_cog,
        label: (0,build_module._x)('View options', 'View is used as a noun'),
        onClick: () => setIsShowingViewPopover(true)
      }), isShowingViewPopover && /*#__PURE__*/(0,jsx_runtime.jsx)(popover/* default */.Ay, {
        placement: "bottom-end",
        onClose: () => {
          setIsShowingViewPopover(false);
        },
        focusOnMount: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(DataviewsViewConfigContent, {
          density: density,
          setDensity: setDensity
        })
      })]
    })]
  });
}
const DataViewsViewConfig = (0,react.memo)(_DataViewsViewConfig);
/* harmony default export */ const dataviews_view_config = (DataViewsViewConfig);
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.2.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@wordpress/dataviews/build-module/normalize-fields.js + 59 modules
var normalize_fields = __webpack_require__("../../node_modules/.pnpm/@wordpress+dataviews@4.2.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@wordpress/dataviews/build-module/normalize-fields.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.2.0_@emotion+is-prop-valid@1.2.1_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@wordpress/dataviews/build-module/components/dataviews/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */











const defaultGetItemId = item => item.id;
function DataViews({
  view,
  onChangeView,
  fields,
  search = true,
  searchLabel = undefined,
  actions = [],
  data,
  getItemId = defaultGetItemId,
  isLoading = false,
  paginationInfo,
  defaultLayouts,
  selection: selectionProperty,
  onChangeSelection,
  header
}) {
  const [selectionState, setSelectionState] = (0,react.useState)([]);
  const [density, setDensity] = (0,react.useState)(0);
  const isUncontrolled = selectionProperty === undefined || onChangeSelection === undefined;
  const selection = isUncontrolled ? selectionState : selectionProperty;
  const [openedFilter, setOpenedFilter] = (0,react.useState)(null);
  function setSelectionWithChange(value) {
    const newValue = typeof value === 'function' ? value(selection) : value;
    if (isUncontrolled) {
      setSelectionState(newValue);
    }
    if (onChangeSelection) {
      onChangeSelection(newValue);
    }
  }
  const _fields = (0,react.useMemo)(() => (0,normalize_fields/* normalizeFields */.t)(fields), [fields]);
  const _selection = (0,react.useMemo)(() => {
    return selection.filter(id => data.some(item => getItemId(item) === id));
  }, [selection, data, getItemId]);
  const filters = useFilters(_fields, view);
  const [isShowingFilter, setIsShowingFilter] = (0,react.useState)(() => (filters || []).some(filter => filter.isPrimary));
  return /*#__PURE__*/(0,jsx_runtime.jsx)(dataviews_context.Provider, {
    value: {
      view,
      onChangeView,
      fields: _fields,
      actions,
      data,
      isLoading,
      paginationInfo,
      selection: _selection,
      onChangeSelection: setSelectionWithChange,
      openedFilter,
      setOpenedFilter,
      getItemId,
      density
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "dataviews-wrapper",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(component/* default */.A, {
        alignment: "top",
        justify: "space-between",
        className: "dataviews__view-actions",
        spacing: 1,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(component/* default */.A, {
          justify: "start",
          expanded: false,
          className: "dataviews__search",
          children: [search && /*#__PURE__*/(0,jsx_runtime.jsx)(dataviews_search, {
            label: searchLabel
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(FilterVisibilityToggle, {
            filters: filters,
            view: view,
            onChangeView: onChangeView,
            setOpenedFilter: setOpenedFilter,
            setIsShowingFilter: setIsShowingFilter,
            isShowingFilter: isShowingFilter
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(component/* default */.A, {
          spacing: 1,
          expanded: false,
          style: {
            flexShrink: 0
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(BulkActions, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(dataviews_view_config, {
            defaultLayouts: defaultLayouts,
            density: density,
            setDensity: setDensity
          }), header]
        })]
      }), isShowingFilter && /*#__PURE__*/(0,jsx_runtime.jsx)(dataviews_filters, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(DataViewsLayout, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(dataviews_pagination, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(BulkActionsToolbar, {})]
    })
  });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/plugins/a11y.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var o=function(o){var t=o/255;return t<.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)},t=function(t){return.2126*o(t.r)+.7152*o(t.g)+.0722*o(t.b)};/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(o){o.prototype.luminance=function(){return o=t(this.rgba),void 0===(r=2)&&(r=0),void 0===n&&(n=Math.pow(10,r)),Math.round(n*o)/n+0;var o,r,n},o.prototype.contrast=function(r){void 0===r&&(r="#FFF");var n,a,i,e,v,u,d,c=r instanceof o?r:new o(r);return e=this.rgba,v=c.toRgb(),u=t(e),d=t(v),n=u>d?(u+.05)/(d+.05):(d+.05)/(u+.05),void 0===(a=2)&&(a=0),void 0===i&&(i=Math.pow(10,a)),Math.floor(i*n)/i+0},o.prototype.isReadable=function(o,t){return void 0===o&&(o="#FFF"),void 0===t&&(t={}),this.contrast(o)>=(e=void 0===(i=(r=t).size)?"normal":i,"AAA"===(a=void 0===(n=r.level)?"AA":n)&&"normal"===e?7:"AA"===a&&"large"===e?3:4.5);var r,n,a,i,e}}


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-iteration.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var bind = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-bind-context.js");
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/length-of-array-like.js");
var arraySpeciesCreate = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-species-create.js");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(self);
    var boundFunction = bind(callbackfn, that);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-species-constructor.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isArray = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-object.js");
var wellKnownSymbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-species-create.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var arraySpeciesConstructor = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-species-constructor.js");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-array.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classof = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.name.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/descriptors.js");
var FUNCTION_NAME_EXISTS = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-name.js").EXISTS);
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var defineBuiltInAccessor = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/define-built-in-accessor.js");

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineBuiltInAccessor(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "../../node_modules/.pnpm/remove-accents@0.5.0/node_modules/remove-accents/index.js":
/***/ ((module) => {

var characterMap = {
	"À": "A",
	"Á": "A",
	"Â": "A",
	"Ã": "A",
	"Ä": "A",
	"Å": "A",
	"Ấ": "A",
	"Ắ": "A",
	"Ẳ": "A",
	"Ẵ": "A",
	"Ặ": "A",
	"Æ": "AE",
	"Ầ": "A",
	"Ằ": "A",
	"Ȃ": "A",
	"Ả": "A",
	"Ạ": "A",
	"Ẩ": "A",
	"Ẫ": "A",
	"Ậ": "A",
	"Ç": "C",
	"Ḉ": "C",
	"È": "E",
	"É": "E",
	"Ê": "E",
	"Ë": "E",
	"Ế": "E",
	"Ḗ": "E",
	"Ề": "E",
	"Ḕ": "E",
	"Ḝ": "E",
	"Ȇ": "E",
	"Ẻ": "E",
	"Ẽ": "E",
	"Ẹ": "E",
	"Ể": "E",
	"Ễ": "E",
	"Ệ": "E",
	"Ì": "I",
	"Í": "I",
	"Î": "I",
	"Ï": "I",
	"Ḯ": "I",
	"Ȋ": "I",
	"Ỉ": "I",
	"Ị": "I",
	"Ð": "D",
	"Ñ": "N",
	"Ò": "O",
	"Ó": "O",
	"Ô": "O",
	"Õ": "O",
	"Ö": "O",
	"Ø": "O",
	"Ố": "O",
	"Ṍ": "O",
	"Ṓ": "O",
	"Ȏ": "O",
	"Ỏ": "O",
	"Ọ": "O",
	"Ổ": "O",
	"Ỗ": "O",
	"Ộ": "O",
	"Ờ": "O",
	"Ở": "O",
	"Ỡ": "O",
	"Ớ": "O",
	"Ợ": "O",
	"Ù": "U",
	"Ú": "U",
	"Û": "U",
	"Ü": "U",
	"Ủ": "U",
	"Ụ": "U",
	"Ử": "U",
	"Ữ": "U",
	"Ự": "U",
	"Ý": "Y",
	"à": "a",
	"á": "a",
	"â": "a",
	"ã": "a",
	"ä": "a",
	"å": "a",
	"ấ": "a",
	"ắ": "a",
	"ẳ": "a",
	"ẵ": "a",
	"ặ": "a",
	"æ": "ae",
	"ầ": "a",
	"ằ": "a",
	"ȃ": "a",
	"ả": "a",
	"ạ": "a",
	"ẩ": "a",
	"ẫ": "a",
	"ậ": "a",
	"ç": "c",
	"ḉ": "c",
	"è": "e",
	"é": "e",
	"ê": "e",
	"ë": "e",
	"ế": "e",
	"ḗ": "e",
	"ề": "e",
	"ḕ": "e",
	"ḝ": "e",
	"ȇ": "e",
	"ẻ": "e",
	"ẽ": "e",
	"ẹ": "e",
	"ể": "e",
	"ễ": "e",
	"ệ": "e",
	"ì": "i",
	"í": "i",
	"î": "i",
	"ï": "i",
	"ḯ": "i",
	"ȋ": "i",
	"ỉ": "i",
	"ị": "i",
	"ð": "d",
	"ñ": "n",
	"ò": "o",
	"ó": "o",
	"ô": "o",
	"õ": "o",
	"ö": "o",
	"ø": "o",
	"ố": "o",
	"ṍ": "o",
	"ṓ": "o",
	"ȏ": "o",
	"ỏ": "o",
	"ọ": "o",
	"ổ": "o",
	"ỗ": "o",
	"ộ": "o",
	"ờ": "o",
	"ở": "o",
	"ỡ": "o",
	"ớ": "o",
	"ợ": "o",
	"ù": "u",
	"ú": "u",
	"û": "u",
	"ü": "u",
	"ủ": "u",
	"ụ": "u",
	"ử": "u",
	"ữ": "u",
	"ự": "u",
	"ý": "y",
	"ÿ": "y",
	"Ā": "A",
	"ā": "a",
	"Ă": "A",
	"ă": "a",
	"Ą": "A",
	"ą": "a",
	"Ć": "C",
	"ć": "c",
	"Ĉ": "C",
	"ĉ": "c",
	"Ċ": "C",
	"ċ": "c",
	"Č": "C",
	"č": "c",
	"C̆": "C",
	"c̆": "c",
	"Ď": "D",
	"ď": "d",
	"Đ": "D",
	"đ": "d",
	"Ē": "E",
	"ē": "e",
	"Ĕ": "E",
	"ĕ": "e",
	"Ė": "E",
	"ė": "e",
	"Ę": "E",
	"ę": "e",
	"Ě": "E",
	"ě": "e",
	"Ĝ": "G",
	"Ǵ": "G",
	"ĝ": "g",
	"ǵ": "g",
	"Ğ": "G",
	"ğ": "g",
	"Ġ": "G",
	"ġ": "g",
	"Ģ": "G",
	"ģ": "g",
	"Ĥ": "H",
	"ĥ": "h",
	"Ħ": "H",
	"ħ": "h",
	"Ḫ": "H",
	"ḫ": "h",
	"Ĩ": "I",
	"ĩ": "i",
	"Ī": "I",
	"ī": "i",
	"Ĭ": "I",
	"ĭ": "i",
	"Į": "I",
	"į": "i",
	"İ": "I",
	"ı": "i",
	"Ĳ": "IJ",
	"ĳ": "ij",
	"Ĵ": "J",
	"ĵ": "j",
	"Ķ": "K",
	"ķ": "k",
	"Ḱ": "K",
	"ḱ": "k",
	"K̆": "K",
	"k̆": "k",
	"Ĺ": "L",
	"ĺ": "l",
	"Ļ": "L",
	"ļ": "l",
	"Ľ": "L",
	"ľ": "l",
	"Ŀ": "L",
	"ŀ": "l",
	"Ł": "l",
	"ł": "l",
	"Ḿ": "M",
	"ḿ": "m",
	"M̆": "M",
	"m̆": "m",
	"Ń": "N",
	"ń": "n",
	"Ņ": "N",
	"ņ": "n",
	"Ň": "N",
	"ň": "n",
	"ŉ": "n",
	"N̆": "N",
	"n̆": "n",
	"Ō": "O",
	"ō": "o",
	"Ŏ": "O",
	"ŏ": "o",
	"Ő": "O",
	"ő": "o",
	"Œ": "OE",
	"œ": "oe",
	"P̆": "P",
	"p̆": "p",
	"Ŕ": "R",
	"ŕ": "r",
	"Ŗ": "R",
	"ŗ": "r",
	"Ř": "R",
	"ř": "r",
	"R̆": "R",
	"r̆": "r",
	"Ȓ": "R",
	"ȓ": "r",
	"Ś": "S",
	"ś": "s",
	"Ŝ": "S",
	"ŝ": "s",
	"Ş": "S",
	"Ș": "S",
	"ș": "s",
	"ş": "s",
	"Š": "S",
	"š": "s",
	"Ţ": "T",
	"ţ": "t",
	"ț": "t",
	"Ț": "T",
	"Ť": "T",
	"ť": "t",
	"Ŧ": "T",
	"ŧ": "t",
	"T̆": "T",
	"t̆": "t",
	"Ũ": "U",
	"ũ": "u",
	"Ū": "U",
	"ū": "u",
	"Ŭ": "U",
	"ŭ": "u",
	"Ů": "U",
	"ů": "u",
	"Ű": "U",
	"ű": "u",
	"Ų": "U",
	"ų": "u",
	"Ȗ": "U",
	"ȗ": "u",
	"V̆": "V",
	"v̆": "v",
	"Ŵ": "W",
	"ŵ": "w",
	"Ẃ": "W",
	"ẃ": "w",
	"X̆": "X",
	"x̆": "x",
	"Ŷ": "Y",
	"ŷ": "y",
	"Ÿ": "Y",
	"Y̆": "Y",
	"y̆": "y",
	"Ź": "Z",
	"ź": "z",
	"Ż": "Z",
	"ż": "z",
	"Ž": "Z",
	"ž": "z",
	"ſ": "s",
	"ƒ": "f",
	"Ơ": "O",
	"ơ": "o",
	"Ư": "U",
	"ư": "u",
	"Ǎ": "A",
	"ǎ": "a",
	"Ǐ": "I",
	"ǐ": "i",
	"Ǒ": "O",
	"ǒ": "o",
	"Ǔ": "U",
	"ǔ": "u",
	"Ǖ": "U",
	"ǖ": "u",
	"Ǘ": "U",
	"ǘ": "u",
	"Ǚ": "U",
	"ǚ": "u",
	"Ǜ": "U",
	"ǜ": "u",
	"Ứ": "U",
	"ứ": "u",
	"Ṹ": "U",
	"ṹ": "u",
	"Ǻ": "A",
	"ǻ": "a",
	"Ǽ": "AE",
	"ǽ": "ae",
	"Ǿ": "O",
	"ǿ": "o",
	"Þ": "TH",
	"þ": "th",
	"Ṕ": "P",
	"ṕ": "p",
	"Ṥ": "S",
	"ṥ": "s",
	"X́": "X",
	"x́": "x",
	"Ѓ": "Г",
	"ѓ": "г",
	"Ќ": "К",
	"ќ": "к",
	"A̋": "A",
	"a̋": "a",
	"E̋": "E",
	"e̋": "e",
	"I̋": "I",
	"i̋": "i",
	"Ǹ": "N",
	"ǹ": "n",
	"Ồ": "O",
	"ồ": "o",
	"Ṑ": "O",
	"ṑ": "o",
	"Ừ": "U",
	"ừ": "u",
	"Ẁ": "W",
	"ẁ": "w",
	"Ỳ": "Y",
	"ỳ": "y",
	"Ȁ": "A",
	"ȁ": "a",
	"Ȅ": "E",
	"ȅ": "e",
	"Ȉ": "I",
	"ȉ": "i",
	"Ȍ": "O",
	"ȍ": "o",
	"Ȑ": "R",
	"ȑ": "r",
	"Ȕ": "U",
	"ȕ": "u",
	"B̌": "B",
	"b̌": "b",
	"Č̣": "C",
	"č̣": "c",
	"Ê̌": "E",
	"ê̌": "e",
	"F̌": "F",
	"f̌": "f",
	"Ǧ": "G",
	"ǧ": "g",
	"Ȟ": "H",
	"ȟ": "h",
	"J̌": "J",
	"ǰ": "j",
	"Ǩ": "K",
	"ǩ": "k",
	"M̌": "M",
	"m̌": "m",
	"P̌": "P",
	"p̌": "p",
	"Q̌": "Q",
	"q̌": "q",
	"Ř̩": "R",
	"ř̩": "r",
	"Ṧ": "S",
	"ṧ": "s",
	"V̌": "V",
	"v̌": "v",
	"W̌": "W",
	"w̌": "w",
	"X̌": "X",
	"x̌": "x",
	"Y̌": "Y",
	"y̌": "y",
	"A̧": "A",
	"a̧": "a",
	"B̧": "B",
	"b̧": "b",
	"Ḑ": "D",
	"ḑ": "d",
	"Ȩ": "E",
	"ȩ": "e",
	"Ɛ̧": "E",
	"ɛ̧": "e",
	"Ḩ": "H",
	"ḩ": "h",
	"I̧": "I",
	"i̧": "i",
	"Ɨ̧": "I",
	"ɨ̧": "i",
	"M̧": "M",
	"m̧": "m",
	"O̧": "O",
	"o̧": "o",
	"Q̧": "Q",
	"q̧": "q",
	"U̧": "U",
	"u̧": "u",
	"X̧": "X",
	"x̧": "x",
	"Z̧": "Z",
	"z̧": "z",
	"й":"и",
	"Й":"И",
	"ё":"е",
	"Ё":"Е",
};

var chars = Object.keys(characterMap).join('|');
var allAccents = new RegExp(chars, 'g');
var firstAccent = new RegExp(chars, '');

function matcher(match) {
	return characterMap[match];
}

var removeAccents = function(string) {
	return string.replace(allAccents, matcher);
};

var hasAccents = function(string) {
	return !!string.match(firstAccent);
};

module.exports = removeAccents;
module.exports.has = hasAccents;
module.exports.remove = removeAccents;


/***/ }),

/***/ "../../node_modules/.pnpm/use-memo-one@1.1.3_react@17.0.2/node_modules/use-memo-one/dist/use-memo-one.esm.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MA: () => (/* binding */ useMemoOne)
/* harmony export */ });
/* unused harmony exports useCallback, useCallbackOne, useMemo */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");


function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }

  return true;
}

function useMemoOne(getResult, inputs) {
  var initial = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
    return {
      inputs: inputs,
      result: getResult()
    };
  })[0];
  var isFirstRun = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  var committed = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initial);
  var useCache = isFirstRun.current || Boolean(inputs && committed.current.inputs && areInputsEqual(inputs, committed.current.inputs));
  var cache = useCache ? committed.current : {
    inputs: inputs,
    result: getResult()
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    isFirstRun.current = false;
    committed.current = cache;
  }, [cache]);
  return cache.result;
}
function useCallbackOne(callback, inputs) {
  return useMemoOne(function () {
    return callback;
  }, inputs);
}
var useMemo = (/* unused pure expression or super */ null && (useMemoOne));
var useCallback = (/* unused pure expression or super */ null && (useCallbackOne));




/***/ })

}]);