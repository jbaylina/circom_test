"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var circom = require('circom');
var libsemaphore = require('libsemaphore');
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var leaves, tree, index, leaf, path, circuit, circuitInputs, witness, circuit2, witness_1, e_1, simpleCircuit, witness_2, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                leaves = [1, 2, 3, 4].map(BigInt);
                return [4 /*yield*/, libsemaphore.genTree(2, leaves)];
            case 1:
                tree = _a.sent();
                index = 2;
                leaf = leaves[index];
                return [4 /*yield*/, tree.path(index)];
            case 2:
                path = _a.sent();
                return [4 /*yield*/, circom.tester('./circuit_works.circom')];
            case 3:
                circuit = _a.sent();
                circuitInputs = {
                    leaf: leaf,
                    path_elements: path.path_elements,
                    path_index: path.path_index
                };
                return [4 /*yield*/, circuit.calculateWitness(circuitInputs)];
            case 4:
                witness = _a.sent();
                return [4 /*yield*/, circuit.checkConstraints(witness)];
            case 5:
                _a.sent();
                return [4 /*yield*/, circuit.loadSymbols()];
            case 6:
                _a.sent();
                console.log('circuit_works.json is OK');
                _a.label = 7;
            case 7:
                _a.trys.push([7, 11, , 12]);
                return [4 /*yield*/, circom.tester('./circuit_bad.circom')];
            case 8:
                circuit2 = _a.sent();
                return [4 /*yield*/, circuit2.calculateWitness(circuitInputs)];
            case 9:
                witness_1 = _a.sent();
                return [4 /*yield*/, circuit2.checkConstraints(witness_1)];
            case 10:
                _a.sent();
                return [3 /*break*/, 12];
            case 11:
                e_1 = _a.sent();
                console.log('circuit_bad.json is not OK');
                console.log(e_1);
                return [3 /*break*/, 12];
            case 12: return [4 /*yield*/, circom.tester('./circuit_simple.circom')];
            case 13:
                simpleCircuit = _a.sent();
                _a.label = 14;
            case 14:
                _a.trys.push([14, 18, , 19]);
                return [4 /*yield*/, simpleCircuit.calculateWitness({})];
            case 15:
                witness_2 = _a.sent();
                return [4 /*yield*/, simpleCircuit.checkConstraints(witness_2)];
            case 16:
                _a.sent();
                return [4 /*yield*/, simpleCircuit.loadSymbols()];
            case 17:
                _a.sent();
                return [3 /*break*/, 19];
            case 18:
                e_2 = _a.sent();
                console.log('circuit_simple.json is not OK');
                console.log(e_2);
                return [3 /*break*/, 19];
            case 19: return [2 /*return*/];
        }
    });
}); };
main();
//# sourceMappingURL=index.js.map