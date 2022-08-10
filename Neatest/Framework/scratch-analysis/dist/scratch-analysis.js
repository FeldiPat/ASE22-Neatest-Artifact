/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: Graph, GraphNode, generateCFG, ControlFlowGraph, UserEventNode, EventNode, generateCDG, ControlDependenceGraph, ControlFilter, MotionFilter, LooksFilter, SoundFilter, EventFilter, VariableFilter, ListFilter, SensingFilter, StatementFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_graph_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/graph-utils */ "./src/graph-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Graph", function() { return _src_graph_utils__WEBPACK_IMPORTED_MODULE_0__["Graph"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphNode", function() { return _src_graph_utils__WEBPACK_IMPORTED_MODULE_0__["GraphNode"]; });

/* harmony import */ var _src_control_flow_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/control-flow-graph */ "./src/control-flow-graph.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateCFG", function() { return _src_control_flow_graph__WEBPACK_IMPORTED_MODULE_1__["generateCFG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlFlowGraph", function() { return _src_control_flow_graph__WEBPACK_IMPORTED_MODULE_1__["ControlFlowGraph"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserEventNode", function() { return _src_control_flow_graph__WEBPACK_IMPORTED_MODULE_1__["UserEventNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventNode", function() { return _src_control_flow_graph__WEBPACK_IMPORTED_MODULE_1__["EventNode"]; });

/* harmony import */ var _src_control_dependence_graph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/control-dependence-graph */ "./src/control-dependence-graph.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateCDG", function() { return _src_control_dependence_graph__WEBPACK_IMPORTED_MODULE_2__["generateCDG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlDependenceGraph", function() { return _src_control_dependence_graph__WEBPACK_IMPORTED_MODULE_2__["ControlDependenceGraph"]; });

/* harmony import */ var _src_block_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/block-filter */ "./src/block-filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlFilter", function() { return _src_block_filter__WEBPACK_IMPORTED_MODULE_3__["ControlFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionFilter", function() { return _src_block_filter__WEBPACK_IMPORTED_MODULE_3__["MotionFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LooksFilter", function() { return _src_block_filter__WEBPACK_IMPORTED_MODULE_3__["LooksFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SoundFilter", function() { return _src_block_filter__WEBPACK_IMPORTED_MODULE_3__["SoundFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventFilter", function() { return _src_block_filter__WEBPACK_IMPORTED_MODULE_3__["EventFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VariableFilter", function() { return _src_block_filter__WEBPACK_IMPORTED_MODULE_3__["VariableFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListFilter", function() { return _src_block_filter__WEBPACK_IMPORTED_MODULE_3__["ListFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SensingFilter", function() { return _src_block_filter__WEBPACK_IMPORTED_MODULE_3__["SensingFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatementFilter", function() { return _src_block_filter__WEBPACK_IMPORTED_MODULE_3__["StatementFilter"]; });







/***/ }),

/***/ "./src/block-filter.js":
/*!*****************************!*\
  !*** ./src/block-filter.js ***!
  \*****************************/
/*! exports provided: ControlFilter, MotionFilter, LooksFilter, SoundFilter, EventFilter, VariableFilter, OperatorFilter, ListFilter, SensingFilter, StatementFilter, MusicFilter, CustomFilter, PenFilter, Text2SpeechFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlFilter", function() { return ControlFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionFilter", function() { return MotionFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LooksFilter", function() { return LooksFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundFilter", function() { return SoundFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventFilter", function() { return EventFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariableFilter", function() { return VariableFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorFilter", function() { return OperatorFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFilter", function() { return ListFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensingFilter", function() { return SensingFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatementFilter", function() { return StatementFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicFilter", function() { return MusicFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFilter", function() { return CustomFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PenFilter", function() { return PenFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text2SpeechFilter", function() { return Text2SpeechFilter; });
const MotionFilter = {
  directionChange: block => block.opcode === 'motion_turnright' || block.opcode === 'motion_turnleft' || block.opcode === 'motion_pointindirection' || block.opcode === 'motion_pointtowards',
  directionSet: block => block.opcode === 'motion_pointindirection',
  positionChange: block => block.opcode === 'motion_movesteps' || block.opcode === 'motion_goto' || block.opcode === 'motion_gotoxy' || block.opcode === 'motion_glideto' || block.opcode === 'motion_glidesecstoxy' || block.opcode === 'motion_changexby' || block.opcode === 'motion_changeyby' || block.opcode === 'motion_setx' || block.opcode === 'motion_sety',
  positionSet: block => block.opcode === 'motion_gotoxy' || block.opcode === 'motion_glidesecstoxy',
  xSet: block => block.opcode === 'motion_setx',
  ySet: block => block.opcode === 'motion_sety',
  motionBlock: block => block.opcode.startsWith('motion_') && !block.opcode.endsWith('_menu') && !(block.opcode === 'motion_xposition' || block.opcode === 'motion_yposition' || block.opcode === 'motion_direction')
};
const LooksFilter = {
  backdropChange: block => block.opcode === 'looks_switchbackdroptoandwait' || block.opcode === 'looks_nextbackdrop' || block.opcode === 'looks_switchbackdropto',
  nextBackdrop: block => block.opcode === 'looks_nextbackdrop',
  backdropSet: block => block.opcode === 'looks_switchbackdroptoandwait' || block.opcode === 'looks_switchbackdropto',
  costumeChange: block => block.opcode === 'looks_switchcostumeto' || block.opcode === 'looks_nextcostume',
  costumeSet: block => block.opcode === 'looks_switchcostumeto',
  sizeChange: block => block.opcode === 'looks_changesizeby' || block.opcode === 'looks_setsizeto',
  sizeSet: block => block.opcode === 'looks_setsizeto',
  visibilitySet: block => block.opcode === 'looks_show' || block.opcode === 'looks_hide',
  sayBlock: block => block.opcode === 'looks_say' || block.opcode === 'looks_sayforsecs',
  thinkBlock: block => block.opcode === 'looks_think' || block.opcode === 'looks_thinkforsecs',
  backdropBlock: block => block.opcode === 'looks_backdrops',
  looksBlock: block => block.opcode.startsWith('looks_') && !block.opcode.endsWith('_menu') && !(block.opcode === 'looks_backdropnumbername' || block.opcode === 'looks_costumenumbername' || block.opcode === 'looks_size')
};
const SoundFilter = {
  play: block => block.opcode === 'sound_play' || block.opcode === 'sound_playuntildone',
  soundBlock: block => block.opcode.startsWith('sound_') && !block.opcode.endsWith('_menu') && !(block.opcode === 'sound_volume')
};
const EventFilter = {
  userEvent: block => block.opcode === 'event_whenflagclicked' || block.opcode === 'event_whenthisspriteclicked' || block.opcode === 'event_whenstageclicked' || block.opcode === 'event_whenkeypressed' || block.opcode === 'event_whengreaterthan',
  greenFlag: block => block.opcode === 'event_whenflagclicked',
  hatEvent: block => block.opcode === 'event_whenflagclicked' || block.opcode === 'event_whenthisspriteclicked' || block.opcode === 'event_whenstageclicked' || block.opcode === 'event_whenbackdropswitchesto' || block.opcode === 'event_whengreaterthan' || block.opcode === 'event_whenbroadcastreceived' || block.opcode === 'event_whenkeypressed',
  broadcastSend: block => block.opcode === 'event_broadcast' || block.opcode === 'event_broadcastandwait',
  broadcastReceive: block => block.opcode === 'event_whenbroadcastreceived',
  broadcastMenu: block => block.opcode === 'event_broadcast_menu',
  cloneCreate: block => block.opcode === 'control_create_clone_of',
  cloneStart: block => block.opcode === 'control_start_as_clone',
  cloneMenu: block => block.opcode === "control_create_clone_of_menu",
  backdropStart: block => block.opcode === 'event_whenbackdropswitchesto',
  backdropChange: block => block.opcode === 'looks_switchbackdropto',
  eventSend: block => EventFilter.broadcastSend(block) || EventFilter.cloneCreate(block),
  eventReceive: block => EventFilter.broadcastReceive(block) || EventFilter.cloneStart(block),
  eventBlock: block => block.opcode.startsWith('event_') && !block.opcode.endsWith('_menu') && block.opcode !== 'event_touchingobjectmenu'
};
const ControlFilter = {
  controlBlock: block => block.opcode.startsWith('control_') && !block.opcode.endsWith('_menu'),
  singleBranch: block => block.opcode === 'control_if' || block.opcode === 'control_repeat' || block.opcode === 'control_repeat_until' || block.opcode === 'control_forever' || block.opcode === 'control_wait_until',
  doubleBranch: block => block.opcode === 'control_if_else',
  branch: block => ControlFilter.singleBranch(block) || ControlFilter.doubleBranch(block),
  hatBlock: block => EventFilter.hatEvent(block) || block.opcode === 'control_start_as_clone',
  executionHaltingBlock: block => block.opcode === 'control_wait' || block.opcode === 'looks_thinkforsecs' || block.opcode === 'looks_sayforsecs' || block.opcode === 'motion_glidesecstoxy' || block.opcode === 'motion_glideto' || block.opcode === 'sound_playuntildone' || block.opcode === 'text2speech_speakAndWait'
};
const SensingFilter = {
  askBlock: block => block.opcode === 'sensing_askandwait',
  sensingBlock: block => block.opcode === 'sensing_askandwait' || block.opcode === 'sensing_setdragmode' || block.opcode === 'sensing_resettimer'
};
const VariableFilter = {
  set: block => block.opcode === 'data_setvariableto',
  update: block => block.opcode === 'data_setvariableto' || block.opcode === 'data_changevariableby',
  variableBlock: block => block.opcode === 'data_setvariableto' || block.opcode === 'data_changevariableby' || block.opcode === 'data_showvariable' || block.opcode === 'data_hidevariable'
};
const OperatorFilter = {
  arithmetic: block => block.opcode === 'operator_add' || block.opcode === 'operator_subtract' || block.opcode === 'operator_multiply' || block.opcode === 'operator_divide',
  relational: block => block.opcode === 'operator_equals' || block.opcode === 'operator_lt' || block.opcode === 'operator_gt',
  logical: block => block.opcode === 'operator_and' || block.opcode === 'operator_or',
  negatable: block => block.opcode === 'sensing_touchingobject' || block.opcode === 'sensing_touchingcolor' || block.opcode === 'sensing_coloristouchingcolor' || block.opcode === 'sensing_keypressed' || block.opcode === 'sensing_mousedown' || block.opcode === 'operator_contains' || block.opcode === 'operator_not' || OperatorFilter.logical(block) || OperatorFilter.relational(block)
};
const ListFilter = {
  update: block => block.opcode === 'data_addtolist' || block.opcode === 'data_deleteoflist' || block.opcode === 'data_deletealloflist' || block.opcode === 'data_insertatlist' || block.opcode === 'data_replaceitemoflist' || block.opcode === 'data_replaceitemoflist',
  listBlock: block => ListFilter.update(block) || block.opcode === 'data_showlist' || block.opcode === 'data_hidelist'
};
const MusicFilter = {
  musicBlock: block => block.opcode.startsWith('music_')
};
const CustomFilter = {
  customBlock: block => block.opcode.startsWith('procedures_'),
  defineBlock: block => block.opcode === 'procedures_definition'
};
const PenFilter = {
  penBlock: block => block.opcode.startsWith('pen_')
};
const Text2SpeechFilter = {
  text2speechBlock: block => block.opcode.startsWith('text2speech_')
};
const StatementFilter = {
  isStatementBlock: block => {
    if (block.topLevel && !EventFilter.eventBlock(block) && !EventFilter.cloneStart(block) && !CustomFilter.customBlock(block)) {
      // loose blocks
      return false;
    }

    if (block.opcode.endsWith('_menu')) {
      return false;
    }

    return MotionFilter.motionBlock(block) || LooksFilter.looksBlock(block) || SoundFilter.soundBlock(block) || EventFilter.eventBlock(block) || ControlFilter.controlBlock(block) || SensingFilter.sensingBlock(block) || ListFilter.listBlock(block) || VariableFilter.variableBlock(block) || MusicFilter.musicBlock(block) || CustomFilter.customBlock(block) || PenFilter.penBlock(block) || Text2SpeechFilter.text2speechBlock(block);
  }
};


/***/ }),

/***/ "./src/control-dependence-graph.js":
/*!*****************************************!*\
  !*** ./src/control-dependence-graph.js ***!
  \*****************************************/
/*! exports provided: generateCDG, ControlDependenceGraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateCDG", function() { return generateCDG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlDependenceGraph", function() { return ControlDependenceGraph; });
/* harmony import */ var _graph_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph-utils */ "./src/graph-utils.js");
/* harmony import */ var _post_dominator_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-dominator-tree */ "./src/post-dominator-tree.js");
/* harmony import */ var _control_flow_graph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control-flow-graph */ "./src/control-flow-graph.js");

 // eslint-disable-line no-unused-vars



class ControlDependenceGraph extends _graph_utils__WEBPACK_IMPORTED_MODULE_0__["Graph"] {}
/**
 * Adds the given start node to the CFG.
 *
 * @param {ControlFlowGraph} cfg - the control flow graph which is augmented.
 * @param {GraphNode} start - the start node which is added to the CFG.
 * @private
 */


const _augmentCFG = (cfg, start) => {
  cfg.addNode(start);
  cfg.addEdge(start, cfg.entry());
  cfg.addEdge(start, cfg.exit());
};
/**
 * "Find S, a set of edges in the CFG such that in the post-dominator tree
 * the edge target is not an ancestor of the target source."
 *
 * @param {ControlFlowGraph} cfg - the control flow graph.
 * @param {PostDominatorTree} reversedPDT - the reversed PDT, to find ancestors easier.
 * @returns {Set<Edge>} - a set of edges.
 * @private
 */


const _findEdgeSetS = (cfg, reversedPDT) => {
  const allNodes = new Set(cfg.getAllNodes());
  const edges = new Set();

  for (const node of allNodes) {
    for (const succ of cfg.successors(node.id)) {
      if (!reversedPDT.getTransitiveSuccessors(node).has(succ)) {
        edges.add(new _graph_utils__WEBPACK_IMPORTED_MODULE_0__["Edge"](node, succ));
      }
    }
  }

  return edges;
};
/**
 * Computes the least common ancestor for each edge from a set of edges and returns a mapping from
 * edge to computed least common ancestor, the controlling dependency of both edge nodes.
 *
 * @param {PostDominatorTree} postDominatedTree - the PDT used to extract the information.
 * @param {Set<Edge>} edges - a set of edges for which the least common ancestor is computed.
 * @returns {Map<Edge, GraphNode>} - a mapping from edges to a single node, the least common ancestor.
 * @private
 */


const _computeLeastCommonAncestors = (postDominatedTree, edges) => {
  const leastCommonAncestors = new Map();

  for (const edge of edges) {
    const leastCommonAncestor = postDominatedTree.getLeastCommonAncestor(edge.from, edge.to);
    leastCommonAncestors.set(edge, leastCommonAncestor);
  }

  return leastCommonAncestors;
};
/**
 * Finds and returns all control dependencies between nodes using the PDT as well as edges and their
 * least common ancestor.
 *
 * @param {PostDominatorTree} postDominatedTree - the PDT used to extract the information.
 * @param {Set<Edge>} edges - a set of edges.
 * @param {Map<Edge, GraphNode>} leastCommonAncestors - a mapping from edges to the least common ancestor,
 *                                                      the control dependency of the edge nodes.
 * @returns {Map<GraphNode, Set<GraphNode>>} - a mapping from nodes to their control dependencies.
 * @private
 */


const _findControlDependencies = (postDominatedTree, edges, leastCommonAncestors) => {
  const controlDependencyMap = new Map();

  for (const edge of edges) {
    const markedNodes = new Set();
    const l = leastCommonAncestors.get(edge);

    if (edge.from === l) {
      markedNodes.add(l);
    }

    let current = edge.to;

    while (current !== undefined && current !== l) {
      markedNodes.add(current);
      const preds = new Set(postDominatedTree.predecessors(current.id)); // We can just assume preds has size === 1

      current = preds.values().next().value;
    }

    const alreadyMarked = controlDependencyMap.get(edge.from);

    if (alreadyMarked) {
      for (const marked of alreadyMarked) {
        markedNodes.add(marked);
      }
    }

    controlDependencyMap.set(edge.from, markedNodes);
  }

  return controlDependencyMap;
};
/**
 * Computes and returns a Control Dependence Graph (CDG) from a CFG and its corresponding PDT.
 *
 * @param {ControlFlowGraph} cfg - the control flow graph the CDG is generated from.
 * @param {PostDominatorTree} postDominatedTree - the PDT.
 * @param {PostDominatorTree} reversedPDT - the PDT, but reversed.
 * @returns {ControlDependenceGraph} - the resulting Control Dependence Graph (CDG).
 * @private
 */


const _computeControlDependenceGraph = (cfg, postDominatedTree, reversedPDT) => {
  const start = new _graph_utils__WEBPACK_IMPORTED_MODULE_0__["GraphNode"]('start');
  const controlDependenceGraph = new ControlDependenceGraph(start);

  _augmentCFG(cfg, start);

  const allNodes = new Set(cfg.getAllNodes());

  for (const node of allNodes) {
    controlDependenceGraph.addNode(node);
  } // Find S, a set of edges in the CFG such that in the post-dominator tree
  // the edge target is not an ancestor of the target source.


  const edges = _findEdgeSetS(cfg, reversedPDT); // For each edge in S, find L, the least common ancestor in PDT


  const leastCommonAncestors = _computeLeastCommonAncestors(postDominatedTree, edges); // Consider each edge (A,B) in S and its corresponding L.
  // Traverse backwards in PDT from B to L, marking each node visited;
  // mark L only if L = A.


  const controlDependencyMap = _findControlDependencies(postDominatedTree, edges, leastCommonAncestors); // Statements representing all marked nodes are control dependent on A with
  // the label that is on edge (A,B).


  for (const [node, controlDependencies] of controlDependencyMap.entries()) {
    for (const controlDependency of controlDependencies) {
      controlDependenceGraph.addEdge(node, controlDependency);
    }
  }

  return controlDependenceGraph;
};
/**
 * Generates and returns a Control Dependence Graph (CDG) for
 * a given Control Flow Graph (CFG), which is not altered.
 *
 * @param {ControlFlowGraph} cfg - the control flow graph the control dependence graph is generated from.
 * @returns {ControlDependenceGraph} the generated control dependence graph.
 */


const generateCDG = cfg => {
  cfg = Object(_graph_utils__WEBPACK_IMPORTED_MODULE_0__["cloneGraph"])(cfg);
  const postDominatedTree = Object(_post_dominator_tree__WEBPACK_IMPORTED_MODULE_1__["computePostDominatedTree"])(cfg);
  const reversedPostDominatedTree = Object(_graph_utils__WEBPACK_IMPORTED_MODULE_0__["reverseGraph"])(postDominatedTree);

  const cdg = _computeControlDependenceGraph(cfg, postDominatedTree, reversedPostDominatedTree);

  return cdg;
};



/***/ }),

/***/ "./src/control-flow-graph.js":
/*!***********************************!*\
  !*** ./src/control-flow-graph.js ***!
  \***********************************/
/*! exports provided: ControlFlowGraph, EventNode, UserEventNode, genUid, getBlockMap, generateCFG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlFlowGraph", function() { return ControlFlowGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventNode", function() { return EventNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEventNode", function() { return UserEventNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genUid", function() { return genUid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockMap", function() { return getBlockMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateCFG", function() { return generateCFG; });
/* harmony import */ var _block_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block-filter */ "./src/block-filter.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _graph_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graph-utils */ "./src/graph-utils.js");



/**
 * Class representing a Control Flow Graph (CFG).
 * Next to a collection of nodes, the CFG contains arbitrary entry and exit node.
 *
 * The CFG's nodes are private, but can be queried with node related methods.
 *
 * @see Graph
 * @see GraphNode
 */

class ControlFlowGraph extends _graph_utils__WEBPACK_IMPORTED_MODULE_2__["Graph"] {
  constructor() {
    const entryNode = new _graph_utils__WEBPACK_IMPORTED_MODULE_2__["GraphNode"]('Entry');
    const exitNode = new _graph_utils__WEBPACK_IMPORTED_MODULE_2__["GraphNode"]('Exit');
    super(entryNode, exitNode);
  }

}
/**
 * Dummy node for an broadcast send or clone create event.
 *
 * @see GraphNode
 */

class EventNode extends _graph_utils__WEBPACK_IMPORTED_MODULE_2__["GraphNode"] {
  constructor(id, event) {
    super(id);
    this.event = event;
  }

}
/**
 * Dummy node for a user triggered event.
 *
 * @see GraphNode
 */

class UserEventNode extends _graph_utils__WEBPACK_IMPORTED_MODULE_2__["GraphNode"] {
  constructor(id, userEvent) {
    super(id);
    this.userEvent = userEvent;
  }

}
/**
 * Extends the successors of the last node inside the basic block with successors.
 * Before extending the successors, the exit node is removed to remove unwanted and duplicate edges to the exit node.
 * If the given should successors contains the exit node, it will be part of the successors.
 *
 * @param {ControlFlowGraph} cfg - the CFG containing all nodes.
 * @param {Mapping} successors - a collection of edges inside the CFG, mapping of node identifier to nodes.
 * @param {Array<GraphNode>} shouldSuccessors - the successors will extend the existing successors.
 * @param {GraphNode} startNode - the start node of the basic block.
 * @param {boolean} extra - whether extra handling for broadcast and cloning statements should be made.
 */

const _extendBasicBlockSuccessors = (cfg, successors, shouldSuccessors, startNode, extra) => {
  _extendBasicBlockSuccessors2(cfg, successors, shouldSuccessors, startNode, extra, new Set());
};

const _extendBasicBlockSuccessors2 = (cfg, successors, shouldSuccessors, startNode, extra, visited) => {
  let node = startNode;

  while (node.block) {
    // Extra handling for broadcast and cloning send statements
    if (extra && _block_filter__WEBPACK_IMPORTED_MODULE_0__["EventFilter"].eventReceive(node.block)) {
      if (visited.has(node)) {
        break;
      }

      visited.add(node);

      for (const succ of successors.get(node.id)) {
        if (succ instanceof EventNode) {
          for (const recv of successors.get(succ.id)) {
            if (recv.block && _block_filter__WEBPACK_IMPORTED_MODULE_0__["EventFilter"].eventReceive(recv.block)) {
              _extendBasicBlockSuccessors2(cfg, successors, shouldSuccessors, recv, extra, visited);
            }
          }
        }
      }
    }

    if (!node.block.next) {
      break;
    }

    node = cfg.getNode(node.block.next);
  }

  if (node === cfg.exit()) {
    // Should not set successors of exit node
    return;
  } // If the exit node is part of the to be set successors that's okay, but it has to be removed here to avoid
  //   a) unwanted edges to the exit note
  //   b) duplicate edges to exit note


  successors.remove(node.id, cfg.exit());

  for (const suc of shouldSuccessors) {
    successors.put(node.id, suc);
  }
};
/**
 * Fixes the successors in a CFG of a given control statement or its succeeding branches,
 * depending on the type of control statement.
 *
 * @param {ControlFlowGraph} cfg - the CFG containing all nodes.
 * @param {Mapping<GraphNode>} successors - a {@link Mapping} from nodes to their successors.
 * @param {GraphNode} controlNode - the node of the to be fixed control statement.
 * @private
 */


const _fixControlStatement = (cfg, successors, controlNode) => {
  const controlStmt = controlNode.block;

  switch (controlStmt.opcode) {
    case 'control_repeat_until':
    case 'control_repeat':
      {
        const branchStart = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getBranchStart"])(controlStmt); // Check whether the branch is empty.

        if (branchStart) {
          _extendBasicBlockSuccessors(cfg, successors, [controlNode], cfg.getNode(branchStart), true);
        } // Adding a "fake" edge from the loop head to the exit node turns repeat loops into control dependencies.


        successors.put(controlNode.id, cfg.exit());
        break;
      }

    case 'control_forever':
      {
        const branchStart = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getBranchStart"])(controlStmt);

        if (branchStart) {
          _extendBasicBlockSuccessors(cfg, successors, [controlNode], cfg.getNode(branchStart), true);

          successors.set(controlNode.id, [cfg.getNode(branchStart), cfg.exit()]);
        } else {
          successors.set(controlNode.id, [cfg.exit()]);
        }

        break;
      }

    case 'control_if':
      {
        const ifBranchStart = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getBranchStart"])(controlStmt);

        if (ifBranchStart) {
          const afterControl = successors.getAsArray(controlNode.id).filter(n => n.id !== ifBranchStart);

          _extendBasicBlockSuccessors(cfg, successors, afterControl, cfg.getNode(ifBranchStart), false);
        }

        break;
      }

    case 'control_if_else':
      {
        const ifBranchStart = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getBranchStart"])(controlStmt);
        const elseBranchStart = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElseBranchStart"])(controlStmt);

        if (ifBranchStart && elseBranchStart) {
          const afterControl = successors.getAsArray(controlNode.id).filter(n => n.id !== ifBranchStart && n.id !== elseBranchStart);
          successors.removeAll(controlNode.id, afterControl);

          _extendBasicBlockSuccessors(cfg, successors, afterControl, cfg.getNode(ifBranchStart), false);

          _extendBasicBlockSuccessors(cfg, successors, afterControl, cfg.getNode(elseBranchStart), false);
        } else if (ifBranchStart) {
          // Only if branch has content
          const afterControl = successors.getAsArray(controlNode.id).filter(n => n.id !== ifBranchStart);

          _extendBasicBlockSuccessors(cfg, successors, afterControl, cfg.getNode(ifBranchStart), false);
        } else if (elseBranchStart) {
          // Only else branch has content
          const afterControl = successors.getAsArray(controlNode.id).filter(n => n.id !== elseBranchStart);

          _extendBasicBlockSuccessors(cfg, successors, afterControl, cfg.getNode(elseBranchStart), false);
        } else {// None has content -> no changes
        }

        break;
      }

    case 'control_stop':
      {
        const stopOption = _utils__WEBPACK_IMPORTED_MODULE_1__["Extract"].stopOption(controlStmt);

        switch (stopOption) {
          case 'this script':
          case 'all':
            {
              successors.set(controlNode.id, [cfg.exit()]);
              break;
            }

          case 'other scripts in sprite':
          case 'other scripts in stage':
            // Since this is just a 'normal' block after which other blocks can follow, we can ignore it.
            break;

          default:
            console.log(`Unrecognized stop option ${stopOption}.`);
        }

        break;
      }

    case 'control_delete_this_clone':
      successors.set(controlNode.id, [cfg.exit()]);
      break;

    case 'control_wait_until':
      successors.put(controlNode.id, cfg.getNode(controlNode.id));
      successors.put(controlNode.id, cfg.exit());
      break;

    case 'control_start_as_clone':
    case 'control_create_clone_of':
      // Can ignore these cases
      break;

    default:
      {
        console.log(`Unhandled control statement ${controlStmt.opcode} for block ${controlStmt.id}`);
      }
  }
};
/**
 * Helper function to recursively fix control statements.
 * Starting from the given node, depth first.
 *
 * @param {ControlFlowGraph} cfg - the control flow graph which control statements should be fixed.
 * @param {Mapping<GraphNode>} successors - a {@link Mapping} from nodes to their successors.
 * @param {GraphNode} node - the start node.
 * @param {Array<GraphNode>} visited - a list of already visited nodes.
 * @private
 */


const _fixControlStatements = (cfg, successors, node, visited) => {
  if (visited.find(n => n.id === node.id)) {
    return;
  }

  visited.push(node);
  const block = node.block;

  if (block && _block_filter__WEBPACK_IMPORTED_MODULE_0__["ControlFilter"].controlBlock(block) && !_block_filter__WEBPACK_IMPORTED_MODULE_0__["ControlFilter"].executionHaltingBlock(block)) {
    _fixControlStatement(cfg, successors, node);
  } // We add a "fake" edge from execution halting Blocks to the exit node in order to turn those blocks
  // into control dependencies.
  else if (block && _block_filter__WEBPACK_IMPORTED_MODULE_0__["ControlFilter"].executionHaltingBlock(block)) {
    successors.put(node.id, cfg.exit());
  }

  for (const next of successors.get(node.id)) {
    _fixControlStatements(cfg, successors, next, visited);
  }
};
/**
 * Calls a recursive helper function to fix control statements from the Entry node, depth first.
 *
 * @param {ControlFlowGraph} cfg - the control flow graph which control statements should be fixed.
 * @param {Mapping<GraphNode>} successors - a {@link Mapping} from nodes to their successors.
 */


const fixControlStatements = (cfg, successors) => {
  _fixControlStatements(cfg, successors, cfg.entry(), []);
};
/**
 * Checks for a given user event node whether a preceeding user event node exists.
 * If the user events exists, it is returned.
 * If not, it is added to the given control flow graph
 *
 * @param {Array} targets - the targets of the program. Used to identify from which target a block is.
 * @param {ControlFlowGraph} cfg - the control flow graph.
 * @param {Mapping<GraphNode>} successors - a mapping from nodes to their successors.
 * @param {Map<string, GraphNode>} userEvents - a mapping from event key to user event node.
 * @param {GraphNode} node - the node that is initially checked. A successor of the user event node.
 * @returns {GraphNode} - the user event node, either existing or newly created.
 */


const addOrGetUserEventNode = (targets, cfg, successors, userEvents, node) => {
  const event = {
    name: node.block.opcode.substring(10),
    // removes leading "event_when"
    opcode: node.block.opcode
  };

  switch (node.block.opcode) {
    case 'event_whenflagclicked':
      {
        // necessary event information already complete
        break;
      }

    case 'event_whenthisspriteclicked':
      {
        event.value = _utils__WEBPACK_IMPORTED_MODULE_1__["Extract"].clickedSprite(node.block);
        break;
      }

    case 'event_whenstageclicked':
      {
        event.value = 'Stage';
        break;
      }

    case 'event_whenkeypressed':
      {
        event.value = _utils__WEBPACK_IMPORTED_MODULE_1__["Extract"].clickedKey(node.block);
        break;
      }

    case 'event_whengreaterthan':
      {
        // TODO: Technically, only sound is a user event but the block can also refer to the timer
        event.value = node.block.fields.WHENGREATERTHANMENU;
        break;
      }
  }

  const eventKey = `${event.name}${event.value ? `:${event.value}` : ''}`;
  let eventNode = userEvents.get(eventKey);

  if (!eventNode) {
    eventNode = new UserEventNode(eventKey, event);
    cfg.addNode(eventNode);
    successors.put(cfg.entry().id, eventNode);
    successors.put(eventNode.id, cfg.exit());
    userEvents.set(eventKey, eventNode);
  }

  return eventNode;
};

const getBroadcastTargets = blocks => {
  let broadcastTargets = new Set();

  for (const block of blocks.values()) {
    if (_block_filter__WEBPACK_IMPORTED_MODULE_0__["EventFilter"].broadcastReceive(block)) {
      const event = _utils__WEBPACK_IMPORTED_MODULE_1__["Extract"].broadcastForBlock(block);
      broadcastTargets.add(`broadcast:${event}`);
    }
  }

  return broadcastTargets;
};

const getBackdropTargets = (blocks, vm) => {
  let backdropTargets = new Set();

  for (const block of blocks.values()) {
    if (_block_filter__WEBPACK_IMPORTED_MODULE_0__["EventFilter"].backdropStart(block)) {
      const backdropTarget = _utils__WEBPACK_IMPORTED_MODULE_1__["Extract"].backdropStartTarget(block);

      if (checkIfBackdropExists(vm, backdropTarget)) {
        backdropTargets.add(`backdrop:${backdropTarget}`);
      }
    }
  }

  return backdropTargets;
};

const getCloneTargets = blocks => {
  let cloneTargets = new Set();

  for (const block of blocks.values()) {
    if (_block_filter__WEBPACK_IMPORTED_MODULE_0__["EventFilter"].cloneStart(block)) {
      const cloneTarget = _utils__WEBPACK_IMPORTED_MODULE_1__["Extract"].cloneSendTarget(block);
      cloneTargets.add(`clone:${cloneTarget}`);
    }
  }

  return cloneTargets;
};
/**
 * Create unique block ID
 * Based on https://github.com/LLK/scratch-blocks/blob/develop/core/utils.js
 * Soup omits $ because that would screw up the String.replaceAll later
 */


const soup_ = '!#()%*+,-./:;=?@[]^_`{|}~' + // $
'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const genUid = function () {
  var length = 20;
  var soupLength = soup_.length;
  var id = [];

  for (var i = 0; i < length; i++) {
    id[i] = soup_.charAt(Math.random() * soupLength);
  }

  return id.join('');
};
const getBlockMap = targets => {
  let blocks = new Map();

  for (const target of targets) {
    for (const block of Object.values(target.blocks._blocks)) {
      const blockKey = `${block.id}-${target.sprite.name}`; // Create a deep clone for the CFG to not alter the block residing in the Scratch-VM.

      const blockClone = JSON.parse(JSON.stringify(block));
      blockClone['target'] = target.sprite.name;
      changeBlockIds(blockClone, target);
      blocks.set(blockKey, blockClone);
    }
  }

  return blocks;
};
/**
 * Constructs an interprocedural control flow graph (CFG) for all blocks of a program.
 *
 * The given blocks represent the Abstract Syntax Tree (AST) of each script.
 * This method adds interprodecural edges from broadcast send to broadcast receive statements.
 *
 * Furthermore, this method updates the control statements, since their AST information cannot
 * be used directly for CFG generation.
 *
 * @param {VirtualMachine} vm - the instance of the current virtual machine state.
 * Contains all blocks in the program, used to construct the CFG.
 * @return {ControlFlowGraph} - a newly generated {@link ControlFlowGraph}.
 */

const generateCFG = vm => {
  // So-called "renderer targets" (the individual sprites and the stage) in the current project.
  const targets = vm.runtime.targets; // To avoid duplicates in the CFG we save blocks using the key combination blockId-SpriteName, where SpriteName
  // corresponds to the name of the sprite the given block is contained in.

  let blocks = getBlockMap(targets);
  const backdropTargets = getBackdropTargets(blocks, vm);
  const broadcastTargets = getBroadcastTargets(blocks);
  const cloneTargets = getCloneTargets(blocks);
  const cfg = new ControlFlowGraph();
  const userEvents = new Map();
  const eventSend = new _graph_utils__WEBPACK_IMPORTED_MODULE_2__["Mapping"]();
  const eventReceive = new _graph_utils__WEBPACK_IMPORTED_MODULE_2__["Mapping"]();
  const successors = new _graph_utils__WEBPACK_IMPORTED_MODULE_2__["Mapping"]();
  const nextBackDropNodes = []; // First, we insert all nodes into the CFG.

  for (const [id, block] of blocks.entries()) {
    // Certain Scratch blocks are not related to control flow; they are not "statement blocks". For example, none
    // of the blocks in the "Operators" category (e.g., arithmetic and boolean operators) are statement blocks.
    // For CFG construction, we must ignore such blocks.
    if (!_block_filter__WEBPACK_IMPORTED_MODULE_0__["StatementFilter"].isStatementBlock(block)) {
      continue;
    } // Furthermore, many scratch blocks are "parameterized". For example, the "Say" block or a custom block accepts
    // text. These text parameters are considered blocks themselves by Scratch but they are not related to control
    // flow. We can identify such blocks by the fact that they are drawn with a shadow.


    if (block.shadow) {
      continue;
    }

    cfg.addNode(new _graph_utils__WEBPACK_IMPORTED_MODULE_2__["GraphNode"](id, block));
  }
  /*
   * A custom block in Scratch is referred to via its so called "proccode". The proccode is essentially the name
   * of the custom block given by the user when he/she defined the custom block.
   *
   * There are three kinds of opcodes related to custom blocks.
   *  - procedures_definition: represents the definition of a custom block; identified by its proccode
   *  - procedures_call: represents the call of a custom block; refers to the procedures_definition via its proccode
   *  - procedures_prototype: The proccode is usually directly accessible in the procedures_definition itself.
   *    However, this is not always the case; we need to query the procedures_prototype which then contains a
   *    reference to the corresponding procedures_definition.
   */


  const customBlockDefinitions = new Map(); // Maps proccodes to the corresponding procedures_definition. The key  is formed by combining the proccode
  // with the name of the sprite in which the given block is contained in. This is necessary since multiple sprites
  // could have differing procedure_definitions with the same proccode.

  for (const block of blocks.values()) {
    if (block.opcode === 'procedures_definition') {
      if (block.inputs.custom_block.block) {
        const customBlockPrototype = blocks.get(block.inputs.custom_block.block);
        const proccode = customBlockPrototype.mutation.proccode;
        let definitionCallKey = proccode + "-" + block.target;

        if (customBlockDefinitions.has(definitionCallKey)) {
          console.warn("Duplicate procedure definition for the custom block: ", proccode);
          console.warn("Scratch will only execute one single procedure definition. Consider removing duplicates for a better code quality!");
          const keys = [...customBlockDefinitions.keys()].filter(key => key.includes(definitionCallKey));
          definitionCallKey += "-" + keys.length;
        }

        customBlockDefinitions.set(definitionCallKey, new _graph_utils__WEBPACK_IMPORTED_MODULE_2__["GraphNode"](block.id, block));
      }
    }
  } // Now, we establish the connections between the nodes.


  for (const node of cfg.getAllNodes()) {
    if (node.block.parent) {
      successors.put(node.block.parent, node);
    }

    const callsCustomBlock = node.block.opcode === 'procedures_call';

    if (callsCustomBlock) {
      // Adds an edge from the call site of a custom block to its definition
      const proccode = node.block.mutation.proccode;
      const definitionCallKey = proccode + "-" + node.block.target;
      const definitionKeys = [...customBlockDefinitions.keys()].filter(key => key.includes(definitionCallKey));

      for (const definitionKey of definitionKeys) {
        const callee = customBlockDefinitions.get(definitionKey);

        if (callee) {
          successors.put(node.id, callee);
        } else {
          console.warn("Call to undefined procedure: " + definitionCallKey);
        }
      } // FIXME: there also need to be edges that go back from the definition to all its call sites

    }

    if (!node.block.next) {
      // No exit node? Probably, the actual successors is the exit node
      successors.put(node.id, cfg.exit());
    } // Special cases


    if (_block_filter__WEBPACK_IMPORTED_MODULE_0__["EventFilter"].userEvent(node.block)) {
      const userEventNode = addOrGetUserEventNode(targets, cfg, successors, userEvents, node);
      successors.put(userEventNode.id, node);
    }

    if (_block_filter__WEBPACK_IMPORTED_MODULE_0__["EventFilter"].broadcastSend(node.block)) {
      if (_block_filter__WEBPACK_IMPORTED_MODULE_0__["EventFilter"].broadcastMenu(blocks.get(node.block.inputs.BROADCAST_INPUT.block))) {
        const event = _utils__WEBPACK_IMPORTED_MODULE_1__["Extract"].broadcastForStatement(blocks, node.block);
        eventSend.put(`broadcast:${event}`, node);
      } else {
        // Add edges to all items in eventReceive starting with a message
        for (const broadcastTarget of broadcastTargets) {
          eventSend.put(broadcastTarget, node);
        }
      }
    }

    if (_block_filter__WEBPACK_IMPORTED_MODULE_0__["EventFilter"].broadcastReceive(node.block)) {
      const event = _utils__WEBPACK_IMPORTED_MODULE_1__["Extract"].broadcastForBlock(node.block);
      eventReceive.put(`broadcast:${event}`, node);
    }

    if (_block_filter__WEBPACK_IMPORTED_MODULE_0__["EventFilter"].cloneCreate(node.block)) {
      if (_block_filter__WEBPACK_IMPORTED_MODULE_0__["EventFilter"].cloneMenu([node.block.inputs.CLONE_OPTION.block])) {
        let cloneTarget = _utils__WEBPACK_IMPORTED_MODULE_1__["Extract"].cloneCreateTarget(blocks, node.block);

        if (cloneTarget === '_myself_') {
          cloneTarget = _utils__WEBPACK_IMPORTED_MODULE_1__["Extract"].cloneSendTarget(node.block);
        }

        eventSend.put(`clone:${cloneTarget}`, node);
      } else {
        // Overapproximate since the target is not known statically
        for (const cloneTarget of cloneTargets) {
          eventSend.put(cloneTarget, node);
        }
      }
    }

    if (_block_filter__WEBPACK_IMPORTED_MODULE_0__["EventFilter"].cloneStart(node.block)) {
      const cloneTarget = _utils__WEBPACK_IMPORTED_MODULE_1__["Extract"].cloneSendTarget(node.block);
      eventReceive.put(`clone:${cloneTarget}`, node);
    }

    if (_block_filter__WEBPACK_IMPORTED_MODULE_0__["EventFilter"].backdropStart(node.block)) {
      const backdropTarget = _utils__WEBPACK_IMPORTED_MODULE_1__["Extract"].backdropStartTarget(node.block);

      if (checkIfBackdropExists(vm, backdropTarget)) {
        eventReceive.put(`backdrop:${backdropTarget}`, node);
      }
    }

    if (_block_filter__WEBPACK_IMPORTED_MODULE_0__["LooksFilter"].backdropChange(node.block)) {
      let backdropTarget = undefined;

      if (_block_filter__WEBPACK_IMPORTED_MODULE_0__["LooksFilter"].backdropSet(node.block)) {
        backdropTarget = _utils__WEBPACK_IMPORTED_MODULE_1__["Extract"].backdropChangeTarget(blocks, node.block);
      } // Special handling for nextBackdrop statements.


      if (_block_filter__WEBPACK_IMPORTED_MODULE_0__["LooksFilter"].nextBackdrop(node.block) || backdropTarget === 'next backdrop') {
        nextBackDropNodes.push(node);
      } else if (_block_filter__WEBPACK_IMPORTED_MODULE_0__["LooksFilter"].backdropBlock(blocks.get(node.block.inputs.BACKDROP.block))) {
        if (checkIfBackdropExists(vm, backdropTarget)) {
          eventSend.put(`backdrop:${backdropTarget}`, node);
        }
      } else {
        // Add edges to all items in eventReceive starting with backdrop
        for (const backdropTarget of backdropTargets) {
          eventSend.put(backdropTarget, node);
        }
      }
    }
  } // Afterwards, we add a global entry and exit node for the entire Scratch program.


  cfg.addNode(cfg.entry());
  cfg.addNode(cfg.exit()); // Adds an extra event node for Broadcast and Cloning events iff the respective events can be triggered.

  const eventIds = new Set([...eventSend.keys(), ...eventReceive.keys()]);

  for (const eventKey of eventIds) {
    const splitEventId = eventKey.split(':');
    const eventType = splitEventId[0];
    const eventId = splitEventId[1];
    const sendEvents = eventSend.get(eventKey);
    const receiveEvents = eventReceive.get(eventKey); // If we have matching sender and receiver of events, create connections between them.

    if (sendEvents.size > 0 && receiveEvents.size > 0) {
      const event = {
        type: eventType,
        value: eventId
      };
      const sendNode = new EventNode(`${eventType}:${eventId}`, event);
      cfg.addNode(sendNode);
      successors.put(sendNode.id, cfg.exit());

      for (const sender of sendEvents) {
        successors.put(sender.id, sendNode);

        for (const receiver of receiveEvents) {
          successors.put(sendNode.id, receiver);
        }
      }
    } // If we have blocks reacting to a backdrop switch and switch to next backdrop blocks, we over-approximate by
    // linking all next backdrop blocks to every backdrop reacting block since we do not know which specific
    // backdrop the next one will be.


    if (eventType === 'backdrop' && receiveEvents.size > 0 && nextBackDropNodes.length > 0) {
      const event = {
        type: eventType,
        value: eventId
      };
      const sendNode = new EventNode(`${eventType}:${eventId}`, event);
      cfg.addNode(sendNode);
      successors.put(sendNode.id, cfg.exit());

      for (const sender of nextBackDropNodes) {
        successors.put(sender.id, sendNode);

        for (const receiver of receiveEvents) {
          successors.put(sendNode.id, receiver);
        }
      }
    }
  } // Branches of control statements most often have the exit node instead of the correct successor(s).
  // This call sets the correct successors


  fixControlStatements(cfg, successors); // Add actual successors to graph.

  for (const node of cfg.getAllNodes()) {
    for (const succ of successors.get(node.id)) {
      cfg.addEdge(node, succ);
    }
  } // Remove statement blocks that have no predecessors in the CFG and are therefore unreachable.


  let changed = true;

  while (changed) {
    changed = false;

    for (const node of cfg.getAllNodes()) {
      if (node.block !== undefined && _block_filter__WEBPACK_IMPORTED_MODULE_0__["StatementFilter"].isStatementBlock(node.block) && cfg.getTransitivePredecessors(node).size === 0) {
        // If we are about to delete a node form the CFG we also have to delete it from the successor's
        // predecessor mapping in order to repeat those recursively if they
        for (const suc of successors.get(node.id)) {
          const predecessors = cfg.predecessors(suc.id);
          predecessors.delete(node);
        }

        cfg.removeNode(node);
        changed = true;
      }
    }
  }

  return cfg;
};

const checkIfBackdropExists = (vm, backdropName) => {
  const stage = vm.runtime.getTargetForStage();
  const backdrops = stage.sprite.costumes;

  for (const backDrop of Object.values(backdrops)) {
    if (backDrop.name === backdropName) {
      return true;
    }
  }

  return false;
};

function changeBlockIds(block, target) {
  // TODO: Are there other keys that map to ids we need to replace here?
  const idKeys = ['id', 'next', 'parent', 'block'];

  for (const k in block) {
    if (typeof block[k] === 'object' && block[k] !== null) {
      changeBlockIds(block[k], target);
    } else if (idKeys.includes(k) && block[k] !== null) {
      block[k] = block[k] + "-" + target.sprite.name;
    }
  }
}

/***/ }),

/***/ "./src/graph-utils.js":
/*!****************************!*\
  !*** ./src/graph-utils.js ***!
  \****************************/
/*! exports provided: Edge, GraphNode, Graph, Mapping, cloneGraph, reverseGraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edge", function() { return Edge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphNode", function() { return GraphNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Graph", function() { return Graph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapping", function() { return Mapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneGraph", function() { return cloneGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverseGraph", function() { return reverseGraph; });
/**
 * A mapping from arbitrary identifiers to an array of values.
 */
class Mapping {
  constructor() {
    this._values = {};
  }

  keys() {
    return Object.keys(this._values);
  }

  has(id) {
    return this._values.hasOwnProperty(id);
  }

  get(id) {
    if (!this._values.hasOwnProperty(id)) {
      return new Set();
    }

    return this._values[id];
  }

  getAsArray(id) {
    return Array.from(this.get(id));
  }

  put(id, value) {
    if (!this._values.hasOwnProperty(id)) {
      this._values[id] = new Set();
    }

    this._values[id].add(value);
  }

  set(id, values) {
    this._values[id] = new Set(values);
  }

  remove(id, value) {
    if (this._values.hasOwnProperty(id)) {
      this._values[id].delete(value);
    }
  }

  removeAll(id, values) {
    for (const value of values) {
      this.remove(id, value);
    }
  }

}

class Edge {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  toString() {
    return `${this.from} -> ${this.to}`;
  }

}
/**
 * Default graph node class.
 */


class GraphNode {
  constructor(id, block) {
    this.id = id;
    this.block = block;
  }

  toString() {
    if (this.block && this.block.opcode) {
      return `${this.block.opcode}:${this.id.substring(0, 2)}-${this.block.target}`;
    } else {
      // eslint-disable-line no-else-return
      return this.id;
    }
  }

}
/**
 * Default graph class.
 */


class Graph {
  constructor(entryNode, exitNode) {
    this._entryNode = entryNode;
    this._exitNode = exitNode;
    this._nodes = {};
    this._successors = new Mapping();
    this._predecessors = new Mapping();
  }

  successors(id) {
    return this._successors.get(id);
  }

  predecessors(id) {
    return this._predecessors.get(id);
  }

  entry() {
    return this._entryNode;
  }

  exit() {
    return this._exitNode;
  }

  addNode(node) {
    this._nodes[node.id] = node;
  }

  removeNode(node) {
    delete this._nodes[node.id];
  }

  addEdge(node, successor) {
    this._predecessors.put(successor.id, node);

    this._successors.put(node.id, successor);
  }

  getNode(id) {
    return this._nodes[id];
  }

  getNodeIds() {
    return Object.keys(this._nodes);
  }

  getAllNodes() {
    return Object.values(this._nodes);
  }

  _transitivePredecessors(node, visited) {
    const predecessors = new Set();

    for (const pred of this.predecessors(node.id)) {
      if (!visited.has(pred)) {
        predecessors.add(pred);
        visited.add(pred);

        for (const pred2 of this._transitivePredecessors(pred, visited)) {
          predecessors.add(pred2);
        }
      }
    }

    return predecessors;
  }

  _transitiveSuccessors(node, visited) {
    const successors = new Set();

    for (const succ of this.successors(node.id)) {
      if (!visited.has(succ)) {
        successors.add(succ);
        visited.add(succ);

        for (const succ2 of this._transitiveSuccessors(succ, visited)) {
          successors.add(succ2);
        }
      }
    }

    return successors;
  }
  /**
   * Gathers and returns all transitive predecessors of a given node.
   * Transitive predecessors are all nodes which can be reached from a certain node
   * in reverse direction.
   *
   * @param {GraphNode} node - the node which transitive predecessors are returned.
   * @returns {Set<GraphNode>} - a set of all transitive predecessors.
   */


  getTransitivePredecessors(node) {
    return this._transitivePredecessors(node, new Set());
  }
  /**
   * Gathers and returns all transitive successors of a given node.
   * Transitive successors are all nodes which can be reached from a certain node.
   *
   * @param {GraphNode} node - the node which transitive successors are returned.
   * @returns {Set<GraphNode>} - a set of all transitive successors.
   */


  getTransitiveSuccessors(node) {
    return this._transitiveSuccessors(node, new Set());
  }

  _containsTransitiveSuccessors(pStartNode, pFirstNode, pSecondNode) {
    const transitiveSuccessors = this.getTransitiveSuccessors(pStartNode);
    transitiveSuccessors.add(pStartNode);
    return transitiveSuccessors.has(pFirstNode) && transitiveSuccessors.has(pSecondNode);
  }
  /**
   * Finds and returns the least common ancestor of two given nodes in this graph.
   *
   * @param {GraphNode} pFirstNode - the first node.
   * @param {GraphNode} pSecondNode - the second node.
   * @returns {GraphNode} the least common ancestor of both given nodes.
   */


  getLeastCommonAncestor(pFirstNode, pSecondNode) {
    let current = pFirstNode;

    while (!this._containsTransitiveSuccessors(current, pFirstNode, pSecondNode)) {
      // eslint-disable-next-line newline-per-chained-call
      const iterator = this.predecessors(current.id).values().next();

      if (iterator.done) {
        return current;
      }

      current = iterator.value;
    }

    return current;
  }

  toDot() {
    const edges = [];

    for (const node of this.getAllNodes()) {
      for (const succ of this.successors(node.id)) {
        edges.push(`\t"${node.toString()}" -> "${succ.toString()}";`);
      }
    }

    const renderedEdges = edges.join('\n');
    const result = `digraph ScratchProgram {\n${renderedEdges}\n}`;
    this.dot = result;
    return result;
  }

  toCoverageDot(uncoveredKeys) {
    const edges = [];
    const nodes = [];

    for (const node of this.getAllNodes()) {
      if (uncoveredKeys.includes(node.id)) {
        nodes.push(`\t"${node.toString()}" [style=filled,fillcolor=\"red\",fontcolor=\"white\"];`);
      } else {
        nodes.push(`\t"${node.toString()}" [style=filled,fillcolor=\"darkgreen\",fontcolor=\"white\"];`);
      }

      for (const succ of this.successors(node.id)) {
        edges.push(`\t"${node.toString()}" -> "${succ.toString()}";`);
      }
    }

    const renderedEdges = edges.join('\n');
    const renderedNodes = nodes.join('\n');
    const result = `digraph ScratchProgram {\n${renderedNodes}\n${renderedEdges}\n}`;
    this.dot = result;
    return result;
  }

  toString() {
    if (!this.dot) {
      return this.toDot();
    }
  }

}
/**
 * Creates a new cloned graph of a given graph.
 *
 * @param {Graph} graph - the graph to be cloned, will not be altered.
 * @returns {Graph} - a cloned graph.
 */


const cloneGraph = graph => {
  const cloned = new Graph(graph.entry(), graph.exit());

  for (const node of graph.getAllNodes()) {
    cloned.addNode(node);

    for (const succ of graph.successors(node.id)) {
      cloned.addEdge(node, succ);
    }
  }

  return cloned;
};
/**
 * Creates a new reversed graph of a given graph.
 *
 * @param {Graph} graph - the graph to be reverse, will not be altered.
 * @returns {Graph} - a reversed graph.
 */


const reverseGraph = graph => {
  const reversed = new Graph(graph.exit(), graph.entry());

  for (const node of graph.getAllNodes()) {
    reversed.addNode(node);

    for (const succ of graph.successors(node.id)) {
      reversed.addEdge(succ, node);
    }
  }

  return reversed;
};



/***/ }),

/***/ "./src/post-dominator-tree.js":
/*!************************************!*\
  !*** ./src/post-dominator-tree.js ***!
  \************************************/
/*! exports provided: PostDominatorTree, computePostDominatedTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDominatorTree", function() { return PostDominatorTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computePostDominatedTree", function() { return computePostDominatedTree; });
/* harmony import */ var _graph_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph-utils */ "./src/graph-utils.js");
/* harmony import */ var _block_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-filter */ "./src/block-filter.js");
/* harmony import */ var _control_flow_graph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control-flow-graph */ "./src/control-flow-graph.js");




class PostDominatorTree extends _graph_utils__WEBPACK_IMPORTED_MODULE_0__["Graph"] {}
/**
 * Checks whether the first given set contains all elements of the second set.
 *
 * @param {Set<any>} firstSet - the first set.
 * @param {Set<any>} secondSet - the second set.
 * @returns {boolean} - true when all elements of the second set are in the first set, false otherwise.
 * @private
 */


const _containsAll = (firstSet, secondSet) => {
  for (const value of secondSet) {
    if (!firstSet.has(value)) {
      return false;
    }
  }

  return true;
};
/**
 * Computes and returns a mapping of nodes to their dominating nodes.
 *
 * @param {ControlFlowGraph} cfg - the control flow graph.
 * @returns {Map<string, Set<GraphNode>>} - mapping from node-ids to dominating nodes.
 * @private
 */


const _getDominators = cfg => {
  const entry = cfg.entry();
  const allNodes = new Set(cfg.getAllNodes());
  const dominanceMap = new Map();
  dominanceMap.set(entry.id, new Set([entry]));
  const nodesWithoutEntry = new Set(cfg.getAllNodes());
  nodesWithoutEntry.delete(entry);

  for (const node of nodesWithoutEntry) {
    dominanceMap.set(node.id, new Set(allNodes));
  }

  let changed = true;

  while (changed) {
    changed = false;

    for (const node of nodesWithoutEntry) {
      const currentDominators = dominanceMap.get(node.id);
      const newDominators = new Set();
      newDominators.add(node);
      const predecessors = new Set(cfg.predecessors(node.id));

      if (!predecessors.size) {
        continue;
      } // Special handling of broadcasts, so broadcast send events are NOT a control
      // dependency of their "natural" successors, but only their receiving statements.


      if (node.block && _block_filter__WEBPACK_IMPORTED_MODULE_1__["EventFilter"].eventSend(node.block)) {
        for (const pred of predecessors) {
          if (pred instanceof _control_flow_graph__WEBPACK_IMPORTED_MODULE_2__["EventNode"]) {
            predecessors.delete(pred);
          }
        }
      }

      const firstPred = Array.from(predecessors)[0];
      const predDominators = new Set(dominanceMap.get(firstPred.id));
      predecessors.delete(firstPred);

      for (const predecessor of predecessors) {
        const currentPredDominators = dominanceMap.get(predecessor.id); // predDominators.intersect(currentPredDominators);

        for (const predDom of predDominators) {
          if (!currentPredDominators.has(predDom)) {
            predDominators.delete(predDom);
          }
        }
      }

      for (const predDom of predDominators) {
        newDominators.add(predDom);
      }

      if (!_containsAll(currentDominators, newDominators) || !_containsAll(newDominators, currentDominators)) {
        dominanceMap.set(node.id, newDominators);
        changed = true;
      }
    }
  }

  return dominanceMap;
};
/**
 * Constructs a dominance tree for a given CFG and map of dominating nodes.
 *
 * @param {ControlFlowGraph} cfg - the control flow graph.
 * @param {Map<string, Set<GraphNode>>} dominanceMap - the mapping from node-id to dominating nodes.
 * @returns {PostDominatorTree} - the constructed dominance tree.
 * @private
 */


const _buildDominanceTree = (cfg, dominanceMap) => {
  const dominanceTree = new PostDominatorTree(cfg.entry());
  const allNodes = new Set(cfg.getAllNodes());
  const q = [];
  q.push(cfg.entry());

  for (const node of allNodes) {
    dominanceTree.addNode(node);
    dominanceMap.get(node.id).delete(node);
  }

  while (q.length) {
    const m = q.shift();

    for (const node of allNodes) {
      const dominators = dominanceMap.get(node.id);

      if (dominators.size && dominators.has(m)) {
        dominators.delete(m);

        if (!dominators.size) {
          dominanceTree.addEdge(m, node);
          q.push(node);
        }
      }
    }
  }

  return dominanceTree;
};
/**
 * Generates and returns a Post Dominated Tree (CDG) for
 * a given Control Flow Graph (CFG).
 *
 * @param {ControlFlowGraph} cfg - the control flow graph the PDT is generated from.
 * @returns {PostDominatorTree} - the generated post dominated tree.
 */


const computePostDominatedTree = cfg => {
  const reversedCFG = Object(_graph_utils__WEBPACK_IMPORTED_MODULE_0__["reverseGraph"])(cfg);

  const dominanceMap = _getDominators(reversedCFG);

  const dominanceTree = _buildDominanceTree(reversedCFG, dominanceMap);

  const start = new _graph_utils__WEBPACK_IMPORTED_MODULE_0__["GraphNode"]('start');
  dominanceTree.addNode(start);
  dominanceTree.addEdge(dominanceTree.entry(), start);
  return dominanceTree;
};



/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: countAllBlocks, getAllBlocks, getBranchStart, getElseBranchStart, Extract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countAllBlocks", function() { return countAllBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllBlocks", function() { return getAllBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBranchStart", function() { return getBranchStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElseBranchStart", function() { return getElseBranchStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Extract", function() { return Extract; });
const getAllBlocks = targets => targets.reduce((acc, target) => Object.assign(acc, target.blocks._blocks), {});

const countAllBlocks = targets => targets.reduce((acc, target) => acc + Object.keys(target.blocks._blocks).length, 0);

const getBranchStart = statement => {
  if (statement.inputs.hasOwnProperty('SUBSTACK')) {
    return statement.inputs.SUBSTACK.block;
  }
};

const getElseBranchStart = statement => {
  if (statement.inputs.hasOwnProperty('SUBSTACK2')) {
    return statement.inputs.SUBSTACK2.block;
  }
};

const Extract = {
  broadcastForBlock: block => block.fields.BROADCAST_OPTION.value.toLowerCase(),
  broadcastForStatement: (blocks, statement) => Extract.broadcastForBlock(blocks.get(statement.inputs.BROADCAST_INPUT.block)),
  backdropStartTarget: statement => statement.fields.BACKDROP.value,
  backdropChangeTarget: (blocks, statement) => blocks.get(statement.inputs.BACKDROP.block).fields.BACKDROP.value,
  cloneCreateTarget: (blocks, statement) => blocks.get(statement.inputs.CLONE_OPTION.block).fields.CLONE_OPTION.value,
  cloneSendTarget: block => block.target,
  direction: (blocks, statement) => parseInt(blocks.get(statement.inputs.DIRECTION.block).fields.NUM.value, 10),
  xPosition: (blocks, statement) => parseInt(blocks.get(statement.inputs.X.block).fields.NUM.value, 10),
  yPosition: (blocks, statement) => parseInt(blocks.get(statement.inputs.Y.block).fields.NUM.value, 10),
  sizeValue: (blocks, statement) => parseInt(blocks.get(statement.inputs.SIZE.block).fields.NUM.value, 10),
  costume: (blocks, statement) => blocks.get(statement.inputs.COSTUME.block).fields.COSTUME.value,
  backdrop: (blocks, statement) => blocks.get(statement.inputs.BACKDROP.block).fields.BACKDROP.value,
  variableValue: (blocks, statement) => blocks.get(statement.inputs.VALUE.block).fields.TEXT.value,
  stopOption: block => block.fields.STOP_OPTION.value,
  clickedSprite: block => block.target,
  clickedKey: block => block.fields.KEY_OPTION.value
};


/***/ })

/******/ });
//# sourceMappingURL=scratch-analysis.js.map