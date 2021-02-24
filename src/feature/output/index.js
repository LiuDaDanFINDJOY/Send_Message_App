import PicOutput from "./PicOutput.jsx";
import TextOutput from "./TextOutput.jsx";
import SystemReverse from "./SystemReverse.jsx";
import SystemInvite from "./SystemInvite.jsx";
import { MESSAGE_TYPE } from "../types";

const outputTypeMap = new Map([
  [MESSAGE_TYPE.TEXT, TextOutput],
  [MESSAGE_TYPE.PIC, PicOutput],
  [MESSAGE_TYPE.SYSTEM_REVERT, SystemReverse],
  [MESSAGE_TYPE.SYSTEM_INVITE, SystemInvite],
]);

export default outputTypeMap;
