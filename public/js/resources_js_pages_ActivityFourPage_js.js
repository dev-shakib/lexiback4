"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_ActivityFourPage_js"],{

/***/ "./resources/js/pages/ActivityFourPage.js":
/*!************************************************!*\
  !*** ./resources/js/pages/ActivityFourPage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_img_fire_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/fire.png */ "./resources/js/assets/img/fire.png");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Page */ "./resources/js/components/Page.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/switch/src/Switch.js");
/* harmony import */ var _assets_img_activity_timer_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/activity/timer.svg */ "./resources/js/assets/img/activity/timer.svg");
/* harmony import */ var _assets_img_activity_img_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/activity/img.svg */ "./resources/js/assets/img/activity/img.svg");
/* harmony import */ var _assets_img_activity_man_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/img/activity/man.svg */ "./resources/js/assets/img/activity/man.svg");
/* harmony import */ var _assets_img_activity_soundon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/img/activity/soundon.svg */ "./resources/js/assets/img/activity/soundon.svg");
/* harmony import */ var _assets_img_activity_refresh_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/img/activity/refresh.svg */ "./resources/js/assets/img/activity/refresh.svg");
/* harmony import */ var _assets_img_activity_magplus_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/img/activity/magplus.svg */ "./resources/js/assets/img/activity/magplus.svg");
/* harmony import */ var _assets_img_activity_magminus_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/img/activity/magminus.svg */ "./resources/js/assets/img/activity/magminus.svg");
/* harmony import */ var _assets_img_activity_pausesound_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/img/activity/pausesound.svg */ "./resources/js/assets/img/activity/pausesound.svg");
/* harmony import */ var _assets_img_activity_refreshsound_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/img/activity/refreshsound.svg */ "./resources/js/assets/img/activity/refreshsound.svg");
/* harmony import */ var _assets_img_activity_aboutsound_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/img/activity/aboutsound.svg */ "./resources/js/assets/img/activity/aboutsound.svg");
/* harmony import */ var _assets_img_activity_flagsound_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/img/activity/flagsound.svg */ "./resources/js/assets/img/activity/flagsound.svg");
/* harmony import */ var _assets_img_activity_checked_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/img/activity/checked.png */ "./resources/js/assets/img/activity/checked.png");
/* harmony import */ var _assets_img_activity_opps_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/img/activity/opps.png */ "./resources/js/assets/img/activity/opps.png");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Card.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/InputGroup.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Input.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/InputGroupAddon.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/FormGroup/FormGroup.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }























