/*jslint eqeq: true, plusplus: true, undef: true, sloppy: true, vars: true, forin: true */
(function ($) {
    var ms = $.mobiscroll,
        defaults = {
            invalid: [],
            showInput: false,
            inputClass: ''
        },
        preset =  function (inst) {
            var s = $.extend({}, defaults, inst.settings),
                elm = $(this),
                input,
                prevent,
                id = this.id + '_dummy',
                lvl = 0,
                ilvl = 0,
                timer = {},
                wa = s.wheelArray || createWheelArray(elm),
                labels = generateLabels(lvl),
                currWheelVector = [],
                fwv = firstWheelVector(wa),
                w = generateWheelsFromVector(fwv, lvl);

            /**
             * Disables the invalid items on the wheels
             * @param {Object} dw - the jQuery mobiscroll object
             * @param {Number} nrWheels - the number of the current wheels
             * @param {Array} whArray - The wheel array objects containing the wheel tree
             * @param {Array} whVector - the wheel vector containing the current keys
             */
            function setDisabled(dw, nrWheels, whArray, whVector) {
                var i = 0;
                while (i < nrWheels) {
                    var currWh = $('.dwwl' + i, dw),
                        inv = getInvalidKeys(whVector, i, whArray);
                    $.each(inv, function (i, v) {
                        $('.dw-li[data-val="' + v + '"]', currWh).removeClass('dw-v');
                    });
                    i++;
                }
            }

            /**
             * Returns the invalid keys of one wheel as an array
             * @param {Array} whVector - the wheel vector used to search for the wheel in the wheel array
             * @param {Number} index - index of the wheel in the wheel vector, that we are interested in
             * @param {Array} whArray - the wheel array we are searching in
             * @return {Array} - list of invalid keys
             */
            function getInvalidKeys(whVector, index, whArray) {
                var i = 0,
                    n,
                    whObjA = whArray,
                    invalids = [];

                while (i < index) {
                    var ii = whVector[i];
                    //whObjA = whObjA[ii].children;
                    for (n in whObjA) {
                        if (whObjA[n].key == ii) {
                            whObjA = whObjA[n].children;
                            break;
                        }
                    }
                    i++;
                }
                i = 0;
                while (i < whObjA.length) {
                    if (whObjA[i].invalid) {
                        invalids.push(whObjA[i].key);
                    }
                    i++;
                }
                return invalids;
            }

            /**
             * Creates a Boolean vector with true values (except one) that can be used as the readonly vector
             * n - the length of the vector
             * i - the index of the value that's going to be false
             */
            function createROVector(n, i) {
                var a = [];
                while (n) {
                    a[--n] = true;
                }
                a[i] = false;
                return a;
            }

            /**
             * Creates a labels vector, from values if they are defined, otherwise from numbers
             * l - the length of the vector
             */
            function generateLabels(l) {
                var a = [],
                    i;
                for (i = 0; i < l; i++) {
                    a[i] = s.labels && s.labels[i] ? s.labels[i] : i;
                }
                return a;
            }

            /**
             * Creates the wheel array from the vector provided
             * wv - wheel vector containing the values that should be selected on the wheels
             * l - the length of the wheel array
             */
            function generateWheelsFromVector(wv, l, index) {
                var i = 0, j, obj, chInd,
                    w = [{}],
                    wtObjA = wa;

                if (l) { // if length is defined we need to generate that many wheels (even if they are empty)
                    for (j = 0; j < l; j++) {
                        w[j] = {};
                        w[j][labels[j]] = {}; // each wheel will have a label generated by the generateLabels method
                    }
                }
                while (i < wv.length) { // we generate the wheels until the length of the wheel vector
                    w[i] = {};
                    w[i][labels[i]] = getWheelFromObjA(wtObjA);

                    j = 0;
                    chInd = undefined;

                    while (j < wtObjA.length && chInd === undefined) {
                        if (wtObjA[j].key == wv[i] && ((index !== undefined && i <= index) || index === undefined)) {
                            chInd = j;
                        }
                        j++;
                    }

                    if (chInd !== undefined && wtObjA[chInd].children) {
                        i++;
                        wtObjA = wtObjA[chInd].children;
                    } else if ((obj = getFirstValidItemObjOrInd(wtObjA)) && obj.children) {
                        i++;
                        wtObjA = obj.children;
                    } else {
                        return w;
                    }
                }
                return w;
            }

            /**
             * Returns the first valid Wheel Node Object or its index from a Wheel Node Object Array
             * getInd - if it is true then the return value is going to be the index, otherwise the object itself
             */
            function getFirstValidItemObjOrInd(wtObjA, getInd) {
                if (!wtObjA) {
                    return false;
                }

                var i = 0,
                    obj;

                while (i < wtObjA.length) {
                    if (!(obj = wtObjA[i++]).invalid) {
                        return getInd ? i - 1 : obj;
                    }
                }
                return false;
            }

            function getWheelFromObjA(objA) {
                var wheel = {},
                    j = 0;

                while (j < objA.length) {
                    wheel[objA[j].key] = objA[j++].value;
                }
                return wheel;
            }

            /**
             * Hides the last i number of wheels
             * i - the last number of wheels that has to be hidden
             */
            function hideWheels(dw, i) {
                $('.dwc', dw).css('display', '').slice(i).hide();
            }

            /**
             * Generates the first wheel vector from the wheeltree
             * wt - the wheel tree object
             * uses the lvl global variable to determine the length of the vector
             */
            function firstWheelVector(wa) {
                var t = [],
                    ndObjA = wa,
                    obj,
                    ok = true,
                    i = 0;

                while (ok) {
                    obj = getFirstValidItemObjOrInd(ndObjA);
                    t[i++] = obj.key;
                    if (ok = obj.children) {
                        ndObjA = obj.children;
                    }
                }
                return t;
            }

            /**
             * Calculates the level of a wheel vector and the new wheel vector, depending on current wheel vector and the index of the changed wheel
             * wv - current wheel vector
             * index - index of the changed wheel
             */
            function calcLevelOfVector2(wv, index) {
                var t = [],
                    ndObjA = wa,
                    lvl = 0,
                    next = false,
                    i,
                    childName,
                    chInd;

                if (wv[lvl] !== undefined && lvl <= index) {
                    i = 0;

                    childName = wv[lvl];
                    chInd = undefined;

                    while (i < ndObjA.length && chInd === undefined) {
                        if (ndObjA[i].key == wv[lvl] && !ndObjA[i].invalid) {
                            chInd = i;
                        }
                        i++;
                    }
                } else {
                    chInd = getFirstValidItemObjOrInd(ndObjA, true);
                    childName = ndObjA[chInd].key;
                }

                next = chInd !== undefined ? ndObjA[chInd].children : false;

                t[lvl] = childName;

                while (next) {
                    ndObjA = ndObjA[chInd].children;
                    lvl++;
                    next = false;
                    chInd = undefined;

                    if (wv[lvl] !== undefined && lvl <= index) {
                        i = 0;

                        childName = wv[lvl];
                        chInd = undefined;

                        while (i < ndObjA.length && chInd === undefined) {
                            if (ndObjA[i].key == wv[lvl] && !ndObjA[i].invalid) {
                                chInd = i;
                            }
                            i++;
                        }
                    } else {
                        chInd = getFirstValidItemObjOrInd(ndObjA, true);
                        chInd = chInd === false ? undefined : chInd;
                        childName = ndObjA[chInd].key;
                    }
                    next = chInd !== undefined && getFirstValidItemObjOrInd(ndObjA[chInd].children) ? ndObjA[chInd].children : false;
                    t[lvl] = childName;
                }
                return {
                    lvl: lvl + 1,
                    nVector: t
                }; // return the calculated level and the wheel vector as an object
            }

            function createWheelArray(ul) {
                var wheelArray = [];

                lvl = lvl > ilvl++ ? lvl : ilvl;

                ul.children('li').each(function (index) {
                    var that = $(this),
                        c = that.clone();

                    c.children('ul,ol').remove();

                    var v = c.html().replace(/^\s\s*/, '').replace(/\s\s*$/, ''),
                        inv = that.data('invalid') ? true : false,
                        wheelObj = {
                            key: that.data('val') || index,
                            value: v,
                            invalid: inv,
                            children: null
                        },
                        nest = that.children('ul,ol');

                    if (nest.length) {
                        wheelObj.children = createWheelArray(nest);
                    }

                    wheelArray.push(wheelObj);
                });

                ilvl--;
                return wheelArray;
            }

            $('#' + id).remove(); // Remove input if exists

            if (s.showInput) {
                input = $('<input type="text" id="' + id + '" value="" class="' + s.inputClass + '" readonly />').insertBefore(elm);
                inst.settings.anchor = input; // give the core the input element for the bubble positioning

                if (s.showOnFocus) {
                    input.focus(function () {
                        inst.show();
                    });
                }
            }

            if (!s.wheelArray) {
                elm.hide().closest('.ui-field-contain').trigger('create');
            }
            
            return {
                width: 50,
                wheels: w,
                headerText: false,
                onBeforeShow: function (dw) {
                    var t = inst.temp;
                    currWheelVector = t.slice(0);
                    inst.settings.wheels = generateWheelsFromVector(t, lvl, lvl);
                    prevent = true;
                },
                onSelect: function (v, inst) {
                    if (input) {
                        input.val(v);
                    }
                },
                onChange: function (v, inst) {
                    if (input && s.display == 'inline') {
                        input.val(v);
                    }
                },
                onClose: function () {
                    if (input) {
                        input.blur();
                    }
                },
                onShow: function (dw) {
                    $('.dwwl', dw).bind('mousedown touchstart', function () {
                        clearTimeout(timer[$('.dwwl', dw).index(this)]);
                    });
                },
                validate: function (dw, index, time) {
                    var t = inst.temp;
                    if ((index !== undefined && currWheelVector[index] != t[index]) || (index === undefined && !prevent)) {
                        inst.settings.wheels = generateWheelsFromVector(t, null, index);
                        var args = [],
                            i = (index || 0) + 1,
                            o = calcLevelOfVector2(t, index);
                        if (index !== undefined) {
                            inst.temp = o.nVector.slice(0);
                        }
                        while (i < o.lvl) {
                            args.push(i++);
                        }
                        hideWheels(dw, o.lvl);
                        currWheelVector = inst.temp.slice(0);
                        if (args.length) {
                            prevent = true;
                            inst.settings.readonly = createROVector(lvl, index);
                            clearTimeout(timer[index]);
                            timer[index] = setTimeout(function () {
                                inst.changeWheel(args);
                                inst.settings.readonly = false;
                            }, time * 1000);
                            return false;
                        }
                        setDisabled(dw, o.lvl, wa, inst.temp);
                    } else {
                        var o = calcLevelOfVector2(t, t.length);
                        setDisabled(dw, o.lvl, wa, t);
                        hideWheels(dw, o.lvl);
                    }
                    prevent = false;
                }
            };
        };

    $.each(['list', 'image', 'treelist'], function (i, v) {
        ms.presets[v] = preset;
        ms.presetShort(v);
    });

})(Zepto);
