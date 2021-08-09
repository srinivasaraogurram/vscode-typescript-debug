import { Greeter } from '../src/greeter'
import * as cancelEvent from "../src/data/bulk-cancel-event.json";
import * as makeUpEvent from "../src/data/bulk-mkup-event.json";

let greeter = new Greeter("Welcome, to ts debug");
greeter.greet('Sri')
//let cancelDataEvent = cancelEvent.arguments.input
//greeter.processTCACancelService(cancelDataEvent);
let makeUpDataEvent = makeUpEvent.arguments.input
greeter.processTCAMakeUpService(makeUpDataEvent);
greeter.executeCodeBlock();