var ActivityFourPage = function ActivityFourPage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      checkedA = _useState2[0],
      setCheckedA = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      correctB = _useState4[0],
      setCorrectB = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      correctA = _useState6[0],
      setCorrectA = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      resultClick = _useState8[0],
      setResultClick = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      resultAgain = _useState10[0],
      setResultAgain = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState12 = _slicedToArray(_useState11, 2),
      showImg = _useState12[0],
      setshowImg = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState14 = _slicedToArray(_useState13, 2),
      pBtn = _useState14[0],
      setPBtn = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    display: 'none'
  }),
      _useState16 = _slicedToArray(_useState15, 2),
      graphShow = _useState16[0],
      setGraphShow = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState18 = _slicedToArray(_useState17, 2),
      isOpenUserCardPopover = _useState18[0],
      setIsOpenUserCardPopover = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState20 = _slicedToArray(_useState19, 2),
      modal = _useState20[0],
      setModal = _useState20[1];

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState22 = _slicedToArray(_useState21, 2),
      wordToolTip = _useState22[0],
      setWordToolTip = _useState22[1];

  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState24 = _slicedToArray(_useState23, 2),
      doneClick = _useState24[0],
      setDoneClick = _useState24[1];

  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('none'),
      _useState26 = _slicedToArray(_useState25, 2),
      doneClickA = _useState26[0],
      setDoneClickA = _useState26[1];

  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState28 = _slicedToArray(_useState27, 2),
      threeBtnAgain = _useState28[0],
      setThreeBtnAgain = _useState28[1];

  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('none'),
      _useState30 = _slicedToArray(_useState29, 2),
      wordToolTipFour = _useState30[0],
      setWordToolTipFour = _useState30[1];

  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('#018FF7'),
      _useState32 = _slicedToArray(_useState31, 2),
      threeBtnBack = _useState32[0],
      setThreeBtnBack = _useState32[1];

  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('rgba(255, 255, 255, 0.08)'),
      _useState34 = _slicedToArray(_useState33, 2),
      fourBtnBg = _useState34[0],
      setFourBtnBg = _useState34[1];

  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState36 = _slicedToArray(_useState35, 2),
      startValClick = _useState36[0],
      setStartValClick = _useState36[1];

  var handleClick = function handleClick() {
    setCheckedA(!checkedA);
  };

  var correctClick = function correctClick() {
    setshowImg('none');
    setGraphShow({});
    setPBtn('90px');
    setCorrectA('true');
    setDoneClick('none');
    setDoneClickA('');
  };

  var correctBClick = function correctBClick() {
    setCorrectB('true');
  };

  var seeResultClick = function seeResultClick() {
    setResultClick('true');
  };

  var resPlayAgainClick = function resPlayAgainClick() {
    setResultAgain('true');
  };

  var upButtonStyle = {
    width: '100px',
    position: 'absolute',
    background: '#E94F2E',
    textAlign: 'center',
    fontFamily: 'Gilroy-SemiBold',
    fontSize: '16px',
    borderWidth: '0px'
  };
  var wordButtonStyle = {
    background: 'rgba(255, 255, 255, 0.08)',
    borderColor: ' #1EB9728A',
    color: 'rgba(255, 255, 255, 0.08)',
    fontFamily: 'Gilroy-Bold',
    width: '45px',
    height: '45px'
  };

  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    namef: [{
      name: 'Fat'
    }, {
      name: 'Fat'
    }, {
      name: 'Fat'
    }, {
      name: 'Fat'
    }, {
      name: 'Fat'
    }, {
      name: 'Fat'
    }, {
      name: 'Fat'
    }, {
      name: 'Fat'
    }],
    names: [{
      name: 'cat'
    }, {
      name: 'cat'
    }, {
      name: 'Fat'
    }, {
      name: 'Fat'
    }, {
      name: 'Fat'
    }, {
      name: 'Fat'
    }, {
      name: 'Fat'
    }, {
      name: 'Fat'
    }],
    named: [{
      name: 'Dat'
    }, {
      name: 'Dat'
    }, {
      name: 'Fat'
    }, {
      name: 'Fat'
    }, {
      name: 'Fat'
    }, {
      name: 'Fat'
    }, {
      name: 'Fat'
    }, {
      name: 'Fat'
    }],
    nameh: [{
      name: 'Rat'
    }, {
      name: 'Rat'
    }, {
      name: 'Rat'
    }, {
      name: 'Fat'
    }, {
      name: 'Fat'
    }, {
      name: 'Fat'
    }, {
      name: 'Fat'
    }, {
      name: 'Fat'
    }]
  }),
      _useState38 = _slicedToArray(_useState37, 2),
      wordButton = _useState38[0],
      setWordButton = _useState38[1];

  var toggle = function toggle() {
    setModal(!modal);
  };

  var startClick = function startClick() {
    setStartValClick(true);
    setThreeBtnBack('rgba(255, 255, 255, 0.08)');
    setWordToolTip('none');
    setWordToolTipFour('none');
  };

  var showWords = function showWords() {
    setThreeBtnAgain(!threeBtnAgain);

    if (!threeBtnAgain) {
      setWordButton({
        namef: [{
          name: 'Dat'
        }, {
          name: 'Dat'
        }, {
          name: 'Dat'
        }, {
          name: 'Dat'
        }, {
          name: 'Fat'
        }, {
          name: 'Fat'
        }, {
          name: 'Fat'
        }, {
          name: 'Fat'
        }],
        names: [{
          name: 'Eat'
        }, {
          name: 'Eat'
        }, {
          name: 'Eat'
        }, {
          name: 'Fat'
        }, {
          name: 'Fat'
        }, {
          name: 'Fat'
        }, {
          name: 'Fat'
        }, {
          name: 'Fat'
        }],
        named: [{
          name: 'Dat'
        }, {
          name: 'Dat'
        }, {
          name: 'Fat'
        }, {
          name: 'Fat'
        }, {
          name: 'Fat'
        }, {
          name: 'Fat'
        }, {
          name: 'Fat'
        }, {
          name: 'Fat'
        }],
        nameh: [{
          name: 'Rat'
        }, {
          name: 'Rat'
        }, {
          name: 'Rat'
        }, {
          name: 'Fat'
        }, {
          name: 'Fat'
        }, {
          name: 'Fat'
        }, {
          name: 'Fat'
        }, {
          name: 'Fat'
        }]
      });
      setWordToolTip('');
      setWordToolTipFour('none');
      setThreeBtnBack('#018FF7');
      setFourBtnBg('rgba(255, 255, 255, 0.08)');
    } else {
      setWordToolTip('none');
      setThreeBtnBack('rgba(255, 255, 255, 0.08)');
    }
  };

  var showWordsFour = function showWordsFour() {
    setWordButton({
      namef: [{
        name: 'TADE'
      }, {
        name: 'TADE'
      }, {
        name: 'DatE'
      }, {
        name: 'DatE'
      }, {
        name: 'FatE'
      }, {
        name: 'FatE'
      }, {
        name: 'FatE'
      }, {
        name: 'FatE'
      }],
      names: [{
        name: 'TADE'
      }, {
        name: 'TADE'
      }, {
        name: 'TADE'
      }, {
        name: 'FatE'
      }, {
        name: 'FatE'
      }, {
        name: 'FatE'
      }, {
        name: 'FatE'
      }, {
        name: 'FatE'
      }],
      named: [{
        name: 'TADE'
      }, {
        name: 'TADE'
      }, {
        name: 'TADE'
      }, {
        name: 'FatE'
      }, {
        name: 'FatE'
      }, {
        name: 'FatE'
      }, {
        name: 'FatE'
      }, {
        name: 'FatE'
      }],
      nameh: [{
        name: 'TADE'
      }, {
        name: 'TADE'
      }, {
        name: 'TADE'
      }, {
        name: 'FatE'
      }, {
        name: 'FatE'
      }, {
        name: 'FatE'
      }, {
        name: 'FatE'
      }, {
        name: 'FatE'
      }]
    });
    setWordToolTipFour('');
    setWordToolTip('none');
    setFourBtnBg('#018FF7');
    setThreeBtnBack('rgba(255, 255, 255, 0.08)');
  };

  var tootipStyle = {
    position: 'absolute',
    width: '38.23px',
    height: '35.9px',
    left: '68.55px',
    top: '67.5px',

    /* Blue/2 */
    background: '#018FF7',
    borderRadius: '6px 0px 0px 20.2959px',
    transform: 'matrix(0.71, 0.71, -0.7, 0.71, 0, 0)'
  };
  var tootipStyleAgain = {
    position: 'absolute',
    width: '38.23px',
    height: '35.9px',
    left: '16.55px',
    top: '67.5px',

    /* Blue/2 */
    background: '#018FF7',
    borderRadius: '6px 0px 0px 20.2959px',
    transform: 'matrix(0.71, 0.71, -0.7, 0.71, 0, 0)'
  };
  var tootipStyleFour = {
    position: 'absolute',
    width: '38.23px',
    height: '35.9px',
    left: '117.55px',
    top: '67.5px',

    /* Blue/2 */
    background: '#018FF7',
    borderRadius: '6px 0px 0px 20.2959px',
    transform: 'matrix(0.71, 0.71, -0.7, 0.71, 0, 0)'
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_components_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "mt-0",
    style: {
      background: '#172231'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
      className: "pl-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
        className: "pt-3",
        children: startValClick ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
          className: "mr-2 mt-2 ml-0 w-100",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
            style: {
              color: 'white',
              fontFamily: 'Gilroy-Bold',
              fontSize: '16px',
              display: doneClickA
            },
            children: "Activity04"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
            onClick: showWords,
            style: {
              background: threeBtnBack,
              borderColor: 'rgba(255, 255, 255, 0.1)',
              display: doneClick
            },
            children: "3"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            style: {
              display: wordToolTip
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
              style: tootipStyleAgain
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
            className: "flex-row justify-content-center align-items-center ml-0 mt-5 mb-4 mr-4",
            style: {
              height: '400px',
              background: '#018FF7',
              borderRadius: '5px',
              position: 'absolute',
              width: 'calc(100vw*0.783)',
              zIndex: 1,
              display: wordToolTip
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
              className: "p-3",
              children: wordButton.namef.map(function (_ref) {
                var name = _ref.name;
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
                  className: "pl-2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
                    style: {
                      background: 'rgba(255, 255, 255, 0.08)',
                      width: '110px',
                      borderColor: 'rgba(255, 255, 255, 0.1)'
                    },
                    children: name
                  })
                });
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
              className: "p-3",
              children: wordButton.names.map(function (_ref2) {
                var name = _ref2.name;
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
                  className: "pl-2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
                    style: {
                      background: 'rgba(255, 255, 255, 0.08)',
                      width: '110px',
                      borderColor: 'rgba(255, 255, 255, 0.1)'
                    },
                    children: name
                  })
                });
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
              className: "p-3",
              children: wordButton.named.map(function (_ref3) {
                var name = _ref3.name;
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
                  className: "pl-2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
                    style: {
                      background: 'rgba(255, 255, 255, 0.08)',
                      width: '110px',
                      borderColor: 'rgba(255, 255, 255, 0.1)'
                    },
                    children: name
                  })
                });
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
              className: "p-3",
              children: wordButton.nameh.map(function (_ref4) {
                var name = _ref4.name;
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
                  className: "pl-2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
                    style: {
                      background: 'rgba(255, 255, 255, 0.08)',
                      width: '110px',
                      borderColor: 'rgba(255, 255, 255, 0.1)'
                    },
                    children: name
                  })
                });
              })
            })]
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
          className: "pl-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: "mr-2 mt-2 ml-2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
              style: {
                background: 'rgba(255, 255, 255, 0.08)',
                borderColor: 'rgba(255, 255, 255, 0.1)'
              },
              children: "2"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
            className: "mr-2 mt-2 ml-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
              onClick: showWords,
              style: {
                background: threeBtnBack,
                borderColor: 'rgba(255, 255, 255, 0.1)'
              },
              children: "3"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
              style: {
                display: wordToolTip
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
                style: tootipStyle
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: "mr-2 mt-2 ml-2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
              onClick: showWordsFour,
              style: {
                background: fourBtnBg,
                borderColor: 'rgba(255, 255, 255, 0.1)'
              },
              children: "4"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            style: {
              display: wordToolTipFour
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
              style: tootipStyleFour
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: "mr-2 mt-2 ml-2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
              style: {
                background: 'rgba(255, 255, 255, 0.08)',
                borderColor: 'rgba(255, 255, 255, 0.1)'
              },
              children: "5"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: "mr-2 mt-2 ml-2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
              style: {
                background: 'rgba(255, 255, 255, 0.08)',
                borderColor: 'rgba(255, 255, 255, 0.1)'
              },
              children: "6"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: "mr-2 mt-2 ml-2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
              style: {
                background: 'rgba(255, 255, 255, 0.08)',
                borderColor: 'rgba(255, 255, 255, 0.1)'
              },
              children: "7"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: "mr-2 mt-2 ml-2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
              onClick: toggle,
              style: {
                background: 'rgba(255, 255, 255, 0.08)',
                borderColor: 'rgba(255, 255, 255, 0.1)'
              },
              children: "8"
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
        className: "pt-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
          className: "flex-row justify-content-end align-items-center mr-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
              style: {
                color: 'white',
                fontFamily: 'Gilroy-Medium',
                fontSize: '16px'
              },
              children: "Autoplay"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: "mt-2 ml-1",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(evergreen_ui__WEBPACK_IMPORTED_MODULE_20__["default"], {
              onChange: handleClick,
              checked: checkedA,
              name: "checkedA"
            })
          })]
        })
      })]
    }), startValClick ? !correctB ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
      className: "pl-3",
      style: {
        background: '#172231'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
        className: "col-md-9",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
          className: "flex-row justify-content-center  ml-0 mr-0 border border-1",
          style: {
            height: '420px',
            background: 'rgba(255, 255, 255, 0.08)',
            borderColor: 'gray',
            borderRadius: '15px 0px 0px 0px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
            className: "pr-0 pb-0 mt-5 ",
            md: 3,
            sm: 6,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
              style: {
                position: 'absolute',
                bottom: '14px',
                background: 'rgba(255, 255, 255, 0.08)',
                borderColor: 'rgba(255, 255, 255, 0.1)'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_assets_img_activity_img_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {})
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
            md: 6,
            className: "flex-row justify-content-center mt-5 mb-0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
              classNam: "flex-row justify-content-center mt-4 mb-4 ml-4 mr-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                className: "ml-5 flex-row justify-content-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
                  className: "ml-5 flex-row justify-content-center",
                  style: graphShow,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("span", {
                    style: {
                      fontFamily: 'Gilroy-Regular',
                      color: '#FFFFFF'
                    },
                    children: ["See the Graphics again?", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
                      style: {
                        color: '#1EB972'
                      },
                      children: "Click here"
                    })]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                md: 12,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
                  style: {
                    display: showImg,
                    height: '250px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '9px!important'
                  },
                  className: "flex-row justify-content-center align-items-center rounded",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("img", {
                      style: {
                        width: '100px',
                        height: '100px'
                      },
                      src: _assets_img_fire_png__WEBPACK_IMPORTED_MODULE_0__["default"]
                    })
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
              className: "mt-2 ml-1",
              style: {
                paddingTop: pBtn,
                fontSize: '20px',
                fontFamily: 'Gilroy-Bold'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                md: 3,
                xs: 12,
                className: "p-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
                  style: wordButtonStyle,
                  children: "R"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                md: 3,
                className: "d-flex justify-content-center p-0 ",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
                  className: "border-0 text-white",
                  style: wordButtonStyle,
                  children: "I"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                md: 3,
                className: "d-flex justify-content-center p-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
                  className: "border-0",
                  style: wordButtonStyle,
                  children: "E"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                md: 3,
                className: "d-flex justify-content-center pl-5 text-white",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
                  className: "border-0 text-white",
                  style: wordButtonStyle,
                  children: "E"
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
            className: "d-flex justify-content-end ",
            md: 3,
            sm: 6,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
              className: "justify-content-end align-items-end mr-3 mb-3",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
                style: {
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderColor: 'rgba(255, 255, 255, 0.1)'
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_assets_img_activity_man_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {})
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
          className: "flex-row justify-content-center align-items-center border-left border-bottom",
          style: {
            height: '85px',
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '0px 0px 0px 15px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
            className: "ml-3",
            style: {
              position: 'absolute',
              left: '0px'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
              style: {
                background: 'rgba(255, 255, 255, 0.08)',
                borderColor: 'rgba(255, 255, 255, 0.1)'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_assets_img_activity_soundon_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
              style: {
                background: 'rgba(255, 255, 255, 0.08)',
                borderColor: 'rgba(255, 255, 255, 0.1)'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_assets_img_activity_refresh_svg__WEBPACK_IMPORTED_MODULE_7__["default"], {})
            })]
          }), !correctA ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: "mr-5",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
              onClick: correctClick,
              style: {
                background: '#1EB972',
                borderWidth: '0px',
                width: '200px',
                fontFamily: 'Gilroy-SemiBold'
              },
              children: "Done"
            })
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
              onClick: correctBClick,
              style: {
                background: '#1EB972',
                borderWidth: '0px',
                width: '200px',
                fontFamily: 'Gilroy-SemiBold'
              },
              children: "Done"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
            className: "mr-5",
            style: {
              position: 'absolute',
              right: '0px'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
              style: {
                background: 'rgba(255, 255, 255, 0.08)',
                borderColor: 'rgba(255, 255, 255, 0.1)'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_assets_img_activity_magplus_svg__WEBPACK_IMPORTED_MODULE_8__["default"], {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
              style: {
                background: 'rgba(255, 255, 255, 0.08)',
                borderColor: 'rgba(255, 255, 255, 0.1)'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_assets_img_activity_magminus_svg__WEBPACK_IMPORTED_MODULE_9__["default"], {})
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
        className: "mb-3",
        md: 3,
        style: {
          marginLeft: '-30px',
          fontFamily: 'Gilroy-SemiBold',
          fontSize: '16px',
          color: 'rgba(255, 255, 255, 0.54)'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
          className: "flex-row ml-0  border border-left-0 border-bottom-0",
          style: {
            height: '130px',
            background: 'rgba(255, 255, 255, 0.08)',
            borderColor: 'gray',
            borderRadius: '0px 15px 0px 0px'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_22__["default"], {
            className: "mt-1",
            style: {
              position: 'absolute',
              left: '0px'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
              children: "Time Duration"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
              className: "mt-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_24__["default"], {
                style: {
                  fontFamily: 'Gilroy-Black',
                  fontSize: '24px',
                  color: '#1EB972',
                  borderWidth: '0px'
                },
                value: "00:10:49"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
                style: {
                  background: 'white',
                  borderRadius: '0px 3px 3px 0px',
                  borderWidth: '0px'
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_assets_img_activity_timer_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {})
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_25__["default"], {
                addonType: "prepend"
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
          className: "flex-row ml-0 rounded-0 border border-left-0 border-top-0",
          style: {
            borderColor: 'gray',
            height: '80px',
            background: 'rgba(255, 255, 255, 0.08)'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_22__["default"], {
            className: "mt-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
              style: upButtonStyle,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("svg", {
                width: "11",
                height: "9",
                viewBox: "0 0 22 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("path", {
                  d: "M9.46424 18C8.2245 18 7.06424 17.7656 5.98344 17.2967C4.90265 16.8278 3.95298 16.1801 3.13444 15.3536C2.31589 14.5272 1.67219 13.5735 1.20331 12.4927C0.734437 11.4119 0.5 10.2437 0.5 8.98808C0.5 7.74834 0.734437 6.58808 1.20331 5.50729C1.67219 4.42649 2.31589 3.47285 3.13444 2.64636C3.95298 1.81987 4.90662 1.17219 5.99536 0.703311C7.08411 0.234437 8.25629 0 9.51192 0C9.92517 0 10.3464 0.0317882 10.7755 0.0953644C11.2046 0.158941 11.6417 0.254305 12.0868 0.381457V2.31258C11.6735 2.18543 11.2483 2.07815 10.8113 1.99073C10.3742 1.90331 9.93311 1.8596 9.48808 1.8596C7.51722 1.8596 5.83245 2.55497 4.43377 3.9457C3.0351 5.33642 2.33576 7.01722 2.33576 8.98808C2.33576 10.9748 3.03113 12.6636 4.42185 14.0543C5.81258 15.445 7.49338 16.1404 9.46424 16.1404C11.4669 16.1404 13.1636 15.445 14.5543 14.0543C15.945 12.6636 16.6404 10.9828 16.6404 9.01192C16.6404 7.04106 15.7105 5.26878 15.6152 5.09007C15.4721 4.79196 15.2337 4.31514 15.2337 4.19603H17.141C17.141 4.31514 17.3794 4.79196 17.4629 5.01854C17.6178 5.26878 18.4762 6.93765 18.4762 9.01192C18.4762 10.2517 18.2417 11.4159 17.7728 12.5046C17.304 13.5934 16.6603 14.547 15.8417 15.3656C15.0232 16.1841 14.0656 16.8278 12.9689 17.2967C11.8722 17.7656 10.704 18 9.46424 18ZM16.545 2.93245H13.5172V1.21589H16.545L18.2616 1.2158L21.2656 1.21589V2.93245H18.2616H16.545ZM12.1583 13.1126L8.48675 9.44106V4.19603H10.2033V8.74967L13.3742 11.9205L12.1583 13.1126Z",
                  fill: "white"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
                className: "ml-4",
                children: "1s"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
              style: {
                width: '100px',
                position: 'absolute',
                right: '10px',
                background: '#1EB972',
                textAlign: 'left',
                fontFamily: 'Gilroy-SemiBold',
                fontSize: '16px',
                borderWidth: '0px'
              },
              className: "ml-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("svg", {
                width: "11",
                height: "9",
                viewBox: "0 0 22 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("path", {
                  d: "M9.46424 18C8.2245 18 7.06424 17.7656 5.98344 17.2967C4.90265 16.8278 3.95298 16.1801 3.13444 15.3536C2.31589 14.5272 1.67219 13.5735 1.20331 12.4927C0.734437 11.4119 0.5 10.2437 0.5 8.98808C0.5 7.74834 0.734437 6.58808 1.20331 5.50729C1.67219 4.42649 2.31589 3.47285 3.13444 2.64636C3.95298 1.81987 4.90662 1.17219 5.99536 0.703311C7.08411 0.234437 8.25629 0 9.51192 0C9.92517 0 10.3464 0.0317882 10.7755 0.0953644C11.2046 0.158941 11.6417 0.254305 12.0868 0.381457V2.31258C11.6735 2.18543 11.2483 2.07815 10.8113 1.99073C10.3742 1.90331 9.93311 1.8596 9.48808 1.8596C7.51722 1.8596 5.83245 2.55497 4.43377 3.9457C3.0351 5.33642 2.33576 7.01722 2.33576 8.98808C2.33576 10.9748 3.03113 12.6636 4.42185 14.0543C5.81258 15.445 7.49338 16.1404 9.46424 16.1404C11.4669 16.1404 13.1636 15.445 14.5543 14.0543C15.945 12.6636 16.6404 10.9828 16.6404 9.01192C16.6404 7.04106 15.7105 5.26878 15.6152 5.09007C15.4721 4.79196 15.2337 4.31514 15.2337 4.19603H17.141C17.141 4.31514 17.3794 4.79196 17.4629 5.01854C17.6178 5.26878 18.4762 6.93765 18.4762 9.01192C18.4762 10.2517 18.2417 11.4159 17.7728 12.5046C17.304 13.5934 16.6603 14.547 15.8417 15.3656C15.0232 16.1841 14.0656 16.8278 12.9689 17.2967C11.8722 17.7656 10.704 18 9.46424 18ZM16.545 2.93245H13.5172V1.21589H16.545L18.2616 1.2158L21.2656 1.21589V2.93245H18.2616H16.545ZM12.1583 13.1126L8.48675 9.44106V4.19603H10.2033V8.74967L13.3742 11.9205L12.1583 13.1126Z",
                  fill: "white"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
                className: "ml-4",
                children: "1s"
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
          className: "flex-row ml-0 rounded-0 border border-left-0 border-top-0 rounded-right",
          style: {
            borderColor: 'gray',
            height: '175px',
            background: 'rgba(255, 255, 255, 0.08)'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_22__["default"], {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
                  className: "mt-2",
                  children: "Score"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_24__["default"], {
                  className: "mt-4",
                  style: {
                    background: '#F1B02D',
                    opacity: '0.5',
                    borderRadius: '10px',
                    fontFamily: 'Gilroy-Black',
                    fontSize: '34px'
                  },
                  value: "0.0"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("svg", {
                  width: "14",
                  height: "18",
                  viewBox: "0 0 14 18",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("path", {
                    d: "M6.64375 0.75C7.86875 0.75 8.91562 1.17187 9.78437 2.01562C10.6531 2.85937 11.0875 3.9 11.0875 5.1375C11.0875 5.8125 10.9531 6.43125 10.6844 6.99375C10.4156 7.55625 10.0625 8.04375 9.625 8.45625H8.725V7.48125C9.05 7.18125 9.3 6.82812 9.475 6.42187C9.65 6.01562 9.7375 5.5875 9.7375 5.1375C9.7375 4.2875 9.43437 3.56875 8.82812 2.98125C8.22188 2.39375 7.4875 2.1 6.625 2.1C5.775 2.1 5.04688 2.39375 4.44063 2.98125C3.83438 3.56875 3.53125 4.2875 3.53125 5.1375C3.53125 5.5875 3.6125 6.0125 3.775 6.4125C3.9375 6.8125 4.19375 7.15625 4.54375 7.44375V9.09375C3.79375 8.70625 3.2125 8.15625 2.8 7.44375C2.3875 6.73125 2.18125 5.9625 2.18125 5.1375C2.18125 3.9 2.61563 2.85937 3.48438 2.01562C4.35313 1.17187 5.40625 0.75 6.64375 0.75ZM5.93125 17.1C5.68125 17.1 5.45 17.0562 5.2375 16.9687C5.025 16.8812 4.8375 16.7562 4.675 16.5937L0.625 12.5437L1.9 11.25C2.0875 11.0625 2.31563 10.925 2.58438 10.8375C2.85313 10.75 3.125 10.7375 3.4 10.8L4.54375 11.0812V5.175C4.54375 4.6 4.74375 4.10625 5.14375 3.69375C5.54375 3.28125 6.0375 3.075 6.625 3.075C7.2125 3.075 7.70937 3.28125 8.11562 3.69375C8.52187 4.10625 8.725 4.6 8.725 5.175V8.25H9.11875C9.18125 8.25 9.24063 8.26562 9.29688 8.29687C9.35312 8.32812 9.425 8.35625 9.5125 8.38125L12.3812 9.76875C12.6687 9.91875 12.8844 10.1406 13.0281 10.4344C13.1719 10.7281 13.225 11.0375 13.1875 11.3625L12.475 15.675C12.4 16.0875 12.2 16.4281 11.875 16.6969C11.55 16.9656 11.175 17.1 10.75 17.1H5.93125ZM5.78125 15.75H11.0687L11.8937 11.0437L8.425 9.31875H7.375V5.175C7.375 4.95 7.30625 4.76875 7.16875 4.63125C7.03125 4.49375 6.85625 4.425 6.64375 4.425C6.40625 4.425 6.22187 4.49375 6.09062 4.63125C5.95937 4.76875 5.89375 4.95 5.89375 5.175V12.7125L2.96875 12.075L2.5375 12.5062L5.78125 15.75ZM11.0687 15.75H5.78125H5.89375C5.89375 15.75 5.95937 15.75 6.09062 15.75C6.22187 15.75 6.4 15.75 6.625 15.75C6.8625 15.75 7.05 15.75 7.1875 15.75C7.325 15.75 7.39375 15.75 7.39375 15.75H8.425H11.0687Z",
                    fill: "white",
                    "fill-opacity": "0.54"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
                  className: "mt-2",
                  children: "Tops"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_24__["default"], {
                  className: "mt-4",
                  style: {
                    background: '#018FF7',
                    opacity: '0.5',
                    borderRadius: '10px',
                    fontFamily: 'Gilroy-Black',
                    fontSize: '34px'
                  },
                  value: "00"
                })]
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
          className: "border-top-0",
          style: {
            borderColor: 'gray',
            height: '120px',
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '0px 0px 15px 0px'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_22__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
              className: "",
              children: "Actions"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
              className: "",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                md: 3,
                sm: 6,
                xs: 12,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
                  style: {
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderColor: 'rgba(255, 255, 255, 0.1)'
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_assets_img_activity_pausesound_svg__WEBPACK_IMPORTED_MODULE_10__["default"], {})
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                md: 3,
                sm: 6,
                xs: 12,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
                  style: {
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderColor: 'rgba(255, 255, 255, 0.1)'
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_assets_img_activity_refreshsound_svg__WEBPACK_IMPORTED_MODULE_11__["default"], {})
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                md: 3,
                sm: 6,
                xs: 12,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
                  style: {
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderColor: 'rgba(255, 255, 255, 0.1)'
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_assets_img_activity_aboutsound_svg__WEBPACK_IMPORTED_MODULE_12__["default"], {})
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                md: 3,
                sm: 6,
                xs: 12,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
                  style: {
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderColor: 'rgba(255, 255, 255, 0.1)'
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_assets_img_activity_flagsound_svg__WEBPACK_IMPORTED_MODULE_13__["default"], {})
                })
              })]
            })]
          })
        })]
      })]
    }) : !resultClick ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      className: "pl-4 pr-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
        className: "d-flex justify-content-center align-items-center m-0",
        style: {
          height: '420px',
          background: 'rgba(255, 255, 255, 0.08)',
          border: '2px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '15px 15px 0px 0px',
          textAlign: 'center'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("img", {
            width: "75px",
            height: "75px",
            src: _assets_img_activity_checked_png__WEBPACK_IMPORTED_MODULE_14__["default"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: "pt-3",
            style: {
              fontFamily: 'Gilroy-Bold',
              fontSize: '24px',
              color: '#FFFFFF'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
              children: "Congratulations"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: "pt-3",
            style: {
              fontFamily: 'Gilroy-Regular',
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.54)'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("span", {
              children: ["You choose the right word. In the results you will see \u2018Score\u2019, \u2018Tapping Numbers\u2019,", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("br", {}), " & \u2018Duration\u2019. You can play again though."]
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
        className: "ml-0 mr-0",
        style: {
          height: '80px',
          background: 'rgba(255, 255, 255, 0.08)',
          border: '2px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '0px 0px 15px 15px',
          textAlign: 'center'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
          className: "d-flex justify-content-end pt-3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
            style: {
              background: '#1EB972',
              borderWidth: '0px',
              width: '200px',
              fontFamily: 'Gilroy-SemiBold',
              borderRadius: '10px'
            },
            onClick: seeResultClick,
            children: "See Result"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
          className: "d-flex justify-content-start pt-3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
            style: {
              background: 'rgba(30, 185, 114, 0.05)',
              border: '1.5px solid rgba(30, 185, 114, 0.54)',
              width: '200px',
              fontFamily: 'Gilroy-SemiBold',
              borderRadius: '10px'
            },
            children: "Play Again"
          })
        })]
      })]
    }) : !resultAgain ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
        className: "d-flex justify-content-center align-items-end ",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
          style: {
            width: '462px',
            height: '453px',
            background: 'rgba(255, 255, 255, 0.9)',
            backgroundBlendMode: 'luminosity',
            backdropFilter: 'blur(81.5485px)',
            borderRadius: '11px',
            marginTop: '121px'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_26__["default"], {
            className: "p-5",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
              style: {
                color: '#232526',
                fontFamily: 'Gilroy-Bold',
                fontSize: '20px',
                textAlign: 'center'
              },
              children: "Results"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
              className: "mt-3 p-2 flex-row",
              style: {
                color: '#000000',
                border: '1px solid rgba(0, 0, 0, 0.15)',
                borderRadius: '10px',
                background: '#FFFFFF',
                backgroundBlendMode: 'luminosity',
                backdropFilter: 'blur(81.5485px)'
              },
              children: ["Score", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
                style: {
                  borderWidth: '0px',
                  "float": 'right',
                  width: '120px',
                  background: '#1EB972'
                },
                children: "100.5"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
              className: "mt-3 p-2 flex-row",
              style: {
                color: '#000000',
                border: '1px solid rgba(0, 0, 0, 0.15)',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.1)',
                backgroundBlendMode: 'luminosity',
                backdropFilter: 'blur(81.5485px)'
              },
              children: ["Number of Tap", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
                style: {
                  borderWidth: '0px',
                  "float": 'right',
                  width: '120px',
                  background: '#1EB972'
                },
                children: "52"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
              className: "mt-3 p-2 flex-row",
              style: {
                color: '#000000',
                border: '1px solid rgba(0, 0, 0, 0.15)',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.9)',
                backgroundBlendMode: 'luminosity',
                backdropFilter: 'blur(81.5485px)'
              },
              children: ["Duration", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
                style: {
                  borderWidth: '0px',
                  "float": 'right',
                  width: '120px',
                  background: '#1EB972'
                },
                children: "5m 23s"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
              className: "mt-3 p-2 flex-row",
              style: {
                color: '#000000',
                border: '1px solid rgba(0, 0, 0, 0.15)',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.9)',
                backgroundBlendMode: 'luminosity',
                backdropFilter: 'blur(81.5485px)',
                fontFamily: 'Gilroy-SemiBold'
              },
              children: ["Word you build", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
                style: {
                  borderWidth: '0px',
                  "float": 'right',
                  width: '120px',
                  background: '#1EB972'
                },
                children: "126"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
              className: "mt-4 border-0",
              style: {
                background: '#1EB972',
                borderRadius: '10px',
                fontFamily: 'Gilroy-SemiBold',
                fontSize: '16px'
              },
              onClick: resPlayAgainClick,
              children: "Play Again"
            })]
          })
        })
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      className: "pl-4 pr-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
        className: "d-flex justify-content-center align-items-center m-0",
        style: {
          height: '420px',
          background: 'rgba(255, 255, 255, 0.08)',
          border: '2px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '15px 15px 0px 0px',
          textAlign: 'center'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("img", {
            width: "75px",
            height: "75px",
            src: _assets_img_activity_opps_png__WEBPACK_IMPORTED_MODULE_15__["default"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: "pt-3",
            style: {
              fontFamily: 'Gilroy-Bold',
              fontSize: '24px',
              color: '#FFFFFF'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
              children: "Opps!"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: "pt-3",
            style: {
              fontFamily: 'Gilroy-Regular',
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.54)'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("span", {
              children: ["You loose the game, you choose the wrong word,", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("br", {}), "you wanna play again?"]
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
        className: "ml-0 mr-0",
        style: {
          height: '80px',
          background: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '0px 0px 15px 15px',
          textAlign: 'center'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
          className: "d-flex justify-content-center pt-3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
            style: {
              background: 'rgba(30, 185, 114, 0.05)',
              border: '1.5px solid rgba(30, 185, 114, 0.54)',
              width: '200px',
              fontFamily: 'Gilroy-SemiBold',
              borderRadius: '10px'
            },
            children: "Play Again"
          })
        })
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
          className: "flex-row justify-content-center align-items-center ml-3 mt-1 mb-4 mr-4",
          style: {
            height: '400px',
            background: '#018FF7',
            borderRadius: '5px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
            className: "p-3",
            children: wordButton.namef.map(function (_ref5) {
              var name = _ref5.name;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
                className: "pl-2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
                  style: {
                    background: 'rgba(255, 255, 255, 0.08)',
                    width: '110px',
                    borderColor: 'rgba(255, 255, 255, 0.1)'
                  },
                  children: name
                })
              });
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
            className: "p-3",
            children: wordButton.names.map(function (_ref6) {
              var name = _ref6.name;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
                className: "pl-2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
                  style: {
                    background: 'rgba(255, 255, 255, 0.08)',
                    width: '110px',
                    borderColor: 'rgba(255, 255, 255, 0.1)'
                  },
                  children: name
                })
              });
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
            className: "p-3",
            children: wordButton.named.map(function (_ref7) {
              var name = _ref7.name;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
                className: "pl-2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
                  style: {
                    background: 'rgba(255, 255, 255, 0.08)',
                    width: '110px',
                    borderColor: 'rgba(255, 255, 255, 0.1)'
                  },
                  children: name
                })
              });
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
            className: "p-3",
            children: wordButton.nameh.map(function (_ref8) {
              var name = _ref8.name;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
                className: "pl-2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
                  style: {
                    background: 'rgba(255, 255, 255, 0.08)',
                    width: '110px',
                    borderColor: 'rgba(255, 255, 255, 0.1)'
                  },
                  children: name
                })
              });
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
          className: "flex-row justify-content-center align-items-center p-4  ",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: "p-2 w-100 mr-1",
            style: {
              textAlign: 'center',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '7px'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
              className: "m-3",
              style: {
                width: '325px',
                background: '#1EB972',
                borderWidth: '0px',
                fontFamily: 'Gilroy-SemiBold'
              },
              onClick: startClick,
              children: "Start"
            })
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActivityFourPage);

/***/ })

}]);